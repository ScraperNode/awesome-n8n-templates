# 📊 Identify competitor YouTube outlier videos with Bright Data, OpenAI, Sheets and Slack

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to scrape competitor YouTube channels via Bright Data, identify videos that outperform each channel’s own baseline, analyze each outlier’s hook and structure with OpenAI (GPT-5.6), log results to Google Sheets, and send a ranked digest plus brief to Slack.

## How it works
1. Runs on a weekly schedule and loads the competitor channel URLs and scan settings.
2. Triggers a Bright Data YouTube discovery dataset scrape and polls the snapshot status until the results are ready.
3. Downloads the scraped video data and calculates views-per-day, then flags outliers by comparing each video to its own channel’s median baseline (with shorts handled separately).
4. Reads prior results from Google Sheets and filters out videos briefed within the configured cooldown window, selecting the top outliers up to the per-run limit.
5. Uses OpenAI (GPT-5.6) to extract hook type, promise, and topics from each outlier’s transcript opening and chapter titles, then generates a short cross-video content brief.
6. Appends one row per outlier to Google Sheets and posts a formatted ranked digest (including the brief) to the configured Slack channel.

## Setup
1. Add a Bright Data API key as an HTTP Header Auth credential (Authorization: Bearer <token>) for the Bright Data HTTP requests.
2. Add OpenAI credentials for the GPT-5.6 chat model used to extract structure and write the brief.
3. Connect Google Sheets credentials, create an “Outliers” sheet tab, and replace the placeholder Google Sheets URL with your spreadsheet.
4. Connect Slack credentials and set the target channel name (for example, #content) in the configuration.
5. Update the competitor channel URLs and any thresholds (videos per channel, min views, outlier multiple, shorts max seconds, cooldown days, and ideas per run) in the workflow configuration.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
