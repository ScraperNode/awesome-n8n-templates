# ⚡ Automate daily Outlook calendar digests to Microsoft Teams

> ⚡ **1,736 views** · ⚡ [Personal Productivity](../)

## Description

### This workflow sends an automatic daily summary of your Microsoft Outlook calendar events into a Microsoft Teams channel. Perfect for team visibility or personal reminders.

This automation is ideal for team leads, project managers, and remote workers who need to keep stakeholders informed of scheduled events without manual effort. It saves time, ensures consistent communication, and reduces the chance of missing important meetings.

## How it works
**Scheduled Trigger**
- The workflow runs automatically every midnight (00:00 UTC).

**Create filter for "TODAY" value (Code Node)**
- The code node generates the date value for "today"
- Calculates UTC start and end of the current day
- Builds a Microsoft Graph-compatible filter string

**Microsoft Outlook Node: Get Today’s Events**
- Resource : Event  
- Operation : Get Many
- Uses {{ $json.filter }}, which is generated from today's date, to retrieve only relevant entries

**Format Events as HTML (Code Node)**
- Code node transforms each event into a formatted HTML message


**Meeting Time:** 2025-07-08T10:00:00Z  
**Subject:** Weekly Sync  
**Summary:**  
Discuss project milestones and blockers.


**Microsoft Teams Node: Send Summary Message**
- Chat Message | Create | Selected Channel | HTML content
- Uses the htmlMessage field from the previous node as the message body


## How to Use

1. **Import the Workflow**
   - Load the `.json` file into your n8n instance via “Import from File” or directly via the workflow UI.

2. **Set Up Credentials**
   - Go to **Credentials** in n8n.
     - Add or configure your **Microsoft Outlook OAuth2 API** credential.
     - Add or configure your **Microsoft Teams OAuth2 API** credential.
   - Assign these credentials to the corresponding nodes in the workflow.

3. **Adjust Timezone and Schedule**
   - Edit the **Schedule Trigger** node to reflect your local timezone or preferred time.

4. **Configure the Microsoft Outlook Node**
   - Ensure the correct Outlook calendar is targeted.
   - Confirm the `Get Many` node includes this expression in the filter field:
     ```handlebars
     {{ $json.filter }}
     ```

5. **Customize the HTML Output (Optional)**
   - Open the “Format Events” Code node to:
     - Add new fields like `Location`, `Organizer`, or `Attendees`.
     - Adjust date formatting to local time if needed.

6. **Target the Correct Teams Channel**
   - Open the **Microsoft Teams node**, select the team and channel where messages should be posted.
   - Message type must be set to `HTML` if sending formatted content.

7. **Test the Workflow**
   - Run it manually to verify:
     - Events are fetched correctly.
     - The message is well-formatted and appears in the correct Teams channel.
   - If you see no events, double-check the date filter logic or ensure events exist for today.

### Example Use Cases

- **Team Syncs**: Automatically notify your project channel every morning with today's meetings.
- **Remote Work**: Help remote teams stay aligned on shared calendars.
- **Personal Assistant**: Keep track of your own day’s agenda with an automatic Teams message.



## Requirements

- **Microsoft Outlook**
  - Account must have permission to access calendar events via Graph API.
  - OAuth2 credential must be configured in n8n Credential Manager.

- **Microsoft Teams**
  - Requires permission to post messages to specific channels.
  - OAuth2 credential must be configured and authorized.

## 🔗 Nodes Used

Microsoft Teams, Microsoft Outlook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
