# 💬 Send LinkedIn outreach messages using Google Sheets and SourceGeek

> ⚡ **73 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

**How it works**

This workflow sends a message to a specific LinkedIn profile. The LinkedIn profile data and message content are sourced from a Google Sheet.

To send the message from your LinkedIn profile to another LinkedIn user, the SourceGeek node is used.

Once the message is successfully sent, the original row in the Google Sheet is updated with a timestamp.

**How to use**

- Prepare a Google Sheet containing a LinkedIn profile URL and a message
- Select the rows you want the workflow to process
- The workflow loops through the selected rows and uses the SourceGeek node to send a message to each LinkedIn profile
- After a message is sent, the corresponding row is updated to prevent it from being used again

**Requirements**

- A Google Sheet with LinkedIn profile URLs and message content
- A verified SourceGeek node

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
