# 📊 Find and classify zero-click pages with Google Search Console and Gmail

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This weekly workflow pulls page-and-query performance from Google Search Console, identifies URLs with high impressions but near-zero clicks, classifies the likely cause based on average position and CTR, and emails a prioritized report via Gmail (with an optional OpenAI summary).

## How it works
1. Runs every Monday morning on a schedule.
2. Requests the last N days of Google Search Console Search Analytics data by page and query.
3. Merges URL variants (removing query strings/fragments), filters out operator-style queries, and keeps pages that exceed the impression threshold while staying under the max-click threshold.
4. Calculates average position and CTR, labels each page as TITLE_META, INTENT_MISMATCH, POSITION_TOO_LOW, or SERP_FEATURE, and estimates potential clicks.
5. Keeps the top 25 opportunities by impressions and stops if there is nothing to report.
6. Aggregates the results into a single report, optionally generates per-page recommendations with OpenAI, and sends the report by Gmail.

## Setup
1. Connect a Google Search Console OAuth2 credential with access to your property.
2. In the Config values, set your `siteUrl` (for example `sc-domain:example.com`), plus `days`, `minImpressions`, and `maxClicks` thresholds.
3. Set the recipient email address in the Gmail node and connect your Gmail credential.
4. (Optional) Enable the OpenAI step, add an OpenAI credential, and choose the model you want to use for the plain-language recommendations.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
