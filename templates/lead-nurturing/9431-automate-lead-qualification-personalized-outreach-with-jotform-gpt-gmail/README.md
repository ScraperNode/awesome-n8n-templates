# 💬 Automate lead qualification & personalized outreach with Jotform, GPT & Gmail

> ⚡ **195 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Automatically qualify inbound demo requests, scrape prospect websites, and send AI-personalized outreach emails—all on autopilot.

## What This Workflow Does

This end-to-end lead automation workflow helps SaaS companies qualify and nurture inbound leads with zero manual work until human approval.

### Key Features

✅ **Smart Email Filtering** - Automatically flags personal emails (Gmail, Yahoo, etc.) and routes them to a polite regret message  
✅ **Website Intelligence** - Scrapes prospect websites and extracts business context  
✅ **AI Analysis** - Uses OpenAI to score ICP fit, identify pain points, and find personalization opportunities  
✅ **Personalized Outreach** - AI drafts custom emails referencing specific details from their website  
✅ **Human-in-the-Loop** - Approval gate before sending to ensure quality control  
✅ **Professional Branding** - Even rejected leads get a thoughtful response

## Perfect For

- B2B SaaS companies with inbound lead forms
- Sales teams drowning in demo requests
- Businesses wanting to personalize at scale
- Anyone needing intelligent lead qualification

## What You'll Need

- Jotform account (or any form tool with webhooks)
Create your form for free on [Jotform using this link](https://www.jotform.com/?partner=mediajade)
- OpenAI API key
- Gmail account (or any email service)
- n8n instance (cloud or self-hosted)

## Workflow Sections

1. **📧 Lead Intake & Qualification** - Capture form submissions and filter personal emails
2. **🕷️ Website Scraping** - Extract company information from their domain
3. **❌ Regret Flow** - Send polite rejection to unqualified leads
4. **🤖 AI Analysis** - Analyze prospects and draft personalized emails
5. **📨 Approved Outreach** - Human review + send welcome email

---

**Customization Tips:**

- Update the AI prompt with your company's ICP and value proposition
- Modify the personal email provider list based on your market
- Adjust the regret email template to match your brand voice
- Add Slack notifications for high-value leads
- Connect your CRM to log all activities

**Time Saved:** ~15-20 minutes per lead  
**Lead Response:** Under 5 minutes (vs hours/days manually)

## 🔗 Nodes Used

Jotform Trigger, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
