# 🔬 Automated monthly & quarterly Stripe revenue reports to Slack with financial insights

> ⚡ **207 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Description
Automate your financial reporting by pulling charge and refund data from Stripe, calculating key revenue and risk metrics, and delivering professional reports directly into Slack. This workflow runs on a monthly or quarterly schedule, processes Stripe data into insights, and formats a rich Slack message with revenue breakdowns, top customers, refund analysis, and payment method insights. 📊💰💬

## What This Template Does
- Runs automatically on a monthly (1st day) or quarterly schedule (every 3 months) at 9 AM. ⏱️
- Fetches Stripe charges and refunds for the reporting period. 💳
- Merges charge and refund data for a unified dataset. 🔄
- Calculates financial metrics: total revenue, net revenue, average transaction value, refund rate. 📈
- Estimates growth metrics: Monthly Recurring Revenue (MRR) and Annual Recurring Revenue (ARR). 🚀
- Identifies top 3 customers by revenue. 🏆
- Breaks down payment methods used (e.g., Visa, Mastercard, etc.). 💳
- Performs risk analysis on transactions by Stripe’s risk scores. ⚠️
- Analyzes refund reasons and generates insights. 🔄
- Formats all results into a clear, structured Slack message with sections for finance, growth, risk, and customers. 💬

## Key Benefits
- Eliminates manual Stripe report exports. ⚡
- Ensures timely financial reporting (monthly or quarterly). 📅
- Provides instant visibility of revenue, refunds, and risks in Slack. 📲
- Surfaces top customers and payment methods for strategic insights. 🏅
- Helps finance and ops teams catch anomalies early (high refunds or risky transactions). 🛡️
- Keeps leadership and teams aligned with automated reporting. 👩‍💻👨‍💻

## Features
- Schedule Triggers – Automates reporting on monthly or quarterly cycles.
- Stripe Charges & Refunds – Pulls transaction and refund data directly from Stripe API.
- Merge Node – Combines charges and refunds into a single dataset.
- Custom Code Metrics – Calculates revenue, net revenue, refund rates, and growth metrics.
- Top Customer Analysis – Highlights top revenue-generating customers.
- Payment Breakdown – Shows revenue split by card brand/payment method.
- Refund Analysis – Summarizes refund reasons and rates.
- Risk Analysis – Categorizes payments by low, medium, or high risk scores.
- Slack Integration – Delivers insights in a professional report format.

## Requirements
- n8n instance (cloud or self-hosted).
- Stripe API credentials with read access to charges and refunds.
- Slack Bot token with chat:write permission.
- Target Audience
- Finance teams needing automated recurring Stripe reports. 💼
- SaaS companies monitoring MRR, ARR, and refunds. 🚀
- Founders/Execs who want financial dashboards in Slack. 👩‍💼
- Operations teams tracking risk and refund trends. 🛠️
- Remote teams relying on Slack for reporting. 🌍

## Step-by-Step Setup Instructions
- Connect your Stripe API credentials in n8n. 🔑
- Connect your Slack API credentials and select your target channel. 💬
- Adjust the schedule triggers (monthly/quarterly) if needed. ⏱️
- Customize the Slack message formatting if you want branding or tone changes. 🎨
- Test the workflow with sample data to confirm financial metrics. ✅

## 🔗 Nodes Used

HTTP Request, Slack, Stripe, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
