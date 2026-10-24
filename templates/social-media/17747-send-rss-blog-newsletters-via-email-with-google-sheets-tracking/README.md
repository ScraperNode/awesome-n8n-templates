# 📱 Send RSS blog newsletters via email with Google Sheets tracking

> ⚡ **3 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs daily to read your website’s RSS feed, compares items against a Google Sheets log of previously sent articles, and emails new posts to subscribers stored in Google Sheets before appending each sent article to the log.

## How it works
1. Runs every day at 9:00 AM on a schedule.
2. Reads the latest items from your website’s RSS feed.
3. Loads the list of previously sent article URLs from a Google Sheets “Sent” tab and keeps only RSS items that are not yet logged.
4. If there are new articles, reads subscriber emails from a Google Sheets “Contacts” tab.
5. Sends an email for each new article to each subscriber using the configured SMTP/email account.
6. Appends each emailed article’s title, URL, and send timestamp to the Google Sheets “Sent” tab to prevent duplicates.

## Setup
1. Update the RSS Feed Read node with your site’s RSS feed URL.
2. Create a Google Sheet with tabs named “Sent” (article_url, title, sent_date) and “Contacts” (email), add Google Sheets credentials, and replace the spreadsheet ID in all Google Sheets nodes.
3. Add SMTP/email credentials for the Email node and set the sender address (fromEmail), subject, and any email content options you want.

## Requirements
- An n8n instance (Cloud or self-hosted)
- A Google account (for Google Sheets)
- A website with an RSS/Atom feed (WordPress, Ghost, Substack, or any CMS)
- An SMTP or email account to send from

## Customization
- Change the schedule trigger to any frequency (hourly, weekly, etc.) instead of daily
- To send one digest email covering multiple new articles instead of one email per article, adjust the loop logic in the “For Each New Article” node

## 🔗 Nodes Used

Send Email, Google Sheets, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
