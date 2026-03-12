# 📊 Generate an AI YouTube trend report with GPT-4o, Google Sheets and PDF.co

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

## Description

# AI YouTube Trend Intelligence Report: YouTube API + GPT-4o + PDF Dashboard

Who is this for?
AI creators, marketers, agencies, and researchers tracking YouTube trends who need weekly high-signal insights without 4+ hours manual research.

___
**What problem is this workflow solving?
Trend hunting is exhausting:**

- Scanning 500+ videos across keywords

- Manual engagement calculations

- No automated filtering or analysis

- Scattered spreadsheets vs polished reports

- This workflow auto-discovers top videos, ranks by engagement, and delivers branded PDF + Sheets dashboard.

___
**What this workflow does**

1. Trigger: Form input (keywords, days back) or weekly cron
2. YouTube API: Searches 10 keywords → ~500 videos (past 7 days)
3. Ranking: Views + engagement rates → top performers
4. Google Sheets: Exports channels/videos/keywords/stats
5. GPT-4o: Analyzes trends → content recommendations
6. PDF.co: HTML charts → branded PDF report
7. Gmail: Delivers to inbox

___
**Setup:**(5 minutes)

- YouTube Data API v3 key (HTTP Query Auth)

- Google Sheets OAuth2 for exports

- OpenAI API (GPT-4o-mini)

- PDF.co for HTML-to-PDF

- Gmail OAuth2 + recipient email

- Fully configurable env vars—no hardcoded IDs.

**How to customize:**

- Edit 10-term list for your niche

- Filters: Adjust min views (1k), engagement (2%)

- Schedule: Daily/weekly cron

- Output: Swap Gmail for Slack/Notion

- Scale: 1000s videos/month

**ROI:**

- 4+ hours saved weekly

- 20% higher content performance

- Automated competitive intel

- Zero manual spreadsheet work

___
**Need help customizing?**
Contact me for consulting and support: LinkedIn / **[Message](https://tally.so/r/E

___
**Keywords:** YouTube trend analysis, AI YouTube research, YouTube analytics automation, content trend tracker, video engagement ranking, YouTube API n8n, weekly YouTube report, YouTube keyword monitoring

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
