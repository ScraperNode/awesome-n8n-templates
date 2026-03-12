# 🤝 Auto-generate sales insights from Sheets using Gemini and notify teams instantly

> ⚡ **848 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Daily Sales Metrics Auto-Insight with Gemini, Google Sheets, Calendar, Telegram, Trello and Gmail

### Who’s it for
This workflow is ideal for sales managers, operations teams, and business owners who need daily automated sales summaries and team notifications. It eliminates the hassle of manually gathering, analyzing, and reporting daily sales data, providing instant insights and proactive notifications to keep your team aligned.

### How it works / What it does
This advanced workflow automates the entire daily sales reporting pipeline with actionable team alerts:
- Webhook captures new sales entries in real-time.
- The data is logged into Google Sheets.
- It retrieves all rows to compile current sales metrics.
- A custom node concatenates the data into an AI-friendly format.
- The Google Gemini Chat Model generates concise sales insights.
- HTML tags are cleaned up with a Remove HTML Tags node.
- The insights are classified (Good, Bad, Very Bad) using AI.
- Based on the classification:
-- Teams are alerted via Telegram group messages.
-- For negative insights, a Trello card backlog is created for follow-up.
-- A Google Calendar meeting is scheduled automatically to discuss issues.
- An email summary is also sent out via Gmail to ensure no update is missed

### How to set up
- Import the workflow into your n8n instance.
- Configure the Webhook URL in your data source (POS, CRM, etc.).
- Connect Google Sheets, Google Gemini API, Trello, Telegram, and Google Calendar.
- Adjust classification logic inside the Classify Insight node if needed.
- Customize the message templates for email and Telegram.
- Test the workflow with sample data to validate automation flow.

### Requirements
- n8n account with active workflows.
- Google Sheets API credentials.
- Google Gemini API access.
- Telegram Bot Token & Group ID.
- Trello API Key & Token.
- Google Calendar API setup.
- Gmail or SMTP credentials for email notifications.

### How to customize the workflow
- Adjust the Concat Sales Data node if you want to include more fields or different data formats.
- Modify the Gemini prompt for personalized insight summaries.
- Change the classification thresholds (Good, Bad, Very Bad) based on your business KPIs.
- Update the notification messages in Telegram and Email nodes.
- Add or remove post-classification actions, like creating different task cards or sending escalations to other platforms (Slack, Microsoft Teams, etc.).

Automate daily sales insights from Google Sheets using Gemini AI, classify results, and notify your team via email, Telegram, Trello, and Google Calendar instantly.



### Email Preview
![image.png](fileId:1945)

## 🔗 Nodes Used

Google Sheets, Trello, Webhook, Telegram, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
