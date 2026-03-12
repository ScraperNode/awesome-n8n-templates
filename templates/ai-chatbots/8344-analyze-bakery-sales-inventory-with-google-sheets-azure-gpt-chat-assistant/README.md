# 🤖 Analyze bakery sales & inventory with Google Sheets & Azure GPT Chat Assistant

> ⚡ **375 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Bakery Data Analytics Workflow Explanation

### Aim

The aim of the **Bakery Data Analytics Workflow** is to automate the process of analyzing bakery sales and stock data stored in Google Sheets. It allows bakery owners or managers to interact with an AI assistant via chat and receive clear, concise, and actionable insights about their business performance without manually reviewing spreadsheets.

---

### Goal

The goal is to:

* Enable users to query bakery sales and stock data through a **chat interface**.
* Use an **AI Agent** to interpret user queries and fetch the required data.
* Retrieve relevant sales/stock figures from a **Google Sheets dataset**.
* Generate insights in **plain English**, with short summaries, highlights, or breakdowns.
* Maintain **conversation context** so users can ask follow-up questions naturally.

This ensures that bakery owners can make quick, informed decisions about sales trends, inventory shortages, or product performance with minimal manual effort.

---

### Requirements

The workflow relies on the following **components and configurations**:

#### n8n Platform

The automation platform hosting the workflow.

#### Node Requirements

1. **When chat message received (Trigger)**

   * Captures user input via chat.
   * Initiates the workflow execution.

2. **AI Agent**

   * Central reasoning engine.
   * Interprets queries, decides when to fetch data, and ensures professional responses.
   * Uses short, structured insights (bullets, tables, or compact summaries).

3. **Simple Memory**

   * Stores short-term conversation history.
   * Maintains context across multiple user queries.

4. **Retrieve bakery data (Google Sheets)**

   * Connects to a linked Google Sheets file.
   * Fetches sales/stock data (e.g., daily totals, item performance).
   * Data source: [Bakery Google Sheet](https://docs.google.com/spreadsheets/d/1dCCQzjoDZak-mQD1iyGd5aHKGFeh15fsBPUIoTgAYGw/edit?usp=drivesdk).

5. **Azure OpenAI Chat Model**

   * Backend language model powering the AI Agent.
   * Provides natural language understanding and generates concise responses.

#### Credentials

* **Google Sheets OAuth2 account** (for accessing bakery data).
* **Azure OpenAI API account** (for AI-driven reasoning and conversation).

#### Input Requirements

* User question/query via chat (e.g., *“What was the best-selling pastry last week?”*).

#### Output

* Compact, conversational insights (totals, highlights, trends) delivered via chat.

---

### API Usage

The workflow integrates two main APIs:

1. **Google Sheets API**

   * Used by the **Retrieve bakery data** node.
   * Fetches structured data (sales, stock, dates) from the bakery dataset.
   * Provides the AI Agent with real-time data access.

2. **Azure OpenAI API**

   * Used by the **Azure OpenAI Chat Model** node.
   * Powers natural conversation, ensures responses are plain English, concise, and business-focused.
   * Aligns with AI Agent rules to avoid assumptions and provide actionable insights only when asked.

---

### Workflow Summary

The **Bakery Data Analytics Workflow** automates bakery performance analysis by:

1. Triggering on **chat message input**.
2. Passing the query to the **AI Agent** for interpretation.
3. Using **Simple Memory** to track context across the conversation.
4. Fetching relevant data from **Google Sheets** when needed.
5. Leveraging **Azure OpenAI** to generate structured, professional responses.

This creates an **interactive AI-powered assistant** for bakery data, enabling quick insights into sales and inventory trends without manually combing through spreadsheets.

---

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
