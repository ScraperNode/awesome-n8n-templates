# 🎣 Automated lead generation & contact enrichment with Hunter.io and Perplexity AI

> ⚡ **2,401 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Who is this for?

This template is ideal for B2B founders, solopreneurs, growth marketers, SDRs, or anyone looking to scale their lead generation and enrichment with **no-code tools** to low-code tools.

Whether you're building your first lead pipeline or upgrading a manual spreadsheet, LeadAIgen automates the entire discovery → enrichment → logging process using AI and verified email data.

---

# What problem does this solve?

Lead sourcing and enrichment are time-consuming, inconsistent, and often require multiple tools or manual scraping.

This workflow solves that by chaining AI + contact discovery, validating everything, and storing clean, structured data in Google Sheets — ready for outreach or CRM sync.

---

# What this workflow does:

✅ Accepts an industry/topic prompt via chat trigger or Telegram,  
🤖 Uses OpenRouter (Perplexity) to find 15 relevant companies with domains,  
📤 Parses the results, filters duplicates based on your Google Sheet,  
📩 Enriches each domain with up to 3 real personal emails using Hunter.io,  
💡 If no emails found → Fallback AI tries to locate general email info,  
📊 Updates your Google Sheet with all valid enriched leads (status: “Enriched”),  
🔁 Runs in safe batches of 10 to protect your API limits,  
🛠️ Includes logic to clean data, validate JSON, and slice leads.

---

# Setup:

- Create Google Sheets, Hunter.io, and OpenRouter credentials in your n8n instance  
- Import the JSON workflow  
- Set your OpenRouter model (default = Perplexity Sonar Large)  
- Connect your Google Sheet (must contain a header row with `Domain`, `Status`, etc.)  
- Paste your Hunter API key into the Hunter.io node  
- (Optional) Add Telegram Bot trigger to chat with your lead generator  

---

# 🗒 Color-coded workflow notes:

To make customization easier, this template includes Innovatio's signature visual sticky note system inside the n8n canvas.

You’ll find:

🟩 Green Notes → Main Steps  
The core logic blocks — from company generation to AI fallback and Google Sheets update.

🟦 Blue Notes → Personalization Tips  
How to adapt filters, prompts, and data mappings for your business needs.

🟨 Yellow Notes → Optional / Advanced  
Expand with Telegram chat triggers, Airtable integration, CRM push, or lead scoring logic.

🟫 Gray Notes → Welcome, Outro & Upgrade Suggestions  
Clear guidance and CTAs if you want help scaling this further.

👉 Each node includes comments or setup notes so you can learn the system as you use it.

---

# How to customize this workflow?

🎯 Swap Google Sheets for Airtable for relational views and tagging,  
🤖 Replace Perplexity with GPT-4, Claude, or Mixtral inside OpenRouter,  
📬 Auto-send enriched leads to Gmail, Slack, or your CRM,  
🗣️ Connect this to Telegram for on-the-go company generation,  
🔁 Want dynamic lead scoring or auto-categorization? We can help — **velebit@innovatio.design**

---

# Final notes

This template was designed by **Velebit from Innovatio**.  
External links (e.g. documentation or support email) lead only to official sources with no affiliate tracking or paid placements.

A separate license applies to the paid version on Gumroad, which includes commercial use rights, extended fallback logic, and advanced upgrade tips.

## 🔗 Nodes Used

Airtable, Google Sheets, Telegram Trigger, Hunter, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
