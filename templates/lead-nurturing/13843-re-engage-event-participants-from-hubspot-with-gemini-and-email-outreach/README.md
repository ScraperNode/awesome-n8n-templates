# 💬 Re-engage event participants from HubSpot with Gemini and email outreach

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# **Event Alumni Re-engager: HubSpot → Gemini → Personalized Outreach**

**Who is this for?**  
Event marketers and conference organizers who want to **reactivate past attendees** with AI-personalized emails at 3-5x ROI vs. cold leads.

***

**What problem is this workflow solving?**  
Alumni gold is untapped:  
- Past attendees convert 3-5x better  
- Manual segmentation takes hours  
- Generic emails get ignored  

This auto-segments + personalizes outreach from HubSpot data.

***

**What this workflow does**  

**CRM → AI Alumni Machine**:  
- **Trigger**: Manual (or schedule 8-12 weeks pre-event)  
- **HubSpot Pull**: Past `event_registration` contacts  
- **Smart Filter**: Exclude current registrants  
- **3-Tier Segments**: Champions (3+ events) / Returning (2) / One-timers (1)  
- **Gemini Personalization**: Unique copy per attendee  
- **Email Send**: Alumni-exclusive CTAs  
- **Slack Summary**: Campaign stats posted  

**Main workflow  required**. This is a sub-workflow triggered by [Event Registration with Auto-Enrichment](link)

**Setup (7 minutes)**  

- **HubSpot**: Header Auth (`Bearer YOUR_API_KEY`)  
- **Custom Property**: `event_registration` (comma-separated event IDs)  
- **Gemini**: Flash Lite API key  
- **Email**: SMTP + Slack OAuth2  
- **Config**: Event details in `Set Campaign Config`  

Fully configurable—no code changes needed.

***

**How to customize to your needs**  

- **Segments**: Add VIPs / Speakers / High-LTV  
- **CRM**: HubSpot → Salesforce → Sheets  
- **Copy**: Edit Gemini prompts for tone/industry  
- **Channels**: Add WhatsApp / LinkedIn  
- **Timing**: Cron for automated runs  

**HubSpot Setup**:  
`event_registration` property auto-created by companion template.

***

**ROI**:  

- **3-5x conversion** vs. cold leads  
- **60% lower CAC** (alumni segment)  
- **2h → 2min** campaign launch  

***

**Need help customizing?**:  
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/milobravo/) / [Message](https://tally.so/r/EkKGgB)  

***

**Keywords**: event participant re-engagement, conference registration, HubSpot automation, personalized outreach, conference marketing

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
