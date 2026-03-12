# 📊 Extract LinkedIn post engagement data with Airtop

> ⚡ **1,113 views** · 📊 [Market Research & Insights](../)

## Description

# LinkedIn Post Engagement Data Extractor

## Use Case
This automation is designed to extract key engagement metrics and audience data from a LinkedIn post. It's useful for analyzing the impact of content and identifying engaged users for lead generation, marketing, or research purposes.

## What It Does
Given a LinkedIn post URL and an Airtop profile, this automation extracts:

- Total number of reactions
- Total number of comments
- Total number of reposts
- A list of users who reacted or commented, including:
  - Their full name
  - Their job title
  - A link to their LinkedIn profile

## Input Parameters

| Name             | Description                                                | Required |
|------------------|------------------------------------------------------------|----------|
| airtop_profile   | The name of an [Airtop Profile](https://portal.airtop.ai/browser-profiles) that's logged into LinkedIn | Yes      |
| linkedin_post_url| The full URL of the LinkedIn post you want to analyze     | Yes      |

## How It Works

1. The workflow starts when triggered manually or from another workflow/form.
2. It maps input fields for Airtop profile and post URL.
3. Airtop opens a browser session and loads the LinkedIn post.
4. An AI agent is instructed to extract engagement data via prompt-based analysis.
5. The response is parsed and output in a structured format.

## Output Format

The output will be a structured JSON object with the following fields:

```json
{
  "interactors": [
    {
      "name": "Jane Doe",
      "job_title": "Marketing Director at ExampleCorp",
      "profile_url": "https://linkedin.com/in/janedoe"
    }
    // ... more interactors
  ],
  "reactions_count": 153,
  "comments_count": 21,
  "reposts_count": 8
}

Read more about how to [extract Linkedin post comments and reactions](https://www.airtop.ai/automations/linkedin-post-engagement-data-extractor-n8n).

## 🔗 Nodes Used

Execute Workflow Trigger, n8n Form Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
