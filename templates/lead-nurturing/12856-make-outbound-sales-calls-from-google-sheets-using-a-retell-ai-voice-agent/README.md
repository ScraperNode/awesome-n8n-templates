# 💬 Make outbound sales calls from Google Sheets using a Retell AI voice agent

> ⚡ **474 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This n8n workflow automates outbound phone calls to new leads using [Retell AI](https://dashboard.retellai.com/?ref=retell-n8n), with built-in timezone detection to ensure you're only calling during business hours.

Use cases include appointment setting, lead qualification, follow-up surveys, payment reminders, and sales outreach—anywhere you need to scale phone conversations without scaling headcount.

## Good to know

- You'll need a Retell AI phone number and configured voice agent before using this workflow.
- Retell AI offers $10 free credit when you sign up (~73 minutes of calls). [Create your account here](https://dashboard.retellai.com/?ref=retell-n8n).
- The timezone logic covers common country codes (UK, US, EU, Australia, India, UAE, Singapore, Japan). You can extend this in the Code node.

## How it works

- A new row in Google Sheets triggers the workflow (you can swap this for a webhook, form, or CRM trigger).
- The phone number is sanitised—stripping spaces, dashes, and brackets so it's in the correct format for dialling.
- The lead's timezone is determined from their country code, and the workflow checks whether it's between 8am-5pm local time. If not, it waits and retries.
- Retell AI places the outbound call using your configured voice agent.
- The workflow polls Retell's API until the call ends, then retrieves the transcript. You can replace this with [a Retell webhook](https://docs.retellai.com/features/webhook-overview) if you'd rather.
- The Google Sheet is updated to mark the lead as "Called", as well as entering the call summary, transcript, call sentiment, and other useful details from Retell's call logs.

## Requirements

- Retell AI account with a phone number and voice agent
- Google Sheets with columns: `Phone Number`, `Name`, `Status`

## Customising this workflow

- **Change the trigger**: Replace Google Sheets with a webhook, n8n form, or CRM trigger (HubSpot, Pipedrive, etc.)
- **Adjust calling hours**: Modify the IF node to change the 8am-5pm window
- **Expand timezone coverage**: Add more country codes to the mapping in the "Get lead's timezone" Code node
- **Add your own AI analysis**: We currently use Retell AI's default call summary - but you could add an agent that extracts different insights (e.g., buying signals, objections)
- **Route the output elsewhere**: Send results to Slack, a CRM, email, or Airtable instead of updating Google Sheets

---

*Built by Marcus Taylor ([@intellagents](https://youtube.com/@intellagentshq) / [voiceai.guide](https://voiceai.guide))*

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
