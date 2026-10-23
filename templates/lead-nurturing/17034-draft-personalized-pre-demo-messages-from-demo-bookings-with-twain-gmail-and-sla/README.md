# 💬 Draft personalized pre-demo messages from demo bookings with Twain, Gmail, and Slack

> ⚡ **6 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow triggers on new demo bookings (webhooks or Google Calendar), uses Twain to research the prospect and generate a personalized pre-demo sequence plus an AE brief, drafts the email in Gmail, optionally queues LinkedIn steps in HeyReach, and posts everything to Slack for review.

## How it works
1. Triggers when a demo booking is received via a webhook (generic, Chili Piper, or HubSpot) or when a new Google Calendar event is created.
2. Normalizes the incoming booking payload into a consistent format, filters to demo meetings only, and de-duplicates repeat bookings across executions.
3. If no LinkedIn URL is provided but an email exists, looks up a LinkedIn profile URL using Findymail and merges it back into the contact.
4. If a usable work email or LinkedIn URL is available, calls the Twain API to generate contact research, an AE pre-demo brief, and a multi-step outbound sequence; otherwise it posts a “skipped” notice to Slack.
5. Builds an email-ready draft (subject and HTML body) plus previews for email and LinkedIn steps from the Twain output.
6. If a work email exists, creates a Gmail draft and posts the brief and draft preview to Slack (or posts a “no draft created” message if Gmail fails); if no work email exists, posts a LinkedIn-only brief to Slack.
7. If LinkedIn steps are configured, adds the lead to a HeyReach campaign with the LinkedIn message stored as a custom field and posts a confirmation to Slack.

## Setup
1. Create a Twain workspace and pre-demo campaign, then add your Twain API key (HTTP Header Auth) and set the Twain `campaign_id` in the Demo Settings.
2. Connect your Slack bot token credential and set the target Slack channel name in Demo Settings.
3. Connect your Gmail OAuth2 credential if you want the workflow to create email drafts.
4. Choose and configure a booking source: enable the relevant webhook trigger(s) and copy the webhook URL into your booking tool, or connect Google Calendar OAuth2 for the calendar trigger.
5. If you want automatic LinkedIn resolution, add Findymail API credentials (Bearer auth) and ensure the provider returns a LinkedIn URL in a field mapped by the resolver step.
6. If you want LinkedIn steps queued, add your HeyReach API key and set `heyreach_campaign_id`, and adjust `email_steps`/`linkedin_steps` in Demo Settings to control which sequence steps go to each channel.

## Requirements
- Predefined campaign in Twain

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Calendly Trigger, Gmail, Google Calendar Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
