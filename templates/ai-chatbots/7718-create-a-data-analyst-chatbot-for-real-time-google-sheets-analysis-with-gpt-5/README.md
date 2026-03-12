# 🤖 Create a data analyst chatbot for real-time Google Sheets analysis with GPT-5

> ⚡ **1,769 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## **Who is this for?**
This workflow is ideal for:
* **Business analysts** and **data professionals** who need to quickly analyze spreadsheet data through natural conversation
* **Small to medium businesses** seeking AI-powered insights from their Google Sheets without complex dashboard setups
* **Sales teams** and **marketing professionals** who want instant access to customer, product, and order analytics

---

## **What problem is this workflow solving?**
Traditional data analysis requires technical skills and time-consuming manual work. This AI data analyst chatbot solves that by:
* **Eliminating the need for complex formulas or pivot tables** - just ask questions in plain text
* **Providing real-time insights** from live Google Sheets data whenever you need them
* **Making data analysis accessible** to non-technical team members across the organization
* **Maintaining conversation context** so you can ask follow-up questions and dive deeper into insights
* **Combining multiple data sources** for comprehensive business intelligence

---

## What this workflow does

This workflow creates an intelligent chatbot that can analyze data from Google Sheets in real time, providing AI-powered business intelligence and data insights through a conversational interface.

**Step by step:**
1. **Chat Trigger** receives incoming chat messages with session ID tracking for conversation context
2. **Parallel Data Retrieval** fetches live data from multiple Google Sheets simultaneously
3. **Data Aggregation** combines data from each sheet into structured objects for analysis
4. **AI Analysis** processes user queries using OpenAI's language model with the combined data context
5. **Intelligent Response** delivers analytical insights, summaries, or answers back to the chat interface

## How to set up

1. **Connect your Google Sheets account** to all Google Sheets nodes for data access
**View & Copy the example Google Sheet template** here:  
👉 [Smart AI Data Analyst Chatbot – Google Sheet Template](https://docs.google.com/spreadsheets/d/1-QTFO3TbGFjtYOMUfZb0aY66J_8G-R0Rb0JHLWrEZ90/edit?gid=0#gid=0)  
2. **Update Google Sheets document ID** in all Google Sheets nodes to point to your specific spreadsheet
3. **Configure sheet names** to match your Google Sheets structure
4. **Add your OpenAI API key** to the OpenAI Chat Model node for AI-powered analysis
5. **Customize the AI Agent system message** to reflect your specific data schema and analysis requirements
6. **Configure the chat trigger webhook** for your specific chat interface implementation
7. **Test the workflow** by sending sample queries about your data through the chat interface
8. **Monitor responses** to ensure the AI is correctly interpreting and analyzing your Google Sheets data

## How to customize this workflow to your needs

* **Replace with your own Google Sheets**: update the Google Sheets nodes to connect to your specific spreadsheets based on your use case.
* **Replace with different data sources**: swap Google Sheets nodes with other data connectors like Airtable, databases (PostgreSQL, MySQL), or APIs to analyze data from your preferred platforms
* **Modify AI instructions**: customize the Data Analyst AI Agent system message to focus on specific business metrics or analysis types
* **Change AI model**: Switch to different LLM models such as Gemini, Claude, and others based on your complexity and cost requirements.

## Need help customizing?

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
