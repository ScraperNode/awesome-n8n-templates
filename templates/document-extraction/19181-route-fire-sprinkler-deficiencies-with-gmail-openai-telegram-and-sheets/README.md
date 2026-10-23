# 🔬 Route fire sprinkler deficiencies with Gmail, OpenAI, Telegram and Sheets

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for fire sprinkler inspection deficiency emails, uses OpenAI to classify severity, routes critical items to urgent email notice and standard items to Telegram (with optional fire marshal escalation), and logs every outcome to Google Sheets for AHJ resubmission tracking.

## How it works
1. Polls Gmail every 15 minutes for unread emails with subjects matching “deficiency” or “sprinkler inspection.”
2. Extracts and normalizes the email subject, sender address, body text, and a received timestamp.
3. Calculates candidate compliance deadlines (24 hours for critical, 30 days for standard) and flags possible repeat violations based on keywords in the email text.
4. Uses OpenAI to classify the deficiency text into life-safety critical, standard violation, or informational/cosmetic.
5. For life-safety critical items, sends an emergency corrective notice via Gmail to the building owner including the 24-hour AHJ filing deadline.
6. For standard violations, sends a corrective work-order alert via Telegram and, when flagged as a repeat violation, also emails the local fire marshal/AHJ contact via Gmail.
7. Merges all branch outcomes and appends a single audit row to a Google Sheets “AHJ Compliance Log.”

## Setup
1. Connect Gmail OAuth2 and confirm the trigger inbox and search query match how inspectors send deficiency reports.
2. Add an OpenAI API credential for the classifier’s chat model.
3. Add a Telegram Bot API credential and set the compliance manager Telegram chat ID.
4. Connect Google Sheets OAuth2 and select the target spreadsheet and sheet for the AHJ Compliance Log.
5. Replace the placeholder recipient addresses for the building owner and local fire marshal/AHJ contact in the outgoing Gmail messages.

## Requirements
- Gmail Account: Connected to the Watch Inspector Deficiency Emails trigger node, Send Emergency Corrective Notice, and Escalate to Fire Marshal nodes.
- OpenAI API: Bound to the OpenAI Chat Model subnode (gpt-5-mini) to power the text classification node.
- Telegram Bot API: Attached bot token and compliance manager chat ID configured on the Send 30-Day Corrective Work Order Alert node.
- Google Sheets: Connected account with an active spreadsheet selected in the Append AHJ Compliance Log Row node.

## Customization
- Notification Channels: Swap the Telegram alert node for Slack or Microsoft Teams channels.
- Category Expansion: Extend the Classify Deficiency Severity node to include custom categories like antifreeze_or_backflow with dedicated action branches.
- Deadline Logic: Modify the 24-hour and 30-day constants in the Compute AHJ Deadline Candidates Code node to match local AHJ code cycles.
- Dual Storage: Branch the merged audit stream into an n8n Data Table alongside Google Sheets for fast dashboard queries.
- Vertical Adaptation: Adapt the same classification skeleton for fire alarm or kitchen-hood suppression inspection reports.

## Additional info
Resilience & Retries: External action nodes (Gmail, Telegram, Google Sheets) use continueRegularOutput with 3 retries at 2-second intervals to prevent failed sends from stopping the audit log write.

API Cost Efficiency: Uses a short prompt and low token cost with one OpenAI classification call per inspection email.

Data Privacy: Only deficiency text and inspector details are processed by OpenAI—building floor plans and occupant data are excluded.

Known Limitations: The repeat-violation flag uses keyword heuristics in the email text rather than a database lookup against historical filings. Deadline math assumes NFPA-25 standards; verify against local jurisdiction requirements.

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Gmail Trigger, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
