# 🔬 Evaluate vendor proposal PDFs with OpenAI, Gmail, and Google Sheets

> ⚡ **32 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects vendor proposal PDFs via an n8n Form, extracts text from the PDF, uses an OpenAI ChatGPT model to summarize and flag risks, logs the evaluation to Google Sheets, and sends an approval or review-needed notification through Gmail.

## How it works
1. Receives a submission from an n8n Form with the submitter’s details, optional notes, and a vendor proposal PDF upload.
2. Extracts text from the uploaded PDF and cleans/limits it to a safe length for AI evaluation.
3. Sends the cleaned proposal text and submitter notes to an OpenAI ChatGPT model to return structured JSON with vendor details, summary, key points, and risks.
4. Parses the AI response, formats key points and risks for readability, and flags the submission as “REVIEW NEEDED” when any risks are present.
5. Appends the evaluation results to an “Evaluations” tab in Google Sheets with the decision, summary, and risk metadata.
6. Sends a Gmail alert to the review team when risks are found, otherwise emails an auto-approval notification to the approver.

## Setup
1. Add an OpenAI API credential and select the model for the OpenAI Chat Model used by the evaluator.
2. Connect Google Sheets OAuth2 and replace `YOUR_PROPOSAL_LOG_SHEET_ID`, then create an `Evaluations` sheet with the columns used for logging (for example: Submission Date, Vendor Name, Category, Summary, Risk Flagged, Risk Count, Key Points, Risks, Decision, Submitted By).
3. Connect Gmail OAuth2 and replace `YOUR_REVIEW_TEAM_EMAIL` and `YOUR_APPROVER_EMAIL` with the correct recipients for review alerts and approvals.
4. Activate the workflow and use the form URL (path `vendor-proposal-evaluator`) to submit proposal PDFs for evaluation.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
