# 🧾 Match and approve invoices with Google Sheets, Groq Llama 3.3, Notion and Gmail

> ⚡ **25 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs daily to three-way match invoices against purchase orders and goods receipts in Google Sheets, using fuzzy similarity scoring plus Groq Llama 3.3 semantic checks to approve, reject with Gmail alerts, or escalate for a Notion-backed AI audit decision.

## How it works
1. Runs every day on a scheduled trigger and pulls Purchase Order, Goods Receipt, and Invoice rows from Google Sheets.
2. Filters to only invoices with status set to pending and an invoice amount greater than zero.
3. Normalizes item descriptions, matches each invoice to the best PO/GRN combination for the same vendor, and calculates a match score using hybrid token and Levenshtein similarity plus 5% amount tolerance checks.
4. Automatically approves high-scoring matches by updating the invoice status and match score in Google Sheets and logging the approval to a Notion database.
5. Rejects low-scoring matches by updating Google Sheets, sending a rejection email via Gmail with the score and reason, and archiving the case to Notion.
6. For mid-range scores, uses Groq Llama 3.3 to semantically confirm whether items refer to the same product and either approves the invoice or escalates it to an AI audit.
7. When escalated, retrieves past approved transactions for the vendor from Notion, has Groq Llama 3.3 produce a JSON decision (approved/review/rejected), then syncs the final status to Google Sheets and archives the decision to Notion.

## Setup
1. Add a Google Sheets OAuth credential and update the spreadsheet ID and sheet/tab names for Invoice, Purchase Order, and Goods Receipt.
2. Add a Groq API credential for the Llama 3.3 chat model used for semantic matching and audit decisions.
3. Add a Notion credential and set the target database ID with properties for invoice_id, vendor_id, decision, matchScore, reason, and timestamp.
4. Add a Gmail credential and set the recipient(s) for rejection alerts in the Gmail node.
5. Ensure your Invoice sheet includes matchable invoice_id values plus status and match_score columns, and that PO/GRN rows include vendor_id, po_id, and item/amount fields used by the matching logic.

## Additional info
## How To Customize Nodes

* **Adjusting Financial Tolerance:** 
Inside the `Merge & Similarity Scoring` code node, look for the line `const tolerance = inv.invoice_amount * 0.05;`. You can change `0.05` to `0.02` if you want a stricter 2% tolerance limit.

* **Adding Synonyms:** 
In that same code node, there is a `const synonyms` dictionary. You can easily add your own industry-specific terms here (e.g., `monitor: ["screen", "display"]`) to make the baseline scoring smarter.

* **Tweaking the AI Agent:** 
Open the `Analyze Discrepancy vs History` AI Agent node. You can modify the System Message to give the Llama 3.3 model specific instructions unique to your company's risk appetite.


## Add‑ons

* **Slack or Microsoft Teams Integration:** 
Swap out the Gmail node for a Slack or Teams node to send real-time chat alerts for rejected invoices to a dedicated finance channel.

* **ERP/Accounting Software Sync:** 
Instead of updating Google Sheets at the end of the workflow, add a QuickBooks Online or Xero node to directly create approved bills in your accounting software.

* **PDF OCR Extraction:** 
Add an Email Trigger and a Document Parser at the very beginning of the workflow to automatically extract text from PDF invoices emailed by vendors, feeding that data directly into the Sheets.


## Use Case Examples

1.  **Standard AP Automation:** 
Automatically approving recurring monthly utility or software vendor bills that rarely change in price or description.

2.  **E-commerce Inventory Reconciliation:** 
Matching digital purchase orders with warehouse receiving logs to ensure suppliers aren't overcharging for missing units.

3.  **Vendor Risk Management:** 
Catching "category creep," where a vendor approved to sell office supplies suddenly bills for high-end electronics, allowing the AI to flag the strange behavior based on historical data.

4.  **Supply Chain Discrepancy Resolution:** 
Automatically resolving minor wording variations in global shipping manifests (e.g., "Timber" vs "Wood") without needing a human to manually intervene.

5.  **Automated Financial Auditing:** 
Keeping a pristine, hands-off record in Notion of exactly *why* a payment was approved, complete with the math and AI reasoning, ready for tax season or internal audits.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Google Sheets nodes fail to fetch data** | Incorrect Document ID or revoked OAuth permissions. | Re-authenticate your Google credential in n8n. Verify the Document ID in the node settings matches your spreadsheet's URL. |
| **Workflow errors at the Merge & Scoring node** | Missing or incorrectly named columns in your Sheets. | Ensure your Sheets have exact column headers matching the code: `invoice_id`, `vendor_id`, `invoice_amount`, `items`, etc. |
| **AI Review marks everything as "Rejected"** | Groq Llama node is missing context or Notion history failed to load. | Check the `Fetch Historical Vendor Approvals` node to ensure it is actually pulling data. Review the AI Agent's prompt for over-strictness. |
| **Notion Archive nodes throw an error** | Database properties are misspelled or mismatched. | Check that your Notion DB has exact property types (e.g., `matchScore` must be a Number property, `decision` must be Rich Text). |
| **Emails are not sending** | Gmail node limits or credential token expiration. | Reconnect your Gmail account. Check your Google Workspace security settings to ensure n8n has permission to send emails on your behalf. |


## Need Help?

Building AI-powered financial automation requires precision. If you are struggling to map your specific spreadsheets, want to swap Google Sheets for a complex ERP like SAP or Oracle or need help customizing the Groq AI prompts for your specific industry, you don't have to do it alone. 

Reach out to the automation experts at **WeblineIndia**. Our [n8n workflow developers](https://www.weblineglobal.com/hire/n8n-developers/) can help you customize Add-Ons, troubleshoot data structures and build reliable, tailor-made n8n workflows that save your business hundreds of manual hours.

## 🔗 Nodes Used

Google Sheets, Gmail, Notion, Schedule Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
