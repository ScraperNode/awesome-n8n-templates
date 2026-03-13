# 📊 Generate startup ideas & business plans with GPT-4.1, Perplexity Sonar & Claude Sonnet

> ⚡ **1,805 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 🚀 Start-up Ideas Generator – From Idea to Executive Summary in Minutes
Description:
This AI-powered n8n workflow helps you brainstorm and validate start-up ideas, perform market research using Perplexity Sonar, and automatically generate a professional business plan — all within minutes.

It’s designed for entrepreneurs, accelerators, venture studios, and ideation teams looking to go from a single prompt to a detailed proposal ready to pitch or develop.

Watch step-by-step build video of n8n workflows like this:
https://www.youtube.com/@Automatewithmarc

## Setup Instructions
Required Credentials:

OpenAI API Key – For GPT-4.1
Perplexity Sonar Access Token – For deep research
Anthropic Claude API Key – For business plan writing

Google Service Account Credentials – To write to Docs
## How It Works:
💬 Chat Trigger
 Start the process by typing a simple request like “Give me a few start-up ideas in AI tech.”

🧠 AI Research Agent (OpenAI + Perplexity Sonar)
 The system defines the research scope, taps into Perplexity AI for deep market scans, and outputs high-potential business opportunities including:

Market size
Customer pain points
Competition overview
Differentiation strategy

📄 Business Case Generator (Claude)
 Each opportunity is expanded into a complete business plan using Claude Sonnet, covering:

Executive summary
Market analysis
Product description
Competitor gap
Business model & GTM
Financials & roadmap

📃 Google Docs Export
 The full business plan is automatically inserted into a connected Google Doc for easy sharing, editing, or pitching.
## Google Docs Configuration:
Create a Google Doc titled "Startup Business Plan" (or adjust the title in the node settings)
Share the document with your Google service account email
Update the Document ID field in the Google Docs node accordingly
Ensure that the structure accepts plain text input — formatting is handled by the node

## Tools & Models Used:
LangChain Chat Trigger

OpenAI GPT-4.1 (Research Prompt Structuring)

Perplexity Sonar Deep Research (Market Research)

Anthropic Claude Sonnet (Business Plan Writing)

Google Docs Node (Formatted Output)

## Use Cases:
Rapid ideation for venture building or incubators

Validating start-up ideas before prototyping

Automating market research + proposal writing

Generating investor-ready pitch materials

## 🔗 Nodes Used

Google Docs, Basic LLM Chain, Anthropic Chat Model, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
