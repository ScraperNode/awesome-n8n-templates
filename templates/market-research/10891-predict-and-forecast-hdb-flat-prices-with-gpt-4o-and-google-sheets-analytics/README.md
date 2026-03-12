# 📊 Predict and Forecast HDB Flat Prices with GPT-4o and Google Sheets Analytics

> ⚡ **81 views** · 📊 [Market Research & Insights](../)

## Description

## How It Works
The workflow runs on a monthly trigger to collect both current-year and multi-year historical HDB data. Once fetched, all datasets are merged with aligned fields to produce a unified table. The system then applies cleaning and normalization rules to ensure consistent scales and comparable values. After preprocessing, it performs pattern mining, anomaly checks, and time-series analysis to extract trends and forecast signals. An AI agent, integrating OpenAI GPT-4, statistical tools, and calculator nodes, synthesizes these results into coherent insights. The final predictions are formatted and automatically written to Google Sheets for reporting and downstream use.

## Setup Steps
1) Configure fetch nodes to pull current-year HDB data and three years of historical records.
2) Align and map column names across all datasets.
3) Set normalization and standardization parameters in the cleaning node.
4) Add your OpenAI API key (GPT-4) and link the model, forecasting tool, and calculator nodes.
5) Authorize Google Sheets and configure sheet and cell mappings for automated export.
 


## Prerequisites
- Historical data source with API access (3+ years of records)
- OpenAI API key for GPT-4 model
- Google Sheets account with API credentials
- Basic understanding of time series data

## Use Cases
**Real Estate:** Forecast property prices using multi-year historical HDB/market data with confidence intervals
**Finance:** Predict market trends by aggregating years of transaction or pricing records

## Customization
**Data Source:** Replace HDB/fetch nodes with stock prices, sensor data, sales records, or any historical dataset
**Analysis Window:** Adjust years fetched (2-5 years) based on data availability and prediction horizon


## Benefits
**Automation:** Monthly scheduling eliminates manual data gathering and analysis
**Consolidation:** Merges fragmented year-by-year data into unified historical view

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
