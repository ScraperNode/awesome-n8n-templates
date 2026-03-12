# ⚙️ Multiple websites monitoring with notifications including phone calls

> ⚡ **18,054 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## ✅ What problem does this workflow solve?
Automatically monitor multiple websites every 5 minutes, log downtime, notify your team instantly via multiple channels, and track uptime/downtime in a Google Sheet—without relying on expensive monitoring tools.

---

## ⚙️ What does this workflow do?

1. Triggers every 5 minutes to monitor website health.
2. Fetches a list of website URLs from a Google Sheet.
3. Checks the status of each website one by one.
4. Sends instant alerts if a website is **down** (Email, Slack, Telegram, Voice Call).
5. Logs downtime events in Google Sheets.
6. Tracks when websites are back **up** and updates the log.
7. Sends recovery notifications when a site is live again (Email, Slack, Telegram).

---

## 🔧 Setup

### 📄 Google Sheets Setup
- Sheet 1: List of website URLs to monitor.
- Sheet 2: Log to store uptime/downtime records.
Sample Format: [https://docs.google.com/spreadsheets/d/1_VVpkIvpYQigw5q0KmPXUAC2aV2rk1nRQLQZ7YK2KwY/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1_VVpkIvpYQigw5q0KmPXUAC2aV2rk1nRQLQZ7YK2KwY/edit?usp=sharing)

### ✉️ Gmail, Slack & Telegram Setup
- Connect Gmail, Slack, and Telegram to n8n.
- Configure each service with proper credentials or OAuth.

### 📞 Vapi (Voice Call) Setup
- Create a Vapi account.
- Generate an API key.
- Configure API Parameters (`vapi_api_key`, `assistant_id`, `number`, `phone_number_id`) on VAPI Node.
- Insert the First Message specified in the Workflow.

---

## 🧠 How it Works

### ⏱ 1. Scheduled Monitoring
A **Schedule Trigger** runs the workflow every 5 minutes. It reads the list of URLs from the Google Sheet and loops through each one.

### 🌍 2. Website Health Check
Each website is pinged to check if it’s online.

### 🔴 3. If Website is Down:
- It verifies if a downtime record already exists.
- If not, it:
  - Adds a new row in the Google Sheet with the timestamp.
  - Sends notifications via:
    - 📧 **Email**
    - 💬 **Slack**
    - 📲 **Telegram**
    - 📞 **Voice Call via Vapi**

### 🟢 4. If Website is Back Up:
- It fetches the matching downtime record.
- Updates the sheet with:
  - ✅ Uptime timestamp
  - ⏱ Total downtime duration
- Sends recovery notifications via:
  - 📧 **Email**
  - 💬 **Slack**
  - 📲 **Telegram**  
(No phone call is made for uptime.)

---

## 👤 Who can use it?

This is perfect for:
- 🚀 **Startups**
- 👨‍💻 **Freelance Developers**
- 🛠 **SaaS Product Owners**
- 🖥 **IT/DevOps Teams**

If you're looking to replace tools like **UptimeRobot**, **Pingdom**, or **StatusCake**, this no-code solution gives you full control, customization, and cost-efficiency.

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
