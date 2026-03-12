# 🎣 Deduplicate scraping AI grants for eligibility using AI

> ⚡ **4,718 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This n8n template scrapes a list of AI grants from grants.gov and qualifies them using AI; determining interest and eligibility for the business. It then sends an email alert of interesting items to team members in an email.

The template also shows how you can use the "Remove Duplicates" node to simplify deduplication of external listings without the need to manage this yourself.

**Not particularly interested in AI Grants? This template works for other tender websites as long as you're able to scrape them.**

### How it works
* A scheduled trigger is set to fetch a list of AI grants listed on the grants.gov website in the past day.
* A Remove Duplicates node is used to track Grant IDs to filter out those already processed by the workflow.
* New grants are summarized and analysed by AI nodes to determine eligibility and interest which is then saved to an Airtable database.
* Another scheduled trigger starts a little later  than the first to collect and summarize the new grants
* The results are then compiled into an email template using the HTML node, in the form of a newsletter designed to alert and brief team members of new AI grants.
* This email is then sent to a list of subscribers using the gmail node.

## How to use
* Make a copy of sample Airtable here: [https://airtable.com/appiNoPRvhJxz9crl/shrRdP6zstgsxjDKL](https://airtable.com/appiNoPRvhJxz9crl/shrRdP6zstgsxjDKL)
* The filters for fetching the grants is currently set to the "AI" category. Feel free to change this to include more categories.
* Not interested in grants, this template can works for other sources of leads just change the endpoint and how you're defining the item ID to track.

## Requirements
* Airtable for database
* OpenAI for LLM

Note: These are not hard requirements and can be exchanged for services available to you.

## customising the workflow
* "Eligibility" criteria at this stage may be better served by identifying hard blockers instead ie. certifications, geographical considerations or certain legal checks. Be sure to mention any hard blockers into the Eligibility prompt.
* Not particularly interested in AI prompts? This template works for other tender websites as long as you're able to scrape them.

## 🔗 Nodes Used

Airtable, HTTP Request, Gmail, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
