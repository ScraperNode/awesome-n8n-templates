# 🔬 Tailor ATS-ready resumes and cover letters with Gemini, Google Drive, Notion, and Gmail

> ⚡ **13 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Transform any resume into a professional, ATS-compliant document with AI. Supports Global ATS, German, and Japanese resume formats, generates personalized cover letters, and automates PDF creation and delivery for every job application.

## How it works
1. Receives an n8n form submission with the company name, job description, selected ATS type, and an optional request to generate a cover letter.
2. Lists resume PDF files from a specified Google Drive folder, downloads each file, extracts the PDF text, and cleans it into a single plain-text resume input.
3. Uses Google Gemini to rewrite the resume into pure-HTML output tailored to the job description, choosing Global ATS, German Lebenslauf, or Japanese Rirekisho formatting based on the selected ATS type.
4. Converts the generated HTML resume into a PDF using the PDF.co HTML-to-PDF API and retrieves the resulting PDF from the returned URL.
5. Uploads the generated resume PDF to a Google Drive output folder, then reads the existing Notion database entries to compute the next serial number and creates a new Notion database page linking to the uploaded file.
6. If cover letter generation is requested, uses Google Gemini to write a localized cover letter (English/German/Japanese) and combines it with the resume output.
7. Sends an HTML email via Gmail with a download link to the generated PDF and the cover letter text.

## Setup
1. Connect Google Drive OAuth2 credentials and update the input folder ID (resume source) and output folder ID (generated PDFs) to match your Drive folders.
2. Add a Google Gemini (PaLM) API credential and ensure the selected Gemini models are available in your account.
3. Add a PDF.co API key and replace the hardcoded x-api-key header value in the PDF conversion request.
4. Connect Gmail OAuth2 credentials and set the recipient email address in the Gmail send step (or map it to a form field if you want to email the submitter).
5. (Optional) Connect Notion credentials, select your Notion database ID, and ensure the database has properties for Company Name (title), Resume PDF (files), and Sl No. (number).

## Requirements
- n8n v1.100.0 or later
- Google Gemini API Key
- Google Drive OAuth Credentials
- pdf.co API Key

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Notion, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
