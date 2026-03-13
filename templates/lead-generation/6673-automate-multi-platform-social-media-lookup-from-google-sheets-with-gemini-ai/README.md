# 🎣 Automate multi-platform social media lookup from Google Sheets with Gemini AI

> ⚡ **1,460 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 📌 Who’s it for

This template is designed for **campaigners, researchers, and organizers who need to enrich spreadsheets of contacts with publicly available social media profiles**. Ideal for advocacy campaigns, outreach, or digital organizing where fast, scalable people lookup is needed.

## ⚙️ What it does

This workflow scans a Google Sheet for rows marked as unanalysed (`"Analysed?" = false`), sends each contact to a dedicated AI-powered research agent, and returns structured public profile links across major platforms like:

- Twitter/X  
- LinkedIn  
- Facebook  
- Instagram  
- GitHub  
- TikTok  
- YouTube  
- Reddit  
- Threads  
- Medium  
- Substack  
- And more (18+ total)

It processes one contact per run for clarity and stability, appending the results back to the original Google Sheet.

## 🛠️ How to set it up

1. **Copy the [Google Sheet template](https://docs.google.com/spreadsheets/d/1nZ8a7MCU-Ku99cRsBkyer-zUPUb-QcMBzovzU3E-IH4/edit?usp=sharing)**  
   → This sheet includes sample columns and headers for contacts and social profile fields.
2. Paste your contact list at the end of the sheet.
3. For each new contact, make sure the **"Analysed?"** column is set to `false`.
4. Clone this workflow and [the AI Research Agent subworkflow](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/).
5. Connect your Google Sheets account in n8n.
6. Update the workflow with your sheet ID and sheet name (`Sheet1` by default).
7. Trigger the workflow on a schedule (e.g. every 15 minutes) or run it manually.

## ✅ Requirements

- **Google Sheets integration** set up in n8n
- Access to [this AI research subworkflow](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/)  
- OpenRouter API key
- n8n (self-hosted or cloud)

## 🧩 How to customize the workflow

- Modify the research agent to prioritize specific platforms or return only verified profiles.
- Add more profile columns to the Google Sheet and schema to match your custom fields.
- Add logic to send alerts (email, Slack, etc.) for specific contacts.
- Use an n8n webhook instead of a schedule to run the process on demand.
- Use a loop over all items to process all rows sequentially (only recommended for small datasets due to memory constraints)

## 🔗 Nodes Used

Google Sheets, Execute Sub-workflow, Schedule Trigger, Filter, Information Extractor, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
