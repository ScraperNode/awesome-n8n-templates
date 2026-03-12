# 💬 Telegram user registration workflow

> ⚡ **1,811 views** · 💬 [Support Chatbots](../)

## Description

# Telegram User Registration module
Offers an efficient way to manage new and returning users in your Telegram bot workflow. It checks user data against a Google Sheets database, saving essential user information and ensuring personalized interactions.

## Key Features:
- User Lookup: Searches for users in a Google Sheets database based on their unique Telegram ID.
- New User Handling: Automatically registers new users, capturing details such as first name, last name, username, and language code.
- Returning User Recognition: Detects when an existing user returns and updates their status.
- Data Storage: Safely stores user information in a structured format, with fields for status and date of registration.
- Personalized Greetings: Delivers customized welcome messages for both new and returning users, promoting engagement.

## Setup Instructions:
- Copy this Telegram User Registration Workflow
- Follow the instructions inside:
![20240922_110313.png](fileId:839)
- - Use Google Sheet template
- - Set up your credentials
- - Use example data to test workflow
- Customization: Adjust the status and messages for users based on your bot's needs.

## Connecting to the bot Workflow:
- [Copy my Telegram bot starter template](https://n8n.io/workflows/2402-telegram-bot-starter-template-setup/)
- Copy Workflow ID of your Telegram User Registration Workflow ![20240922_104826.png](fileId:837)
- Find the **Register** module in Telegram bot starter template and paste your Workflow ID![20240922_104826.png](fileId:838)
- Now the user's data is entered into the Register Workflow. 



This module provides a scalable foundation for managing user registration, whether your bot is for meal planning, customer support, or other interactive services.

## My easy to set up Telegram bot modules:
- 🏁 [Telegram bot starter template](https://n8n.io/workflows/2402-telegram-bot-starter-template-setup/)
- 📝 Telegram callback menu (soon)

Please reach out to [Victor](https://www.linkedin.com/in/gubanovvictor/) if you need further assistance with you n8n workflows and automations!

## 🔗 Nodes Used

Google Sheets, Telegram, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
