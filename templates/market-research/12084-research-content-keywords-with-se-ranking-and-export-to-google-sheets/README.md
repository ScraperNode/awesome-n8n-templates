# 📊 Research content keywords with SE Ranking and export to Google Sheets

> ⚡ **49 views** · 📊 [Market Research & Insights](../)

## Description

![image.png](fileId:4238)

## Who is this for
- Content creators looking for topic ideas
- SEO specialists doing keyword research  
- Marketing teams planning content calendars

## What this workflow does
Discover keyword opportunities from 4 different sources (longtail, questions, similar, related) and export analyzed results to Google Sheets.

## What you'll get
- Longtail, question, similar, and related keyword variations
- Opportunity scores based on volume, difficulty, and CPC
- Search intent classification (informational, commercial, transactional, navigational)
- Content type suggestions (how-to guide, listicle, comparison, etc.)
- Trend analysis with historical search volume data
- Estimated monthly traffic potential
- Priority ranking (HIGH/MEDIUM/LOW)
- SERP features analysis
- All results automatically exported to Google Sheets

## How it works
1. Fetches 4 types of keywords from SE Ranking (longtail, questions, similar, related)
2. Merges and deduplicates all results
3. Analyzes each keyword with custom scoring algorithm
4. Calculates opportunity scores (volume 40%, difficulty 40%, CPC 20%)
5. Detects search intent and suggests content types
6. Exports enriched data to Google Sheets with 17 columns

## Requirements
- SE Ranking account with API access ([Get one here](https://online.seranking.com/admin.api.dashboard.html))
- SE Ranking community node installed ([Install from npm](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking))
- Google Sheets account

## Setup steps
1. Install the [SE Ranking community node](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking)
2. Add your SE Ranking API credentials
3. Connect your Google Sheets account
4. Update the seed keyword in all 4 SE Ranking nodes (default: "digital marketing")
5. Select or create a Google Sheet for export

## Customization
- Adjust `volumeFrom` and `difficultyTo` filters in SE Ranking nodes for different opportunity ranges
- Change `limit` parameter to fetch more/fewer keywords per source (max 1000)
- Modify opportunity score formula in the Code node (currently: volume 40%, difficulty 40%, CPC 20%)
- Update content type detection patterns to match your industry
- Change `source` parameter for different countries (us, uk, de, fr, etc.)

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
