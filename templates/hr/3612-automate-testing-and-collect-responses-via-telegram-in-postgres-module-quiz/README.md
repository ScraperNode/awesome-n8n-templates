# 👥 Automate testing and collect responses via Telegram in Postgres (module "Quiz")

> ⚡ **547 views** · 👥 [HR & Recruitment](../)

## Description

### Who is this for?  
This template is ideal for educators, HR professionals, and anyone looking to automate testing and collect responses through Telegram, while storing results in a Postgres database.

### What problem is this workflow solving?  
Manually organizing and managing tests can be time-consuming and prone to error. This workflow automates the test distribution, response collection, and scoring process, ensuring a seamless and efficient testing experience.

### What this workflow does  
- Adds test content, including questions and answers, to a Postgres database  
- Sends a Telegram bot link to test participants  
- Automatically delivers the test via the Telegram bot  
- Collects and stores responses  
- Displays the participant's ranking at the end of the test  

### Setup  
1. **Create tables in Postgres**  
   - Replace `"n8n"` in the provided SQL script with the name of your actual schema  
   - Run the script in your database to create the required tables  

2. **Add credentials**  
   - Set up and connect your **Telegram** credentials  
   - Set up and connect your **Postgres** credentials  

### How to customize this workflow to your needs  
- Modify the test content directly in the Postgres database  
- Customize the Telegram bot messages to match your tone and branding.
- Adjust scoring logic if needed to reflect different evaluation methods.

## 🔗 Nodes Used

Postgres, Telegram, Telegram Trigger, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
