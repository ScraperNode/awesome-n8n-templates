# 📋 Notion status-based alert messages (Slack, Telegram, WhatsApp, Discord, Email)

> ⚡ **496 views** · 📋 [Project Management](../)

## Description

# Notion Status-Based Alert Template

## Who is this for?
Teams that live in Notion and want an **instant ping to the right person** when a task changes state.  
Perfect for content creators, project managers, or any small team that tracks work in a Notion database and prefers Slack / Telegram / Discord / e-mail notifications over manually checking a board.

## What problem does this solve?
Polling Notion or checking a kanban board is slow and error-prone.  
This workflow watches a Notion database and **routes an alert to specific people based on the item’s Status**. One central map decides who gets pinged for “On Deck”, “In Progress”, “Ready for Review”, or “Ready to Publish”.

## How it works
1. **Trigger** – choose either method  
   * *Polling* (`Notion Trigger`) – fires every minute.  
   * *Push* (`Webhook`) – register the production URL in a Notion automation and disable polling.
2. **Set Notion Page Info** – copies Title, Status, URL, etc. into top-level fields.
3. **Switch (Status router)** – routes the item down a branch that matches its Status.
4. **Set-Mention nodes** – one per Status. Each node sets a single field `mention` (e.g. `&lt;@U123456&gt;`).  
   *Add or edit these nodes to map new statuses or recipients.*
5. **Build Message** – assembles a rich text block:  
Task title
Status: 
&lt;@UserIDs&gt;
&lt;Notion URL|Open in Notion&gt;
6. **Send nodes** – Slack (active) + optional Telegram / WhatsApp / Discord / Email (disabled by default). All reuse the same `{{$json.message}}`.

## Setup steps
1. **Import this template** into n8n.
2. **Connect credentials**  
* Notion API token  
* Slack OAuth (and any other channels you enable)  
3. **Edit the Status → Mention map**  
* Open each *Set-Mention* node and replace the placeholder with the real Slack ID / chat ID / phone / email.  
* Copy a node for every extra Status you use, wire it to a new Switch output, and update the value.
4. **Set environment variables** (recommended)  
* `NOTION_DB_ID`, `SLACK_CHANNEL`, `EMAIL_FROM`, etc.
5. **Pick your trigger style**  
* Keep polling enabled **or** disable it and enable the Webhook, then register the webhook URL in Notion.
6. **Test** – change a task’s Status in Notion → watch Slack for the ping.

## Example output
&gt; **Title:** “Draft blog post – AI productivity”  
&gt; **Status:** Ready for Review  
&gt; **Slack message:**  
&gt; ```
&gt; *Draft blog post – AI productivity*
&gt; Status: Ready for Review
&gt; &lt;@U789012&gt;
&gt; &lt;https://www.notion.so/…|Open in Notion&gt;
&gt; ```

## Extending the flow
* Wire additional channels after **Build Message**—they all consume the same `{{$json.message}}`.
* Add richer logic (e.g. due-date reminders) in the Set Notion Page Info node.
* Verify Notion webhook signatures in a Function node if you rely on push triggers.

This template is the leanest possible setup: **one table of statuses → direct pings to the right people**. Swap the IDs, flip on your favourite channels, and ship.

## 🔗 Nodes Used

Send Email, Slack, Webhook, Telegram, Discord, Notion Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
