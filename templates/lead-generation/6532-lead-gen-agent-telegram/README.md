# 🎣 Lead gen agent (Telegram)

> ⚡ **5,690 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview
Use your voice or text to command a Telegram-based AI agent that scrapes leads or generates detailed research reports—instantly.

This workflow turns your Telegram bot into a full-blown outbound machine. Just tell it what type of leads you need, and it’ll use Apollo to find and save them into a spreadsheet. Or drop in a LinkedIn profile, and it’ll generate a personalized research dossier with info like job title, company summary, industry insights, and more. It handles voice messages too—just speak your request and get the results sent back like magic.

### Who’s it for
- Cold emailers and growth marketers  
- Solo founders running outbound  
- SDRs doing daily prospecting  
- Agencies building high-quality lead lists or custom research for clients  

### How it works
- Triggered by a message (text or voice) in Telegram  
- If it’s voice, it transcribes using OpenAI Whisper  
- Uses an AI agent to interpret intent: scrape leads or research a person  
- For lead scraping:
  - Gathers criteria (e.g., location, job title) via Telegram  
  - Calls the Apollo API to return fresh leads  
  - Saves the leads to Google Sheets  
- For research reports:
  - Takes a LinkedIn profile link  
  - Uses AI and lead data tools to create a 1-page professional research report  
  - Sends it back to the user via email

### Example outputs
- **Lead scraping**: Populates a spreadsheet with names, roles, LinkedIn links, company info, emails, and more  
- **Research report**: A formatted PDF-style brief with summary of the person, company, and key facts

### How to set up
1. Connect your Telegram bot to n8n  
2. Add your OpenAI credentials (for Whisper + Chat agent)  
3. Plug in your Apollo API key or scraping tool  
4. Replace the example spreadsheet with your own  
5. Customize the prompts for tone or data depth  
6. (Optional) Add PDF generation or CRM sync

### Requirements
- Telegram Bot Token  
- OpenAI API Key  
- Apollo (or other scraping API) credentials  
- LinkedIn URLs for research functionality

### How to customize
- Replace Apollo with Clay, People Data Labs, or another scraping tool  
- Add a CRM push step (e.g. Airtable, HubSpot, Notion)  
- Add scheduling to auto-scrape daily  
- Reformat the research report as a downloadable PDF  
- Change the agent’s tone or role (e.g. “Outreach Assistant,” “Investor Scout,” etc.)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
