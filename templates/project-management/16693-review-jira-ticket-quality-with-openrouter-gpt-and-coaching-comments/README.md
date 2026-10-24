# 📋 Review Jira ticket quality with OpenRouter GPT and coaching comments

> ⚡ **590 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow triggers on new Jira Cloud issues (Story, Bug, or Task), uses OpenRouter (OpenAI model) to score ticket quality across five criteria, and posts an automated coaching comment back to Jira only when the ticket falls below a configurable threshold.

## How it works
1. Triggers when a new Jira issue is created that matches the selected issue types (Story, Bug, Task).
2. Sets a configurable quality score threshold used to decide whether the ticket needs feedback.
3. Sends the ticket’s type, title, description, and reporter details to an OpenRouter-hosted OpenAI chat model to generate a structured quality evaluation JSON.
4. Parses and validates the model response as JSON and extracts the normalized score, missing criteria, and coaching comment.
5. Checks whether the normalized score is below the configured threshold.
6. If the score is below threshold, adds a formatted coaching comment to the Jira issue; otherwise, it takes no action.

## Setup
1. Add Jira Software Cloud credentials in n8n and ensure the Jira Trigger can receive issue-created events for your Jira Cloud site.
2. Add an OpenRouter API credential for the OpenRouter chat model used to evaluate ticket quality.
3. Set the SCORE_THRESHOLD value to your desired cutoff (default is 7) and confirm which Jira issue types the trigger should monitor.

## Requirements
- Jira credential configured in n8n (email + API token +Domain)
- OpenRouter credential configured in n8n

## Customization
- Adjust the quality threshold in the Config node (default: 7/10)
- Change the LLM in the Open AI Quality Checker sub-node (default: openai/gpt-oss-120b:free)
- Edit the 5 scoring criteria or their weights in the Quality Checker Agent system prompt
- Add or remove ticket types in the Jira Trigger filter (default: Story, Bug, Task)
- Customize the coaching comment tone and format in the Add a comment node

## Additional info
This workflow uses a coaching tone by design — it helps ticket authors 
improve rather than rejecting their work, which makes it adoptable in 
real teams without friction.

Well-written tickets (score ≥ threshold) receive no comment, so the 
backlog stays clean and the bot never feels spammy.

The 5 criteria adapt to ticket type: bugs are evaluated on reproduction 
steps, while stories are evaluated on user scenarios. Edit the system 
prompt to match your team's Definition of Ready.

## 🔗 Nodes Used

Jira Software, Jira Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
