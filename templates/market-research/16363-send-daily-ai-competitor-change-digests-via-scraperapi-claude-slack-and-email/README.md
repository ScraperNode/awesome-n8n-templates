# 📊 Send daily AI competitor change digests via ScraperAPI, Claude, Slack and email

> ⚡ **36 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow monitors a list of competitor web pages daily using ScraperAPI, detects meaningful content changes, summarizes them with Anthropic Claude, stores the latest snapshots in an n8n Data Table, and sends a daily digest to Slack and email (Gmail or SMTP).

## How it works
1. Runs on a daily schedule at 8am (and can be run manually to initialize the storage table).
2. Builds a list of competitor URLs to monitor, including the ScraperAPI proxy country code for each target.
3. Iterates through the URLs, scrapes each page via ScraperAPI, cleans/truncates the markdown content, and computes a hash for change detection.
4. Looks up the previous snapshot for each URL in an n8n Data Table and determines whether the content has materially changed.
5. For changed pages, sends the previous and current snapshots to Anthropic Claude to generate a short change summary and upserts the updated snapshot and summary back into the Data Table.
6. For unchanged pages, upserts the latest “last seen” timestamp and hash into the Data Table.
7. After processing, fetches today’s changed summaries from the Data Table, assembles a daily digest, and posts it to Slack and sends it via Gmail and/or SMTP.

## Setup
1. Add a ScraperAPI credential and ensure it is selected in the ScraperAPI node.
2. Add an Anthropic credential for the Claude chat model used by the AI agent.
3. Configure the competitor URL list (and optional `countryCode`) in the “Prepare URL List” code step.
4. Add Slack credentials and set the target channel for posting the digest.
5. Configure email delivery by setting up either Gmail credentials and the recipient address, or SMTP settings (from/to addresses and SMTP credential details).

## 🔗 Nodes Used

Send Email, Slack, Webhook, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
