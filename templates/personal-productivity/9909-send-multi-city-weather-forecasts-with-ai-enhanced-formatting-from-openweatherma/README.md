# ⚡ Send multi-city weather forecasts with AI-enhanced formatting from OpenWeatherMap to Gmail

> ⚡ **2,428 views** · ⚡ [Personal Productivity](../)

## Description

## Overview

This workflow automates weather forecast delivery by collecting city names, fetching 5-day forecasts from OpenWeatherMap, and generating professionally formatted HTML emails using GPT-4. The AI creates condition-based color-coded reports with safety precautions and sends them via Gmail.

## How It Works

A form trigger collects up to three city names, which are geocoded via OpenWeatherMap API to retrieve coordinates and 5-day forecasts. 

JavaScript nodes process the raw weather data into daily summaries, calculating temperature ranges, precipitation levels, wind speeds, and dominant weather conditions. 

GPT-4 then generates professionally formatted HTML emails with condition-based color coding: The AI intelligently adds contextual safety warnings for heavy rain, extreme heat, high winds, and thunderstorms. 

A validation node ensures proper JSON formatting before Gmail sends the final briefing.

## Use Cases

• Field ops & construction crew briefings
• Travel planning and itinerary preparation
• Outdoor event planning & coordination
• Logistics and transportation route planning
• Real estate property viewing scheduling
• Sports and recreational activity planning

## Setup Requirements

1) OpenWeatherMap API credentials
2) OpenAI API key
3) Gmail OAuth2 authentication

## Need Help?

Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!
README file available at https://tinyurl.com/MulticityWeatherForecast

## 🔗 Nodes Used

HTTP Request, OpenWeatherMap, Gmail, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
