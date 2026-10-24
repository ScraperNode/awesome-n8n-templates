# 📊 Monitor competitor website changes weekly with GPT-4.1-mini and Gmail

> ⚡ **143 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

How it works
- Runs automatically on a weekly schedule and fetches the live HTML of every competitor page you define
- Strips all HTML tags and captures a clean text snapshot of each page
- Compares the current snapshot against the previously stored version using workflow static data — no external database needed
- Sends only changed pages to GPT-4.1-mini, which analyses differences across pricing, positioning, product launches, and feature updates
- Formats the AI analysis into a structured digest with an executive summary, material changes per competitor, suggested response actions, and watch items for next run
- Saves the digest as a Gmail draft addressed to your chosen recipient — ready to review and forward to your team

Set up steps
- Open the Define Competitors node and replace the example entries with your competitor names, URLs, and what to watch for (e.g. pricing, features, messaging)
- Open the Build Digest Prompt node and replace replace-me@example.com with your recipient's email address
- Connect your OpenAI credential to the OpenAI node (GPT-4.1-mini or higher recommended)
- Connect your Gmail OAuth2 credential to the Gmail node
- Run the workflow once manually to store the first baseline snapshots — no digest will be sent on this first run
- Activate the workflow — it will now run every week and only alert you when something has actually changed

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
