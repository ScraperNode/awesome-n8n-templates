# 📈 KodoFlow - Futures & Options Trading Copilot

> ⚡ **37 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

### This n8n template automates futures and options market intelligence by combining multi-timeframe price behavior, options context, and real-time news sentiment to deliver clear, risk-aware AI insights for US equity markets.

### Instead of producing noisy trading signals, KodoFlow focuses on market behavior, institutional conviction (or lack of it), and disciplined decision-making, including when waiting is the highest-edge outcome.

**Use cases**
- Analyze US equity behavior across 15m, 1h, and 1d timeframes
- Detect regime alignment or divergence in futures and options markets
- Combine price action with options context to assess conviction
- Aggregate real-time news sentiment for contextual awareness
- Build a professional Telegram market intelligence assistant
- Power AI-driven trading dashboards or research tools

**Good to know**
This workflow integrates market data, options context, and news sentiment, then uses an AI model (Google Gemini or OpenAI) to generate market bias, stance, confidence level, and a risk-aware verdict. It does not provide buy/sell calls, price targets, or execution signals. KodoFlow is designed for analysis, clarity, and discipline, not hype. Setup typically takes 10 minutes.

### Requirements
- n8n Cloud or self-hosted instance
- MarketData API key (Steps given Inside)
- News API key (Steps given Inside)
- AI model API key (Google Gemini or OpenAI)
- Telegram Bot Token 

### Customising this workflow
- Replace Telegram with Slack, Discord, or Notion for alerts
- Adjust timeframes or add additional regimes
- Extend options logic for different expiries or strategies
- Add confidence thresholds for alerts or dashboards
- Adapt the workflow for crypto, forex, or index futures with minimal changes

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
