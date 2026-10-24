# 📱 Post new and moved Trello cards to a Discord channel via webhooks

> ⚡ **3 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow listens to Trello board events via a webhook, filters for card creations and list moves, and posts a formatted update to a Discord channel using an incoming webhook, with a fallback Discord alert if the primary post fails.

## How it works
1. Triggers when Trello sends a webhook event for activity on the configured board.
2. Extracts key details from the Trello action payload (card name, URL, member, and list context).
3. Filters events to keep only card creations and updates that include a destination list (card moves).
4. Chooses the correct message format for a newly created card versus a moved card.
5. Posts the formatted message to Discord using an incoming webhook.
6. If the Discord post fails, captures the card and error details and posts a warning message to Discord as a fallback alert.

## Setup
1. Create and add Trello API credentials (API key and token) for an account that has access to the target board.
2. Set the Trello board ID to watch (for example via the `TRELLO_BOARD_ID` environment variable or by replacing the placeholder in the Trello trigger).
3. Create a Discord incoming webhook for the target channel and add it as a Discord webhook credential for the Discord posting step (and optionally a second webhook for the failure-alert channel).

## 🔗 Nodes Used

Trello Trigger, Discord, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
