# ⚡ 2-way-sync assignments/completion between Canvas LMS and Notion

> ⚡ **531 views** · ⚡ [Personal Productivity](../)

## Description

Syncs assignments and completion states to and fro between Canvas LMS and a Notion database. Automatically triggers every 2 hours during the schoolday by default (meaning 7 times a day), but also supports manual refreshing via webhooks.

## Setup
You'll need a few things to get started:

1. A Canvas API key. You can generate one by going to your Canvas account settings and clicking on the **"New Access Token"** button. The URL looks like `https://canvas.wisc.edu/profile/settings`
2. You'll also need to replace URLs in Canvas nodes with your institution's domain, unless you're a student at UW-Madison. Canvas nodes are all the HTTP Request nodes except the one labelled "OpenAI Categorization", which is an OpenAI node and will require a key in a later step.
3. A Notion integration token. You can find this by going to your [Notion integrations page](https://www.notion.so/my-integrations) and clicking "Create new integration". You can make it a "Internal Integration". 
4. A Notion database to sync to. [I made a template for use with the workflow](https://tsuniiverse.notion.site/1976e99d91128076b034e7379464560f?v=1976e99d911281e7bd4b000c2cbec692&pvs=4), but you can use any database that has the following fields:
    - Status (status): Status with at least the options "Not Started" and "Completed" - assignments start out "Not Started", and are marked "Completed" when they are submitted on Canvas.
    - Estimate (select): Select with at least the options "XS", "S", "M", "L", "XL" - this is where the estimated time to complete the assignment will be stored. Even if you don't use AI, they'll start out as "M"
    - Priority (select): Select with at least the options "Could Do", "Should Do", "Must Do" - assignments start out "Should Do"
    - ID (text): this is where the ID of the assignment will be stored. We use this to sync without having a database on the server
    - Due Date (date): this is where the due date of the assignment will be stored
    - Class (text): this is where the name of the class will be stored
    - Link (URL): this is where the link to the assignment will be stored
4. The ID of the Notion database you want to sync to.  You can find this by clicking "Share" in the top right of your database and copying the link. The ID is the part of the link that comes after `https://www.notion.so/` and before `?v=`. So for `https://www.notion.so/tsuniiverse/1976e99d91128076b034e7379464560f?v=1976e99d911281e7bd4b000c2cbec692&pvs=4`, the ID would be `1976e99d91128076b034e7379464560f`.
5. An OpenAI key for assignment length estimation or disable the node.

## Manual Refreshing
Embed the production URL from the Webhook Trigger inside a "toggle list" or "toggle heading" inside Notion, then expand the heading to refresh, like so:
![Notion_ygP4sWWvte.gif](fileId:998)

## 🔗 Nodes Used

HTTP Request, Webhook, Notion, Markdown, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
