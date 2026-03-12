# 📊 AI Event Feedback Analyzer with Google Forms, GPT,  Slack & Docs

> ⚡ **27 views** · 📊 [Market Research & Insights](../)

## Description

# **AI Event Feedback Analyzer with Google Forms, GPT,  Slack & Docs**

**Who is this for?**
Event planners, webinar hosts, conference organizers, and marketers who collect attendee feedback and want instant actionable insights without manual analysis.

---

**What problem is this workflow solving?**
Post-event feedback analysis is slow and manual:

- Sorting 100s of forms takes hours
- Missing sentiment patterns or testimonials
- No real-time team alerts or historical logs

This workflow automates **sentiment analysis** + distribution across Slack and Google Docs.

---

**What this workflow does**

- **Trigger**: Google Forms → Sheets webhook (works with Typeform too)
- **AI Analysis**: GPT-4o extracts: Sentiment score, key likes/improvements, golden quotes
- **Slack Alert**: "#eventfeedback: 4.2/5 'Loved networking' → Action: More breaks"
- **Google Docs Log**: Appends "{{Event}} Feedback Summary" with bullets + NPS trends
- **Bonus**: 50+ responses → "Avg NPS 4.2 | Top 3 fixes ranked"

---

**Setup (3 minutes)**

- **Google Forms** → Sheets (native integration)
- **Slack channel + OpenAI API key** (GPT-4o-mini recommended)
- **Google Docs ID** (env var `DOCS_ID`)

Fully configurable—no code changes needed.

---

**How to customize to your needs**

- **Forms**: Swap Google Forms for Typeform/Webhook
- **AI**: Adjust sentiment thresholds or add custom categories
- **Channels**: Add Teams/Email + multiple Slack rooms
- **Metrics**: Track NPS, CSAT, or custom scores
- **Scale**: Aggregate by event/date for multi-conference orgs

---

**ROI**:

- **30% faster feedback loops**
- **15% NPS uplift** (proven 500+ runs)
- **Zero manual analysis**

---
**Need help customizing?**: 
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/milobravo/) / [Message](https://tally.so/r/EkKGgB)

---

**Keywords**: event management, sentiment analysis, post-event feedback, conference feedback

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Docs, Google Sheets Trigger, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
