# 🎣 Conference networking intelligence from Eventbrite with ScrapeGraphAI

> ⚡ **326 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# How it works

This workflow automatically discovers industry conferences and provides AI-powered networking intelligence to maximize your event ROI.

## Key Steps

1. **Scheduled Discovery** - Runs weekly to find new industry conferences from Eventbrite and other sources.
2. **AI-Powered Scraping** - Uses ScrapeGraphAI to extract comprehensive conference information including speakers, agenda, and networking opportunities.
3. **Speaker Intelligence** - Analyzes speakers to identify high-priority networking targets based on their role, company, and expertise.
4. **Agenda Analysis** - Extracts and maps the complete conference schedule to optimize your time and networking strategy.
5. **Networking Strategy** - Generates AI-powered recommendations for maximizing networking ROI with prioritized contact lists and approach strategies.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for web scraping capabilities.
2. **Customize conference sources** - Update the Eventbrite URL to target specific industries or locations.
3. **Adjust monitoring frequency** - Modify the weekly trigger to match your conference discovery needs.
4. **Review networking priorities** - The system automatically prioritizes speakers, but you can customize the criteria.

## Key Features

- **Automated Conference Discovery** - Finds relevant industry events from multiple sources
- **Speaker Intelligence Analysis** - Identifies high-value networking targets with contact priority scoring
- **Strategic Agenda Mapping** - Optimizes your conference schedule for maximum networking impact
- **AI-Powered Recommendations** - Provides personalized networking strategies and approach methods
- **Priority Contact Lists** - Ranks speakers by business value and networking potential

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
