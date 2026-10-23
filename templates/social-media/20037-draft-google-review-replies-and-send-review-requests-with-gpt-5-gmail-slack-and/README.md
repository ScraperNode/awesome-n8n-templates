# 📱 Draft Google review replies and send review requests with GPT-5, Gmail, Slack and Sheets

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
I built this for local service businesses that live on Google reviews. It drafts a reply to each new review in your own voice and holds anything risky for you. After a finished job, it emails the customer a request for an honest review.

## How it works
1. Every hour it checks your Google Business Profile for new reviews on the account and location you pick.
2. It skips reviews that already have a public reply, then reads the reply settings you filled in, such as your sign-off and the star rating that needs a person.
3. OpenAI writes a draft in your house style and flags anything risky, with a reason and a suggested next step for you.
4. My guardrail code holds a draft for you whenever it makes a promise or contains contact details. It also holds drafts that run over the length limit or come from a failed model call. Reviews at or below your star threshold, and anything the model flagged, wait for you too.
5. Every draft and its status (READY, HOLD or POST FAILED) is logged to the Review replies tab of your Google Sheet.
6. If you switched auto-posting on and the draft is READY, it posts the reply to Google. Everything else goes to Slack with the reason, and approving it means you paste the reply into Google yourself. I send a post that Google refuses to Slack as well, marked POST FAILED.
7. When your job system reports a finished job, a second flow checks the opt-out flag, the email address, your sending hours and the days since you last asked. I built it to ask everyone the same way: it emails the customer a request for an honest review, or holds or skips it, and logs the reason in the Review requests tab.

## Setup
1. Connect your Google Business Profile credential and pick your account and location in the review trigger and in the reply step.
2. Add an OpenAI credential, then fill in the reply settings node with your business name and sign-off. Set the star threshold, and leave auto-posting off until you trust the drafts.
3. Connect Slack and choose the channel where held drafts and failed posts should land.
4. Connect Google Sheets, paste your spreadsheet ID, and keep the two tabs named Review replies and Review requests. The starter files in the pack already carry the right columns.
5. Connect Gmail and fill in the request settings: your Google review link, the sender name, the minimum days between requests, your sending hours and the auto-send switch.
6. Point your job system at the job-completed webhook, set the header it must send, and include the customer's name, email, job outcome and reference. Send the last-asked date as well, or the once-a-quarter rule has nothing to check.

## Requirements
- You need a Google Business Profile you manage, an OpenAI API key, Gmail, Google Sheets and Slack, plus a job system or form tool that can call a webhook when a job is done.

## Customization
- Change the reply tone, the star threshold and the length limit in the settings node, and only turn on auto-posting or auto-sending once you trust the drafts it writes.

## Additional info
This is a paid template. The purchase link opens a Stripe checkout, and I email you the workflow with a setup guide and starter sheet files. More detail and a short FAQ live at https://fractionalhq.uk/use-cases/google-review-reply-drafter

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

All nine of my paid n8n templates also come together as one download for $15: https://buy.stripe.com/00w3co8NR6Mq8r0eaV4c80M

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
