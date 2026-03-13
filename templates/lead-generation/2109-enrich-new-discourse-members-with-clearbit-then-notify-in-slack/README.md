# 🎣 Enrich new Discourse members with Clearbit then notify in Slack

> ⚡ **1,421 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this template for?
This workflow template is designed for **Sales** and **Customer Success** professionals seeking alerts when potential high-value users, prospects, or existing customers register for a Discourse community. Leveraging Clearbit, it retrieves enriched data for the new member to assess their value.
### Example result in Slack


![Screenshot 20240221 at 13.51.29.png](fileId:738)

## How it works
- Each time a new member is created in Discourse, the workflow runs (powered by Discourse's native Webhooks feature).
- After filtering out popular private email accounts, we run the member's email through Clearbit to fetch available information on the member as well as their organization. 
- If the enriched data meets certain criteria, we send a Slack message to a channel. This message has a few quick actions: `Open LinkedIn profile` and `Email member`



## Setup instructions
Overview is below. Watch this [🎥 quick set up video](https://www.loom.com/share/d379895004374ddc85dc9171ca37c139?sid=bb28df29-bc91-4d32-a657-0bfbaaf50cc7) for detailed instructions on how to get the template running, as well as how to customize it.
1. Complete the `Set up credentials` step when you first open the workflow. You'll need a Discourse (admin user), Clearbit, and Slack account.
2. Set up the Webhook in Discourse, linking the `On new Discourse user` Trigger with your Discourse community.
3. Set the correct channel to send to in the `Post message in channel` step
4. After testing your workflow, swap the Test URL to Production URL in Discourse and activate your workflow 


Template was created in n8n `v1.29.1`

## 🔗 Nodes Used

Slack, Webhook, Clearbit, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
