# 📊 Weekly Google Search Console SEO pulse: Organic & brand vs non-brand performance

> ⚡ **840 views** · 📊 [Market Research & Insights](../)

## Description

## This workflow generates a weekly performance summary from Google Search Console, focused on brand-level SEO metrics and week-over-week trends.

It provides a structured view of how each brand segment is performing, with clean formatting for quick insights.

Key Features
- Sends a weekly email with a table showing clicks, impressions, CTR, and position — along with % change vs. the previous week.
- Highlights both brand and non-brand clicks separately.
- Color-coded % changes make it easy to spot wins (green) and losses (red) at a glance.

It’s designed to give SEO teams a consistent overview of performance by brand, helping to track directional shifts and support deeper analysis when needed.

### How it works
1. Runs weekly (e.g. every Monday) to compare “Last Week” vs. “2 Weeks Ago” from GSC data.
2. Includes both brand + non-brand click breakdown.
3. Calculates raw values and week-over-week % change for clicks, impressions, CTR, and position.
4. Outputs a clean, formatted table with labeled rows and color-coded changes.
5. Sends the table as part of a scheduled email (can also be adapted for Slack or other channels).

### Setup steps
- Requires connected Google Search Console data (per brand segment).
- Email delivery is included by default (customizable to other platforms).
- Update brand segmentation logic to match your tracking needs (e.g. domain, label, or custom filters).
- Typical setup time: ~5-10 minutes with structured input data.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
