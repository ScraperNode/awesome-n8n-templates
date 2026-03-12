# 🎫 Automatic email categorization & labeling in Zoho Mail with GPT-4o-mini

> ⚡ **1,338 views** · 🎫 [Ticket Management & Triage](../)

## Description

# 📧 AI-Powered Email Categorization & Labeling in Zoho Mail

This n8n template demonstrates how to use **AI text classification** to automatically categorize incoming emails in Zoho Mail and apply the correct label (e.g., Support, Billing, HR). It saves time by keeping your inbox structured and ensures emails are routed to the right category.

### Use cases include:
- Routing customer support requests to the correct team.
- Organizing billing and finance communications separately.
- Streamlining HR and recruitment email handling.
- Reducing inbox clutter and ensuring no important message is missed.

---

## ℹ️ Good to know
- You’ll need to configure **Zoho OAuth credentials** — see [Self Client Overview](#), [Authorization Code Flow](#), and [Zoho Mail OAuth Guide](#).
- The **labels must already exist in Zoho Mail** (e.g., Support, Billing, HR). The workflow fetches these labels and applies them automatically.
- The Zoho Mail API domain changes depending on your account region:
  - `.com` → Global accounts (`https://mail.zoho.com/api/...`)
  - `.eu` → EU accounts (`https://mail.zoho.eu/api/...`)
  - `.in` → India accounts (`https://mail.zoho.in/api/...`)

Example: For an EU account, the endpoint would be:
```bash
https://mail.zoho.eu/api/accounts/&lt;accountID&gt;/updatemessage
```
- The AI model used for text classification may incur costs depending on your provider (e.g., OpenRouter).  
- Start by testing with a small set of emails before enabling for your full inbox.

---

## 🔄 How it works
1. A new email in Zoho Mail triggers the workflow.  
2. OAuth authentication retrieves access to Zoho Mail’s API.  
3. All available labels are fetched, and a **label map (display name → ID)** is created.  
4. The AI model analyzes the subject and body to predict the correct category.  
5. The workflow routes the email to the right category branch.  
6. The matching Zoho Mail label is applied (final node is deactivated by default).  

---

## 🛠️ How to use
- Create the required labels (e.g., Support, Billing, HR, etc.) in your Zoho Mail account before running the workflow.  
- Replace the **Zoho Mail Account ID** in the *Set Account ID* node.  
- Configure your **Zoho OAuth credentials** in the *Get Access Token* node.  
- Update the API base URL to match your Zoho account’s region (`.com`, `.eu`, `.in`, etc.).  
- Activate the **Apply Label to Email** node once ready for production.  
- Optionally, adjust categories in the AI classifier prompt to fit your organization’s needs.  

---

## 📋 Requirements
- Zoho Mail account with API access enabled.  
- Labels created in Zoho Mail for each category you want to classify.  
- OAuth credentials set up in n8n.  
- Correct Zoho Mail API domain (`.com`, `.eu`, `.in`) based on your account region.  
- An AI model (via OpenRouter or other provider) for text classification.  

---

## 🎨 Customising this workflow
This workflow can be adapted to many inbox management scenarios. Examples include:
- Auto-routing customer inquiries to specific departments.  
- Prioritizing VIP client emails with special labels.  
- Filtering job applications directly into an HR-managed folder.  

---

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Text Classifier, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
