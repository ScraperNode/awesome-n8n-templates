# 🤝 Manage WooCommerce store with natural language using GPT-4.1 and MCP server

> ⚡ **1,021 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# WooCommerce AI Agent — n8n Workflow (Overview)

**Description:** Turn your WooCommerce store into a conversational AI assistant — create products, place orders, run reports and manage coupons using natural language via n8n + an MCP Server.

**Key features**
- Natural-language commands mapped to WooCommerce actions (products, orders, reports, coupons).  
- Structured JSON outputs + lightweight mapping to avoid schema errors.  
- Calls routed through your MCP Server for secure, auditable tool execution.  
- Minimal user prompts — agent auto-fetches context and asks only when necessary.  
- Extensible: add new tools or customize prompts/mappings easily.

# Demo of the workflow:

[Youtube Video](https://youtu.be/HuFGGH29uyQ)

# 🚀 Setup Guide: WooCommerce + AI Agent Workflow in n8n

## 1. Prerequisites
- Running n8n instance  
- WooCommerce store with REST API keys  
- OpenAI API key  
- MCP server (production URL)  

---

## 2. Import Workflow
1. Open n8n dashboard  
2. Go to **Workflows → Import**  
3. Upload/paste the workflow JSON  
4. Save as `WooCommerce AI Agent`  

---

## 3. Configure Credentials

### OpenAI
- Create new credential → **OpenAI API**  
- Add your API key → Save & test  

### WooCommerce
- Create new credential → **WooCommerce API**  
- Enter Base URL, Consumer Key & Secret → Save & test  

### MCP Client
- In **MCP Client node**, set **Server URL** to your MCP server production URL  
- Add authentication if required  

---

## 4. Test Workflow
1. Open workflow in editor  
2. Run a sample request (e.g., create a test product)  
3. Verify product appears in WooCommerce  

---

## 5. Activate Workflow
- Once tested, click **Activate** in n8n  
- Workflow is now live 🎉  

---

## 6. Troubleshooting
- **Schema errors** → Ensure fields match WooCommerce node requirements  
- **Connection issues** → Re-check credentials and MCP URL

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, MCP Client Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
