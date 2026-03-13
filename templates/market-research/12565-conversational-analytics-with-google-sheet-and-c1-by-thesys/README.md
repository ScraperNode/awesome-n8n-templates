# 📊 Conversational analytics with Google Sheet and C1 by Thesys

> ⚡ **101 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Conversational analytics with Google Sheet and C1 by Thesys
Turn any Google Sheet into a **chat-powered dashboard**. Ask questions in plain English and get **interactive charts, tables, and UI** (not just text) powered by **C1 by Thesys**.
**Outcome:** faster insights from spreadsheet data. No filters, pivot tables, or manual chart building.
### [Check out a working demo of this template here](https://www.thesys.dev/n8n?url=https%3A%2F%2Fasd2224.app.n8n.cloud%2Fwebhook%2Feb721104-ff1e-43f2-800d-000f04c1f427%2Fchat).

### Example Use Cases
You can use this setup for many real-world scenarios, such as:
##### Lead Tracking
- Upload your leads data to Google Sheets
- Ask questions like:
  - “How many new leads came from LinkedIn?”
  - “Which region generated the most leads?”

##### Marketing Campaign Analysis
- Store campaign performance data in a sheet
- Ask:
  - “Which campaign had the highest conversion rate?”
  - “Compare email vs paid ads performance”

### How it works
1. User sends a prompt
2. C1 model based on prompt will use CoinGecko MCP to fetch live data
3. C1 Model generates a UI Schema Response
4. Schema is rendered as UI using Thesys GenUI SDK on the frontend

### Setup
Make sure you have the following:
##### 1. Thesys API Key
You’ll need an API key to authenticate and use Thesys services.
👉 Get your key [here](https://console.thesys.dev/keys)  

##### 2. Google Sheet as a Data Source
Prepare a Google Sheet that contains your data:
- Column headers in the first row
- Clean, structured data (no merged cells)
- Example columns:
  - `date`
  - `campaign_name`
  - `leads`
  - `cost`


### Facing setup issues?
### If you get stuck or have questions:
- ### 💬 Join the [Thesys Community](https://discord.com/invite/Pbv5PsqUSv)  
- ### 📧 Email support:  support@thesys.dev

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
