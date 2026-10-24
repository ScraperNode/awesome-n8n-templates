# 📊 Catch Amazon MAP price breaches with Bright Data, Data Tables and Telegram

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every morning to check Amazon listings via Bright Data against your MAP policy stored in n8n Data Tables, logs detected breaches, and sends a Telegram digest when unauthorized sellers or under-floor prices are found.

## How it works
1. Runs every day at 07:00.
2. Reads MAP policy rows from the n8n Data Table (map_policy) and builds a capped watch list of product lines to check.
3. For each product line, triggers a Bright Data Amazon dataset keyword discovery job, then polls Bright Data until the snapshot is ready (or a maximum poll limit is reached).
4. Downloads the snapshot and flattens the buy box and other-seller offer data into one row per seller offer, tracking ASINs where the offer list is missing.
5. Compares each offer to your policy to flag breaches where the seller is not authorized and/or the price is below the MAP floor (with a configurable tolerance), and builds a Markdown digest.
6. If breaches exist, inserts them into the n8n Data Table (map_breaches) and sends the digest to Telegram; otherwise the workflow ends without sending an alert.

## Setup
1. Create a Bright Data account, add an HTTP Header Auth credential in n8n, and ensure you have access/credits for the Bright Data dataset used in the workflow.
2. Create two n8n Data Tables named map_policy and map_breaches and add the columns expected by the workflow (including keyword, brand, asins, map_price, authorized_sellers for map_policy).
3. Add a Telegram credential in n8n and set your target chat ID in the Settings step (telegram_chat_id).
4. Review and adjust Settings values such as max_terms, results_per_term, price_tolerance_percent, and max_polls to match your catalogue size and desired sensitivity.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
