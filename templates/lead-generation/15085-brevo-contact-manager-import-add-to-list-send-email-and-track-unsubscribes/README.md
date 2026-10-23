# 🎣  Brevo Contact Manager 📩: Import, Add to List, Send Email and Track Unsubscribes

> ⚡ **130 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow automates the process of **collecting contacts**, storing them in **Brevo**, and sending a welcome email, while also supporting bulk import from Google Sheets and unsubscribe tracking.

---

### Key Advantages

#### 1. ✅ Full automation of lead management

The workflow eliminates manual work by handling the entire lifecycle:

* Data collection → Contact creation → Email sending
  This ensures faster response times and no missed leads.

#### 2. ✅ Real-time and batch processing

It supports both:

* **Instant processing** (via form/webhook)
* **Bulk operations** (via Google Sheets)
  This makes it flexible for different use cases (landing pages, imports, CRM sync).

#### 3. ✅ Data consistency with “upsert”

Using the **upsert operation**, contacts are:

* Created if new
* Updated if already existing
  This prevents duplicates and keeps your database clean.

#### 4.✅  Seamless Brevo integration

The workflow directly interacts with Brevo APIs to:

* Manage contacts
* Assign them to lists
* Send transactional emails
  This centralizes marketing automation in one platform.

#### 5. ✅ Automated onboarding experience

New users instantly receive a **welcome email**, improving:

* User engagement
* First impression
* Conversion rates

#### 6. ✅ Scalable bulk processing

The loop system allows processing large datasets efficiently, making it suitable for:

* Campaign migrations
* CRM imports
* Lead enrichment
*
#### 7. ✅ Data tracking and feedback loop

By updating Google Sheets:

* Processed contacts are marked (“Done”)
* Unsubscribed users are tracked
  This creates a simple but effective **CRM feedback loop**.

#### 8. ✅ Event-driven unsubscribe handling

The workflow reacts automatically to unsubscribe events, ensuring:

* Compliance with email regulations (GDPR, etc.)
* Clean and updated contact lists


---

### How it works

This workflow aut*omates contact management and email communication using **Brevo** (formerly Sendinblue) and **Google Sheets**. It handles three main scenarios:

1. **Form submission or webhook trigger** – When a user submits a form or hits a webhook, their contact info (first name, last name, email) is upserted into Brevo, added to a specific list, and a welcome email is sent.

2. **Batch import from Google Sheets** – When manually executed, the workflow reads rows from a Google Sheet, loops through each row, upserts the contact into Brevo, adds them to a list, sends a welcome email, and marks the row as done in the sheet.

3. **Unsubscribe tracking** – When Brevo detects an unsubscribe event, the workflow updates the corresponding row in Google Sheets to mark the contact as unsubscribed.

The workflow ensures no duplicate contacts are created in Brevo (using upsert), and all actions are logged back into the Google Sheet.

---

### Set up steps

1. **Brevo credentials**  
   - Register and Create an API key in [Brevo for FREE](https://get.brevo.com/ntbswjrcxch3-5bwioc).  
   - In n8n, add a **SendInBlue API** credential (`sendInBlueApi`) and an **HTTP Header Auth** credential (`httpHeaderAuth`) using the same API key.

2. **Google Sheets credentials**  
   - Set up a **Google Sheets OAuth2 API** credential (`googleSheetsOAuth2Api`) in n8n.  
   - Ensure the Google account has access to the target spreadsheet.

3. **Google Sheets configuration**  
   - Use the provided spreadsheet ID.  
   - Columns expected: `First Name`, `Last Name`, `Email`, `Done`, `Unsubscribe`, `row_number`.  
   - The workflow uses `row_number` to update the correct row.

4. **Brevo template setup**  
   - Create a welcome email template in Brevo.  
   - Set the template ID to `1` (or update the workflow nodes with the correct ID).

5. **Form and webhook configuration**  
   - The form trigger is pre-configured with fields: `first_name`, `last_mail`, `email`.  
   - The webhook node is ready to receive POST requests at its path.  
   - Activate the workflow to expose the webhook URL.

6. **List ID configuration**  
   - The workflow adds contacts to Brevo list ID `3`.  
   - Replace this with your actual list ID if different.

7. **Activate workflow**  
   - Toggle the workflow to **active** to start listening for form submissions, webhook calls, and Brevo unsubscribe events.

8. **Manual execution for batch processing**  
   - Use the **"When clicking ‘Execute workflow’"** trigger to run the batch import from Google Sheets.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Brevo, Brevo Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
