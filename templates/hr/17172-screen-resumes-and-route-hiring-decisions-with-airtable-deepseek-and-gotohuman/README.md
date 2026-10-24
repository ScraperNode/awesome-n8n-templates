# 👥 Screen resumes and route hiring decisions with Airtable, DeepSeek, and gotoHuman

> ⚡ **91 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects job applications via Gmail, deduplicates candidates in Airtable, extracts resume text with LlamaParse, scores candidates against an Airtable role rubric using a DeepSeek chat model, and routes results to gotoHuman for approve/reject decisions that update the candidate’s stage.

## How it works
1. Receives a job application submission from Gmail, including the applicant’s name, email, role, and resume file.
2. Searches Airtable Candidates by email to detect duplicates and either creates a new candidate record or updates the existing record.
3. Extracts text from the uploaded resume with LlamaParse and runs a basic quality check to detect likely mis-parsed or incomplete text.
4. If parsing looks poor, updates the candidate in Airtable to “Needs Manual Review” with a “poor” parse quality flag.
5. If parsing looks good, fetches the role-specific scoring rubric from the Airtable Roles table, sanitizes the resume text, and sends both to a DeepSeek chat model (via LangChain) to produce a structured JSON scorecard.
6. Validates and normalizes the AI’s JSON output, saves the score, reasoning, confidence, red flags, and recommendation back to Airtable, and submits the scorecard to gotoHuman for a human decision.
7. Updates the candidate’s Airtable stage to “Advanced” (and sets “Awaiting Interview”) or “Rejected” based on the gotoHuman approve/reject response.

## Setup
1. Create or update your Airtable base with Candidates and Roles tables (including fields for email dedupe, stage, rubric fields, and AI scoring outputs) and connect an Airtable Personal Access Token.
2. Install the community nodes @llamaindex/n8n-nodes-llamacloud and @gotohuman/n8n-nodes-gotohuman, then add LlamaParse API credentials and gotoHuman API credentials.
3. Add a DeepSeek API credential for the LangChain chat model (or swap to another supported LangChain chat model and update the workflow accordingly).
4. In gotoHuman, configure a Review Board/template and select its agent and template IDs in the workflow so the human approval step can return “approved” or a rejection response.

## 🔗 Nodes Used

Airtable, Gmail Trigger, Basic LLM Chain, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
