# 📊 Research web content with Claude Opus 4.7 and Bright Data to post Slack reports

> ⚡ **76 views** · 📊 [Market Research & Insights](../)

## Description

## How it works

- A form collects a research goal and target audience from the user
- An AI agent (Claude Opus 4.7) plans the research and calls Bright Data's Web Unlocker to scrape Google results and source pages — handling JS, CAPTCHAs and geo-blocks
- The agent synthesizes findings into a structured Slack-ready report
- The report is posted to a Slack channel (or any destination you swap in)

## Set up steps

- Setup time: ~5 minutes
- Connect your Bright Data, Anthropic and Slack credentials
- Select your Slack channel in the output node
- Activate the workflow and open the form URL

See the sticky notes inside the workflow for details on how to customize the trigger, LLM or output destination.

## 🔗 Nodes Used

Slack, AI Agent, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
