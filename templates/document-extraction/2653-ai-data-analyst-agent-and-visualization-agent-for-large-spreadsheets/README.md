# 🔬 AI data analyst agent and visualization agent for large spreadsheets

> ⚡ **6,292 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Purpose of workflow:**

This workflow transforms spreadsheet data into an interactive, AI-powered knowledge base that enables users to gain deep insights through natural language queries, searchability, and comparative analysis.

**How it works:**

1. Data Storage & Integration:
- Spreadsheet data is imported into a no-code database (NocoDB)
- System connects with an AI data analyst agent
- Agent accesses table metadata and column information

2. Query Processing:
- Users input natural language questions
- AI agent interprets queries and converts them to database filters
- System retrieves relevant data using filter formulas
- AI synthesizes responses with analysis and insights

3. Advanced Capabilities:
- Performs comparative analysis across multiple data points
- Handles complex multi-part queries

4. Automatically creates visualizations:
- Visualization AI Agent figures out the data and the chart type and generates professional visualization using Quickchart


**Step by step setup:**
1. Create account on nocodb.com
2. Create table by importing csv, copy table id
3. Create API token https://app.nocodb.com/#/account/tokens
4. In workflow, settings node, update with table id
5. In NocoDB tool node, setup authentication with API token created in step 3
6. Specify the workspace and base fields after connecting to NocoDB

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
