# 📊 Weekly Google Search Console SEO pulse: Catch top movers across keyword segments

> ⚡ **1,592 views** · 📊 [Market Research & Insights](../)

## Description

## This workflow tracks week-over-week changes in Google Search Console performance and highlights the top movers across keyword segments like brand, nonbrand, and content categories.

Instead of providing a routine check, it focuses on significant movements by:
- Sending a Slack alert only if a query crosses a defined movement threshold.
- Emailing a structured report with the Top 25 increases and Top 25 decreases for clicks, including % changes and linked URLs

It’s designed to surface the most important shifts, helping SEO teams catch big wins, losses, or anomalies early.

### How it works
1. Runs weekly (e.g. every Monday) to compare last week’s GSC data to the week prior.
2. Segments traffic based on query and page (e.g. brand terms, category page URLs, etc.).
3. Calculates delta and % change for clicks, CTR, impressions, and position.
4. Filters and flags top movers with large shifts (default: ±200 clicks and ±30%).
5. Sends Slack alerts only if meaningful changes are detected.
6. Emails a full HTML table report showing the Top 25 up/down queries per segment.

### Setup steps
- Requires a connected Google Search Console account.
- Slack alert is included by default (can be replaced with email, webhook, or other tools).
- Customize your brand terms and URL filters to match your segments (e.g. recipes, blog, category pages).
- Typical setup time: 15–25 minutes depending on the number of segments and filters you want.

*Note: “Recipes” is used in the example to show how to segment by content type. You can update this to reflect your own site’s structure.*

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
