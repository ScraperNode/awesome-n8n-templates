# 🎬 Customer onboarding help requests (Typeform to Gmail & Sheets)

> ⚡ **298 views** · 🎬 [Content Creation & Video](../)

## Description

## Description
Automatically capture customer onboarding help requests from Typeform, log them in Google Sheets, validate email addresses, and send a professional HTML welcome email via Gmail. Ensures smooth onboarding communication with audit-ready tracking and error handling. 📝📧

## What This Template Does
- Monitors Typeform submissions for new onboarding help requests. 📥
- Logs all responses into Google Sheets with structured fields. 📊
- Validates email addresses to prevent errors. ✅
- Generates professional HTML welcome emails with company branding. 🎨
- Sends onboarding emails directly via Gmail. 📧
- Handles missing or invalid emails with error logging. ⚠️

## Key Benefits
- Streamlines customer onboarding request handling. ⏱️
- Creates a centralized log for analytics and audits. 🧾
- Improves customer experience with branded email communication. 💡
- Reduces manual effort in follow-up and data entry. 🔄
- Ensures reliable handling of incomplete or invalid submissions. 🛡️

## Features
- Typeform trigger for new form submissions. 📝
- Automatic Google Sheets logging of customer details. 📈
- Conditional email validation before sending. 🔍
- Dynamic HTML email generation with customer details. 🎨
- Automated Gmail delivery of welcome emails. 📧
- Error handling node for missing/invalid email submissions. 🚨

## Requirements
- n8n instance (cloud or self-hosted).
- Typeform API credentials with webhook permissions.
- Google Sheets OAuth2 credentials with spreadsheet write access.
- Gmail OAuth2 credentials with send email permissions.
- Pre-configured Google Sheet for onboarding request tracking.

## Target Audience
- Customer success and onboarding teams. 👩‍💻
- SaaS startups managing onboarding inquiries. 🚀
- Support teams handling product/service onboarding. 🛠️
- SMBs looking for efficient onboarding automation. 🏢
- Remote teams needing structured onboarding workflows. 🌐

### Step-by-Step Setup Instructions
- Connect Typeform, Google Sheets, and Gmail credentials in n8n. 🔑
- Insert your Typeform form ID in the trigger node. 📝
- Replace the Google Sheet ID with your tracking sheet. 📊
- Map form fields to spreadsheet columns (ensure headers match). 🔗
- Customize email HTML template with branding and company info. 🎨
- Update sender email in the Gmail node. 📧
- Test the workflow with a sample form submission. ✅

## 🔗 Nodes Used

Function, Google Sheets, Slack, Typeform Trigger, ClickUp, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
