# 📊 Generate complete SEO strategy reports with SerpAPI data and GPT-4 Agent team

> ⚡ **3,800 views** · 📊 [Market Research & Insights](../)

## Description

## Overview
This workflow deploys a fully autonomous "AI SEO Agency" inside your n8n instance.

Unlike simple chatbots, this is a **hierarchical agent swarm**. A "Director" agent acts as the project manager, using live market data to orchestrate a team of 6 specialized AI workers. It takes a single user prompt and turns it into a comprehensive, professional-grade SEO strategy report.

## Key Features
* **Hierarchical Architecture:** A "Manager" agent delegates tasks to "Worker" agents.
* **Live Market Research:** Uses **SerpApi** to fetch real-time Google Search results and competitor data.
* **Conversational Memory:** Remembers business details across the chat session.
* **6 Expert Specialists:** Includes dedicated agents for Keyword Research, Technical SEO, Link Building, Analytics, Local SEO, and Content Writing.

## How it works
1.  **Analysis:** The **SEO Director Agent** receives your request and consults its memory.
2.  **Live Research:** The Director uses the **SerpApi** tool to perform live Google searches on the target website and niche to gather context.
3.  **Delegation:** Based on the research, the Director dynamically assigns tasks to the relevant **Specialist Agents** (e.g., calling the "Technical Specialist" for site speed issues or the "Keyword Specialist" for content ideas).
4.  **Synthesis:** The Director compiles the outputs from all specialists into one cohesive, actionable strategy report.

## Set up steps
**Estimated time: 5 minutes**

1.  **OpenAI Keys:** Add your OpenAI API Key to all 7 "OpenAI Chat Model" nodes (1 for the Director, 6 for the Specialists).
2.  **SerpApi Key:** Open the "SEO Director Agent" node. Under "Tools" &gt; "SerpApi," add your SerpApi Key (free tier available). This enables the live Google Search capability.
3.  **Run:** Toggle the workflow to "Active" and start chatting!

## About the Creator
Built by **Pixril**. We specialize in building advanced, production-ready AI agents for n8n.
Find more professional workflows in our shop: **https://pixril.etsy.com**

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, SerpApi (Google Search), Chat Trigger, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
