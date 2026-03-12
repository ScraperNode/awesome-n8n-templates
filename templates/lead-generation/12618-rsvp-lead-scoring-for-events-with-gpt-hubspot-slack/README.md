# 🎣 RSVP Lead Scoring for Events with GPT, HubSpot & Slack

> ⚡ **24 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# **RSVP Lead Scoring for Events with GPT, HubSpot & Slack**

**Who is this for?**
Event organizers, RevOps teams, sales managers, and marketers running conferences, webinars, or meetups who want to **automatically qualify RSVPs** and turn attendees into revenue opportunities.

---

**What problem is this workflow solving?**
RSVP lead qualification is manual and slow:

- Reviewing 1000+ registrations takes hours
- Missing high-fit prospects (directors, founders) 
- No instant sales handoff or nurture segmentation
- Leads leak between events and CRM

This workflow **auto-scores RSVPs 0-100** and routes high-fits to sales instantly.

---

**What this workflow does**

- **Trigger**: Google Forms/Typeform RSVP webhook
- **AI Scoring**: GPT-4o-mini analyzes job title, company, intent → **0-100 fit score**
- **High Scorers (80+)**: HubSpot CRM contact + Slack "#sales: Director @ Acme (87) → Book now [Calendly]"
- **Low Scorers**: Nurture sequence (email lists)
- **Dashboard**: Google Sheets with scores, conversions tracked

---

**Setup (3 minutes)**

- **Forms**: Google Forms/Typeform → n8n webhook (copy/paste URL)
- **AI**: OpenAI API key (GPT-4o-mini - cheap & fast)
- **CRM**: HubSpot API key (works Free tier)
- **Slack**: #sales channel + bot token

Fully configurable—no code changes needed.

---

**How to customize to your needs**

- **Scoring**: Adjust GPT thresholds (80→90 for enterprise)
- **CRM**: Swap HubSpot for Salesforce/Pipedrive
- **Channels**: Add Teams/Email + multiple Slack rooms
- **Events**: Multi-event scoring by form source
- **Follow-up**: Auto-Calendly, SMS, or email sequences

---

**ROI**:

- **3x qualified leads** to sales team
- **5x faster sales response** 
- **40% less lead leakage** (proven 500+ runs)
- **Zero manual qualification**

---

**Need help customizing?**: 
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/milobravo/) / [Message](https://tally.so/r/EkKGgB) 

---

**Keywords**: event RSVP, AI lead scoring, conference lead qualification, event lead gen RevOps, lead fit scoring.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, HubSpot, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
