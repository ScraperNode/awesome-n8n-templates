# 📱 Send positive Facebook reactions to Airtable and Slack for a Wall of Love

> ⚡ **12 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Facebook Reactions → Airtable → Slack “Wall of Love” Automation

This n8n workflow automatically monitors positive reactions on Facebook Page posts, stores them in Airtable and notifies your team in Slack to create a motivational “Wall of Love.” It runs on a schedule, fetches posts and their reactions using the Facebook Graph API, filters only positive reactions and sends real-time Slack updates after saving the data.

### Quick Implementation Steps (Get Started Fast)

1. Add your **Facebook Page Access Token** to the HTTP Request nodes.
2. Update the **Facebook Page ID** in the setup node.
3. Connect your **Airtable base and table**.
4. Configure the **Slack channel** for notifications.
5. Enable the workflow and let it run on schedule.


## What It Does

This workflow runs automatically at a defined interval and checks a specific Facebook Page for recent posts. Each post is processed individually to fetch all associated reactions using the Facebook Graph API. This ensures reactions are captured accurately without missing engagement.

Only positive reactions such as **Like, Love, Wow and Haha** are allowed to continue through the workflow. Negative or neutral reactions are ignored to keep the focus on appreciation and encouragement. Each qualifying reaction is handled one by one, which enables precise tracking and clean notifications.

Once a positive reaction is identified, the workflow saves the reaction details—such as the user name, reaction type and timestamp—into Airtable for reporting and history. After the Airtable entry is successfully created, a formatted message is posted to Slack, creating a visible and motivating “Wall of Love” for the team.


## Who’s It For

* Marketing and social media teams
* Customer success and community managers
* Startup founders and product teams
* Organizations that value customer appreciation and team morale


## Requirements to Use This Workflow

* An active **Facebook Page**
* A **Facebook App in Production mode**
* A valid **Facebook Page Access Token** (user must add this)
* Required Facebook permissions:
  * `pages_read_engagement`
  * `pages_read_user_content`
* An **Airtable account** with a configured base and table
* A **Slack workspace** with permission to post messages
* An active **n8n instance**


## How It Works & How To Set Up

1. Configure the **Cron node** to define how often the workflow should run.
2. Set the **Facebook Page ID** in the setup node.
3. Add your **Facebook Page Access Token** to the HTTP Request nodes (token is not included in the workflow by default).
4. The workflow fetches recent Facebook posts (with a configurable limit).
5. Each post is processed to retrieve reactions, also with a configurable limit.
6. Reactions are filtered to allow only positive ones.
7. Each positive reaction is saved into Airtable.
8. After successful storage, a Slack message is sent to notify the team.

Once enabled, the workflow runs automatically without manual intervention.


## How To Customize Nodes

* **Cron node:** Change the schedule to run more or less frequently.
* **HTTP Request (Posts/Reactions):** Adjust the `limit` parameter to fetch more or fewer posts or reactions.
* **IF node:** Add or remove reaction types to control what counts as “positive.”
* **Airtable node:** Customize fields or map additional data.
* **Slack node:** Update message format, emojis or target channel.


## Add-ons (Optional Enhancements)

* Store reactions in **Supabase** instead of Airtable
* Add a **fallback JSON or file storage** if Airtable is unavailable
* Aggregate reactions into a **single Slack summary message**
* Add deduplication logic to prevent repeat notifications
* Extend the workflow to support other platforms (Instagram, LinkedIn)


## Use Case Examples

* Creating a live **Slack Wall of Love** for customer engagement
* Motivating internal teams with real-time positive feedback
* Tracking social proof for marketing analysis
* Monitoring campaign performance based on reactions
* Building weekly or monthly engagement reports

&gt; There can be many more similar use cases depending on how this workflow is extended.


## Troubleshooting Guide

| Issue                             | Possible Cause                  | Solution                              |
| --------------------------------- | ------------------------------- | ------------------------------------- |
| No data from Facebook             | Missing or invalid access token | Add a valid Page Access Token         |
| Permission error                  | App not in production mode      | Switch Facebook App to Production     |
| No Slack messages                 | Airtable step failed            | Verify Airtable credentials and table |
| Only some reactions appear        | Reaction filter applied         | Update IF node conditions             |
| Workflow runs but nothing happens | Cron schedule too wide          | Reduce schedule interval              |


## Need Help?

Need assistance setting up this workflow, adding extensions or building similar automations?

Our [n8n developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** can help you configure, customize and scale workflows like this to match your business needs.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
