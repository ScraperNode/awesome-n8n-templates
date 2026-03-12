# ⚡ Google Calendar automated notifications with email, SMS & analytics dashboard

> ⚡ **187 views** · ⚡ [Personal Productivity](../)

## Description

Automatically turn your Google Calendar into a fully-automated notification system with email alerts, SMS reminders, and a live performance dashboard - all powered by n8n.

This automation helps you never miss an event, while giving you clear visibility into what notifications were sent, when, and how reliably they ran.

**What This Automation Does**

This solution is built as 4 connected workflows that run on a schedule and work together:

**1. Daily Email Summary (Morning)**

Every morning, the workflow:

- Reads today’s events from Google Calendar

- Formats them into a clean email

- Sends a daily schedule summary via Mailchimp or SendGrid

**2. Daily SMS Summary**

Shortly after, it:

Sends a concise SMS overview of today’s meetings using Twilio

**3. 15-Minute Event Reminders**

Before each event:

- Sends an individual SMS reminder

- Skips all-day events automatically

**4. Weekly Schedule Preview**

Every Sunday:

- Sends a week-ahead summary so you can plan in advance

**Live Reporting & Dashboard**

All workflow activity is logged automatically into Google Sheets, which powers a real-time analytics dashboard showing:

- Number of notifications sent

- Success vs failure rates

- Daily and weekly execution stats

- Visual charts powered by Chart.js

- No manual tracking needed, everything updates automatically.

**How the Workflow Is Structured**

The automation is grouped into 3 clear sections:

**Section 1: Calendar Data Collection**

- Pulls events from Google Calendar

- Filters relevant meetings

- Prepares clean event data

**Section 2: Notifications & Messaging**

- Formats emails and SMS messages

- Sends reminders and summaries

- Handles scheduling logic

**Section 3: Logging & Reporting**

- Saves every execution to Google Sheets

- Updates daily stats automatically

- Feeds the live dashboard

**SUPPORT & FEEDBACK**
Questions or issues? Connect with me on [LinkedIn](https://www.linkedin.com/in/gilbert-onyebuchi/)
Want to see it in action? Try the live report demo: [Click here](https://sites.google.com/view/template-n8n/test-products/calendar-analytics)

## 🔗 Nodes Used

Google Sheets, Twilio, Mailchimp, Google Calendar, SendGrid, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
