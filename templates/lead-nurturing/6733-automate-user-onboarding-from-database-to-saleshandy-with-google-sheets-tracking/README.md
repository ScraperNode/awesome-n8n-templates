# 💬 Automate user onboarding from database to Saleshandy with Google Sheets tracking

> ⚡ **228 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Automatically import new user signups from any database, filter by signup date, and enroll users into your Saleshandy email sequence for immediate engagement. Activity is logged to a spreadsheet (e.g., Google Sheets) for tracking and analytics. Fully configurable, no hardcoded values.

## Prerequisites

- A database with a users table (fields: id, full_name, email, created_at)
- Saleshandy account with API key and an active sequence.
- Spreadsheet (e.g., Google Sheets) with columns: ID, Name, Email, Created_at
- Configured OAuth/API credentials for each service

## How It Works

- Fetches new signups from your database within your desired date range (e.g., daily or weekly).
- Splits user names and formats user data as needed.
- Adds each user to your Saleshandy sequence using their name and email.
- Logs every processed record in your spreadsheet for further tracking and analytics.
- Runs automatically on your defined schedule (example: daily trigger).

## Set Up Steps

- Estimated time: 10–20 minutes
- Collect your database and Saleshandy access credentials, and spreadsheet info.
- Edit database node(s) to include your connection and correct date filter.
- Set your Saleshandy API key and target sequence ID.
- Enter your spreadsheet link or ID and authenticate as needed.
- Test the workflow with a small user batch before scheduling it for routine runs.
- Check sticky notes by each workflow node for details and best practices.

## Requirements

- Database connection credentials and access
- Saleshandy API key and sequence ID
- Google Sheets (or alternative) setup credentials

## Customisation Tips

- Edit the date filter to adjust the range (last day, week, month, or custom)
- Add error-handling nodes to catch issues with API calls or data
- Set up notifications (email, Slack, etc.) for process success/failure
- Rename nodes to reflect your business logic or steps
- Replace the manual trigger with a webhook or scheduled cron if desired
- Configure workflow variables for all credentials and IDs—avoid hardcoding

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
