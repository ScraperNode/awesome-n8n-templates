# 📱 Send one-time Google review requests by SMS with Twilio

> ⚡ **9 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow receives a “job done” webhook and uses Twilio to send the customer a Google review request by SMS after a configurable delay, respecting quiet hours and preventing repeat requests by checking your Twilio message history.

## How it works
1. Receives a POST webhook containing the customer’s phone number, name, and job details.
2. Validates the input and settings, calculates a send time based on your delay and quiet hours, and immediately responds to the webhook with the scheduled send time or an error reason.
3. If required details are missing (for example an invalid phone number or missing review link), sends an SMS to the owner via Twilio explaining why the request will not be started.
4. Waits until the scheduled send time.
5. Uses the Twilio API to look up your account and fetch recent outbound messages to that customer from your Twilio number within the repeat window.
6. If an earlier text to that customer carried your review link (failed sends don't count), skips sending and texts the owner that it was skipped.
7. If no prior ask is found, sends the review request SMS via Twilio. If Twilio refuses it, the owner gets a text with Twilio's reason; if it goes out, the owner gets a text unless owner updates are turned off.

## Setup
1. Add a Twilio API credential (Account SID/Auth Token) and select it on all Twilio and Twilio HTTP Request steps in the workflow.
2. In “Your settings”, set your Twilio phone number (From), owner cell number (To for updates), time zone, Google review link, and the review message template.
3. Adjust behavior settings as needed (delay minutes, quiet hours, repeat-days window, and whether owner updates are enabled).
4. Activate the workflow, copy the production webhook URL, and configure your field app/form/Zapier (or other system) to POST `{phone, name, job}` to it when a job is completed.

## Requirements
- A Twilio account with a number that can text your customers (in the US that means A2P 10DLC registration or a verified toll-free number)
- Your Google review link, from your Google Business Profile
- An n8n instance that can receive webhooks (Cloud or self-hosted)
- A field app, form, CRM or Zap that can send a POST request when a job is marked done

## Customization
- Change delay_minutes in Your settings to send sooner or later after the job (default 120 minutes)
- Rewrite review_text in Your settings; {name}, {business}, {job} and {link} are filled in for you
- Move quiet_start and quiet_end to match your hours (default 8 PM to 8 AM)
- Change repeat_days to ask repeat customers more or less often (default 90 days)
- Set owner_updates to false to hear only when an ask is skipped or fails

## 🔗 Nodes Used

HTTP Request, Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
