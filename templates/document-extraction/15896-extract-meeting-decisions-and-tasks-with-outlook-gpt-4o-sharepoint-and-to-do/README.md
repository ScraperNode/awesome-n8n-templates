# 🔬 Extract meeting decisions and tasks with Outlook, GPT-4o, SharePoint, and To Do

> ⚡ **155 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow polls Outlook for meeting summary emails, uses GPT-4o to extract strategic decisions and action items from the transcript, logs decisions to a SharePoint list, creates Microsoft To Do tasks with normalized due dates, and sends failure alerts via Outlook email if any node errors occur.

## How it works
1. An Outlook trigger polls for new emails from a configured bot sender address every 15 minutes and passes matching messages downstream.
2. A deduplication node checks each email's conversation ID against a rolling in-memory list and drops any threads already processed in a previous run. The list is capped at 100 entries and rotates automatically.
3. The HTML body of each email is stripped of markup and converted to clean plain text before being passed to the AI node.
4. GPT-4o analyzes the plain text transcript and returns a structured JSON object containing two arrays: Strategic_Decisions and Action_Items.
5. A parse node strips any markdown fences from the AI output, splits the two arrays, and routes them to separate output branches — decisions to SharePoint, action items to the due date normalizer.
6. Each strategic decision is logged as a new item in the configured SharePoint list for permanent team-level record keeping.
7. Action item due dates are normalized from YYYY-MM-DD to the dateTimeTimeZone format Microsoft Graph requires, then each action item is created as a dated Microsoft To Do task with assignee and deadline included

## Setup
1. Replace bot@yourcompany.com in the Outlook Trigger sender filter with the actual address your meeting bot uses to send transcript emails.
2. Connect your Microsoft Outlook OAuth2 credential to both the Outlook Trigger node and the Send Error Email node. Replace admin@yourcompany.com in the error node with your actual admin address.
3. Connect your OpenAI credential to the Extract Insights via AI node. The prompt expects the AI to return a JSON object with Strategic_Decisions and Action_Items arrays — adjust the prompt if your meeting bot structures summaries differently.
4. Connect your Microsoft SharePoint credential to the Log to SharePoint List node and configure the target site ID and list ID where decisions should be stored.
5. Connect your Microsoft To Do credential to the Create To Do Tasks node and replace YOUR_TODO_LIST_ID with your actual task list ID. In the Parse & Route Arrays node settings, set the number of outputs to 2 so the split routing works correctly.

## Requirements
- Microsoft Outlook OAuth2 account with inbox access and a configured meeting bot sender address
- OpenAI API key with access to GPT-4o
- Microsoft SharePoint site with a list configured to receive decision records
- Microsoft To Do account with a task list ready to receive action items

## Customization
- Change the polling interval in the Outlook Trigger node from 15 minutes to any frequency that matches your meeting cadence.
- Adjust the DEADLINE_HOUR_UTC constant in the Normalize Due Date node to set task deadlines in your team's local timezone. Default is 14:00 UTC (17:00 EEST).
- Modify the GPT-4o prompt in the Extract Insights via AI node to match the structure of your meeting bot's email format or extract additional fields beyond decisions and action items.
- Add a Slack or Teams notification node after the SharePoint and To Do branches to alert the team when new decisions or tasks have been created.

## Additional info
- The Parse & Route Arrays node must have its output count set to 2 manually in the node settings tab on the canvas. This is not configurable from the parameters panel and is easy to miss during setup.
- If the AI output cannot be parsed, the node defaults to empty arrays for both Strategic_Decisions and Action_Items so the workflow never crashes on a malformed response.
- Due dates must be in YYYY-MM-DD format in the AI output. The Normalize Due Date node silently skips any value that does not match this pattern, leaving the task without a deadline rather than failing.

## 🔗 Nodes Used

Microsoft Outlook, Microsoft To Do, OpenAI, Microsoft Outlook Trigger, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
