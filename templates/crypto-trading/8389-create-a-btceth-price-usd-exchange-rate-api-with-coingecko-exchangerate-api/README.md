# 📈 Create a BTC/ETH price & USD exchange rate API with CoinGecko & ExchangeRate-API

> ⚡ **304 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# 🌐 Crypto + FX Micro-API (Webhook JSON)

## 📌 Overview
Spin up a tiny, serverless-style API from n8n that returns **BTC/ETH prices & 24h changes** plus **USD→EUR** and **USD→NGN** from public, no-key data sources. Ideal for dashboards, low-code apps, or internal tools that just need a simple JSON feed.

## ⚙️ How it works
1. **Webhook (GET /crypto-fx)** — entrypoint for your client/app.  
2. **HTTP: ExchangeRate-API** — USD-base FX rates (no API key).  
3. **HTTP: CoinGecko** — BTC/ETH prices + 24h % change (no API key).  
4. **Merge** — combines payloads.  
5. **Code (v2)** — shapes a clean JSON:
   - `btc.price`, `btc.change_24h`  
   - `eth.price`, `eth.change_24h`  
   - `usd_eur`, `usd_ngn`, `ts` (ISO timestamp)
6. **Respond to Webhook** — returns the JSON with HTTP **200**.


## 🛠 Setup Guide
1) Webhook path & URL
In the Webhook node, confirm HTTP Method = GET and Path = crypto-fx.
Use the Test URL while building; switch to Production URL for live usage.
2) Test the endpoint
Curl:
curl -s https://&lt;your-n8n-host&gt;/webhook/crypto-fx
Browser / fetch():
fetch('https://&lt;your-n8n-host&gt;/webhook/crypto-fx')
  .then(r =&gt; r.json())
  .then(data =&gt; console.log(data))
3) Response mapping (already wired)
Respond to Webhook → Response Body is set to {{$json}}.
The Code node outputs the exact JSON structure shown above, so no extra mapping is required.


🔐 Security (recommended)
Add a Webhook Secret (query header check in Code node) or IP allowlist via your reverse proxy.
If embedding in public sites, proxy through your backend and apply rate-limit/cache headers there.

🚀 Usage ideas
Frontend dashboards (Chart.js, ECharts).
HomeAssistant / Node-RED info panels.
Google Apps Script to store the JSON into Sheets on a timer.

🎛 Customization
More coins: extend CoinGecko ids= (e.g., bitcoin,ethereum,solana).
More FX: read additional codes from fx.rates and add to the payload.
Timestamps: convert ts to your preferred timezone on client side.
CORS: if calling from browsers, add CORS headers in Respond (options → headers).

🧩 Troubleshooting
Empty/partial JSON: run the two HTTP nodes once to verify responses.
429s / rate limiting: add a short Wait node or cache outputs.
Wrong URL: ensure you’re using Production URL outside the n8n editor.
Security errors: if you add a secret, return 401 when it’s missing/invalid.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
