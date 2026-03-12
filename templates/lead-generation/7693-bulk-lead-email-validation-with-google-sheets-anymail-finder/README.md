# 🎣 Bulk lead email validation with Google Sheets & Anymail Finder

> ⚡ **509 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow automates the **process of validating email addresses** stored in a **Google Sheets file** by using the Anymail Finder API.

---

###  Key Advantages

* ✅ **Automated Lead Validation**
  No need for manual copy-paste or bulk uploads emails are verified directly inside your existing Google Sheets.

* 🔎 **Improved Data Quality**
  Ensures your CRM or outreach campaigns only target **valid and deliverable email addresses**, reducing bounce rates.

* 🔄 **Real-Time Updates**
  Results are automatically updated in the spreadsheet, making it easy for your team to see which leads are safe to contact.

* 📈 **Improves lead quality** for outreach, reduces bounce rates
---

Of course. Here is a description of the provided n8n workflow.

### **Workflow Description: Verify Leads Email Address with Anymail Finder**

This workflow automates the process of checking the validity of email addresses from a Google Sheets list using the Anymail Finder API and writing the results back to the sheet.

---

### **How It Works**

The workflow operates in a loop to process a list of leads from a Google Sheet one by one.

1.  **Manual Trigger:** The workflow is started manually by a user within n8n.
2.  **Get Leads:** The "Get Leads" node reads data from a specified Google Sheet. It is configured with a filter to only fetch rows where the "VERIFY" column is empty, ensuring it only processes new leads that haven't been checked yet.
3.  **Loop Over Items:** The "Split In Batches" node is used to iterate over each row (lead) retrieved from the Google Sheet. This sends each lead individually to the next node for processing.
4.  **Check Email Status:** For each lead, the "HTTP Request" node sends a `POST` request to the Anymail Finder API (`/v5.1/verify-email`). The email address from the current sheet row (`$json["EMAIL "]`) is sent in the request body.
5.  **Update Email Status:** The response from Anymail Finder (which contains the verification status) is received. The "Update email status" node then takes this result and writes it back to the "VERIFY" column of the original Google Sheet. It uses the `row_number` to identify the correct row to update, ensuring data is placed accurately.

---

### **Set Up Steps**

To use this workflow, you need to configure the following credentials and nodes:

1.  **Google Sheets Credentials:**
    *   Create a credential named "Google Sheets account" of type `OAuth2`.
    *   Follow n8n's guide to authenticate with Google Sheets. This will give the workflow permission to read from and write to your spreadsheet.

2.  **Anymail Finder Credentials:**
    *   Create a credential named "Anymail Finder" of type `HTTP Header Auth`.
    *   In the "Name" field, enter `Authorization` (or the header name required by Anymail Finder's API documentation).
    *   In the "Value" field, enter your Anymail Finder API key (in the format `YOUR_API_KEY`).

3.  **Configure Google Sheet:**
    *   Ensure your Google Sheet has at least the following columns: `COMPANY NAME`, `EMAIL ` (note the space), and `VERIFY`.
    *   The "VERIFY" column must be empty for rows you want to verify. The "Get Leads" node is filtered to only process rows where this column is blank.

4.  **Activate and Execute:**
    *   Once the credentials are set and the sheet ID is configured, activate the workflow.
    *   Click on the "Manual Trigger" node and execute the workflow. It will begin processing all leads with an empty "VERIFY" field.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
