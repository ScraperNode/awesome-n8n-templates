# 📊 Analyze real estate submarket opportunities with GPT-4, MLS, Gmail and Slack

> ⚡ **206 views** · 📊 [Market Research & Insights](../)

## Description

## How It Works
This workflow automates end-to-end real estate investment analysis by aggregating data from multiple sources and applying AI-driven evaluation. It is designed for real estate investors, analysts, and portfolio managers seeking data-backed decisions without manual research overhead. The solution addresses the time-consuming challenge of collecting and analyzing fragmented real estate data—such as MLS listings, public records, demographic trends, and macroeconomic indicators—and transforms it into actionable insights using AI. Data is collected in parallel across four streams: MLS property data, public records, demographic information, and macroeconomic signals. These streams are consolidated into a unified dataset and processed by OpenAI GPT-4, using calculator tools and structured output parsing for quantitative analysis.
 
## Setup Steps
1. Configure HTTP nodes with your MLS API, public records service 
2. Add OpenAI API key in Chat Model node credentials
3. Connect Gmail account for acquisition team notifications
4. Integrate Slack workspace and specify investor notification channel
5. Set schedule trigger frequency in Schedule node for desired analysis cadence

## Prerequisites
OpenAI API key, MLS data service access, public records API credentials

## Use Cases
Real estate investment firms screening multiple markets simultaneously

## Customization
Modify AI prompts to adjust investment criteria priorities, add custom financial metrics 

## Benefits
Reduces investment analysis time from hours to minutes, eliminates manual data aggregation errors

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
