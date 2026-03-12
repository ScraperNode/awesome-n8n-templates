# ⚙️ Workflow error logging and alerts with Google Sheets and Gmail

> ⚡ **1,195 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## What this workflow does

This workflow creates a comprehensive error monitoring system for your n8n instance by automatically capturing workflow failures, logging them to Google Sheets, and sending immediate email notifications.

**Step by step:**
1. **Error Trigger** automatically activates whenever any workflow in your n8n instance encounters an error or failure
2. **Google Sheets - Create Error Log** captures and stores comprehensive error details in a spreadsheet including workflow information, node details, timestamps, and full error stack traces
3. **Gmail - Send Notification** dispatches immediate email alerts with formatted error summaries containing workflow names, failed nodes, error descriptions, and direct links to failed executions

## How to set up

1. **Copy the Google Sheets template structure** from this link: https://docs.google.com/spreadsheets/d/11-vLBAKolEvaL0qQDjckHmvC1S6_hxHbgSP8CLyngSs/edit?gid=0#gid=0 - This step is crucial as it provides the correct column structure for error logging
2. **Connect your Google Sheets account** to the Google Sheets node and update the document ID to point to your copied error logging spreadsheet
3. **Connect your Gmail account** to the Gmail node for sending error notifications
4. **Update the Gmail recipient email** from "n8n_log_template@yopmail.com" to your preferred notification email address
5. **Customize email subject and message format** according to your notification preferences and organizational needs
6. **Test the workflow** by intentionally creating a small error in a test workflow to verify the logging and notification system works correctly
7. **Monitor your error logs** regularly through the Google Sheets document to identify patterns and recurring issues

## How to customize this workflow to your needs

* **Add multiple notification recipients**: modify the Gmail node to send alerts to different team members or create separate nodes for different notification channels (Slack, Discord, etc.)
* **Customize error filtering**: add conditional logic to only log certain types of errors or exclude specific workflows from monitoring
* **Enhance error categorization**: add additional columns to your Google Sheets template for error severity levels, affected systems, or resolution status tracking
* **Set up error escalation**: create time-based triggers that send follow-up notifications for unresolved errors after specific time periods

## Need help customizing?

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**

## 🔗 Nodes Used

Google Sheets, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
