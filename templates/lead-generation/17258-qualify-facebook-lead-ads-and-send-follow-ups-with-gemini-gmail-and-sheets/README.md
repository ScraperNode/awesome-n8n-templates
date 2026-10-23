# 🎣 Qualify Facebook lead ads and send follow-ups with Gemini, Gmail, and Sheets

> ⚡ **225 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Turn every Facebook ad lead into a qualified, followed-up prospect within seconds. AI scores their intent, sends a personalized email tailored to their score, logs campaign intelligence to Google Sheets, and alerts you instantly to hot leads before they consider a competitor.

## How it works
1. Receives a lead submission via an n8n webhook (or the disabled Facebook Lead Ads trigger).
2. Extracts and normalizes contact details, qualification answers, and Facebook campaign metadata into a consistent lead record.
3. Sends the lead details to Google Gemini to classify the lead as Hot/Warm/Cold and generate a personalized follow-up email.
4. Parses and formats the AI output, falling back to a default email draft if the response cannot be parsed.
5. If an email address is present, sends the AI-written follow-up email to the lead using Gmail.
6. Appends the lead, AI score, reasoning, and campaign fields to a Google Sheets log.
7. If the lead is scored Hot, notifies the agent via Gmail and Slack, then updates the Google Sheets row to mark the agent as notified.

## Setup
1. Credentials needed: Add credentials for Google Gemini (PaLM/Gemini API), Gmail OAuth2, Google Sheets OAuth2, Slack OAuth2 (optional), and WhatsApp Business Cloud API + Phone Number ID (optional).
2. Google Sheet setup: Copy the Facebook Leads Database sheet template and link its ID to both the Append and Update Sheets nodes. The sheet requires these columns in order: recordId, Timestamp, Lead Name, Email, Phone, Intent, Budget, Timeline, Situation, Lead Score, Score Reasoning, Email Subject, Agent Notified, Facebook Lead ID, Form ID, Ad ID, Campaign ID.
3. Facebook Lead Ad form setup: Create a Facebook Lead Ad form with these fields: Full Name (pre-filled), Email Address (pre-filled), Phone Number (pre-filled), and four custom short-answer questions covering intent, budget, timeline, and situation. After creating the form, fire one test lead via the Meta Lead Ads Testing Tool and inspect the raw webhook payload in n8n to confirm the exact field names Facebook generates — update the Extract node field mappings to match.
4. Replace the placeholder agent email address in the hot-lead Gmail notification and set the Slack channel (optional) plus Slack credentials.
5. If using the webhook trigger, copy the webhook URL into your lead source (e.g., Zapier/Make/Facebook forwarding) and send a test payload that matches your Facebook form field names.
6. If using WhatsApp (optional), add a WhatsApp Business Cloud credential and replace YOUR_PHONE_NUMBER_ID with your Meta phone number ID.
7. If using Slack, set the correct channel name in the Notify Agent via Slack node and confirm your Slack bot has been invited to that channel.
8. Choose your trigger: The Webhook trigger is active by default and works immediately. To use the Facebook Lead Ads trigger directly, enable that node, disable the Webhook node, and configure your Meta Developer app with a permanent public n8n URL.

## Customization
- Edit the AI scoring rules in the Qualify & Draft Follow-Up node to adjust what qualifies as Hot, Warm, or Cold for your market.
- Edit the email tone per score tier in the system prompt — change language, formality, or translate to another language.
- Add more qualification fields by extending your Facebook form and mapping the new field names in the Extract & Normalize Lead Details Code node.
- Enable the Facebook Lead Ads trigger (Option B) for direct integration without a webhook forwarder, which requires a permanent public n8n URL and Meta Developer app configuration.
- Add Warm lead agent notifications by duplicating the Hot lead notification branch and changing the IF condition to check for Warm score.
- Extend the Google Sheet with additional columns (e.g., follow-up date, assigned agent) without affecting the workflow logic.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, WhatsApp Business Cloud, Facebook Lead Ads Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
