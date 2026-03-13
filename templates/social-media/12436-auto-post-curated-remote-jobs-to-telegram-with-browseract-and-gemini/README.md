# 📱 Auto-post curated remote jobs to Telegram with BrowserAct and Gemini

> ⚡ **38 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

# Auto-post curated remote jobs to Telegram with BrowserAct & Gemini

This workflow acts as an intelligent job board curator for your Telegram community. It scrapes multiple sources (Remotive, SimplyHired), uses AI to filter out spam and low-quality listings, formats the best jobs into professional posts, and publishes them automatically on a schedule.

## Target Audience
Community managers running job boards, recruiters, and developers building niche job aggregators.

## How it works
1. **Scheduled Fetch**: Every 12 hours, the workflow triggers **BrowserAct** to scrape the latest job listings from Remotive and SimplyHired in parallel.
2. **Merge & Aggregate**: The raw job data from both sources is combined into a single list.
3. **AI Curation**: An **AI Agent** (using Google Gemini) reviews each job. It removes duplicates, filters out gigs paying less than $20/hr, and discards low-quality descriptions.
4. **Format Content**: The AI rewrites the remaining jobs into clean, engaging HTML summaries suitable for Telegram.
5. **Publish**: The workflow loops through the curated list and sends each job to your **Telegram** channel, pausing between messages to avoid rate limits.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **BrowserAct**, and **Google Gemini** accounts in n8n.
2. **Prepare BrowserAct**: Ensure you have the **Automated Remote Job Fetching & Filtering for Telegram Feed** templates (for Remotive and SimplyHired) saved in your BrowserAct account.
3. **Configure Telegram**: Ensure your bot is an admin in the target channel and add the Chat ID to the **Send a text message** node.
4. **Activate**: Turn on the workflow.

## Requirements
* **BrowserAct** account with the **Automated Remote Job Fetching & Filtering for Telegram Feed** templates.
* **Telegram** account (Bot Token).
* **Google Gemini** account.

## How to customize the workflow
1. **Add More Sources**: Duplicate the BrowserAct nodes to scrape additional sites like We Work Remotely or LinkedIn.
2. **Refine Filters**: Update the system prompt in the **AI Agent** node to filter by specific keywords (e.g., "Python", "Senior") or locations.
3. **Change Frequency**: Adjust the **Schedule Trigger** to run more or less frequently depending on your needs.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Build an AI-Powered Remote Job Aggregator (Remotive & SimplyHired)](https://youtu.be/DEBF0ILrM5E)

## 🔗 Nodes Used

Telegram, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
