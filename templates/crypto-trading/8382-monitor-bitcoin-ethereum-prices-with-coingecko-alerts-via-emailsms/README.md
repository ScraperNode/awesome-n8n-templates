# 📈 Monitor Bitcoin & Ethereum prices with CoinGecko alerts via Email/SMS

> ⚡ **481 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# ⚠️ Crypto Price Threshold Alerts (Email/SMS/Telegram)

## 📌 Overview
This workflow monitors **Bitcoin (BTC)** and **Ethereum (ETH)** prices in real-time using **CoinGecko’s public API**. It sends you an **instant alert** when a price crosses a custom threshold or when the 24-hour change moves beyond your defined % range.

Perfect for traders who want **automated price pings** without constantly checking charts.

---

## ⚙️ How it works
1. **Schedule Trigger** — runs every 10–15 minutes (configurable cron).  
2. **HTTP Request (CoinGecko)** — fetches live BTC/ETH prices + 24h % changes.  
3. **Code Node** — compares values against your target thresholds.  
4. **IF Node** — checks if any condition is true (cross up/down or big move).  
5. **Notification Node** — sends alert via Email, SMS (Twilio), or Telegram.

**Example Output:**  
&gt; “BTC broke $110,000 (+2.1% 24h)”

---

## 🛠 Setup Guide
1. **Set your thresholds** in the **Code node**:  
   - `BTC_UP` / `BTC_DOWN`  
   - `ETH_UP` / `ETH_DOWN`  
   - `MOVE_ABS` (absolute % change to trigger)

2. **Choose delivery channel**:  
   - **Email Node** → SMTP (Gmail, Outlook, etc.)  
   - **Twilio Node** → SMS alerts  
   - **Telegram Node** → DM or channel alerts

3. **Test Run**:  
   - Execute once from the Code node.  
   - If thresholds are crossed, you’ll see a formatted alert payload.  

---

## 🎛 Customization
- Adjust **interval** in the **Schedule Trigger** (default: every 15m).  
- Add more cryptos by editing the CoinGecko API call.  
- Use **Slack** or **Discord** instead of Email/Telegram for team alerts.  
- Store last triggered state in **Google Sheets/DB** to avoid repeated pings.

---

## 👤 Author
**David Olusola**  
For traning automation & 1:1 consulting: [sales@daexai.com](mailto:sales@daexai.com)

## 🔗 Nodes Used

HTTP Request, Twilio, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
