# 💬 Draft personalized welcome emails for new signups with Twain, Gmail, and Slack

> ⚡ **41 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives new signup events, enriches each contact with Twain (and optionally a LinkedIn lookup), drafts a personalized welcome email in Gmail, and posts review-ready previews to Slack, with optional LinkedIn-step handoff to HeyReach.

## How it works
1. Receives a new signup via a POST webhook secured with header authentication (with optional disabled schedule-based backfills from Google BigQuery or Google Firestore).
2. Normalizes the signup fields (email, name, UID, timestamps, LinkedIn URL) and de-duplicates signups by UID across workflow executions.
3. If the signup has no LinkedIn URL but does have an email, looks up a LinkedIn profile URL via Findymail (or other disabled provider alternatives) and merges the resolved profile back into the contact.
4. If the contact has a usable work email or LinkedIn URL, calls the Twain Generate Sequence API to research the person and generate a personalized welcome sequence, otherwise posts a “skipped” notice to Slack.
5. Builds a formatted draft payload and previews (email steps vs LinkedIn steps) from the Twain response, including any warning flags and a link back to the lead in Twain.
6. If a work email is available, creates a Gmail draft and posts a Slack message with the draft preview (or posts a Slack fallback if the draft cannot be created), and if there is no work email, posts the LinkedIn welcome text to Slack for manual sending.
7. If LinkedIn steps are configured, optionally pushes the LinkedIn message to a HeyReach campaign (disabled by default) and posts a Slack update confirming whether it was queued.

## Setup
1. Create a Twain welcome campaign, copy its campaign_id into the workflow’s signup normalization step, and add a Twain API key using HTTP Header Auth with header name `X-Api-Key`.
2. Connect your Slack OAuth credentials and set the target Slack channel name in the channel settings.
3. Connect your Gmail OAuth2 credentials for the mailbox where drafts should be created.
4. Configure the webhook header authentication secret and send signups to the webhook URL with fields like `uid`, `email`, `displayName`, `linkedin_url`, and `signup_ts`.
5. (Optional) Add a LinkedIn lookup provider credential (Findymail bearer token, or enable Apollo/People Data Labs/Proxycurl nodes) to resolve missing LinkedIn URLs.
6. (Optional) Enable and configure HeyReach (API key credential and campaign ID) and set `email_steps`/`linkedin_steps` routing to control which sequence steps become email drafts vs LinkedIn messages.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, Google Cloud Firestore, Google BigQuery

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
