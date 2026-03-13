# 💬 Automate LinkedIn invitations with Browserflow & Google Sheets tracking

> ⚡ **187 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Manage LinkedIn Invitations with Browserflow
**Automate personalized LinkedIn outreach while maintaining human-like behavior**

## Overview
This workflow helps you send targeted LinkedIn invitations with customized messages, automatically checking existing connections to avoid duplicate requests. Perfect for recruiters, sales professionals, and anyone building their professional network systematically.

## How It Works
1. **Contact Management**: Store your prospects in a Google Sheet with their LinkedIn profile URLs
2. **Connection Verification**: Automatically check if you're already connected to avoid duplicate invitations
3. **Smart Invitations**: Send personalized invitations to new contacts
4. **Progress Tracking**: Update the Google Sheet with invitation status

## Setup Instructions

### Prerequisites
- **Google account** with Sheets access
- **Browserflow account** with available credits ([sign up here](https://browserflow.io/))
- **n8n instance** (tested on version 1.109.1)

### Step-by-Step Setup
1. **Prepare Your Contact List**
   - Download the [Google Sheet Template](https://docs.google.com/spreadsheets/d/1mFKp3wmbV9qp2tpGGsN72zdiC32y8H1nhjdgP885y-U/edit?usp=sharing)
   - Make a copy to your Google Drive
   - Extract the Sheet ID from your URL (the string between `/d/` and `/edit`)

2. **Configure Workflow Settings**
   - Open the `settings` node and enter your Google Sheet ID
   - Customize your invitation message in the `message` node
   - Set up your Google Sheets credentials
   - Configure your Browserflow credentials

3. **Populate Your Data**
   - Add contacts to your Google Sheet with their LinkedIn profile URLs

4. **Test & Deploy**
   - Run a test with 1-2 contacts first (update the `Limit` node)
   - Monitor execution and adjust `Wait` if needed 

## Important Considerations

- **Responsible Usage**: This tool mimics human behavior and respects LinkedIn's natural usage patterns. It's designed for quality networking, not mass spamming.

- **Rate Limits**: Stay within LinkedIn's acceptable limits.

- **Account Safety**: Excessive automation can result in LinkedIn restrictions. Always prioritize authentic, valuable connections.


## Support & Community

Need assistance? Here's how to get help:
- **LinkedIn Discussion**: Comment on this [workflow post](https://www.linkedin.com/posts/n8n-about_n8n-browserflow-activity-7368758690025320448-zupZ/)
- **Direct Contact**: Connect with me on [LinkedIn](https://www.linkedin.com/in/stephaneheckel/)
- **Community Forum**: Ask questions in the [n8n Community](https://community.n8n.io/)

## 🔗 Nodes Used

Google Sheets, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
