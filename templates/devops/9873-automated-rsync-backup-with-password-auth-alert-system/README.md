# ⚙️ Automated rsync backup with password auth & alert system

> ⚡ **122 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Automated Rsync Backup with Password Auth & Alert System

## Overview
This n8n workflow provides automated rsync backup capabilities between servers using password authentication. It automatically installs required dependencies, performs the backup operation from a source server to a target server, and sends status notifications via Telegram and SMS.

## Features
- Password-based SSH authentication (no key management required)
- Automatic dependency installation (sshpass, rsync)
- Cross-platform support (Ubuntu/Debian, RHEL/CentOS, Alpine)
- Source-to-target backup execution
- Multi-channel notifications (Telegram and SMS)
- Detailed success/failure reporting
- Manual trigger for on-demand backups

## Setup Instructions

### Prerequisites
1. **n8n Instance**: Running n8n with Linux environment
2. **Server Access**: SSH access to both source and target servers
3. **Telegram Bot**: Created via @BotFather (optional)
4. **Textbelt API Key**: For SMS notifications (optional)
5. **Network**: Connectivity between n8n, source, and target servers

### Server Requirements
**Source Server:**
- SSH access enabled
- User with sudo privileges (for package installation)
- Read access to source folder

**Target Server:**
- SSH access enabled
- Write access to target folder
- Sufficient storage space

### Configuration Steps

#### 1. Server Parameters Configuration
Open the **Server Parameters** node and configure:

**Source Server Settings:**
- `source_host`: IP address or hostname of source server
- `source_port`: SSH port (typically 22)
- `source_user`: Username for source server
- `source_password`: Password for source user
- `source_folder`: Full path to folder to backup (e.g., `/home/user/data`)

**Target Server Settings:**
- `target_host`: IP address or hostname of target server
- `target_port`: SSH port (typically 22)
- `target_user`: Username for target server
- `target_password`: Password for target user
- `target_folder`: Full path to destination folder (e.g., `/backup/data`)

**Rsync Options:**
- `rsync_options`: Default is `-avz --delete`
  - `-a`: Archive mode (preserves permissions, timestamps, etc.)
  - `-v`: Verbose output
  - `-z`: Compression during transfer
  - `--delete`: Remove files from target that don't exist in source

#### 2. Notification Setup (Optional)

**Telegram Configuration:**
1. Create bot via @BotFather on Telegram
2. Get bot token (format: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)
3. Create notification channel
4. Add bot as administrator
5. Get channel ID:
   - Send test message to channel
   - Visit: `https://api.telegram.org/bot&lt;YOUR_BOT_TOKEN&gt;/getUpdates`
   - Find `"chat":{"id":-100XXXXXXXXXX}`

**SMS Configuration:**
1. Register at https://textbelt.com
2. Purchase credits
3. Obtain API key

**Update Notification Node:**
Edit **Process Finish Report --- Telegram & SMS** node:
- Replace `YOUR-TELEGRAM-BOT-TOKEN` with bot token
- Replace `YOUR-TELEGRAM-CHANNEL-ID` with channel ID
- Replace `+36301234567` with target phone number(s)
- Replace `YOUR-TEXTBELT-API-KEY` with Textbelt key

#### 3. Security Considerations
**Password Storage:**
- Consider using n8n credentials for sensitive passwords
- Avoid hardcoding passwords in workflow
- Use environment variables where possible

**SSH Security:**
- Workflow uses `StrictHostKeyChecking=no` for automation
- Consider adding known hosts manually for production
- Review firewall rules between servers

### Testing
1. Start with small test folder
2. Verify network connectivity: `ping source_host` and `ping target_host`
3. Test SSH access manually first
4. Run workflow with test data
5. Verify backup completion on target server

## How to Use

### Automatic Operation
Once activated, the workflow runs automatically:
- **Frequency**: Every days midnight

### Manual Execution
1. Open the workflow in n8n
2. Click on **Manual Trigger** node
3. Click "Execute Workflow"
4. Monitor execution progress

### Scheduled Execution
To automate backups:
1. Replace **Manual Trigger** with **Schedule Trigger** node
2. Configure schedule (e.g., daily at 2 AM)
3. Save and activate workflow

### Workflow Process

#### Step 1: Dependency Check
The workflow automatically:
1. Checks if sshpass is installed locally
2. Installs if missing (supports apt, yum, dnf, apk)
3. Checks sshpass on source server
4. Installs on source if needed (with sudo)

#### Step 2: Backup Execution
- Connects to source server via SSH
- Executes rsync command from source to target
- Uses password authentication for both connections
- Transfers data directly between servers (not through n8n)

#### Step 3: Status Reporting
**Success Message Format:**
```
[Timestamp] -- SUCCESS :: source_host:/path -&gt; target_host:/path :: [rsync output]
```

**Failure Message Format:**
```
[Timestamp] -- ERROR :: source_host -&gt; target_host :: [exit code] -- [error message]
```

### Rsync Options Guide

**Common Options:**
- `-a`: Archive mode (recommended)
- `-v`: Verbose output for monitoring
- `-z`: Compression (useful for slow networks)
- `--delete`: Mirror source (removes extra files from target)
- `--exclude`: Skip specific files/folders
- `--dry-run`: Test without actual transfer
- `--progress`: Show transfer progress
- `--bwlimit`: Limit bandwidth usage

**Example Configurations:**
```bash
# Basic backup
-avz

# Mirror with deletion
-avz --delete

# Exclude temporary files
-avz --exclude='*.tmp' --exclude='*.cache'

# Bandwidth limited (1MB/s)
-avz --bwlimit=1000

# Dry run test
-avzn --delete
```

### Monitoring

#### Execution Logs
- Check n8n Executions tab
- Review stdout for rsync details
- Check stderr for error messages

#### Verification
After backup:
1. SSH to target server
2. Check folder size: `du -sh /target/folder`
3. Verify file count: `find /target/folder -type f | wc -l`
4. Compare with source: `ls -la /target/folder`

### Troubleshooting

#### Connection Issues
**"Connection refused" error:**
- Verify SSH port is correct
- Check firewall rules
- Ensure SSH service is running

**"Permission denied" error:**
- Verify username/password
- Check user has required permissions
- Ensure sudo works (for installation)

#### Installation Failures
**"Unsupported package manager":**
- Workflow supports: apt, yum, dnf, apk
- Manual installation may be required for others

**"sudo: password required":**
- User needs passwordless sudo or
- Modify installation commands

#### Rsync Errors
**"rsync error: some files/attrs were not transferred":**
- Usually permission issues
- Check file ownership
- Review excluded files

**"No space left on device":**
- Check target server storage
- Clean up old backups
- Consider compression options

#### Notification Issues
**No Telegram message:**
- Verify bot token and channel ID
- Check bot is admin in channel
- Test with curl command manually

**SMS not received:**
- Check Textbelt credit balance
- Verify phone number format
- Review API key validity

### Best Practices

#### Backup Strategy
1. **Test First**: Always test with small datasets
2. **Schedule Wisely**: Run during low-traffic periods
3. **Monitor Space**: Ensure adequate storage on target
4. **Verify Backups**: Regularly test restore procedures
5. **Rotate Backups**: Implement retention policies

#### Security
1. **Use Strong Passwords**: Complex passwords for all accounts
2. **Limit Permissions**: Use dedicated backup users
3. **Network Security**: Consider VPN for internet transfers
4. **Audit Access**: Log all backup operations
5. **Encrypt Sensitive Data**: Consider rsync with encryption

#### Performance
1. **Compression**: Use `-z` for slow networks
2. **Bandwidth Limits**: Prevent network saturation
3. **Incremental Backups**: Rsync only transfers changes
4. **Parallel Transfers**: Consider multiple workflows for different folders
5. **Off-Peak Hours**: Schedule during quiet periods

### Advanced Configuration

#### Multiple Backup Jobs
Create separate workflows for:
- Different server pairs
- Various schedules
- Distinct retention policies

#### Backup Rotation
Implement versioning:
```bash
# Add timestamp to target folder
target_folder="/backup/data_$(date +%Y%m%d)"
```

#### Pre/Post Scripts
Add nodes for:
- Database dumps before backup
- Service stops/starts
- Cleanup operations
- Verification scripts

#### Error Handling
Enhance workflow with:
- Retry mechanisms
- Fallback servers
- Detailed error logging
- Escalation procedures

### Maintenance

#### Regular Tasks
- **Daily**: Check backup completion
- **Weekly**: Verify backup integrity
- **Monthly**: Test restore procedure
- **Quarterly**: Review and optimize rsync options
- **Annually**: Audit security settings

#### Monitoring Metrics
Track:
- Backup duration
- Transfer size
- Success/failure rate
- Storage utilization
- Network bandwidth usage

## Recovery Procedures

### Restore from Backup
To restore files:
```bash
# Reverse the rsync direction
rsync -avz target_server:/backup/folder/ source_server:/restore/location/
```

### Disaster Recovery
1. Document server configurations
2. Maintain backup access credentials
3. Test restore procedures regularly
4. Keep workflow exports as backup

## Support Resources
- Rsync documentation: https://rsync.samba.org/
- n8n community: https://community.n8n.io/
- SSH troubleshooting guides
- Network diagnostics tools

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
