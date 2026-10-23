# 📊 Send weekly marketing performance briefs from GA4, GSC, SegMetrics and Slack

> ⚡ **21 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every Monday to pull weekly performance data from Google Analytics 4, Google Search Console, and SegMetrics, uses OpenAI to generate an executive marketing brief and audio narration, and posts the formatted summary with an MP3 attachment to a specified Slack channel.

## How it works
1. Runs every Monday morning on a schedule and loads client settings (properties, API key, Slack channel, and date ranges).
2. Fetches current-week and previous-week metrics from Google Analytics 4, plus channel and UTM campaign breakdowns.
3. Queries the Google Search Console Search Analytics API for current vs. previous week performance, top queries, and top pages.
4. Requests SegMetrics reports for revenue, leads, and ad spend for the current week and previous week.
5. Validates GA4 UTM tagging completeness and calculates a UTM health score with the most common issues.
6. Aggregates all sources, calculates week-over-week changes, and sends the combined dataset to OpenAI to generate a structured JSON weekly brief.
7. Formats the AI brief into Slack-ready text and an audio script, converts the script to an MP3 using OpenAI text-to-speech, and uploads the file to Slack with the summary as the message comment.

## Setup
1. Add credentials for Google Analytics (GA4 OAuth), Google (OAuth for the Search Console API HTTP requests), OpenAI, and Slack (OAuth2 with permission to upload files).
2. Update the client placeholders in the configuration step, including GA4 property ID, Search Console property (site URL or sc-domain), SegMetrics account ID and API key, client name/website, and the target Slack channel ID.
3. Invite/authorize the Slack app to the target channel so it can post messages and upload the MP3 attachment.

## 🔗 Nodes Used

HTTP Request, Slack, Google Analytics, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
