# 📊 Find scalable Meta Ads winners with Claude and email the budget plan via Gmail

> ⚡ **35 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow pulls Meta Ads performance and budget data, identifies ads beating account benchmarks, calculates safe budget lifts for capped winners, and uses Anthropic Claude to write a scaling plan, then emails the formatted report via Gmail.

## How it works
1. Runs when you start the workflow manually.
2. Fetches account, ad, ad set, and campaign insights plus ad set and campaign budget entities from the Meta Marketing API for the selected date preset.
3. Calculates the account benchmark (ROAS for sales accounts or cost per result for lead-gen), filters ads that meet spend and results thresholds, and ranks the top winners that beat the benchmark.
4. Detects whether each winner is budget-capped and/or has frequency headroom, then computes an approved budget step and estimated extra weekly results or revenue for capped winners.
5. Sends the ranked winners and approved budget steps to Anthropic Claude to generate a concise scale order, recommended first move, and stop-scaling caution.
6. Formats the AI output and winner details into a text report and emails it using Gmail.

## Setup
1. Set environment variables for META_ACCESS_TOKEN, META_AD_ACCOUNT_ID, and optionally META_API_VERSION, with access to the required Meta Marketing API insights and entity endpoints.
2. Add an Anthropic API key in ANTHROPIC_API_KEY for the Claude request.
3. Connect a Gmail account and set the recipient, subject, and any other email options in the Gmail node.
4. Review and tune thresholds (date preset, minimum spend/results, beat percentage, frequency headroom, cap utilisation, and lift percentage) in the configuration code step before activating.

## 🔗 Nodes Used

HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
