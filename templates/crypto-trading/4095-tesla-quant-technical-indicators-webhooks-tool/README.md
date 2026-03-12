# 📈 Tesla quant technical indicators webhooks tool

> ⚡ **942 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

📡 This workflow serves as the **central Alpha Vantage API fetcher** for Tesla trading indicators, delivering **cleaned 20-point JSON outputs** for three timeframes: `15min`, `1hour`, and `1day`.
It is **required** by the following agents:

* Tesla 15min, 1h, 1d Indicators Tools
* Tesla Financial Market Data Analyst Tool

 ✅ **Requires an Alpha Vantage Premium API Key**
 🚀 Used as a **sub-agent via webhook endpoints** triggered by other workflows

---

## 📈 What It Does

For each timeframe (`15min`, `1h`, `1d`), this tool:

1. Triggers **6 technical indicators** via Alpha Vantage:

   * RSI
   * MACD
   * BBANDS
   * SMA
   * EMA
   * ADX
2. **Trims the raw response** to the **latest 20 data points**
3. Reformats into a **clean JSON structure**:

   ```json
   {
     "indicator": "MACD",
     "timeframe": "1hour",
     "data": {
       "timestamp": "...",
       "macd": 0.32,
       "signal": 0.29
     }
   }
   ```
4. Returns results via **Webhook Respond** for the calling agent

---

## 📂 Required Credentials

* 🔑 **Alpha Vantage Premium API Key**
  Set up under `Credentials &gt; HTTP Query Auth`

  * Name: `Alpha Vantage Premium`
  * Query Param: `apikey`

Get yours here: [https://www.alphavantage.co/premium/](https://www.alphavantage.co/premium/)

---

## 🛠️ Setup Steps

1. **Import Workflow** into n8n
   Name it: `Tesla_Quant_Technical_Indicators_Webhooks_Tool`

2. **Add HTTP Query Auth Credential**
   Name: `Alpha Vantage Premium`
   Param key: `apikey`
   Value: your Alpha Vantage key

3. **Publish and Use the Webhooks**
   This workflow exposes 3 endpoints:

   * `/15minData` → used by 15m Indicator Tool
   * `/1hourData` → used by 1h Indicator Tool
   * `/1dayData` → used by 1d Indicator Tool

4. **Connect via Execute Workflow** or HTTP Request
   Ensure caller sends webhook trigger correctly to the path

---

## 🧱 Architecture Summary

Each timeframe section includes:

| Component          | Details                                       |
| ------------------ | --------------------------------------------- |
| 📡 Webhook Trigger | Entry node (`/15minData`, `/1hourData`, etc.) |
| 🔄 API Calls       | 6 nodes fetching indicators via Alpha Vantage |
| 🧹 Formatters      | JS Code nodes to clean and trim responses     |
| 🧩 Merge Node      | Consolidates cleaned JSONs                    |
| 🚀 Webhook Respond | Returns structured data to calling workflow   |

---

## 🧾 Sticky Notes Overview

✅ **Webhook Entry**: Instructions per timeframe
✅ **API Call Summary**: Alpha Vantage endpoint for each indicator
✅ **Format Nodes**: Explain JSON parsing and cleaning
✅ **Merge Logic**: Final output format
✅ **Webhook Response**: What gets returned to caller

All stickies follow n8n standard color-coding:

* Blue = Webhook flow
* Yellow = API request group
* Purple = Formatters
* Green = Merge step
* Gray = Workflow overview and usage

---

## 🔐 Licensing & Support

© 2025 **Treasurium Capital Limited Company**
This agent is part of the Tesla Quant AI Trading System and protected under U.S. copyright.

For support:
🔗 [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)
🔗 [n8n Creator Profile](https://n8n.io/creators/don-the-gem-dealer/)

---

🚀 **Use this API tool to feed Tesla technical indicators into any AI or trading agent across 15m, 1h, and 1d timeframes.**
**Required for all Tesla Quant Agent indicator tools.**

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
