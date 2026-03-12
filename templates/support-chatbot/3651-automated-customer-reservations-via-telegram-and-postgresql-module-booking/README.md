# 💬 Automated customer reservations via Telegram and PostgreSQL (Module "Booking")

> ⚡ **1,551 views** · 💬 [Support Chatbots](../)

## Description

### Who is this for?  
This workflow is for businesses or services that require managing customer reservations or appointments through a Telegram bot and storing reservation details in a PostgreSQL database.

### What problem is this workflow solving?  
This workflow automates the process of capturing reservation data via a Telegram bot and storing it in a PostgreSQL database. It eliminates the need for manual entry and reduces errors, improving efficiency in managing bookings.

### What this workflow does  
- The workflow allows customers to select a day and time for their reservation through a Telegram bot.
- Customers provide their phone number and name, which are then added to the reservation table in the PostgreSQL database.
- Successfully added reservations are confirmed via the bot, ensuring both the business and customer are updated.

### Setup  
1. **Create tables in Postgres DB**  
   - Replace `"n8n"` in the provided SQL script with the name of your schema in the database.
   - Execute the SQL script to set up the required tables.

2. **Add Credentials**  
   - Add your **Telegram** bot credentials.
   - Add your **PostgreSQL** database credentials to the workflow for seamless integration.

### How to customize this workflow to your needs  
- Modify the available days and times in the Telegram bot according to your business hours or schedule.
- Adjust the database schema or add additional fields for customer preferences, special requests, or payment information as needed.

## 🔗 Nodes Used

Postgres, WhatsApp Business Cloud, Summarize, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
