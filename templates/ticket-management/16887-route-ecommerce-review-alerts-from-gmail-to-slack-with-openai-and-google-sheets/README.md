# 🎫 Route ecommerce review alerts from Gmail to Slack with OpenAI and Google Sheets

> ⚡ **6 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow polls Gmail for unread ecommerce review notification emails, extracts key review details, checks Google Sheets to prevent duplicate processing, uses OpenAI to classify sentiment and urgency, posts routed alerts to Slack, and logs each processed review and its AI metadata back to Google Sheets.

## How it works
1. Polls Gmail every minute for unread emails with the “Reviews” label.
2. Extracts the message ID, received time, customer details, product name, star rating, and review text from the email content.
3. Reads the existing review audit log from Google Sheets and skips processing if the message ID already exists or the review text is too short.
4. Sends the review details to OpenAI to return a JSON classification with sentiment, urgency, themes, summary, suggested action, and a sentiment score.
5. Routes the review based on sentiment and urgency, escalating low-star or high-urgency negative reviews and optionally notifying on positive reviews.
6. Posts a formatted alert to the selected Slack channel when notification is enabled.
7. Appends the review (including route, AI fields, and whether Slack was notified) to Google Sheets as an audit log.

## Setup
1. Create a Gmail label (for example, “Reviews”) and set up a Gmail filter so review notification emails are labeled accordingly.
2. Create a Google Sheet with a tab named “Reviews” and include columns that match the logged fields (for example, Received At, Message ID, Customer, Product, Star Rating, Review Text, Sentiment, Urgency, Score, Themes, Summary, Suggested Action, Route, Slack Sent).
3. Add credentials for Gmail OAuth2, Google Sheets OAuth2, OpenAI, and Slack OAuth2.
4. Update the configuration values in the settings step, including your Google Sheet ID, Slack channel names, and the urgent star-rating threshold.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
