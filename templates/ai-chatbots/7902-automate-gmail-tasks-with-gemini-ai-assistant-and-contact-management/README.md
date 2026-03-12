# 🤖 Automate Gmail tasks with Gemini AI assistant and contact management

> ⚡ **435 views** · 🤖 [AI Chatbots & Agents](../)

## Description

---

**Use cases are many:** Automate Gmail tasks such as sending, replying, labeling, deleting, and fetching emails — all with AI assistance. Perfect for YouTubers managing viewer emails, sales teams handling inquiries, freelancers responding to client requests, or professionals keeping their inbox organized.

---

**Good to know**

At time of writing, each Gemini request is billed per token. See [Gemini Pricing](https://ai.google.dev/pricing) for updated details.
The workflow uses Gmail labels (e.g., *youtube-viewers*, *sales-inquiry*, *meeting-request*, *potential-clients*, *collaboration-requests*) for classification — make sure these exist in your Gmail account.

---

**How it works**

* **Chat Trigger**: You interact with the agent via a chat interface (webhook).
* **AI Agent**: Gemini-powered assistant interprets your instructions (send, reply, label, delete, fetch emails).
* **Email Actions**: Based on your request, the assistant uses Gmail tools to act on emails (Send, Reply, Label, Delete, Get Many).
* **Contact Lookup**: If only a name is provided, the agent checks Google Sheets for the matching email address. If not found, it prompts you to add it.
* **Memory**: A buffer memory stores chat context so the assistant can maintain continuity across multiple interactions.
* **Labeling**: Emails can be auto-labeled for better organization (e.g., client inquiries, meeting requests).

---

**How to use**

* Send commands like:
  *“Reply to John’s email with a follow-up about the project.”*
  *“Label Sarah’s email as potential-client.”*
  *“Delete the latest spam email.”*
* The Gmail Agent will handle the request instantly and keep everything logged properly.

---

**Requirements**

* Gmail account connected with OAuth2 credentials
* Google Gemini API key for AI processing
* Google Sheets for contact management
* Pre-created Gmail labels for organization

---

**Customising this workflow**

* Add new Gmail labels for your workflow (e.g., *Invoices*, *Support Tickets*).
* Connect to a CRM (e.g., HubSpot, Notion, or Airtable) for syncing email data.
* Enhance AI replies with dynamic templates stored in Google Sheets.
* Extend chat commands to include **batch actions** (e.g., “Archive all emails older than 30 days”).

---

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
