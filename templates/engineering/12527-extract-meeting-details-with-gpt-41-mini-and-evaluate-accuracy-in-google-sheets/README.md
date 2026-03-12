# ⚒️ Extract meeting details with GPT-4.1-mini and evaluate accuracy in Google Sheets

> ⚡ **34 views** · ⚒️ [Engineering](../)

## Description

## Who's it for

Developers building AI-powered workflows who want to ensure their agents work reliably. If you need to validate AI outputs, test agent behavior systematically, or build maintainable automation, this template shows you how.

## What it does

This subworkflow extracts structured meeting details (title, date, time, location, links, attendees) from natural language messages using an AI agent. It demonstrates production-ready patterns:

- **Structured output validation**: JSON schema enforcement prevents malformed responses
- **Error handling**: Graceful failures with full execution traceability
- **Automated evaluation**: Test agent accuracy against expected outputs using Google Sheets
- **Dual execution modes**: Normal extraction + evaluation/testing mode

The AI resolves relative time ("tomorrow", "next Friday") using timezone context and handles incomplete data gracefully.

## How to set it up

1. Connect OpenAI API credential to the AI agent node
2. Copy the test data sheet: https://docs.google.com/spreadsheets/d/1U89nPsasM2WNv1D7gEYINhDwylyxYw7BOd_i8ipFC0M/edit?usp=sharing
3. Update Google Sheet IDs in `load_eval_data` and `record_eval_output` nodes
4. Test normal mode: Execute workflow "from trigger"
5. Test evaluation mode: Execute workflow "from load_eval_data"

## Requirements

- OpenAI API key
- Google Sheets OAuth credential


## Why subworkflow architecture?

**Reusability**: Wrap AI agents in subworkflows to call them from multiple parent workflows. Extract meetings from Slack, email, or webhooks—same agent, consistent results.

**Testability**: This pattern enables isolated testing for each AI component. Set up evaluation datasets, run automated tests, and validate accuracy before deploying to production. You can't do this easily with inline agents.

**Maintainability**: Update the agent logic once, and all parent workflows benefit. Error handling and validation are built-in, so failures are traceable with execution IDs.

**This framework includes**:
- Dual-trigger pattern (normal + evaluation modes)
- Output validation that catches silent AI failures
- Error bubbling with execution metadata for debugging
- Evaluation framework with semantic/exact matching
- Proper routing that returns output to parent workflows

## Following this pattern for other agents

To adapt this for any AI task (contact extraction, invoice processing, sentiment analysis, etc.):

1. Replace `extract_meeting_details` with your AI agent (add tools, memory, etc. as needed)
2. Update `Structured Output Parser` schema to match your data structure
3. Modify `evaluate_match` prompt for your validation criteria
4. Create test cases in Google Sheets with your inputs/expected outputs
5. Adjust `normalize_eval_data` timezone/reference time if needed

The validation, error handling, and evaluation infrastructure stays the same regardless of what your agent does.

## 🔗 Nodes Used

Stop and Error, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, Evaluation Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
