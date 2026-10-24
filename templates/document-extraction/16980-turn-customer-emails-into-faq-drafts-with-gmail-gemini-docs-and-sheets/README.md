# 🔬 Turn customer emails into FAQ drafts with Gmail, Gemini, Docs and Sheets

> ⚡ **67 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors customer-support emails in Gmail, uses Google Gemini to extract FAQ-ready questions and draft answers, logs every candidate to Google Sheets, and routes strong candidates to a Google Docs draft while sending unclear or sensitive messages to a Gmail draft for manual review.

## How it works
1. Triggers every 5 minutes when Gmail finds new messages matching the configured support-style search query.
2. Cleans and normalizes the email metadata and body text to remove signatures and quoted replies.
3. Sends the normalized email content to Google Gemini to extract the customer question, category, urgency, FAQ value score, draft answer, and a recommended action as structured JSON.
4. Logs the extracted FAQ candidate details (including score, tags, and sensitivity flags) to a Google Sheets tab for tracking.
5. Creates a Google Docs FAQ draft and inserts the generated draft content when the candidate meets the score threshold or is marked as reusable.
6. Creates a Gmail draft to the reviewer with the Google Docs link for high-value candidates, or a separate Gmail draft containing review notes for sensitive or unclear emails.

## Setup
1. Connect credentials for Gmail, Google Gemini, Google Sheets, and Google Docs in n8n.
2. Create a Google Sheets spreadsheet with a tab named "FAQCandidates" and columns that match the fields being appended (for example created_at, message_id, subject, customer_question, answer_draft, faq_value_score, status, and tags).
3. In the configuration step, set your spreadsheet ID, sheet/tab name, reviewer email address, Google Docs folder ID, product/service name, and the FAQ score threshold used to create Docs drafts.
4. Review and adjust the Gmail search query and polling interval to match the inbox/labels and languages you want to monitor.

## Requirements
- Requires Gmail, Google Gemini, Google Sheets, and Google Docs credentials. You also need a Google Sheet with a FAQCandidates tab and the expected column headers before running the workflow.

## Customization
- You can customize the Gmail search query, spreadsheet ID, sheet name, reviewer email address, Google Docs folder ID, product or service name, FAQ score threshold, tags, categories, and draft wording.

## Additional info
This workflow does not send emails automatically. It creates Google Docs drafts and Gmail review drafts so a human can check FAQ answers before publishing or replying.

## 🔗 Nodes Used

Google Sheets, Gmail, Google Docs, Gmail Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
