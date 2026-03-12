# 📱 Verify Telegram channel subscriptions with access control using Postgres

> ⚡ **398 views** · 📱 [Social Media & Email Marketing](../)

## Description

### Who is this for?  
This workflow is for Telegram bot developers or marketers who want to verify user subscriptions to specific Telegram channels and optionally reward them with downloadable files.

### What problem is this workflow solving?  
This workflow ensures users have subscribed to required Telegram channels before they are granted access to resources or rewards, such as Google Drive files. It automates the subscription verification process, saving time and reducing manual effort.

### What this workflow does  
- Verifies if a user is subscribed to specific Telegram channels.  
- Allows adding and removing channel IDs for verification.  
- Sends referral links to users for subscription checks.  
- Optionally grants access to Google Drive files upon successful verification (currently inactive)
 
### Setup  
1. **Add the bot to your Telegram channels as an admin** – this is required for the bot to check subscription status.  
2. **Add channel IDs via the bot** – these are the channels users will need to subscribe to.  
3. **Send the referral link** to users you want to verify.  
4. **Remove channels anytime** from the subscription check list if needed.  
5. **Create tables in Postgres**:  
   - Replace `"n8n"` in the provided SQL script with your DB schema name.  
   - Run the script in your Postgres DB.  
6. **Add credentials**:  
   - Telegram  
   - Postgres  

### How to customize this workflow to your needs  
- Modify the SQL script to suit your existing database structure.  
- Adjust the logic to enable or disable file delivery from Google Drive.

## 🔗 Nodes Used

Postgres, Telegram, Telegram Trigger, Google Drive, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
