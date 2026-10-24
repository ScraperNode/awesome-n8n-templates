# 📱 Send Emails from Google Sheets (no code)

> ⚡ **250 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recrji7w9W5rhpyhr.jpg)](https://www.youtube.com/watch?v=jxT6XO4eUwI)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Workflow Overview

This workflow automates repetitive email sending directly from Google Sheets and tracks responses, helping you reclaim the 11+ hours typically spent on manual emailing each week. Simply maintain your email list in a spreadsheet with columns for recipient, subject, message, and status—then let n8n handle the sending and response tracking automatically.

## How It Works

The workflow includes two parallel automation flows:

**Email Sending Flow (Manual Trigger):**
- Retrieves all rows from your Google Sheet where Status = "To send"
- Sends personalized emails via Gmail to each recipient using the subject and message from your sheet
- Updates the Status column to "Sent" to prevent sending duplicate emails

**Response Tracking Flow (Automatic):**
- Monitors your Gmail inbox every minute for new incoming messages
- Matches incoming emails to the sender's address in your spreadsheet
- Automatically logs the response text back to a "Response" column in your sheet

## Use Cases

- Send follow-up emails and reminders to customers or prospects
- Manage email campaigns without expensive email marketing tools
- Track which recipients have responded to your outreach
- Automate recurring notifications and updates from a central spreadsheet

## Setup Instructions

1. **Create Your Google Sheet:** Set up a spreadsheet with these columns: To (email address), Subject, Message, Status, and Response
2. **Connect Google Sheets:** Create a Google Sheets OAuth2 credential in n8n by connecting your Google account
3. **Connect Gmail:** Create a Gmail OAuth2 credential in n8n with your sending email account
4. **Update Document References:** Configure the Google Sheets nodes to point to your specific spreadsheet by updating the document ID and sheet name
5. **Set Email Status:** In your sheet, set the Status column to "To send" for any emails ready to go out

## Configuration Notes

The workflow filters for rows with Status = "To send"—you can adjust this value in the Google Sheets node if you prefer different status labels. The Gmail trigger checks for new messages every minute, which you can modify in the polling settings. Make sure your Google Sheet includes all five columns (To, Subject, Message, Status, Response) for the workflow to function properly.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
