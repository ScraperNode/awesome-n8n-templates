# 📊 AI SEO readability audit: Check website friendliness for LLMs

> ⚡ **7,857 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Who is this for?
This workflow is designed for SEO specialists, content creators, marketers, and website developers who want to ensure their web content is easily accessible, understandable, and indexable by Large Language Models (LLMs) like ChatGPT, Perplexity, and Google AI Overviews. If you're looking to optimize your site for the evolving AI-driven search landscape, this template is for you.

## What problem is this workflow solving? / Use case
Modern AI tools often crawl websites without executing JavaScript. This can lead to them "seeing" a very different version of your page than a human user or traditional search engine bot might. This workflow helps you:
- Identify how much of your content is visible without JavaScript.
- Check for crucial on-page SEO elements that AI relies on (headings, meta descriptions, structured data).
- Detect if your site presents JavaScript-blocking warnings.
- Get an AI-generated readability score and actionable recommendations to improve AI-friendliness.

## What this workflow does
1.  **Receives a URL** via a chat interface.
2.  **Sanitizes the input URL** to ensure it's correctly formatted.
3.  **Fetches the website's HTML** content, simulating a non-JavaScript crawler (like Googlebot).
4.  **Extracts key HTML features**: visible text length, presence of H1/H2/H3 tags, meta description, Open Graph data, structured data (JSON-LD), and `&lt;noscript&gt;` tags. It also checks for common JavaScript-blocking messages.
5.  **Performs an AI SEO Analysis** using an LLM (via OpenAI) based on the extracted features.
6.  **Provides a report** including an AI Readability Score (0-10), a summary, actionable recommendations, and a reminder to check the `robots.txt` file for AI bot access.

## Setup
- **Estimated setup time:** 2-5 minutes.
1.  Import this workflow into your n8n instance.
2.  Ensure you have an OpenAI account and API key.
3.  Configure the "OpenAI Chat Model" node with your OpenAI API credentials. If you don't have credentials set up yet, create new ones in n8n.
4.  Activate the workflow.
5.  Interact with the chat interface provided by the "When chat message received" trigger node (you can access this via its webhook URL).

## How to customize this workflow to your needs
- **Change LLM Model:** In the "OpenAI Chat Model" node, you can select a different model that suits your needs or budget.
- **Adjust AI Prompt:** Modify the prompt in the "AI SEO Analysis" node (Chain Llm) to change the focus of the analysis or the format of the report. For example, you could ask for more technical details or a different scoring system.
- **User-Agent:** The "Get HTML from Website" node uses a Googlebot User-Agent. You can change this to simulate other bots if needed.
- **JS Block Indicators:** The "Extract HTML Features" node contains a list of common JavaScript-blocking phrases. You can expand this list with other languages or specific messages relevant to your checks.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
