# 🔬 Generate weekly student progress reports with Gemini, Supabase, and WhatsApp

> ⚡ **27 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs weekly to pull student attendance and score data from Supabase, uses Google Gemini to generate per-student performance summaries and attention flags, sends immediate WhatsApp alerts for flagged students, then compiles all summaries into a PDF report, uploads it, and shares it with the coach via WhatsApp.

## How it works
1. Runs weekly on a schedule.
2. Fetches all student weekly metrics (attendance and scores) from Supabase.
3. Uses Google Gemini to write a short performance summary per student and determine whether the student should be flagged for attention based on attendance and score-drop rules.
4. If a student is flagged, sends a WhatsApp message to the coach and inserts a flag record into Supabase.
5. Aggregates all students’ summaries into a single HTML weekly report.
6. Converts the HTML report to a PDF via an HTTP-based HTML-to-PDF API, uploads the PDF to a file-hosting API, and sends the PDF link/document to the coach via WhatsApp.
7. Logs the report URL to Supabase for recordkeeping.

## Setup
1. Add Supabase credentials and create the required tables/columns (weekly_student_data, attention_flags, and weekly_reports) referenced by the workflow.
2. Add a Google Gemini (PaLM) API credential for the chat model used to generate summaries and flags.
3. Add WhatsApp Business Cloud credentials, and set your WhatsApp phone number ID and the coach’s recipient number in the configuration values.
4. Provide an HTML-to-PDF API endpoint and API key, plus a file upload/hosting API endpoint and API key, and update the configuration fields accordingly.
5. Confirm the upload API response field used for the public file URL (assumed to be `url`) and adjust the workflow if your provider returns a different field.
6. Set the preferred day/time in the weekly schedule trigger and activate the workflow.

## 🔗 Nodes Used

HTTP Request, Supabase, WhatsApp Business Cloud, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
