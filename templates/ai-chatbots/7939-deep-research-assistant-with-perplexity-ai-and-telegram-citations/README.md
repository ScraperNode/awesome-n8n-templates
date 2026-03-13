# 🤖 Deep research assistant with Perplexity AI and Telegram citations

> ⚡ **838 views** · 🤖 [AI Chatbots & Agents](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

**Turn your Telegram bot into a real-time research assistant** with this intelligent n8n workflow. Designed for founders, analysts, and knowledge workers, this automation uses Perplexity Sonar and Sonar Pro to deliver **concise, citation-rich answers** to complex queries — directly inside Telegram.

---

**🔍 What It Does**
- **✅ Smart Query Routing**  
  Automatically selects the right tool based on query complexity — Sonar for fast lookups, Sonar Pro for multi-source synthesis.

- **📚 Cited Research Summaries**  
  Includes clickable URLs from Perplexity’s source data for transparency and auditability.

- **🧠 Session Memory**  
  Maintains chat context using Telegram chat ID for follow-up questions and threaded insight.

- **🔐 Secure Access Filter**  
  Restricts bot usage to authorized Telegram users.

- **⚙️ Customizable Agent Behavior**  
  Easily adjust tone, tool preferences, and citation style via system message.

---

**🚀 Use Cases**
- Market research & competitor analysis  
- Academic and scientific deep-dives  
- Legal and transcript summarization  
- Podcast, video, and trend monitoring  
- Personal AI assistant for founders and consultants

---

**🛠 Setup Instructions**
1. Create a Telegram bot via [@BotFather](https://t.me/BotFather) and add your token.  
2. Add your OpenAI and Perplexity API keys.  
3. Update the filter node with your Telegram user ID.  
4. Deploy and start chatting — responses appear in Telegram.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Filter, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
