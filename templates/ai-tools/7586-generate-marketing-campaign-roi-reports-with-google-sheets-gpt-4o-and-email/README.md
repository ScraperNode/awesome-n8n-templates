# 🎯 Generate marketing campaign ROI reports with Google Sheets, GPT-4o and Email

> ⚡ **958 views** · 🎯 [AI Summarization & Classification](../)

## Description

This n8n workflow pulls campaign data from Google Sheets, summarizes it using OpenAI, and sends a performance recap via Outlook email.

---

### ✅ Step 1: Connect Google Sheets

1. In n8n, go to **Credentials** → click **New Credential**
2. Select **Google Sheets OAuth2 API**
3. Log in with your Google account and authorize
4. Use a spreadsheet with:
   - Column names in the first row  
   - Data in rows 2–100  
5. Example format: [📄 Sample Marketing Sheet](https://docs.google.com/spreadsheets/d/1UDWt0-Z9fHqwnSNfU3vvhSoYCFG6EG3E-ZewJC_CLq4/edit?usp=sharing)

---

### ✅ Step 2: Connect OpenAI

1. Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Make sure you have a payment method set under [Billing](https://platform.openai.com/settings/organization/billing/overview)
3. In n8n, create a new **OpenAI API** credential
4. Paste your API key and save

---

### 📬 Need Help?

Feel free to contact me if you run into issues:

- 📧 robert@ynteractive.com  
- 🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Structured Output Parser, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
