# 📈 Real-time cryptocurrency price monitor with CoinGecko & multi-channel alerts

> ⚡ **725 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

This automated n8n workflow monitors real-time cryptocurrency prices using CoinGecko API and sends smart alerts when price conditions are met. It supports multi-coin tracking, dynamic conditions, and instant notifications via Email, Telegram, and Discord.

## **Good to Know**

* Reads crypto watchlist data from Google Sheets.
* Monitors prices at defined intervals (24/7 monitoring).
* Handles upper and lower price limits with direction-based alerts (above, below, both).
* Implements cooldown logic to avoid duplicate alerts.
* Updates last alert price and timestamp in Google Sheets.
* Supports multiple alert channels: Email, Telegram, Discord.
* Uses CoinGecko API for price data (Free tier supported).

## **How It Works**

1. **24/7 Crypto Trigger** – Runs every minute (or custom interval) to check latest prices.
2. **Read Crypto Watchlist** – Fetches symbols and conditions from Google Sheets.
3. **Parse Crypto Data** – Converts Google Sheet data into structured JSON.
4. **Fetch Live Crypto Price** – Uses CoinGecko API to get latest market price for each coin.
5. **Smart Crypto Alert Logic** – Compares live price with upper/lower limits and evaluates conditions:

   * **Above** – Trigger alert if price &gt; upper\_limit.
   * **Below** – Trigger alert if price &lt; lower\_limit.
   * **Both** – Trigger alert if either condition is met.
   * Implements **cooldown\_minutes** to prevent repeated alerts.
6. **Check Crypto Alert Conditions** – Validates alerts before sending notifications.
7. **Send Crypto Email Alert** – Sends email alert if condition is true.
8. **Send Telegram Crypto Alert** – Sends Telegram alert.
9. **Send Discord Crypto Alert** – Sends Discord alert.
10. **Update Crypto Alert History** – Updates `last_alert_price` and `last_alert_time` in Google Sheet.
11. **Crypto Alert Status Check** – Ensures alert process completed successfully.
12. **Success Notification** – Sends confirmation message on success.
13. **Error Notification** – Sends an error alert if something fails.


## **Google Sheet Columns (A-G)**

| Column | Description                        |
| ------ | ---------------------------------- |
| **A**  | `symbol` (BTC, ETH, SOL, etc.)     |
| **B**  | `upper_limit` (e.g., 45000)        |
| **C**  | `lower_limit` (e.g., 40000)        |
| **D**  | `direction` (both / above / below) |
| **E**  | `cooldown_minutes` (e.g., 10)      |
| **F**  | `last_alert_price` (auto-updated)  |
| **G**  | `last_alert_time` (auto-updated)   |


## **How to Use**

1. Import the workflow into n8n.
2. Configure **Google Sheets** credentials and link your watchlist sheet.
3. Add your **CoinGecko API** endpoint in the Fetch Price node (Free tier).
4. Set up **Email, Telegram, and Discord credentials** for notifications.
5. Test with sample data:

   * Example: BTC, upper\_limit=45000, lower\_limit=40000, direction=both.
6. Execute the workflow and monitor alerts.

## **Requirements**

* n8n environment with execution permissions.
* Google Sheets integration (with API credentials).
* CoinGecko API (Free tier supported).
* Notification channels:

  * Email (SMTP settings in n8n).
  * Telegram Bot Token.
  * Discord Webhook URL.

## **Customizing This Workflow**

* Add **more coins** in Google Sheet.
* Modify **alert conditions** (e.g., percentage change, moving averages).
* Add **SMS or WhatsApp notifications**.
* Integrate with **Slack or Microsoft Teams**.
* Use **AI-based price predictions** for smarter alerts.

## 🔗 Nodes Used

Cron, Send Email, Google Sheets, HTTP Request, Telegram, Discord

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
