# 📊 Monitor WordPress content health weekly with Telegram and Slack alerts

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

Automatically monitor the health of your WordPress content every week. This workflow scans your published posts and identifies three common content issues that hurt SEO performance:

**What it detects:**
- **Stale content** — posts that haven't been updated in 180+ days (search engines favor freshness)
- **Thin content** — posts with fewer than 300 words (thin pages rank poorly)
- **Missing images** — posts without images in the opening section (reduces engagement and CTR)

**How it works:**
1. Runs every Monday at 7 AM UTC via schedule trigger
2. Fetches published posts from the WordPress REST API (public endpoint — no auth needed for most sites)
3. Analyzes each post against configurable freshness, word count, and image thresholds
4. Calculates an overall health score percentage
5. If issues are found, sends a formatted report via Telegram and/or Slack
6. If all content is healthy, the workflow ends silently (no spam alerts)

**Output report includes:**
- Total posts scanned
- Stale content list (sorted by most outdated)
- Thin content list (with word counts)
- Missing image list
- Overall health score percentage

**Setup time:** Under 5 minutes. Just enter your WordPress URL and connect a Telegram bot or Slack webhook.

**Thresholds are fully customizable** — change the stale days, minimum word count, or number of posts to scan in the configuration nodes.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
