# 📱 Generate daily tech, manga & movies newsletter from RSS feeds with Brevo

> ⚡ **207 views** · 📱 [Social Media & Email Marketing](../)

## Description

# 🔧 How it works

### Scheduled Trigger

The workflow is triggered automatically every day at 12:00 PM using a Cron node.

### RSS Feed Collection

It fetches the latest content from multiple RSS feeds related to Technology, Manga, and Movies.

### Content Processing & Formatting

The collected data is filtered and organized based on your interests.

A dynamic HTML email template is generated to present the content in a clean and readable layout.

### Email Delivery

The final newsletter is sent directly to your inbox using the Send Email node.

# ⚙️ Set up steps

### Configure RSS Sources

Update the RSS feed URLs inside the Set nodes to match your preferred sources.

### Set Email Recipient

Replace the email address in the Send Email node with your own.

### Adjust Schedule

Modify the execution time in the Cron Trigger node if you want the newsletter to be sent at a different time.

### Activate the Workflow

Enable the workflow to start receiving your personalized daily newsletter automatically.

## 🔗 Nodes Used

Google Sheets, RSS Read, Gmail, Brevo, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
