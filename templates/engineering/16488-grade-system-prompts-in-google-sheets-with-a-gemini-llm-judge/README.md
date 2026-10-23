# ⚒️ Grade system prompts in Google Sheets with a Gemini LLM judge

> ⚡ **19 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow manually grades a system prompt by running it against a sample user task with Google Gemini, then has a second Gemini judge score the prompt (1–10) and write the grade and reason back to Google Sheets.

## How it works
1. Starts when you run the workflow manually.
2. Reads the prompt list from a Google Sheets spreadsheet and keeps only the last row as the system prompt under test.
3. Sets a fixed sample customer-support task and sends it to a Google Gemini-powered agent using the sheet prompt as its system instructions.
4. Sends the original prompt, the sample task, and the agent’s response to a second Google Gemini judge that returns a structured grade and short justification.
5. Updates the same Google Sheets row with the returned grade and reason.

## Setup
1. Connect a Google Sheets OAuth2 credential with access to the target spreadsheet.
2. Connect a Google AI Studio (Gemini) credential for the candidate model, grader model, and parser-fixer model.
3. Ensure your sheet has columns for at least `prompt`, `grade`, and `reason`, and that the workflow can match rows using the `row_number` field.
4. Update the spreadsheet ID/sheet and edit the sample task text if you want to test prompts against a different scenario.

## 🔗 Nodes Used

Google Sheets, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
