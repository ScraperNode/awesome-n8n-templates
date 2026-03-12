# 💬 Run an AI SDR sales pipeline with OpenAI, Google Sheets, Gmail and Calendar

> ⚡ **540 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# This n8n template is a complete, automated sales operating system. It acts as an AI-powered sales development representative (SDR) that moves leads into a CRM, sends highly personalized follow-up sequences, tracks calendar bookings, and automatically handles meeting no-shows.

Instead of manually tracking who needs to be emailed next or cross-referencing your calendar with your spreadsheet, this workflow handles the entire outreach lifecycle in the background.

## How it works

This template is divided into four autonomous processes:

**1. The CRM Agent:** A scheduled trigger runs daily to pull fresh leads from a temporary "Lead List" Google Sheet, adds them to your master CRM Sheet, formats the data, and then resets the temporary list so it's ready for the next batch.

**2. The Follow-Up Agent:** A scheduled trigger checks your CRM for active leads who haven't booked a call yet and haven't been emailed in the last 48 hours. Using an OpenAI language model, it customizes one of three sequential follow-up templates based on the prospect's name, role, company, and industry. It sends the email via Gmail and automatically logs 
the follow-up count and date in your CRM.

**3. The Concierge Agent:** Whenever a new event is created in Google Calendar, this flow intercepts it. If it matches your criteria, it finds the attendee's email in your CRM and updates their status to indicate a call is scheduled—instantly pulling them out of the automated follow-up sequence.

**4. The No-Show Agent:** Every 6 hours, a trigger checks your CRM for anyone explicitly marked as a "No Show." It sends them a polite, automated email via Gmail offering to reschedule and updates their CRM status so they aren't emailed twice.

## How to use

1. Duplicate the required Google Sheets structure (a basic Lead List and a CRM with columns for contact info, sequence tracking, and call statuses).

2. Authenticate your Google Sheets, Google Calendar, and Gmail accounts within n8n.

3. Update the Google Calendar trigger to point to your specific booking calendar.

4. Open the AI LLM Chain nodes to customize the email copy, replacing the placeholder calendar links and my sign-off with your own details.

5. Activate the workflow and let your automated sales pipeline run.

## What you get

* Automated data entry from lead list to CRM
* 3-step, AI-personalized email sequence
* Automatic sequence halting when a prospect books a call
* Automated rescheduling emails for missed meetings
* A completely self-updating Google Sheets CRM

## Requirements

* Google Sheets access
* Gmail account
* Google Calendar account
* OpenAI API credentials for email personalization

## Need help?

Ask in the [n8n Forum](https://community.n8n.io/) or shoot me a DM on [LinkedIn](http://linkedin.com/in/vincentthenguyen/).

Happy automating 🚀

## 🔗 Nodes Used

Google Sheets, Gmail, Google Calendar Trigger, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
