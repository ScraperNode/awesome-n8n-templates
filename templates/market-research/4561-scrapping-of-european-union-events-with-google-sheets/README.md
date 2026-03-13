# 📊 🏤 Scrapping of European Union events with Google Sheets

> ⚡ **952 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

*Tags: Scrapping, Events, European Union, Networking*

### Context

Hey! I’m [Samir](https://samirsaci.com) , a Supply Chain Engineer and Data Scientist from Paris, and the founder of [LogiGreen Consulting](https://logi-green.com).

We use **AI, automation, and data** to support sustainable and data-driven operations across all types of organizations.

This workflow is part of our networking strategy (as a business) to **track official EU events** that may relate to topics we cover.

[![EU Events Example](https://www.samirsaci.com/content/images/2025/06/image.png)](https://www.youtube.com/watch?v=ngGB2yEPPRk)


&gt; Want to stay ahead of critical EU meetings and events without checking the website every day?

This n8n workflow automatically scrapes the **EU’s official event portal** and logs the latest entries with clean metadata including date, location, category, and link.

📬 For collaborations, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/samir-saci)


### Who is this template for?

This workflow is useful for:
- **Policy & public affairs teams** following institutional activities  
- **Sustainability teams** watching for relevant climate-related summits  
- **NGOs and researchers** interested in event calendars  
- **Data teams** building dashboards on public event trends

### What does it do?

This n8n workflow:
1. 🌐 Scrapes the **EU events portal** for new meetings and conferences  
2. 📅 Extracts event metadata (title, date, location, type, and link)  
3. 🔁 Handles **pagination** across multiple pages  
4. 🚫 Checks for **duplicates** already stored  
5. 📊 Saves new records into a connected **Google Sheet**

### How it works

[![EU Event Scraper Workflow](https://www.samirsaci.com/content/images/size/w1600/2025/06/image-1.png)](https://www.youtube.com/watch?v=ngGB2yEPPRk)


1. **Triggered daily via cron**
2. **HTTP node loads the event listing HTML**
3. **Extract HTML blocks** for each event article
4. **Parse event name, link, type, location, and full date**
5. **Concatenate and clean dates** for easy tracking
6. **Store non-duplicate entries** in Google Sheets

The workflow uses static data to track pagination and ensure only **new events are stored**, making it ideal for building up a clean dataset over time.

### What do I need to get started?

You’ll need:
- A **Google Sheet** connected to your n8n instance  
- No code or AI tools needed — just n8n and this template

### Follow the Guide!

Sticky notes are included directly inside the workflow to guide you step-by-step through setup and customisation.

[![Thumbnail](https://www.samirsaci.com/content/images/2025/06/image-9.png)](https://www.youtube.com/watch?v=ngGB2yEPPRk)

![🎥 Watch My Tutorial](https://www.youtube.com/watch?v=ngGB2yEPPRk)

### Notes

- This is ideal for analysts and consultants who want **clean, structured data** from the EU portal  
- You can add filtering, email alerts, or AI classifiers later

*This workflow was built using n8n version  1.93.0*  
*Submitted: June 1, 2025*

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
