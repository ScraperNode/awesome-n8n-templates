# ⚙️ Proxmox system monitor - VM status, host resources & temperature alerts via Telegram

> ⚡ **1,727 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Setup Instructions

## Overview

This n8n workflow monitors your Proxmox VE server and sends automated reports to Telegram every 15 minutes. It tracks VM status, host resource usage, temperature sensors, and detects recently stopped VMs.

## Prerequisites

### Required Software
- n8n instance (self-hosted or cloud)
- Proxmox VE server with API access
- Telegram account with bot created via BotFather
- lm-sensors package installed on Proxmox host

### Required Access
- Proxmox admin credentials (username and password)
- SSH access to Proxmox server
- Telegram Bot API token
- Telegram Chat ID

## Installation Steps

### Step 1: Install Temperature Sensors on Proxmox

SSH into your Proxmox server and run:

```bash
apt-get update
apt-get install -y lm-sensors
sensors-detect
```

Press ENTER to accept default answers during sensors-detect setup.

Test that sensors work:
```bash
sensors | grep -E 'Package|Core'
```

### Step 2: Create Telegram Bot

1. Open Telegram and search for BotFather
2. Send `/newbot` command
3. Follow prompts to create your bot
4. Save the API token provided
5. Get your Chat ID by sending a message to your bot, then visiting:
   ```
   https://api.telegram.org/bot&lt;YOUR_TOKEN&gt;/getUpdates
   ```
6. Look for "chat":{"id": YOUR_CHAT_ID in the response

### Step 3: Configure n8n Credentials

#### SSH Password Credential
1. In n8n, go to Credentials menu
2. Create new credential: SSH Password
3. Enter:
   - Host: Your Proxmox IP address
   - Port: 22
   - Username: root (or your admin user)
   - Password: Your Proxmox password

#### Telegram API Credential
1. Create new credential: Telegram API
2. Enter the Bot Token from BotFather

### Step 4: Import and Configure Workflow

1. Import the JSON workflow into n8n
2. Open the "Set Variables" node
3. Update the following values:
   - PROXMOX_IP: Your Proxmox server IP address
   - PROXMOX_PORT: API port (default: 8006)
   - PROXMOX_NODE: Node name (default: pve)
   - TELEGRAM_CHAT_ID: Your Telegram chat ID
   - PROXMOX_USER: Proxmox username with realm (e.g., root@pam)
   - PROXMOX_PASSWORD: Proxmox password

4. Connect credentials:
   - SSH - Get Sensors node: Select your SSH credential
   - Send Telegram Report node: Select your Telegram credential

5. Save the workflow
6. Activate the workflow

## Configuration Options

### Adjust Monitoring Interval

Edit the "Schedule Every 15min" node:
- Change `minutesInterval` value to desired interval (in minutes)
- Recommended: 5-30 minutes

### Adjust Recently Stopped VM Detection Window

Edit the "Process Data" node:
- Find line: `const fifteenMinutesAgo = now - 900;`
- Change 900 to desired seconds (900 = 15 minutes)

### Modify Temperature Warning Threshold

The workflow uses the "high" threshold defined by sensors.
To manually set threshold, edit "Process Data" node:
- Modify the temperature parsing logic
- Change comparison: `if (current &gt;= high)` to use custom value

## Testing

### Test Individual Components

1. Execute "Set Variables" node manually - verify output
2. Execute "Proxmox Login" node - check for valid ticket
3. Execute "API - VM List" - confirm VM data received
4. Execute complete workflow - check Telegram for message

### Troubleshooting

**Login fails:**
- Verify PROXMOX_USER format includes realm (e.g., root@pam)
- Check password is correct
- Ensure allowUnauthorizedCerts is enabled for self-signed certificates

**No temperature data:**
- Verify lm-sensors is installed on Proxmox
- Run `sensors` command manually via SSH
- Check SSH credentials are correct

**Recently stopped VMs not detected:**
- Check task log API endpoint returns data
- Verify VM was stopped within detection window
- Ensure task types qmstop or qmshutdown are logged

**Telegram not receiving messages:**
- Verify bot token is correct
- Confirm chat ID is accurate
- Check bot was started (send /start to bot)
- Verify parse_mode is set to HTML in Telegram node

---

# How It Works

## Workflow Architecture

The workflow executes in a sequential chain of nodes that gather data from multiple sources, process it, and deliver a formatted report.

### Execution Flow

```
Schedule Trigger (15min)
  - Set Variables
  - Proxmox Login (get authentication ticket)
  - Prepare Auth (prepare credentials for API calls)
  - API - VM List (get all VMs and their status)
  - API - Node Tasks (get recent task log)
  - API - Node Status (get host CPU, memory, uptime)
  - SSH - Get Sensors (get temperature data)
  - Process Data (analyze and structure all data)
  - Generate Formatted Message (create Telegram message)
  - Send Telegram Report (deliver via Telegram)
```

## Data Collection

### VM Information (Proxmox API)

Endpoint: `/api2/json/nodes/{node}/qemu`

Retrieves:
- Total VM count
- Running VM count
- Stopped VM count
- VM names and IDs

### Task Log (Proxmox API)

Endpoint: `/api2/json/nodes/{node}/tasks?limit=100`

Retrieves recent tasks to detect:
- qmstop operations (VM stop commands)
- qmshutdown operations (VM shutdown commands)
- Task timestamps
- Task status

### Host Status (Proxmox API)

Endpoint: `/api2/json/nodes/{node}/status`

Retrieves:
- CPU usage percentage
- Memory total and used (in GB)
- System uptime (in seconds)

### Temperature Data (SSH)

Command: `sensors | grep -E 'Package|Core'`

Retrieves:
- CPU package temperature
- Individual core temperatures
- High and critical thresholds

## Data Processing

### VM Status Analysis

1. Counts total, running, and stopped VMs
2. Queries task log for stop/shutdown operations
3. Filters tasks within 15-minute window
4. Extracts VM ID from task UPID string
5. Matches VM ID to VM name from VM list
6. Calculates time elapsed since stop operation

### Temperature Intelligence

The workflow implements smart temperature reporting:

**Normal Operation (all temps below high threshold):**
- Calculates average temperature across all cores
- Displays min, max, and average values
- Example: "Average: 47.5 C (Min: 44.0 C, Max: 52.0 C)"

**Warning State (any temp at or above high threshold):**
- Displays all temperature readings in detail
- Shows full sensor output with thresholds
- Changes section title to "Temperature Warning"
- Adds fire emoji indicator

### Resource Calculation

**CPU Usage:**
- API returns decimal (0.0 to 1.0)
- Converted to percentage: `cpu * 100`

**Memory:**
- API returns bytes
- Converted to GB: `bytes / (1024^3)`
- Calculates percentage: `(used / total) * 100`

**Uptime:**
- API returns seconds
- Converted to days and hours: `days = seconds / 86400`, `hours = (seconds % 86400) / 3600`

## Report Generation

### Message Structure

The Telegram message uses HTML formatting for structure:

1. **Header Section**
   - Report title
   - Generation timestamp

2. **Virtual Machines Section**
   - Total VM count
   - Running VMs with checkmark
   - Stopped VMs with stop sign
   - Recently stopped count with warning
   - Detailed list if VMs stopped in last 15 minutes

3. **Host Resources Section**
   - CPU usage percentage
   - Memory used/total with percentage
   - Host uptime in days and hours

4. **Temperature Section**
   - Smart display (summary or detailed)
   - Warning indicator if thresholds exceeded
   - Monospace formatting for sensor output

### HTML Formatting Features

- Bold tags for headers and labels
- Italic for timestamps
- Code blocks for temperature data
- Unicode separators for visual structure
- Emoji indicators for status (checkmark, stop, warning, fire)

## Security Considerations

### Credential Storage

- Passwords stored in n8n Set node (encrypted in database)
- Alternative: Use n8n environment variables
- Recommendation: Use Proxmox API tokens instead of passwords

### API Communication

- HTTPS with self-signed certificate acceptance
- Authentication via session tickets (15-minute validity)
- CSRF token validation for API requests

### SSH Access

- Password-based authentication (can use key-based)
- Commands limited to read-only operations
- No privilege escalation required

## Performance Impact

### API Load

- 3 API calls per execution (VM list, tasks, status)
- Lightweight endpoints with minimal data
- 15-minute interval reduces server load

### Execution Time

Typical workflow execution: 5-10 seconds
- Login: 1-2 seconds
- API calls: 2-3 seconds
- SSH command: 1-2 seconds
- Processing: less than 1 second

### Resource Usage

- Minimal CPU impact on Proxmox
- Small memory footprint
- Negligible network bandwidth

## Extensibility

### Adding Additional Metrics

To monitor additional data points:

1. Add new API call node after "Prepare Auth"
2. Update "Process Data" node to include new data
3. Modify "Generate Formatted Message" for display

### Integration with Other Services

The workflow can be extended to:
- Send to Discord, Slack, or email
- Write to database or log file
- Trigger alerts based on thresholds
- Generate charts or graphs

### Multi-Node Monitoring

To monitor multiple Proxmox nodes:
1. Duplicate API call nodes
2. Update node names in URLs
3. Merge data in processing step
4. Generate combined report

## 🔗 Nodes Used

HTTP Request, Telegram, SSH, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
