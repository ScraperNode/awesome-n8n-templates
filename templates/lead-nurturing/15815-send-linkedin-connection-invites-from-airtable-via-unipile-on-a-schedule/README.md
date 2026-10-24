# 💬 Send LinkedIn connection invites from Airtable via Unipile on a schedule

> ⚡ **33 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for

This workflow is for sales teams, growth hackers, and outreach specialists who manage prospect lists in Airtable and want to automate LinkedIn connection requests at scale without manual effort.

## How it works

1. A schedule trigger fires every Monday at 10am and fetches all Airtable contact records where the "Invitation sent" field is empty.
2. The batch is capped at 100 records using a Limit node to stay within safe outreach volumes.
3. A loop iterates over each contact one at a time.
4. For each contact, the Unipile API resolves the LinkedIn user session using the profile URL extracted from the record.
5. A POST request is then sent to Unipile to fire a LinkedIn connection invitation on behalf of the configured account.
6. On success, the Airtable record is updated with the invitation timestamp and a status of "Available". On error, the record is marked as "Not available" and the loop continues.

## How to set up

- [ ] Connect your **Airtable credentials** and set the correct base and table in all three Airtable nodes
- [ ] Replace `YourUnipileDNS` in the two HTTP Request nodes with your actual Unipile API domain
- [ ] Add your **Unipile API key** to the HTTP Header Auth credential used in both HTTP nodes
- [ ] Set the correct `account_id` in the HTTP Request nodes to match your Unipile LinkedIn account
- [ ] Adjust the **Schedule Trigger** frequency to match your outreach cadence
- [ ] Verify that your Airtable table includes the `Linkedin`, `Invitation sent`, and `Linkedin available` fields

## Requirements

- Airtable account with a prospect table
- Unipile account with a connected LinkedIn session
- n8n instance (self-hosted or cloud)

## How to customize

- Adjust the Limit node to send fewer or more invitations per run depending on your LinkedIn account's safety limits.
- Add a personalized message body to the invitation request if Unipile supports it for your plan.
- Extend the workflow with a follow-up step (e.g., send a Slack alert or log errors to a Google Sheet) when the error branch is triggered.

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
