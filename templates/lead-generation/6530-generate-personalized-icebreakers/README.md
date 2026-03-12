# 🎣 Generate personalized icebreakers

> ⚡ **1,678 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Overview

Create hyper-personalized cold outreach messages at scale by combining Google Sheets, web scraping, and AI.
This workflow is perfect for sales teams, SDRs, and agency owners looking to boost reply rates with icebreakers that *actually feel personal*. It takes lead info from a Google Sheet—including name, email, company, and website—then visits each site, pulls meaningful text, and crafts a tailored message using AI. The personalized message is then written back into your lead sheet, ready for use in cold email, LinkedIn DMs, or CRM enrichment.

### Who’s it for
- Cold email outreach specialists  
- B2B sales and SDR teams  
- Lead generation agencies  
- Founders doing outbound manually  

### How it works
- Pull lead data from Google Sheets  
- Loop through each lead and scrape their website using an HTTP node  
- Clean and format the website content  
- Use OpenAI to generate a custom-written icebreaker for each lead  
- Write the final icebreaker back into the spreadsheet

### How to set up
1. Connect your Google Sheets account  
2. Replace the spreadsheet ID and column names with your own  
3. Set up your OpenAI credentials (or whichever LLM you prefer)  
4. Tweak the prompt for tone or style  
5. Hit "Execute Workflow" and watch the sheet populate

### Requirements
- Google Sheets credentials  
- OpenAI (or any compatible LLM node)  
- The websites listed must be publicly accessible and static

### How to customize
- Modify the scraping logic to focus on specific sections (e.g. About page, Case Studies)  
- Adjust the AI prompt to match your brand’s tone  
- Add filtering logic to skip low-value leads  
- Integrate with your CRM to send the data downstream

## 🔗 Nodes Used

Google Sheets, HTTP Request, Markdown, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
