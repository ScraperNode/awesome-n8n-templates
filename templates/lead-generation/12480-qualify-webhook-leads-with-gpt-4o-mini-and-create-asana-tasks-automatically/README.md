# 🎣 Qualify webhook leads with GPT-4o-mini and create Asana tasks automatically

> ⚡ **284 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## 📊 Description
Automate your inbound lead qualification pipeline by enriching raw lead data, scoring it with AI, and instantly creating follow-up tasks for your sales team. 🎯🤖 This workflow receives new leads via webhook, enriches them using RocketReach to fetch verified emails and contact details, applies confidence-based filtering, and uses GPT-4o-mini to score each lead based on seniority, company fit, and data quality. High-quality leads automatically generate Asana tasks and Slack notifications, while low-quality leads are safely filtered out — ensuring your team focuses only on the best opportunities. 🚀📋
## 🔁 What This Template Does
1️⃣ Receives inbound lead data via webhook (name, company, job title, LinkedIn URL). 🌐
 2️⃣ Normalizes incoming data into a clean, structured format. 🧾
 3️⃣ Enriches lead profiles using RocketReach to fetch emails and phone numbers. 📇
 4️⃣ Calculates email confidence scores based on quality grades (A–D). 📊
 5️⃣ Filters out low-confidence leads automatically. 🚫
 6️⃣ Uses AI (GPT-4o-mini) to score qualified leads from 1–10. 🤖
 7️⃣ Assigns priority levels (High / Medium / Low) with reasoning. 🧠
 8️⃣ Creates an Asana task for leads scoring above the threshold. ✅
 9️⃣ Sends Slack notifications for both qualified and disqualified leads. 💬
 🔟 Returns a structured webhook response with scoring results. 🔁
 1️⃣1️⃣ Sends Gmail alerts automatically if any workflow error occurs. 🚨
## ⭐ Key Benefits
✅ Eliminates manual lead enrichment and qualification
 ✅ Uses verified contact data from RocketReach
 ✅ AI scoring ensures consistent, unbiased lead evaluation
 ✅ Automatically routes high-quality leads to sales via Asana
 ✅ Keeps teams informed with real-time Slack notifications
 ✅ Prevents sales effort from being wasted on low-quality leads
## 🧩 Features
- Webhook-based inbound lead intake
- RocketReach profile enrichment
- Email confidence scoring logic
- AI lead scoring with strict JSON output
- Configurable quality and score thresholds
- Automatic Asana task creation
- Slack alerts for qualified and disqualified leads
- Gmail-based error handling
Frontend-ready webhook responses
## 🔐 Requirements
- RocketReach API key
- OpenAI API key (GPT-4o-mini recommended)
- Asana OAuth2 credentials
- Slack API credentials
- Gmail OAuth2 credentials (for error alerts)
- Webhook client sending lead details (first_name, last_name, company, job_title, linkedin_url)
## 🎯 Target Audience
- B2B sales teams handling inbound leads
- Revenue operations (RevOps) teams
- SaaS companies optimizing lead qualification
- Lead generation agencies
- Automation teams building AI-driven sales pipelines

## 🔗 Nodes Used

Asana, HTTP Request, Slack, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
