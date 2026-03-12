# 🔬 Chat-based financial analysis of P&L and balance sheets with GPT-4 & PostgreSQL

> ⚡ **150 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 🧾 Who’s it for  
This workflow is designed for **finance teams**, **accountants**, and **data analysts** 📊 who want to interact with financial data from **two PostgreSQL databases** — one containing **Profit & Loss** data and another containing **Balance Sheet** data — using natural language chat.  
It’s perfect for those who need **quick, AI-powered insights** with the correct database automatically selected based on the question.  

---

## ⚙️ How it works / What it does  
1. **Chat Trigger 💬** – Starts the workflow when a chat message is received.  
2. **AI Agent 🤖** – Processes the user’s question and decides:  
   - **Profit & Loss DB** → If the question is about revenue, costs, expenses, or profit.  
   - **Balance Sheet DB** → If the question is about assets, liabilities, or equity.  
3. **PostgreSQL Query Nodes 🗄️** –  
   - **P_L_Reports** queries the `financial_agent_pl_reports` table.  
   - **Balance_Sheets** queries the `financial_agent_balancesheets` table.  
4. **AI Model (OpenAI) 🧠** – Uses `gpt-4.1-nano` to interpret results and provide an easy-to-read answer.  
5. **Memory Buffer 📝** – Keeps recent conversation context for a smoother chat experience.  
6. **Table Output 📋** – Always formats the results as a **clean, readable table** with two decimal precision.  

---

## 🛠️ How to set up  
1. **Prepare Your Databases**  
   - Feed your Profit & Loss and Balance Sheet data into **PostgreSQL**.  
   - Ensure the correct table structures are used:  
     - **financial_agent_pl_reports** → P&L data.  
     - **financial_agent_balancesheets** → Balance Sheet data.  

2. **Configure the PostgreSQL Nodes**  
   - Add connection credentials for both databases.  
   - Link **P_L_Reports** and **Balance_Sheets** nodes to the correct tables.  

3. **Set Up the AI Agent**  
   - Paste the provided **system message** into the AI Agent node (already configured in your workflow).  

4. **Connect the Nodes**  
   - Ensure **Chat Trigger → AI Agent → DB Nodes → AI Model** connections match your workflow.  

5. **Deploy**  
   - Save and activate the workflow.  
   - Start sending finance-related queries to test.  

---

## 📋 Requirements  
- **n8n** (latest version recommended)  
- **PostgreSQL databases** with:  
  - `financial_agent_pl_reports` table (P&L data).  
  - `financial_agent_balancesheets` table (Balance Sheet data).  
- **OpenAI API credentials** with access to `gpt-4.1-nano`.  
- **Active Webhook/Chat Trigger** for receiving queries.  

---

## 🎨 How to customize  
- **Expand AI Instructions** 🗒️ – Add more rules in the system message for different data sources or formatting styles.  
- **Change AI Model** 🧠 – Switch to a different OpenAI model for faster or more accurate results.  
- **Add More Databases** 🗄️ – Connect extra financial datasets, e.g., cash flow, sales analytics.  
- **Enhance Table Styling** 📊 – Use Markdown or HTML formatting for richer outputs.  
- **Refine Query Logic** 🔍 – Modify filtering logic to better match your reporting needs.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
