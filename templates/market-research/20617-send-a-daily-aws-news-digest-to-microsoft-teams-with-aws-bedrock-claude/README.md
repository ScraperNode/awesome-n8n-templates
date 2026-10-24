# 📊 Send a daily AWS news digest to Microsoft Teams with AWS Bedrock Claude

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to read the AWS What’s New RSS feed, uses AWS Bedrock (Anthropic Claude) to score and summarize announcements against your AWS service list (optionally enriched via AWS Cost Explorer), and posts a grouped Adaptive Card digest to Microsoft Teams via a Workflows webhook.

## How it works
1. Runs every day at 9:00 AM on a schedule.
2. Loads configuration such as the Microsoft Teams Workflows webhook URL, your AWS region, your service list, and digest thresholds.
3. Optionally calls the AWS Cost Explorer API to collect recently billed AWS services and merges them with your manual service list.
4. Reads the AWS What’s New RSS feed and keeps only announcements published within the configured lookback window.
5. Sends each recent announcement to AWS Bedrock (Anthropic Claude) to identify the service, assign a relevance score, and generate a short summary, benefit, suggested next steps, and region availability.
6. Validates AI matches against your service list, groups items into “Action needed” and “Relevant to you,” and builds a Microsoft Teams Adaptive Card (or skips posting if nothing is relevant).
7. Posts the final digest card to Microsoft Teams using the configured Workflows webhook.

## Setup
1. Create a Microsoft Teams Workflows incoming webhook (for a chat or channel) and paste its URL into the workflow configuration.
2. Update the configuration values for `my_services`, `my_region`, and any digest options (lookback window, relevance threshold, and whether to post on quiet days).
3. Add an AWS Bedrock credential/connection (Anthropic Claude chat model) for generating the announcement assessments.
4. Optional: enable Cost Explorer in the configuration and add an AWS (Assume Role) credential with `ce:GetCostAndUsage` permissions to fetch billed services.
5. Adjust the schedule time and timezone in n8n, run the workflow once to verify the Teams message, then activate it.

## Requirements
- An AWS account with Amazon Bedrock access to an Anthropic Claude model, or any other chat model supported by n8n
- On Bedrock: the aws-marketplace:ViewSubscriptions and aws-marketplace:Subscribe IAM permissions to enable Anthropic models on first use
- A Microsoft Teams chat or channel with a Workflows webhook ("Send webhook alerts to a chat" template)
- Optional: an AWS (Assume Role) credential with ce:GetCostAndUsage, ideally in your management (payer) account, to detect your services from Cost Explorer

## Customization
- Edit my_services and my_region in Set AWS and Teams Config to match your stack
- Set use_cost_explorer to true to add every service you were billed for in the last 30 days automatically
- Raise or lower min_relevance (1-3) to see more or fewer announcements
- Change the schedule and lookback_hours together, e.g. weekly with 168 hours
- Set post_when_nothing_relevant to true to get a message even on quiet days
- Swap the chat model for OpenAI, Gemini or any other model; a small, fast model is enough
- Edit the prompt in Relevance Analysis Agent to change the writing style or the summary language

## Additional info
In Teams, send at least one message in the target chat before selecting it in the Workflows template; otherwise posts fail with a "LocationLookupFailed" error. Each Cost Explorer API request costs USD 0.01 (one request per run). If the Cost Explorer call fails, the workflow continues with your manual service list and notes the reason in the digest footer. The AI only explains and scores the announcements; a Code node checks every match against your service list, so news about services you don't use is never marked as relevant.

## 🔗 Nodes Used

HTTP Request, RSS Read, Schedule Trigger, Basic LLM Chain, Structured Output Parser, AWS Bedrock Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
