# 🎣 Log Meta lead ads to Google Sheets with Slack alerts and repeat checks

> ⚡ **13 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
I log every Facebook and Instagram lead form submission to a Google Sheet the moment it arrives, tidy the name, email and phone, mark test leads and repeat leads, and ping Slack for each genuinely new one so someone rings while the lead is still warm.

## How it works
1. The Facebook Lead Ads trigger fires when someone submits your form.
2. I read the answers whether Simplify Output is on or off, join first and last names, lowercase the email and put the phone into international format so it dials from a mobile and matches later.
3. Leads from Meta's Lead Ads Testing Tool are marked `test` and never page anyone.
4. I compare each lead with your sheet. A lead id I have already logged is a webhook redelivery, so I drop it. The same email or phone inside your window is marked `repeat`.
5. I append one row per lead, and Slack gets an alert for each new one with the phone number near the top.

## Setup
1. Connect Facebook Lead Ads, Google Sheets and Slack, then pick your page and form in the trigger.
2. Make a Google Sheet with a `Leads` tab and these headers in row 1: received_at, created_time, status, full_name, email, phone, form, ad, answers, lead_id, previous_lead_at.
3. Paste the sheet URL and Slack channel into Settings. Outside the UK, change defaultCountryCode (it is 44).
4. Send one lead from Meta's Lead Ads Testing Tool and check it arrives as `test` with no Slack message.

## Requirements
- A Facebook page with a lead form, a Google account and a Slack workspace.

## Customization
- Set alertOnRepeats to true if a returning lead matters as much as a new one. Swap Slack for Telegram or Gmail if your team lives there.

## Additional info
Built by Fractional HQ. If you want each lead scored by AI and the hot ones pushed to HubSpot and WhatsApp, that is my paid template at https://n8n.io/workflows/19169. If you want it wired into your own forms and CRM, send me a brief at https://fractionalhq.uk/brief

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

## 🔗 Nodes Used

Google Sheets, Slack, Facebook Lead Ads Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
