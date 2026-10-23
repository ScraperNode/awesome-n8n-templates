# 📱 Track Facebook mention sentiment with Gemini, Supabase, Telegram and Slack

> ⚡ **568 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Facebook Mention Sentiment Tracker with Gemini, Supabase, Telegram & Slack

This workflow automatically tracks Facebook page mentions, analyzes sentiment using AI (Gemini), stores the data in Supabase and sends alerts via Telegram and Slack. Positive mentions are shared on Telegram, while critical or negative mentions trigger Slack alerts for immediate attention. It also handles storage failures by notifying via Telegram.


### Quick Start (Implement in Minutes)

1. [Login to your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Connect your Facebook Page to the trigger node.
3. Configure Gemini API credentials for sentiment analysis.
4. Set up Supabase and create a `mentions` table.
5. Add Telegram bot credentials for notifications.
6. Connect Slack and choose a channel for alerts.
7. Test with sample data and activate the workflow.


## What It Does

This workflow listens for new Facebook Page mentions in real time. When a mention is received, it sends the message to an AI model (Gemini) to analyze sentiment (positive, neutral or negative) and extract the main topic. The response is cleaned and structured into a consistent JSON format for further processing.

After processing, the workflow stores the mention data in Supabase for tracking and analytics. It then evaluates the sentiment and content of the message to determine the next action. Positive mentions are shared with your team via Telegram to highlight customer satisfaction.

For risk management, the workflow detects critical keywords (like refund, bug, slow, cancel) and also checks if the sentiment is negative. If either condition is met, a Slack alert is triggered so your team can take immediate action. Additionally, if storing data in Supabase fails, a Telegram alert is sent to notify about the issue.


## Who It's For

* Social media managers monitoring brand mentions
* Customer support teams handling complaints
* Product teams tracking user feedback
* Startups and agencies managing multiple clients
* Businesses wanting real-time alerting on customer sentiment


## Requirements to Use This Workflow

* [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
* Facebook Developer App with Page access
* Google Gemini API credentials
* Supabase account and project
* Telegram Bot Token & Chat ID(s)
* Slack workspace with API access
* Basic understanding of n8n nodes and credentials


## How It Works

1. The workflow starts when a new Facebook mention is detected.
2. The message is sent to Gemini AI for sentiment and topic analysis.
3. The AI response is cleaned and normalized into structured JSON.
4. The processed data is stored in Supabase.
5. If sentiment is positive → Telegram notification is sent.
6. Keywords are checked to detect critical intent.
7. If sentiment is negative OR keywords match → Slack alert is triggered.
8. If Supabase storage fails → Telegram error alert is sent.


### Setup Instructions

1. **Facebook Trigger**

   * Configure Facebook App ID.
   * Enable webhook for Page mentions.
   * Ensure required permissions are granted.

2. **Gemini Node**

   * Add Google Gemini API credentials.
   * Use any model (default: `gemini-2.5-flash`).
   * Ensure output is structured JSON.

3. **Code Node (Clean AI Response)**

   * Keep existing logic to extract and normalize AI response.

4. **Supabase Node**

   * Create a `mentions` table.
   * Add fields:

     * `message`, `sentiment`, `topic`, `user_name`, `created_time`, `confidence`
   * Connect using Supabase credentials.

5. **Telegram Nodes**

   * Add bot token.
   * Use different chat IDs for:

     * Positive mentions
     * Error alerts (recommended)

6. **Slack Node**

   * Connect Slack workspace.
   * Select a channel for critical alerts.

7. **IF Nodes**

   * Configure:

     * Positive sentiment check
     * Critical/negative condition routing

8. **Test Workflow**

   * Use mock or pinned data.
   * Verify Telegram and Slack alerts.
   * Activate workflow.


## How To Customize Nodes

* **Gemini Node**

  * Change model (e.g., advanced models for better accuracy)
  * Modify prompt to extract more fields (intent, urgency, etc.)

* **Keyword Detection**

  * Update keywords array:

    ```js
    ["refund", "cancel", "bug", "slow"]
    ```
  * Add business-specific terms

* **Slack संदेश**

  * Customize alert format
  * Add priority levels or tagging

* **Telegram Messages**

  * Adjust formatting (Markdown, emojis, structure)

* **Supabase**

  * Add more columns if needed (e.g., region, category)


## Add-ons (Extend This Workflow)

* Add sentiment trend dashboard (via Supabase + BI tools)
* Auto-create support tickets (Zendesk, Freshdesk)
* Email alerts for high-priority issues
* Auto-reply system for Facebook comments
* Weekly analytics report via email or Slack
* AI-based response suggestions for support team


## Use Case Examples

1. Detect and respond instantly to refund complaints
2. Monitor brand reputation across social media
3. Highlight positive feedback for marketing teams
4. Escalate urgent issues to internal teams via Slack
5. Build a centralized database of customer feedback

There can be many more use cases depending on your business needs.


## Troubleshooting Guide

| Issue                     | Possible Cause                     | Solution                         |
| ------------------------- | ---------------------------------- | -------------------------------- |
| No Facebook data          | Webhook not configured             | Check Facebook App & permissions |
| AI not returning data     | Incorrect prompt or API issue      | Verify Gemini configuration      |
| Supabase insert fails     | गलत credentials or schema mismatch | Check table structure & API key  |
| Telegram not sending      | Wrong bot token or chat ID         | Verify credentials               |
| Slack alert not triggered | Condition mismatch                 | Check IF node logic              |
| Keywords not detected     | Case mismatch or logic error       | Ensure `.toLowerCase()` is used  |


## Need Help?

If you need help setting up this workflow or want to extend it with advanced features like automation, dashboards or integrations then our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) team at **WeblineIndia** can assist you.

We can help you:

* Customize this workflow for your business
* Integrate additional tools (CRM, Helpdesk, Analytics)
* Build scalable automation systems using n8n

[Reach out to WeblineIndia to get started with tailored automation solutions](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Slack, Telegram, Facebook Trigger, Supabase, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
