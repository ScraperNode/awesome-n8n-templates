# ⚡ Evaluate job fit and generate application assets from Telegram links with OpenAI, Pinecone, Apify and Google Sheets

> ⚡ **104 views** · ⚡ [Personal Productivity](../)

## Description

## Summary
This workflow automates the early-stage job application process using AI.

It:
- accepts a job link from Telegram
- extracts and normalizes the URL
- scrapes the job page
- evaluates job fit against resume context stored in Pinecone
- asks for user approval if the role is a good match
- generates application materials like:
  - cover letter
  - recruiter email draft
  - resume improvement suggestions
- logs the application in Google Sheets
- creates supporting files in Google Drive
- sends status updates back on Telegram

## Why this is useful
This helps reduce the manual effort involved in checking roles, deciding whether to apply, and preparing customized application material.

## Stack used
- n8n
- Telegram
- OpenAI
- Pinecone
- Apify
- Google Sheets
- Google Drive
- Gmail

## Workflow overview
1. User sends a job link on Telegram
2. AI extracts and validates the link
3. Job page is scraped and normalized
4. Resume context is retrieved from Pinecone
5. AI calculates fit score
6. If fit is low, user gets a rejection message
7. If fit is good, user is asked for approval
8. On approval, the workflow generates application assets
9. A tracker entry is added and the user gets a final update

## Notes
- Resume data is retrieved from a vector database
- Application materials are generated only after approval
- The workflow is designed to be modular and can be extended with auto-apply, ATS scoring, or multi-channel alerts later

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Drive, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
