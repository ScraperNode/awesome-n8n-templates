# 📱 Automate news publishing to LinkedIn with Gemini AI and RSS feeds

> ⚡ **5,035 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# 📰 LinkedIn News Auto-Publisher

## Overview 📋

This project is an automated news publisher for LinkedIn. It uses RSS feeds to fetch news, processes the content with the Gemini API to generate precise summaries, and automatically publishes to LinkedIn via its API.

* * *

## How It Works

### Architecture and Workflow ⚙️

- **n8n**: Efficient orchestration of workflow with automation.
- **RSS**: News sources such as TechCrunch and MIT Technology Review.
- **Gemini API**: Dynamic generation of content and precise summaries.
- **LinkedIn API**: Automatic publication on profiles and corporate pages.

### Content Processing 🧠

- Fetching news through RSS feeds.
- Processing and generating summaries with the Gemini API.
- Automatic publication on LinkedIn.

* * *

## Key Benefits ✅

- Complete automation of the news publishing process.
- Dynamic generation of precise and relevant content.
- Integration with reliable news sources and publication on a professional platform.

* * *

## Use Cases 💼

- Automation of news publishing for businesses and professionals.
- Keeping corporate profiles and pages updated with relevant content.
- Saving time in managing content on social networks.

* * *

## Requirements 👨‍💻

- n8n instance (self-hosted or cloud).
- Gemini API credentials.
- LinkedIn bot setup and API credentials.
- Configured RSS feeds to fetch news.

* * *

## Authors 👥

- Joel Choez
- Alan Bajaña
- Jaren Pazmiño
- David Sandoval

Members of CIAP
![Logo_CIAP Tortuga y letras 2.png](fileId:1382)

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Write Binary File, LinkedIn, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
