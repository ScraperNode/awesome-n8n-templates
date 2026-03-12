# ⚙️ Backup & restore n8n workflows with Telegram, Google Drive and form upload

> ⚡ **365 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Secure your n8n automations with this comprehensive template that automates periodic backups to Telegram for instant access while enabling flexible restores from Google Drive links or direct file uploads—ensuring quick recovery without data loss.

## 📋 What This Template Does
This dual-branch workflow handles full n8n instance backups and restores seamlessly. The backup arm runs every 3 days, fetching all workflows via the n8n API, aggregating them into a JSON array, converting to a text file, and sending it to Telegram for offsite storage and sharing. The restore arm supports two entry points: manual execution to pull a backup from Google Drive or form-based upload for local files, then parses the JSON, cleans workflows for compatibility, and loops to create missing ones or update existing by name—handling batches efficiently to respect API limits.
- Scheduled backups with Telegram delivery for easy stakeholder access
- Dual restore paths: Drive download or direct file upload via form
- Intelligent create-or-update logic with data sanitization to avoid conflicts
- Looped processing with existence checks and error continuation

## 🔧 Prerequisites
- n8n instance with API enabled (self-hosted or cloud)
- Telegram account for bot setup
- Google Drive account (optional, for Drive-based restores)

## 🔑 Required Credentials

### n8n API Setup
1. In n8n, navigate to Settings → n8n API
2. Enable the API and generate a new key
3. Add to n8n as "n8n API" credential type, pasting the key in the API Key field

### Telegram API Setup
1. Message @BotFather on Telegram to create a new bot and get your token
2. Find your chat ID by messaging @userinfobot
3. Add to n8n as "Telegram API" credential type, entering the Bot Token

### Google Drive OAuth2 API Setup
1. In Google Cloud Console, go to APIs & Services → Credentials
2. Create an OAuth 2.0 Client ID for Web application, enable Drive API
3. Add redirect URI: [your-n8n-instance-url]/rest/oauth2-credential/callback
4. Add to n8n as "Google Drive OAuth2 API" credential type and authorize

## ⚙️ Configuration Steps
1. Import the workflow JSON into your n8n instance
2. Assign the n8n API, Telegram API, and Google Drive credentials to their nodes
3. Update the Telegram chat ID in the "Send Backup to Telegram" node
4. Set the Google Drive file ID in the "Download Backup from Drive" node (from file URL)
5. Activate the workflow and test backup by executing the Schedule node manually
6. Test restore: Run manual trigger for Drive or use the form for upload

## 🎯 Use Cases
- Dev teams backing up staging workflows to Telegram for rapid production restores during deployments
- Solo automators uploading local backups via form to sync across devices after n8n migrations
- Agencies sharing client workflow archives via Drive links for secure, collaborative restores
- Educational setups scheduling exports to Telegram for student template distribution and recovery

## ⚠️ Troubleshooting
- Backup file empty: Verify n8n API permissions include read access to workflows
- Restore parse errors: Check JSON validity in backup file; adjust Code node property reference if needed
- API rate limits hit: Increase Wait node duration or reduce batch size in Loop
- Form upload fails: Ensure file is valid JSON text; test with small backup first

## 🔗 Nodes Used

Telegram, Google Drive, n8n, Schedule Trigger, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
