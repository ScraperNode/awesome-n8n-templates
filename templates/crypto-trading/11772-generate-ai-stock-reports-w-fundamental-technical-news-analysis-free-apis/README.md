# 📈 Generate AI stock reports w/ fundamental, technical, & news analysis (Free APIs)

> ⚡ **1,437 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

### This template deploys a multi-agent system that fully automates advanced stock analysis. It uses a central AI orchestrator to call specialized sub-workflows, synthesizing technical, fundamental, and news sentiment data into a single, actionable report delivered to your inbox. All API Keys can be acquired for free!

**How it Works**

*   **Orchestration:** An AI Agent acts as the central "brain," managing the analysis pipeline. It's triggered either on a schedule for a list of stocks or manually for a single ticker.
*   **Specialist Agents (Tools):** The orchestrator invokes three sub-workflows as tools to gather intelligence:
    1.  **Technical Analysis:** Fetches TA data (RSI, MACD, Bollinger Bands) and uses a vision-AI to analyze the stock's chart, identifying trends and patterns.
    2.  **Fundamental Analysis:** Retrieves financial statements (Income, Balance Sheet) to generate a summary of the company's financial health and valuation.
    3.  **News Sentiment Analysis:** Aggregates and analyzes market news to determine overall sentiment and identify key discussion topics.
*   **Synthesis & Delivery:** The main agent synthesizes all findings to formulate a final recommendation (Buy, Hold, Sell), generates a professional HTML report, and delivers it via email.

**Setup (Est. 10-15 mins)**

This is an advanced, multi-workflow template. Please follow the steps precisely.

1.  **Split Modules:** Separate the 5 color-coded modules on this canvas into 5 new, individual workflows.
2.  **Acquire APIs:** Acquire the 7 APIs needed for this workflow. These need Credentials: Gemini,, OpenRouter, SMTP, Alpaca. These just need to be pasted in: AlphaVantage, TwelveData, Chart-Img.
3.  **Configure & Link:** Insert your API keys and email, then re-link the `Execute Workflow` and `Tool` nodes to connect your new workflows.
4.  **Activate:** Toggle all 5 workflows to "Active."

➡️ **For the complete, detailed guide, visit: https://docs.google.com/document/d/1Ri_GfuIlc0QVm1aDrWJjRCg_2vWRCrw_SjRV9cBoKmw/edit?usp=sharing**

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Sub-workflow, Stop and Error, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
