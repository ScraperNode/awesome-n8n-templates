# 🎣 GPT 4.1 - Freelancer.com job alert system with auto proposal generator

> ⚡ **252 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Be first. Be relevant. Get hired.**  
This ready-to-import **n8n workflow** automates your entire Freelancer.com job search:  
it **scans new listings**, **filters the best ones with AI**, **writes proposal drafts**, and **sends them to Telegram instantly** — all while **logging every opportunity** into Google Sheets.

---

## 💡 Why Freelancers Love It

- ⚡ **Instant Alerts:** Get notified within minutes of new high-quality jobs.  
- 🧠 **AI-Powered Scoring:** Filters scams, vague clients, and low-value gigs automatically.  
- ✍️ **Smart Proposal Drafts:** GPT-4.1 crafts 150–200 word personalized proposals for you.  
- 📱 **Telegram Integration:** See job details + AI proposal in one alert message.  
- 📊 **Auto Tracking:** Logs every lead in Google Sheets with scores, notes, and timestamps.  

**Spend less time searching — and more time winning projects.**

---

## 🧩 What’s Included

- ✅ **n8n Workflow (.json)** — ready to import and launch  
- ✅ **Setup Guide (Markdown)** — complete 5-step configuration walkthrough  
 

---

## 🧰 Requirements

- Free **n8n Cloud** account (or self-hosted instance)  
- **OpenAI API key** (GPT-4.1 or GPT-4-mini)  
- **Telegram bot** + Chat ID (takes 2 minutes to create)  
- **Google Sheets** account  

---

## 🪜 5-Step Setup Guide (Detailed)

### 1️⃣ Prepare Your Tools
- Get your **OpenAI key** → [platform.openai.com](https://platform.openai.com)  
- Create a **Telegram bot** via **@BotFather** → copy your token  
- Use **@userinfobot** to get your **Chat ID**  
- Create a **Google Sheet** with headers:  
  `Timestamp | Job | Description | Link | AI Score | Reasoning | Red Flags | Client Type | AI Proposal | Alert Timestamp`  
- Keep all keys and URLs ready.

---

### 2️⃣ Import the Workflow in n8n
- Open n8n → **+ Workflow → Import from File** → choose the `.json` provided below.  
- Once imported, open these nodes and connect your credentials:
  - **OpenAI nodes** → add your API key  
  - **Google Sheets nodes** → sign in with Google  
  - **Telegram node** → paste your bot token + chat ID  
- Confirm the **Schedule Trigger** runs every **5 minutes** (default).  

---

### 3️⃣ Personalize Your Keywords & Filters
- Open **Settings (Keyword & Wishlist)**:
  - `Job Keyword`: e.g., `react`, `seo`, `logo design`, `automation`
  - `Wishlist`: e.g., `Budget &gt; $500, clear brief, long-term clients`
- The RSS node auto-fetches new jobs from Freelancer.com:
  ```
  https://www.freelancer.com/rss.xml?keyword={{$json['Job Keyword']}}
  ```
  Optional filters:  
  - `&min_price=500` → only projects $500+  
  - `&max_price=5000` → skip mega-projects  
- Adjust **Filter Job Quality**:
  - Description &gt; 100 chars  
  - Posted within the last 2 hours  
- Tune **AI Score Threshold (Gate Node)** to `&gt;= 7` for balanced alerts.

---

### 4️⃣ Test Your Automation
- Click **Execute Workflow** once.
- If everything is set:
  - 🟢 Nodes turn green (success)
  - 📩 Telegram shows your first job alert
  - 📊 Google Sheet updates with a new job entry
- If empty, try:
  - Broader keyword (e.g., `python` instead of `python scraper`)
  - Increase freshness (2 → 6 hours)

---

### 5️⃣ Go Live & Expand
- Activate your workflow.
- Let it run for 24–48 hours, then refine:
  - Raise **score threshold** to 8–9 for higher quality
  - Add **RSS nodes** for new categories (design, dev, content)
  - Extend alerts to **Slack, Discord, or Email**
  - Replace Google Sheets with **Airtable** or **Notion**
- **Pro Tip:** Use **Apify** to scrape Upwork, Fiverr, or niche job boards → feed results into the same analyzer chain.

---

## ⚙️ How It Works (Behind the Scenes)

```
Schedule → Fetch RSS → Filter → AI Analyze (score 1–10)
        → If score ≥ 7 → AI Proposal → Log to Sheets → Send Telegram Alert
```

You still review and apply manually (TOS-safe), but you’ll always be among the **first 5 applicants**.

---



## 🔌 Future-Proof Extensions

| Extension | Description |
|------------|--------------|
| **Apify Integration** | Scrape Upwork, Fiverr, or niche boards with structured data |
| **Multi-Channel Alerts** | Add Slack, Discord, or email digests |
| **Team Routing** | Send design jobs to one chat, dev jobs to another |
| **Advanced Scoring** | Add client history or location weighting |
| **Database Sync** | Replace Sheets with Notion, Airtable, or PostgreSQL |



## 🧾 Terms & Notes

- Manual review required (no auto-apply)  
- API costs: OpenAI ~$5–10/month  
- Respects Freelancer.com Terms of Service  
- All keys stored securely inside n8n credentials  

---

## 🏁 Summary

**Automate your freelancing workflow.**  
This system finds, filters, and drafts proposals for you while you sleep.  
⚙️ Plug it into n8n → 🔑 Add keys → 🎯 Go live → 💰 Start winning faster.

## 🔗 Nodes Used

Google Sheets, RSS Read, Telegram, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
