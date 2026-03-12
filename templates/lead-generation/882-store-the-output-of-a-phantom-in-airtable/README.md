# 🎣 Store the output of a phantom in Airtable

> ⚡ **2,020 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow allows you to store the output of a phantom in Airtable. This workflow uses the LinkedIn Profile Scraper phantom. Configure and launch this phantom from your Phantombuster account before executing the workflow.

![workflow-screenshot](fileId:375)

The workflow uses the following node:

**Phantombuster node:** The Phantombuster node gets the output of the LinkedIn Profile Scraper phantom that ran earlier. You can select a different phantom from the ***Agent*** dropdown list, but make sure to configure the workflow accordingly.

**Set node:** Using the Set node we are setting the data for the workflow. The data that we set in this node will be used by the next nodes in the workflow. Based on your use-case, you can modify the node.

**Airtable node:** The Airtable node allows us to append the data in an Airtable. Based on your use-case you can replace this node with any other node.

Instead of storing the data in Airtable, you can store the data in a database or Google Sheet, or send it as an email using the Send Email node, Gmail node, or Microsoft Outlook node.

## 🔗 Nodes Used

Airtable, Start, Phantombuster

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
