# 🎣 Auto-update Notion CRM and send email from Google Form submissions

> ⚡ **559 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

![This automation captures new Google Form responses, maps them into a Notion CRM database, and sends a Gmail confirmation to the submitter. Ideal for lead capture, onboarding, or internal team coor.png](1)

##  Who is this for?

This is for marketers, educators, HR teams, startups, and freelancers who use Google Forms to collect information and want to automatically send it to Notion while emailing the respondent.

---

##  What problem does it solve?

Manual data entry from Google Forms into CRMs is time-consuming. This template eliminates that, ensuring leads are captured in your Notion database in real time and respondents are notified instantly — improving speed and accuracy.

---

## What this workflow does?

* **Node 1 – Google Sheets Trigger**:
  Listens for new rows in the spreadsheet connected to your Google Form.
* **Node 2 – Notion**:
  Creates a new entry in your CRM-style Notion database.
* **Node 3 – Gmail**:
  Sends a confirmation email to the person who filled the form.

---

## 🛠 Setup Guide

### 1. Prepare Google Form and Sheets

* Create your Google Form.
* Connect it to a Google Sheet (Responses tab &gt; "Link to Sheets").

### 2. n8n - Google Sheets Trigger Setup

* Add `Google Sheets Trigger` node.
* Authentication: Use OAuth2 (preferred).
* Select your spreadsheet and worksheet.
* Trigger type: **On new row** (not "updated").

### 3. n8n - Notion Node

* Add `Notion` node (action: "Create Page").
* Connect your Notion integration:

  * In Notion, create a new integration and copy the token.
  * Share your CRM database with that integration.
* In the node, map form responses to your database properties:

  * e.g., `Name → Title`, `Email → Email`, etc.
  * Use `{{$json["Full Name"]}}` for mapped fields.
* Common error: Check Notion property types (email must be set to type: email).

### 4. n8n - Gmail Node (Optional Auto Reply)

* Add `Gmail` node (action: "Send Email").
* Auth: OAuth2 with your Gmail account.
* To: `{{$json["Email Address"]}}`
* Subject: `"Thanks for contacting us!"`
* Body:

  ```
  Hi {{$json["Full Name"]}},
  Thanks for reaching out via the form. We’ve received your info and will follow up soon!
  ```

---

## 🧩 How to Customize

* Replace Gmail with Outlook or SendGrid if needed.
* Map more fields into Notion like phone, tags, etc.
* Add Slack or Discord notifications for internal alerts.

---

## 🧾 SEO Optimized Title Suggestions

* Auto-sync Google Forms with Notion CRM and send a confirmation email
* Add Google Form leads to Notion and auto-send thank-you email via Gmail

---

## 📎 Required Permissions / Dependencies

* Google Sheets and Gmail authenticated in n8n
* Notion integration shared with your CRM database
* Enable “Impersonate User” if using Google Service Account

## 🔗 Nodes Used

Gmail, Notion, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
