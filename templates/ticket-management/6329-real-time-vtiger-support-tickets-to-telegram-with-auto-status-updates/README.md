# 🎫 Real-time Vtiger support tickets to Telegram with auto status updates

> ⚡ **731 views** · 🎫 [Ticket Management & Triage](../)

## Description

## ⚠️ This Workflow Requires a Community Node and a Self-Hosted n8n Instance

&gt; This workflow uses the **Vtiger CRM** community node. To use it, you must be running a **self-hosted** version of n8n with Community Nodes enabled.

### 🔧 How to Install the Node

1. Go to `Settings` → `Community Nodes`
2. Click **Install Node**
3. Enter the package name:

```bash
n8n-nodes-vtiger-crm
```

4. Restart your n8n instance if prompted

---

## 💬 Real-time Vtiger Support Tickets to Telegram with Auto Status Updates

### 📌 Overview

Keep your support team instantly informed when new tickets are created in Vtiger CRM. This workflow:

* Fetches the most recent ticket marked as `Open`
* Sends its details to a Telegram chat
* Updates the status in Vtiger to `In Progress` to prevent re-sending

---

### 🔄 What This Workflow Does

* 📨 Pulls the latest **open** ticket from Vtiger `HelpDesk`
* 📲 Sends a rich-text message to **Telegram** with all key ticket details
* 🔁 Updates the ticket’s status to **"In Progress"**

---

### 🧠 Workflow Preview

&gt; ![workflowcanvas.jpg](fileId:1862)
---

### 📲 Telegram Output Example

&gt; ![telegrammessageexample.jpeg](fileId:1863)

```
New ticket with the following details:
Ticketid: TT2  
Title: Internet down  
Status: Open  
Priority: High  
Severity: Minor  
Category: Small Problem  
Description: The internet was slow from yesterday and today is down completely
```

---

## 🛠️ Setup Instructions

### 🔗 Telegram Bot Setup

1. Open Telegram and search for [@BotFather](https://t.me/BotFather)
2. Run `/newbot` and follow the instructions
3. Save the **bot token**
4. Add the bot to your **chat or group**
5. Use [@userinfobot](https://t.me/userinfobot) to get your `chat_id`
6. Paste the token and chat ID in the **Telegram node** inside n8n

---

### 🔗 Vtiger CRM Setup

* Make sure your Vtiger `HelpDesk` module includes:

  * `ticket_no`, `ticket_title`, `ticketstatus`, `ticketpriorities`, `ticketseverities`, `ticketcategories`, `description`
* Connect your **Vtiger API credentials** inside n8n

---

## 👥 Who This Is For

* Customer support and IT helpdesk teams using Vtiger CRM
* Teams that want **instant alerts in Telegram**
* Anyone syncing CRM activity with chat-based notifications

---

## 🔐 Credentials Required

* ✅ Vtiger CRM API credentials
* ✅ Telegram Bot Token

---

## 🏷 Tags

```
vtiger, telegram, crm automation, helpdesk alerts, no-code crm, realtime notifications,
n8n telegram integration, support ticket automation, self-hosted n8n, community nodes,
workflow automation, vtiger crm integration, helpdesk sync, n8n crm alerts
```

## 🔗 Nodes Used

Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
