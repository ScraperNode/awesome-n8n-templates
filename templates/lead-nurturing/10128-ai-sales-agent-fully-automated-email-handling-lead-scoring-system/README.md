# 💬 AI sales agent — fully automated email handling & lead scoring system

> ⚡ **297 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# 🤖 AI Sales Agent — Fully Automated Email Handling & Lead Scoring System

### Automate lead outreach, analyze replies with AI, and keep your CRM always in sync — hands-free.

This workflow acts as a **24/7 intelligent sales assistant** that not only sends personalized cold emails but also **reads and interprets replies**, updates your CRM, and even writes contextual responses — just like a real sales rep would.  
Ideal for founders, growth teams, and agencies who want to automate outreach and follow-ups without losing the human touch.

---

## 🧩 What This Workflow Does

### 🔹 1. Smart AI Email Analysis  
Every incoming email is parsed and sent to GPT-4o for structured classification:
- Detects **unsubscribe requests**, **automated replies**, or **manual responses**  
- Extracts **intent, sentiment, urgency, and key points**  
- Determines the **next best action** — follow-up, escalate, or close  

### 🔹 2. Personalized AI Replies  
When appropriate, the workflow automatically drafts replies that:
- Match the sender’s tone and intent  
- Address objections using *feel-felt-found* logic  
- Suggest the most relevant product or resource  
- Sign off naturally (e.g. “Sofia from Tech Powered Growth”)  

### 🔹 3. Lead Scoring & CRM Sync (NocoDB)  
Leads are continuously enriched and scored based on activity:
- +5 points for interested replies, +2 for clicks, –10 for unsubscribes  
- Status automatically transitions between *cold → warm → hot*  
- Daily maintenance updates decay inactive leads and schedule re-engagement  

### 🔹 4. Engagement Tracking & Insights  
The workflow tracks **opens, clicks, bounces, spam, and unsubscribes** from Brevo (Sendinblue), updating CRM records instantly.  
Each day, it generates a **performance report** with lead distribution, score changes, and actionable recommendations.

---

## ⚙️ Integrations Used
- **OpenAI GPT-4o-mini** — intent classification & reply generation  
- **Brevo (Sendinblue)** — email sending & webhook event tracking  
- **Gmail** — real-time incoming replies & outbound responses  
- **NocoDB** — lead management, scoring, and analytics  
- **n8n Code Nodes** — smart logic for scoring, decay, and decision flow  

---

## 🚀 Key Benefits
- ✅ Save hours of manual email triage and follow-ups  
- 💬 Maintain *human-sounding* conversations with prospects  
- 📊 Keep lead data accurate and always up-to-date  
- ⚡ Automatically nurture, score, and re-engage leads  
- 📈 Get daily actionable analytics for your sales pipeline  

---

## 🛠️ Setup Instructions
1. Connect your **NocoDB**, **Brevo**, **Gmail**, and **OpenAI** credentials  
2. Adjust your NocoDB table structure or use the sample schema provided  
3. Set your sender details in the “Send Initial Outreach Email” node  
4. Customize the AI response prompt with your brand tone or offer  
5. Turn on the triggers — and watch your AI sales assistant go to work  

---

## 💡 Ideal For
- Solo founders automating outreach  
- B2B agencies handling multiple clients  
- Growth engineers and sales ops teams  
- SaaS companies with inbound or outbound funnels  

---

## 🧠 Pro Tip
Pair this workflow with your **lead scraping or enrichment flow** to create a fully autonomous sales system — from discovery to closed deal.

## 🔗 Nodes Used

Cron, HTTP Request, Gmail, NocoDB, Brevo Trigger, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
