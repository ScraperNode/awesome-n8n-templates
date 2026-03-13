# 🎣 Validate email addresses with APILayer API

> ⚡ **323 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

## 📧 Email Validation Workflow Using APILayer API

This **n8n workflow** enables users to validate email addresses in real time using the [APILayer Email Verification API](https://apilayer.com/). It's particularly useful for preventing invalid email submissions during lead generation, user registration, or newsletter sign-ups, ultimately improving data quality and reducing bounce rates.

---

## ⚙️ Step-by-Step Setup Instructions

1. **Trigger the Workflow Manually:**
   - The workflow starts with the `Manual Trigger` node, allowing you to test it on demand from the n8n editor.

2. **Set Required Fields:**
   - The `Set Email & Access Key` node allows you to enter:
     - `email`: The target email address to validate.
     - `access_key`: Your personal API key from [apilayer.net](https://apilayer.com/).

3. **Make the API Call:**
   - The `HTTP Request` node dynamically constructs the URL:
     ```bash
     https://apilayer.net/api/check?access_key={{ $json.access_key }}&email={{ $json.email }}
     ```
   - It sends a GET request to the APILayer endpoint and returns a detailed response about the email's validity.

4. *(Optional)*: You can add additional nodes to filter, store, or react to the results depending on your needs.

---

## 🔧 How to Customize

- Replace the **manual trigger** with a webhook or schedule trigger to automate validations.
- Dynamically map the `email` and `access_key` values from previous nodes or external data sources.
- Add conditional logic to **filter out invalid emails**, log them into a database, or send alerts via Slack or Email.

---

## 💡 Use Case & Benefits

Email validation is crucial in maintaining a clean and functional mailing list. This workflow is especially valuable in:
- Sign-up forms where real-time email checks prevent fake or disposable emails.
- CRM systems to ensure user-entered emails are valid before saving them.
- Marketing pipelines to **minimize email bounce rates** and increase campaign deliverability.

Using APILayer’s trusted validation service, you can verify whether an email exists, check if it’s a role-based address (like `info@` or `support@`), and identify disposable email services—all with a simple workflow.

---

**Keywords**: email validation, n8n workflow, APILayer API, verify email, real-time email check, clean email list, reduce bounce rate, data accuracy, API integration, no-code automation

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
