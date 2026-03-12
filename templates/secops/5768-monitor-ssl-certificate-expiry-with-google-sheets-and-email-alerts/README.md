# 🔒 Monitor SSL certificate expiry with Google Sheets and email alerts

> ⚡ **620 views** · 🔒 [SecOps & Security Automation](../)

## Description

## 🔒 SSL Certificate Monitoring & Expiry Alert with Spreadsheet [FREE APIs]

### ✅ What This Workflow Does

This **n8n template** automatically monitors SSL certificates of websites listed in a Google Sheet and sends **email alerts** if any are expiring within **14 days**. It helps ensure you avoid downtime, security issues, and trust warnings due to expired certificates.

---

### 🧩 Key Features

- 📅 **Weekly Automation**: Runs every **Monday at 7:00 AM** (configurable).
- 📄 **Google Sheets Integration**: Fetches and updates data in a spreadsheet.
- 🔍 **SSL Check via API**: Uses [ssl-checker.io](https://ssl-checker.io) to get certificate details.
- ⚠️ **SSL Expiry Filter**: Identifies certificates expiring within 14 days.
- 📧 **Email Alerts**: Sends notifications for certificates close to expiration.

---

### 📂 Input Spreadsheet Format

Your Google Sheet should have the following columns:

| No | Name            | Link                  | SSL Issued On     | SSL Expired On    | SSL Status |
|----|-----------------|-----------------------|-------------------|-------------------|------------|
| 1  | Example Site    | https://example.com   | 2024-07-01        | 2025-07-01        | Valid      |
| 2  | My Blog         | https://myblog.org    | 2024-07-05        | 2024-07-20        | Expiring   |

Each row should include a **valid website URL** in the **Link** column.

---

### 🛠️ How It Works

1. **Scheduled Trigger**
   - Executes weekly (Monday 7:00 AM).
   
2. **Fetch Website List**
   - Reads all website entries from the Google Sheet.

3. **Check SSL Certificates**
   - Uses `ssl-checker.io` API to retrieve certificate details for each website.

4. **Update Spreadsheet**
   - Writes "Issued On" and "Expired On" fields back to the spreadsheet.

5. **Evaluate SSL Expiry**
   - Filters for certificates expiring within 14 days.

6. **Check Condition**
   - Determines whether to send alerts based on filtered results.

7. **Send Email Alert**
   - Notifies via email if any certificates are expiring soon.

---

### 📬 Example Email Output
```
Subject: ⚠️ ALERT!! SSL EXPIRED

SSL certificates expiring soon:
- example.com (expires in 5 days)
- anotherdomain.net (expires in 3 days)
```

### 🧰 Setup Requirements

- A Google Sheet with the correct columns and website links.
- SMTP credentials to send alert emails.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
