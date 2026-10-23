# 🧾 Create work4all incoming invoices from Microsoft Outlook supplier emails

> ⚡ **267 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow polls a Microsoft Outlook folder for new supplier emails, sends each message to a companion n8n sub-workflow that creates an incoming invoice in work4all, and then categorizes the email (green/yellow/red) and emails errors via Outlook.

## How it works
1. Runs every minute on a schedule.
2. Fetches all emails from a specified Microsoft Outlook folder that are not already categorized as Red or Green, downloading any attachments.
3. Sends each email to a companion sub-workflow that extracts invoice data from attachments and creates the incoming invoice in work4all.
4. If the sub-workflow returns errors, sends an error notification email via Microsoft Outlook and categorizes the original message as Red.
5. If no errors occur, categorizes the message as Green when booking is clean, or as Yellow + Green when a supplier was created or an account/tax key was set automatically.

## Setup
1. Import and publish the companion workflow "Create a work4all incoming invoice from email attachments using AI" and select it in the Execute Workflow step.
2. Add Microsoft Outlook credentials with permission to read the target mailbox and send emails.
3. Update the Outlook folder ID to monitor and ensure the mailbox has the categories "Red category", "Green category", and "Yellow category".
4. Set the error notification recipient address(es) in the configuration value (errorRecipients).
5. Adjust the schedule interval if you don’t want it to poll every minute.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Microsoft Outlook, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
