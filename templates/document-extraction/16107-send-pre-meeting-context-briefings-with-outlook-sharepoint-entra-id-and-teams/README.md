# 🔬 Send pre-meeting context briefings with Outlook, SharePoint, Entra ID and Teams

> ⚡ **57 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every 30 minutes to scan VIP Microsoft Outlook calendars, look up attendee details in Microsoft Entra ID via Microsoft Graph, search SharePoint for related documents, and send a pre-meeting context briefing to a Microsoft Teams chat.

## How it works
1. Runs every 30 minutes and loads configuration such as the VIP mailbox list, time window, and Microsoft Teams chat destination.
2. Iterates through each VIP mailbox and retrieves up to 10 upcoming Microsoft Outlook calendar events.
3. Filters events starting soon and skips meetings that have already been briefed using workflow static data to prevent duplicates.
4. For each qualifying event, extracts attendee email addresses and fetches attendee profile details from Microsoft Entra ID using a Microsoft Graph $batch request (or skips the lookup if there are no attendees).
5. Builds a Microsoft Graph search query from the meeting subject and searches SharePoint for up to five recently modified related documents.
6. Compiles a briefing message with the meeting details, attendee profiles, related SharePoint documents, and the meeting description, then sends it to Microsoft Teams.
7. If the Teams message is sent successfully it marks the event as briefed; otherwise it posts an error alert to the same Teams chat.

## Setup
1. Add Microsoft Graph OAuth2 credentials with permission to read the target Outlook calendars, read user profiles in Entra ID, and run SharePoint search queries.
2. Add Microsoft Teams credentials with permission to post messages to the destination chat.
3. Update the Config values for VIP mailbox addresses, the Teams chat ID (and optional team/channel IDs), the recipient user ID, and any timing settings such as minutesBefore.

## Requirements
- Microsoft 365 Credentials: Active OAuth2 configurations in n8n for Microsoft Outlook, Microsoft Teams, and the Microsoft Graph API.
- Graph API Permissions: Your Entra ID app requires scopes for Calendars.Read (or similar calendar access), User.Read.All (for attendee batch lookups), and Files.Read.All (for Microsoft Search/SharePoint queries).
- Environment Configuration: Your n8n instance must allow the Luxon library. Ensure NODE_FUNCTION_ALLOW_EXTERNAL=luxon is set in your Docker/environment variables.
- Target IDs: You will need your target Microsoft Teams Chat ID and SharePoint Site ID ready to paste into the configuration node.

## Customization
- Targeting & Timing: Easily swap out the VIP mailbox array, Teams destination, and the "minutes before meeting" trigger window directly in the Set Config Parameters node.
- Attendee Enrichment: Modify the URL in the Build Attendee Request Payload node to pull additional Entra ID profile data points (like manager names or mobile numbers) into the Graph $batch request.
- Briefing Design: The final Teams output is compiled in the Compile Event Briefing node using standard Markdown. You can easily adjust the emojis, spacing, and data mapping to match your organization's brand standards.

## 🔗 Nodes Used

HTTP Request, Microsoft Teams, Microsoft Outlook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
