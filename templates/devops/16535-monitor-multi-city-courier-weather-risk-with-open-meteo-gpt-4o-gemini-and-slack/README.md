# ⚙️ Monitor multi-city courier weather risk with Open-Meteo, GPT-4o, Gemini and Slack

> ⚡ **24 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow checks 48-hour forecasts from Open-Meteo for multiple cities on a 6-hour schedule or via an on-demand n8n form, scores conditions against courier-impact thresholds, uses OpenAI (with Google Gemini fallback) to draft Slack-ready alerts, and posts operational updates to a Slack channel.

## How it works
1. Runs every 6 hours on a schedule or starts from an Operations Manager on-demand n8n form submission.
2. Builds a city configuration (all cities for scheduled runs, or a single selected city for on-demand runs) and constructs the Open-Meteo forecast API request.
3. Fetches a 48-hour hourly forecast from Open-Meteo and continues even if the request fails.
4. Scores each city’s forecast against rain, wind, snow, and heat thresholds across multiple time windows, applies 18-hour deduplication for scheduled runs, and flags any city feed failures.
5. Sends the alert candidates to OpenAI to generate a three-sentence, operations-focused message per city (using Google Gemini as the model fallback if configured).
6. Formats each alert as a Slack Block Kit message and posts it to the #ops-weather-alerts channel, and separately posts a Slack error notice if one or more city forecasts could not be fetched.

## Setup
1. Add an OpenAI API credential (used to write the Slack alert messages).
2. Add a Google Gemini (PaLM) API credential if you want the configured fallback model to be available.
3. Add a Slack OAuth2 credential and set or create the target channel (ops-weather-alerts / #ops-weather-alerts) in your Slack workspace.
4. For on-demand checks, share the n8n form URL with your team and update the city dropdown options and the city configuration code if you add or rename cities.
5. Review and adjust the per-city weather thresholds in the city configuration to match your courier operations risk tolerance.

## Requirements
- OpenAI API key (GPT-4o / gpt-4o-mini)
- Slack OAuth2 credential with chat:write scope
- Google Gemini API key (optional, for AI fallback)

## Customization
- Add or remove cities by editing the CITIES array in the City config node, no other nodes need to change.
- Adjust URGENT/HEADS_UP score thresholds in the Score + dedup node to raise or lower sensitivity per city.
- Change the delivery peak windows (default 11:00-14:00 and 17:00-22:00) in the same node to match your market hours.
- Swap the Slack channel name in both Slack nodes to route alerts to a different channel.

## Additional info
This workflow was built and tested on a self-hosted n8n instance (Oracle Cloud A1 Flex, Ubuntu 24.04) and is fully compatible with n8n Cloud.

Weather data is sourced exclusively from Open-Meteo (open-meteo.com), an open-source weather API requiring no authentication. Forecast accuracy follows Open-Meteo's standard model ensemble — verify critical alerts against local meteorological services before operational decisions.

Deduplication uses n8n workflow static data (global scope). Clearing static data manually or migrating the workflow to a new instance will reset the deduplication state, causing the next scheduled run to re-evaluate all cities as if no prior alerts have been sent.

The GPT-4o prompt includes city-relative climate context so the model understands that an alert in Nairobi means sustained flooding rain, while an alert in Helsinki means genuinely exceptional conditions beyond the Nordic baseline. This prevents generic alert copy across climatically different markets.

The form trigger is designed for Operations Managers with no technical background — no n8n access required. Share the webhook URL directly and they can force an immediate check from any browser.

Peak delivery windows (11:00-14:00 and 17:00-22:00 local time) are used to escalate severity scoring during high-order-volume periods. Adjust these in the Score + dedup node to match your market's actual peak hours.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
