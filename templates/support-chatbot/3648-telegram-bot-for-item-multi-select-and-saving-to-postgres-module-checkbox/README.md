# 💬 Telegram bot for item multi select and saving to Postgres (Module "Checkbox")

> ⚡ **679 views** · 💬 [Support Chatbots](../)

## Description

### Who is this for?

This template is for developers and automation specialists looking to create a Telegram bot that enables users to select items from a predefined list and save their choices to a Postgres database.

### What problem is this workflow solving?

It provides a simple and efficient way to collect structured user input via Telegram and store it in a Postgres database, useful for inventory selection, order systems, or preference tracking.

### What this workflow does

- Displays a list of selectable options from a Postgres `shop_list` table in Telegram  
- Saves the user’s selection back to the database  
- Automatically deletes messages at each step to keep the chat clean  

### Setup

#### 1. Create the required tables in Postgres

- Replace `"n8n"` in the provided SQL script with the appropriate schema name for your database  
- Run the script to create the `shop_list` table  

#### 2. Add necessary credentials in n8n

- **Telegram**: Connect your Telegram bot using the Bot Token  
- **Postgres**: Add your Postgres DB credentials to allow the workflow to read/write data  

### How to customize this workflow to your needs

- Modify the `shop_list` table to include your specific options.
- Adjust the Telegram messages and logic to match your use case.

## 🔗 Nodes Used

Postgres, Telegram, Telegram Trigger, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
