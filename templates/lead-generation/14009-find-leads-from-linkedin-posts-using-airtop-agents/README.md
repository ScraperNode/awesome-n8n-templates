# 🎣 Find leads from LinkedIn posts using Airtop agents

> ⚡ **121 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# This templates connects to an Airtop agent to find leads from LinkedIn posts

### Use Cases
- Build a targeted outreach list by extracting engaged users from an industry influencer's posts.
- Monitor your company's LinkedIn page to identify and connect with your most active community members.
- Generate warm leads for your sales team by finding users who are actively engaging with a competitor's content.
- Source potential candidates for a job opening by analyzing posts related to a specific skill or industry.
- Identify potential partners or collaborators who are active in your niche.

### Good to know

You need to install the template "[Turn LinkedIn Engagements to Pipeline](https://www.airtop.ai/templates/linkedin-lead-generation-from-post-commenters-old-3?utm_source=n8n-template)" into your Airtop account. You can [create an Airtop account](https://portal.airtop.ai/sign-up) for Free and get credits to start quickly.

### How it works
This automation streamlines lead generation from LinkedIn by performing the following actions:
- Targets a specific LinkedIn page: You provide a URL for either a personal profile (e.g., an industry influencer) or a company page (e.g., your own or a competitor's).
- Fetches Recent Posts: It scans the page for recent posts, looking back over a customizable number of days.
- Extracts Engaged Users: The automation gathers a unique list of every person who has commented on or reacted to the posts it finds.
- Enriches Lead Data: If you provide a Prospeo API key, it enriches each lead with their email address, job title, and company information. Without a key, it falls back to providing publicly available LinkedIn profile details like name, job title, and company.
- Delivers Results: Finally, the automation delivers the list of enriched leads. You can choose to receive the data as a simple JSON object or have it automatically compiled and saved into a new, cleanly formatted Google Sheet.

### Customization Ideas
This template offers significant flexibility to tailor the lead generation process to your specific needs. You can easily customize:
- The Source: Switch between targeting any personal LinkedIn profile or any company page.
- The Timeframe: Adjust the "lookback period" to gather leads from posts made in the last week, month, or any other duration.
- The Scale: Control the costs and runtime by setting limits on the maximum number of posts to analyze and the total number of leads to generate.
- The Enrichment Level: Choose between deep enrichment with email addresses (requires a Prospeo API key) or basic profile enrichment without one.
- The Output Format: Decide whether you want the final lead list delivered as raw data for other systems (JSON) or organized neatly in a Google Sheet.

## 🔗 Nodes Used

Execute Workflow Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
