# 💬 Automate outbound voice calls from Go High Level opportunities with Vapi

> ⚡ **1,736 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This workflow triggers when a **new opportunity** is created in **Go High Level (GHL)**, fetches the associated contact details, and initiates an **outbound call** using **Vapi**. The call is made by a Vapi assistant configured with the appropriate credentials.

---

## 🧾 Requirements

### Go High Level (GHL)
- A [**Go High Level**](https://www.gohighlevel.com/78476a2?fp_ref=1node) account
- GHL **developer private app** and **credentials** enabled in n8n
- **Webhook URL** from n8n added to your GHL private app

### Vapi
- A [**Vapi**](https://vapi.ai/?aff=onenode) account with credit
- A connected **phone number** to make calls
- An **assistant** created and ready to make calls
- Your **Vapi API key**

### 🔗 Useful Links
- [GHL Docs](https://help.gohighlevel.com/)
- [Vapi Docs](https://docs.vapi.ai/)
- [n8n GHL Credentials Setup](https://docs.n8n.io/integrations/builtin/credentials/highlevel/)

---

## 🔄 Workflow Breakdown

### 1. **Trigger: GHL Opportunity Created**
- Triggered by a **Webhook (POST)** from Go High Level when a new opportunity is created.
- Webhook URL must be enabled in your GHL private app.

### 2. **Get a GHL Contact**
- Retrieves contact details from GHL CRM using the contact ID from the opportunity.
- Includes information such as phone number, name, and custom fields.

### 3. **Wait 5 Minutes**
- Introduces a short delay before making the call to avoid immediate outreach.
- Helps ensure data is synced and gives the system time for any follow-up automation.

### 4. **Set Vapi Fields (Manual Step)**
- Set the required fields for the Vapi API call:
  - `vapiPhoneNumberId` – the number id making the call
  - `vapiAssistantId` – the assistant who will handle the call
  - `vapiApi` – your secure Vapi API key

### 5. **Start Outbound Vapi Call**
- Sends a **POST** request to `https://api.vapi.ai/call`
- Payload includes:
  - Contact’s phone number
  - Selected Vapi assistant
  - Vapi phone number id to start the call

---

## ✅ Summary

This n8n automation connects your CRM ([Go High Level](https://www.gohighlevel.com/78476a2?fp_ref=1node)) with voice automation ([Vapi](https://vapi.ai/?aff=onenode)) to **immediately respond to new opportunities**. Once a lead is created, they will receive a **personalized voice call** from a Vapi AI assistant.

---

## 🙋‍♂️ Need Help?

Feel free to contact us at [**1 Node**](https://1node.ai)  
Get instant access to a library of [**free resources**](https://1node.ai/resources) we created.

## 🔗 Nodes Used

HTTP Request, Webhook, HighLevel

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
