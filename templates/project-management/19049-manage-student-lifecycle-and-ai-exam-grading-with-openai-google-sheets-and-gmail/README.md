# 📋 Manage student lifecycle and AI exam grading with OpenAI, Google Sheets, and Gmail

> ⚡ **9 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow automates a student’s journey from course enrollment to exam grading and certification by connecting n8n Forms, Google Sheets, Gmail, Slack, OpenAI, Google Drive, and Google Docs, including timed onboarding emails, AI-based assessment evaluation, pass/fail routing, and certificate generation.

## How it works
1. Receives a new course enrollment via an n8n Form and normalizes the submitted student details.
2. Appends the enrollment record to Google Sheets, sends a welcome email via Gmail, and posts a new-enrollment notification to a Slack channel.
3. Waits 25 days and sends an exam reminder email, then waits again and emails the final exam access link via Gmail.
4. Triggers when a new exam response row is added in a Google Sheets responses spreadsheet and looks up the student’s enrollment record by email.
5. Verifies the submission matches an enrolled student and checks eligibility by calculating whether at least 30 days have passed since the enrollment date.
6. For eligible students, sends the exam response JSON to OpenAI for automated grading, parses the returned evaluation JSON, and emails a detailed HTML result report via Gmail while updating the student’s pass/fail status in Google Sheets.
7. If the student passes, copies a Google Docs certificate template, replaces the placeholder name, exports the document as a PDF from Google Drive, and emails the certificate as an attachment; if the student fails, emails a failure notice, waits 4 days, and sends a re-exam access email.

## Setup
1. Connect credentials for Google Sheets, Gmail, Slack, OpenAI, Google Drive, and Google Docs in n8n.
2. Create or select the Google Sheets files for enrollment tracking and exam form responses, and ensure the enrollment sheet contains columns including Date, Name, Email, and Test Clearance.
3. Update the Slack channel IDs, the Google Forms exam links in the exam access emails, and the WhatsApp group link in the welcome email to match your environment.
4. Provide a Google Docs certificate template with a consistent placeholder text (for example, “{your name}”), and set the correct template file ID and destination Drive folder in the certificate steps.
5. Publish the n8n Form for enrollment and test the full flow with a sample student to confirm delays, grading output format, and email deliverability.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, Google Docs, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
