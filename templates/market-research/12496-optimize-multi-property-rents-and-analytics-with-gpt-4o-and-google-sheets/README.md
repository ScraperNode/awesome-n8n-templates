# 📊 Optimize multi-property rents and analytics with GPT-4o and Google Sheets

> ⚡ **80 views** · 📊 [Market Research & Insights](../)

## Description

## How It Works
This workflow automates comprehensive real estate investment analysis by orchestrating specialized AI agents to evaluate property data, market trends, and financial metrics. Designed for real estate investors, portfolio managers, and property analysts managing multiple properties or evaluating acquisition opportunities, it eliminates the manual research and analysis that typically requires days of work across multiple data sources. The system aggregates data from real estate APIs, market databases, and local statistics, then deploys specialized agents: performance analysis evaluates ROI and cash flow, recommendation engines identify optimal properties, market analysis assesses location trends, sentiment analysis mines reviews and local feedback, and workflow tools calculate financial projections. An orchestrator coordinates these agents to generate consolidated investment reports with property rankings, risk assessments, and portfolio recommendations. Results populate Google Sheets dashboards and trigger email notifications, transforming weeks of analysis into automated insights delivered in hours.

## Setup Steps
1. Configure real estate API credentials (Zillow/Realtor.com) 
2. Add market data API keys for local statistics and demographics
3. Input NVIDIA API keys for all OpenAI Model nodes  
4. Set OpenAI API key in Team Collaboration Agent/Orchestrator
5. Configure Calculator Tool parameters for financial projections
6. Connect Google Sheets and specify portfolio tracking spreadsheet ID
7. Set up Gmail credentials and specify recipient addresses for reports

## Prerequisites
NVIDIA API access, OpenAI API key, real estate data API subscriptions 
## Use Cases
Multi-property portfolio analysis, acquisition opportunity screening.
## Customization
Adjust investment criteria thresholds, add custom financial metrics 
## Benefits
Reduces analysis time by 90%, evaluates unlimited properties simultaneously

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
