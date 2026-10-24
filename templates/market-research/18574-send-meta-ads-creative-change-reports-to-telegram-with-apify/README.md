# 📊 Send Meta Ads creative change reports to Telegram with Apify

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily and monitors Meta Ads Library creatives for changes using an Apify Actor, then sends a single formatted change report (or failure alert) to a Telegram chat with links to the full Apify dataset and run details.

## How it works
1. Runs every day at 08:00 (or on manual test) to start a monitoring cycle.
2. Builds a safe Apify Actor input from your targets (brand terms or Facebook page URLs) and applies filters like country, active status, media type, and maximum ads per target.
3. Runs the Apify Actor `luminar~meta-ads-library-creative-changefeed` with a maximum cost-per-run guard and waits for the run to finish.
4. If the run succeeds, fetches the Actor’s dataset items from Apify and analyzes them to detect NEW, UPDATED, and ENDED ads and any coverage warnings.
5. Renders exactly one HTML Telegram message that summarizes changes (or confirms “no changes”), and adds buttons to open the Apify dataset and the run & cost page.
6. If the Apify run does not finish successfully, sends a Telegram failure alert with a link to the failed Apify run.

## Setup
1. Install the community node package `@apify/n8n-nodes-apify` in your n8n instance.
2. Add an Apify OAuth2/API credential and connect it to both Apify nodes used to run the Actor and read the dataset.
3. Add a Telegram bot credential, start a chat with the bot, and set your Telegram chat ID in the Monitoring settings.
4. Update Monitoring settings with your targets, country/status/media filters, max ads per target, and the maximum cost per run in USD.
5. Test the workflow with the manual trigger, then activate the daily 08:00 schedule.

## 🔗 Nodes Used

Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
