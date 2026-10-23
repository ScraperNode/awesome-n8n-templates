# 🔬 Create purchase orders from Gmail using Groq LLM, Airtable, and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow pulls unread “purchase request” emails from Gmail, uses a Groq-hosted LLM to extract line items and urgency into structured JSON, matches items against an Airtable catalog to apply pricing and vendors, then logs approvals to Google Sheets and creates or flags purchase orders in Airtable.

## How it works
1. Starts manually and stores the current run timestamp for use on the next execution.
2. Fetches up to five unread Gmail messages with the subject filter “purchase request” and normalizes each email into raw request text plus the requester’s address.
3. Sends the freeform request text to a Groq chat model (via n8n’s LangChain integration) and parses the response into a strict JSON schema with urgency and itemized quantities.
4. Loads the approved item catalog from Airtable and performs fuzzy matching to assign SKUs, preferred vendors, and contract/standard pricing while calculating a total PO cost.
5. Routes the request based on whether any items failed to match, any items are ready for an automatic PO, or the request is marked urgent.
6. For matched requests, appends/updates an approval/audit entry in Google Sheets and then upserts an “Approved - Auto” purchase order record into Airtable.
7. For triage or urgent cases, creates or updates an Airtable purchase order record with a “Pending Triage” or “Pending Urgent Review” status.

## Setup
1. Connect Gmail OAuth credentials and ensure incoming requests use the expected subject filter (subject contains “purchase request”) and are left unread until processed.
2. Add a Groq API credential and confirm the selected chat model is available for your account.
3. Connect Airtable credentials and update the base/table IDs for both the catalog source and the purchase order destination.
4. Ensure the Airtable catalog includes fields used for matching and pricing (for example: Search Keywords or Item Name, SKU, Vendor ID/Vendor, Price, optional Contract Price, and optional Preferred Rank).
5. Connect Google Sheets credentials and update the spreadsheet/document ID, sheet tab, and column names used for the approval log.

## Additional info
## How To Customize Nodes

* **Adjusting the Matching Strictness**: Open the `Code: Match & Price Logic` node. Look for the threshold routing line: `if (highestScore >= 0.3 && bestMatch)`. Increase `0.3` to `0.5` or `0.6` if you want the system to be much stricter about what it auto-approves, effectively sending more items to manual triage.
* **Refining AI Instructions**: Open the `LLM: Parse Request` node. You can modify the system prompt ("You are a procurement parsing assistant...") to teach the AI to look for specific internal project codes, cost center numbers, or budget tags included in the freeform text.
* **Swapping the LLM**: While the workflow uses Groq for fast processing, you can delete the `Model: Groq LLM` node and replace it with an OpenAI, Anthropic, or local Ollama chat model node depending on your data privacy requirements.


## Add‑ons

* **Receipt & Invoice OCR**: Extend the workflow by adding an email attachment trigger combined with an OCR node (like Mindee or AWS Textract) to automate 3-way matching, validating these auto-generated POs against supplier invoices once they arrive.
* **Interactive Slack Approvals**: Instead of just sending an alert for triaged items, replace the standard Slack message node with a Slack Interactive Button node. This allows procurement managers to click "Approve" or "Reject" directly inside Slack, pushing the decision back into the workflow via a webhook.
* **Budget Threshold Guardrails**: Add an `If` node immediately after the Code matching logic to check if `po_total_cost` exceeds a specific limit (e.g., $1,000). Route high-value requests to managerial approval even if they perfectly match the catalog.


## Use Case Examples

* **IT Hardware Provisioning**: An employee messages Slack saying, "My mouse broke, need a new wireless one, preferably Logitech." The AI parses the need, matches it to your contracted Logitech MX Master in Airtable, and auto-orders it.
* **Software License Requests**: A team member emails requesting an immediate seat for Adobe Creative Cloud. The AI flags the `target_device_or_spec` as Adobe, matches the recurring contract price in the catalog, and issues the PO to IT for fulfillment.
* **Office Supplies Restocking**: An office manager sends a bulk freeform list of printer paper, whiteboard markers, and coffee beans. The flow parses the array of items, prices them out against your preferred office vendor, and logs the total cost to the centralized Google Sheet.
* **Urgent Contractor Tools**: A manager tags a request as "URGENT: Need server monitoring tools for new contractor starting today." The AI flags `is_urgent: true`, bypassing standard auto-approval and immediately pinging the procurement team's Slack with an urgent alert.
* **Marketing Asset Purchases**: The marketing team requests specific event booth materials. Because these highly customized items don't exist in the standard catalog, the fuzzy match scores them below the 0.3 threshold, automatically safely routing them to the "Requires Human Triage" queue.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Slack node fails to fetch history** | Incorrect Channel ID or missing app permissions. | Verify the Channel ID in the Slack node and ensure your Slack app has the `channels:history` scope and is invited to the target channel. |
| **LLM Output Parser throws an error** | The AI model hallucinated outside the requested JSON schema. | Try lowering the AI model's temperature, or switch to a strictly typed model (like OpenAI's `gpt-4o-mini`) to enforce strict JSON adherence. |
| **All requests route to manual triage** | Catalog search keywords in Airtable do not align with employee phrasing. | Open the `Code: Match & Price Logic` node and lower the threshold from `0.3`, or enrich your Airtable catalog's `Search Keywords` column with common synonyms. |
| **Duplicate processing of the same request** | The static data timestamp is not saving correctly. | Ensure the workflow is active. Static memory (`$getWorkflowStaticData`) only persists across executions when a workflow is formally activated, not during manual testing. |
| **Google Sheets log fails to update** | Column headers in the live sheet do not match node configuration. | Open `Sheets: Log Approval` and click "Refresh Schema". Ensure your live sheet contains exactly "Date", "Total Cost", "Matched SKUs", "Vendors", and "Status". |


## Need Help

Need assistance configuring this workflow for your specific ERP, setting up advanced 3-way matching for accounts payable, or adjusting the AI parsing logic to meet strict tax and regulatory compliance rules?

[WeblineIndia’s](https://www.weblineindia.com/) team of automation developers specializes in building robust, audit-ready n8n workflows tailored for the finance and procurement sectors. Whether you need to connect this workflow to custom legacy software or scale your automated invoice validation, [contact WeblineIndia](https://www.weblineindia.com/contact-us.html) to customize and deploy this solution for your organization.

## 🔗 Nodes Used

Airtable, Google Sheets, Gmail, Basic LLM Chain, Structured Output Parser, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
