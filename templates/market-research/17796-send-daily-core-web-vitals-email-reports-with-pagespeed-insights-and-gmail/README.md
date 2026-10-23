# 📊 Send daily Core Web Vitals email reports with PageSpeed Insights and Gmail

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily at 7 AM, checks a URL’s Core Web Vitals and performance for mobile and desktop using the Google PageSpeed Insights API, then builds a color-coded HTML report and emails it to a recipient via Gmail.

## How it works
1. Runs every day at 7:00 AM on a schedule.
2. Loads the target website URL and recipient email address from a configuration step.
3. Calls the Google PageSpeed Insights API twice to fetch performance data for mobile and desktop.
4. Combines both PageSpeed responses and extracts LCP, INP, CLS, and performance score (using CrUX field data when available and Lighthouse lab data as a fallback).
5. Generates an HTML email report that grades each metric against Google thresholds and includes a link to the full PageSpeed report.
6. Sends the report email through Gmail to the configured recipient.

## Setup
1. Enable the Google PageSpeed Insights API in Google Cloud and create an API key.
2. Create an n8n HTTP Query Auth credential that sends the API key as the `key` query parameter, and select it for both PageSpeed requests.
3. Connect a Gmail OAuth2 credential for sending email.
4. Update the URL to audit and the recipient email address in the configuration step, and adjust the schedule time if needed.

## Requirements
- Google PageSpeed Insights API key (free) saved as an HTTP Query Auth credential with param name key
- Gmail (OAuth2) credential

## Customization
- Config node: set the website URL and the recipient email
- Schedule Trigger: change cadence (default daily 07:00) — hourly, weekly, or custom cron
- Runs mobile + desktop; delete one branch if you only need one
- Thresholds (LCP/INP/CLS/score) follow Google's official limits — editable in the Build Report node
- Swap Gmail for Slack/Telegram if you prefer a different channel

## Additional info
Contact:
Email: salmanmehboob1947@gmail.com
Linkedin: https://www.linkedin.com/in/salman-mehboob-pro/

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
