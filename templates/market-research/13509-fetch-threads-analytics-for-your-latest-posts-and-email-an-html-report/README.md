# 📊 Fetch Threads analytics for your latest posts and email an HTML report

> ⚡ **211 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Fetch up to 100 of your latest Threads posts with their insights (views, likes, replies, reposts, quotes), build an HTML summary table, and send it to your inbox. Run it manually or on a schedule.

## How it works
1. The workflow starts when you run it manually, or on a schedule (every 2 days by default).
2. It fetches up to 100 of your latest Threads posts.
3. For each post, it collects the insights: views, likes, replies, reposts, and quotes.
4. It builds a formatted HTML table that summarizes all the posts in one view.
5. It emails the report to your inbox, so you can check how recent posts did without opening Threads.

## Setup
1. Get a Threads API access token for your account that can read your posts and their insights.
2. Add the token in n8n and connect it to the requests that call the Threads API.
3. Add a credential for the email node and set the recipient to your own address.
4. Click Execute workflow once to check that the report arrives and the numbers look right.
5. Activate the workflow to turn on the schedule.

## Requirements
- A Threads account with API access
- An email account n8n can send from

## Customization
- Change the schedule interval (default: every 2 days).

## Additional info
Built by Jason Chuang (AI process automation consultant) — https://jasonchuang.com

Want to auto-publish Threads posts from Notion too? Check out the Content Automation Bundle — includes Threads Publisher, LinkedIn Publisher, Facebook Publisher, AI Content Rewriter and more: https://jasonchuang0818.gumroad.com/l/n8n-content-automation-bundle

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
