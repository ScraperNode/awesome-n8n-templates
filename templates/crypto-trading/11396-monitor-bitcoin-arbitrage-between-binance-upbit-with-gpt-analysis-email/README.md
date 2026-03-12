# 📈 Monitor bitcoin arbitrage between Binance & Upbit with GPT analysis & email

> ⚡ **286 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**Crypto Arbitrage Analyzer: Binance vs Upbit (Kimchi Premium)**

#### **Short Description**
Automate crypto arbitrage monitoring between Binance and Upbit. Track the "Kimchi Premium," analyze BTC price gaps with AI, and receive actionable trading reports via email.

---

#### **Full Description**

**🚀 Overview**
This workflow serves as an automated analyst for cryptocurrency traders focusing on the **"Kimchi Premium"** (the price gap between South Korean and global exchanges). It fetches real-time Bitcoin (BTC) prices from **Binance** (Global) and **Upbit** (Korea), compares them against the current USD/KRW forex rate, and uses **OpenAI (GPT)** to generate a sophisticated arbitrage assessment report sent directly to your inbox.

**✨ Key Features**
*   **Multi-Market Data Aggregation**: Simultaneously fetches data from Binance, Upbit, and Forex APIs.
*   **Real-time Forex Conversion**: Accurately calculates spreads using live USD/KRW exchange rates.
*   **AI-Powered Analysis**: Uses OpenAI to interpret the data, calculating spread percentages and profit margins automatically.
*   **Automated Reporting**: Delivers a clean, HTML-formatted trading report via Gmail every 30 minutes (customizable).

**🛠️ How it Works**
1.  **Schedule Trigger**: Runs the workflow automatically at set intervals (default: every 30 mins).
2.  **Data Fetching**:
    *   Gets `BTC/USDT` price from Binance.
    *   Gets `BTC/KRW` and `BTC/USDT` prices from Upbit.
    *   Gets `USD/KRW` exchange rate from a Forex API.
3.  **Normalization**: Standardizes the data structure from different APIs into a unified format.
4.  **AI Processing**: An OpenAI Agent analyzes the price differences, calculates the arbitrage gap (Kimchi Premium), and drafts a summary.
5.  **Notification**: A Structured Output Parser formats the AI's response, and the report is emailed to the trader via Gmail.

**📋 Prerequisites / Setup**
To use this workflow, you need to configure the following credentials in n8n:
*   **OpenAI API**: Required for the analysis logic (GPT-4o-mini or similar recommended).
*   **Gmail (OAuth2)**: Required to send the email reports.
*   *(Note: Binance, Upbit, and Forex data are fetched via public REST APIs in this workflow, so no specific exchange API keys are required for basic data retrieval.)*

---

#### **Use Case / Category**
*   **Categories**: Finance, AI & LLMs, Automation
*   **Apps used**: OpenAI, Gmail, HTTP Request, Schedule

#### **SEO Keywords** (Tagging purpose)
Crypto Arbitrage, Bitcoin, Kimchi Premium, Binance, Upbit, Trading Bot, OpenAI, GPT, Financial Analysis, Automated Reporting

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
