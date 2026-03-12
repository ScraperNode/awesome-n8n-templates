# 📱 Send WhatsApp bulk template messages from Google Sheets or CSV via WOZTELL

> ⚡ **61 views** · 📱 [Social Media & Email Marketing](../)

## Description

## ✨ What this template does
This workflow sends WhatsApp template messages in bulk to a contact list stored in Google Sheets or uploaded via CSV.

It automatically loops through each contact, sends the selected WhatsApp template via WOZTELL, and updates the sheet with the delivery status.

Use this for campaigns, announcements, onboarding sequences, or follow up outreach.

## 👷 Who it’s for
Built for teams that need to send WhatsApp template messages to a contact list for campaigns, outreach, or announcements. Suitable for event organisers, marketing, sales, or agencies managing bulk messaging.

## ⚙️ How it works
1. Retrieves unsent contacts from Google Sheets or CSV upload.
2. Loops through each contact.
3. Sends a WhatsApp template message.
4. Updates the sheet with success or failure status.
5. Waits briefly before processing the next contact to prevent rate issues.

## 🧭 How to use
1. Import this template into n8n.
2. Connect your Google Sheets credentials.
3. Connect your WOZTELL credentials.
4. Select your approved WhatsApp template.
5. Map sheet columns to template variables.
6. Execute the workflow.

## 🧩 Requirements
- Google Sheets access or CSV file
- n8n account
- WOZTELL account with WhatsApp channel configured
- Approved WhatsApp template

## 🧠 Customization ideas
- Replace the CSV source with other supported inputs such as n8n Form upload, Google Sheets, OneDrive, or Zoho Sheet
- Adjust the field mapping logic or add code nodes to match your data schema
- Send messages through different WOZTELL channels or multiple sender numbers based on routing rules
- Add opt in validation before sending
- Schedule automatic campaign execution instead of manual trigger
- Add campaign tags or tracking columns

## 🤖About WOZTELL
This template uses WOZTELL to connect n8n with the official WhatsApp Business Platform, allowing you to send and receive WhatsApp messages through approved templates and automation workflows.

You can create a WOZTELL account and register a WhatsApp Business API account for free.

1. Sign up [here](
https://platform.woztell.com/signup?lang=en&utm_campaign=plugin-n8n&utm_medium=plugin-n8n&utm_source=N8N)
2. Verify your email and complete your account setup.
3. Follow the WhatsApp Business API [setup guide](
https://doc.woztell.com/docs/procedures/basic-whatsapp-chatbot-setup/standard-procedures-wa-connect-waba/)

Once your WhatsApp Business account is connected and message templates are approved, you can activate this workflow.

## 🚀 More templates
We’re continuously building more WOZTELL n8n templates. Check our n8n profile to explore the latest workflows.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
