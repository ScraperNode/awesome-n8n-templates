# 🎣 Route and qualify email leads with Gmail, Gemini, Slack, Sheets and Salesforce

> ⚡ **197 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Email Lead Router: Gmail → Gemini → Salesforce Pipeline

**Who is this for?**  
Event sales teams & conference organizers processing 100+ sponsor/partner emails weekly who need instant lead qualification, Salesforce automation, & pipeline analytics.
___

**What problem is this workflow solving?**  
**Event email chaos kills revenue:**  

- 200+ sponsor emails/week → manual Salesforce entry  
- No sentiment/intent scoring = missed $ opps  
- 10+ hours/week routing + logging  
- Fragmented pipeline visibility  

**Zero-drop AI qualification → auto-Salesforce → team routing.**

___

**What this workflow does**

1. **Gmail Trigger** captures event inbox emails  
2. **Gemini #1** scores sentiment (Positive/Neutral/Negative + confidence)  
3. **Gemini #2** extracts topic, intent, urgency (1-10), org, budget signals  
4. **Upserts Salesforce Lead** (deduped by email) w/ 9 custom fields: Sentiment__c, Urgency_Score__c, etc.  
5. **Hot leads** (Positive + urgency ≥7) → auto **Salesforce Opportunity**  
6. **Creates Salesforce Task** w/ AI-suggested follow-up action  
7. **Logs** to `email_analytics` Data Table + Google Sheets (Looker Studio dashboard)  
8. **Routes**: Positive → Hot email + Slack #hot-leads (2h); Neutral → Follow-up + #follow-ups (24h); Negative → Insights + #insights  

___

**Setup (8 minutes):**  

- Gmail OAuth2 (event inbox)  
- Google Gemini API  
- **Salesforce OAuth2** + **9 custom Lead fields** (`Sentiment__c`, `Urgency_Score__c`, etc.)  
- Slack OAuth2 + channels (`#hot-leads`, `#follow-ups`, `#insights`)  
- `email_analytics` Data Table ID  
- Update Send Email recipients  
- Test w/ Evaluation Dataset  

___
**How to customize:**  

- Tune urgency threshold (7→8)  
- Add event keywords (webinar/tradeshow)  
- Swap Slack → Teams; Salesforce → HubSpot  
- Multi-inbox territory routing  

___
**ROI:**  

- **100% Salesforce coverage** (no manual entry)  
- **8x faster qualification** (2min vs 16h/week)  
- **30% opp velocity** (auto opps/tasks)  
- **Live Looker dashboard** → data-driven decisions  

---

**Need help customizing?**: 
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/milobravo/) / [Message](https://tally.so/r/EkKGgB) 
___

**Keywords:** event sales leads, Salesforce automation, Gemini lead scoring, email sentiment, sales pipeline n8n, AI sales routing

## 🔗 Nodes Used

Google Sheets, Slack, Salesforce, Gmail, Gmail Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
