# ⚡ Auto-clean Gmail spam folder - monthly using Gmail API

> ⚡ **570 views** · ⚡ [Personal Productivity](../)

## Description

This automated n8n workflow uses the Gmail API to clean the spam folder by permanently deleting all emails on the first day of each month. The system ensures efficient email management and improves Gmail storage by removing unwanted spam emails.

## Good to Know
- Gmail API rate limits should be respected to ensure proper email fetching
- A short delay is introduced to avoid hitting API limits
- The workflow runs automatically on the first day of every month
- Improves Gmail hygiene by removing spam emails

## How It Works
- **Monthly Trigger (1st Day)** - Starts the workflow automatically on the first of every month to perform email cleanup
- **Fetch Gmail Emails** - Uses Gmail API to retrieve all emails in the spam folder for the Gmail account
- **Pause Before Deletion (5s)** - Introduces a short delay to avoid hitting Gmail's API rate limits and ensure all emails are fetched properly
- **Delete Fetched SPAM Emails** - Permanently deletes all retrieved emails from the spam folder to free up Gmail space and improve email hygiene

## How to Use
- Import the workflow into n8n
- Configure Gmail API credentials for access
- Test the workflow on a sample date to verify email fetching and deletion
- Adjust the pause duration if needed based on API limits
- Monitor the workflow to ensure proper spam cleanup

## Requirements
- Gmail API credentials

## Customizing This Workflow
- Adjust the pause duration in the Pause node to align with Gmail API rate limits
- Modify the trigger schedule if a different cleanup frequency is preferred

## 🔗 Nodes Used

Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
