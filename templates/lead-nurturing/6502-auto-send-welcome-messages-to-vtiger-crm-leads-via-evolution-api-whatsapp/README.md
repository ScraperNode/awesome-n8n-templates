# 💬 Auto-send welcome messages to Vtiger CRM leads via Evolution API WhatsApp

> ⚡ **1,068 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## One of My Best! Send WhatsApp Greetings to New Vtiger Leads Automatically 💪😍

## ⚠️ This Workflow Requires a Community Nodes and a Self-Hosted n8n Instance

&gt; This template uses two custom **community nodes**:
&gt; * `n8n-nodes-vtiger-crm`
&gt; * `n8n-nodes-evolution-api`
&gt; You must be running **self-hosted n8n** with **Community Nodes enabled**.

### 🔧 How to Install Community Nodes

1. Go to `Settings` → `Community Nodes`
2. Click **Install Node**
3. Add:

```bash
n8n-nodes-vtiger-crm
n8n-nodes-evolution-api
```

4. Restart n8n if prompted.

---

## 💬 Auto-Send WhatsApp Welcome Messages to New Leads in Vtiger CRM

### Overview

This workflow sends a **personalized WhatsApp welcome message** to newly created leads in Vtiger CRM — using **Evolution API** — and updates the CRM record to ensure the message isn’t sent again.

It’s ideal for teams that want to **greet new leads instantly**, reduce manual effort, and automate the first touchpoint of the sales process.

---

### 🔄 What This Workflow Does

* ⏱ Runs every 1 minute via schedule trigger
* 📥 Fetches the latest uncontacted lead from Vtiger (`cf_1090 != 1`)
* 💬 Sends a personalized WhatsApp message using Evolution API
* ✅ Marks the lead as “messaged” by updating a custom field

---

### 📸 Visual Preview

#### 🧩 Workflow Canvas

![workflowwhatsapp.jpeg](fileId:1872)

&gt; Full layout of the automation flow in n8n

#### 💬 Evolution API Server

![EvolutionAPI server.jpeg](fileId:1873)

&gt; Example of the greeting message the lead receives:

```
Hi Ahmed Saadawi 😊,

We have received your interest with our services and we will contact you soon.

Have a nice day 🙏💐
```

---

## 🛠️ Setup Instructions

### 1. Vtiger CRM Setup

* Add a **custom field** (e.g. `cf_1090`) to track if a message was already sent
* Ensure lead records contain:

  * `firstname`, `lastname`, `phone`
* Connect your **Vtiger CRM API credentials**

### 2. Evolution API Setup

* Install or connect to your **Evolution API instance**
* Configure:

  * `instanceName`
  * `remoteJid` (from Vtiger lead phone)
  * Message template (edit as needed)
* Add your **Evolution API credentials**

### 3. Customize Message

Edit the message in the Evolution node to match your brand’s tone.

---

## 👥 Who Is This For?

* Sales teams needing instant CRM-to-WhatsApp follow-ups
* Companies automating first contact with leads
* Vtiger CRM users looking for WhatsApp engagement tools

---

## 🔐 Credentials Required

* ✅ Vtiger CRM API
* ✅ Evolution API (self-hosted or SaaS)

---

## 🏷 Tags

```
vtiger, whatsapp automation, evolution api, crm follow-up, sales automation, welcome message,
crm whatsapp integration, lead onboarding, no-code automation, n8n template, self-hosted n8n,
vtiger crm automation, community nodes, whatsapp message workflow
```

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
