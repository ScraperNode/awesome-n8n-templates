# 🔒 Extract actionable security insights from HackerOne reports with Google Gemini

> ⚡ **773 views** · 🔒 [SecOps & Security Automation](../)

## Description

A streamlined AI-powered tool that extracts actionable technical insights from HackerOne security reports for advanced bug bounty hunters.

## How It Works
Send any HackerOne report URL (e.g., https://hackerone.com/reports/123456) to the chat interface. The AI agent will:

1. Fetch the report JSON automatically
2. Analyze for unique techniques, payloads, and root causes
3. Extract reusable insights in a structured format
Summarize with practical pentesting value

## Setup Requirements

1. Google Gemini API credentials configured
2. Chat interface deployed and accessible
3. HackerOne report URLs

## Output Format

1. Summary: One-liner impact statement
2. Techniques: Payloads, code snippets, exploitation steps
3. Pro Tips: Reusable insights for future hunts

Perfect for rapid triage and building your personal exploit knowledge base.

## 🔗 Nodes Used

AI Agent, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
