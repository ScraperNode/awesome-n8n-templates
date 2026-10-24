# 📊 Track job skill demand and pay with Bright Data, OpenAI, Google Sheets and Slack

> ⚡ **30 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to discover live LinkedIn job postings via Bright Data, uses OpenAI (GPT-5.6) to extract required skills and any stated pay, compares results with prior runs stored in Google Sheets, and posts a market digest to Slack.

## How it works
1. Runs on a weekly schedule and sets the target role keyword, location, and scan limits.
2. Triggers a Bright Data keyword-based LinkedIn jobs discovery and polls the snapshot status until the results are ready.
3. Downloads the discovered job posts, removes duplicates and low-quality entries, and trims descriptions while preserving any pay-related text.
4. Uses OpenAI (GPT-5.6) to extract up to 10 concrete skills plus experience, remote policy, and any disclosed pay from each posting.
5. Aggregates skills by counting how many postings require each one, normalises pay into annual figures when possible, and calculates market-level summaries.
6. Reads the previous scan from Google Sheets to flag rising, falling, new, and dropped skills compared to the last date for the same role and market.
7. Writes one row per skill to Google Sheets for trending over time and posts a formatted digest (including a brief narrative) to a Slack channel.

## Setup
1. Add a Bright Data API key using an HTTP Header Auth credential with `Authorization: Bearer <YOUR_KEY>`.
2. Add OpenAI API credentials for the GPT-5.6 chat model used for extraction and brief writing.
3. Connect Google Sheets credentials, create a spreadsheet with a sheet/tab named "Skill demand", and set the spreadsheet URL in the configuration.
4. Connect Slack credentials and set the target channel name in the configuration.
5. Update the role keyword, location, country, time range, job type, and jobs-per-scan values in the configuration before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
