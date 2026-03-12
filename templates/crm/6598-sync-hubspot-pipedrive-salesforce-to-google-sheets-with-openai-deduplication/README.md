# 🤝 Sync HubSpot, Pipedrive & Salesforce to Google Sheets with OpenAI deduplication

> ⚡ **313 views** · 🤝 [CRM & Sales Operations](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works

This workflow automatically synchronizes contact data from multiple CRM systems (HubSpot, Pipedrive, and Salesforce) into a unified Google Sheets database. The system runs on a daily schedule or can be triggered manually via webhook. It uses AI-powered data processing to intelligently deduplicate records, calculate data quality scores, and merge similar contacts. The workflow generates comprehensive quality reports and sends notifications via Slack, ensuring your master database stays clean and up-to-date.

## Who is this for

This template is designed for revenue operations teams, data managers, and business analysts who need to consolidate customer data from multiple CRM platforms. It's particularly valuable for organizations using multiple sales tools simultaneously or during CRM migration projects. The workflow helps maintain data integrity while providing insights into data quality across different systems.

## Requirements

- **Google Sheets Account**: For storing master database and quality reports
- **CRM Platform Access**: API credentials for HubSpot, Pipedrive, and/or Salesforce
- **OpenAI API Key**: For AI-powered data processing and deduplication
- **MCP Server**: Github:marlonluo2018/pandas-mcp-server (optional - can be replaced with Code node)
- **Slack Webhook**: For receiving sync completion and error notifications


## How to set up

1. **Configure Environment Variables** - Set up secure credential storage for all API keys: HUBSPOT_API_KEY, PIPEDRIVE_API_KEY, SALESFORCE_ACCESS_TOKEN, OPENAI_API_KEY, and SLACK_WEBHOOK_URL

2. **Create Google Sheets Structure** - Create a master Google Sheet with two tabs: "Master_CRM_Data" for the unified contact database and "Quality_Reports" for tracking sync statistics and data quality metrics

3. **Set Up MCP Server** - Install and configure "marlonluo2018/pandas-mcp-server" 

4. **Update Configuration Center** - Modify all placeholder values in the Configuration Center node with your actual Google Sheet IDs, quality thresholds, deduplication keys, and batch processing settings

## 🔗 Nodes Used

Google Sheets, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
