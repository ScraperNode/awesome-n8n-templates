# 📊 Get all members of a Discord server with a specific role

> ⚡ **3,685 views** · 📊 [Market Research & Insights](../)

## Description

# Use Case
This workflow retrieves all members of a Discord server or guild who have a specific role. 

Due to limitations in the Discord API, it only returns a limited number of users per call. To overcome this, the workflow uses Google Sheets to track which user we received last to return all Members (of a certain role) from a Discord server in batches of 100 members.

# Setup
1. Add your Google Sheets and Discord credentials.
2. Create a Google Sheets document that contains `ID` as a column. We're using this to remember which member we received last.
3. Edit the fields in the setup node `Setup: Edit this to get started`. *You can read up on how to get the Discord IDs via [this link](https://www.pythondiscord.com/pages/guides/pydis-guides/contributing/obtaining-discord-ids/).*
4. Link to your Discord server in the Discord nodes
5. Activate the workflow
6. Call the production webhook URL in your browser
# Requirements
- Admin rights in the Discord server and access to the developer portal of discord
- Google Sheets
- Minimum n8n version 1.28.0
# Potential Use cases
- Writing a direct message to all members of a certain role
- Analysing user growth on Discord regularly
- Analysing role distributions on Discord regularly
- Saving new members in a Discord 
- ...

# Keywords
`Discord API`, `Getting all members from Discord via API`, `Google Sheets and Discord automation`, `How to get all Discord members via API`

## 🔗 Nodes Used

Google Sheets, Webhook, Discord, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
