# 🧾 Validate invoice readiness with Gmail, Google Sheets and Groq/OpenAI

> ⚡ **8 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors Gmail for invoice emails, extracts structured fields from attached PDFs using Groq LLMs, validates invoices against Purchase Orders stored in Google Sheets, predicts rejection risk with an LLM, emails suppliers about problems, and logs approved invoices to an AP tracking Google Sheet.

## How it works
1. Triggers every minute when a new invoice email arrives in Gmail.
2. Downloads the email attachment and extracts text from the invoice PDF.
3. Uses a Groq LLM chain to extract invoice fields (invoice/PO/GRN numbers, supplier details, currency, totals, and line items) into structured JSON.
4. Looks up the referenced PO in a Google Sheets PurchaseOrders table, rejecting the invoice via Gmail if no matching PO is found.
5. Merges the invoice data with the PO record and runs data integrity checks (required fields, non-zero amount, and PO status is Approved), emailing the supplier if validation fails.
6. Applies 3-way match rules against the PO (supplier, amount, currency, PO approval, and presence of GRN) to set the invoice status as APPROVED, FLAGGED, or REJECTED.
7. Uses an LLM to predict invoice rejection risk and, if risk is HIGH, emails the supplier a pre-submission warning, then routes approved invoices to a Google Sheets AP log and non-approved invoices to an AP manual-review Gmail alert.

## Setup
1. Connect Gmail credentials for the Gmail trigger and all Gmail send/get actions, and verify the sender/recipient rules you want to monitor.
2. Connect Google Sheets credentials and update the document IDs/sheet tabs for the PurchaseOrders lookup sheet and the Invoice Readiness logging sheet.
3. Provide Groq (or compatible) LLM credentials/models for both the invoice extraction and the risk prediction steps.
4. Ensure your PurchaseOrders sheet includes columns like po_number, supplier_name, currency, total_amount, and status (with "Approved" as the expected value).
5. Set the supplier email field in the invoice template (or adjust the email recipient mapping) so supplier notifications go to the correct address.

## Additional info
## How To Customize Nodes

* **Adjusting Match Rules:** Open the **3-Way Match Validator** node to edit the JavaScript logic (e.g., you can add a 5% "buffer" for price differences).
* **Switching AI Models:** You can replace the Groq/Llama nodes with OpenAI nodes if you prefer to use GPT-4o for extraction.
* **Email Templates:** The Gmail nodes use HTML templates. You can easily edit the colors, logos, and wording to match your company branding.


## Add‑ons

* **Slack/MS Teams Integration:** Replace the "Manual Review" email with a real-time notification in a dedicated finance chat channel.
* **Duplicate Detection:** Add a node to check your Google Sheet for existing Invoice Numbers to prevent paying the same bill twice.
* **Currency Conversion:** Integrate a currency API to validate invoices billed in foreign currencies against a base-currency PO.


## Use Case Examples

* **Supplier Compliance:** Automatically rejecting any invoice that doesn't reference a valid, approved PO.
* **Partial Shipment Handling:** Flagging invoices where the billed amount is less than the PO, requiring a human to verify if it’s a partial delivery.
* **Fraud Prevention:** Identifying "High Risk" invoices where the supplier's name or email does not perfectly match your approved vendor list.
* **Automated Data Entry:** Seamlessly moving data from a PDF attachment into a structured spreadsheet without typing a single character.
* **Proactive Supplier Support:** Automatically telling a supplier *exactly* why their invoice might be rejected before they have to call and ask.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Extraction Failed** | PDF is a low-quality scan or image. | Ensure the LLM node is using a vision-capable model or OCR is enabled in the PDF node. |
| **PO Not Found** | Leading/Trailing spaces in PO numbers in the Sheet. | Use the `.trim()` function in the Search ERP node filter. |
| **Credentials Error** | Gmail or Google Sheets token expired. | Re-connect your accounts in the n8n Credentials settings. |
| **AI Output is Malformed** | LLM did not return valid JSON. | Ensure the "Output Parser" is correctly connected and the prompt is set to "STRICT JSON." |


## Need Help?

Setting up automated financial workflows can be complex. If you need a helping hand to customize this workflow or connect it to a different ERP (like SAP, Oracle or QuickBooks) or build a completely custom automation solution, our [n8n workflow developers at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/) are here to help.

Our team of n8n experts can help you scale your business processes with high-precision AI integrations.

**[Contact WeblineIndia Today](https://www.weblineindia.com/contact-us.html)** to turn your manual tasks into automated wins!

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Basic LLM Chain, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
