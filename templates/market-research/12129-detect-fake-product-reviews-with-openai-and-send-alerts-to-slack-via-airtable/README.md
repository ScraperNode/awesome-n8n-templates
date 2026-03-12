# 📊 Detect fake product reviews with OpenAI and send alerts to Slack via Airtable

> ⚡ **27 views** · 📊 [Market Research & Insights](../)

## Description

# AI-Powered Fake Review Detection Workflow Using n8n & Airtable


This workflow automates the detection of potentially fake or manipulated product reviews using n8n, Airtable, OpenAI and Slack. It fetches reviews for a given product, standardizes the data, generates a unique hash to avoid duplicates, analyzes each review using an AI model, updates the record in Airtable and alerts the moderation team if the review appears suspicious.


### Quick Implementation Steps

1. Add Airtable, OpenAI and Slack credentials to n8n.
2. Create an Airtable Base with a `reviews` table.
3. Connect the Webhook URL to your scraper or send sample JSON via Postman.
4. Test the workflow by passing product and review URLs.
5. Activate the workflow for continuous automated review screening.


## What It Does

This workflow provides an automated pipeline to analyze product reviews and determine whether they may be fake or manipulated. It begins with a webhook that accepts product information and a scraper API URL. Using this information, the workflow fetches associated reviews.

Each review is then expanded into separate items and normalized to maintain a consistent structure. The workflow generates a hash for deduplication, preventing multiple entries of the same review. New reviews are stored in Airtable and subsequently analyzed by OpenAI. The resulting risk score, explanation and classification are saved back into Airtable.

If a review's score exceeds a predefined threshold, a structured Slack alert is sent to the moderation team. This ensures that high-risk reviews are escalated promptly while low-risk reviews are simply stored for recordkeeping.


## Who’s It For

* eCommerce marketplaces monitoring review integrity
* Sellers seeking automated fraud detection for product reviews
* SaaS platforms that accept user-generated reviews
* Trust & Safety and compliance teams
* Developers looking for an automated review-quality pipeline


## Requirements

* n8n (Cloud or Self-Hosted)
* Airtable Personal Access Token
* OpenAI API Key
* Slack Bot Token or Webhook
* Review Scraper API
* Basic understanding of Airtable field setup


## How It Works & How To Set Up

### 1. Receive Product Data

The workflow starts with the **Webhook – Receive Product Payload**, which accepts a list of products and their scraper URLs.

### 2. Extract and Process Each Product

`Extract products` separates the list into individual items.
`Process Each Product` ensures that each product’s reviews are processed one at a time.

### 3. Fetch and Validate Reviews

`Fetch Product Reviews` calls the scraper API.
`IF – Has Reviews?` determines whether any reviews were returned.

### 4. Expand and Normalize Reviews

`Expand reviews[] to items` splits reviews into individual items.
`Prepare Review Fields` ensures consistent review structure.

### 5. Generate Review Hash

`Generate Review Hash1` produces a deterministic hash based on review text, reviewer ID, and date.

### 6. Airtable Deduplication Check

`Search Records by Hash` checks whether the review already exists.
`Normalize Airtable Result` cleans Airtable’s inconsistent empty output.
`Is New Review?` decides if the review should be inserted or skipped.

### 7. Store New Reviews

`Create Review Record` inserts new reviews into Airtable.

### 8. AI-Based Fake Review Analysis

`AI Fake Review Analysis` sends relevant review fields to OpenAI.
`Parse AI Response` ensures the output is valid JSON.

### 9. Update Airtable With AI Results

`Update Review Record` stores the AI’s score, classification, and reasoning.

### 10. Moderation Alert

`Check Suspicious Score Threshold` evaluates if the fake score exceeds a defined limit.
If so, `Send Moderation Alert` posts a detailed message to Slack.


## How To Customize Nodes

**Fake Score Threshold**
Modify threshold in `Check Suspicious Score Threshold`.

**Slack Message Format**
Adjust text fields in `Send Moderation Alert`.

**AI Prompt Instructions**
Edit the instructions inside `AI Fake Review Analysis`.

**Airtable Fields**
Update mappings in both `Create Review Record` and `Update Review Record`.

**Additional Checks**
Insert enrichment steps before AI analysis, such as:

* reviewer profile metadata
* geolocation or reverse IP checks
* keyword density analysis


## Add-ons

* Notion integration for long-term review case tracking
* Jira or Trello integration for incident management
* Automated sentiment tagging
* Weekly review-risk summary reports
* Google Sheets backup for archived reviews
* Reviewer behavior modeling (number of reviews, frequency, patterns)


## Use Case Examples

1. Detecting manipulated Amazon product reviews.
2. Flagging repetitive or bot-like reviews for Shopify stores.
3. Screening mobile app reviews for suspicious content.
4. Quality-checking user reviews on multi-vendor marketplaces.
5. Monitoring competitor-driven false negative or positive reviews.

There can be many more scenarios where this workflow helps identify misleading product reviews.


## Troubleshooting Guide

| Issue                        | Possible Cause                      | Solution                                               |
| ---------------------------- | ----------------------------------- | ------------------------------------------------------ |
| No data after review fetch   | Scraper API returned empty response | Validate scraper URL and structure                     |
| Duplicate reviews inserted   | Hash mismatch                       | Ensure `Generate Review Hash1` uses the correct fields |
| Slack alert not triggered    | Bot not added to channel            | Add bot to the target Slack channel                    |
| AI response fails to parse   | Model returned non-JSON response    | Strengthen "JSON only" prompt in AI analysis           |
| Airtable search inconsistent | Airtable returns empty objects      | Rely on `Normalize Airtable Result` for correction     |


## Need Help

If you need assistance customizing this workflow, integrating additional systems or designing advanced review moderation solutions, our n8n workflow development team at WeblineIndia is available to help. We offer support for:

* Workflow setup and scaling
* Custom automation logic
* AI-driven enhancements
* Integration with third-party platforms
* And so much more.

Feel free to [contact us](https://www.weblineindia.com/contact-us.html) for guidance, implementation or to build similar automated systems tailored to your needs.

## 🔗 Nodes Used

Airtable, Function, HTTP Request, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
