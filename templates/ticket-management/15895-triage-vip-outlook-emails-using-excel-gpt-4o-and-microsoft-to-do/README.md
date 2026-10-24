# 🎫 Triage VIP Outlook emails using Excel, GPT-4o and Microsoft To Do

> ⚡ **153 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls Microsoft Outlook every 5 minutes, deduplicates email threads, checks senders against a VIP list in Microsoft Excel, uses OpenAI (GPT-4o) to detect urgency, and creates a Microsoft To Do task for urgent VIP emails while emailing an admin on workflow errors.

## How it works
1. An Outlook trigger polls your inbox every 5 minutes and passes new emails downstream.
2. A deduplication node checks each email's conversation ID against a rolling in-memory list, dropping any threads already processed in a previous run. The list is capped at 100 entries.
3. The full priority sender list is read in a single batch from Microsoft Excel, building a fast lookup set of known email addresses — one API call, zero rate-limit risk.
4. A code node cross-references each email against the sender set, tags matches as priority, and filters out all non-priority emails so only relevant messages continue.
5. The HTML body of each priority email is stripped of markup and converted to clean plain text before being passed to the AI node.
6. GPT-4o analyzes the plain text and returns a structured JSON response with an is_urgent boolean and a short summary. A parse node cleans the output and maps both fields onto the item.
7. An IF node routes urgent emails to Microsoft To Do, creating a flagged task with the sender name and subject. Non-urgent emails exit silently with no action taken.

## Setup
1. Connect your Microsoft Outlook OAuth2 credential to both the Outlook Trigger node and the Send Error Email node. Replace admin@yourcompany.com in the error node with your actual admin address.
2. Connect your Microsoft Excel credential to the Excel: Read VIP Sheet node and point it to your priority sender workbook and sheet. Open the Code: Tag & Filter VIPs node and change the VIP_COLUMN value from 'email' to match your actual column header.
3. Connect your OpenAI credential to the AI: Analyze Urgency node, then connect your Microsoft To Do credential to the Create VIP To Do Task node and select the target task list.

## Requirements
- Microsoft Outlook OAuth2 account with inbox access
- Microsoft Excel file with a column of priority sender email addresses
- OpenAI API key with access to GPT-4o
- Microsoft To Do account with a configured task list

## Customization
- Change the polling interval in the Outlook Trigger node from 5 minutes to any frequency that suits your inbox volume.
- Rename the VIP_COLUMN variable in the Code: Tag & Filter VIPs node to match any column header in your Excel sheet.
- Modify the GPT-4o prompt in the AI: Analyze Urgency node to adjust what counts as urgent for your specific use case.
- Update the To Do task title template in the Create VIP To Do Task node to include additional fields such as the email summary or received date.

## Additional info
- The deduplication node uses n8n static workflow data to persist processed conversation IDs across runs. The list is capped at 100 entries and rotates automatically to prevent memory bloat.
- If the AI output cannot be parsed, the node defaults to is_urgent: false so the workflow never crashes on a malformed response.
- The Error Trigger node is a global catcher — it fires on any node failure in the workflow and sends a formatted alert email to the configured admin address.

## 🔗 Nodes Used

Microsoft Excel 365, Microsoft Outlook, Microsoft To Do, OpenAI, Microsoft Outlook Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
