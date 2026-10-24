# 📱 Send daily product newsletters via Gmail and track events in Google Sheets

> ⚡ **25 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow sends a daily product newsletter from Google Sheets via Gmail and tracks opens, clicks, and unsubscribes through an n8n webhook, logging all events back to Google Sheets.

## How it works
1. Runs every day at 08:00 (configured in the Schedule Trigger).
2. Reads products from Google Sheets and keeps only rows whose send_date matches today.
3. If there are products to send, builds an HTML newsletter with a per-campaign newsletter ID, tracked click URLs, a tracking pixel, and an unsubscribe link, and logs the newsletter contents to Google Sheets.
4. Reads recipients and the unsubscribe list from Google Sheets, removes unsubscribed addresses, and personalizes the newsletter HTML for each recipient by inserting their email and the campaign ID into tracking links.
5. Sends each personalized email via Gmail and appends a “sent” event to the Google Sheets tracking log.
6. Receives open, click, and unsubscribe requests on a webhook endpoint, routes by event type, and logs the event to Google Sheets.
7. For clicks and unsubscribes, filters likely bot/duplicate requests (user-agent checks and recent-event deduping), then redirects to the product URL or returns an unsubscribe confirmation page.

## Setup
1. Create/copy a Google Sheets file with the required tabs and headers (newsletter_products, newsletter_recipients, newsletter_contents, newsletter_tracking, newsletter_unsubscribed) and paste its Sheet ID into both configuration code steps.
2. Add Google Sheets credentials to all Google Sheets steps and a Gmail credential to the Gmail send step.
3. Activate the workflow, copy the Tracker Webhook production URL, and paste it as trackerUrl in the sender configuration so links/pixel point to your instance.
4. Populate newsletter_products with product rows (including send_date), add recipients to newsletter_recipients, and verify the tracker webhook path (newsletter-tracker) is reachable from your email clients.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
