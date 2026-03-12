# 📖 ✨📊Multi-AI agent chatbot for Postgres/Supabase DB and QuickCharts + tool router

> ⚡ **13,110 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# Multi-AI Agent Chatbot for Postgres/Supabase Databases and QuickChart Generation

## Who is this for?  
This workflow is ideal for **data analysts**, **developers**, and **business intelligence teams** who need an AI-powered chatbot to query Postgres/Supabase databases and generate dynamic charts for data visualization.

## What problem does this solve?  
It simplifies data exploration by combining conversational AI with database querying and chart generation. Users can interact with their database using natural language, retrieve insights, and visualize data without manual SQL queries or chart configuration.

## What this workflow does  
1. **AI-Powered Chat Interface**:  
   - Accepts natural language prompts to query databases or generate charts.  
   - Routes user requests through a tool agent system to determine the appropriate action (query or chart).  

2. **Database Querying**:  
   - Executes SQL queries on Postgres/Supabase databases based on user input.  
   - Retrieves schema information, table definitions, and specific data records.  

3. **Dynamic Chart Generation**:  
   - Uses QuickChart to create bar charts, line charts, or other visualizations from database records.  
   - Outputs a shareable chart URL or JSON configuration for further customization.  

4. **Memory Integration**:  
   - Maintains chat history using Postgres memory nodes, enabling context-aware interactions.  

Workflow diagram showcasing AI agents, database querying, and chart generation paths.

## Setup  
1. **Prerequisites**:  
   - A Postgres-compatible database (e.g., Supabase).  
   - API credentials for OpenAI.  

2. **Configuration Steps**:  
   - Add your database connection credentials in the Postgres nodes.  
   - Set up OpenAI credentials for GPT-4o-mini in the language model nodes.  
   - Adjust the QuickChart schema in the "QuickChart Object Schema" node to fit your use case.  

3. **Testing**:  
   - Trigger the chat workflow via the "When chat message received" node.  
   - Test with prompts like "Generate a bar chart of sales data" or "Show me all users in the database."

## How to customize this workflow  
- **Modify AI Prompts**
- **Add Chart Types**
- **Integrate Other Tools**

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
