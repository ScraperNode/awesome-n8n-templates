# 🎣 Generate B2B lead opportunities from websites with Brightdata & OpenRouter AI

> ⚡ **544 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow is designed for B2B professionals to automatically identify and summarize **business opportunities** from a company's website.

By leveraging **[Bright Data's](https://get.brightdata.com/unstoppable)** Web Unblocker and advanced AI models from OpenRouter, it scrapes relevant company pages ("About Us", "Team", "Contact"), analyzes the content for potential pain points and needs, and synthesizes a concise, actionable report.

The final output is formatted for direct use in documents, making it an ideal tool for sales, marketing, and business development teams to prepare for prospecting calls or personalize outreach.

---

## Who's it for

This template is ideal for:
- **B2B Sales Teams:** Quickly find and qualify leads by identifying specific business needs before a cold call.
- **Marketing Agencies:** Develop personalized content and value propositions based on a prospect's public website information.
- **Business Development Professionals:** Efficiently research potential partners or clients and discover collaboration opportunities.
- **Entrepreneurs:** Gain a competitive edge by understanding a competitor's strategy or a potential client's operations.

---

## How it works

1.  The workflow is triggered by a chat message, typically a URL from an n8n chat application.
2.  It uses Bright Data to scrape the website's sitemap and extract all anchor links from the homepage.
3.  An AI agent analyzes the extracted URLs to filter for pages relevant to company information (e.g., "about-us," "team," "contact").
4.  The workflow then scrapes the content of these specific pages.
5.  A second AI agent summarizes the content of each page, looking for business opportunities related to AI-powered automation.
6.  The summaries are merged and a final AI agent synthesizes them into a single, cohesive report, formatted for easy reading in a Google Doc.

---

## How to set up

1.  **Bright Data Credentials:** Sign up for a Bright Data account and create a Web Unblocker zone. In n8n, create new [Bright Data API credentials](https://get.brightdata.com/unstoppable) and copy your API key.
2.  **OpenRouter Credentials:** Create an account on OpenRouter and get your API key. In n8n, create new OpenRouter API credentials and paste your key.
3.  **Chat Trigger Node:** Configure the "When chat message received" node. Copy the production webhook URL to integrate with your preferred chat platform.

---

## Requirements

-   An active n8n instance.
-   A [Bright Data](https://get.brightdata.com/unstoppable) account with a Web Unblocker zone.
-   An OpenRouter account with API access.

---

## How to customize this workflow

-   **AI Prompting:** Edit the "systemMessage" parameters in the "AI Agent", "AI Agent1", and "AI Agent2" nodes to change the focus of the opportunity analysis. For example, modify the prompts to search for specific technologies, industry jargon, or different types of business challenges.
-   **Model Selection:** The workflow uses `openai/o4-mini` and `openai/gpt-5`. You can change these to other models available on OpenRouter by editing the `model` parameter in the OpenRouter Chat Model nodes.
-   **Scraping Logic:** The `extract url` node uses a regular expression to find `<a>` tags. This can be modified or replaced with an HTML Extraction node to target different elements or content on a website.
-   **Output Format:** The final output is designed for Google Docs. You can modify the last "AI Agent2" node's prompt to generate the output in a different format, such as a simple JSON object or a markdown list.

---


[Phil | Inforeole](https://inforeole.fr)

🇫🇷 Contactez nous pour automatiser vos processus

## 🔗 Nodes Used

AI Agent, Structured Output Parser, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
