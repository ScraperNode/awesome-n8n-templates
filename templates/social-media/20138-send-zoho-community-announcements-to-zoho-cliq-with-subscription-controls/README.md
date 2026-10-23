# 📱 Send Zoho Community announcements to Zoho Cliq with subscription controls

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow polls Zoho Community (help.zoho.com) for new announcement topics in selected categories and posts them to a Zoho Cliq channel via a bot, using n8n Data Tables to store subscription preferences and the last-seen timestamp per category.

## How it works
1. Runs on a schedule to start the announcement polling cycle.
2. Loads the Zoho Cliq channel endpoint and bot API name, then fetches the Zoho Community portalId from help.zoho.com.
3. Reads subscribed Zoho Community categories from an n8n Data Table and loops through each category that has announcements enabled.
4. For each category, reads the last check time from an n8n Data Table and requests the latest announcement topics from the Zoho Community API.
5. Splits the returned topics into individual items and filters to only those created after the stored last check time (or the last 24 hours if none exists).
6. Posts each new announcement to Zoho Cliq via an authenticated HTTP request (including subject, link, content snippet, and author) and updates the stored last check time for that category.

## Setup
1. Run the manual “initial database setup” once to create the two n8n Data Tables used for subscription preferences and last-view tracking.
2. Create Zoho OAuth2 credentials with the ZohoCliq.Webhooks.CREATE scope and select them in the Zoho Cliq message request so n8n can authenticate to the Cliq API.
3. In Zoho Cliq, create (or choose) a target channel and update the workflow’s configuration with the channel API endpoint and the bot_unique_name (bot API name), then invite the bot to the channel.
4. Set your desired polling frequency in the schedule trigger.
5. (Optional) Enable the admin panel webhooks, open the admin panel URL to choose subscribed categories, and then disable the admin webhooks again if you want to prevent others from changing subscriptions.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
