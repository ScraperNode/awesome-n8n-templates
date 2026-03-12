# 🔬 Manage Supabase database records with Telegram bot commands

> ⚡ **26 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Manage Supabase database with Telegram commands

## How it works

1. **Receive message** — Telegram trigger captures incoming bot messages
2. **Validate user** — Checks if sender's chat ID is in the authorized list
3. **Parse command** — Extracts command type (/add, /list, etc.) and parameters
4. **Route & execute** — Performs the appropriate Supabase operation (INSERT, SELECT, UPDATE, DELETE)
5. **Respond** — Sends formatted results back to Telegram

Turn your Telegram into a powerful database management interface. This workflow lets you create, read, update, delete, and search records in your Supabase database using simple chat commands — no SQL knowledge required.

## Who is this for?

Small business owners, freelancers, and teams who need to manage data on the go without opening dashboards or writing queries. Perfect for inventory tracking, simple CRM, expense logging, or any scenario where you need quick mobile access to your database.

## What problem does it solve?

Managing database records typically requires logging into admin panels or writing SQL queries. This workflow eliminates that friction by letting you interact with your data through familiar Telegram messages, from anywhere, on any device.

## Benefits

- **Mobile database access** — Manage your data from anywhere using just your phone
- **Zero SQL required** — Simple commands replace complex database queries  
- **Secure by default** — Only authorized Telegram users can access your data
- **Instant feedback** — Get formatted responses confirming every operation
- **Fully customizable** — Adapt to any table structure with minimal changes

## Available commands

| Command | Format | Example |
|---------|--------|---------|
| `/add` | name, price, quantity, category | `/add iPhone 15, 999.99, 50, electronics` |
| `/list` | [category] | `/list` or `/list electronics` |
| `/get` | id | `/get 15` |
| `/update` | id field=value | `/update 15 price=899 quantity=45` |
| `/delete` | id | `/delete 15` |
| `/search` | text | `/search iPhone` |
| `/help` | — | Shows all available commands |

## Set up steps

### 1. Create your Telegram bot
- Message [@BotFather](https://t.me/BotFather) on Telegram
- Send `/newbot` and follow the prompts
- Save the API token you receive

### 2. Get your Telegram chat ID
- Message [@userinfobot](https://t.me/userinfobot) on Telegram
- It will reply with your chat ID number

### 3. Create the Supabase table
Run this SQL in your Supabase project's SQL Editor:

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2),
  quantity INTEGER DEFAULT 0,
  category TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Configure the workflow
1. Import the workflow into n8n
2. Add your **Telegram Bot** credentials (using the API token from step 1)
3. Add your **Supabase** credentials (Project URL + API Key from Supabase dashboard)
4. Open the **"Is Authorized?"** node and replace `123456789` with your actual chat ID from step 2
5. Activate the workflow

### 5. Test it
Send `/help` to your bot to verify everything works!

## Customization

### Adding more authorized users

1. Open the **"Is Authorized?"** node
2. Click **"Add condition"**
3. Add another OR condition: `chatId` equals `[new user's chat ID]`

### Using a different table

1. Change `products` to your table name in all Supabase nodes
2. Update the field parsing in the **"Parse Command and Parameters"** code node
3. Update field mappings in **"Supabase Insert Product"** and **"Prepare Update Data"** nodes
4. Adjust the help message in **"Send Help Message"** node

### Adding more fields

1. Modify the command parsing logic in **"Parse Command and Parameters"**
2. Add field mappings in the Supabase Insert node
3. Update the **"Prepare Update Data"** Set node with new fields
4. Update the help message

## Example use cases

- **Inventory management** — Track stock levels from your phone while in the warehouse
- **Simple CRM** — Add and lookup contacts on the go
- **Expense tracking** — Log expenses as they happen
- **Task management** — Create and update tasks without opening any app
- **Field data collection** — Teams can submit data from anywhere

## Requirements

- n8n instance (cloud or self-hosted)
- Telegram account
- Supabase account (free tier works)

**Difficulty level:** Intermediate  
**Estimated setup time:** 15-20 minutes  
**Monthly operating cost:** $0 (Telegram and Supabase free tiers)

## 🔗 Nodes Used

Telegram, Telegram Trigger, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
