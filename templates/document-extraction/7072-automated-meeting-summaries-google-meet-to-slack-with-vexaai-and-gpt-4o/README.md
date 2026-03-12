# 🔬 Automated meeting summaries: Google Meet to Slack with Vexa.ai and GPT-4o

> ⚡ **885 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Automated Meeting Bot: Google Meet → AI Summary → Slack

## How it works
Automatically joins Google Meet calls, transcribes conversations, and posts AI-generated summaries to Slack - completely hands-free meeting notes for busy teams.

The workflow triggers when a Google Meet starts in your calendar, joins the meeting with a bot, waits for completion, then generates and posts a structured summary to your Slack channel.

## Set up steps
* Connect Google Calendar API for meeting detection
* Set up Vexa.ai account and obtain API key for meeting bot functionality  
* Configure OpenAI API credentials for AI-powered summarization
* Create Slack bot token and add to desired channel
* Update calendar ID and Slack channel in workflow settings
* Test with a sample meeting to verify end-to-end functionality

Keep detailed descriptions in sticky notes inside your workflow for easy configuration and troubleshooting.

## 🔗 Nodes Used

HTTP Request, Slack, Google Calendar Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
