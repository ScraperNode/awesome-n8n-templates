# ⚡ AI-powered calendar & meeting digest with Gmail and GPT-4o/Claude - daily brief

> ⚡ **533 views** · ⚡ [Personal Productivity](../)

## Description

# 🛠 How It Works

The Daily Calendar Brief is an automated n8n workflow designed to prep you each morning with a rich, executive-style email summary of your day. It pulls data from your calendar, email, and external contact sources to deliver a contextualized, prioritized briefing.

1. Daily Trigger

Runs every weekday morning at 7:00 AM using a schedule node.

2. Calendar Parsing

Grabs all Google Calendar events for the day and extracts details like:
	•	Event title, time, and duration
	•	Full attendee list
	•	Meeting description

3. Attendee Intelligence

Filters for external attendees and:
	•	Scrapes recent email threads with them
	•	Uses Hunter and LinkedIn to enrich attendee info with roles, bios, locations, and recent activity

4. Brief Assembly

Combines:
	•	Event metadata
	•	Attendee research
	•	Recent conversations


5. Email Delivery

Renders the Markdown as HTML and sends a polished email to your inbox with:
	•	Meeting timeline & attendees
	•	Key takeaways & extra context
	•	Conflicts & FYIs


# Setup Steps

Prerequisites
	•	n8n instance (self-hosted or cloud)
	•	Google Calendar and Gmail OAuth credentials
	•	OpenRouter key (for GPT-4o or Claude 3.7)

Configuration
	1.	Authorize Credentials
	•	Connect Google Calendar and Gmail nodes with OAuth2
	•	Set up OpenRouter credentials for AI processing
	2.	Set Your Email
Update the Send Email node with your preferred destination address (default is you@yourcompany.com).
	3.	Set Your Domain Filter
In the “Identify External Attendees” node, adjust the filter value yourcompany.com to your actual domain.
	4.	Customize Prompts (Optional)
You can fine-tune tone, formatting, or limits in the two language model nodes:
	•	Research and Develop Brief (attendee context + email summary)
	•	Summarize Schedule (overall Markdown brief formatting)
	5.	Activate Workflow

Enable the workflow and test it manually once to validate your setup. Confirm that the email lands correctly.

## 🔗 Nodes Used

Google Calendar, Gmail, Markdown, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
