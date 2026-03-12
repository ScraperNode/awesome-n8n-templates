# 📊 Aggregate tech trend signals from RSS feeds into Google Sheets and Slack

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for?

Founders, product managers, content strategists, indie hackers, and anyone who wants to automatically monitor tech industry trends across multiple sources — without manually browsing Hacker News and Product Hunt every day.

## What this workflow does

This workflow scans public RSS feeds from Hacker News and Product Hunt daily, scores every item against configurable keyword groups (AI, SaaS, No-Code, Dev Tools, etc.), clusters the results into ranked themes, and delivers a prioritized intelligence report via Slack and email. All signals and themes are logged to Google Sheets for historical trend analysis.

## How it works

1. **Daily trigger** fires on a configurable schedule (default: every 24 hours).
2. **Fetches RSS feeds** from Hacker News (posts with 50+ points) and Product Hunt in parallel.
3. **Parses and normalizes** all feed items — extracting titles, descriptions, URLs, and publish dates from RSS/Atom XML.
4. **Scores each item** against 7 weighted keyword groups. Title matches receive a bonus multiplier. Source weights (Hacker News 1.5x, Product Hunt 1.3x) amplify signals from higher-authority sources.
5. **Clusters into themes** — groups scored items by primary category, calculates theme strength using source diversity and volume bonuses, and classifies each as VERY_STRONG, STRONG, MODERATE, or WEAK.
6. **Builds an intelligence report** with theme rankings, top 10 signals, and action items for surging topics. Generated in both plain text (Slack) and HTML (email).
7. **Delivers and logs** — posts to Slack, sends HTML email, and appends both individual signals and theme summaries to separate Google Sheet tabs.

## Setup steps

1. **Connect Google Sheets OAuth2** credentials and update the Sheet ID in both "Log Signals to Sheet" and "Log Themes to Sheet" nodes.
2. **Create a Google Sheet** with two tabs:
   - `signal` — headers: `date`, `title`, `source`, `score`, `category`, `url`
   - `themes` — headers: `date`, `category`, `signal_level`, `theme_strength`, `item_count`, `sources`, `top_keywords`
3. **Connect Slack OAuth2** credentials and configure your target channel in the "Post Report to Slack" node.
4. **Connect Gmail OAuth2** credentials and update `YOUR_EMAIL@EXAMPLE.COM` in the "Email Daily Report" node.
5. **Activate** the workflow.

## Requirements

- n8n instance (self-hosted or cloud)
- Google Cloud project with Sheets API enabled
- Slack workspace with a bot configured
- Gmail account with OAuth2 credentials (or swap for SMTP)
- No API keys needed for RSS feeds — they are publicly accessible

## How to customize

- **Add more RSS feeds** — duplicate a feed node (e.g., TechCrunch, Reddit, Lobsters), connect it to the Merge node as an additional input, and add the parsing logic in the "Parse All RSS Feeds" code node.
- **Edit keyword groups** — modify the `keywordGroups` object in the "Score and Classify Signals" node. Add your industry-specific keywords, adjust weights, and rename categories.
- **Adjust source weights** — change the weight multipliers in the parser node to reflect which sources you trust most.
- **Theme thresholds** — modify the strength cutoffs (30 = VERY_STRONG, 15 = STRONG, 8 = MODERATE) in the "Aggregate Signals into Themes" node.
- **Schedule** — change from daily to hourly for real-time monitoring, or weekly for a digest format.
- **Add AI analysis** — insert an LLM node after the report builder to generate strategic commentary on detected trends.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
