# ⚒️ Query MySQL database with natural language using GPT AI

> ⚡ **3,098 views** · ⚒️ [Engineering](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works
- Using chat node, ask a question pertaining to information stored in your MySQL database
- AI Agent converts your question to a SQL query
- AI Agent executes the SQL query and returns a result
- AI Agent can remember the previous 5 questions

## How to set up:
- Add your OpenAI API Key in "OpenAI Chat Model" node
- Add your MySQL credentials in the "SQL DB - List Tables and Schema" and "Execute a SQL Query in MySQL nodes"
- Update the database name in "SQL DB - List Tables and Schema" node. Replace "your_query_name" under the Query field with your actual database name
- After the above steps are completed, use the "When chat message received" node to ask a question about your data using plain English

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
