# 📊 Find wasted Meta ad spend by placement, region, age and hour with Claude

> ⚡ **75 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow pulls the last 30 days of Meta Ads insights across multiple breakdowns, calculates an account cost-per-result benchmark, flags high-waste delivery slices, and uses Anthropic Claude to rank a prioritized “kill list” with recommended actions.

## How it works
1. Runs when triggered manually.
2. Sets the analysis configuration, including the date preset, spend floor, cost-per-result multiple, minimum attribution threshold, and which Meta “action” events count as results.
3. Queries the Meta Marketing API for account-level insights and breakdown insights (placement, region, age/gender, and hour), then computes the account cost-per-result benchmark and skips breakdowns with low conversion attribution coverage.
4. Flags breakdown slices that exceed the spend floor and either have zero results or a cost-per-result above the benchmark threshold, then calculates “at risk” spend and keeps the top waste candidates.
5. Sends the waste list and benchmark context to Anthropic Claude to rank the slices and return a recommended action (pause, exclude, or reallocate) with a one-line rationale.
6. Prints a formatted wasted-spend report (and returns the parsed JSON ranking) for use in downstream reporting.

## Setup
1. Add your Meta Marketing API details as environment variables: META_ACCESS_TOKEN, META_AD_ACCOUNT_ID (act_...), and optionally META_API_VERSION.
2. Add your Anthropic credential as an environment variable (ANTHROPIC_API_KEY) to enable Claude ranking.
3. Review and adjust RESULT_ACTIONS, SPEND_FLOOR, CPR_MULTIPLE, and MIN_ATTRIBUTION in the configuration step to match the conversion events and thresholds you optimize for.

## Requirements
- A Meta access token with ads_read on the ad account
- A Meta ad account with conversion/result events configured
- An Anthropic API key (Claude)

## Customization
- Edit RESULT_ACTIONS to the conversion events you optimize for (leads, registrations, purchases)
- Tune SPEND_FLOOR, CPR_MULTIPLE, and MIN_ATTRIBUTION in Config
- Swap the stdout report node for a Slack or email node
- Add a Schedule trigger for a daily kill list

## Additional info
Built by nocode.expert (done-for-you automation and tracking). Auto-skips delivery breakdowns Meta does not attribute conversions to, so you never get false waste. All secrets read from environment variables.

## 🔗 Nodes Used

HTTP Request, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
