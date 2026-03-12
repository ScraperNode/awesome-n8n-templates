# 🎣 Qualify and route sales leads with Mistral-Saba AI and MCDM scoring

> ⚡ **37 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How It Works
The workflow starts with a scheduled trigger that activates at set intervals. Behavioral data from multiple sources is parsed and sent to the MCDN routing engine, which intelligently assigns leads to the right teams based on predefined rules. AI-powered scoring evaluates each prospect’s potential, ensuring high-quality leads are prioritized. The results are synced to the CRM, and updates are reflected on an analytics dashboard for real-time visibility.

## Setup Steps
1. **Trigger:** Define schedule frequency.
2. **Data Fetch:** Configure APIs for all behavioral data sources.
3. **MCDN Router:** Set routing rules, thresholds, and team assignments.
4. **AI Models:** Connect OpenAI/NVIDIA APIs and configure scoring prompts.
5. **CRM Integration:** Enter credentials for Salesforce, HubSpot, or other CRMs.
6. **Dashboard:** Link to analytics tools like Tableau or Google Sheets for reporting.

## Prerequisites
API credentials: NVIDIA AI, OpenAI, CRM platform; data sources; spreadsheet/analytics access

## Use Cases
Lead prioritization for sales teams; customer segmentation; automated routing; 

## Customization
Adjust routing rules, add custom scoring models, modify team assignments, expand data sources, integrate additional AI providers

## Benefits
Reduces manual lead routing 90%; improves scoring accuracy; accelerates sales cycle; enables data-driven team assignments;

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Code Tool, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
