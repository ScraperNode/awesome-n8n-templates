# 📊 Monitor supply chain risk news with Claude Sonnet 4.5 and Telegram alerts

> ⚡ **210 views** · 📊 [Market Research & Insights](../)

## Description

## Who's it for

Supply chain and logistics specialists, freight forwarders, importers/exporters, and risk teams who need early warning when maritime, carrier, geopolitical, or weather events threaten their cargo or trade lanes.

If you've ever found out about a Red Sea diversion, an OFAC sanctions package, a Panama Canal restriction, or a Gulf hurricane *after* it hit your bookings - this template fixes that. It turns 12 free public feeds into a single Claude-classified Telegram alert stream, scoped to the chokepoints, lanes, and risk dimensions you actually care about.

## How it works

The workflow runs every 6 hours and polls 12 free public RSS feeds across 4 supply chain risk dimensions:

- **Maritime**: gCaptain, Maritime Executive, Safety4Sea, Splash247
- **Carrier**: The Loadstar, FreightWaves, Container News
- **Geopolitical**: Google News searches for sanctions, tariffs, OFAC, export bans
- **Weather**: GDACS (Global Disaster Alerts), NOAA Hurricane Center, USGS Significant Earthquakes

Each new item is deduped against past runs using n8n workflow static data - no database needed. Then Claude Sonnet 4.5 (the Sonar Analyst) classifies it into a structured JSON with primary risk dimension, severity 1-5, affected region, geo node, trade lanes affected, source reliability, and recommended action (monitor / alert / escalate). Five few-shot examples cover one case from each dimension plus an "other" fallback.

Items at or above your severity threshold are reformatted by a second Claude pass (the Sonar Reporter) into a scannable HTML Telegram alert with dimension-specific emoji, severity color codes, and a direct link to the source. Items below threshold end silently.

## How to set up

1. **Connect your Anthropic API credential** to both Claude Sonnet sub-nodes - the same credential can be reused for both the Analyst and the Reporter.
2. **Connect your Telegram Bot credential** (token from BotFather) and set the `TELEGRAM_CHAT_ID` environment variable in n8n to your operator chat ID. The Send Telegram Alert node already references this env var, so you only need to set the variable once.
3. **Open the Configuration node** and adjust:
   - `severity_threshold` (1-5) - minimum severity to alert on (default: 3)
   - `watched_dimensions` - comma-separated dimensions: maritime, carrier, geopolitical, weather
   - `watched_regions` - geographic focus list (defaults cover the major chokepoints + global lanes)
   - `post_all_clear_digest` - set to true if you want a digest even when nothing critical hit
4. **Click Execute Workflow** once to test. You'll see items flow through the canvas, the Analyst classify them, and the IF gate filter them. If the result is below threshold you'll see a green checkmark on End (Below Threshold) - that's expected.
5. **Toggle Active** in the top-right when you're happy. The schedule trigger will fire every 6 hours.

## Requirements

- **Anthropic API key** (Claude Sonnet 4.5 recommended - the prompts are tuned for it)
- **Telegram Bot token** from BotFather
- **A Telegram chat ID** for receiving alerts (your personal chat, a group, or a channel)

That's it. No databases, no Docker, no scraping, no paid APIs. The dedupe Code node uses n8n workflow static data so nothing needs to be installed beyond a working n8n instance.

## How to customize the workflow

**Add or remove RSS feeds** in the lane that matches your dimension. Each lane has its own visual sticky note so you can see at a glance which feeds belong where. To add a feed, copy any existing RSS Feed Read node, change the URL, and connect it to the Merge node.

**Change the schedule** in the Every 6 Hours node - for high-stakes operations you might want every 2 hours; for lower-touch monitoring, daily.

**Edit the Sonar Analyst system prompt** (in the AI Agent node) to add new risk categories, region keywords, or industry-specific few-shot examples. The current schema supports adding new `crisis_type` enum values and new chokepoints without breaking the IF gate.

**Swap Telegram for Slack, Discord, or email** by replacing the final Send Telegram Alert node. The Sonar Reporter outputs HTML which renders cleanly in any of these channels.

**Tighten the dedupe cap** (currently 40 items per run, 800 cached URLs) if your LLM cost is a concern. The cap lives at the top of the Dedupe + Tag Source Code node.

**Localize the alerts** by changing the `alert_language` field in the Configuration node - the Reporter prompt respects it (currently supports english, spanish, french, german).

The workflow ships as a single importable JSON, 29 nodes total, with one yellow main sticky note explaining the whole template and four neutral lane sticky notes labeling each risk dimension lane. Zero credentials are bundled - you wire your own.

## 🔗 Nodes Used

RSS Read, Telegram, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
