# 📊 Monitor backlink profile with SE Ranking and export to Google Sheets

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

## Description

![image.png](fileId:4023)

## Who is this for
- SEO pros tracking client link building progress
- Website owners watching their backlink growth
- Digital marketers analyzing domain authority trends

## What this workflow does
Check your backlink profile to see which sites are linking to you, track new links you've gained, spot links you've lost, and export everything to Google Sheets.

## What you'll get
- Total backlinks and referring domains snapshot
- New backlinks you gained in the last 30 days
- Lost backlinks from the last 30 days (with reasons why)
- Your top referring domains ranked by authority
- Anchor text analysis showing how sites link to you
- Domain authority scores and trust metrics
- Daily trends showing link gains and losses
- Historical growth data over the last 60 days

## How it works
1. Pulls your overall backlink profile stats
2. Checks for new backlinks from the last month
3. Identifies which backlinks you lost recently
4. Lists your top referring domains by authority
5. Analyzes the anchor text people use to link to you
6. Gets your domain authority and trust scores
7. Shows daily gains and losses over 30 days
8. Grabs historical data to see growth over 60 days
9. Organizes everything into clear sections in a spreadsheet

## Requirements
- Self-hosted n8n instance
- SE Ranking community node installed
- SE Ranking API token ([Get one here](https://online.seranking.com/admin.api.dashboard.html))
- Google Sheets account (optional)

## Setup
1. Install the [SE Ranking community node](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking)
2. Add your SE Ranking API credentials
3. Replace `example.com` with your domain in all SE Ranking nodes
4. Connect Google Sheets if you want to export data (optional)

## Customization
- Change the time periods (currently 30 or 60 days) by editing `dateFrom` and `dateTo`
- Get more or fewer results by adjusting the `limit` settings
- Sort by different metrics by changing `order_by` (like first_seen or backlinks)
- Add a Schedule Trigger to run this automatically every week

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
