# 📈 Track crypto price crashes with CoinGecko, Marketaux, Google Gemini and Slack

> ⚡ **19 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow runs every 4 hours to monitor a crypto asset’s price with CoinGecko, checks for crash conditions, pulls related headlines from Marketaux, uses Google Gemini to generate a structured market assessment, and posts a formatted crash alert to a Slack channel.

## How it works
1. Runs every 4 hours on a schedule.
2. Fetches the current USD price and the last 24 hours of market chart data for the configured asset from CoinGecko.
3. Calculates 24h change, drop from 24h high, and determines whether the price breaches an absolute floor or percentage-drop crash threshold.
4. If a crash is detected, retrieves recent news for the asset ticker from Marketaux and formats the top headlines for analysis.
5. Sends the price metrics and formatted headlines to a Google Gemini agent to generate a structured output (severity, headline, summary, key drivers, and recommendation).
6. Builds a Slack message combining the computed price stats, Gemini assessment, and top headlines, then posts it to the selected Slack channel.

## Setup
1. Add credentials for CoinGecko (HTTP Header Auth) and Marketaux (HTTP Query Auth) and ensure the API keys are valid.
2. Add Google Gemini (Google PaLM) credentials for the model used by the market analyst agent.
3. Add Slack OAuth credentials and select the channel where alerts should be posted.
4. Update the asset configuration values (asset ID, ticker, crash threshold, percent drop threshold, and news limit) to match the coin you want to monitor.
5. Adjust the schedule interval if you want the workflow to check prices more or less frequently.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
