# 📈 Analyze Binance Futures markets with TA indicators, OpenAI news checks, and Telegram alerts

> ⚡ **257 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow acts as an automated market analyst for educational purposes. It scans Binance Futures (Testnet) for high-volume pairs, applies custom technical analysis (RSI, Bollinger Bands, EMA, ATR) using JavaScript, and uses AI to validate trends against recent news sentiment.

It is designed for **paper trading** to demonstrate how to build advanced financial logic and adaptive risk management systems in n8n without risking real funds.

💡 **Why use this?**
* **Smart Scanning:** Automatically filters top 150 pairs by volume and excludes stablecoins to find active markets.
* **Dynamic Risk Management:** Uses **ATR (Average True Range)** to calculate adaptive Stop Loss and Take Profit levels based on current market volatility.
* **Custom Technical Analysis:** Demonstrates how to calculate complex indicators via a Function node, eliminating the need for paid TA APIs.
* **AI Sentiment Filter:** Scrapes recent news and uses an LLM (OpenAI) to "vet" the technical signal against potential FUD or risks.
* **Secure Execution:** Shows how to sign HMAC SHA256 requests manually to interact with the Binance Futures API.

⚙️ **How it works**
1.  **Filter:** Runs every 15 minutes to find liquid assets on Binance.
2.  **Calculate:** Computes indicators (EMA 200, BB, RSI) and defines Entry/Exit points using ATR logic.
3.  **Validate:** If a technical signal matches, it fetches news and asks AI: "Is there any breaking news that contradicts this trade?"
4.  **Execute:** If AI returns "CONFIRM", it posts the detailed analysis to Telegram and places a paper trade order on the Testnet.

🛠 **Setup Steps**
1.  **Binance Testnet:** Create a free account on [Binance Futures Testnet](https://testnet.binancefuture.com/) and generate API keys.
2.  **Configuration:** Open the `📝 MAIN CONFIG` node and enter your **Testnet Keys** and **Telegram Channel ID**.
3.  **Credentials:** Add your OpenAI (or OpenRouter) credentials to the AI node.

&gt; **Disclaimer:** This workflow connects to the Binance **Testnet** by default. It is intended for educational purposes only. The author and n8n are not responsible for financial decisions.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
