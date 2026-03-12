# 💬 Auto-reply to FAQs on WhatsApp using Postgres (Module "FAQ")

> ⚡ **1,168 views** · 💬 [Support Chatbots](../)

## Description

### Who is this for?

This workflow is designed for businesses or individuals who want to automate responses to frequently asked questions via WhatsApp, while managing their question-and-answer database using Postgres.

### What problem is this workflow solving?

This workflow addresses the challenge of efficiently managing and automating responses to customer inquiries. It helps reduce manual effort and ensures quick access to information, while providing an option for customers to request live assistance when needed.

### What this workflow does

1. It allows you to store questions and answers in a Postgres database.
2. A link to a bot is shared with customers, enabling them to read the available questions and answers.
3. If a customer does not find an answer to their query, they can request a consultation with a manager.

### Setup

1. **Create tables in Postgres DB**  
   - Replace "n8n" in the provided SQL script with the name of your schema in the database.
   - Run the SQL script in your database to set up the necessary tables. (The script is available in the workflow.)

2. **Add Credentials**  
   - Set up the WhatsApp integration (OAuth and Account credentials).
   - Connect the Postgres database by adding the necessary credentials.

### How to customize this workflow to your needs

- Modify the Postgres schema name in the SQL script to match your database configuration.
- Update the questions and answers in the database to suit the information you want to provide via the bot.
- Customize the WhatsApp integration settings to match your account credentials and API details.

## 🔗 Nodes Used

Postgres, WhatsApp Business Cloud, Summarize, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
