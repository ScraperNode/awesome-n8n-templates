# 💬 Deliver lead magnets and nurture leads with GPT-6-luna, Gmail, Sheets, and Telegram

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Lead magnets that arrive on time, and follow-ups that stay on the right side of consent. This workflow delivers the best-matched magnet for each [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form request, retries anything that fails to send, nurtures only opted-in leads, and reports the whole funnel every Monday.

*Last updated: September 2026.*

## Quick Overview
This workflow delivers topic-matched lead magnets from an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form, Gmail, gpt-6-luna, Google Sheets, and Telegram while preserving consent and preventing duplicate lead records. It retries delivery, runs a two-step topic-aware nurture sequence only for opted-in leads, classifies replies including unsubscribes, and emails a Monday funnel digest.

## How it works
1. A form request is normalized, validated, and recorded with the requester’s nurture consent preference. Invalid requests are logged to the Invalid tab and alerted in Telegram.
2. The workflow looks up the normalized email in the Leads tab. Returning leads are updated and re-delivered; new leads get one pending record, avoiding duplicate rows.
3. gpt-6-luna selects the most relevant magnet and drafts the delivery email. Gmail retries send failures; confirmed sends update delivery status, while final failures are logged to Sends and alerted in Telegram.
4. Only leads with nurture_opt_in receive two AI-written, topic-aware nurture emails. Step 1 is logged, the workflow waits four days, then sends and logs step 2 with sequence_step and status.
5. Gmail replies are matched to a lead and classified by gpt-6-luna as hot, question, unsubscribe, neutral, or out of office. Lead status is updated, unsubscribe replies are marked unsubscribed, and interesting replies are surfaced in Telegram.
6. Every Monday, the workflow reads Leads and Sends, calculates last-7-day leads, consent rate, delivery failures, sequence completion, reply categories, and top magnets, then uses AI to write and email the funnel digest.

## Setup
1. Connect credentials for OpenAI Chat Model, Gmail (including the reply trigger), Google Sheets, and Telegram.
2. Replace every Google Sheets document ID, Telegram chat ID, and the weekly digest recipient. Create the Leads, Sends, and Invalid tabs with columns used by the nodes, including email, nurture_opt_in, delivery_status, sequence_step, status, and reply fields.
3. Replace the magnet catalog URLs and sender language in the delivery and nurture AI prompts. Adjust the form’s consent wording to match your privacy policy.
4. Test a new opted-in lead, a no-consent lead, a returning email, a forced Gmail failure, an unsubscribe reply, a question reply, and the Monday digest before activating.

### Quick Answers
**Who gets nurture emails?**
Only leads with nurture_opt_in. They receive two AI-written, topic-aware nurture emails: step 1 is logged, the workflow waits four days, then step 2 is sent and logged with its sequence step and status.

**How are returning leads handled?**
The normalized email is looked up in the Leads tab. Returning leads are updated and re-delivered, while a new lead gets one pending record instead of a duplicate row.

**What happens when a magnet email does not send?**
Gmail retries the send, a confirmed send updates the delivery status, and a final failure is logged to Sends and alerted in Telegram.

**How are replies handled?**
Gmail replies are matched to a lead and classified by gpt-6-luna as hot, question, unsubscribe, neutral, or out of office. Lead status is updated, unsubscribes are marked, and interesting replies are surfaced in Telegram.

**What is in the Monday digest?**
Last-7-day leads, consent rate, delivery failures, sequence completion, reply categories, and top magnets, written up by AI.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Gmail Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
