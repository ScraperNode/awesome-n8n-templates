# 📊 Compare product prices from Amazon, Walmart and Google Shopping via Telegram using OpenAI

> ⚡ **365 views** · 📊 [Market Research & Insights](../)

## Description

Send a product name to Telegram, compare offers across Amazon, Walmart, and Google Shopping, and get the best sensible buying recommendation with confidence level, price range, and a direct purchase link.

## What this template does

This template transforms Telegram into a smart product price comparison tool. Once a user sends a product name, the workflow simultaneously searches Amazon, Walmart, and Google Shopping, standardizes all results into a unified format, and delivers the most practical buying recommendation.

Rather than blindly picking the lowest price, an AI step filters out poor matches, suspiciously cheap listings, and mismatched product variants to ensure the recommendation is trustworthy.


## How it works

1. A user sends a product name to the Telegram bot.
2. The workflow queries Walmart, Amazon, and Google Shopping in parallel.
3. Each marketplace response is cleaned and mapped into a consistent offer structure.
4. All offers are merged and consolidated into a single dataset.
5. An AI agent evaluates price, seller, reviews, and match quality to identify the best sensible offer.
6. A Telegram message is sent back with the recommended price, seller, price range, offer count, confidence level, reasoning, and a direct purchase link.


## Requirements
Before using this template, connect the following credentials:

Telegram API
OpenAI
SerpApi

You'll also need to add your own SerpApi key, review the marketplace query settings, and adjust or remove any fixed search location values as needed.

## Example input

DJI Osmo Pocket 3 Creator Combo [file:73]

## Example output

🔎 DJI Osmo Pocket 3 (Creator Combo / Osmo Pocket 3 family)
✅ Best Price: $557.91
🏪 Seller: B&Z Legend
📊 Range: $6.85 - $1349.99
🧩 Comparable Offers: 69
🎯 Confidence: Medium
📝 Why this was chosen: Chosen the lowest sensible price among New/unspecified offers: B&Z Legend at $557.91. Much cheaper listings (&lt; ~$200) appear anomalous or risky (very low prices, unclear sellers). There are lower open-box offers (e.g., $498.75) but they carry added risk; established retailers (Best Buy, Official DJI store, OE USA) list in the ~$569–$999 range if you prefer retailer security.
🔗 Link: https://www.walmart.com/ip/DJI-Osmo-Pocket-3-Creator-Combo-4K-120fps-Camera-1-CMOS-3-Axis-Stabilization-Face-Object-Tracking-Mic-Clear-Sound-Vlogging-Photography/10583721243?classType=VARIANT


If no strong match is found, the workflow prompts the user to try a more specific product name.

## Good to know

Results may vary depending on marketplace availability, search query quality, and regional settings. Using specific product names typically yields more accurate recommendations than broad or generic searches.

More specific product names usually produce better recommendations than broad searches.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
