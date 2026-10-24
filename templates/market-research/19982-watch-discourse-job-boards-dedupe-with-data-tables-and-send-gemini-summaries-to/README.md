# 📊 Watch Discourse job boards, dedupe with Data Tables, and send Gemini summaries to Telegram

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Polls any Discourse forum on a schedule and keeps a ledger of every topic already seen, so you get only genuinely new job posts. Built for freelancers and community managers who need to be first to reply on niche job boards.

## How it works
1. A Schedule Trigger fires every 30 minutes (fully configurable) and an HTTP Request node fetches the JSON feed of the target Discourse category, such as a jobs board.
2. A Code node expands the feed, keeps only topics created within the last 48 hours, and outputs one item per topic.
3. A Data Table node upserts each topic as seen, forming a permanent de-duplication ledger so no topic is processed twice.
4. Connect any notification node (Telegram, Gmail, Slack) after the filter to receive only new topics.

## Setup
1. Import the workflow and open the Fetch Job Board Posts node. Replace the COMMUNITY_URL_TO_WATCH placeholder and the category path (jobs/13) with your target forum and category ID.
2. In the Record Seen Topics node, select or create an n8n Data Table that contains a topic_id column; this becomes your seen-ledger.
3. Add your notification node of choice after the filter, adjust the schedule interval and 48-hour window if you like, then activate the workflow.

## Requirements
- A publicly accessible Discourse forum (no login required for the category feed) and an n8n Data Table with a topic_id column.

## Customization
- Change the poll interval for faster boards; point it at any Discourse category (jobs, changelogs, marketplace); swap the Data Table for Google Sheets; add an auth header for boards behind a login.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
