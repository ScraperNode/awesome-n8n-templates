# 📊 Monitor Core Web Vitals at scale with PageSpeed API and Google Sheets

> ⚡ **44 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow audits a list of URLs from a CSV upload or an XML sitemap using the Google PageSpeed Insights API, writes Lighthouse and Core Web Vitals metrics into a new Google Sheets report, and emails a completion summary via Gmail.

## How it works
1. Starts either on a schedule, via manual execution, or through an n8n form where you upload a CSV of URLs.
2. Creates a new Google Sheets spreadsheet for the run and writes the report column headers.
3. Builds audit metadata (start time, counters, and the final report URL) and then extracts URLs from the uploaded CSV or fetches and parses the configured XML sitemap.
4. Loops through the URLs in batches and calls the Google PageSpeed Insights API for each URL with the chosen device strategy.
5. Appends successful Lighthouse and CrUX/Core Web Vitals metrics (plus pass/fail results against thresholds) to the Google Sheet, or logs the API error message and status for failed URLs.
6. Waits briefly between batches to throttle requests, then records the finish time and sends a Gmail email with summary counts and a link to the spreadsheet.

## Setup
1. Add a Google PageSpeed Insights (PageSpeed Online API) key and paste it into the Config values.
2. Connect Google Sheets OAuth credentials and select the Google account where the workflow can create and edit spreadsheets.
3. Connect Gmail OAuth credentials and set the recipient address in the email step.
4. Provide an XML sitemap URL in the Config values (required for scheduled/manual runs), or prepare a one-column, headerless CSV of URLs for form uploads.
5. Optionally adjust the device strategy (desktop/mobile), UTM campaign value, pass/fail thresholds, and the wait time between requests to fit your audit needs.

## Requirements
- Google Sheets OAuth credentials
- Gmail OAuth credentials
- PageSpeed API key (free in Google Cloud)

## Customization
- Use the 'Schedule Audit' node to run audit regularly at specified intervals for a fully automated reporting workflow
- Use the 'Config' node to pick the target device (desktop/mobile)
- Adjust the pass thresholds for Core Web Vitals/Lighthouse performance metrics if required (defaults are taken directly from official documentation, but may change in the future)
- Adjust batch size/wait time between each URL to avoid API throttling or slowing down your website (default: 1 second)
- Add additional notification options at the end of the audit, such as Slack, Telegram, or WhatsApp messages

## Additional info
Ideal for Technical SEO Managers, Website Admins and other SEO professionals who want to automate auditing and reporting of Core Web Vitals (both lab and CrUX field data), especially on large websites. This high-level report focuses on key metrics used in Google Core Web Vitals assessment and Lighthouse performance data.

Full report includes the following data for each URL:

Lighthouse performance metrics:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)
- Speed Index (SI)
- Overall Lighthouse performance score

Core Web Vitals metrics (if available):
- Largest Contentful Paint (LCP) 
- Interaction to Next Paint (INP)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Time to First Byte (TTFB)

Other useful metrics:
- HTTP status code
- Download size (KiB)
- DOM size
- Audit timestamp
- Warnings/errors

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
