# ⚒️ Generate SQL queries from schema only - AI-powered

> ⚡ **54,392 views** · ⚒️ [Engineering](../)

## Description

This workflow is a modification of the previous template on how to [create an SQL agent with LangChain and SQLite](https://n8n.io/workflows/2292-talk-to-your-sqlite-database-with-a-langchain-ai-agent/).

*The key difference* – the agent has access only to the database schema, not to the actual data. To achieve this, SQL queries are made outside the AI Agent node, and the results are never passed back to the agent.

This approach allows the agent to generate SQL queries based on the structure of tables and their relationships, without having to access the actual data.

This makes the process more secure and efficient, especially in cases where data confidentiality is crucial.

### 🚀 Setup

To get started with this workflow, you’ll need to set up a free MySQL server and import your database (check Step 1 and 2 [in this tutorial](https://blog.n8n.io/compare-databases/)). 

*Of course, you can switch MySQL to another SQL database such as PostgreSQL, the principle remains the same. The key is to download the schema once and save it locally to avoid repeated remote connections.*

Run the top part of the workflow once to download and store the MySQL chinook database schema file on the server.

With this approach, we avoid the need to repeatedly connect to a remote db4free database and fetch the schema every time. As a result, we reach greater processing speed and efficiency.

### 🗣️ Chat with your data

1. Start a chat: send a message in the chat window.
2. The workflow loads the locally saved MySQL database schema, without having the ability to touch the actual data. The file contains the full structure of your MySQL database for analysis.
3. The Langchain AI Agent receives the schema, your input and begins to work.
4. The AI Agent generates SQL queries and brief comments based solely on the schema and the user’s message.
5. An IF node checks whether the AI Agent has generated a query. When:
- Yes: the AI Agent passes the SQL query to the next MySQL node for execution.
- No: You get a direct answer from the Agent without further action.

6. The workflow formats the results of the SQL query, ensuring they are convenient to read and easy to understand.
7. Once formatted, you get both the Agent answer and the query result in the chat window.

### 🌟 Example queries

Try these sample queries to see the schema-driven AI Agent in action:

1.  Would you please list me all customers from Germany?

2.  What are the music genres in the database?

3. What tables are available in the database?

4. Please describe the relationships between tables. - In this example, the AI Agent does not need to create the SQL query.

And if you prefer to keep the data private, you can manually execute the generated SQL query in your own environment using any database client or tool you trust 🗄️

💭 The AI Agent memory node does not store the actual data as we run SQL-queries outside the agent. It contains the database schema, user questions and the initial Agent reply. Actual SQL query results are passed to the chat window, but the values are not stored in the Agent memory.

## 🔗 Nodes Used

MySQL, AI Agent, OpenAI Chat Model, Simple Memory, Read/Write Files from Disk, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
