# 👥 Orchestrate AI-driven hiring analytics and candidate assessment with GPT-4, Claude, Google Sheets, Gmail and Slack

> ⚡ **37 views** · 👥 [HR & Recruitment](../)

## Description

## How It Works
This workflow automates end-to-end recruitment operations for HR teams, talent acquisition specialists, and hiring managers facing high-volume candidate processing challenges. It solves the critical problem of manual interview coordination, inconsistent candidate evaluation, and scattered assessment data across multiple platforms.The system orchestrates a seamless pipeline: triggers initiate workflow execution, configuration nodes prepare analytics parameters, and Former Analytics Agent structures the evaluation framework. The Orchestration Agent intelligently routes candidates through specialized AI assessment modules—including sourcing verification, simulated interviews, and competency evaluation—each powered by different AI models (OpenAI GPT-4, Claude) optimized for specific assessment criteria. Consolidated insights automatically populate Google Sheets for centralized tracking, while Gmail notifications keep stakeholders informed. Critical alerts route to HR teams via Slack integration, ensuring immediate visibility into high-priority candidates and assessment bottlenecks, dramatically reducing time-to-hire while improving evaluation consistency.

## Setup Steps
1. Configure OpenAI API key for GPT-4 powered candidate sourcing and interview agents
2. Link Anthropic Claude API for competency assessment modules
3. Authorize Google Sheets access and specify target spreadsheet/worksheet for candidate data
4. Set up Gmail integration with sender email and recipient distribution lists
5. Connect Slack workspace and configure target channel for priority notifications
6. Customize assessment criteria in Former Analytics Agent node based on role requirements

## Prerequisites
Developer account with API access, OpenAI API key (GPT-4 enabled)
## Use Cases
High-volume technical recruitment campaigns requiring standardized assessment frameworks
## Customization
Modify AI agent prompts to align with specific role competencies
## Benefits
Reduces time-to-hire by 60% through parallel AI assessments

## 🔗 Nodes Used

Send Email, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
