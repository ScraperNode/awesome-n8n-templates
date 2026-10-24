# 📈 Control AlphaInsider stock and crypto portfolios from Telegram text and voice

> ⚡ **239 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# AlphaInsider Telegram Chat Bot

Automate trading on [AlphaInsider](https://alphainsider.com) by monitoring Telegram messages. Uses AI to analyze signals and execute trades, create posts, or answer questions.

## How It Works

**Message Flow:**
```
Telegram → Route (DM/Channel) → Detect Type (Text/Voice) → Transcribe (if voice) →
Global Settings → Fetch Positions → AI Analysis → Route Action (Trade/Post/Q&A) →
Execute → Reply (if DM)
```

**Three AI Actions:**
1. **Trade** - Executes orders on AlphaInsider based on clear trading signals
2. **Post** - Creates audience posts on AlphaInsider from commentary or analysis
3. **Q&A** - Responds to direct questions about positions or trading

The AI agent analyzes messages with current portfolio context, determines intent, and routes to the appropriate action.

## Prerequisites

- **n8n instance** (self-hosted or cloud)
- **AlphaInsider account** with API access - [Sign up](https://alphainsider.com)
- **OpenAI API key** - [Get key](https://platform.openai.com/api-keys)
- **Telegram Bot** - Create via [@BotFather](https://t.me/botfather)

## Quick Setup

### 1. Configure Credentials

**Telegram API:**
- Create bot with [@BotFather](https://t.me/botfather) and copy auth token
- Add token to **Telegram Channel Listener** node
- (Optional) Add bot as admin to channel with no permissions

**OpenAI API:**
- Get API key from [OpenAI Platform](https://platform.openai.com/api-keys)
- Add to **OpenAI Model** and **Transcribe Voice Message** nodes

**AlphaInsider API:**
- Go to [Developer Settings](https://alphainsider.com/settings/developers)
- Click n8n button and copy API key
- Add to **Get Positions**, **Search Stocks**, and **Create Orders** nodes

### 2. Configure Workflow

**Global Settings Node:**
- **strategy_id** (required): Copy from AlphaInsider strategy URL (e.g. URL: `https://alphainsider.com/strategy/niAlE-cMI8TdsYQllZLmf`, Strategy ID: `niAlE-cMI8TdsYQllZLmf`)
- **whitelist** (optional): Restrict trading to specific securities using `["SYMBOL:EXCHANGE"]` format, or leave as `[]` for all

**Channel Check Node (optional):**
- Set **channel_id** to monitor specific channel (e.g., `-1001234567890`)
- Leave default to monitor all messages

### 3. Activate

Toggle **Active** in the workflow editor. Your bot is now monitoring Telegram.

## Features

- **Real-time monitoring** via webhook for instant processing
- **Dual input modes**: Direct messages and channel posts
- **Voice message support**: Automatic transcription with OpenAI Whisper
- **Portfolio context**: Considers existing positions before trading
- **Leverage support**: Up to 2x (200%) portfolio leverage
- **Security whitelist**: Optional restriction to approved securities
- **Interactive replies**: Responds to DMs with confirmations or answers

## Trading Logic

**Trade Signals** (action = trade):
- **Long**: buy, bullish, loading up, moon, strong buy
- **Short**: sell, dumping, overvalued, bearish, exiting
- **Close**: take profit, exiting, holding cash, getting out

**Posts** (action = post):
- Broadcasting information or analysis to followers
- No explicit trading intention

**Q&A** (action = none):
- Position queries and trading questions
- Pure observation or technical analysis
- Weak/ambiguous signals

**Allocation Rules:**
- Percentages: 0 to 2.0 (1.5 = 150% leverage)
- Total must not exceed 2.0
- Cannot mix stocks and crypto
- Conservative approach - only acts on clear signals

## Example Usage

**Buy Signal:**
```
Message: "Extremely bullish on Nvidia. Adding more NVDA"
Current: 50% TSLA
Result: 150% NVDA + 50% TSLA = 200%
```

**Reallocation:**
```
Message: "Selling Tesla to buy Microsoft"
Current: 100% TSLA
Result: 100% MSFT (TSLA closed)
```

**Post to Audience:**
```
Message: "Bitcoin breaking key resistance at $45k!"
Result: Post created on AlphaInsider
```

**Position Query:**
```
Message: "What are my current positions?"
Reply: "Your current positions are: TSLA:NASDAQ long 100%, MSFT:NASDAQ long 50%."
```

## Supported Exchanges

- **COINBASE** - Cryptocurrencies
- **NYSE** - New York Stock Exchange
- **NASDAQ** - NASDAQ Stock Market

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Webhook not triggering | Verify bot is admin in channel with correct permissions |
| AI not trading | Ensure messages contain clear action words (buying, selling, closing) |
| Trades not executing | Verify AlphaInsider credentials and strategy_id |
| Voice messages failing | Check OpenAI API key in Transcribe Voice Message node |
| Wrong channel messages | Update channel_id in Channel Check node |
| Not replying to DMs | Verify Telegram credentials in User Reply node |

## Customization

Open **Parse Stock Allocations** node to modify trading logic:
- Signal recognition keywords
- Leverage limits (default: 2.0)
- Allocation strategies
- Risk filters

## Disclaimer

**Trading involves risk.** Always test thoroughly before using with real money. Start with small allocations and security whitelists. Users are responsible for their own trading decisions and risk management.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
