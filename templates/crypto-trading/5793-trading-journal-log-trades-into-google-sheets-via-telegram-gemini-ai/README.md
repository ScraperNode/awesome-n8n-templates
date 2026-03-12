# 📈 Trading journal: log trades into Google Sheets via Telegram & Gemini AI

> ⚡ **290 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# This smart AI-powered trading journal lets you easily log and update your trades using Telegram messages. Just send your trade details by text to your personal telegram bot, and the system will extract key information and save it in a Google Sheets journal for you.

Simply send messages to your personal trade journal assistant (bot) on Telegram, and it will handle the rest. After some time, you can review your journal to reflect, learn, and improve your trading skills.

### The journal can record:
1. Asset or trading pair
2. Entry price
3. Stop loss
4. Take profit
5. Trade direction (buy/sell)
6. Additional trading notes

### It also allows you to update existing trades with:
1. Profit and loss after closing the trade
2. Additional notes such as strategy details

## 1. How it works:
### Trade Entry Example:
**Send a message like:**
"Hey, log my trade on Tesla with entry price 300, stop loss 280, and direction buy."

**The AI will extract:**
Asset or trading pair (e.g., Tesla)
Entry price
Stop loss (if provided)
Take profit (if provided)
Direction (buy/long or sell/short)
Any additional notes (e.g., "EMA 20 crossed above EMA 50")

**Trade ID:**
After logging, you’ll receive a unique trade ID (e.g., "233hdsf") to keep for future updates to the trade entry (e.g add profit/loss upon trade close).

### Trade Update Example:
**To update your trade with profit/loss or notes, send a message like:**
"Hey, update my trade with profit of 300+ and add note: trade was closed after 7 days. Trade ID: 233hdsf."

The system will locate your trade by ID and update the details accordingly.

## 2. Who is this for?
Traders who want a simple, hands-free way to track and manage their trades without manual data entry. Perfect for individual traders, prop firms, or anyone who prefers using Telegram to interact with their trading journal.

## 3. How to use:
1. Create a Google Sheet with columns (ID (unique trade id auto generated for every trade), Asset/Pair, Entry Price, Stop Loss, Take Profit, Notes, Direction, Profit & Loss).
2. Send trade details via Telegram message.
3. Receive confirmation with a unique trade ID.
4. Use the trade ID for any future updates to the trade entry.

All trades and updates are saved automatically in Google Sheets selected.

## 4. How to Set Up This Smart AI Trading Journal Workflow
This section guides you through setting up the workflow that logs and updates your trades via Telegram messages, using AI to extract trade details and storing them in Google Sheets.

1. Telegram Bot Setup
**Create a Telegram bot using @BotFather:**
Send /newbot command.
Choose a bot name and username.
Copy the API token provided.
**In n8n, create Telegram credentials:**
Go to Credentials → Create new → Telegram API.
Paste your bot API token.
Use https://api.telegram.org as the base URL.
Save the credentials.

2. Google Sheets Setup
Create a Google Sheet to store your trade journal with columns (ID (unique trade id auto generated for every trade), Asset/Pair, Entry Price, Stop Loss, Take Profit, Notes, Direction, Profit & Loss).
Note the Spreadsheet ID from the URL (e.g., 1DeKt3teOs3R8Js9Go4rdhJCLKisLByMkO6LSPd5Be4c).
Make sure your sheet has columns like:
ID, Asset/Pair, Entry Price, Stop Loss, Take Profit, Direction, Notes, Profit & Loss.
**In n8n, create Google Sheets OAuth2 credentials:**
Follow n8n Google Sheets docs to set up OAuth2 (https://docs.n8n.io/integrations/builtin/credentials/google/).
Save the credentials.

3. AI Model Setup
**Use Google Gemini (PaLM) or Groq AI models for NLP:**
Sign up at Google AI Studio (https://aistudio.google.com/) or Groq Console (https://console.groq.com/).
Create API credentials and get your API keys.
**In n8n, create credentials for any of the one AI model:**
Google Gemini API credentials.
Groq API credentials.

The workflow uses these AI nodes to parse Telegram messages and extract structured trade data.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
