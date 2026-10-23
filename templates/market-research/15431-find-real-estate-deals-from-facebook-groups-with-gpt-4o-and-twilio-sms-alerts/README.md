# 📊 Find real estate deals from Facebook groups with GPT-4o and Twilio SMS alerts

> ⚡ **228 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?
Real estate investors, wholesalers, and house flippers who want to stop manually scrolling Facebook groups and have qualifying deals delivered to their phone instead.

## What does it do?
Every 4 hours, this workflow scrapes posts from 6 Facebook real estate groups, sends them all to GPT-4o, which extracts deal details (address, beds/baths, sqft, ARV, asking price, rehab cost, keywords like FSBO/Airbnb/BRRR) and classifies each post against your "buy box." Qualifying deals get texted to your phone via Twilio with a link to the original post.

## How it works
1. **Schedule Trigger** — runs every 4 hours between 9 AM and 9 PM
2. **6 HTTP Request nodes** — pull recent posts from each Facebook group via the Facebook Scraper3 API on RapidAPI
3. **Split Out → Merge → Aggregate** — flattens, combines, and bundles all posts into a single batch
4. **AI Agent (GPT-4o)** — analyzes every post, extracts deal data, and classifies as Preferred Deal / Not Preferred / Unclear
5. **Edit Fields** — formats the AI output into a readable SMS body
6. **Twilio** — sends the SMS to your phone

## Set up steps
- Get a **RapidAPI** key and subscribe to the Facebook Scraper3 API, then add it to each HTTP node
- Replace the 6 **Facebook group IDs** with groups you've joined (the ID is the number in the group URL)
- Add **OpenAI** credentials to the Chat Model node
- Edit the AI Agent's system message to match your **buy box** (bed/bath/sqft minimums, keywords, max price, location)
- Add **Twilio** credentials, then set the `to` and `from` numbers
- Adjust the cron schedule if you want to scrape more or less often

Setup time: ~15–20 minutes once you have all three API keys.

## 🔗 Nodes Used

HTTP Request, Twilio, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
