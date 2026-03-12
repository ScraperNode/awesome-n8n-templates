# 🔬 Automate peer review assignments with GPT-4-nano, Slack and email notifications

> ⚡ **47 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Introduction
Automate peer review assignment and grading with AI-powered evaluation. Designed for educators managing collaborative assessments efficiently.
## How It Works
Webhook receives assignments, distributes them, AI generates review rubrics, emails reviewers, collects responses, calculates scores, stores results, emails reports, updates dashboards, and posts analytics to Slack.
## Workflow Template
Webhook → Store Assignment → Distribute → Generate Review Rubric → Notify Slack → Email Reviewers → Prepare Response → Calculate Score → Store Results → Check Status → Generate Report → Email Report → Update Dashboard → Analytics → Post to Slack → Respond to Webhook
## Workflow Steps
1. Receive & Store: Webhook captures assignments, stores data.
2. Distribute & Generate: Assigns peer reviewers, AI creates rubrics.
3. Notify & Email: Alerts via Slack, sends review requests.
4. Collect & Score: Gathers responses, calculates peer scores.
5. Report & Update: Generates reports, emails results, updates dashboard.
6. Analyze & Alert: Posts analytics to Slack, confirms completion.
## Setup Instructions
1. Webhook & Storage: Configure endpoint, set up database.
2. AI Configuration: Add OpenAI key, customize rubric prompts.
3. Communication: Connect Gmail, Slack credentials.
4. Dashboard: Link analytics platform, configure metrics.
## Prerequisites
- OpenAI API key
- Gmail account
- Slack workspace
- Database or storage system
- Dashboard tool
## Use Cases
- University peer review assignments
- Corporate training evaluations
- Research paper assessments
## Customization
- Multi-round review cycles
- Custom scoring algorithms
## Benefits
- Eliminates manual distribution
- Ensures consistent evaluation

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Slack, Webhook, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
