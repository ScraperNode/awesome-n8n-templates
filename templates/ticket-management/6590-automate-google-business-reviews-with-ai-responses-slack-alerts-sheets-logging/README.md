# 🎫 Automate Google Business reviews with AI responses, Slack alerts & sheets logging

> ⚡ **5,169 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it works
This workflow automatically monitors your Google Business Profile for new reviews and uses AI to generate personalized response suggestions. When a review is detected, the system formats the review data, generates an appropriate AI response based on the rating and content, sends differentiated Slack notifications (urgent alerts for negative reviews, celebration messages for positive ones), and logs everything to Google Sheets for tracking and analysis.

## Who is this for
Local business owners, restaurant managers, retail store operators, service providers, and reputation management teams who want to stay on top of customer feedback and respond promptly with thoughtful, AI-generated responses. Perfect for businesses that receive regular reviews and want to maintain consistent, professional customer engagement without manually monitoring multiple platforms.

## Requirements
- **Google Business Profile**: Active business profile with review monitoring enabled
- **Google API Credentials**: Service account with access to Business Profile API and Sheets API  
- **Slack Webhook**: Incoming webhook URL for team notifications
- **Google Sheets**: Spreadsheet with "Reviews" sheet for logging review data
- **Environment Variables**: Setup for secure credential storage
- **Basic n8n Knowledge**: Understanding of triggers, expressions, and credential management

## How to set up
1. **Configure Google Business Profile API** - Create Google Cloud project, enable Business Profile API, set up service account credentials, and add your Business Account ID and Location ID to environment variables
2. **Prepare Google Sheets Integration** - Create Google Sheet with "Reviews" sheet, add required headers, set GOOGLE_SHEET_ID environment variable, and ensure service account has edit access
3. **Setup Slack Notifications** - Create Slack webhook in your workspace and set SLACK_WEBHOOK_URL environment variable
4. **Customize Business Settings** - Update Business Configuration node with your business name and adjust AI response tone preferences

## How to customize the workflow
Modify the Business Configuration node to change your business name, adjust the AI response tone (professional, friendly, casual), customize Slack notification messages in the HTTP Request nodes, or add additional review sources by duplicating the trigger structure.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Transform, Google Business Profile Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
