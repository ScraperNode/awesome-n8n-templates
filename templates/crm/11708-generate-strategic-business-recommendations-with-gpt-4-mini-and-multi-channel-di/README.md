# 🤝 Generate strategic business recommendations with GPT-4 Mini and multi-channel distribution

> ⚡ **124 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How It Works
Automates sales data analysis and strategic insight generation for sales managers and strategists needing actionable intelligence. Fetches multi-source data from sales, marketing, and financial systems, validates data quality to prevent errors, applies advanced AI analysis via OpenAI to identify market trends and patterns, calculates comprehensive KPIs for performance measurement, generates prioritized recommendations, and automatically distributes detailed insights via Gmail alerts and Google Sheets dashboards—eliminating time-consuming manual analysis overhead.

## Setup Instructions
1. **OpenAI API**: Add key via credentials
2. **Gmail**: Authorize account for email delivery
3. **Google Sheets**: Connect for dashboard logging
4. **Schedule**: Set monthly trigger timing
5. **Modify data sources**: Replace fetch nodes with your APIs

## Prerequisites
OpenAI API key, Gmail account with send permissions, Google Sheets access, n8n instance, source data APIs (sales, marketing, financial systems).

## Use Cases
E-commerce platforms analyzing sales trends; SaaS companies generating strategy reports; multi-channel retailers routing recommendations; 


## Customization
Add data sources via fetch nodes; swap OpenAI for Claude or Gemini; modify routing logic for different priority thresholds; 

## Benefits
Reduces analysis time from hours to minutes. Eliminates manual report crea

## 🔗 Nodes Used

Asana, Google Sheets, HTTP Request, Postgres, Slack, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
