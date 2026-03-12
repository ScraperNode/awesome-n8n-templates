# ⚒️ PostgreSQL conversational agent with Claude & DeepSeek (Multi-KPI, Secure)

> ⚡ **1,002 views** · ⚒️ [Engineering](../)

## Description

# 🧠 Conversational PostgreSQL Agent 

Enable AI-driven conversations with your PostgreSQL database using a secure and visual-free agent powered by n8n’s Model Context Protocol (MCP). This template allows users to ask multiple KPIs in a single message, returning consolidated insights — more efficient than the original Conversing with Data template.

---

## 🚀 Why This Template

Unlike the Conversing with Data workflow, which handles one KPI per message, this version:

- ✅ Supports multi-KPI questions  
- ✅ Returns structured, human-readable reports  
- ✅ Uses fewer AI calls, making it faster and cheaper  
- ✅ Avoids raw SQL execution for enhanced security

💲 **Estimated cost per full multi-request run: ~$0.01**

This template is optimized for efficiency. Each message can return 2–4 KPIs (You can change the MaxIteration of the Agent to make it more, it is currently set up at 30 iterations) using a single Claude 3.5 Haiku session and DeepSeek-based SQL generation — balancing speed, reasoning, and affordability.

---

## 💬 Sample Use Case

**User:**  
“Can you show product performance, revenue trends, and top 5 customers?”

**Agent:**  
- Uses `ListTables` and `GetTableSchema`  
- Generates three SQL queries using `get_query_and_data`  
- Returns:

📊 **Product Performance**  
1. High-Waist Jeans — 10 units, $1,027 revenue  
2. Denim Jacket — 10 units, $783 revenue  

📈 **Sales Trends**  
- Peak Month: January 2024 — 32 units, $2,378  
- Average Monthly Units: 10–16  

🧍 **Customer Insights**  
1. Bob Brown — $1,520 spent  
2. Diana Wilson — $925 spent  

All from one natural prompt.

---

## 🖼️ Real-World Interaction Screenshot



![novisual_sql.png](fileId:1283)

---

## 🧰 What’s Inside

| Node                        | Purpose                                                   |
|----------------------------|-----------------------------------------------------------|
| MCP Server Trigger         | Receives user queries via `/mcp/...`                      |
| AI Agent + Memory          | Understands and plans multi-step queries                  |
| Think Tool                 | Breaks down the user’s question into structured goals     |
| get_query_and_data         | Generates SQL securely from natural language              |
| ListTables, GetSchema      | AI tools to explore DB safely                             |
| Read/Insert/Update Tools   | Execute structured operations (never raw SQL)             |
| checkdatabase Subflow      | Validates SQL, formats response as clean text             |

---

## 🤖 Model Selection Recommendations

This template uses two types of models, selected for cost-performance balance and role alignment:

**1. Claude 3.5 Haiku (Anthropic) – for the MCP Agent**  
The main conversational agent uses Claude 3.5 Haiku, ideal for MCP because it was built by Anthropic — the creators of the MCP standard. It’s fast, affordable, and performs excellently in tool-calling and reasoning tasks.

**2. DeepSeek – for the SQL subworkflow**  
The subworkflow that turns natural language into SQL uses DeepSeek. It’s one of the most affordable and performant models available today for structured outputs like SQL, making it a perfect fit for utility logic.

✅ This setup provides top-tier reasoning + low-cost execution.

---

## 🔐 Security Benefits

- No raw SQL accepted from the user or LLM  
- All queries are parameterized  
- Schema is dynamically retrieved  
- Final output is clean, safe, and human-readable

---

## 🧪 Try a Prompt

&gt; “Show me the top 5 products by units sold and revenue, total monthly sales trend, and top 5 customers by spending.”

In one message, the agent will:  
- Generate and run multiple queries  
- Use the schema to validate logic  
- Return a single, comprehensive answer

---

## 🛠 How to Use

1. 📥 Upload both workflow files into your n8n instance:
   - `Build_your_own_PostgreSQL_MCP_server_No_visuals_.json`
   - `checkdatabase.json`
2. 🔐 Set up PostgreSQL credentials (e.g. “Postgres account 3”)
3. 🧠 Confirm model setup:
   - Claude 3.5 Haiku for the main agent
   - DeepSeek for the subflow
4. 🌐 Use the `/mcp/...` URL from the MCP Server Trigger to connect your frontend or chatbot
5. 🗣 Ask questions naturally — the agent takes care of planning, querying, and formatting

---

## 🔄 Customization Ideas

- Swap Claude or DeepSeek for OpenAI, Mistral, Gemini, etc.  
- Export insights to Slack, Notion, or Google Sheets  
- Add Switch nodes to control access to specific tables  
- Integrate with any front-end app, internal dashboard, or bot

---

## 📦 What's Included

- `Build_your_own_PostgreSQL_MCP_server_No_visuals_.json` – MCP agent logic  
- `checkdatabase.json` – SQL generation and formatting utility workflow

📝 These must be uploaded into your n8n workspace for the template to function.

---

## 📊 Comparison: Conversing with Data vs This Workflow

| Feature                       | Conversing with Data      | This Workflow                   |
|------------------------------|---------------------------|---------------------------------|
| Handles multi-KPI questions  | ❌ No                     | ✅ Yes                          |
| Secure query execution       | ✅ Yes                    | ✅ Yes                          |
| Structured response          | ⚠️ JSON / raw            | ✅ Clean natural language       |
| Cost-efficiency              | ⚠️ More calls            | ✅ Optimized with fewer calls   |
| Endpoint support             | ❌ Manual interaction     | ✅ MCP-ready (`/mcp/...`)       |

🔗 Prefer something more lightweight and cost-sensitive?  
Try the original Conversing with Data template (single KPI + chart support):  
[Conversing with Data: Transforming Text into SQL Queries and Visual Curves](https://n8n.io/workflows/3497-conversing-with-data-transforming-text-into-sql-queries-and-visual-curves)

&gt; I used this version for over 3 months and only spent **$0.80 total**, making it a great entry point if you're just getting started or on a limited budget.

---

## 📚 More from the Same Creator

Looking for a different kind of AI reporting workflow?

Explore:  
**Customer Feedback Analysis with AI, QuickChart & HTML Report Generator**  
→ Automatically analyze customer input and generate full reports with insights and charts.  
[Customer Feedback Analysis with AI, QuickChart & HTML Report Generator](https://n8n.io/workflows/3642-customer-feedback-analysis-with-ai-quickchart-and-html-report-generator)

## 🔗 Nodes Used

Postgres, Execute Workflow Trigger, AI Agent, Anthropic Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
