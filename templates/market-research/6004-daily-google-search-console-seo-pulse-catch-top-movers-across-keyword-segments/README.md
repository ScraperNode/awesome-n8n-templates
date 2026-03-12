# 📊 Daily Google Search Console SEO pulse: Catch top movers across keyword segments

> ⚡ **561 views** · 📊 [Market Research & Insights](../)

## Description

### This workflow helps SEO teams catch top movers in Google Search Console by comparing daily performance across keyword segments like brand, nonbrand, and content categories. 

Instead of serving as a routine check, it highlights the queries and pages with the biggest jumps or drops, making it ideal for spotting wins, losses, or unexpected shifts early.

### How It Works
1. Runs daily on a scheduled trigger (e.g. every morning).
2. Pulls GSC data for the prior two days (e.g. yesterday vs. day before).
3. Segments traffic by keyword type or URL pattern (e.g. brand, nonbrand, recipes, blogs, etc.).
4. Calculates changes in clicks, impressions, CTR, and average position.
5. Flags top movers with the biggest positive or negative deltas.
6. Sends structured reports via Slack or email, grouped by segment and sorted by impact.

### Setup Steps
- Connect your Google Search Console account and optionally Gmail or Slack.
- Swap in your own domain(s) and customize segmentation logic (e.g. brand terms, path filters).
- By default, the workflow includes Slack alerts, but these can be easily switched to or combined with email, webhook, or other channels.
- Full setup takes around 15–20 minutes with working GSC credentials.

*Note: The “recipes” segment is included as an example of how to segment content. This can be changed to match blog, FAQ, product pages, or any other category.*

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
