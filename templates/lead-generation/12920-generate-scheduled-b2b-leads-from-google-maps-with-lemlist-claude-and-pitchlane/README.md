# 🎣 Generate scheduled B2B leads from Google Maps with Lemlist, Claude, and Pitchlane

> ⚡ **78 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

How it works

- Runs on schedule (Monday-Friday at 9 AM) to automate lead generation

- Searches for companies on Google Maps by location and category

- Extracts owner information from company websites and impressum pages

- Enriches leads with email addresses and LinkedIn profiles using Lemlist

- Generates personalized compliment messages using Claude AI

- Creates custom video messages with Pitchlane

- Uploads qualified leads to your CRM for follow-up

Set up steps

- Configure Google Maps search parameters (location, category, search terms)

- Add Serper API credentials for Google Maps search

- Connect Lemlist for lead enrichment and upload

- Configure Pitchlane API credentials for video creation

- Set up Google Docs for documentation and notes

- Connect Claude AI for personalized message generation

- Adjust the schedule trigger time if you want a different time than 9 AM

- Keep detailed workflow notes in the sticky notes inside your workflow

## 🔗 Nodes Used

HTTP Request, Webhook, Lemlist, Google Docs, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
