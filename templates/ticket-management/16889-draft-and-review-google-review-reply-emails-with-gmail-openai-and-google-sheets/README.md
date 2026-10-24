# 🎫 Draft and review Google review reply emails with Gmail, OpenAI, and Google Sheets

> ⚡ **63 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Watches Gmail for Google review alerts, drafts a reply with AI, checks that draft against the email it came from, and sends it to you. Low ratings arrive with a warning to call first. Nothing is ever posted automatically.

## How it works
1. Triggers when a Google Business Profile review notification arrives in Gmail.
2. Reads your Google Sheets ledger once and passes on only the alerts that are new, so the same review is never answered twice, even when several arrive together.
3. One OpenAI call extracts the star rating, the reviewer's first name and the review text, and writes a reply that follows Google's rules for public replies.
4. Checks the draft before you ever see it: the words the model quoted must actually appear in the alert email, and the reply must carry no links, no discounts and no request to change the rating.
5. Routes the result three ways — a draft to paste for 3 to 5 stars, a warning to call the customer first for 1 to 2 stars, and a heads-up when the alert could not be read — then appends one row per outcome to Google Sheets, keyed by the Gmail message id.

## Setup
1. Connect your Gmail account and ensure Google review alerts are delivered from businessprofile-noreply@google.com.
2. Add an OpenAI API key/credential and select the chat model in the OpenAI node.
3. Create a Google Sheets “reply ledger” with columns like processed_at, gmail_message_id, rating, reviewer, review_excerpt, reply_draft, and status, then select the spreadsheet and sheet in both Google Sheets steps.
4. Update the settings values for business name, recipient email address, tone, contact channel, sign-off, and the Google reviews page URL used in the email.

## Requirements
- Gmail receiving your Google Business Profile notifications, an OpenAI API key, and Google Sheets.

## Customization
- Tone, sign-off and contact channel live in one settings node. The moderation checks are plain JavaScript in "Check the draft" — add your own. Swap OpenAI for Gemini or Claude by replacing the model node.

## Additional info
Honest limits:

- The layout of Google's notification email varies by region and language. If your alerts arrive in another language, or from a different Google address, edit the search filter in the "Watch Gmail for new review alerts" node. When the layout changes enough that the review cannot be read, the workflow tells you rather than guessing.

- The grounding check compares the first 40 characters the model quoted against the alert text. A model that quotes accurately but misreads the star rating would still pass; the rating is shown in the email you receive, so you can check it.

- OpenAI extraction is billed to your own API key, per review processed.

Tested end to end on live Gmail, Google Sheets and OpenAI accounts before publishing.

Questions: hello@43sunsets.com

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
