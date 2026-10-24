# 🔬 Score mortgage loan risk from Google Drive PDFs with OpenAI and Gmail

> ⚡ **106 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for new loan application PDFs, extracts text, and uses OpenAI (GPT-4o-mini) to structure applicant data, score risk, generate a lending summary, and produce an underwriting recommendation, then emails the final report via Gmail and posts Slack alerts on failures.

## How it works
1. Triggers when a new PDF is created in a specified Google Drive folder.
2. Downloads the PDF from Google Drive and extracts its text content.
3. Uses OpenAI (GPT-4o-mini) to extract key applicant and loan fields into a validated JSON structure.
4. Uses OpenAI (GPT-4o-mini) to calculate a risk score, risk level, approval confidence, and key findings in JSON.
5. Uses OpenAI (GPT-4o-mini) to write a plain-text lending summary and then generate a final underwriting decision (approve/conditional approval/further review/decline) with reasoning and conditions.
6. Assembles a single report from the extracted data, risk analysis, summary, and decision, and sends it to the loan officer via Gmail.
7. If extraction or risk scoring fails, sends a Slack alert and retries by re-downloading the application PDF.

## Setup
1. Connect Google Drive OAuth2 credentials and replace YOUR_GOOGLE_DRIVE_FOLDER_ID with the folder that receives loan application PDFs.
2. Add an OpenAI API credential and ensure the GPT-4o-mini model is available in your OpenAI account.
3. Connect Gmail OAuth2 credentials and set the recipient email address in the email step (replace loan-officer@example.com).
4. Connect Slack OAuth2 credentials and set YOUR_SLACK_CHANNEL_ID (and the ops channel used by the global error handler) to the channel(s) where alerts should post.
5. Test with a sample PDF to confirm text extraction works and the AI responses match the expected JSON schemas.

## 🔗 Nodes Used

Slack, Google Drive, Gmail, Google Drive Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
