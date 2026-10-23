# 🧾 Analyze invoice exceptions weekly and publish RCA reports with Groq and Notion

> ⚡ **7 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs weekly to pull invoice exception data from Google Sheets, uses Groq-hosted LLMs to generate root-cause analysis and upstream process fixes, then publishes a formatted report to a Notion database and posts a Slack notification.

## How it works
1. Runs every week on a schedule trigger.
2. Reads the latest invoice exception rows from Google Sheets and groups them by exception reason, calculating counts, total amounts, and listing invoice details.
3. Sends the grouped exception summary to a Groq chat model to produce a structured root-cause analysis by exception category.
4. Uses a second Groq chat model to generate structured, category-specific upstream process fixes based on the root-cause analysis.
5. Builds a Markdown report from the recommended fixes and converts it into native Notion block JSON.
6. Creates a new page in a Notion database, injects the generated blocks via the Notion API, and sends a Slack message to notify the team that the report is ready.

## Setup
1. Connect your Google Sheets account and update the spreadsheet ID and sheet selection used to fetch the invoice exception data.
2. Add a Groq API credential for the two LLM steps and confirm the selected models are available in your Groq account.
3. Add a Notion connection, set the target Notion database ID for page creation, and ensure the integration has access to the database.
4. Add a Slack connection and configure the target channel and message content in the Slack step.
5. Verify your Google Sheet includes the expected columns (for example, Exception_Reason, Amount, Invoice_ID, Vendor_Name, and Notes) so grouping and analysis work correctly.

## Additional info
## How To Customize Nodes

* **Tuning the Report Formatting:** The `Generate Markdown Report` node builds the text structure. You can edit the JavaScript here to add custom headers, include the total financial impact at the top of the report, or change how bullet points are displayed.
* **Adding New Notion Block Types:** The `Convert Markdown to Blocks` node translates text to Notion's JSON schema. If you want to add bold text parsing, checkboxes, or callout blocks, you can expand the `if/else` logic within this node's JavaScript.
* **Changing AI Models:** While the workflow uses Groq for speed, you can easily swap the `lmChatGroq` nodes for OpenAI, Anthropic, or local LLM nodes depending on your data privacy requirements.


## Add‑ons

To extend this workflow, consider adding the following features:

* **Task Creation:** Add a Jira or Asana node at the end of the workflow to automatically generate task tickets for the "High Priority" upstream fixes suggested by the AI.
* **Vendor Email Alerts:** Add a Gmail node to automatically send a polite warning email to vendors who are repeatedly flagged in the Root Cause Analysis for missing documentation.
* **Data Visualization:** Route the grouped exception metrics into a dashboard tool like Datadog, PowerBI, or Google Data Studio to track the financial impact over time.


## Use Case Examples

While tailored for invoice exceptions, this analytical architecture can be repurposed for:

* **Weekly Procurement Audits:** Analyzing why purchase orders are being delayed or rejected by department heads.
* **Customer Support Ticket Analysis:** Grouping weekly customer complaints and using AI to suggest upstream product fixes.
* **Supply Chain Bottlenecks:** Tracking shipping delays and utilizing the dual-LLM setup to propose alternative logistics routing.
* **Software Bug Triage:** Fetching weekly bug reports, grouping them by feature, and generating a weekly technical debt report in Notion.
* *(There are countless ways to utilize this group-and-analyze pattern!)*


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Workflow fails at "Group Exceptions"** | The Google Sheet column names do not match the expected schema. | Check your sheet. The code specifically looks for `Exception_Reason`, `Amount`, `Invoice_ID`, `Vendor_Name`, and `Notes`. |
| **"Extract: Fixes Data" outputs empty arrays** | Your exception categories do not match the default strings. | Update the exact text strings (e.g., "Missing PO") in the Set node to perfectly match the data coming from your Google Sheet. |
| **Notion HTTP Request node returns an error** | Missing Notion API version header, or incorrect block schema. | Ensure the Header `Notion-Version` is set to a valid date (e.g., `2026-09-15`). Verify the Notion integration has edit access to the target page. |
| **AI nodes time out or fail** | Groq API rate limits or complex JSON parsing failure. | Check your API limits. Ensure you are using the specific models designated (`gpt-oss-120b` and `qwen3.8-27b`) or equivalent models that support strict structured output. |


## Need Help?

Building AI-driven analytical pipelines requires precise prompt engineering, robust data parsing and a solid understanding of external APIs like Notion.

If you need assistance configuring this workflow, customizing the JavaScript nodes for your specific data schema or building tailored automation solutions for your enterprise, please [reach out to WeblineIndia](https://www.weblineindia.com/contact-us.html). Our n8n team of technical automation experts at WeblineIndia is ready to help you implement, scale and maintain high-impact workflows tailored to your unique business needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Notion, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
