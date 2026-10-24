# 🔬 Create technical interview study guides with OpenAI, Google Sheets, and Gmail

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects technical interview questions via an n8n form, uses the OpenAI Chat Completions API to generate a structured study guide and draft feedback, appends the results to Google Sheets, and emails the study guide summary using Gmail.

## How it works
1. Receives an interview question, target role, and optional draft answer from an authenticated n8n form submission.
2. Loads configured settings (Google Sheets spreadsheet and worksheet, recipient email, and OpenAI model) and validates input length and required fields.
3. Sends the question, role, and draft answer to the OpenAI Chat Completions API and requests a JSON-only study guide response.
4. Parses and validates the OpenAI JSON output, builds a Google Sheets row (including a review date three days later), and formats a plain-text email body.
5. Appends the study guide record to the specified Google Sheets worksheet.
6. Sends the study guide summary to the configured recipient using Gmail.

## Setup
1. Configure the n8n form’s Basic Auth so only trusted users can submit questions.
2. Add an OpenAI API credential and ensure the selected model name in the settings (for example, gpt-4o-mini) is available for your account.
3. Add Google Sheets OAuth credentials and set the spreadsheet ID and worksheet name in Configure study settings. Create the first row with these exact headers: created_at, question, target_role, draft_answer, topic, difficulty, reference_answer, key_concepts, common_mistakes, follow_up_questions, draft_feedback, review_on, status.
4. Add a Gmail credential and set the recipient email address in the settings.
5. Use the form’s test URL to run an end-to-end test before activating the workflow.

## Requirements
- An n8n instance; Form Basic Auth credentials; an OpenAI API account with available credit and a model supporting Chat Completions JSON mode; a Google spreadsheet; and Google Sheets and Gmail credentials.

## Customization
- Customize the tutor prompt, OpenAI model, target role, and review interval. The recipient email is configured by the workflow owner. The review_on field records a suggested date only; no reminder is scheduled.

## Additional info
Created by [SkillCopilotAI](https://skillcopilotai.com/), an AI interview assistance product.

Validation status: JSON structure and transformation logic were checked using mock data. This workflow has not yet been imported into a live n8n instance or tested end to end with OpenAI and Google credentials.

AI-generated explanations may be incorrect; verify technical claims. Only submit questions you are permitted to share with OpenAI and Google. If Gmail fails after Google Sheets succeeds, retry only the Gmail step; rerunning the entire workflow can append a duplicate row.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
