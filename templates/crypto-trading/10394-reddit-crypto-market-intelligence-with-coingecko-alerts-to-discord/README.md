# 📈 Reddit crypto market intelligence with CoinGecko alerts to Discord

> ⚡ **616 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Try It Out!

🚀 Reddit Crypto Intelligence & Market Spike Detector

⸻

🧠
Workflow Description

Reddit Crypto Intelligence & Market Spike Detector is an automated market sentiment and price-monitoring workflow that connects social chatter with real-time crypto price analytics.
It continuously scans new posts from r/CryptoCurrency, extracts recently mentioned coins, checks live price movements via CoinGecko, and alerts you on Discord when a significant spike or drop occurs.

This automation empowers traders, analysts, and communities to spot early market trends before they become mainstream — all using free APIs and open data.

⸻

⚙️
How It Works

1. Monitor Reddit Activity

◦ Automatically fetches the latest posts from r/CryptoCurrency using Reddit’s free RSS feed.
◦ Captures trending titles, post timestamps, and mentions of coins or tokens (e.g., $BTC, $ETH, $SOL, $PEPE).

2. Extract Coin Mentions

◦ A Code Node parses the feed using regex (\$[A-Za-z0-9]{2,10}) to identify any symbols or tickers discussed.
◦ Removes duplicates and normalizes all results for accurate data mapping.

3. Fetch Market Data

◦ Each detected coin symbol is matched with CoinGecko’s public API to fetch live market data, including current price, market rank, and 24-hour price change.
◦ No API key required — completely free and reliable source.

4. Detect Market Movement

◦ A second Code Node filters the fetched data to identify price movements greater than ±5% within the last 24 hours.
◦ This helps isolate meaningful market action from routine fluctuations.

5. Generate and Send Alerts

◦ When a spike or dip is detected, the workflow composes a rich alert message including:
▪ 💎 Coin name and symbol
▪ 💰 Current price
▪ 📈 24h percentage change
▪ 🕒 Timestamp of detection
◦ The message is sent automatically to your Discord channel using a preconfigured webhook.

⸻

💬
Example Output

🚨 Crypto Reddit Mention & Price Spike Alert! 🚨

💎 ETHEREUM (ETH)
💰 $3,945.23
📈 Change: +6.12%

💎 SOLANA (SOL)
💰 $145.88
📈 Change: +8.47%

🕒 Checked at: 2025-10-31T15:00:00Z

If no coins cross the ±5% threshold:

“No price spikes detected in the latest Reddit check.”

🔔 #MarketIntel #CryptoSentiment #PriceAlert

⸻

🪄
Key Features

• 🧠 Social + Market Intelligence – Combines Reddit sentiment with live market data to detect potential early signals.
• 🔎 Automated Coin Detection – Dynamically identifies newly discussed tokens from live posts.
• 📊 Smart Spike Filtering – Highlights only meaningful movements above configurable thresholds.
• 💬 Discord Alerts – Delivers clear, structured, and timestamped alerts to your community automatically.
• ⚙️ Fully No-Cost Stack – Utilizes free Reddit and CoinGecko APIs with no authentication required.

⸻

🧩
Use Cases

• Crypto Traders: Detect early hype or momentum shifts driven by social chatter.
• Analysts: Automate social sentiment tracking tied directly to live market metrics.
• Community Managers: Keep members informed about trending coins automatically.
• Bots & AI Assistants: Integrate this logic to enhance automated trading signals or alpha alerts.

⸻

🧰
Required Setup

• Discord Webhook URL – For automatic alert posting.
• (Optional) CoinGecko API endpoint (no API key required).
• n8n Instance – Self-hosted or Cloud; free tier is sufficient.
• Workflow Schedule – Recommended: hourly (Cron Node interval = 1 hour).

⸻

AFK Crypto Website: afkcrypto.com

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
