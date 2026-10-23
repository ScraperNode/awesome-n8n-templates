# 📊 Track daily Google Trends spikes with Apify, Google Sheets, Slack and Gmail

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Runs the Google Trends Scraper Actor on Apify once a day, appends every newly spiking Google search (with estimated search volume, category, start and end time and duration) to Google Sheets, and posts a top 10 digest to Slack. No duplicates between runs thanks to the Actor's onlyNew option.

## How it works
1. A Schedule Trigger fires once a day at 9am.
2. The Apify node runs the Google Trends Scraper Actor (orbots/google-trends-scraper) in trending mode with the operation Run actor and get dataset, waits for the run to finish and returns the dataset items.
3. Because onlyNew is true, the Actor returns only trends it has never delivered before, so nothing is appended twice and you are not charged twice for the same trend.
4. Google Sheets appends each new trend as a row: term, estimated volume bucket, growth, category, active or ended, started and ended timestamps, duration and a Google Trends link.
5. A Code node sorts the new trends by estimated volume and builds a digest with the top 10; Slack posts it as one message. Days with no new trends append nothing, send nothing and cost nothing.

## Setup
1. Install the verified Apify community node (@apify/n8n-nodes-apify) and connect it with your Apify API token or OAuth2.
2. Add Google Sheets credentials, then pick the target spreadsheet and sheet in the Append trends to Google Sheet node.
3. Add Slack credentials and set the destination channel in the Send digest to Slack node.
4. Optionally edit the Input JSON in the Apify node: countries or sub-regions (trendingGeos), trending window (trendingHours: 4, 24, 48 or 168) and maxItems. The template keeps a 1 USD cost cap per run.

## Requirements
- An Apify account. Actor pricing: from 0.01 USD per run plus 0.0005 USD per item (cheaper per item on higher Apify plans); a typical daily run for one country costs about 0.20 USD and empty runs are free. Google Sheets and Slack credentials in n8n.

## Customization
- Track several countries or sub-regions at once (trendingGeos: US, GB, BR, US-CA), change the trending window, set maxItems, or switch the Actor to keywords mode to follow specific terms instead of what is spiking.

## Additional info
Google Trends is a trademark of Google LLC. This template and the underlying Actor are not affiliated with, endorsed by, or sponsored by Google LLC. The Actor is built and maintained by orbots, the author of this template.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
