# 📱 Automatically send a direct message (DM) to new followers on Bluesky using Baserow

> ⚡ **795 views** · 📱 [Social Media & Email Marketing](../)

## Description

Send **personalized welcome messages** to your new Bluesky followers automatically, helping you maintain engagement while saving time.

This workflow monitors your follower list and sends customized direct messages, creating a **warm welcome for new connections** without manual intervention.

## How it works
* Checks your Bluesky followers list **daily at 9 AM**
* Identifies new followers by comparing against a database
* **Extracts the follower's first name** when available
* Sends a personalized welcome message with optional link
* **Prevents duplicate messages** through double-verification
* Maintains a record of sent messages to avoid repetition

## Set up steps (10-15 minutes)
1. Create a Bluesky account if you haven't already
2. Generate an app password in your Bluesky settings
3. Enter your **Bluesky handle** and **app password** in the "Set Bluesky Credentials" node
4. Set up your database (Baserow, or adapt for Airtable/Google Sheets)
5. Customize your welcome message in the "Create Welcome Message" node
6. Optional: Adjust the regular check time (default: 9 AM)

## Features
* **Personalized messaging** using follower's first name when available
* **Database tracking** to prevent duplicate messages
* **Basic rate limiting protection** to stay within API limits
* Customizable welcome message with clickable links
* Ability to handle up to **100 new followers per check**

## Perfect for creators who want to
* Welcome new followers **consistently**
* **Save time** on manual messaging
* Build **early engagement** with followers
* Share important links or resources
* Maintain a **professional presence**
* **Scale** their community management

## Suggested enhancements
* Add **message templates** for different follower types
* Include email/Slack notifications for errors
* Add **analytics tracking** for message success rates
* Implement **dynamic timing** based on follower activity
* Create **A/B testing** for different welcome messages
* Add follower segmentation based on profile data

## 🔗 Nodes Used

HTTP Request, Baserow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
