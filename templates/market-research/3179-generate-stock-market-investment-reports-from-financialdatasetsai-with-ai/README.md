# 📊 Generate stock market investment reports from FinancialDatasets.ai with AI

> ⚡ **359 views** · 📊 [Market Research & Insights](../)

## Description

# 🚀 **Perfect if you are...**

- 💰 **Beginner Investor** – Learn the market faster with AI-powered insights guiding your decisions.
- 📈 **Retail Trader** – Optimize your trading strategy with in-depth analysis typically reserved for professionals.
- 🏦 **Hedge Fund & Institutional Trader** – Automate high-level market analysis using advanced AI models.
- 🤖 **Automation Enthusiast** – Get hands-on with **n8n** and build an automated stock research tool.

---

# ❔ **What It Does:**

✅ **AI-Driven Investment Reports** – Our system analyzes **30,000+ tickers** with historical data spanning **30+ years**. It provides **fundamental, technical, and sentiment analysis** in a structured, easy-to-read report.

✅ **Your Personal Hedge Fund on Your PC** – AI-powered advisors analyze **earnings reports, insider trades, stock prices, financial metrics, and news**, delivering precise, data-driven recommendations tailored to you.

✅ **Real Advisors, Real Insights** – Our system replicates the thought processes of **investing legends** like Warren Buffett, Charlie Munger, Cathie Wood, and Ben Graham, offering multiple expert-style perspectives on every stock decision.

✅ **Ultra Low Cost** – Running this workflow costs **less than $0.30 per report** (*AI model costs not included*). That’s cheaper than a cup of coffee, yet it provides insights worth thousands of dollars.

---
# 🛠️ **Initial Setup**

- Visit [FinancialDatasets.ai](FinancialDatasets.ai) and retrieve your API key.
- Locate the **HTTPS Nodes** (🌐) and insert your API key under the header **X-API-KEY** in each one.
- In the **Gmail node**, ensure you set up the email where you want to receive your reports.
- Test your workflow by typing the name of a company or the stock ticker in the chat. Your report should arrive within 10 minutes.

---

# 🧪 **Customize It!**

- To modify the **workflow triggers**, change the trigger type and **update the message that the Ticker Extractor receives** in this part of the prompt:  
  `"Based on this message, =={{ $json.chatInput }}== "`  
  *This prevents any disruptions in the workflow.*

- To **change the report destination**, update the node type. You can send reports to **Telegram, Slack, or other platforms** instead of Gmail.

- Each **advisor's personality** is configured through its system message—feel free to tweak it to suit your needs.

- You can **create new agents** by duplicating an existing one and assigning it a different personality.  
  **Remember to reference the new agent in the linked nodes** to ensure seamless integration.


----

⚠️ **Important Note:**  
This workflow requires an **API key from [FinancialDatasets.ai](FinancialDatasets.ai)** to access stock market data.

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
