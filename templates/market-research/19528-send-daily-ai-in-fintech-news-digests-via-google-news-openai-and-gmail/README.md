# 📊 Send daily AI-in-fintech news digests via Google News, OpenAI and Gmail

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily, pulls recent Google News RSS results for selected fintech/payments companies and regulators, filters and deduplicates stories, uses OpenAI to validate AI-in-payments relevance and summarize coverage, then emails an HTML digest to recipients via Gmail.

## How it works
1. Runs every day at 8:00 AM based on a cron schedule.
2. Builds Google News RSS search URLs for each configured company/regulator and fetches the RSS feeds.
3. Parses RSS items into article candidates, keeps only items within the lookback window that mention AI-related keywords, and removes exact duplicates by URL or normalized title.
4. Sends the remaining candidates to OpenAI Chat Completions to strictly filter for AI applied to fintech/payments, semantically merge near-duplicate stories, and generate a one-sentence summary per surviving item.
5. Formats the resulting articles into an HTML email with counts and source attribution.
6. Sends the digest via Gmail only when at least one relevant article is found; otherwise the workflow ends without sending an email.

## Setup
1. Add an OpenAI API credential for the OpenAI Chat Completions request.
2. Add a Gmail OAuth2 credential for sending email.
3. Update the Config values for recipient emails, lookbackHours, openaiModel, and the tracked sources list.
4. Adjust the cron expression and set the workflow timezone to match when you want the digest to send.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
