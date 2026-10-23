# 🤝 Detect and escalate Salesforce bottlenecks with Gemini, Slack, Gmail

> ⚡ **5 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily to scan open Salesforce opportunities and related tasks, detect overdue or high-priority internal dependencies, generate an AI-written escalation summary with Google Gemini, and then notify stakeholders via Slack and Gmail while updating the opportunity and logging the incident to Google Sheets.

## How it works
1. Runs every day at 9:00 to start a bottleneck check.
2. Retrieves all open Salesforce opportunities and Salesforce tasks linked to records, then matches tasks to their related opportunities.
3. Flags tasks as bottlenecks when they are overdue or high priority and still open, assigns a dependency type from the task subject (for example legal, proposal, technical, or finance), and calculates a severity level.
4. For each detected bottleneck, sends the opportunity and task context to Google Gemini to produce a JSON summary, escalation reason, recommended next action, owner team, and severity.
5. Sends a formatted bottleneck alert to a Slack channel and a plain-text escalation email via Gmail.
6. Updates the Salesforce opportunity Next Step field with the bottleneck details and appends an audit row to a Google Sheets log.

## Setup
1. Add Salesforce credentials with permission to query Opportunities and Tasks and to update Opportunities.
2. Add Google Gemini credentials for the chat model used to generate bottleneck summaries.
3. Add a Slack OAuth2 connection and select the channel where bottleneck alerts should be posted.
4. Add a Gmail connection and configure the recipient(s) for escalation emails in the Gmail node.
5. Add Google Sheets credentials and set the target spreadsheet and sheet tab used to append bottleneck audit rows.

## Additional info
## How To Customize Nodes

* **Detection Logic (Code Node)**
  Modify conditions for bottlenecks (e.g., include medium priority or custom SLA rules)

* **Dependency Classification**
  Update keyword matching logic to suit your business processes

* **AI Prompt**
  Customize instructions to refine outputs (e.g., tone, structure, or additional fields)

* **Slack Message Format**
  Adjust formatting or include/exclude fields based on team needs

* **Salesforce Update Field**
  Modify which field is updated (currently "Next Step")

* **Google Sheets Columns**
  Add/remove columns based on reporting requirements


## Add-ons & Enhancements

* Add Google Tasks for follow-up tracking
* Introduce retry logic for failed Slack/Gmail sends
* Add deduplication to avoid repeated alerts
* Include escalation workflows (e.g., manager alerts)
* Add dashboards using BI tools connected to Google Sheets


## Use Case Examples

1. Detect overdue legal reviews blocking deal closure
2. Identify high-priority proposal approvals not completed
3. Track finance approvals delaying revenue recognition
4. Alert teams about technical dependencies in late-stage deals
5. Maintain an audit trail of all escalated bottlenecks

There can be many more use cases depending on your internal processes.


## Troubleshooting Guide

| Issue                   | Possible Cause                   | Solution                                        |
| ----------------------- | -------------------------------- | ----------------------------------------------- |
| No data returned        | Salesforce query issue           | Verify SOQL queries and permissions             |
| AI output parsing fails | Invalid JSON from AI             | Check prompt formatting and enforce strict JSON |
| Slack message not sent  | Incorrect credentials or channel | Reconnect Slack and verify channel ID           |
| Email not delivered     | Gmail config issue               | Check Gmail OAuth and recipient field           |
| Salesforce update fails | Field length limit               | Ensure text is within 255 characters            |
| Missing bottlenecks     | Logic too strict                 | Adjust detection conditions in Code node        |


## Need Help?

If you need assistance setting up this workflow, customizing it for your business or [building advanced automation solutions](https://www.weblineindia.com/process-automation-solutions.html), feel free to reach out.

Contact WeblineIndia for:

* Workflow setup and deployment
* Custom AI automation solutions
* Salesforce and CRM integrations
* Advanced n8n workflow development

We are happy to help you scale your automation journey.

## 🔗 Nodes Used

Google Sheets, Slack, Salesforce, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
