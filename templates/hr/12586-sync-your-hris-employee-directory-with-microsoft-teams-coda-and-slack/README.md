# 👥 Sync your HRIS employee directory with Microsoft Teams, Coda, and Slack

> ⚡ **108 views** · 👥 [HR & Recruitment](../)

## Description

# Employee Directory Sync – Microsoft Teams & Coda

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow keeps your employee directory perfectly synchronized across your HRIS (or any REST-compatible HR database), Microsoft Teams, Coda docs, and Slack channels. It automatically polls the HR system on a schedule, detects additions or updates, and propagates those changes to downstream tools so everyone always has the latest employee information.

## Pre-conditions/Requirements

### Prerequisites
- An active n8n instance (self-hosted or n8n cloud)
- ScrapeGraphAI community node installed
- A reachable HRIS API (BambooHR, Workday, Personio, or any custom REST endpoint)
- Existing Microsoft Teams workspace and a team/channel for announcements
- A Coda account with an employee directory table
- A Slack workspace and channel where directory updates will be posted

### Required Credentials
- **Microsoft Teams OAuth2** – To post adaptive cards or messages
- **Coda API Token** – To insert/update rows in your Coda doc
- **Slack OAuth2** – To push notifications into a Slack channel
- **HTTP Basic / Bearer Token** – For your HRIS REST endpoint
- **ScrapeGraphAI API Key** – (Only required if you scrape public profile data)

### HRIS Field Mapping
| HRIS Field | Coda Column | Teams/Slack Field |
|------------|-------------|-------------------|
| `firstName`| `First Name`| First Name        |
| `lastName` | `Last Name` | Last Name         |
| `email`    | `Email`     | Email             |
| `title`    | `Job Title` | Job Title         |
| `department`| `Department`| Department        |

*(Adjust the mapping in the Set and Code nodes as needed.)*

## How it works

This workflow keeps your employee directory perfectly synchronized across your HRIS (or any REST-compatible HR database), Microsoft Teams, Coda docs, and Slack channels. It automatically polls the HR system on a schedule, detects additions or updates, and propagates those changes to downstream tools so everyone always has the latest employee information.

## Key Steps:
- **Schedule Trigger**: Fires daily (or at your chosen interval) to start the sync routine.
- **HTTP Request**: Fetches the full list of employees from your HRIS API.
- **Code (Delta Detector)**: Compares fetched data with a cached snapshot to identify new hires, departures, or updates.
- **IF Node**: Branches based on whether changes were detected.
- **Split In Batches**: Processes employees in manageable sets to respect API rate limits.
- **Set Node**: Maps HRIS fields to Coda columns and Teams/Slack message fields.
- **Coda Node**: Upserts rows in the employee directory table.
- **Microsoft Teams Node**: Posts an adaptive card summarizing changes to a selected channel.
- **Slack Node**: Sends a formatted message with the same update.
- **Sticky Note**: Provides inline documentation within the workflow for maintainers.

## Set up steps

**Setup Time: 10-15 minutes**

1. **Import the workflow** into your n8n instance.
2. **Open Credentials** tab and create:
   - Microsoft Teams OAuth2 credential.
   - Coda API credential.
   - Slack OAuth2 credential.
   - HRIS HTTP credential (Basic or Bearer).
3. **Configure the HRIS HTTP Request node**  
   - Replace the placeholder URL with your HRIS endpoint (e.g., `https://api.yourhr.com/v1/employees`).
   - Add query parameters or headers as required by your HRIS.
4. **Map Coda Doc & Table IDs** in the Coda node.
5. **Select Teams & Slack channels** in their respective nodes.
6. **Adjust the Schedule Trigger** to your desired frequency.
7. **Optional**: Edit the Code node to tweak field mapping or add custom delta-comparison logic.
8. **Execute the workflow manually once** to verify proper end-to-end operation.
9. **Activate** the workflow.

## Node Descriptions

### Core Workflow Nodes:
- **Schedule Trigger** – Initiates the sync routine at set intervals.
- **HTTP Request (Get Employees)** – Pulls the latest employee list from the HRIS.
- **Code (Delta Detector)** – Stores the previous run’s data in workflow static data and identifies changes.
- **IF (Has Changes?)** – Skips downstream steps when no changes were detected, saving resources.
- **Split In Batches** – Iterates through employees in chunks (default 50) to avoid API throttling.
- **Set (Field Mapper)** – Renames and restructures data for Coda, Teams, and Slack.
- **Coda (Upsert Rows)** – Inserts new rows or updates existing ones based on email match.
- **Microsoft Teams (Post Message)** – Sends a rich adaptive card with the update summary.
- **Slack (Post Message)** – Delivers a concise change log to a Slack channel.
- **Sticky Note** – Embedded documentation for quick reference.

### Data Flow:
1. **Schedule Trigger** → **HTTP Request** → **Code (Delta Detector)**  
2. **Code** → **IF (Has Changes?)**  
   - If **No** → **End**  
   - If **Yes** → **Split In Batches** → **Set** → **Coda** → **Teams** → **Slack**

## Customization Examples

### Change Sync Frequency
```javascript
// Inside Schedule Trigger
{
  "mode": "everyDay",
  "hour": 6,
  "minute": 0
}
```

### Extend Field Mapping
```javascript
// Inside Set node
items[0].json.phone = item.phoneNumber ?? '';
items[0].json.location = item.officeLocation ?? '';
return items;
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "employee": {
    "id": "123",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane.doe@example.com",
    "title": "Senior Engineer",
    "department": "R&D",
    "status": "New Hire",
    "syncedAt": "2024-05-08T10:15:23.000Z"
  },
  "destination": {
    "codaRowId": "row_abc123",
    "teamsMessageId": "msg_987654",
    "slackTs": "1715158523.000200"
  }
}
```

## Troubleshooting

### Common Issues
1. **HTTP 401 from HRIS API** – Verify token validity and that the credential is attached to the HTTP Request node.
2. **Coda duplicates rows** – Ensure the key column in Coda is set to “Email” and the Upsert option is enabled.

### Performance Tips
- Cache HRIS responses in static data to minimize API calls.
- Increase the Split In Batches size only if your API rate limits allow.

**Pro Tips:**
- Use n8n’s built-in Version Control to track mapping changes over time.
- Add a second IF node to differentiate between “new hires” and “updates” for tailored announcements.
- Enable Slack’s “threaded replies” to keep your #hr-updates channel tidy.

## 🔗 Nodes Used

HTTP Request, Slack, Coda, Microsoft Teams, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
