# ⚒️ Govern energy portfolios with GPT-4o, Perplexity, Slack, Gmail and Sheets

> ⚡ **54 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates energy portfolio governance for energy managers, sustainability teams, and policy compliance officers. It eliminates the manual effort of aggregating multi-source energy data, applying forecasting and optimisation logic, and distributing performance outcomes to stakeholders. Three scheduled API feeds, weather data, energy demand, and renewable generation, are combined into a unified dataset. The Energy Governance Agent, backed by shared memory and a governance model, coordinates three specialist agents: a Renewable Forecasting Agent (predictive generation modelling), a Weather Analysis Agent (climate-adjusted demand assessment), and a Policy Compliance Agent (regulatory alignment checking). Five tools support the orchestration: an Energy Calculator, Optimisation Algorithm Tool, External Data API Tool, Sustainability Research Tool, and Structured KPI Output parser. Results are distributed across three outputs, a Slack sustainability alert, a Gmail performance dashboard email, and a Google Sheets KPI store, giving stakeholders immediate, channel-appropriate visibility into energy governance outcomes.

## Setup Steps
1. Import workflow; configure the Energy Analysis Schedule trigger interval.
2. Set API endpoint URLs for Fetch Weather Data, Fetch Energy Demand, and Fetch Renewable Generation nodes.
3. Add AI model credentials to the Agents.
4. Connect Slack credentials to the Send Sustainability Alert node.
5. Link Gmail credentials to the Email Performance Dashboard node.
6. Link Google Sheets credentials; set the sheet ID for the Energy KPIs tab.

## Prerequisites
- OpenAI API key (or compatible LLM)
- Slack workspace with bot credentials
- Gmail account with OAuth credentials
- Google Sheets with Energy KPIs tab pre-created
## Use Cases
- Energy managers automating renewable generation forecasting against real-time demand data
## Customisation
- Swap the Optimisation Algorithm Tool parameters to target carbon intensity, cost, or grid stability objectives
## Benefits
- Parallel triple-source ingestion ensures governance decisions are based on complete, synchronised energy data

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
