# 🤝 Automate monthly merchant risk reviews with Supabase, Perplexity and Claude

> ⚡ **20 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview


This consists 3 different workflows. Each one should be saved into individual workflows.

The goal of these workflows is to automate a tedious process of creating a monthly merchant and industry review deck a task that might take a risk team 20+ hours to build


## How it works
1. Runs on a monthly schedule and initializes the run metadata (month, execution ID, timestamp).
2. Retrieves active merchants and MCC reference data from Supabase, groups merchants by MCC, and uses Perplexity plus Claude to generate an MCC risk snapshot with key flags and a recommended action.
3. Writes each MCC snapshot back to Supabase and aggregates all MCC snapshots for the run.
4. Pulls high-risk merchants for the current month from Supabase and gathers external signals by screening names with OpenSanctions, searching recent cases in CourtListener, fetching recent Google reviews via Apify, and collecting adverse media via Tavily.
5. Scrapes each merchant website with Firecrawl and uses Claude to classify the business vertical and flag restricted content.
6. Uses Claude with Pinecone retrieval of prior Risk Committee decisions (embedded with OpenAI) to produce a single recommended action per merchant and inserts those recommendations into Supabase.
7. Calculates 12-month portfolio trends from Supabase metrics, generates a short portfolio narrative with Claude, saves it to Supabase, and records a monthly manifest summarizing the run.
8. Exposes a webhook that fetches the stored Supabase data for a requested month, formats it for downstream slide-building, and returns the JSON response.

## Setup
1. Create and connect credentials for Supabase, Anthropic (Claude), Perplexity, OpenAI (embeddings), Pinecone, Apify, Tavily, Firecrawl, and the two HTTP header auth credentials used for OpenSanctions and CourtListener.
2. In Supabase, create/confirm the required tables and fields referenced by the workflow (merchants, mcc_codes, monthly_metrics, mcc_risk_snapshots, recommended_actions, portfolio_snapshots, monthly_manifest).
3. Populate the Pinecone index name (n8nrisk) and run the manual ingestion workflow to embed and insert the provided prior decision examples before enabling the monthly recommendation step.
4. Update any environment-specific constants such as the webhook path usage in your slide-building tool and verify the Supabase filters match your month format (yyyy-MM) and risk thresholds.
5. If using the webhook integration, copy the production webhook URL and configure it in your external deck builder (for example, Claude “cowork”) to request the month parameter as needed.

## Additional info
This template runs a monthly risk review that pulls merchant and MCC data from Supabase, researches industry changes with Perplexity, screens high-risk merchants using OpenSanctions, CourtListener, Apify, Tavily, and Firecrawl, and uses Anthropic Claude plus Pinecone to store risk snapshots and recommendations.

YouTube Video: https://www.youtube.com/watch?v=u8-bQlMtAKE&feature=youtu.be

Free Skool AI/n8n Group: https://www.skool.com/data-and-ai
LinkedIn: https://www.linkedin.com/in/ryan-p-nolan/
Twitter/X:https://x.com/RyanMattDS
Website: https://ryanandmattdatascience.com/

## 🔗 Nodes Used

HTTP Request, Webhook, Supabase, Schedule Trigger, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
