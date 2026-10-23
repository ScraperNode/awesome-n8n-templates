# 📊 Compare rental estimates from Zillow, HUD FMR and Rentometer with GPT-4.1

> ⚡ **36 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for?
Real estate investors and analysts evaluating buy-and-hold rentals, BRRRR deals, or any property where you want to triangulate rent estimates from multiple sources rather than trusting a single Zestimate.

## What does it do?
Send a property address in the chat panel and the AI Agent pulls rental data from three independent sources, then returns a side-by-side tabular comparison so you can quickly see the spread between estimates.

## How it works
1. **Chat Trigger** — you send a property address (and ideally bed/bath count) via the chat panel
2. **Zillow Rent** — calls the Apify Zillow Detail Scraper actor and extracts the `rentZestimate`
3. **Rentometer** — pulls local rent comparables (mean, median, percentiles)
4. **Zipcode-to-CBSA** — converts the property's ZIP code into a HUD CBSA code
5. **HUD Fair Market Rent** — uses the CBSA code to fetch government-published Fair Market Rent for the metro
6. **AI Agent** — synthesizes all four sources into a markdown table with a brief recommendation

## Set up steps
- Add **OpenAI** credentials to the Chat Model node (default model: GPT-4.1-mini)
- Register for a free **HUD User API key** at huduser.gov and add it as a Bearer Auth credential — referenced by both HUD nodes
- Get an **Apify API token** and subscribe to the `maxcopell/zillow-detail-scraper` actor
- Get a **Rentometer API key** at rentometer.com and add it as a Bearer Auth credential

Setup time: ~10 minutes once you have all four API keys.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
