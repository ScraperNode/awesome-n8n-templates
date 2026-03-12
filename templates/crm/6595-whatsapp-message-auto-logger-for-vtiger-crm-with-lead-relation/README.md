# 🤝 WhatsApp message auto-logger for Vtiger CRM with lead relation

> ⚡ **390 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Auto-Log WhatsApp Inbound Messages to Vtiger CRM Leads (with WhatsAppLog)

---

### **Description**

🔥 A Game-Changer for CRM Logging! Automatically Log WhatsApp Inbound Messages to Vtiger and Link to Leads 💬⚡
⚠️ This Workflow Requires Community Nodes & a Self-Hosted n8n Instance

&gt; This template uses a custom community node:
&gt; * `n8n-nodes-vtiger-crm`
&gt;   ✅ No need for an Evolution API node — webhook is used instead.

---

### 🔧 How to Install Community Nodes

Go to **Settings → Community Nodes**
Click **Install Node**
Add this:

* `n8n-nodes-vtiger-crm`

Restart n8n if prompted.

---

### 💬 Automatically Log WhatsApp Inbound Messages in Vtiger CRM

#### **Overview**

This workflow listens for inbound WhatsApp messages via **Evolution API Webhook**, filters out outbound and group messages, and logs the message in the custom `WhatsAppLog` module in Vtiger. If the sender is not in CRM, it creates a new lead and links the message.

---

### 🔄 What This Workflow Does

📩 Listens to WhatsApp inbound messages via webhook
🚫 Filters out group and outbound messages
🔍 Looks up existing lead by phone
🆕 Creates a new lead if not found
🧾 Logs the message in the `WhatsAppLog` module
🔗 Relates message to corresponding lead

---

### 🔗 Evolution API Webhook Configuration

1. Open your **Evolution API dashboard**
2. Go to `Events → Webhook`
3. **Enable** Webhook
4. Set the **Webhook URL** to your n8n webhook path:
   `https://your-n8n-domain/webhook/whatsAppListen`
5. Enable only the event:
   ✅ `MESSAGES_UPSERT`
6. **Disable** all other events to avoid unnecessary triggers

This ensures only **inbound WhatsApp messages** are pushed to n8n.

&gt; No need to use the Evolution API node in n8n. All communication is triggered via webhook.

---

### 📸 Visual Preview

#### 🧩 Workflow Canvas

![workflowwhatsappLog.jpeg](fileId:1884)

&gt; Full view of the automation steps in n8n

#### 💬 WhatsApp Message Capture

![wascreenshot.jpeg](fileId:1882)

![crmscreenshot.jpeg](fileId:1883)

&gt; A sample inbound message sent to your WhatsApp number

---

### 🛠️ Setup Instructions

#### 1. **Vtiger CRM Setup**

* Ensure the `Leads` module has phone fields (phone or mobile)
* Create a custom module `WhatsAppLog` (if not already present)
* Connect your Vtiger CRM API credentials to n8n

#### 2. **Webhook Setup**

* Follow the Webhook Configuration steps above for Evolution API
* Make sure your n8n instance is publicly accessible

#### 3. **Workflow Customization**

* Update field mapping inside the `Set` and `Log` nodes
* Adjust the `assigned_user_id` or custom fields as needed

---

### 👥 Who Is This For?

* CRM admins managing WhatsApp communication
* Sales teams tracking lead interactions in Vtiger
* Support teams logging WhatsApp tickets
* Businesses using Evolution API to receive WhatsApp messages

---

### 🔐 Credentials Required

✅ Vtiger CRM API
❌ No Evolution API credentials needed inside workflow (webhook-only)

---

### 🏷 Tags

vtiger, whatsapp, crm automation, inbound message logging, evolution api, whatsapp crm integration, n8n template, community nodes, lead management, self-hosted n8n, customer communication, no-code crm, webhook

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
