# 🎣 Automate email discovery for companies with Anymail Finder, Google Sheets & Telegram alerts

> ⚡ **2,047 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

This automation **retrieves company information** from a Google Sheet, uses the Anymail Finder API to **discover email addresses associated with each company**, and then writes the results (including the email status) back into the same Google Sheet and send alert on **Telegram**.

---

### **Key Advantages**

* **✅ Automated Email Discovery:** No need for manual lookups—emails are found via the Anymail Finder API in bulk.
* **🔁 Seamless Google Sheets Integration:** Works directly with Google Sheets for input and output, allowing easy data management.
* **🧠 Smart Filtering:** Automatically classifies emails as valid, risky, or not found for quality control.
* **⚙️ Reusable & Scalable:** Can be run anytime with a manual trigger or expanded to handle thousands of records with minimal setup.
* **📊 Real-Time Updates:** Results are immediately reflected in your spreadsheet, streamlining lead generation and outreach workflows.
* **💸 Cost-Efficient:** Uses a free Anymail Finder trial or API key for testing and validation before scaling up.

---

### **How it Works**

This automated workflow finds email addresses for a list of companies using the Anymail Finder API and updates a Google Sheets document with the results.

1.  **Trigger & Data Retrieval:** The workflow starts manually. It first connects to a specified Google Sheet and retrieves a list of company leads that are marked for processing (where the "PROCESSING" column is empty).
2.  **Batch Processing & API Call:** The list of leads is then split into batches (typically one item at a time) to be processed individually. For each company, the workflow sends the "Company Name" and "Website" to the Anymail Finder API to search for a relevant email address.
3.  **Result Classification:** The API's response, which includes the found email and its status (e.g., `valid`, `risky`), is passed to a Switch node. This node routes the data down different paths based on the email status.
4.  **Sheet Update:** Depending on the status:
    *   **Valid/Risky Email:** The workflow updates the original Google Sheet row. It marks the "PROCESSING" column with an "x" and writes the found email address into the "EMAIL" column.
    *   **No Email Found:** The workflow also updates the sheet, marking "PROCESSING" with an "x" and leaving the "EMAIL" column empty to indicate no email was found.
5.  **Loop Completion:** After processing each item, the workflow loops back to process the next lead in the batch until all companies have been handled.
---


### **Set up Steps**

To use this workflow, you need to complete the following configuration steps:

1.  **Duplicate the Template Sheet:** Clone the provided Google Sheets template to your own Google Drive. This sheet contains the necessary columns ("COMPANY NAME", "WEBSITE", "EMAIL", "PROCESSING") for the workflow to function.

2.  **Get an API Key:** Sign up for a free trial at Anymail Finder to obtain your personal API key.

3.  **Configure Credentials in n8n:**
    *   **Google Sheets:** In both the "Get Leads" and update nodes, set up the Google Sheets OAuth2 credential to grant n8n access to your copied spreadsheet.
    *   **Anymail Finder:** In the "Email finder" HTTP Request node, create a new credential of type "HTTP Header Auth". Name it "Anymail Finder". In the "Name" field, enter `Authorization`. In the "Value" field, paste your Anymail Finder API key.

4.  **Update Sheet ID in Nodes:** In the n8n workflow, update all Google Sheets nodes ("Get Leads", "Email found", "Email not found") with the Document ID of your *cloned* Google Sheet. The Sheet ID can be found in your sheet's URL: `https://docs.google.com/spreadsheets/d/[YOUR_SHEET_ID_HERE]/edit...`.

5.  **Execute:** Once configured, add your list of companies and their websites to the sheet and run the workflow using the "Manual Trigger" node.


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
