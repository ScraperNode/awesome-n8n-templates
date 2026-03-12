# 🎯 Generate daily Pipedrive deal summaries with GPT-4o-mini

> ⚡ **732 views** · 🎯 [AI Summarization & Classification](../)

## Description

This workflow fetches **deals and their notes from Pipedrive**, cleans up stage IDs into names, aggregates the information, and uses **OpenAI** to generate a daily summary of your funnel.

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 2️⃣ Connect Pipedrive
1. In **Pipedrive** → **Personal preferences → API** → copy your **API token**  
   - URL shortcut: `https://{your-company}.pipedrive.com/settings/personal/api`  
2. In **n8n** → **Credentials → New → Pipedrive API**  
   - **Company domain**: `{your-company}` (the subdomain in your Pipedrive URL)  
   - **API Token**: paste the token from step 1 → **Save**  
3. In the **Pipedrive nodes**, select your Pipedrive credential and (optionally) set filters (e.g., owner, label, created time).

---

## 🧠 How It Works
- **Trigger**: Workflow runs on manual execution (can be scheduled).  
- **Get many deals**: Pulls all deals from your Pipedrive.  
- **Code node**: Maps `stage_id` numbers into friendly stage names (`Prospecting`, `Qualified`, `Proposal Sent`, etc.).  
- **Get many notes**: Fetches notes attached to each deal.  
- **Combine Notes**: Groups notes by deal, concatenates content, and keeps deal titles.  
- **Set Field Names**: Normalizes the fields for summarization.  
- **Aggregate for Agent**: Collects data into one object.  
- **Turn Objects to Text**: Prepares text data for AI.  
- **OpenAI Chat Model + Summarize Agent**: Generates a **daily natural-language summary** of deals and their current stage.

---

## 💬 Example Prompts
- “Summarize today’s deal activity.”  
- “Which deals are still in negotiation?”  
- “What updates were added to closed-won deals this week?”  

---

## 📬 Contact
Need help extending this (e.g., send summaries by Slack/Email, or auto-create tasks in Pipedrive)?

- 📧 **rbreen@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

Pipedrive, AI Agent, OpenAI Chat Model, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
