# 📊 Send pre-meeting company news summaries with Google Calendar, NewsAPI, and Gmail

> ⚡ **17 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow automatically checks today's Google Calendar meetings, finds recent news about meeting participants' companies using NewsAPI, formats the results into an email, and sends them to configured recipients before the workday begins.

## How it works
1. Runs every day at 7:00 AM.
2. Fetches all events scheduled for today from Google Calendar.
3. Filters the events to only those whose title starts with “Meeting with” or “Call with,” otherwise ending with no further action.
4. Extracts the company name from the meeting title and uses it to query NewsAPI for recent English articles within the configured age and maximum count.
5. Formats the returned articles into an HTML table suitable for email.
6. Sends the formatted news digest to the configured recipient list using Gmail.

## Setup
1. Add a Google Calendar OAuth credential and select the calendar to read meetings from.
2. Get a NewsAPI key and set it in the workflow’s configuration along with the news age (days) and maximum articles to include.
3. Add a Gmail OAuth credential and set the recipient email addresses (comma-separated) for where the digest should be sent.
4. Ensure your calendar event titles follow the “Meeting with …” or “Call with …” pattern, or update the filter and company-name extraction logic to match your naming convention.

## 🔗 Nodes Used

HTTP Request, Google Calendar, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
