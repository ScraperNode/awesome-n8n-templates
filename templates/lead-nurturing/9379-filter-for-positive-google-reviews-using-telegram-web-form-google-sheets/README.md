# 💬 Filter for positive Google reviews using Telegram, web form & Google Sheets

> ⚡ **287 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This workflow is a powerful reputation management tool designed to proactively filter customer reviews. It helps you encourage positive reviews on Google while capturing negative feedback privately before it impacts your public rating. By using an incentive, it maximizes the number of customers who enter this review funnel, giving you control over your online reputation.


## Who’s it for?
This template is essential for any business where Google Reviews are critical: restaurants, clinics, retail stores, local services, and more. If you want to improve your Google star rating by systematically encouraging happy customers to post public reviews and addressing unhappy customers privately, this is the perfect solution.

## How it works / What it does
The main job of this workflow is to send customers to a special review landing page. On this page, only reviews of 4 stars or more are directed to your Google Review page, while lower-rated feedback is captured in a private form.

Trigger: A customer scans a QR code (e.g., in your store) and sends a message to your Telegram bot.

Incentivize: The bot checks if the user is new. If so, it sends them a small discount or offer as a thank-you for their business and to encourage them to provide feedback.

Send to Filter Page: After a short delay, the workflow sends a message with a link to your review filtering webpage.

Track & Follow Up: The workflow tracks whether the link has been clicked (updating the status in a Google Sheet). If a user doesn't click the link after 23 hours, an automated reminder is sent to maximize engagement.

## How to set up
Crucial Prerequisite: This workflow sends users to a review-filtering webpage. You must have this webpage already built. The page should have logic to send 4+ star reviewers to Google and capture other feedback internally. [code](https://github.com/anirudhaeran/Google-Review-Feedback-Form)

Create a Telegram Bot: Use the BotFather on Telegram to create a bot and get your API token.

Google Sheet: Create a Google Sheet with columns like: ID, First Name, Status, Feedback Message, Timestamp.

Credentials: Add your Google Sheets API and Telegram Bot API credentials to n8n.

Configure Nodes:

In all Google Sheets nodes, select your credential and paste your Sheet ID.

In all Telegram nodes, select your Telegram credential.

In the "Send Review Page Link" and "Send Review Link Reminder" nodes, update the URL to point to your review filtering page.

Create a QR Code: Generate a QR code for your bot's link (e.g., https://t.me/YOUR_BOT_USERNAME) and display it for your customers.

Activate Workflow: Save and activate the workflow.

## Requirements
A pre-built review filtering webpage. [code](https://github.com/anirudhaeran/Google-Review-Feedback-Form)

An active n8n instance.

Google Sheets API credentials.

A Telegram Bot and its API token.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Telegram Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
