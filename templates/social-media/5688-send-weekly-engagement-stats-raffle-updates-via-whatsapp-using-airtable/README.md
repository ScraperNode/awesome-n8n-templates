# 📱 Send weekly engagement stats & raffle updates via WhatsApp using Airtable

> ⚡ **241 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Scheduled Trigger:
Every X day at Y pm, the workflow is automatically triggered.

## Fetch User Data:
The workflow retrieves all user records from the "WhatsApp Engagement Database" in Airtable. Each record contains the user’s WhatsApp ID, current points, and the number of raffle vouchers.

## Personalized Message Preparation:
For each user, a personalized WhatsApp message is prepared. The message includes:

The user’s current point total

The number of raffle vouchers they have for the week

Encouragement to keep engaging for more chances to win

Information about the weekly raffle and available prizes

## Send WhatsApp Message:
The workflow sends this personalized message to each user via the Whapi API, using their WhatsApp ID.

## Result:
Every active user receives a weekly update about their engagement status, raffle tickets, and a motivational message to encourage further participation. This helps boost engagement and keeps users informed about their progress and chances in the weekly raffle.

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
