# 📊 Generate SEO keyword search volume data using Google API

> ⚡ **20,033 views** · 📊 [Market Research & Insights](../)

## Description

## Use Case
Generate accurate search volume data for SEO keyword research:
- You have a list of potential keywords to target for your website SEO but don't know their actual search volume
- You need historical data to identify seasonal trends in keyword popularity
- You want to assess keyword difficulty to prioritize your content strategy
- You need data-driven insights for planning your SEO campaigns

## What this Workflow Does
The workflow connects to Google's Keyword Planner API to retrieve keyword metrics for your SEO research:

- Fetches monthly search volume for each keyword
- Provides historical trends data for the past 12 months
- Calculates keyword difficulty scores
- Delivers competition metrics from Google Ads


## Setup
1. Fill the `Set 20 Keywords` with up to 20 Keywords of your choosing in an array e.g. ["keyword 1", "keyword 2",...]
2. Create a Google Ads API account and add credentials to `Get Search Data` node
3. Replace the `Connect to your own database` with your own database for the output


## How to Adjust it to Your Needs
- Change the `Set 20 Keywords` node input to a source of your choosing e.g. Airtable database with 20 keywords
- Connect to output source of your choosing 


More templates and n8n workflows &gt;&gt;&gt; [@simonscrapes](https://www.youtube.com/@simonscrapes?sub_confirmation=1)

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
