# 🔬 Business AI command center: Modular agents for Google Workspace, vector search & multi-channel reports

> ⚡ **350 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# 🚀 AI OPS Agent for n8n — Stop Doing Busy Work. Start Leading.
*Your AI workforce is ready. Are you?*

## 💰 What You Get: Your ROI in 30 Days

**Replace 10-15 hours/week of manual work** with intelligent automation that actually understands your business. While your competitors copy-paste data between tools, you'll be making strategic decisions.

---

## 🧠 The Powerhouse Stack That Does Everything

| **Module** | **Core Job** | **Your Competitive Edge** |
|------------|-------------|--------------------------|
| **MAIN AGENT** (Grok 4) | Orchestrator & brain | • Reads your message → builds execution plan<br />• Delegates to specialized agents<br />• Delivers results through your preferred channel |
| **Knowledge Agent** | Company-wide research assistant | • Vector-searches your Supabase docs instantly<br />• Runs live SQL queries for real-time numbers<br />• Hunts & parses Drive files automatically<br />• Pulls fresh web intelligence via Perplexity |
| **Google Sheets MCP Toolkit** | Spreadsheet automation | **Natural-language control** over **read/append/update/clear/create/delete** operations on any tab or range |
| **Google Drive MCP Toolkit** | File intelligence pipeline | • Auto-detects file types & extracts text from PDFs/CSVs<br />• Transcribes audio/video content<br />• Describes images with GPT-4o Mini |
| **Vector Store Loader** | Long-term memory system | • Auto-chunks new files<br />• Creates OpenAI embeddings<br />• Stores in Supabase for instant semantic search |
| **Postgres Chat Memory** | Conversation context | Never repeat yourself—every follow-up question builds on previous context |
| **Report Agent** | Executive briefing machine | • Converts raw outputs → clean Markdown → HTML<br />• Auto-emails/Slacks/Telegrams polished reports |
| **LinkedIn Scraper** | Talent & market intelligence | Scrapes full LinkedIn profiles via Apify, delivers structured JSON for analysis |
| **Multi-Channel Triggers** | Meet users where they work | **Slack • Gmail • Telegram • WhatsApp • HTTP Webhooks** |
| **LLM Layer** | Right model, right job | **Grok 4** (reasoning) • **Claude Sonnet 4** (analysis) • **GPT-4o Mini** (speed) • **Perplexity** (live web) |

---

## ⚡ How It Works (The Magic in 5 Steps)

1. **Message arrives** (Slack mention, email, webhook)
2. **MAIN AGENT** analyzes → selects optimal tool chain
3. **Specialized toolkits execute** (Sheets, Drive, SQL, Scraper...)
4. **Knowledge Agent** synthesizes everything using the perfect LLM
5. **Report Agent** packages & delivers results to your chosen channel

---

## 🎯 Real Commands That Save Hours Daily

&gt; **"Update the Marketing-Spend sheet with last week's totals, then email me a chart."**
&gt; 
&gt; **"Find the product-launch PDF from Drive, summarize key risks, post to Slack."**
&gt; 
&gt; **"Scrape this LinkedIn URL, rank the candidate's skills, add them to our CRM sheet."**
&gt; 
&gt; **"Create a new Sprint 11 tab, copy headers from Sprint 10, and ping the team."**

*One command. Multiple systems. Zero manual work.*

---

##  Why Choose This Over Other Products:

### ✅ **All Your Data, One Brain**
No more jumping between 12 different tools. Your AI agent connects everything.

### You can go further
If you want to increase the Agent capabilities or make the more powerfull you can reach the dev.

### ✅ **Vector Search Built-In**
Upload a 100-page document once. Search it forever with natural language.

### ✅ **Executive-Ready Reports**
Your C-suite gets clean HTML briefs, not raw data dumps that waste their time.

### ✅ **Deploy in Minutes**
Plug into your existing n8n setup, add credentials, watch routine ops handle themselves.

---

## 🔗 Nodes Used

Slack, Telegram, Telegram Trigger, Google Drive, Gmail, Markdown

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
