# 📈 Telegram trading bot assistant | LLM powered trading bot for crypto/forex

> ⚡ **298 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Purpose & Audience
This n8n workflow telegram bot is designed for crypto, forex and stock traders, quantitative analysts, and AI enthusiasts who want to explore how different Large Language Models (LLMs) perform in real-world trading scenarios. Inspired by nof1.ai's Alpha Arena, where AI models compete with real capital to prove their trading capabilities, this template lets YOU run your own AI trading experiments—testing which "brain" generates the most profitable signals for BTCUSD (it can do technical analysis on any forex/crypto with any of the 5000+ assets available at Twelve Data) and other assets.

Whether you're a day trader seeking automated technical analysis, a researcher comparing LLM performance, or simply curious about AI-driven trading—this workflow provides a sophisticated, customizable trading assistant powered by your choice of AI model.

## What It Does?
1. Generates disciplined trading signals (BUY/SELL/NO_SIGNAL) with precise entry price, stop loss, and take profit levels for crypto assets (default: BTCUSD)
2. Performs real-time technical analysis using 200 hourly candles—calculates RSI, MACD, Bollinger Bands, ATR, support/resistance, Fibonacci levels, and more
3. Enforces strict risk management with 1.5x ATR stop losses and minimum 1:2 risk-reward ratios
4. Acts as an intelligent telegram trading assistant that answers questions about indicators, market conditions, strategies, and provides educational guidance
5. Supports multiple AI models (LLM swapping)—test Google Gemini, OpenAI GPT-4/5, Claude Sonnet/Opus, DeepSeek, Qwen, Groq, or local models (Ollama)
6. Includes detailed reasoning for every signal with 10-15 sentences citing specific data points, confidence scores, and exit plans
7. Handles context-aware conversations with mongo db memory node recent chat context or follow-up questions.


## 🧪 Experimental Nature - Important Disclaimer
This is an EXPERIMENTAL trading tool. Performance varies significantly across different LLM models. Based on nof1.ai's live trading competition results (at the time of template creation):
1. DeepSeek V3.1 showed +47% returns (highest performer)
2. Qwen 3 Max achieved +35% returns
3. Claude Sonnet 4.5 delivered +13% returns
4. GPT-5 experienced -74% returns (lowest performer)

Your mileage will vary. The same prompt can produce drastically different results depending on:
1. Which AI model you use (the "brain" matters!)
2. Market conditions during testing
3. Your risk management discipline
4. Assets volatility and liquidity

We strongly recommend:
1. Test with paper trading first (simulated trades, no real money)
2. Experiment with multiple LLMs to find which performs best for your strategy
3. Compare signals across models before executing trades
4. Always validate signals manually—AI is a tool, not a replacement for judgment
5. Never risk more than you can afford to lose

This template is for educational/informational purposes. Trading involves substantial risk of loss. Past AI performance does not guarantee future results.

## Who Is It For?
- Crypto & Forex traders who want AI-assisted technical analysis and signal generation for BTC, ETH, SOL, and other assets
- Quant researchers exploring how different LLMs handle quantitative trading tasks
- AI enthusiasts curious about practical applications of models like DeepSeek, Qwen, Claude, and GPT in financial markets
- Algorithm developers who want a foundation to build more sophisticated trading systems
- Educators & students learning about algorithmic trading, technical analysis, or AI agent workflows

## Key Features
✅ Real-time market data integration via TwelveData API (5000+ crypto/forex/stock pairs supported)
✅ Swap AI models in minutes—compare Gemini vs Claude vs DeepSeek vs GPT performance
✅ Disciplined risk management—never suggests trades without proper stop losses
✅ Educational trading assistant—explains indicators, answers strategy questions
✅ Extensible architecture—easily add MongoDB memory, multi-timeframe analysis, alerts
✅ No recurring fees—pay only for LLM API usage (DeepSeek costs ~$0.001 per signal!)
✅ Asset-agnostic—switch from BTC to ETH to SOL by changing 2 parameters
✅ Production-ready foundation—includes comprehensive sticky note documentation for expansion

## How to Set Up?
1. Import the workflow into your n8n instance and review the included sticky notes (comprehensive setup guide included)
2. Choose your AI model—connect credentials for Gemini, OpenAI, Anthropic, DeepSeek, or others (switching models takes 60 seconds)
3. Test in chat mode—ask "Analyze BTCUSD for a trade" and evaluate the signal quality
4. Experiment with different LLMs—run the same analysis with 2-3 models and compare outputs

That's it! Start chatting with your AI telegram trading assistant, test signals, and discover which "brain" works best for your trading style. The workflow includes detailed sticky notes with instructions for swapping models and modifying memory context window length.

## What You'll Need
1. n8n instance (cloud or self-hosted)
2. TwelveData API key (free tier included in template—800 requests/day)
3. LLM API credentials (choose one or more):
- Google Gemini API (free tier available)
- OpenAI API (GPT-4/GPT-4o)
- Anthropic API (Claude Sonnet/Opus)
- DeepSeek API (ultra-cheap, strong performer per nof1.ai)
- Groq API (fast inference, free tier)
- Local Ollama (completely free, runs on your hardware)
4. Telegram Bot Credentials
5. MongoDB Account (Free Version)


## Performance Expectations
1. Signal Generation Speed: 15-45 seconds (depends on LLM)
2. API Cost Per Signal: $0.001 - $0.05 (DeepSeek cheapest, GPT-4 most expensive)
3. Accuracy: Highly variable—60-80% directional accuracy possible with right model + market conditions
4. Best Use Case: Confirming your own analysis, backtesting strategies, learning technical analysis
5. Remember: This is NOT a get-rich-quick scheme. It's a sophisticated tool for traders who understand technical analysis and want AI assistance in processing market data faster than humanly possible.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Google Gemini Chat Model, MongoDB Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
