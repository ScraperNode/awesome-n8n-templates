# ⚒️ Explain pasted code and follow-up questions with GPT-4.1 and Slack

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives a code snippet via webhook, performs deterministic static analysis, uses an OpenAI chat model to generate a structured explanation and optional follow-up answer, then sends the final report to a Slack channel after an approval step.

## How it works
1. Receives a POST request to a webhook containing a code snippet plus optional language and focus question.
2. Detects the most likely programming language, extracts basic structure (such as function names), counts code/comment/blank lines, and estimates rough cyclomatic complexity.
3. Sends the code and computed metrics to an OpenAI chat model to produce a JSON explanation with a summary, selected line-by-line notes, complexity analysis, issues, and suggestions.
4. Parses the model’s JSON output, calculates a composite quality score from complexity and flagged issues, and builds a consolidated explanation report.
5. Pauses execution to allow the submitter to provide one follow-up question, and if provided, asks the OpenAI chat model again using a trimmed code excerpt around any referenced line number.
6. Pauses again for delivery confirmation and, if approved, posts the final explanation (and follow-up answer if present) to the configured Slack channel.

## Setup
1. Add an OpenAI (or compatible) credential for the OpenAI Chat Model used by both explanation and follow-up steps.
2. Add a Slack credential with permission to post messages and set or confirm the target channel name in the workflow configuration.
3. Update the webhook path as needed and configure your source app to POST the code payload (and optional language/focusQuestion) to the webhook URL.
4. Configure the two wait/resume webhook URLs in your UI or process to submit the optional follow-up question and to send the final delivery approval (sendApproved).

## 🔗 Nodes Used

Slack, Webhook, Discord, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
