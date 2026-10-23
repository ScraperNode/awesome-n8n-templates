# ⚒️ Evaluate AI support agent quality and regressions with Google Sheets, Groq and Gmail

> ⚡ **3 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs a customer-support AI agent against Google Sheets test cases, uses Groq-hosted LLMs to evaluate response quality, logs results back to Google Sheets, compares run metrics to an approved baseline, and sends regression or review alerts via Gmail.

## How it works
1. Starts when you manually execute the workflow.
2. Reads test cases from Google Sheets, filters to only Active scenarios, and iterates through them in batches.
3. Builds a customer-support prompt for each test case and generates an agent response using Google Gemini.
4. Sends the question, expected facts/outcome, and the agent response to a Groq LLM to score relevance, reference accuracy, completeness, instruction compliance, and hallucination risk as JSON.
5. Parses the evaluator JSON and appends per-test results (including the agent response and overall result) to an Evaluation_Results sheet in Google Sheets.
6. Aggregates the current run’s results, selects the latest previously reviewed baseline from Google Sheets, and computes pass-rate regression plus metric deltas.
7. Writes the run-level metrics back to Google Sheets and routes the outcome to either mark the run successful or send a Gmail warning/alert to the QA team.

## Setup
1. Create a Google Sheets file with Test_Cases, Evaluation_Results, and Baseline_Metrics tabs (including columns referenced in the workflow like Active, Test_ID, Question, Expected_Facts, Expected_Outcome, and Reviewed).
2. Add Google Sheets credentials in n8n and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes with your spreadsheet ID.
3. Add credentials for Google Gemini and Groq (used for the agent and evaluator chat models) and select the models you want to run.
4. Add Gmail credentials and update the recipient address (qa-team@example.com) and any email content/subjects to match your QA process.
5. Ensure at least one baseline row in Baseline_Metrics is marked Reviewed=true so the workflow can compare the current run against an approved baseline.

## 🔗 Nodes Used

Google Sheets, Gmail, Filter, AI Agent, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
