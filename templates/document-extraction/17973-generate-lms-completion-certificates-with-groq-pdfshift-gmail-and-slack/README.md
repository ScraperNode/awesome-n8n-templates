# 🔬 Generate LMS completion certificates with Groq, PDFShift, Gmail and Slack

> ⚡ **18 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives an LMS course-completion webhook, checks a passing score from Google Sheets, generates personalised certificate text with Groq (Llama), converts a styled HTML certificate to a PDF with PDFShift, logs the issuance to Google Sheets, and emails the PDF via Gmail, with Slack alerts on workflow errors.

## How it works
1. Receives a POST webhook when a student completes a course, including course ID, student details, score, and completion date.
2. Looks up the course’s pass threshold and certificate template details from a Google Sheets “CourseThresholds” tab.
3. Compares the student’s score to the pass score and stops processing if the score does not meet the threshold.
4. Sends the student and course details to Groq’s OpenAI-compatible chat completions API (Llama) to generate a short personalised certificate body.
5. Builds a styled HTML certificate that includes a generated certificate ID, the course name, score, and formatted completion date.
6. Converts the HTML to a PDF file using the PDFShift API and stores the result as a binary attachment.
7. Appends or updates an “IssuedCertificates” registry in Google Sheets and emails the PDF certificate to the student via Gmail.
8. If the workflow errors, posts an alert message to a specified Slack channel.

## Setup
1. Configure your LMS to send a course-completion webhook to the workflow’s webhook URL (POST /course-completion) using the expected payload fields (course_id, student_id, student_name, student_email, score, completion_date).
2. Connect Google Sheets OAuth credentials and replace YOUR_SPREADSHEET_ID, then create and map the “CourseThresholds” and “IssuedCertificates” tabs with the required columns.
3. Add a Groq API key and replace the Authorization header value used for the Groq chat completions request.
4. Add a PDFShift API key and replace the X-API-Key header value used for PDF conversion.
5. Connect Gmail OAuth credentials for sending emails with PDF attachments.
6. Connect Slack OAuth credentials and set the target channel for workflow error alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
