# 💬 Client onboarding with form

> ⚡ **774 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## AI-Powered Lead Triage and Response System 🤖

This advanced workflow creates a customized, embedded lead-capture form, automatically logs client data to a spreadsheet, and uses AI to instantly analyze and summarize the lead for rapid human follow-up.

### **How it works**

1.  A potential client fills out the **Gurey AI partnership form** (built-in n8n form trigger).
2.  The workflow immediately **logs all submitted data** to a designated Google Sheet.
3.  An **AI Agent** receives the raw data and is instructed to condense it into a factual, concise client summary.
4.  A second **AI Agent** generates a **personalized welcome and confirmation email** to the client, using the AI-generated summary and original goals to make the email highly relevant.

---

### **Set up steps (2-3 minutes)** ⏱️

1.  **Google Sheets:** Create a new Google Sheet to log your client data, making sure the column headers match the form field names (e.g., "First Name", "📧 Email", etc.).
2.  **Credentials:** Add two credentials to your n8n instance:
    * **Google Sheets OAuth2 API**
    * **OpenRouter API** (for the AI Agents)
3.  **Update Nodes:** Connect the new credentials to the **"Log client data"** and **"OpenRouter Chat Model"** nodes.
4.  **Finalize:** Open the **"Log client data"** node and select your newly created Google Sheet.

*Detailed descriptions and links are available in the sticky notes within the workflow.* 🤓

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Execution Data, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
