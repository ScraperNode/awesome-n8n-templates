# 📊 Generate multi-agent AI research reports with OpenAI and Google Sheets

> ⚡ **202 views** · 📊 [Market Research & Insights](../)

## Description

This workflow deploys multiple independent AI research agents that work in parallel, critique each other's findings, and synthesize a unified high-quality final report.

### Who's it for
• Researchers needing comprehensive topic coverage
• Teams conducting competitive analysis or due diligence
• Analysts synthesizing multi-perspective reports
• Anyone needing validated, cross-checked AI research

### How it works / What it does
1. Accepts a research topic via webhook or manual trigger
2. Splits the topic into 3 parallel sub-tasks for specialized agents
3. Agent A: Factual / data-driven research
4. Agent B: Trend & future outlook research
5. Agent C: Critical / risk & counterargument research
6. Critique phase: each agent reviews the others' findings
7. Synthesis agent merges all validated findings
8. Final report formatted and delivered via webhook response + Google Sheet log

### How to set up
1. Import this workflow
2. Set up credentials (OpenAI, Google Sheets)
3. Replace YOUR_SHEET_ID in the tracker node
4. Activate workflow and POST to the webhook URL

### Requirements
• OpenAI API key (or swap model node for Anthropic/Grok)
• Google Sheets (for logging)
• n8n instance (cloud or self-hosted)

### How to customize the workflow
• Change agent personas in each AI node prompt
• Add more parallel agents by duplicating agent branches
• Swap OpenAI model for Claude via Anthropic credentials
• Adjust synthesis depth in the final AI node

Need a powerful, customized workflow to improve efficiency? Our team can create it for you in no time—[Get in touch with our team](https://www.oneclickitsolution.com/contact-us/)

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
