# 📱 AI Agent to send Emails from Google Sheets (video tutorial)

> ⚡ **338 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recrji7w9W5rhpyhr.jpg)](https://www.youtube.com/watch?v=jxT6XO4eUwI)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## What this workflow does

This workflow automates repetitive email sending directly from Google Sheets, eliminating hours of manual work each week. It reads email data from your spreadsheet, uses AI to generate personalized content based on recipient context, sends messages through Gmail, and automatically tracks responses back to your sheet. Perfect for sending reminders, follow-ups, or regular customer communications at scale.

## Key features

- **Smart filtering**: Only processes rows marked with Status = "To send", preventing duplicate sends
- **AI personalization**: Generates tailored email content using OpenAI based on brief recipient introductions
- **Automatic status updates**: Marks emails as "Sent" after delivery to maintain accurate records
- **Response tracking**: Monitors Gmail replies and logs them back to your spreadsheet automatically

## Common use cases

- Event reminders and webinar notifications with personalized context
- Customer follow-up sequences that feel individually crafted
- Regular business communications requiring recipient-specific details
- Sales outreach campaigns with AI-generated personalization at scale

## Setup requirements

**Credentials needed:**
- Google Sheets OAuth2 connection
- Gmail OAuth2 connection
- OpenAI API credentials

**Google Sheet structure:**
Create columns for: To (email address), Subject, Introduction (one-sentence recipient context), Status ("To send" or "Sent"), and Response (auto-filled).

**Configuration:**
Update the Google Sheets document ID and sheet names to match your spreadsheet. Customize the AI prompt template in the AI Agent node to match your desired email tone and format. The response tracking branch runs automatically every minute to capture replies.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
