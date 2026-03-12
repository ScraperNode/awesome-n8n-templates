# ⚒️ MCP employee performance & productivity insights engine with automated manager

> ⚡ **119 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates performance monitoring by aggregating data from PM tools, code repositories, meeting logs, and CRM systems. It processes team metrics using AI-powered analysis via OpenAI, identifies bottlenecks and workload issues, then creates manager follow-ups and tasks. The system runs weekly, collecting 4 data sources, combining them, analyzing trends, evaluating team capacity, and routing alerts to managers via Gmail. Managers receive structured summaries highlighting performance gaps and required actions. Target audience: Engineering managers and team leads monitoring team velocity, code quality, and capacity planning.

## Setup Steps
1. Configure credentials: PM Tool API key, Code Repo token, and CRM API key.
2. Set the OpenAI API key.
3. Connect your Gmail account via OAuth.
4. In the Workflow Configuration node, adjust API endpoints and polling intervals.
5. Map data field names to match your tools.
6. Test data fetch nodes using sample queries before deployment.

## Prerequisites
PM tool API access, GitHub/GitLab token, CRM credentials, OpenAI API key, Gmail OAuth connection 

## Use Cases
Track engineering team productivity weekly; identify code review bottlenecks;  

## Customization
Replace PM tool with Jira/Linear; swap OpenAI for Claude/Gemini;  

## Benefits
Reduces manual performance tracking by 6+ hours weekly; provides real-time visibility into team capacity;

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
