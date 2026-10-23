# 🎫 Triage Typeform survey feedback with GPT-4o-mini, Slack, Gmail, and Sheets

> ⚡ **7 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow triggers on new Typeform survey responses, uses OpenAI GPT-4o-mini to classify sentiment and draft reply emails, routes negative feedback through a Slack human-approval loop with revisions, sends emails via Gmail, and logs outcomes to a Google Sheets CRM.

## How it works
1. Triggers when a new Typeform survey response is submitted.
2. Extracts the respondent’s name, email, rating, and free-text feedback and sends it to OpenAI GPT-4o-mini to classify the response as positive or negative.
3. If the response is negative, OpenAI GPT-4o-mini drafts an empathetic follow-up email, posts a Slack alert to the team, and sends the draft to a Slack review channel that waits for a reply.
4. If the reviewer replies with “approved”, the workflow sends the approved draft to the respondent via Gmail and appends a “Sent” record to Google Sheets.
5. If the reviewer requests changes, OpenAI GPT-4o-mini revises the email based on the Slack feedback and the workflow loops back to Slack for another review.
6. If the response is not negative, OpenAI GPT-4o-mini drafts a thank-you email, sends it automatically via Gmail, and logs the sent email to Google Sheets.

## Setup
1. Connect credentials for Typeform, OpenAI, Slack, Gmail (OAuth2), and Google Sheets (OAuth2).
2. Update the Typeform form ID in the trigger to match your survey.
3. Create or choose Slack channels for alerts and email review, then set the channel names/IDs in the two Slack steps.
4. Set the Google Sheets document ID and sheet tab name, and ensure the tab contains columns for Respondent Name, Email, Submission Date, Sentiment, Email Status, and Timestamp Logged.

## Requirements
- Typeform account with an active survey form
- OpenAI API key (uses GPT-4o-mini for sentiment classification and email drafting)
- Slack workspace with two channels (team alerts + email review/approval)
- Gmail account (OAuth2) for sending responses
- Google Sheets account with a CRM tracking tab

## Additional info
Estimated setup time:** 15–20 minutes

**Complexity: Intermediate — involves AI classification, a human-in-the-loop 
approval step, and multi-service integration (Typeform, OpenAI, Slack, Gmail, 
Google Sheets)
**Cost considerations: GPT-4o-mini calls run at 3–4 per submission (classification, 
drafting, and up to one revision per approval cycle). Costs are minimal per 
response but scale with survey volume.

**Support/testing note:** The Slack approval step uses sendAndWait, so the 
workflow execution stays open until a reviewer replies in the designated channel.

## 🔗 Nodes Used

Google Sheets, Slack, Typeform Trigger, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
