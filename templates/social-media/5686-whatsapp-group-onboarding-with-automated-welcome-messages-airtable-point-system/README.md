# 📱 WhatsApp group onboarding with automated welcome messages & Airtable point system

> ⚡ **514 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Receive Webhook Notification
The workflow starts when a webhook receives a POST request from Whapi, notifying that a new participant has joined a WhatsApp group.

## Filter the Event
The workflow checks two conditions:

The event is for the correct WhatsApp group (matching the specific group ID).

The action type is "add" (meaning a user was added to the group).

## Send Welcome Message
If both conditions are met, the workflow sends a personalized welcome message to the new participant via Whapi.
The message explains the group rules and how the user can earn points and participate in weekly raffles.

## Create Airtable Record
After sending the welcome message, the workflow creates a new record in the Airtable database for the new participant.
The record includes:

The participant’s WhatsApp ID

An initial engagement count of 100 points

The date of the last interaction (set to today)

## Result
Every new group member is automatically welcomed and registered in your engagement database with starter points, ready to participate in your group’s activities and rewards.

This workflow ensures new users are greeted, informed, and instantly included in your engagement tracking system.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
