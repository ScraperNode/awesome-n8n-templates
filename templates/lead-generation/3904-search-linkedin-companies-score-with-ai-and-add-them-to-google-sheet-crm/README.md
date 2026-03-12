# 🎣 Search LinkedIn companies, score with AI and add them to Google Sheet CRM

> ⚡ **30,344 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Search LinkedIn companies, Score with AI and add them to Google Sheet CRM

**Setup Video: [https://youtube.com/watch?v=m904RNxtF0w&t](https://youtube.com/watch?v=m904RNxtF0w&t)**

### Who is this for?
This template is ideal for sales teams, business development professionals, and marketers looking to build a targeted prospect database with automatic qualification. Perfect for agencies, consultants, and B2B companies wanting to identify and prioritize the most promising potential clients.

### What problem does this workflow solve?
Manually researching companies on LinkedIn, evaluating their fit for your services, and tracking them in your CRM is time-consuming and subjective. This automation streamlines lead generation by automatically finding, scoring, and importing qualified prospects into your database.

### What this workflow does
This workflow automatically searches for companies on LinkedIn based on your criteria, retrieves detailed information about each company, filters them based on quality indicators, uses AI to score how well they match your ideal customer profile, and adds them to your Google Sheet CRM while preventing duplicates.

### Setup
1. Create a Ghost Genius API account and get your API key
2. Configure HTTP Request nodes with Header Auth credentials
3. Create a copy of the provided Google Sheet template
4. Set up your Google Sheet and OpenAI credentials following n8n documentation
5. Customize the "Set Variables" node to match your target audience and scoring criteria

### How to customize this workflow
- Modify search parameters to target different industries, locations, or company sizes
- Adjust the follower count threshold based on your qualification criteria
- Customize the AI scoring system to align with your specific product or service offering
- Add notification nodes to alert you when high-scoring companies are identified

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
