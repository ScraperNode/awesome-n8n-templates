# ⚙️ Website downtime alert via LINE + Supabase log

> ⚡ **1,032 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow automatically checks the status of your websites using UptimeRobot API. If any site is down or unstable, it will:
- Generate a natural-language alert message using GPT-4o
- Push the message to a LINE group (with funny IT-style encouragement)
- Log all DOWN status entries into your Supabase database
- Wait 30 minutes before repeating

🔧 How It Works
1. Schedule Trigger – Runs on a fixed interval (every few minutes).
2. UptimeRobot Node – Fetches website monitor data.
3. Code Node (Filter) – Filters only websites with status 8 (may be down) or 9 (down).
4. IF Node – If any site is down, proceed.
5. LangChain LLM Node – Formats alert with a humorous message using GPT-4o.
6. Line Notify (HTTP Request) – Sends the alert to your LINE group.
7. Loop Over Items – Loops through all monitors.
8. Filter Down (Status = 9) – Selects only “fully down” sites.
9. Supabase Node – Logs these into synlora_uptime_down table.
10. Wait Node – Delays next alert by 30 minutes to avoid spamming.

⚙️ Setup Steps

Required:
- 🔗 UptimeRobot API Key
- 📲 LINE Channel Access Token and Group ID
- 🧠 OpenAI Key (GPT-4o Mini)
- 🗃️ Supabase Project & Table 

Step-by-step:
1. Go to UptimeRobot → Get API key and ensure monitors are set up.
2. Create a Supabase table with fields: website, status, uptime_id.
3. Create a LINE Messaging API bot, join it to your group, and get:
	1. Access Token
	2. Group ID (userId or groupId)
4. Add your OpenAI API Key for GPT-4o Mini (or switch to your preferred LLM).
5. Import the workflow JSON into n8n.
6. Set credentials in all necessary nodes.
7. Activate the workflow.

## 🔗 Nodes Used

HTTP Request, UptimeRobot, Supabase, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
