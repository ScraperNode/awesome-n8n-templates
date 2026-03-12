# 📱 Run A/B-tested email campaigns using Gmail, Google Sheets, and Slack

> ⚡ **45 views** · 📱 [Social Media & Email Marketing](../)

## Description

Run professional email campaigns with A/B testing, Google Sheets tracking, and Slack analytics.
FEATURES:

A/B testing with automatic 50/50 split
Email validation and deduplication
Batch processing with anti-spam delays
Professional HTML email templates
Complete campaign tracking and logging
Real-time Slack notifications

WORKFLOW:

Trigger campaign (manual, scheduled Monday 9AM, or webhook)
Read and validate contacts from Google Sheets
Assign A/B variants automatically
Send personalized HTML emails via Gmail
Log results and update contact status
Slack notifications on start/completion/errors

SETUP:

Create Google Sheet with 4 tabs:

Contacts: name, email, segment, sent, unsubscribed, sent_date, campaign, variant, error_msg
Campaigns: Campaign ID, Name, Start Date, Total Contacts, Valid, Invalid, Already Sent, Unsubscribed, Variant A, Variant B, Status, End Date, Duration
Send Log: Timestamp, Campaign ID, Email, Name, Variant, Subject, Status
Metrics: Campaign ID, Opens, Clicks, Unsubscribes


Replace YOUR_DOCUMENT_ID in all Sheets nodes
Connect Gmail credentials
Connect Slack (#marketing, #errors channels)

CUSTOMIZABLE:

Company name, colors, logo in Configure Campaign node
Email content and design in Prepare Email node
A/B test subjects
Batch size and delays

IDEAL FOR:
Newsletters, product launches, marketing campaigns, announcements, and any bulk email needs.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
