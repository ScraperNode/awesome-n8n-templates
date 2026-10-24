# 📱 Collect and moderate Shopify photo reviews with GPT-4o, Judge.me, and WhatsApp

> ⚡ **3 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow pulls recently delivered Shopify orders on a daily schedule, sends WhatsApp and Gmail review requests with an n8n form link, moderates submitted text and photos with OpenAI, publishes approved reviews to Judge.me, and saves ad-consented UGC to Google Drive with Slack notifications.

## How it works
1. Runs every day at 11 AM (cron) and sets timing rules such as when to ask, when to remind, and the daily send limit.
2. Queries Shopify for recently fulfilled orders, cross-checks a Google Sheets log to avoid duplicate requests, and builds a queue of first-time asks and eligible reminders.
3. Sends a WhatsApp message and a Gmail email containing a unique review-form link, then logs each request (or marks reminders) in the Google Sheets “Review Requests” tab.
4. Receives the customer’s n8n form submission (rating, text, optional photos, and ad consent), validates the request token against Google Sheets, and blocks reused or invalid links.
5. Sends the review text and uploaded images to OpenAI (GPT-4o) to detect issues like screenshots/stock images, personal info, profanity, and spam, and then selects which photos are approved and which are ad-worthy.
6. Uploads approved review photos to Google Drive and makes them publicly accessible so they can be referenced as image URLs, and copies ad-worthy photos to a separate Google Drive UGC folder while logging them to the “UGC Library” sheet and alerting Slack.
7. Posts publishable reviews to Judge.me (or flags them in Slack for manual moderation), updates the request status in Google Sheets, and sends either a WhatsApp thank-you for 4–5 star reviews or an AI-written recovery reply plus a Slack alert for 1–3 star reviews.

## Setup
1. Create/collect credentials for Shopify Admin API (X-Shopify-Access-Token header auth), Judge.me API token (api_token query auth), OpenAI, Google Sheets, Google Drive, Gmail, Slack, and WhatsApp Business Cloud.
2. In Google Sheets, create tabs named “Review Requests” and “UGC Library”, then paste your spreadsheet ID anywhere it shows REPLACE_WITH_GOOGLE_SHEET_ID.
3. Create two Google Drive folders (review photos and ads UGC) and replace REPLACE_WITH_REVIEW_PHOTOS_FOLDER_ID and REPLACE_WITH_ADS_UGC_FOLDER_ID.
4. Replace the WhatsApp phoneNumberId and Slack channel ID placeholders, and update the shop domain, store name, and form URL (your n8n domain/path) in the configuration step.
5. Ensure Shopify orders include delivered timestamps (fulfillments.deliveredAt) and optionally tag orders with no-review to exclude them, then run a test execution and submit a test form response to confirm publishing and logging.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
