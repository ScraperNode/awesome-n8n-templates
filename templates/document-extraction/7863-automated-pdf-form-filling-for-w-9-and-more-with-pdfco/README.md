# 🔬 Automated PDF form filling for W-9 and more with PDF.co

> ⚡ **529 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 🧑‍💻 Description
This workflow demonstrates how to take structured data (e.g., Name, Business, Address) and automatically fill a PDF form (IRS W-9) using **PDF.co** inside **n8n**.  

The workflow extracts values from a data source (e.g., Set node, database, or webhook), maps those values to fields in a PDF template, and generates a completed PDF. This can be adapted for contracts, invoices, HR forms, or any standardized documents that need automation.  

By chaining additional nodes, you can also **store completed PDFs in Google Drive/Dropbox, email them to recipients, or route them into CRM/ERP systems**.  

**Disclaimer: this template can only be used on self-hosted n8n instances**


![image.png](fileId:2207)


---

## ⚙️ Setup Instructions

### 1️⃣ Prepare Your Data
- Add a **Set** node (or connect to your data source such as Google Sheets, Airtable, or a webhook).  
- Define fields like:  
  - `Name`  
  - `Business`  
  - `Address`  
  - `CityState`  
- These fields will map directly to form fields in the PDF.

### 2️⃣ Connect PDF.co
1. Create a free account at [PDF.co](https://pdf.co/)  
2. Copy your **API Key** from the dashboard  
3. In **n8n → Credentials → New → PDF.co API**  
   - Paste your API Key → **Save**  
4. In the **PDF.co node**, select your credential and choose the **Fill a PDF Form** operation  
5. Map each field in your dataset to the corresponding PDF form field (e.g., `Name` → Line 1 on the W-9).  

---

## 📄 Example Form
This template uses the official IRS **W-9 PDF**:  
https://www.irs.gov/pub/irs-pdf/fw9.pdf  

Mapped fields include:  
- Name → Line 1  
- Business → Line 2  
- Address + City/State → Address block  

You can expand this by mapping additional fields such as **Tax Classification, Exemptions, TIN, and Signature**.  

---

## 🎛️ Customization Guidance
- **Different PDFs**: Swap the W-9 for any contract, invoice, or onboarding form your business uses.  
- **Dynamic Data Sources**: Replace the Set node with Google Sheets, Airtable, or API/Webhook inputs to pull live data.  
- **Automated Delivery**: After filling the form, use Email or Slack nodes to send PDFs directly to recipients.  
- **Document Storage**: Save completed PDFs automatically to Google Drive, Dropbox, or AWS S3.  
- **Bulk Processing**: Loop through rows of a dataset (e.g., customer list) to generate multiple personalized PDFs at once.  

---

## 📬 Contact
Need help customizing this workflow for contracts, invoices, or HR forms?  

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
