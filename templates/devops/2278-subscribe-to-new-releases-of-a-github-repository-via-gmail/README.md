# ⚙️ Subscribe to new releases of a Github repository via Gmail

> ⚡ **1,064 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

This is a very simple workflow that lets you subscribe to any github repository for the latest release (using n8n as example).

## How it works: 
- daily poll to Github repository for release for latest (stable) version of n8n
- parses the content to HTML
- sends a gmail

## Setup steps:
- add your gmail credentials (or use other email node of choice)
- change the url to the right Github repository you want to check regularly 
- change the `To` email address to the email that you want to receive the updates for

## Feedback & Questions

If you have any questions or feedback about this workflow - Feel free to get in touch at [ria@n8n.io](mailto:ria@n8n.io)

## 🔗 Nodes Used

HTTP Request, Gmail, Markdown, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
