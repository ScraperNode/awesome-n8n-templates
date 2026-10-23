# 📈 Send a daily investment research email with Olostep, OpenAI, and Gmail

> ⚡ **34 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Daily Investment Research Email with Olostep, OpenAI, and Gmail

This n8n template researches a stock watchlist with Olostep, turns the results into a concise OpenAI-generated investment research report, converts the report into a styled HTML email, and sends it with Gmail.

It can run manually for testing or automatically at weekday US market open.

This workflow is for research automation only. It does not provide financial advice, price targets, or buy/sell/hold recommendations.

## What This Workflow Does

1. Runs at 9:30 AM US Eastern time on weekdays, or manually.
2. Reads a comma-separated stock watchlist.
3. Builds one investment research query per ticker.
4. Uses Olostep to search for public investment sources.
5. Combines the ticker results into one watchlist payload.
6. Uses OpenAI to create one Markdown report for the full watchlist.
7. Converts the report into a styled HTML email.
8. Sends the final report through Gmail.

## Requirements

- n8n
- Olostep account and API key
- OpenAI account and API key
- Gmail OAuth2 credential in n8n
- Olostep community node: `n8n-nodes-olostep`

## Required Credentials

Create or select these credentials after importing the workflow:

- Olostep credential for `Olostep Search - Investment Sources`
- OpenAI credential for `OpenAI - Create Full Watchlist Email Report`
- Gmail OAuth2 credential for `Send HTML Email via Gmail`

The workflow export does not include API keys, OAuth tokens, credential IDs, personal email addresses, or instance metadata.

## Setup Instructions

1. Install the Olostep community node in n8n:

   ```text
   Settings -&gt; Community nodes -&gt; Install
   ```

   Package:

   ```text
   n8n-nodes-olostep
   ```

2. Open the credential-backed nodes and select your local credentials:

   ```text
   Olostep Search - Investment Sources
   OpenAI - Create Full Watchlist Email Report
   Send HTML Email via Gmail
   ```

3. Open `Investment Watchlist` and update:

   ```text
   tickers
   email_to
   email_from
   email_subject_prefix
   ```

4. Run the workflow with `Manual Test Trigger`.

5. Review the email output.

6. Activate the workflow when ready.

## Schedule

The schedule trigger uses:

```text
30 9 * * 1-5
```

Run n8n with the `America/New_York` timezone if you want this to match 9:30 AM US Eastern market open.

The workflow does not automatically skip US market holidays. Add a market-calendar check if you need holiday-aware execution.

## Example Use Case

An investor or analyst wants a daily pre-work research digest for a stock watchlist such as `MSFT,NVDA,AAPL`. Instead of manually searching filings, investor relations pages, earnings updates, and market news every morning, this workflow gathers public source results, summarizes opportunity signals and risk signals, and sends one structured HTML email for review.

## Customization Ideas

- Add more tickers to the watchlist.
- Change the email recipient list.
- Adjust the report prompt for a different research style.
- Add a market-calendar step to skip exchange holidays.
- Replace Gmail with another email provider supported by n8n.

## 🔗 Nodes Used

Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
