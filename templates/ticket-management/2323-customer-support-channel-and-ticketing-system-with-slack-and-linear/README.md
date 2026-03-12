# 🎫 Customer Support Channel and Ticketing System with Slack and Linear

> ⚡ **8,160 views** · 🎫 [Ticket Management & Triage](../)

## Description

This n8n workflow demonstrates how to create a really simple yet effective customer support channel and pipeline by combining Slack, Linear and AI tools.

Built on n8n's ability to integrate anything, this workflow is intended for small support teams who want to maximise re-use of the tools they already have with an interface which is doesn't require any onboarding.

**Read the blog post here**: [https://blog.n8n.io/automated-customer-support-tickets-with-n8n-slack-linear-and-ai/](https://blog.n8n.io/automated-customer-support-tickets-with-n8n-slack-linear-and-ai/)

## How it works
* The workflow is connected to a slack channel setup with the customer to capture support issues.
* Only messages which are tagged with a "✅" reaction are captured by the workflow. Messages are tagged by the support team in the channel.
* Each captured support issue is sent to the AI model to classify, prioritise and rewrite into a support ticket.
* The generated support ticket is uploaded to Linear for the support team to investigate and track.
* Support team is able to report back to the user via the channel when issue is fixed.

## Requirements
* Slack channel to be monitored
* Linear account and project

## Customising this workflow

Don't have Linear? This workflow can work just as well with traditional ticketing systems like JIRA.

## 🔗 Nodes Used

Slack, Linear, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
