# ⚡ Send file to kindle with Telegram Bot and Outlook

> ⚡ **1,834 views** · ⚡ [Personal Productivity](../)

## Description

## Workflow Overview
This workflow automates the process of forwarding e-book files to a Kindle device using a Telegram bot and Outlook email.

## Setup Steps:

1. **Telegram Bot Setup**:  
   Create a Telegram bot via BotFather and configure its credentials in the workflow.

2. **Outlook Email Configuration**:  
   Set up your Outlook email credentials. (Currently, only Outlook is supported, but you can modify the workflow to support other email providers.)

3. **Amazon Kindle Email Setup**:  
   Find your Kindle device's email address from your Amazon account. This will be the recipient address for the e-books.

4. **Allow Email Sending to Kindle**:  
   Ensure your Amazon account is configured to allow emails from your Outlook address to send files to your Kindle.

## Workflow Explanation:

- The workflow begins with a **Telegram bot trigger** node that listens for new chat messages.

- When a new message is received, the workflow checks if the message contains a file attachment.  
  - If no file is detected, the bot will send a warning reply to the user in the chat.

- If a file is found, it will be renamed to ensure it appears correctly on the Kindle device when sent.

- The workflow then composes an email with the file attached and sends it to the Kindle's receiving address.  
  - If the email is sent successfully, the bot will notify the user with a success message in the chat.

- Only Amazon-supported file types will be accepted by Kindle.  
  - If sending fails, you will receive a notification email from Amazon in your Outlook inbox.  
  - In case of delivery issues, retry sending the file as network issues may occasionally interfere with the process.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Microsoft Outlook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
