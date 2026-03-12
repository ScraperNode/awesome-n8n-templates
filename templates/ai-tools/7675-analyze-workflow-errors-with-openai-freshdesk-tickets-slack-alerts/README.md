# 🎯 Analyze workflow errors with OpenAI, FreshDesk tickets & Slack alerts

> ⚡ **164 views** · 🎯 [AI Summarization & Classification](../)

## Description

### Automatically analyze n8n workflow errors with AI, create support tickets, and send detailed Slack notifications

Perfect for development teams and businesses that need intelligent error handling with automated support workflows. Never miss critical workflow failures again!

### How it works
* Error Trigger captures any workflow failure in your n8n instance
* AI Debugger analyzes the error using structured reasoning to identify root causes
* Clean Data transforms AI analysis into organized, actionable information
* Create Support Ticket automatically generates a detailed ticket in FreshDesk
* Merge combines ticket data with AI analysis for comprehensive reporting
* Generate Slack Alert creates rich, formatted notifications with all context
* Send to Team delivers instant alerts to your designated Slack channel

### How to use
* Replace FreshDesk credentials with your helpdesk system API
* Configure Slack channel for your team notifications
* Customize AI analysis prompts for your specific error types
* Set up as global error handler for all your critical workflows

### Requirements
* FreshDesk account (or compatible ticketing system)
* Slack workspace with bot permissions
* OpenAI API access for AI analysis
* n8n Cloud or self-hosted with AI nodes enabled

### Good to know
* OpenAI API calls cost approximately $0.01-0.03 per error analysis
* Works with any ticketing system that supports REST API
* Can be triggered by webhooks from external monitoring tools
* Slack messages use rich formatting for mobile-friendly alerts

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Monitoring!

## 🔗 Nodes Used

HTTP Request, Slack, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
