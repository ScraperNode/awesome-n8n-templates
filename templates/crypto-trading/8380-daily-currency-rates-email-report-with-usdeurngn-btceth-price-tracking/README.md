# 📈 Daily currency rates email report with USD→EUR/NGN & BTC/ETH price tracking

> ⚡ **275 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# 💰 Track Daily Fiat & Crypto Exchange Rates Report with ExchangeRate-API & CoinGecko
A simple, reliable workflow that emails you a **beautiful HTML currency report** every morning at **8:00 AM** (your n8n server’s timezone).  
It pulls **USD→EUR** and **USD→NGN** fiat rates and **BTC/ETH** prices (+ 24h % change), then formats a clean HTML email.

---


## 📌 What It Does

- ⏰ **Schedule:** Runs daily at 8:00 AM  
- 🌍 **Fiat Rates:** USD→EUR and USD→NGN (via ExchangeRate-API, no key needed)  
- ₿ **Crypto:** BTC & ETH prices + 24h change (via CoinGecko, no key needed)  
- ✉️ **Email:** Sends a **mobile-friendly HTML** + plain text fallback

---

## 🗺️ Node Map (At a Glance)

| # | Node Name | Type | Purpose |
|---|-----------|------|---------|
| 1 | **Daily 8AM Trigger** | `Schedule Trigger` | Fires every day at 08:00 |
| 2 | **Get Fiat Exchange Rates** | `HTTP Request` | `https://api.exchangerate-api.com/v4/latest/USD` |
| 3 | **Get Crypto Prices** | `HTTP Request` | CoinGecko simple price endpoint |
| 4 | **Merge** | `Merge` | Combines fiat + crypto responses |
| 5 | **Format Email Content** | `Code (v2)` | Builds HTML + text, sets subject & summary |
| 6 | **Send Daily Currency Email** | `Email Send` | Sends the HTML email via SMTP |

&gt; 📝 Sticky Notes in the canvas explain each section. They’re optional and safe to delete.

---

## ⚙️ Required Setup

### 1) Schedule Time
- Open **Daily 8AM Trigger** → set cron to **08:00 daily**.  
  Suggested cron: `0 8 * * *` (server local time; if you’re in Lagos, ensure server timezone matches **Africa/Lagos** or adjust accordingly).

### 2) SMTP Credentials
- Open **Send Daily Currency Email** → set:
  - **From Email**: your sender (e.g. `your-email@gmail.com`)  
  - **To Email**: recipient address  
  - **Credentials**: select your SMTP account  
- **Gmail tip:** use **App Passwords** (with 2FA enabled).  
  - Server: `smtp.gmail.com`  
  - Port: `587` (STARTTLS) or `465` (SSL)  
  - Auth: your full Gmail address + app password

### 3) API Access
- Both endpoints are **free** & **no API key**:
  - Fiat (USD base): `https://api.exchangerate-api.com/v4/latest/USD`  
  - Crypto (BTC/ETH): `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true`

---

## 🧩 Input Order

The **Format Email Content** node is written to **auto-detect** which input is fiat vs crypto, so the Merge order doesn’t matter. A clean pattern is:

- **Get Crypto Prices** → **Merge** (Input 1)  
- **Get Fiat Exchange Rates** → **Merge** (Input 2)  
- **Merge** → **Format Email Content** → **Send Daily Currency Email**

---

## 🚀 Test It Quickly

1. Run **Get Fiat Exchange Rates** → verify `rates.EUR` and `rates.NGN` exist.  
2. Run **Get Crypto Prices** → verify BTC/ETH `usd` and `usd_24h_change`.  
3. Run **Format Email Content** → check it outputs `subject`, `html`, `text`.  
4. Run **Send Daily Currency Email** → confirm the styled report arrives.

---

## 🎛 Customize

- **Currencies:** Add more fiat codes from `rates` (e.g., GBP, ZAR) and extend the HTML template.  
- **Coins:** Add `ids=` in CoinGecko (e.g., `bitcoin,ethereum,solana`) and render extra cards.  
- **Send time:** Adjust the cron (e.g., `30 7 * * *` for 7:30 AM).  
- **Branding:** Edit colors, fonts, and header gradient in the HTML string.  
- **Timezone stamp:** Change the display timezone inside the Code node if needed.

---

## 🧩 Common Pitfalls & Fixes

- **Email not styled:** Ensure the Email node is set to **HTML** format.  
- **Gmail auth fails:** Use an **App Password** and port **587** with STARTTLS.  
- **Empty values:** Run the two HTTP nodes once and confirm the responses contain data.  
- **Rate limits:** If you increase frequency, consider adding a short Wait node or caching.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
