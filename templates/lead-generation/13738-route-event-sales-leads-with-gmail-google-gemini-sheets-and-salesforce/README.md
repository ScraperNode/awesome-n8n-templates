# 🎣 Route event sales leads with Gmail, Google Gemini, Sheets and Salesforce

> ⚡ **134 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Email Sentiment Router for Event Sales Leads

___

**Who is this for?**
Event organizers, conference managers, and sales teams drowning in sponsor/exhibitor/partner emails who need zero-drop leads + real-time pipeline analytics.

___

**Key nodes:** 
Gmail Trigger - Google Gemini (2x) - Data Table - Google Sheets - Send Email - Slack
Category: Sales / AI / Event Management
Level: Advanced
Credits: Milo Bravo (BRaiA Labs)

_____

**What problem is this workflow solving?**

- Email overload kills event revenue:

- 200+ weekly sponsor/partner emails go unread

- No sentiment/intent analysis = missed hot leads

- Manual routing wastes 10+ hours/week

- Zero visibility into pipeline trends

- This workflow auto-classifies, routes, and analyzes every inbound lead.

_____
**What this workflow does?**

1. Gmail Trigger monitors event inbox for new emails

2. Gemini #1 scores sentiment (Positive/Neutral/Negative)

3. Gemini #2 extracts topic, intent, urgency, org, budget signals

4. Logs to email_analytics Data Table + Google Sheets

5. Routes intelligently:

- Positive → Hot Lead email + Slack #hot-leads (2h SLA)

- Neutral → Nurture email + Slack #follow-ups (24-48h)

- Negative → Insights + Slack #insights

6. Looker Studio dashboard auto-updates from Sheets

_____
**Setup (5 minutes):**

1. Gmail OAuth2 (event inbox)

2. Google Gemini API key

3. Slack OAuth2 + channels (#hot-leads, #follow-ups, #insights)

4. Create email_analytics Data Table → paste Table ID

5. Update recipient emails (placeholders in Send Email nodes)

6. Test with Evaluation Dataset before live

_____
**How to customize:**

- Add keywords for your niche (conferences, webinars, trade shows)

- Adjust sentiment thresholds or routing rules

- Swap Slack → Teams/CRM (HubSpot/Salesforce)

- Scale: Multi-inbox + team routing

_____
**ROI:**

- 100% lead capture (zero drops)

- 5x faster response (2h → 2min)

- 20% conversion lift from sentiment prioritization

- Pipeline dashboard = data-driven sales strategy

---
**Need help customizing?**: 
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/milobravo/) / [Message](https://tally.so/r/EkKGgB)

---
**Keywords:**
event sales leads, email sentiment analysis, Gmail AI routing, Google Gemini sales automation, conference sponsor leads, event pipeline analytics, sales lead qualification, sales dashboard

## 🔗 Nodes Used

Google Sheets, Slack, Salesforce, Gmail, Gmail Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
