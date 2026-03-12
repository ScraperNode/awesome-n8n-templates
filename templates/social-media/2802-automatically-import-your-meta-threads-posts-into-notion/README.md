# 📱 Automatically import your Meta Threads posts into Notion

> ⚡ **2,925 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who is this for?
This template is designed for social media managers, content creators, data analysts, and anyone who wants to automatically save and analyze their Meta Threads posts in Notion.

It’s particularly useful for:

- Building a personal archive of your Threads content.
- Training AI models using your social media data.
- Tracking your online presence and engagement.

## What this workflow does
This workflow uses the Meta Threads API to automatically retrieve your posts and import them into a Notion database.

It retrieves the post content, date, and time, and stores them in designated properties within your Notion database.

## Setup
1. Get Threads Access Token and ID: Obtain a long-lived access token and your Threads ID from the Meta Threads developer platform. This token auto-refreshes, ensuring uninterrupted workflow operation.

2. Configure Credentials and Date Range: In the “Set Credentials” node (using edit fields), enter your token and ID. 

Set the since and until parameters in the “Set Date Range” node to specify the post import period.

3. Connect to Notion and Create a Database: Connect to your Notion workspace and create a database with these properties (customize with the “Create Properties” node):

a. Title: Threads post URL (Notion entry title).

b. Threads ID: Unique post ID (prevents duplicate imports).

c. Username: Post author (for future multi-account/source management).

d. Post Date: Original post date.

e. Source (Multi-Select): “Threads” tag (for future multi-platform import and filtering).

f. Created: Import date and time.

g. Import Check (Optional): For use with a separate post-categorization workflow.

![image.png](fileId:917)

## 🔗 Nodes Used

Function, HTTP Request, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
