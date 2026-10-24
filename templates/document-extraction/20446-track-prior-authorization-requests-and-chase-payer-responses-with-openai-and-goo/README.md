# 🔬 Track prior authorization requests and chase payer responses with OpenAI and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Prior authorization requests rarely fail loudly. They sit at the payer while the procedure date gets closer. This workflow logs every request as it leaves the clinic, has gpt-6-luna score packet completeness and name the missing documents, chases the payer for an answer, and drafts the appeal on a denial. Intake runs on an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form, payer answers arrive on a webhook, and a daily sweep emails the chase list.

*Last updated: October 2026.*

## Quick Overview
Requests are logged on a hosted form, validated, and passed to gpt-6-luna for a packet completeness score, the missing documents and a payer status message. Each request lands in the "PA Tracker" tab in Google Sheets, the requester gets a confirmation email with the next follow up date, and expedited requests raise a Telegram alert. Payer responses (approved, denied or pended) arrive on a webhook and update the matched row, and a denial triggers an AI appeal draft plus a Telegram alert. A daily 08:00 sweep emails a chase brief for every request whose follow up date has passed.

## How it works
1. "New PA Request Form" collects patient reference, payer, procedure, CPT code, ordering provider, urgency, date sent to payer, clinical notes summary and requester email.
2. "Normalize PA Request" creates the pa_id (PA-yyyyMMdd-HHmmss-####) and the received_at timestamp, then "Validate PA Request" requires patient reference, payer, CPT code and a well formed requester email; misses go to the "Errors" tab and an email to the coordinator.
3. "AI Review PA Packet" has gpt-6-luna judge the paperwork only, returning completeness_score, missing_docs, risk_note, follow_up_days and a payer_message.
4. "Build PA Record" trims the clinical summary to 2500 characters and sets next_follow_up_date to today plus follow_up_days: 1 for expedited, 3 otherwise, capped between 1 and 14.
5. "Log PA To Tracker" appends the row as submitted, and "Email Intake Confirmation" sends the requester the pa_id, follow up date, completeness score and missing documents.
6. "If Expedited Request" raises a Telegram alert naming the pa_id, payer, procedure, the 72 hour decision window and the missing documents.
7. "Payer Response Webhook" (path prior-auth-response) reads the tracker and "Match Response To Request" finds the row with the same pa_id, carrying decision, reason and decision_date; an unmatched response goes to "Errors" and an email asks the coordinator to check the id rather than guess.
8. "If Denied" sends denials to "AI Draft Appeal Summary" for a denial_category, an appeal_subject, an appeal_body of 200 words or fewer, the attachments and a next_step.
9. "Email Appeal To Payer" sends the appeal to the payer appeals address when supplied, marks the row denied and flags the next step on Telegram; other decisions email the requester and update the row.
10. "Daily Chase Sweep" runs at 08:00 and keeps submitted, pending or pended rows whose next_follow_up_date is today or earlier; "AI Write Chase Brief" turns them into a digest, a top_action and a count by email and Telegram.

## Setup
1. Create a Google Sheets file with a tab named "PA Tracker" and a tab named "Errors", with columns matching the fields written by the Google Sheets nodes, including pa_id, payer, procedure_name, cpt_code, urgency, submitted_date, status, next_follow_up_date, completeness_score, missing_docs, payer_decision, decision_reason and decision_at.
2. Add credentials for Google Sheets OAuth2, Gmail OAuth2 and Telegram, plus an [OI] chat model credential, and connect that model to the three agent nodes.
3. Set the coordinator email in "Normalize PA Request" and the chase brief recipient in "Format Chase Brief".
4. Publish the form, share its URL with the intake team, and keep the clinical notes summary free of patient identifiers as the field placeholder asks.
5. Point your payer answer process at the webhook path prior-auth-response, posting pa_id, decision, reason and decision_date, plus payer_appeal_email if payers accept email appeals.
6. Set the Telegram chat id in the three Telegram nodes, and move the 08:00 cron to your team's start time before activating the workflow.

### Quick Answers
**What does gpt-6-luna actually do here?**
Three jobs: on intake it scores packet completeness, names the missing documents and drafts a payer status message; on a denial it writes the appeal subject, letter and attachments; on the sweep it briefs the overdue lines with a count and one top action.

**What happens when the packet is incomplete?**
The request is still logged. The completeness score, missing document list and risk note land in the tracker row and the confirmation email, so the team can collect the paperwork while the payer clock runs.

**How does a denial turn into an appeal?**
The webhook carries the decision, the match step finds the tracked request, and gpt-6-luna drafts the appeal from the denial reason and the request details. The appeal is emailed and Telegram flags the next step.

**What happens if a payer response does not match anything?**
It is written to the "Errors" tab with the pa_id and the decision, and the coordinator is emailed to check the id or log the request if it was never captured.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
