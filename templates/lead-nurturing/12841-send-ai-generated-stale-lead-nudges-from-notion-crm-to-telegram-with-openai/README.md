# 💬 Send AI-generated stale lead nudges from Notion CRM to Telegram with OpenAI

> ⚡ **11 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Meet your new automated Sales Manager. This workflow acts as a relentless but helpful **AI Sales Coach** that lives inside your n8n.

It wakes up every morning, scans your Notion CRM for deals that have been neglected, and uses OpenAI to send personalized, context-aware "nudges" directly to the specific sales agent responsible via Telegram.

### 💡 Why use this?
* **Stop Generic Spam:** Unlike dumb bots that blast the whole channel, this workflow maps Notion Users to Telegram Handles to tag the *exact* person responsible (e.g., "@alex, wake up!").
* **Context-Aware AI:** The AI reads the deal details. It gets "greedy" for high-value deals and "sarcastic" for long silences.
* **Zero Management:** It runs on autopilot, ensuring no lead slips through the cracks.

### ⚙️ How it works
1.  **Data Sync:** Fetches your "Agents" database (Notion User ↔ Telegram ID) and "Active Deals".
2.  **Logic Core:** Calculates exactly how many days a lead has been untouched.
3.  **Smart Routing:** Matches the `Assigned Manager` in Notion to their `Telegram ID`.
4.  **AI Generation:** Generates a punchy message based on the deal's value and stage.
5.  **Delivery:** Sends the notification to Telegram with a direct link to the Notion deal.

### 🛠 Setup Steps
1.  **Get the Notion System**
    This workflow requires a specific database structure to map Agents and Deals.
    [👉 **Click here to duplicate the Notion Template**](https://probable-banana-3c9.notion.site/AI-Sales-Coach-System-n8n-Companion-v-1-2ee6bbcb3d0b811694b6d5ab51652670?pvs=143)

2.  **Connect Databases**
    * In the **"Get Agents"** node, select your duplicated *Agents Configuration* database.
    * In the **"Get Active Leads"** node, select your duplicated *Active Deals* database.

3.  **Configure Settings**
    Open the `📝 CONFIGURATION` node to set:
    * `DAYS_INACTIVE_LIMIT`: How many days of silence before alerting? (default: 7).
    * `COACH_PERSONA`: Customize the AI's personality (e.g., "Tough Boss" or "Friendly Helper").
    * `TELEGRAM_CHAT_ID`: A fallback chat for unassigned leads.

4.  **Connect Accounts**
    Add your credentials for **Notion**, **OpenAI**, and **Telegram**.

## 🔗 Nodes Used

Telegram, Notion, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
