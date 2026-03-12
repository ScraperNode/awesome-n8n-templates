# 🔒 Discord server anti-impersonation / scammer tracker with data tables

> ⚡ **104 views** · 🔒 [SecOps & Security Automation](../)

## Description

# Discord Member Change Tracker

This n8n template demonstrates how to automatically monitor and track username and nickname changes across your Discord server members. Perfect for community moderation, security monitoring, and maintaining accountability in large servers!

## Use cases are many

Try tracking suspicious account behavior, maintaining audit logs for member identity changes, or monitoring impersonation attempts in your community!

## Good to know

* This workflow runs hourly by default - adjust the schedule trigger based on your server size and needs
* Discord API rate limits apply - large servers (1000+ members) may need longer intervals between checks
* Admin notifications are sent to a designated channel - ensure your bot has proper permissions
* The workflow maintains two separate databases: one for current member data and one for change history
* Protected usernames and admin roles can be configured to prevent false alerts

## How it works

* The Schedule Trigger initiates the workflow every hour to check for member changes
* Configuration Settings node stores your Discord server ID, admin channel ID, and protected user lists
* We'll fetch all server members using the Discord API, including their roles, nicknames, and user information
* The Edit Fields node extracts only the relevant data (user ID, username, nickname, roles) for processing
* Loop Over Items processes each member individually to compare against stored records
* If userID does not exist checks the main database - new members are added automatically
* The Switch node evaluates whether username or nickname has changed by comparing current data with stored records
* For first-time changes, a Discord message is sent to the admin channel and the change is logged in the tracking database
* If the user has changed their identity before, the workflow checks if this specific change is already recorded
* The aggregate all necessary data node compiles both old and new information for detailed comparison
* Multiple conditional branches determine exactly what changed (both fields, username only, nickname only, or neither)
* Database updates append new changes to existing records, creating a comma-separated history of all identity modifications
* Error handling catches edge cases where triggers fire but no actual changes occurred

## How to use

* Replace the Schedule Trigger with a Webhook or Manual Trigger for testing before enabling hourly automation
* Customize the admin notification messages in the Discord nodes to match your server's tone and formatting preferences
* Adjust the protected usernames list to exclude staff members or bots from change tracking
* Consider adding filtering logic to ignore members with specific roles (like "Verified" or "Trusted")
* Scale the workflow for larger servers by increasing the batch size in Loop Over Items or adding rate limit delays

## Requirements

* Discord OAuth2 credentials for authenticating API requests
* Two n8n Data Tables: one for main member records ("main member records") and one for tracking changes ("user member changes")
* Discord bot permissions: Read Messages/View Channels, Send Messages in the admin channel, and Read Message History
* Server admin access to configure the Discord server ID and admin channel ID

## Data Table Setup

### Main Database Table: "zft member list"

Create a data table with these columns:

* **userID** (string) - Discord user ID (unique identifier)
* **userName** (string) - Current Discord username
* **nickname** (string) - Current server nickname (null if not set)
* **role_or_roles** (string) - Comma-separated list of role IDs
* **isAdmin** (string) - Flag for admin status (optional)
* **unusual_dm_activity_until** (string) - Timestamp for DM activity monitoring (optional)

### Change Tracking Table: "user member changes"

Create a data table with these columns:

* **user_id** (string) - Discord user ID (links to main database)
* **user_init_username** (string) - Original username when first change detected
* **user_init_nickname** (string) - Original nickname when first change detected
* **user_new_username** (string) - Comma-separated history of all username changes
* **user_new_nickname** (string) - Comma-separated history of all nickname changes

**Important:** After creating your tables, update all Data Table node configurations with your actual table IDs. You can find these IDs in the n8n Data Table URLs.

## Customising this workflow

* Add email or Slack notifications alongside Discord messages for critical identity changes
* Implement a threshold system that flags users who change their identity more than X times per month
* Create a dashboard artifact that visualizes change frequency and patterns across your server
* Try a popular use-case such as automatically assigning a "Name Changed" role to flagged users for manual review
* Extend the workflow to compare profile pictures or account creation dates for additional security monitoring
* Add webhook integration to sync change logs with external security tools or moderation dashboards

## Questions?

If you have questions or need help with this workflow, feel free to reach out:

* elijahmamuri@gmail.com
* elijahfxtrading@gmail.com

## 🔗 Nodes Used

Discord, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
