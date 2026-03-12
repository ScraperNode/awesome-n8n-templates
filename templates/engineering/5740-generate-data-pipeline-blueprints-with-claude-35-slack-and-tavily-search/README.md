# ⚒️ Generate data pipeline blueprints with Claude 3.5, Slack, and Tavily Search

> ⚡ **312 views** · ⚒️ [Engineering](../)

## Description

## Architecture Agent

## Overview
The Architect Agent listens to Slack messages and generates full data architecture blueprints in response. Powered by Claude 3.5 (Anthropic) for reasoning and design, and Tavily for real-time web search, this agent creates production-ready data pipeline scaffolds on-demand — transforming natural language prompts into structured data engineering solutions.

## Capabilities
- Understands and interprets user requests from Slack
- Designs end-to-end data pipelines architectures using industry best practices.
- Outputs include High-level architecture diagrams

## Required Connections
To operate correctly, the following integrations must be in place:
- Slack API Token with permission to read messages and post responses
- Tavily API Key for external search functionality
- Claude 3.5 API Access via Anthropic

*Detailed configuration instructions are provided in the workflow*

## Setup time 
&lt;15 minutes

## Example input:
"Create a data pipeline orchestrated by Airflow, running on a Docker image. It should connect to a MySQL database, load in the data into a PostgreSQL DB (incremental load) and then transform the data into business-oriented tables also in the PostgreSQL database. Create an example setup with raw sales data."

## Customising this workflow
Try saving outputs to Google Drive to store all your architecture blueprints

## 🔗 Nodes Used

Slack, AI Agent, Anthropic Chat Model, Slack Trigger, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
