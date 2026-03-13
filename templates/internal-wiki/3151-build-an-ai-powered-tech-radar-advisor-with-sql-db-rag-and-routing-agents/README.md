# 📖 Build an AI-powered tech radar advisor with SQL DB, RAG, and routing agents

> ⚡ **14,947 views** · 📖 [Internal Wiki & Knowledge Base](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI-Powered Tech Radar Advisor

This project is built on top of the famous open source [ThoughtWorks Tech Radar](https://radar.thoughtworks.com/).  

You can use this template to build your own AI-Powered Tech Radar Advisor for your company or group of companies.

![Tech Constellation](https://raw.githubusercontent.com/dragonjump/techconstellation/refs/heads/gh-pages/build-your-own-radar-master/src/images/image.png)

![Tech Radar Constellation](https://raw.githubusercontent.com/dragonjump/techconstellation/refs/heads/gh-pages/build-your-own-radar-master/src/images/demo.png)

## Target Audience

This template is perfect for:
- **Tech Audit & Governance Leaders:** Those seeking to build a tech landscape AI platform portal.
- **Tech Leaders & Architects:** Those aiming to provide modern AI platforms that help others understand the rationale behind strategic technology adoption.
- **Product Managers:** Professionals looking to align product innovation with the company's current tech trends.
- **IT & Engineering Teams:** Teams that need to aggregate, analyze, and visualize technology data from multiple sources efficiently.
- **Digital Transformation Experts:** Innovators aiming to leverage AI for actionable insights and strategic recommendations.
- **Data Analysts & Scientists:** Individuals who want to combine structured SQL analysis with advanced semantic search using vector databases.
- **Developers:** Those interested in integrating RAG chatbot functionality with conversation storage.

---

# 1. Description

**Tech Constellation** is an AI-powered Tech Radar solution designed to help organizations visualize and steer their technology adoption strategy.  
It seamlessly ingests data from a Tech Radar Google Sheet—converting it into both a MySQL database and a vector index—to consolidate your tech landscape in one place.

The platform integrates an interactive AI chat interface powered by four specialized agents:
- **AI Agent Router:** Analyzes and routes user queries to the most suitable processing agent.
- **SQL Agent:** Executes precise SQL queries on structured data.
- **RAG Agent:** Leverages semantic, vector-based search for in-depth insights.
- **Output Guardrail Agent:** Validates responses to ensure they remain on-topic and accurate.

This powerful template is perfect for technology leaders, product managers, engineering teams, and digital transformation experts looking to make data-driven decisions aligned with strategic initiatives across groups of parent-child companies.

---

# 2. Features
 
### Data Ingestion
- A Google Sheet containing tech radar data is used as the primary source.
  - The data is ingested and converted into a MySQL database.
  - Simultaneously, the data is indexed into a vector database for semantic (vector-based) search.
  
### Interactive AI Chat
- **Chat Integration:** An AI-powered chat interface allows users to ask questions about the tech radar.
- **Customizable AI Agents:**
  1. **AI Agent Router:** Determines the query type and routes it to the appropriate agent.
  2. **SQL Agent:** Processes queries using SQL on structured data.
  3. **RAG Agent:** Performs vector-based searches on document-like data.
  4. **Output Guardrail Agent:** Validates queries and ensures that the responses remain on-topic and accurate.

---

## Usage Examples
1. Tell me, is TechnologyABC adopted or on hold, and why?
2. List all the tools that are considered part of the strategic direction for company3 but are not adopted.

---

## Project Links & Additional Details

- **GitHub Repository (Frontend Interface Source Code):** [github.com/dragonjump/techconstellation](https://github.com/dragonjump/techconstellation)
- **Try It:** [https://scaler.my](https://scaler.my)

## 🔗 Nodes Used

Cron, Google Sheets, Webhook, Google Drive, MySQL, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
