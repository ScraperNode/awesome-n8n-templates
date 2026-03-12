# ⚙️ Automated Telegram UserBot session monitoring & recovery with TelePilot

> ⚡ **774 views** · ⚙️ [DevOps & CI/CD](../)

## Description

![image.png](fileId:1786)
**Disclaimer:** *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**Important distinction:** This template manages **Telegram Copilot**'s UserBots (client accounts), not Telegram Bots.
# UserBot vs. Bot: Key Differences
## 🔹 Telegram Copilot's UserBots
- Authenticate as real user accounts (phone number required)
- Can join groups/channels without "Bot" label
- Subject to Telegram's client API limits
- Require manual login (MFA supported)
## 🔹 Telegram Bots
- Use @BotFather-created tokens
- Limited to bot API functionality
- Can't initiate chats with unbidden users
- No phone number required
This template solves the unique challenges of **UserBot** management through:
# Core Functionality
## 🛡️ Session Reliability
- Automatic crash recovery (5-step restart sequence)
- Persistent session monitoring (checks every 6h)
- Database cleanup via /clear command
## 📱 Multi-Device Support
- Manages sessions independently from mobile clients
- Tracks active devices via /stat command
- Isolates session data per credential

## 🔔 Smart Notifications
- Real-time alerts to admin chat
- Detailed error context with authState snapshots
- Success confirmations with session metadata
# Setup Guide
## Prerequisites
- Self-hosted n8n instance (community node required)
- Valid Telegram account for UserBot
- Telegram bot token for notifications
- TelePilot credentials with api_id/api_hash
## Configuration Steps
### Credential Setup
- Add TelePilot credentials in n8n
- Configure Telegram bot token in notification nodes
- Set admin chat ID for alerts
### Monitoring Customization
- Adjust check frequency in Schedule Trigger
- Modify alert thresholds in Filter nodes
- Configure retry logic in recovery sequence
### Session Management
- Test /start command flow
- Verify /stat output format
- Confirm notification delivery

## Workflow Customization
### Advanced Options
- Add secondary notification channels (Email, Slack)
- Implement escalating alert system
- Integrate with monitoring dashboards
- Customize recovery attempt limits
### Compliance Notes
- UserBots must comply with Telegram's Terms of Service
- Not intended for bulk messaging or spam
- Recommended for legitimate automation use cases


**Note:** UserBots must comply with Telegram ToS. Not for spam/mass messaging.

**Why This Matters:** UserBots enable automation scenarios impossible with regular bots (e.g., group management as normal user, reacting as human account). This workflow keeps them reliably online 24/7.

## 🔗 Nodes Used

Telegram, Schedule Trigger, Filter, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
