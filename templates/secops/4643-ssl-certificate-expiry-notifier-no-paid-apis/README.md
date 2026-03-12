# 🔒 Ssl certificate expiry notifier (no paid APIs)

> ⚡ **4,383 views** · 🔒 [SecOps & Security Automation](../)

## Description

Great — here’s a complete **Workflow Description** for your **n8n Creator submission** based on the JSON you shared:

---

### 🔒 **SSL Expiry Notifier (No Paid APIs)**

---

#### 🧩 **How it Works**

This workflow automatically checks SSL certificate expiry dates for a list of websites and sends timely email alerts if any certificate is close to expiring. It’s ideal for DevOps, IT Operations, or Web Admin teams to stay ahead of certificate issues —
 **without relying on any paid API services**.

Here's the high-level logic:

1. **Trigger**: Runs daily at 8 AM using the Schedule Trigger node.
2. **Fetch URLs**: Reads URLs to monitor from a Google Sheet.
3. **Check SSL**: Calls the free `ssl-checker.io` API to retrieve SSL certificate details (valid from, valid till, days left).
4. **Conditional Check**: Filters any certificates expiring in 7 days or less.
5. **Send Email**: Sends a styled HTML email alert to predefined recipients.
6. **Update Sheet**: Updates the same Google Sheet with the latest SSL info for each domain.

---

#### ⚙️ **Set Up Steps (Quick Overview)**

🕐 Estimated setup time: \~10–15 minutes

1. **Connect Google Sheets** – OAuth2 credentials required. Sheet must include a column titled `URL` with domains to monitor.
2. **Set Up SMTP** – Add your email credentials under the SMTP node to enable notifications.
3. **Optional** – Customize the threshold days in the "Expiry Alert" IF node if you want alerts for a different timeframe.
4. **Deploy and Activate** – That’s it. Once active, the flow runs automatically every day.

💡 Detailed field mappings and logic notes are included inside the workflow as sticky notes.

---
### 🚀 Ready to Get Started?

Let’s start your journey on n8n by [**creating your free account here**](https://n8n.partnerlinks.io/7fuarh1e6dz5).

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
