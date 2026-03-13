# 📱 Schedule and optimize Twitter and LinkedIn posts from Google Sheets with OpenAI GPT-4o-mini

> ⚡ **144 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Schedule and optimize social media posts to Twitter and LinkedIn using AI


This workflow automates the entire lifecycle of social media management—from fetching draft content to AI-driven optimization and multi-platform publishing.


## Who’s it for
Social media managers, marketing teams, and content creators who use Google Sheets to plan their content but want to leverage AI for better engagement and automate the repetitive task of cross-platform posting.


## How it works
The workflow is triggered either hourly or manually via a webhook. It fetches scheduled content from a designated Google Sheet and identifies posts ready for publication. 


An AI Agent (OpenAI) then analyzes the raw content to generate two optimized versions: a punchy, character-limited post for Twitter and a more professional, detailed version for LinkedIn. After generating relevant hashtags and engagement tips, the workflow publishes the posts simultaneously. Finally, it logs the live URLs back to your spreadsheet and sends a performance summary to a Slack channel for easy tracking.


## How to set up
1. **Google Sheet**: Create a sheet with columns for `status`, `content`, `platforms`, `scheduled_time`, `hashtags`, and `tone`.
2. **Credentials**: Connect your Google Sheets, OpenAI, Twitter (X), LinkedIn, and Slack accounts.
3. **Node Configuration**: Select your specific spreadsheet and worksheet in both the "Fetch Content" and "Update Content" nodes.
4. **Slack**: Specify the channel name or ID in the Slack node to receive notifications.
5. **Activation**: Test with the Manual Webhook, then toggle the workflow to "Active."


## Requirements
- **Google Sheets OAuth2**
- **OpenAI API Key** (using GPT-4o-mini or higher)
- **Twitter (X) OAuth2**
- **LinkedIn OAuth2**
- **Slack Bot Token**


## How to customize the workflow
- **AI Tone**: Modify the "System Message" in the AI Content Optimizer node to match your brand's unique voice.
- **Additional Platforms**: Extend the branching logic after the AI Parse node to include platforms like Discord, Facebook, or Mastodon.
- **Advanced Scheduling**: Adjust the Filter node's JavaScript code if you use a different date format or status labels in your spreadsheet.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, X (Formerly Twitter), LinkedIn, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
