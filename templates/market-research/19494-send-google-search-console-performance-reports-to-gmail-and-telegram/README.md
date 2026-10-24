# 📊 Send Google Search Console performance reports to Gmail and Telegram

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily (or on demand) to pull Google Search Console Discover page performance for a domain, builds an HTML “best posts” report with key metrics and top pages, emails the report via Gmail, and optionally converts the HTML to an image to send to Telegram.

## How it works
1. Runs on a daily 7 AM cron schedule or via a manual trigger.
2. Sets reporting parameters (lookback days plus minimum clicks and impressions) and calculates the start and end dates.
3. Calls the Google Search Console Search Analytics API (Discover, dimension: page) to fetch up to 25,000 page rows for the selected date range.
4. Aggregates total clicks/impressions and average CTR across all pages, filters pages that meet the click/impression thresholds, and sorts qualifying pages by clicks.
5. Generates a responsive HTML report showing key metrics, criteria, and a top-10 table of qualifying pages.
6. Sends the HTML report as the email body using Gmail and, in parallel, renders the same HTML into a PNG image.
7. Posts the report image to a configured Telegram chat with a caption including the period, date range, and headline metrics.

## Setup
1. Add a Google OAuth2 API credential with access to your Google Search Console property and enable the Google Search Console API in your Google Cloud project.
2. Update the Search Console API request URL to use your verified property (replace `sc-domain:exampale.com` with your domain).
3. Add a Gmail OAuth2 credential (with Gmail API enabled) and set the recipient email address in the email step.
4. (Optional) Add a Telegram bot credential, set the target Telegram chat ID, and ensure your n8n environment can run the HTML-to-image conversion (Chromium/Puppeteer for `node-html-to-image`).
5. Adjust the reporting configuration values (days, minClicks, minImpressions) to match your reporting needs.

## Requirements
- **n8n:** A working n8n instance is required to run the workflow.
- **Google Cloud Project:** A Google Cloud project must be created for the required Google APIs.
- **Google Search Console API:** The Google Search Console API must be enabled in Google Cloud Console.
- **Google Search Console Property:** The user's domain must be added and verified in Google Search Console.
- **Google OAuth2 API:** Google OAuth2 credentials must be configured in n8n with the required Client ID and Client Secret.
- **Google Search Console Access:** The Google account connected to n8n must have access to the required Search Console property.
- **Gmail API:** The Gmail API must be enabled in Google Cloud Console for sending the report by email.
- **Gmail OAuth2 Credential:** The Gmail account must be connected to n8n using OAuth2, with the required Gmail sending scope.
- **Recipient Email:** A valid email address must be provided to receive the HTML report.
- **Telegram Bot:** If Telegram reporting is required, a bot must be created using **@BotFather** and connected to n8n using the Bot API token.
- **Telegram Chat ID:** The recipient's Telegram Chat ID must be provided in the Telegram node.
- **HTML-to-Image Node:** If the Telegram image report is required, the required HTML-to-Image/community node must be installed and configured, especially on self-hosted n8n.
- **Optional Telegram Branch:** If the user does not want to install any additional node or tool, the HTML-to-Image and Telegram nodes can simply be deleted or deactivated. The email report will continue to work normally.
- **Domain Configuration:** Replace the example domain in the Google Search Console API URL with the user's actual verified domain.
- **Workflow Dependencies:** The required upstream nodes must provide the expected data fields, dates, HTML report, and image binary data for the downstream nodes to work correctly.

## Customization
- The workflow can be customized according to the user's requirements.
- **Schedule:** Change the trigger time and set the workflow to run at any preferred time.
- **Reporting Period:** Change the number of days using the `days` value.
- **Minimum Clicks:** Change `minClicks` to set the minimum clicks required for a report.
- **Minimum Impressions:** Change `minImpressions` to set the minimum impressions required for a report.
- **Domain:** Replace the Search Console domain with another verified domain.
- **Email Recipient:** Change the email address where the report will be delivered.
- **Telegram Recipient:** Change the Telegram Chat ID to send the report to another user or chat.
- **Report Format:** The report can be received as an HTML email and/or as an image through Telegram.
- **Email Report:** The HTML report content, subject, and report information can be customized according to the user's needs.
- **Telegram Report:** The Telegram caption and image-report content can be customized.
- **Optional Telegram Feature:** The HTML-to-Image and Telegram branch can be disabled or removed if the user only wants the email report.

## Additional info
This workflow helps website owners identify **which blog articles are gaining the most attention** based on Google Search Console performance data.

It shows which articles are:

- Getting more **clicks**
- Receiving more **impressions**
- Attracting more **search traffic**
- Showing signs of becoming **popular or potentially viral**

This information helps the user understand which content is performing well and which articles are gaining increased audience interest, so they can make better content and SEO decisions.

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
