# 📊 Flag Meta Audience Network wasted spend with Meta Marketing API and Claude

> ⚡ **27 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow pulls Meta Ads placement insights, flags underperforming Audience Network slices based on spend and CPA thresholds, uses Anthropic Claude to rank recommended actions, and compiles a plain-text leak report that is sent via Gmail.

## How it works
1. Runs manually to start the analysis.
2. Requests the last 30 days of Meta Marketing API account insights broken down by publisher platform and platform position.
3. Calculates a non–Audience Network cost-per-result benchmark from your other placements, then flags Audience Network placements with zero results or CPA far above the benchmark and estimates recoverable spend.
4. Sends the flagged placement list and benchmark context to Anthropic Claude to generate a prioritized JSON action plan (exclude, keep, or investigate).
5. Formats Claude’s response into a readable Audience Network leak report and sends it as an email via Gmail.

## Setup
1. Set environment variables for Meta Marketing API access (META_ACCESS_TOKEN, META_AD_ACCOUNT_ID, and optionally META_API_VERSION).
2. Add an Anthropic API key in the ANTHROPIC_API_KEY environment variable.
3. Configure the Gmail credential and set the email recipients/subject in the Gmail Send node.
4. Review and adjust the thresholds and RESULT_ACTIONS list to match your conversion events and acceptable Audience Network performance.

## 🔗 Nodes Used

HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
