# 🎣 Qualify Meta Lead Ads with OpenAI and route hot leads to HubSpot and WhatsApp

> ⚡ **44 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
I built this to score every Meta Lead Ads submission the minute it lands. OpenAI reads the answers and gives a fit score. HubSpot keeps the contact with that verdict. Slack tells your team which ones to call first. The WhatsApp reply ships switched off until you turn it on.

## How it works
1. A new Meta Lead Ads submission fires the trigger, so nobody has to export a CSV from Ads Manager to see who came in.
2. A Code node flattens the form answers into a name, an email and a phone in E.164 format, whatever fields your form happens to have.
3. OpenAI reads your business description next to the answers. It returns intent, urgency, a fit score out of 100 and a suggested first reply. If the call fails the lead is marked UNSCORED instead of dropped.
4. Your thresholds in Lead Settings turn that score into HOT, WARM or COLD, and you can move the line whenever your calendar fills up.
5. The contact is upserted in HubSpot with the score, the summary and the verdict on custom properties.
6. A HOT lead with a usable phone number gets the approved WhatsApp template, but only when sendWhatsAppAutomatically is true. It ships false, so nothing reaches a stranger until you decide it should.
7. Slack gets the alert with the summary and the HubSpot link. Google Sheets gets the row, and a failed write is announced in Slack rather than swallowed.

## Setup
1. Connect the Meta Lead Ads trigger to your Meta account, then pick the page and the form you want to watch from the dropdowns.
2. Add an OpenAI credential on the chat model node, the only model node in the workflow, and leave the rest of it alone.
3. Add your HubSpot app token. Create three contact properties: lead_fit_score, lead_summary and lead_verdict.
4. Add Slack, set the target channel in Lead Settings, and check the bot is actually a member of that channel before the first run.
5. Add Google Sheets. Make a Leads tab whose headers match the mapped columns, then put the sheet ID and tab name in Lead Settings.
6. WhatsApp is optional. Add the Business Cloud credential, your phone number ID and the approved template in Lead Settings. I would flip sendWhatsAppAutomatically to true only once you have read a few suggested replies in Slack and trust what the model writes.

## Requirements
- You need a Meta app with lead retrieval access, an OpenAI API key, a HubSpot account, a Slack bot in the target channel and a Google Sheet. I made WhatsApp Business Cloud optional, so add it only if you want the automatic reply to hot leads switched on.

## Customization
- I left the hot line in Lead Settings so you can move it whenever the calendar fills up. Swap the WhatsApp node for SMS or email if your buyers do not use it, or replace the sheet with an n8n Data Table if you would rather keep the log inside n8n.

## Additional info
I sell this workflow through a Stripe checkout, which is where the purchase link goes. Once you have paid, the download link arrives by email, and the zip holds the workflow, a setup guide and a README.

My use-case page covers what loses you the lead, the parts that break and what it costs to run: https://fractionalhq.uk/use-cases/meta-lead-scoring

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

All nine of my paid n8n templates also come together as one download for $15: https://buy.stripe.com/00w3co8NR6Mq8r0eaV4c80M

## 🔗 Nodes Used

Google Sheets, Slack, HubSpot, WhatsApp Business Cloud, OpenAI Chat Model, Facebook Lead Ads Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
