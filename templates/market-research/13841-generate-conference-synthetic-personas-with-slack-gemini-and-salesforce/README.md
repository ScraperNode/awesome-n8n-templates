# 📊 Generate conference synthetic personas with Slack, Gemini and Salesforce

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

## Description

# **Conference Synthetic Personas: Slack → Gemini → CRM Insights**

**Who is this for?**  
Event strategists, conference organizers, and marketing teams planning content/networking who want to interview realistic audience personas based on their participantants behavioural data before spending budget.

***

**What problem is this workflow solving?**  
Event deisgn and management is guesswork:  
- Content misses audience needs  
- Networking formats flop  
- No pre-validation of concepts  

This workflow creates interviewable synthetic personas from your real CRM data, test ideas pre-event.

***

**What this workflow does**  

- **Trigger**: Slack `/doppelganger "EventX" 5 hubspot`  
- **CRM Pull**: HubSpot/Salesforce/Sheets attendee data  
- **Gemini Analysis**: Generates 5+ realistic personas per event  
- **Slack Cards**: Rich persona profiles + 14 auto-interview questions  
- **Thread Replies**: Team follow-ups in persona context  
- **Sheets Log**: Personas + conversations archived  

***

**Setup (8 minutes)**  

- **Slack**: OAuth2 + `/doppelganger` slash command  
- **Gemini**: Google API key (Flash/Pro)  
- **CRM**: HubSpot API / Salesforce OAuth / Google Sheets  
- **Sheets ID**: Personas + Conversations tabs  

Fully configurable, no code changes needed.

***

**How to customize to your needs**  

- **CRMs**: HubSpot → Salesforce → Sheets CSV  
- **Personas**: Speakers/Exhibitors/Attendees  
- **Questions**: Edit 14 interview prompts (5 categories)  
- **Scale**: Multi-event batching  
- **Output**: Add Teams/Notion sync  

***

**ROI**:  

- **40% better content relevance** (pre-validated)  
- **25% lower no-show rates** (targeted comms)  
- **2h → 2min** persona generation  

***

**Need help customizing?**:  
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/milobravo/) / [Message](https://tally.so/r/EkKGgB)  

***

**Keywords**: event personas, synthetic audience, conference planning, attendee segmentation, event strategy automation

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
