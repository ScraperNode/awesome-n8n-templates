# 🎫 Moderate Facebook group posts with OpenAI, Slack, and Airtable

> ⚡ **34 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

# Facebook Group Auto-Moderation

This workflow automatically monitors Facebook Group posts, analyzes them using AI, detects policy violations, logs incidents, notifies moderators and automatically hides high-severity posts to keep the community clean and safe.

This workflow listens to new Facebook Group posts in real time, processes each post individually and sends the post content to AI for moderation.If a post violates group rules (spam, scam, hate, adult content or aggressive promotion), the workflow alerts moderators, stores the violation in Airtable and automatically hides the post if the severity is high.

You receive:

*   **Real-time AI moderation of Facebook Group posts**    
*   **Automatic hiding of high-risk content**
*   **Slack alerts for moderation actions**
*   **Airtable logging for audit and tracking**

Ideal for Facebook Group admins who want fast, consistent and automated moderation without manual review of every post.


### Quick Start – Implementation Steps

1.  Connect the **Facebook Group Webhook** to your n8n instance.
2.  Add your **Facebook Page Access Token** as an environment variable.
3.  Connect **OpenAI** credentials for content moderation.
4.  Configure **Slack** for alerts and **Airtable** for logging.
5.  Test using sample Facebook post data.
6.  Activate the workflow.
    

## What It Does

This workflow automates Facebook Group moderation:

1.  Receives new group posts via webhook.    
2.  Splits and processes posts one by one.
3.  Normalizes post data (ID, message, user, time).
4.  Sends post content to AI for moderation analysis.
5.  Determines:
    *   Violation or not
    *   Category (spam, scam, hate, adult, etc.)
    *   Severity (low / medium / high)
6.  Logs violations into Airtable.
7.  Sends alerts to Slack.
8.  Automatically hides posts marked as **high severity**.
9.  Notifies the team whether auto-hide succeeded or failed.
    

## Who’s It For

This workflow is ideal for:

*   Facebook Group admins & moderators
*   Community management teams
*   Social media operations teams
*   Platforms handling large group volumes
*   Anyone needing automated moderation at scale
    

## Requirements to Use This Workflow

To run this workflow, you need:

*   **n8n instance** (cloud or self-hosted)
*   **Facebook Group Webhook subscription**
*   **Facebook Page Access Token**
*   **OpenAI API key**
*   **Slack workspace** with API access
*   **Airtable base** + Personal Access Token
    

## How It Works

1.  **Receive Facebook Post** – Webhook captures new group posts.
2.  **Process Posts** – Posts are handled one at a time.
3.  **Normalize Data** – Extracts clean post and user details.
4.  **AI Moderation** – AI analyzes the post for rule violations.
5.  **Violation Check** – Determines whether action is needed.
6.  **Severity Check** – Only high-risk posts are auto-hidden.
7.  **Hide Post** – Facebook API hides the post automatically.
8.  **Log & Notify** – Slack alerts + Airtable records are created.
    

## Setup Steps

1.  Import the workflow JSON into n8n.
2.  Configure the **Webhook** node and subscribe it to your Facebook Group.
3.  Add FB\_PAGE\_ACCESS\_TOKEN in n8n environment variables.
4.  Connect **OpenAI**, **Slack** and **Airtable** credentials.
5.  Verify Airtable field names match the workflow mapping.
6.  Test using pinned sample data.
7.  Activate the workflow.
    

## How To Customize Nodes

### Customize Moderation Rules

Edit the **AI Content Moderation** node to:

*   Adjust strictness
*   Add or remove categories
*   Change severity logic
    

### Customize Slack Alerts

You can add:

*   Emojis
*   Mentions (@channel / @here)
*   Direct links to the Facebook post
    

### Customize Auto-Hide Logic

Change the **Severity High?** IF node to:

*   Auto-hide medium severity
*   Disable auto-hide completely
*   Add manual approval steps
    

## Add-Ons (Optional Enhancements)

You can extend this workflow to:

*   Add moderator approval before hiding posts
*   Auto-ban repeat offenders
*   Track user violation history
*   Generate daily moderation summaries
*   Add sentiment analysis
*   Create dashboards using Airtable Interfaces
*   Support multiple Facebook Groups
    

## Use Case Examples

### 1\. Spam Control

Automatically hide promotional or scam posts.

### 2\. Community Safety

Detect hate or adult content instantly.

### 3\. Moderator Efficiency

Reduce manual review workload.

### 4\. Audit & Compliance

Maintain a clear violation history in Airtable.

### 5\. Large Group Management

Scale moderation without adding moderators.


## Troubleshooting Guide

| Issue                | Possible Cause              | Solution                                              |
|----------------------|----------------------------|-------------------------------------------------------|
| No posts received    | Webhook not subscribed     | Verify Facebook webhook setup                         |
| AI result missing    | OpenAI error               | Check API key & rate limits                           |
| Post not hidden      | Token permission issue     | Verify Page Access Token permissions                  |
| Slack alert not sent | Invalid Slack credentials  | Reconnect Slack API                                   |
| Airtable error       | Field mismatch             | Match Airtable column names exactly                   |


## Need Help?

If you need help extending this workflow with multi-group moderation, advanced AI rules, dashboards or production-scale automation, our [n8n automation experts](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** can assist with custom workflow design and deployment.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
