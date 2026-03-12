# 🎬 Generate SEO/AEO-optimized Shopify blog articles with GPT-4 and Google Sheets

> ⚡ **964 views** · 🎬 [Content Creation & Video](../)

## Description

**This n8n template demonstrates how to automatically generate and publish SEO/AEO-optimized Shopify blog articles from a list of keywords using AI for content creation, image generation, and metadata optimization.**

## Who’s it for
Shopify marketers, content teams, and solo founders who want consistent, hands-off blog production with built-in SEO/AEO hygiene and internal linking.

## What it does
The workflow picks a keyword from your Google Sheet based on priority, search volume, and difficulty. It then checks your Shopify blog for existing slugs to avoid duplicate, drafts a 900+ word article optimized for SEO/AEO, generates a hero image, creates the article in Shopify, sets SEO metafields (title/description), and logs the result to your Sheets for tracking and future internal links.

## How it works
- **Google Sheets → Candidate selection:** Reads **Keywords**, **Links**, and **Published** tabs: ranks by priority → volume → difficulty. (In the workflow it is explained how to exactly set up the Google Sheets)
- **De-dupe slugs:** Paginates your blog via Shopify GraphQL to collect existing handles and make sure to use a different one.  
- **OpenAI content + image:** Builds a structured prompt (SEO/AEO and internal linking), calls Chat Completions and Image Generation for a hero image.  
- **Shopify publish:** Creates the article via REST and updates `title_tag` / `description_tag` metafields via GraphQL.  
- **Log + link graph:** Appends to **Published** tab to keep track of articles posted and **Links** tab for ongoing internal-link suggestions.  

## How to set up
1. Open **Set – Config** and fill: `shopDomain`, `siteBaseUrl`, `blogId`, `blogHandle`, `sheetId`, `author`. Optional: `autoPublish`, `maxPerRun`, `tz`.  
2. Create the Google Sheet with **Keywords**, **Links**, **Published** tabs using the provided column structure. I have personally used Semrush to generate that list of keywords. 
3. Add credentials: Shopify Admin token (Header/Bearer), OpenAI API key, and Google Service Account.

## Requirements
- Shopify store with Blog API access  
- OpenAI API key  
- Google Service Account with access to Google Sheets API (can be activated here [here](https://console.cloud.google.com/apis/api/sheets.googleapis.com)) 

## How to customize
- Change the cron in **Schedule Trigger** for different days/times.  
- Adjust `maxPerRun`, `autoPublish`, language or any other variables in the "Set - Config" node.
- Adjust the prompt from the "Code - Build Prompt" node.  
- Extend the Sheets schema with extra scoring signals if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
