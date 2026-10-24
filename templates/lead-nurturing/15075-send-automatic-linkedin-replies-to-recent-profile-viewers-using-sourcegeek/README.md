# 💬 Send automatic LinkedIn replies to recent profile viewers using SourceGeek

> ⚡ **46 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**How it works**
This template checks who has visited your profile on LinkedIn and automatically triggers an action for that person.

A list of users is extracted from your LinkedIn Profile Views page and placed into an array.

The workflow then loops through the array and checks whether a visitor is a 1st- or 2nd-degree network connection.

If the person is a 1st-degree connection, the workflow can send a direct message to that user.

If the user is a 2nd- (or 3rd-) degree connection, the workflow can send a connection request, optionally with a note attached.

**How to use**
- Define in the Viewer Node how many users should be extracted from the list
- Define a message for people in your 1st-degree network, for example: “Thank you for viewing my profile. How can I help you?”
- Define a connection request note, for example: “Thank you for viewing my profile. Shall we connect?”

**Requirements**
- A LinkedIn profile
- The verified SourceGeek node

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
