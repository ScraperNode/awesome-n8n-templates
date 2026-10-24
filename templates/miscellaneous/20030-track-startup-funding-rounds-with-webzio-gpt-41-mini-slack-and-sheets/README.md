# 🔧 Track startup funding rounds with Webz.io, GPT-4.1-mini, Slack and Sheets

> ⚡ **21 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow runs every morning to search Webz.io news for recent startup funding announcements by sector, uses OpenAI (GPT-4.1-mini) to extract structured round details, deduplicates and filters results, then posts a Slack alert and appends new rounds to a Google Sheets lead list.

## How it works
1. Runs every day at 08:00 using the Schedule Trigger.
2. Reads your sector, stage, lookback window, article count, minimum round size, and Slack channel settings and splits the sector list into one search per sector.
3. For each sector, an OpenAI GPT-4.1-mini agent calls the Webz.io news search tool and extracts qualifying funding rounds into a consistent structured format.
4. Deduplicates rounds across sectors and past workflow runs using workflow static data, filters out rounds below the minimum amount, and composes a grouped Slack message.
5. If any new rounds remain, posts the alert to the selected Slack channel.
6. Splits the new rounds into individual records and appends them as rows to Google Sheets.

## Setup
1. Create a Webz.io API token and add it as a Bearer Auth credential in the Webz.io news search tool configuration.
2. Add an OpenAI credential for the GPT-4.1-mini chat model (or swap in another tool-calling chat model).
3. Add a Slack credential with a bot token that can post messages, set the target channel name, and invite the bot to that channel.
4. Connect Google Sheets credentials, select the target spreadsheet and sheet/tab in the append step, and ensure the sheet has columns matching the round fields (for example: found_at, company, round_type, amount_usd, lead_investors, sector, company_description, headline, publisher, announced, url).
5. Review and update the values in the Funding tracker settings step (sectors, stages, minAmountUsd, lookbackDays, articleCount, and slackChannel) and set the workflow timezone so 08:00 runs at the expected local time.

## 🔗 Nodes Used

Google Sheets, Slack, Stop and Error, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
