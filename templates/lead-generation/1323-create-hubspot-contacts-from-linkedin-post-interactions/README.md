# 🎣 Create HubSpot contacts from LinkedIn post interactions

> ⚡ **7,106 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow automatically does the following:
- Scrapes comments and likes from a LinkedIn post.
- Adds contact data (nominative and verified email address,  gender, standardized first name and last name, all legal company information).
- Adds these contacts to Airtable.
- Sends an ultra-personalized cold email sequence.
- Sends a Linkedin invitation after the cold email sending.
- Pushes all contacts to HubSpot.

## Prerequisites

- A Phantombuster account and [credentials](https://docs.n8n.io/integrations/credentials/phantombuster/)
- A Lemlist account and [credentials](https://docs.n8n.io/integrations/credentials/lemlist/)
- A Dropcontact account and [credentials](https://docs.n8n.io/integrations/credentials/dropcontact/)
- A HubSpot account and [credentials](https://docs.n8n.io/integrations/credentials/hubspot/)

## How it works

- [Cron node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.cron/) executes the workflow every hour.
- [Phantombuster node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.phantombuster/) **(Launch agent)** launches the "LinkedIn Post Likers" phantom and the "LinkedIn Post Commenters" phantom. Note that you have to create these phantoms before setting your workflow automation.
- **Phantombuster node (Get Output agent)** gets results from the previous phantoms.
- [Dropcontact node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.dropcontact/) fetches the new contact information and returns the data of the person and the company associated with the email address, job function, and all legal information.
- [Airtable node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.airtable/) **(List)** lists all the records in the Contacts table.
- [IF node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) routes the workflow based on whether a contact is in Airtable.
- [Set node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) sets the required data for the following nodes.
- **Airtable node (Update)** updates the record's name.
- **Airtable node (Append)** creates a record if the account doesn't exist yet.
- [Lemlist node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.lemlist/) adds a contact to an existing campaign.
- **Phantombuster node (Launch agent)** launches the "LinkedIn Network Booster" phantom. Note that you have to create these phantoms before setting your automation.
- [Hubspot node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.hubspot/) creates or updates the contacts in the HubSpot CRM.

## 🔗 Nodes Used

Airtable, Cron, Function, HubSpot, Phantombuster, Lemlist

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
