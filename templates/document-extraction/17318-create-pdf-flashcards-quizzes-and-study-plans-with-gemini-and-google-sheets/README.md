# 🔬 Create PDF flashcards, quizzes, and study plans with Gemini and Google Sheets

> ⚡ **30 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a PDF and study preferences via an n8n form, extracts its text, uses Google Gemini to generate flashcards, a quiz, key topics, and a study plan, then saves the cards and quiz to Google Sheets and emails the study plan via Gmail.

## How it works
1. Receives a form submission with the learner’s email, subject, desired flashcard count, and a PDF upload.
2. Extracts selectable text from the uploaded PDF and checks that it contains enough content to process.
3. If the PDF is likely a scan with too little text, sends an “unreadable PDF” notice via Gmail.
4. If the PDF has enough text, sends the extracted material to Google Gemini to generate a structured study pack (flashcards, multiple-choice quiz, key topics, and a day-by-day plan).
5. If generation fails, emails the learner a failure message via Gmail.
6. Parses the structured output, emails the study plan and topic list via Gmail, and appends flashcards and quiz questions as individual rows into separate tabs in Google Sheets.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Gmail OAuth2, and Google Sheets OAuth2.
2. Create or select a Google Sheets spreadsheet with two tabs (for example, “Flashcards” and “Quiz”) and set the document ID and sheet names in the two Google Sheets append steps.
3. Open the form URL from the trigger and use it as the entry point for uploading text-based PDFs and submitting requests.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
