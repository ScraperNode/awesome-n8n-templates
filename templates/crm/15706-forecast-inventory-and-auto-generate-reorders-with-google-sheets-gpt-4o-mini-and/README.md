# 🤝 Forecast inventory and auto-generate reorders with Google Sheets, GPT-4o mini and Slack

> ⚡ **102 views** · 🤝 [CRM & Sales Operations](../)

## Description

How it works

Fetches sales history and current inventory from Google Sheets in parallel, then calculates days of stock remaining, average daily sales velocity, and projected stockout dates for every product![PICC.png](fileId:6265)
An AI agent (GPT-4o mini) analyzes the snapshot and generates a structured forecast report covering critical alerts, reorder priorities, demand trends, and supply chain risk flags
Routes critical stock alerts to Slack instantly, generates purchase orders for all flagged items, and logs the full forecast summary back to Google Sheets

Set up steps

Connect Google Sheets OAuth2, add your spreadsheet ID in Set Forecast Configuration, and ensure your sheet has Sales_History, Current_Inventory, and Forcast_Analysis tabs (~5 min)
Add your OpenAI API key and connect your Slack workspace, then point the alert node to your preferred channel (~5 min)

## 🔗 Nodes Used

Google Sheets, Slack, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
