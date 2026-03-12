# 🧾 Automate invoice processing with Gmail, OCR.space, Slack & Xero

> ⚡ **483 views** · 🧾 [Invoice Processing](../)

## Description

**How It Works**

1. **Trigger**: Watches for new emails in Gmail with PDF/image attachments.  
2. **OCR**: Sends the attachment to OCR.space API (https://ocr.space/OCRAPI) to extract invoice text.  
3. **Parsing**: Extracts key fields:  
   - Vendor  
   - Invoice number  
   - Amount  
   - Currency  
   - Invoice date  
   - Due date  
   - Description  
4. **Validation Logic**:  
   - Checks if amount is valid  
   - Ensures vendor and invoice number are present  
   - Flags high-value invoices (e.g., over $10,000)  
5. **Routing**:  
   - If invalid: 
   - Sends a Slack message highlighting issues
   - Labels email as **Rejected**  
   - If valid:  
     - Logs the invoice into Google Sheets  
     - Sends a Slack message to the finance team for approval  
     - After approval, creates a draft invoice in Xero  
     - Labels the email as **Processed** in Gmail  
________________________________________
**Set up steps**

•	Estimated setup time: 45-60 mins
•	You’ll need connected credentials for Gmail, Slack, Google Sheets, and Xero
•	Replace the default API key for OCR.space with your own (in the HTTP Request node)
•	Update Slack channel IDs and label IDs to match your workspace
•	Adjust invoice validation rules as needed (e.g. currency, red flag conditions)

All detailed explanations and field mappings are provided in sticky notes within the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Xero, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
