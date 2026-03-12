# 📊 Create AI intelligence briefs from newsletters with Gemini, Slack, and Notion

> ⚡ **377 views** · 📊 [Market Research & Insights](../)

## Description

This n8n template automatically processes your industry newsletters and creates AI-powered intelligence briefs that filter signal from noise. Perfect for busy professionals who need to stay informed without information overload, it delivers structured insights directly to Slack while optionally saving content questions to Notion.
## Who's it for
Busy executives, product managers, and content creators at growing companies who subscribe to multiple industry newsletters but lack time to read them all. Ideal for teams that need to spot trends, generate content ideas, and share curated insights without drowning in information.
## How it works
The workflow runs daily to fetch labeled emails from Gmail, combines all newsletter content, and sends it to an AI agent for intelligent analysis. The AI filters developments through your specific business lens, identifies only operationally relevant insights, and generates thought-provoking questions for content creation. Results are formatted as rich Slack messages using Block Kit, with optional Notion integration for tracking content ideas.
## Requirements
- Gmail account with newsletter labeling system
- OpenRouter API key for AI analysis (costs approximately $0.01-0.05 per run) or API key for a specific LLM
- Slack workspace with bot permissions for message posting
- Notion account with database setup (optional, for content question tracking)
- Perplexity API key (optional, for additional AI research capabilities)

## How to set up
1 Connect your Gmail, OpenRouter, and Slack credentials through n8n's secure credential system.
2. Create a Gmail label for newsletters you want analyzed and setup in the "Get Labeled Newsletters" node.
3. Update the Slack channel ID in the "Send to Slack" node.

The template comes pre-configured with sample settings for tech companies, so you can run it immediately after credential setup.

## How to customize the workflow
- Edit the "Configuration" node to match your industry and audience - change the 13 pre-defined fields including target audience, business context, relevance filters, and content pillars.
- Adjust the cron expression in the trigger node for your timezone.
- Modify the Slack formatting code to change output appearance, or add additional destination nodes for email, Teams, or Discord. 
- Remove Notion nodes if you only need Slack output.

The AI analysis framework is fully customizable through the Configuration node, allowing you to adapt from the default tech company focus to any industry including healthcare, finance, marketing, or consulting.

## 🔗 Nodes Used

Slack, Gmail, Notion, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
