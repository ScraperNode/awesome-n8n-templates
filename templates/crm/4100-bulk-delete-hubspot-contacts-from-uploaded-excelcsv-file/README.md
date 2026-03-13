# 🤝 Bulk delete HubSpot contacts from uploaded Excel/CSV file

> ⚡ **371 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Bulk Contact Deletion from HubSpot via Uploaded Excel / CSV File

This workflow allows you to automate the deletion of HubSpot contacts based on email addresses provided in an uploaded Excel (`.xlsx`) file. It's ideal for bulk-cleaning outdated or invalid contact data.

---

## ✅ Prerequisites

Before using this workflow, ensure you have the following:

- A valid **HubSpot App Token** with permissions to search and delete contacts.
- An Excel (`.xlsx`) file with a column labeled `emails` containing the contact emails to be deleted.
- n8n self-hosted or cloud environment with:
  - **Webhook** node enabled and accessible.
  - **HubSpot** node credentials configured.
- Basic familiarity with n8n node configuration for custom adjustments (optional).

---


## 📃Sample Document


![sample_xlsx_document.png](fileId:1323)

[Download](https://docs.google.com/spreadsheets/d/1PsulQO-io1VKokxeNgGA0oGc4QVYhLUJ/edit?usp=sharing&ouid=117854718738214515668&rtpof=true&sd=true)
---


## 🧠 n8n Workflow: Delete HubSpot Contacts from an Uploaded Excel File

This n8n workflow allows you to upload an Excel file containing contact email addresses. It will check each one in HubSpot and delete the contact if it exists.

---




## 🔗 Workflow Overview

### 📥 1. Trigger via Webhook (POST)
The workflow starts when a `.xlsx` file is uploaded via an HTTP `POST` request to the webhook. This Excel file should contain a column with contact email addresses.

---

### 📄 2. Extract Data from Excel
The uploaded file is parsed, and its rows are converted into structured JSON items, making each email address available for further processing.

---

### 🧹 3. Normalize Data
The data is cleaned and normalized — for example, mapping column headers (e.g., `emails`) into a standard `email` field, ensuring consistent downstream logic.

---

### 🔁 4. Loop Through Contacts
Each row (contact) is processed individually using batch looping. This allows for fine-grained error handling and sequential processing.

---

### 🔎 5. Search for Contact in HubSpot
For each contact, a search query is made in HubSpot based on the email address. The workflow only fetches the first result (if any).

---

### 🧪 6. Check if Contact Exists
An IF condition checks whether the contact was found (i.e., if a HubSpot contact ID exists):
- ✅ **Yes** → proceed to delete the contact.
- ❌ **No** → skip deletion and continue to the next.

---

### 🗑️ 7. Delete Contact
If a contact exists, it is deleted from HubSpot using its internal contact ID.

---

### 🛠️ 8. Optional Placeholder for Post-Processing
A placeholder node named **“Replace Me”** is included for any custom logic you may want to add after the deletion step, such as:
- Logging
- Notifications
- Writing to external storage

---

## ✅ Use Cases

- Bulk delete old or bounced email addresses from HubSpot.
- Clean up contacts based on external suppression lists.
- Automate regular CRM hygiene processes.

---

## 💡 Suggested Enhancements

- ✍️ Log results to Google Sheets or a database
- 📬 Send completion report via email or Slack
- 🔁 Add retry logic for temporary API failures
- 🔍 Validate email format before making requests

---

## 📎 Requirements

- n8n (self-hosted or cloud)
- HubSpot App Token (set up in n8n credentials)
- Excel file (.xlsx) with a column for `email`

---

## 📦 Files

No external files are required. All logic is contained within the n8n workflow.

---

## 🚀 Getting Started

1. Deploy the workflow in n8n.
2. Copy the webhook URL and use it in your app or API client (like Postman).
3. Upload an Excel file containing contact emails via POST request.
4. Watch as it searches and deletes matches in HubSpot.

## 🔗 Nodes Used

Webhook, HubSpot, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
