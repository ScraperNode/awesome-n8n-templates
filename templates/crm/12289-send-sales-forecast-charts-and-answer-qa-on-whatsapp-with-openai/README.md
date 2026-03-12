# 🤝 Send sales forecast charts and answer Q&A on WhatsApp with OpenAI

> ⚡ **695 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How It Works 
***Top Branch Workflow***

**1. The Data Scientist:** 
   - **Ingest:** Pulls historical sales data from Google Sheets.
   - **Math Engine:** Runs 7 statistical algorithms (e.g., Seasonal Naive, Linear Trend, Regression). It backtests them against your history and scientifically selects the winner with the lowest error rate.


**2. The Data Analyst:** 
   - **Interpret:** The AI Agent takes the mathematical output and translates it into business insights, assigning confidence scores based on error margins.
   - **Report:** Generates a visual trend chart (PNG) and sends a complete briefing to your phone.


***Bottom Branch Workflow***

**3. The Consultant:** AI Agent 2 handles the follow-up questions. It pulls the latest analysis context and checks historical rate data to give an informed answer.
   - **Recall:** When you ask a question via WhatsApp, the bot retrieves the saved forecast state.
   - **Answer:** It acts as an on-demand analyst, comparing current forecasts against historical actuals to give you instant answers.


## Setup Steps
1) Google Sheet: Prepare columns: Year, Month, Sales. Map the Sheet ID in the "Workflow Configuration" node.
2) Forecast Engine: No config needed. It automatically detects seasonality vs. linear trends.
3) Database: Create a table latest_forecast to store the JSON output.
4) Credentials: Connect Google Sheets, OpenAI, and WhatsApp


## Use Cases & Benefits
**For Business Owners:** 
Gain enterprise-grade forecasting on autopilot. Always have a sophisticated financial outlook running in the background 24/7.

**For Sales Leaders:** 
Get immediate visibility into future revenue trends. Bypass the wait for end-of-month manual reports and get a strategic "pulse check" delivered instantly to your phone.


🤖***Virtual Data Team:*** Instantly add the capabilities of a Data Scientist and Data Analyst to your business or division. It works alongside your existing team to handle the heavy lifting, or stands in as your dedicated automated department.

🧠***Precision & Trust:*** Combines the best of both worlds: rigorous, deterministic code for the math (no hallucinations) and advanced AI for the strategic explanation. You get numbers you can trust with context you can use.

⚡***Decision-Ready Insights:*** Stop digging through dashboards. High-level intelligence is pushed directly to you on WhatsApp, allowing you to make faster, data-driven decisions from anywhere.

![Screenshot 20260118 at 12.51.02 PM.png](fileId:4021)


## 📬 Want to Customize This?
[leelin.business@gmail.com](leelin.business@gmail.com)

## 🔗 Nodes Used

Google Sheets, HTTP Request, WhatsApp Business Cloud, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
