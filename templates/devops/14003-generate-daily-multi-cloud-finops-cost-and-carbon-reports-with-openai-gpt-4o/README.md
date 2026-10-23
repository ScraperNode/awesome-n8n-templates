# ⚙️ Generate daily multi-cloud FinOps cost and carbon reports with OpenAI GPT-4o

> ⚡ **218 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## How It Works
This workflow automates multi-cloud billing analysis and FinOps reporting using a supervised multi-agent AI architecture. It targets cloud finance teams, FinOps practitioners, DevOps leads, and CTOs seeking continuous visibility into cloud spend, resource waste, and carbon impact. A daily trigger fetches billing exports via HTTP and parses CSV data. A central Multi-Cloud Optimisation supervisor agent then coordinates four specialised sub-agents: a Resource Utilisation Analyser that identifies idle and over-provisioned assets, a Cost Optimisation Agent that surfaces savings opportunities across providers, a Carbon Footprint Analysis Agent that quantifies emissions per workload, and a FinOps Narrative Generator that produces human-readable financial commentary. Shared tools including a Financial Calculator and Advanced Analytics Code Tool support cross-agent computation. Results are parsed through a Structured Output Parser and formatted into a final consolidated report for stakeholder distribution.

## Setup Steps
1. Configure the HTTP GET node with your cloud provider.
2. Connect OpenAI credentials to all four sub-agent model nodes.
3. Link the Financial Calculator and Advanced Analytics Code Tool nodes  
4. Configure the Structured Output Parser schema to match your reporting fields.
5. Test end-to-end with a sample CSV billing export before activating the daily schedule.
## Prerequisites
- Cloud provider billing export URLs (AWS, GCP, Azure)
- n8n instance (v1.0+)
- HTTP access to billing APIs
- Report destination (email, Slack, or storage) configured
## Use Cases
- FinOps teams generating daily multi-cloud spend digests
## Customisation
- Add a Slack or email node to distribute the final report automatically
## Benefits
- Daily automation eliminates manual billing export and analysis effort

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
