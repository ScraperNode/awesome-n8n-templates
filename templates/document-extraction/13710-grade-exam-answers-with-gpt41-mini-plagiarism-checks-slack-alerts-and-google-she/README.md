# 🔬 Grade exam answers with GPT‑4.1 mini, plagiarism checks, Slack alerts and Google Sheets logging

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow streamlines academic assessment through a multi-agent AI system that interprets rubrics, grades submissions, checks for plagiarism, performs quality moderation, generates feedback, and escalates borderline cases. Designed for educators and assessment administrators, it reduces inconsistencies in manual marking while embedding integrity checks into every evaluation cycle. A manual trigger retrieves student answers and rubrics, which are first structured before being sent to a Primary Marker Agent. If integrity concerns arise, a Plagiarism Analysis Agent runs in parallel. Results are consolidated and reviewed by a Quality Moderator Agent, followed by a Feedback Generator. Borderline cases are routed to a Secondary Marker Agent, while approved outcomes proceed to escalation preparation, Slack notifications, statistics computation, final consolidation, and logging in Google Sheets.

## Setup Steps
1. Configure manual trigger and connect student answer and rubric data sources.
2. Add OpenAI API credentials to all OpenAI Chat Model nodes.
3. Define moderation thresholds in the Route by Moderation Decision rules node.
4. Configure Slack credentials and set escalation alert channel.
5. Set plagiarism sensitivity thresholds in the Plagiarism Analyser Agent node.

## Prerequisites
- Google Sheets with service account credentials
- Student answer and rubric data source (API or spreadsheet)
## Use Cases
- Automated essay and short-answer marking for university assessments
## Customization
- Replace OpenAI with Anthropic Claude for marking and moderation agents
## Benefits
- Automates end-to-end marking with built-in plagiarism and moderation checks

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
