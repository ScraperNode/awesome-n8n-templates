# 📊 Validate startup ideas and generate business plans from Telegram with Perplexity and GPT-4o

> ⚡ **102 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives startup ideas via a Telegram bot, uses OpenAI (GPT-4o and GPT-4o mini) plus Perplexity to score, research, and validate them, then generates a full business plan in Google Docs, logs key results to Google Sheets, and returns the plan link in Telegram.

## How it works
1. Receives a Telegram message containing a raw startup idea.
2. Uses OpenAI (GPT-4o mini) to structure the idea, detect its language, and assign an initial 1–10 idea score with improvement feedback.
3. If the idea score is below the configured threshold, sends the score reasoning back to Telegram and stops.
4. If the score meets the threshold, asks in Telegram for approval to run full research and plan generation.
5. After approval, uses Perplexity to research the target market and competitors and then uses OpenAI (GPT-4o) to structure the findings, score market and competition, and generate differentiation and moat notes.
6. Uses OpenAI (GPT-4o mini) to validate demand, risks, and go-to-market approach, then computes a composite score and recommendation.
7. Uses OpenAI (GPT-4o) to write a full business plan, saves it to a Google Doc, appends a summary row to Google Sheets, and sends the Google Doc link back to Telegram.

## Setup
1. Create and connect a Telegram bot credential, then paste the workflow’s Telegram trigger/webhook details by enabling the trigger and messaging your bot.
2. Add an OpenAI API credential for GPT-4o and GPT-4o mini, and a Perplexity API credential for the Sonar model used for market and competitor research.
3. Connect Google Docs and Google Sheets OAuth2 credentials, choose the target Google Sheets document, and ensure it has a sheet/tab named "plan" with the expected columns.
4. Update the configuration values as needed (minimum idea score, default country, model names, and the Google Docs folder ID for where plans are created).

## Additional info
## Validate startup ideas and generate business plans from Telegram with Perplexity and GPT-4o

# [Open full documentation on Notion](https://automatisation.notion.site/Startup-Idea-Validator-on-Telegram-Perplexity-GPT-4o-Course-Notes-3993d6550fd98187b93ee7cf30f33374)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Docs, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
