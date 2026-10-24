# 👥 Review Discord community applications with Tally, OpenAI and Discord

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow triggers on new Tally form submissions, uses OpenAI to review Discord community applications and classify them as Approved, Needs Review, or Rejected, then posts the result to the appropriate Discord channel and appends an audit log to Google Sheets.

## How it works
1. Triggers when a new application is submitted via Tally.
2. Extracts key applicant fields (such as name, email, grade, experience, and comment) into a consistent structure.
3. Checks that required fields like email and application content are present and sends a Discord error notification if they are missing.
4. Sends the application text to an OpenAI chat model to extract a structured review result (status, reason, confidence, risk, and a short Japanese summary).
5. Routes the application based on the AI status (Approved, Needs Review, Rejected, or Unknown) and posts a formatted message to the matching Discord channel.
6. Appends the application details and AI review output to a Google Sheets spreadsheet for logging and auditing.

## Setup
1. Connect your Tally Forms trigger credential and ensure it points to the correct application form.
2. Add an OpenAI credential and select the chat model to use for the review.
3. Add a Discord Bot credential, then set the Discord server (guild) and channel IDs for Approved, Needs Review, Rejected, and Error notifications.
4. Add a Google Sheets credential and fill in the target spreadsheet (document ID) and sheet/tab where the review log is appended.
5. Update the field mappings in the applicant extraction step to match your Tally form question IDs (for example, name, email, and comment fields).

## 🔗 Nodes Used

Google Sheets, Discord, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
