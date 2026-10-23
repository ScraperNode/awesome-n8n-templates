# 📊 Find and score Zillow price cuts with Bright Data, GPT-5.6, Sheets and Slack

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily (or on demand) to discover Zillow listings via Bright Data, detect recent price cuts and underpriced homes, score them using comparable-sales $/sqft, and then uses OpenAI to generate short verdicts before logging results to Google Sheets and posting a digest to Slack.

## How it works
1. Runs on a daily schedule or via an n8n form submission where you enter a target location.
2. Triggers a Bright Data Zillow discovery dataset with the configured market filters and repeatedly polls Bright Data until the snapshot is ready (or times out).
3. Downloads the discovered listings, removes failed crawl rows and out-of-scope results (for example above the max price or below the minimum beds), and extracts comparable-sales data for benchmarking.
4. Analyzes each listing’s price history to detect recent price cuts, including both explicit “Price change” events and relists at a lower price.
5. Calculates a local benchmark $/sqft (median of comparable sales), computes discounts, save-rate signals, and a combined score, then keeps only the top qualifying listings.
6. Uses OpenAI (GPT-5.6) to produce a structured verdict, reason, and watch-out note for each selected listing.
7. Appends the final listing report rows to Google Sheets and posts a formatted digest of the findings to a Slack channel.

## Setup
1. Add a Bright Data HTTP Header Auth credential with `Authorization: Bearer <YOUR_KEY>`.
2. Connect your OpenAI credential and ensure the model selection (gpt-5.6-terra) is available in your account.
3. Connect your Google Sheets OAuth credential and replace the spreadsheet URL/ID, ensuring a sheet named “Listings” exists.
4. Connect your Slack credential and set the target channel (for example `#property`) in the Slack message step.
5. Update the market and thresholds in the Settings (location, listing category, days on Zillow, listings per run, max price, min beds, minimum discount %, and max listings), and optionally enable the form trigger for on-demand runs.

## Requirements
- A Bright Data account with access to the Zillow properties dataset. Discovery is billed per record and is slow, so `listings_per_run` is the knob that decides both cost and runtime. Google Sheets and Slack credentials. No community nodes: every Bright Data call is a plain HTTP Request node.

## Customization
- Two entry points ship wired: the daily schedule, and a form trigger for a market somebody names on the spot. Four optional nodes sit unwired beside the chain, each with a note saying where it splices in. "Route By Verdict" is a Switch that sends worth-a-viewing, watch-it and skip to different places. "Estimate The Monthly Payment" turns each asking price into a repayment at a rate and deposit you set. "Cap The Digest" limits a hot market to the top N listings. "Email The Listing Digest" mails the same message a client can read. Settings also holds the market, price ceiling, minimum beds, minimum discount and the cut window.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
