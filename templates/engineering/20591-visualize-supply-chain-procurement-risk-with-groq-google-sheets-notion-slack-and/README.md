# ⚒️ Visualize supply chain procurement risk with Groq, Google Sheets, Notion, Slack and Gmail

> ⚡ **15 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This scheduled workflow pulls supply-chain master data from Google Sheets, builds a supplier–material–plant–logistics graph, scores single points of failure (SPOFs) with a VaR proxy, and uses Groq (LLM) to generate a risk brief before publishing results to Notion, Google Drive, Slack, Gmail, and a Sheets audit log.

## How it works
1. Runs every Monday at 08:00 and sets run configuration values such as VaR threshold, SPOF count threshold, alert email list, and a unique run ID.
2. Reads Suppliers, Materials, Logistics, and Plants tabs from Google Sheets and combines the datasets.
3. Validates that supplier/material data exists, normalizes the rows into a nodes-and-edges supply-chain graph, and scores SPOFs plus a VaR proxy and overall severity.
4. If no usable data/graph is produced, posts a failure message to Slack explaining what to fix.
5. If a graph exists, sends the scored results to a Groq-powered agent to produce a JSON risk brief (executive summary, top SPOFs, and mitigations) and parses the response.
6. Renders an SVG risk map from the graph, uploads it to Google Drive, and creates a Notion database page with the run metrics, summary, mitigations, and graph link.
7. When the run is flagged as alert-worthy, posts a Slack alert and emails a Gmail digest, then appends the run outcome (including Notion URL and alerted status) to a Google Sheets runlogs tab.

## Setup
1. Connect Google Sheets OAuth and update the spreadsheet/tab IDs for Suppliers, Materials, Logistics, Plants, and the runlogs audit sheet.
2. Add a Groq API credential for the LangChain agent and choose the model you want to use.
3. Connect Google Drive OAuth and set the destination folder ID used for uploading the SVG risk map.
4. Connect Notion credentials and select the target database (for example, “Supply Chain Risk Runs”) with matching properties for severity, counts, VaR, run ID, and graph URL.
5. Connect Slack credentials and set the target channel for failure notices and risk alerts.
6. Connect Gmail credentials and set the recipient list in the workflow configuration (alertEmails), plus adjust varThreshold/spofCountThreshold to fit your risk policy.

## Additional info
## How To Customize Nodes

* **Modify Triggers:** Open the `Schedule Trigger` node to change the CRON expression if you prefer daily or monthly reporting instead of weekly.
* **Adjust Risk Tolerance:** In the `Set Workflow Config` node, increase the `varThreshold` value if your organization has a higher financial tolerance for single points of failure.
* **Change the AI Model:** Click into the `Groq Chat Model` node to swap out `openai/gpt-oss-120b` for a different Groq-supported LLM, and adjust the temperature setting (currently `0.2`) to control AI creativity.
* **Customize Visuals:** Edit the `Code Render Graph SVG` code node to change the hex colors, fonts, or bounding box dimensions of the outputted supply chain map.
* **Tailor Slack Messages:** Open the `Slack Post Risk Alert` node to reformat the message text, which currently includes dynamic variables like severity, SPOFs, VaR, and the executive summary.


## Add‑ons

* **ERP Integration:** Connect an HTTP Request node to pull material costs and annual volumes directly from SAP or Oracle instead of relying on Google Sheets.
* **Jira/Linear Ticketing:** Add a node after the `IF Critical Risk` true branch to automatically generate a mitigation task for the procurement team.
* **SMS Notifications:** Integrate a Twilio node alongside the Slack and Gmail alert nodes to notify executives immediately when a critical threshold is breached.


## Use Case Examples

* **Logistics Disruption Monitoring:** Automatically identify and map high-risk transit lanes that have no secondary alternatives.
* **Sole-Source Vulnerability Detection:** Highlight specific materials provided by only one supplier to proactively negotiate dual-source contracts.
* **Weekly Executive Reporting:** Generate hands-free, AI-summarized executive briefs on supply chain health every Monday morning.
* **Financial Risk Proxy (VaR) Tracking:** Track the theoretical financial impact of disruptions based on annual spend and material criticality.
* **Automated Audit Logging:** Maintain a historical, compliant Google Sheets record of all network vulnerabilities over time without manual data entry.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Workflow stops at `IF Data Present` node** | Google Sheets nodes failed to find data in the specified tabs. | Verify your Google Sheets OAuth2 API credentials and ensure the sheet tabs are exactly named `Suppliers`, `Materials`, `Logistics`, and `Plants`. |
| **Slack receives a "Supply Chain workflow stopped" message** | The `Normalize` code node resulted in a graph with zero nodes. | Check your Google Sheet columns. Ensure columns like `supplier_id`, `material_id`, `lane_id`, and `plant_id` exist and contain data. |
| **AI Agent fails to output valid JSON** | Groq API rate limits reached, or the LLM hallucinated markdown formatting. | Check the `Code Parse Groq Payload` node, which already includes a fallback cleanup script to strip markdown fences. Verify your Groq API limits. |
| **No image in Notion or Gmail digest** | Google Drive upload failed or permissions are restricted. | Ensure the `Drive Upload Graph Image` node is connected to a shared folder and that Google Drive OAuth credentials are fully authorized. |


## Need Help?

Building robust automation requires fine-tuning to fit your exact business needs. If you need assistance setting up this workflow, configuring API credentials, customizing the custom JavaScript code nodes or integrating enterprise add-ons like ERP connectors and SMS alerts, please contact **WeblineIndia**. Our [n8n experts](https://www.weblineglobal.com/hire/n8n-developers/) are ready to lend a helping hand to build, customize and scale workflows tailored to your unique requirements.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
