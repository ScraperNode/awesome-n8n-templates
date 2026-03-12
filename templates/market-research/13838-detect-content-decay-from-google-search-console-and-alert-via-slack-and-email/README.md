# 📊 Detect content decay from Google Search Console and alert via Slack and email

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for?

SEO managers, content marketers, bloggers, and growth teams who want to automatically catch declining content performance before it's too late — without manually checking Google Search Console every week.

## What this workflow does

This workflow runs weekly to compare your recent Google Search Console performance against a historical baseline. It identifies pages experiencing traffic decay at three severity levels, sends detailed reports via Slack and email, logs all data to a tracking sheet, and auto-generates prioritized fix tasks for your most critical pages.

## How it works

1. **Weekly trigger** fires every Monday at 8 AM.
2. **Fetches two GSC date ranges in parallel** — the last 7 days (recent) and the previous 28 days (baseline, normalized to weekly averages).
3. **Compares per-page metrics** including clicks, impressions, average position, and CTR.
4. **Classifies each page** into one of five signals:
   - **CRITICAL_DECAY** — clicks dropped 50%+ or position fell 5+ spots with 30%+ click loss
   - **DECAYING** — clicks dropped 30%+ or position fell 3+ spots
   - **EARLY_DECAY** — clicks dropped 15%+ or position fell 1.5+ spots
   - **STABLE** — no significant change
   - **GROWING** — clicks increased 20%+
5. **Logs all results** to a `Decay Log` Google Sheet tab for historical trending.
6. **Builds a weekly report** with summary counts, estimated clicks lost, and per-page breakdowns.
7. **Sends the report** to Slack and email simultaneously.
8. **Auto-generates fix tasks** for critical pages with specific recommendations (backlink audit, content refresh, CTR optimization, or technical investigation) and logs them to a `Fix Tasks` sheet tab.

## Setup steps

1. **Set environment variables** in your n8n instance:
   - `GSC_SITE_URL` — your verified site URL (e.g., `https://yoursite.com`)
   - `DECAY_SHEET_URL` — URL of your Google Sheet for logging
2. **Create a Google Sheet** with two tabs:
   - `Decay Log` with headers: `date`, `page_path`, `signal`, `clicks_now`, `clicks_before`, `click_change_pct`, `position_now`, `position_before`, `position_change`, `impressions_now`, `impression_change_pct`, `ctr_now`
   - `Fix Tasks` with headers: `created`, `priority`, `page_path`, `page_url`, `signal`, `click_change_pct`, `position_change`, `recommended_action`
3. **Connect Google Search Console OAuth2** credentials (your site must be verified in GSC).
4. **Connect Google Sheets OAuth2** credentials.
5. **Connect Slack OAuth2** credentials and configure your alert channel.
6. **Configure email (SMTP)** credentials and update the recipient email address in the "Email Weekly Report" node.
7. **Activate** the workflow.

## Requirements

- n8n instance (self-hosted or cloud)
- Google Search Console property with verified ownership
- Google Cloud project with Search Console API and Sheets API enabled
- Slack workspace with a bot configured
- SMTP email credentials (or swap for Gmail node)

## How to customize

- **Decay thresholds** — Adjust the percentage and position-change cutoffs in the "Compare Periods and Detect Decay" code node to match your sensitivity needs.
- **Schedule** — Change from weekly to daily or bi-weekly in the trigger node.
- **Baseline period** — Modify the 28-day comparison window to 14 or 90 days.
- **Row limit** — Increase the `rowLimit` in GSC API calls beyond 500 if you have a large site.
- **Fix task logic** — Enhance the remediation recommendations with AI-powered content analysis or integrate with project management tools (Notion, Asana, Trello).
- **Notifications** — Add Telegram, Discord, or Microsoft Teams alongside or instead of Slack.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
