# 👥 Review resumes against job descriptions with Google Gemini, Gmail, and Sheets

> ⚡ **8 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow collects a resume PDF and job description via an n8n form, extracts resume text, uses Google Gemini to generate a match score and improvement report, logs the results to Google Sheets, and emails a tailored response through Gmail based on the verdict.

## How it works
1. Receives a form submission with the user’s email address, target job title, job description text, and a resume PDF.
2. Extracts text from the uploaded PDF resume.
3. Sends the resume text and job description to Google Gemini to produce a structured review with a 0–100 match score, verdict, missing keywords, strengths, improvements, and a rewritten professional summary.
4. If the resume PDF cannot be read, sends an error email to the submitter via Gmail asking for a text-based PDF.
5. Formats the structured AI output into email-friendly fields and bullet lists.
6. Appends the review details to a Google Sheets spreadsheet for tracking.
7. Sends a verdict-specific report email via Gmail (strong match, improvement needed, rework plan, or a generic report).

## Setup
1. Add credentials for Google Gemini (PaLM) API, Google Sheets OAuth2, and Gmail OAuth2.
2. Configure the Google Sheets node with your target spreadsheet and the sheet/tab to append rows to.
3. Publish the n8n form and share the form URL so users can submit a text-based (non-scanned) PDF resume and the job description.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
