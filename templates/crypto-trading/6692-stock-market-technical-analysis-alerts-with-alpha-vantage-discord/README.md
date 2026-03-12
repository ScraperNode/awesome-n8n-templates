# 📈 Stock market technical analysis alerts with Alpha Vantage & Discord

> ⚡ **2,112 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

### This n8n template demonstrates how to automate stock market technical analysis to detect key trading signals and send real-time alerts to Discord. It's built to monitor for the **Golden Cross** (a bullish signal) and the **Death Cross** (a bearish signal) using simple moving averages.

Use cases are many: Automate your personal trading strategy, monitor a portfolio for significant trend changes, or provide automated analysis highlights for a trading community or client group.

---

## 💡 Good to know

* This template relies on the **Alpha Vantage API**, which has a free tier with usage limits (e.g., API calls per minute and per day). Be mindful of these limits, especially if monitoring many tickers.
* The data provided by free APIs may have a slight delay and is intended for informational and analysis purposes.
* **Disclaimer**: This workflow is an informational tool and does not constitute financial advice. Always do your own research before making any investment decisions.

---

## ⚙️ How it works

* The workflow triggers automatically every weekday at 5 PM, after the typical market close.
* It fetches a list of user-defined stock tickers from the **Set** node.
* For each stock, it gets the latest daily price data from **Alpha Vantage** via an HTTP Request and stores the new data in a **PostgreSQL** database to maintain a history.
* The workflow then queries the database for the last 121 days of data for each stock.
* A **Code node** calculates two Simple Moving Averages (SMAs): a short-term (60-day) and a long-term (120-day) average for both today and the previous day.
* Using **If** nodes, it compares the SMAs to see if a **Golden Cross** (short-term crosses above long-term) or a **Death Cross** (short-term crosses below long-term) has just occurred.
* Finally, a formatted alert message is sent to a specified **Discord** channel via a webhook.

---

## 🚀 How to use

* Configure your credentials for **PostgreSQL** and select them in the two database nodes.
* Get a free **Alpha Vantage API Key** and add it to the "Fetch Daily History" node. For best practice, create a Header Auth credential for it.
* Paste your **Discord Webhook URL** into the final "HTTP Request" node.
* Update the list of stock symbols in the "Set - Ticker List" node to monitor the assets you care about.
* The workflow is set to run on a schedule, but you can press "Test workflow" to trigger it manually at any time.

---

## ✅ Requirements

* An **Alpha Vantage** account for an API key.
* A **PostgreSQL** database to store historical price data.
* A **Discord** account and a server where you can create a webhook.

---

## 🎨 Customising this workflow

* Easily change the moving average periods (e.g., from 60/120 to 50/200) by adjusting the `SMA_SHORT` and `SMA_LONG` variables in the "Compute 60/120 SMAs" Code node.
* Modify the alert messages in the "Set - Golden Cross Msg" and "Set - Death Cross Msg" nodes.
* Swap out Discord for another notification service like **Slack** or **Telegram** by replacing the final HTTP Request node.

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
