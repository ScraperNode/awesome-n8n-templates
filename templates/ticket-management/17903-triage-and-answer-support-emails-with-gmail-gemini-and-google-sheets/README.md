# 🎫 Triage and answer support emails with Gmail, Gemini, and Google Sheets

> ⚡ **18 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow automatically classifies incoming Gmail messages, answers support questions using a Google Sheets knowledge base and Gemini, escalates unknown questions to a human expert, and learns from expert responses.

## How it works
1. Triggers every minute when a new email is received in Gmail.
2. Uses Google Gemini to classify the email as a support request and continues only for the “support” category.
3. Reads the existing Q&A knowledge base from Google Sheets and aggregates it into a single context payload.
4. Uses Google Gemini to compare the customer’s email against the Google Sheets knowledge base and outputs either an HTML reply (high confidence) or a one-sentence summary for escalation (low confidence).
5. If an answer is found, sends the generated HTML response back to the original sender via Gmail.
6. If no answer is found, sends an “answer required” email to a human expert via Gmail and waits for their free-text reply.
7. Uses Google Gemini to convert the original question and the expert’s reply into a reusable Q&A pair, appends it to Google Sheets, and then re-reads the updated knowledge base for future requests.

## Setup
1. Connect your Gmail account credentials for the Gmail trigger, the automated reply email, and the “send and wait” human escalation email.
2. Create a Google Gemini API key in Google AI Studio and add it as Google Gemini credentials for the workflow’s AI model nodes.
3. Connect your Google Sheets credentials and select the spreadsheet and sheet in “Get Knowledge Base” and “Add to Knowledge Base”.
4. Create a Google Sheet (for example, “Knowledge Base”) with a tab named “QA Database” and two columns named “Question” and “Answer”.
5. Set the recipient address for the human expert in the escalation email step and confirm the customer “send to” field uses the incoming sender address as intended.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
