# 📱 Post daily e-commerce market news from Google News RSS to LinkedIn

> ⚡ **60 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily at 9 AM to pull the latest “E-commerce Market” headline from Google News RSS, formats it into a text-only LinkedIn post with a link and hashtags, and publishes it to a LinkedIn personal profile.

## How it works
1. Runs every day at 9:00 AM based on the schedule trigger.
2. Fetches recent articles for the “E-commerce Market” query from Google News RSS.
3. Sorts the RSS items by publish date and keeps only the newest article.
4. Stops the run if the selected item has no title to avoid posting empty content.
5. Builds the LinkedIn post text by cleaning the title, extracting the source, and appending the article link and hashtags.
6. Creates a text-only post on LinkedIn as the configured person profile.

## Setup
1. Create or select a LinkedIn OAuth2 credential in n8n and assign it to the LinkedIn node.
2. Replace the placeholder Person URN with your LinkedIn Person URN (for example, `urn:li:person:xxxxxxxx`) in the LinkedIn post configuration.
3. Confirm the schedule time (9 AM server timezone) and adjust it if needed before activating the workflow.

## 🔗 Nodes Used

RSS Read, LinkedIn, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
