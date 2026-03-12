# 📱 Automate Telegram channel posts using Postgres (Module "Cross-Posting")

> ⚡ **680 views** · 📱 [Social Media & Email Marketing](../)

## Description

### Who is this for?
This template is ideal for users managing Telegram channels who want to automate the process of posting messages, including text and images, directly from an bot.

### What problem is this workflow solving?
Manually posting content to multiple Telegram channels can be time-consuming and inconsistent. This workflow automates that process, enabling efficient and consistent content delivery to one or more channels.

### What this workflow does
This workflow connects to a Postgres database to retrieve post content and automatically sends text or image posts to designated Telegram channels where the bot is an admin. It supports scheduling and content customization through the database.

### Setup
#### 1. Create the necessary tables in your Postgres database
- Open the SQL script provided in the workflow.
- Replace `"n8n"` with your actual schema name.
- Run the script in your database to set up the required tables.

#### 2. Add credentials
- **Telegram**: Create and connect a bot, ensuring it has admin access to the target channels.
- **Postgres**: Connect your Postgres instance using valid credentials.

### How to customize this workflow to your needs
- Modify the SQL script to match your specific table or schema naming conventions.
- Adjust the content format or post frequency directly from your database.

## 🔗 Nodes Used

Postgres, Telegram, Telegram Trigger, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
