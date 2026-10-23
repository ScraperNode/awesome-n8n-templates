# 🎫 Classify cold email replies and route leads with Gmail, Gemini, Slack and Sheets

> ⚡ **148 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls Gmail for labeled outreach replies, cleans and classifies each reply with Google Gemini, logs results to Google Sheets, and for actionable messages, creates a Gmail draft response and alerts a Slack channel with the draft link.

## How it works
1. Triggers every minute when a new Gmail message arrives with the specified label.
2. Fetches the full email content from Gmail and extracts sender, subject, and a cleaned reply body that removes quoted text.
3. Sends the cleaned reply body to Google Gemini to classify it (Interested, Question, Objection, Not Interested, Auto-Reply) and generate a suggested reply.
4. Parses the Gemini JSON output and falls back to a “Needs Manual Review” classification if the response cannot be parsed.
5. Appends the email details, classification, confidence, reasoning, and suggested reply to a Google Sheets tracker.
6. If the reply is classified as Interested or Question, creates a draft reply in Gmail and posts a Slack alert that links directly to the saved draft.

## Setup
1. Connect your Gmail OAuth2 account and create a Gmail label and filter that applies it to inbound replies (for example, add -from:me to avoid matching your own sent emails).
2. Add a Google Gemini (PaLM) API credential for the Google Gemini node.
3. Connect your Google Sheets OAuth2 account, set the target spreadsheet/document ID, and ensure the sheet has columns matching the workflow’s mapped fields.
4. Connect your Slack OAuth2 credential, set the target channel (for example, #outreach-replies), and invite the Slack bot/app to that channel.

## Customization
- To add or remove classification categories, edit the prompt in the Gemini node and update the IF condition on the routing node to match
- To alert on Objection replies, add Objection as a second condition on the routing node
- To adjust poll frequency, change the interval on the Gmail trigger

## Additional info
This workflow strips Gmail's quoted reply content before classification, significantly improving AI accuracy compared to passing the full thread. The AI never sends emails automatically — all outbound messages go through human review via Gmail Drafts. Tested with Google Gemini 3 Flash.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
