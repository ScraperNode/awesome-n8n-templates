# 📈 Track top meme coin prices with Telegram Bot and CoinGecko API

> ⚡ **1,334 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

Platform: n8n (Telegram Bot Integration)
Purpose: Let users fetch top meme coin prices in real-time using a simple /memecoin Telegram command 
 How It Works (Logic Breakdown)
This flow listens for a Telegram command and fetches data from the CoinGecko API to respond with live memecoin prices.

🔹 1. Telegram Trigger Node
Listens for incoming Telegram messages from users.

Activated when a message is sent in a Telegram chat connected to the bot.

Passes the raw message (e.g., /memecoin) to the next node.

🔹 2. IF Node – Check if Message is /memecoin
Condition: {{$json["message"]["text"]}} === "/memecoin"

If true ➝ continue to fetch data from CoinGecko.

If false ➝ nothing happens.

🔹 3. HTTP Request – Fetch Meme Coins from CoinGecko
API: https://api.coingecko.com/api/v3/coins/markets?...category=meme-token

Fetches top 5 meme tokens by market cap.

Data includes:

Name

Symbol

Current price (USD)

Coin ID (for URL linking)

🔹 4. Function Node – Format the Message
Parses the JSON response from CoinGecko.

Builds a clean message like:

ruby
Copy
Edit
🚀 Dogecoin (DOGE)
💰 Price: $0.123
🔗 More: https://www.coingecko.com/en/coins/dogecoin
Loops through top 5 meme coins and adds line breaks.

🔹 5. Telegram Send Node – Reply to User
Sends the formatted message to the original chat.

Uses chat_id from the trigger to ensure correct user receives it.

🖼 Sample User Flow
👤 User types /memecoin in Telegram bot

🤖 Bot fetches meme coin prices

📬 Bot replies with live prices + links

## 🔗 Nodes Used

Function, HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
