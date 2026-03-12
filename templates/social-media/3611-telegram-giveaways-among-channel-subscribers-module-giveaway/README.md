# 📱 Telegram giveaways among channel subscribers (Module "Giveaway")

> ⚡ **260 views** · 📱 [Social Media & Email Marketing](../)

## Description

### Who is this for?
This workflow is ideal for businesses or individuals who want to run Telegram-based giveaways that require users to subscribe to certain channels in order to participate.

### What problem is this workflow solving?
Running a fair and trackable giveaway on Telegram can be difficult without a system that verifies subscriptions and manages participants. This workflow simplifies that process, ensuring only eligible users are included and enabling a smooth drawing process.

### What this workflow does
- The giveaway organizer specifies a list of Telegram channels for participants to must subscribe to.
- The organizer shares a bot link with users.
- Users start the bot, confirming their participation in the giveaway.
- The bot tracks eligible participants.
- The administrator complete the giveaway and select winners.

### Setup
1. **Create tables in your Postgres database**  
   - Open the provided SQL script.
   - Replace `"n8n"` with your schema name.
   - Execute the script in your Postgres DB.

2. **Add credentials in n8n**  
   - Telegram credentials (Bot token, etc.)  
   - Postgres database credentials

### How to customize this workflow to your needs
- Modify the SQL script to match your database schema if needed.
- Customize the Telegram bot messages and logic using the n8n Telegram nodes.
- Add additional nodes if you want to notify winners or log data in other services.

## 🔗 Nodes Used

Postgres, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
