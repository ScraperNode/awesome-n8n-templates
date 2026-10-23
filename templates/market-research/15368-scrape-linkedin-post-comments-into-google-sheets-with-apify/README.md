# 📊 Scrape LinkedIn post comments into Google Sheets with Apify

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**📺 Full walkthrough video: https://youtu.be/y63_F9l_eiU**

## Who it's for

This workflow is for marketers, growth hackers, and social media managers who want to collect and analyze comments from LinkedIn posts without manual copy-pasting. It is especially useful for community managers running outreach or sentiment analysis.

## How it works

1. A user submits a form providing the LinkedIn post URL to trigger the workflow.
2. A new Google Sheets spreadsheet is automatically created and named after the post URL to store the results for that session.
3. The workflow sends a POST request to Apify's LinkedIn comment scraper actor, which fetches all comments (including replies) from the given post.
4. The raw Apify response is transformed using a Set node, extracting four key fields: Comment, Author (as a clickable hyperlink), Author Headline, and Comment URL.
5. Each processed comment is appended or updated as a row in the newly created Google Sheet for easy review and export.

## How to set up

- [ ] Configure the **On form submission** trigger with the Post URL field
- [ ] Add your **Apify API credentials** in the HTTP Request node
- [ ] Connect a **Google account** with Sheets and Drive access to both Google Sheets nodes
- [ ] Set the target Google Drive folder in the 'Create spreadsheet' node
- [ ] Verify the column mapping in the 'Set Comment Fields' node matches your sheet headers

## Requirements

- Apify account with API key and access to the LinkedIn comment scraper actor
- Google account with Google Sheets and Google Drive access

## How to customize

- Extend the 'Set Comment Fields' node to capture additional Apify fields such as comment likes, timestamps, or reaction counts.
- Add a Filter node after scraping to store only comments containing specific keywords or from specific authors.
- Replace the form trigger with a scheduled trigger or a webhook to automate scraping for multiple posts in batch.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
