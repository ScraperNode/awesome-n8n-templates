# 🔬 Answer PDF questions with cited answers using Google Gemini, Gmail and Sheets

> ⚡ **20 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a question and PDF via an n8n form, uses Google Gemini to answer using only the document with citations, suggests follow-up questions, emails the results via Gmail, and logs the Q&A to Google Sheets.

## How it works
1. Receives a form submission that includes the user’s email address, a question, and an uploaded PDF.
2. Sends the PDF and question to Google Gemini’s document model to generate an answer that quotes the exact clause or sentence used, or states if the document lacks the answer.
3. If the PDF cannot be read, sends a failure notification to the user via Gmail.
4. Formats the extracted answer together with the user’s email and original question.
5. Uses a Google Gemini chat model to generate three unnumbered follow-up questions based on the Q&A.
6. Emails the cited answer and suggested follow-ups to the user via Gmail and appends the Q&A to a Google Sheets worksheet.

## Setup
1. Add a Google Gemini (PaLM) API credential and ensure the selected Gemini models are available in your project.
2. Connect a Gmail OAuth2 account and verify it can send emails to external recipients.
3. Connect a Google Sheets OAuth2 account and select the target spreadsheet and sheet/tab (for example, a tab named “Document QA”) for logging.
4. Publish the form and share its URL with users, and ensure uploads are text-based PDFs (not scanned images) and within the size limit your instance supports.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
