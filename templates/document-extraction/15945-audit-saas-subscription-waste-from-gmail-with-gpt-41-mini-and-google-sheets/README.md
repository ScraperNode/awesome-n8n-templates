# 🔬 Audit SaaS subscription waste from Gmail with GPT-4.1-mini and Google Sheets

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs on a schedule to scan Gmail for subscription and billing emails, uses OpenAI GPT-4.1-mini to extract and classify SaaS spend and potential waste, upserts results into Google Sheets, and emails an HTML digest report via Gmail.


## How it works
1. Runs on a monthly schedule trigger (configurable to weekly) to start an inbox audit.
2. Searches Gmail for the last 30 days of messages that match billing, invoice, subscription, renewal, payment, and re-engagement keywords.
3. Filters out marketing noise and keeps only messages that look like real billing signals, then fetches each email’s full body from Gmail.
4. Uses an OpenAI GPT-4.1-mini agent to determine whether each email is billing-related, extract structured subscription fields (like vendor, amount, cycle, and renewal date), and optionally call back into Gmail search and message retrieval to confirm details and usage signals.
5. Cleans and validates the AI-produced JSON, recalculates annualized cost, and routes low-confidence or parse-failed items for review.
6. Upserts one row per vendor into a Google Sheets “Dashboard” tab and then builds a branded HTML report summarizing total spend and flagged waste categories.
7. Sends the HTML digest report to the configured recipient using Gmail.

## Setup
1. Connect Gmail OAuth2 credentials for the Gmail search, message retrieval, and report-sending steps, and set the recipient address in the Gmail send action.
2. Add an OpenAI API credential and ensure the agent uses the GPT-4.1-mini model.
3. Connect Google Sheets OAuth2 credentials, set your Google Sheet document ID, and create a “Dashboard” sheet with columns matching the extracted fields (with Vendor used as the upsert key).
4. If you want the agent to use Gmail search as a tool, set the tool workflow ID for the Gmail Search sub-workflow and ensure the sub-workflow’s Gmail node uses the same Gmail credential.
5. Update the schedule interval (monthly by default) and optionally customize the Gmail search query keywords and the HTML report branding values.

## Requirements
- Active n8n instance (self-hosted or cloud)
Gmail account containing subscription and billing emails
OpenAI account with GPT-4.1-mini API access
Google Sheets with a tab named Dashboard
Google Sheets with a tab named Dashboard



## Customization
- Change the scan frequency — edit the schedule in node 1 from monthly to weekly using cron expression 0 9 * * 1
Extend the Gmail search window — change newer_than:30d in node 2 to newer_than:60d or newer_than:90d to catch quarterly and annual billing cycles
Add noise filter terms — add words like trial or free plan to the drop array in node 3 to exclude free-tier emails from AI analysis
Add a Slack alert — after the Gmail send step, add a Slack node to post High Priority flagged vendors and their annual cost to a team channel
Update brand name in report — find const brand = 'YOUR_BRAND_NAME' in the Build HTML Report code and replace it with your actual name


## Additional info
This workflow includes an embedded sub-workflow (visible at the bottom of the canvas) that handles Gmail search queries called by the AI Agent tool. Both workflows must be imported and activated separately. Activate the sub-workflow before the main workflow.

The AI agent uses up to 4 Gmail tool calls per email to confirm amounts, find renewal dates, and check for re-engagement emails that signal an unused subscription.

Gmail image-only billing emails where the amount appears in a graphic rather than text will consistently score below the 0.60 confidence threshold and route to review. Those rows are still saved to the sheet for manual verification.

## 🔗 Nodes Used

Google Sheets, Gmail, Execute Workflow Trigger, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
