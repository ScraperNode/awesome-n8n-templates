# 👥 Screen CVs for hidden prompt injections with Gemini, Google Drive, Sheets, and Telegram

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/WMB_6WwJayc

This workflow collects PDF CVs via an n8n form, screens them twice with Gemini (text extraction and vision on a rendered image), and compares the results to detect hidden-text, prompt-injection attempts, then quarantines suspicious files in GDrive and logs outcomes to Sheets with Telegram.

## How it works
1. Receives a job application submission via an n8n form with the candidate’s name, selected role, and a PDF CV upload.
2. Validates that the uploaded file is a PDF and returns a rejection form response if the format is incorrect.
3. Extracts raw text from the PDF and sends it to Google Gemini to produce a structured verdict (qualified flag, score, years of experience, and one-sentence reason).
4. Converts the PDF to a JPG via ConvertAPI, converts the returned base64 to an image file, and sends the image to Google Gemini vision to generate the same structured verdict (and reports via Telegram if this vision path fails).
5. Compares the text and vision verdicts to compute score and experience gaps and flags the CV as suspicious if the verdicts disagree or diverge beyond the configured thresholds.
6. If flagged, uploads the original CV to a Google Drive quarantine folder and sends a detailed Telegram alert; otherwise, sends a “clean result” Telegram message using the vision-based reason.
7. Appends a row to a Google Sheets “Applications” tab with the submission metadata, both scores, divergence metrics, the suspicion flag, and the trusted reason.

## Setup
1. Configure the n8n form trigger and publish the form so candidates can submit their name, role, and a PDF file in the binary field named "CV".
2. Add Google Gemini (PaLM) credentials and ensure the selected Gemini model supports both text and multimodal inputs.
3. Set up ConvertAPI and replace the placeholder Secret in the PDF-to-JPG HTTP request URL.
4. Add Google Drive OAuth2 credentials and set the target quarantine folder ID.
5. Add Google Sheets OAuth2 credentials and update the spreadsheet ID and ensure the “Applications” tab has the expected headers.
6. Add Telegram bot credentials and replace the placeholder chat ID(s) for the flagged, clean, and vision-failure notifications.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
