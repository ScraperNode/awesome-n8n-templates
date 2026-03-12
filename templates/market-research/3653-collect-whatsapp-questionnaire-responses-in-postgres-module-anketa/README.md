# 📊 Collect WhatsApp questionnaire responses in Postgres (Module "Anketa")

> ⚡ **735 views** · 📊 [Market Research & Insights](../)

## Description

### Who is this for?
This workflow is designed for businesses or organizations looking to collect and store user responses from questionnaires via a WhatsApp bot, with data saved in a Postgres database.

### What problem is this workflow solving?
This workflow streamlines the process of collecting and managing user responses to questionnaires. It helps automate data collection from multiple users and stores the responses in a centralized database for easy access and analysis.

### What this workflow does
Basis version:
- Add questions to the anketa_question table.
- Save the responses of users who complete the questionnaire in whatsapp into the database.

Additional version:
- All features from basis version.
- The bot sends a lead magnet from Google Drive after filling out the form.
- If the user has not answered all the questions, the bot sends a reminder after a certain time (configurable).

### Setup
1. **Create Tables in Postgres DB**  
   - Replace "n8n" in the provided SQL script with your database schema name.
   - Run the SQL script in your Postgres database (this is available within the workflow).

2. **Add Credentials**  
   - Set up WhatsApp OAuth credentials and account details.
   - Set up Postgres credentials to connect the workflow to your database.

### How to customize this workflow to your needs
- Modify the questions in the `anketa_question` table to suit your specific survey or data collection requirements.
- Adjust the WhatsApp link and communication flow to align with your branding or messaging needs.
- Customize the database table schema if you need to capture additional fields or change the format of the data stored.

## 🔗 Nodes Used

Postgres, WhatsApp Business Cloud, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
