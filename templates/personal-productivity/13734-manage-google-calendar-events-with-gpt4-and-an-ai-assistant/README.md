# ⚡ Manage Google Calendar events with GPT‑4 and an AI assistant

> ⚡ **96 views** · ⚡ [Personal Productivity](../)

## Description

# Google Calendar AI Assistant

**Who is this for?**  
Professionals, teams, and AI builders needing instant calendar management via natural language – no more manual event creation or hunting.

**Key nodes:** Execute Workflow Trigger -  OpenAI Agent -  Google Calendar (CRUD) -  Respond to Webhook  
**Category:** AI / Productivity  
**Level:** Intermediate  
**Credits:** Milo Bravo (BRaiA Labs)

___

**What problem is this workflow solving?**  
**Calendar chaos wastes hours weekly:**  

- Switching between apps for scheduling  
- Forgetting event details or conflicts  
- Manual CRUD across multiple calendars  
- No conversational interface for busy pros  

This sub-workflow turns plain English into instant Google Calendar actions.

___

**What this workflow does**

1. **Trigger**: Execute Workflow node receives `{ "query": "your request" }`  
2. **AI Agent (GPT-4o)**: Interprets intent → selects create/read/update/delete  
3. **Google Calendar tools**: Executes operation on your calendar  
4. **Response**: JSON success/error + event details back to parent  

___

**Setup (2 minutes):**  

- Google Calendar OAuth2 credentials  
- Replace `milo.bravo@gmail.com` → your Calendar ID  
- OpenAI API key (GPT-4o recommended)  
- Fully configurable – no hardcoded values  

**How to customize:**  

- Swap GPT model (GPT-4o-mini for cost)  
- Add calendar permissions per user  
- Extend: Slack/Teams input → calendar action  
- Scale: Multi-calendar support via param  

**ROI:**  

- **95% faster scheduling** (seconds vs minutes)  
- Zero context switching  
- Embeddable in any workflow (CRM, assistants)  
- **10x daily productivity** for teams  

___

**Need help customizing?**: 
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/milobravo/) / [Message](https://tally.so/r/EkKGgB) 
___

**Keywords:** 
Google Calendar AI, AI scheduling assistant, calendar automation, GPT calendar agent, conversational calendar, Google Calendar workflow

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
