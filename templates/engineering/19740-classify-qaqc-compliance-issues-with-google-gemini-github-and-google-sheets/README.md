# ⚒️ Classify QA/QC compliance issues with Google Gemini, GitHub, and Google Sheets

> ⚡ **4 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow answers QA/QC compliance and non-conformance questions from a controlled GitHub knowledge base using Google Gemini, then classifies findings (Compliant/Observation/Minor/Major), logs an audit record to Google Sheets, and emails the QA team when escalation or manual review is required.

## How it works
1. Receives a user question via an n8n chat trigger and captures session metadata (query, session ID, timestamp, and source).
2. Validates that the incoming query is present and long enough to be processed.
3. Uses Google Gemini with a RAG agent to list approved QA/QC documents in a GitHub repository, retrieve the most relevant document text, and generate a structured, evidence-grounded assessment.
4. Normalizes the structured result into fields such as classification, severity score, requirement violated, recommended action, escalation/CAPA flags, manual review flag, and source files.
5. If the agent indicates insufficient evidence, it appends a “Pending Manual Review” record to Google Sheets and emails the QA team to review the case.
6. Otherwise, it routes the result by classification, appends the decision to a Google Sheets audit log, and emails the QA team when escalation is required before marking the escalation as sent in the sheet.

## Setup
1. Add credentials for Google Gemini (Google AI) and ensure the selected model (models/gemini-3.5-flash-lite) is available in your account.
2. Add GitHub access (or configure access to the public repo) and confirm the owner/repository/path point to your approved QA/QC knowledge base (fahimjilani/qa-qc-rag-knowledge-base in /docs).
3. Add Google Sheets credentials, select the target spreadsheet and sheet, and ensure the sheet has columns matching the logged fields (for example Record_ID, Classification, Severity_Score, and Escalation_Status).
4. Add Gmail credentials and update the recipient address (qa-team@example.com) and any email wording to match your escalation and manual-review process.
5. Enable the workflow and use the chat interface to submit QA/QC queries, then verify that logs and notifications are created as expected.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Structured Output Parser, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
