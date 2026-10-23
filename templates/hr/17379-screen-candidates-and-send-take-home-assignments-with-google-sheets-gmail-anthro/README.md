# 👥 Screen candidates and send take-home assignments with Google Sheets, Gmail, Anthropic, and OpenAI

> ⚡ **34 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow pulls candidates from Google Sheets, uses an Anthropic-powered AI agent with an in-memory vector-store rubric (RAG) to score and shortlist applicants, writes results back to the sheet, then emails a take-home assignment via Gmail to candidates who are marked as approved.

## How it works
1. Runs manually to start a screening batch.
2. Loads the screening rubric text into an in-memory vector store using OpenAI embeddings so it can be retrieved during scoring.
3. Reads candidate rows (for example name, email, resume text, and answers) from Google Sheets.
4. Uses an Anthropic chat model to retrieve the rubric and produce structured scores, a weighted total, and a shortlist decision for each candidate.
5. Flattens the AI output into sheet-friendly columns, sets a status (SHORTLISTED_PENDING_APPROVAL or REJECTED), and appends or updates the candidate rows in Google Sheets.
6. Reads the updated sheet again and routes shortlisted candidates to Gmail to send the take-home assignment email.

## Setup
1. Add credentials for Google Sheets, Gmail, Anthropic, and OpenAI (for embeddings).
2. Select the Google Sheets document and worksheet in each Google Sheets node (read candidates, write back scores, and read the approved shortlist) and ensure your columns match the workflow fields (name, email, resume_text, answers, status).
3. Update the rubric, shortlist threshold, and email subject/body in the configuration step to match your role and assignment.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Embeddings OpenAI, Anthropic Chat Model, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
