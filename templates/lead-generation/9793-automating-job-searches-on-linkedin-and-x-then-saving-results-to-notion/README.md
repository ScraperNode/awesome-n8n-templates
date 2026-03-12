# 🎣 Automating job searches on LinkedIn and X, then saving results to Notion

> ⚡ **1,225 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# LinkedIn Job Search Automation

Creator: [Summer Chang](https://www.youtube.com/channel/UCAdp-nOSH-jcrwXkLlUMyXQ)

## Setup Instructions
This n8n workflow automatically searches for senior designer jobs on LinkedIn every day at 5am and saves them to a Notion database.
Prerequisites

n8n instance (cloud or self-hosted)
Notion account with API access
A Notion database set up to receive job listings

## Setup Steps
✅ 1. Create Your Notion Database
Or [duplicate my template](https://summerchangco.notion.site/job-search-automation?v=28e2d5cd4ef48197a875000cb99628e5&source=copy_link)

✅ 2. Connect Notion to n8n

In the "Save to Notion" node, click on the Notion credentials
Follow the authentication flow to connect your Notion account
Select your job search database from the dropdown

✅ 3. Customize Your Search Criteria
In the "Set Search Criteria" node, modify these parameters to match your job preferences: 

search_keywords: Job titles to search for (comma-separated)

Default: senior product designer, product design lead, senior UX designer, AI designer

excluded_keywords: Terms to filter out (comma-separated)

Default: contract, freelance

location: Where you want to work (comma-separated)

Default: remote, san francisco

f_TPR: Time filter for job postings

r86400 = Last 24 hours
r604800 = Last week
r2592000 = Last month

sortBy: How to sort results

DD = Most recent first
R = Most relevant first

✅ 4. Adjust the Schedule
In the "Everyday @5am" node:

Click on the node
Modify the schedule to your preferred time
You can set it to run daily, weekly, or at custom intervals

✅ 5. Set Result Limits
In the "Limit1" node:

Default: Processes 10 jobs per run
Adjust the maxItems value to get more or fewer results

✅ 6. Configure Wait Time (Optional)
The "Wait2" node adds a 10-second delay between requests to avoid rate limiting:

Default: 10 seconds
Increase if you're getting blocked by LinkedIn
Decrease for faster processing (not recommended)

## How It Works

1. Trigger: Runs automatically every day at 5am
2. Search: Queries LinkedIn with your specified criteria
3. Parse: Extracts job title, company, location, and URL from search results
4. Filter: Removes any jobs with missing critical information
5. Wait: Delays between requests to avoid rate limiting
6. Fetch Details: Retrieves full job descriptions and poster information
Save: Adds each job to your Notion database

## 🔗 Nodes Used

HTTP Request, X (Formerly Twitter), Notion, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
