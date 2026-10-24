# 📱 Post daily weather-based X updates with OpenWeatherMap, OpenAI, and Google Sheets

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily at 07:00, pulls current weather from OpenWeatherMap, uses OpenAI to generate a weather-matched post, publishes it to X (Twitter), and logs the weather, bucket, and post text to Google Sheets.

## How it works
1. Runs every day at 07:00 on a schedule.
2. Fetches the current weather for the configured city from OpenWeatherMap.
3. Converts the temperature to Celsius and classifies conditions into a marketing bucket (rain, hot, cold, or pleasant).
4. Selects the corresponding campaign angle text for the identified weather bucket.
5. Sends the weather details and selected angle to an OpenAI chat model to write a single social post (max 260 characters) following the specified style rules.
6. Publishes the generated post to X (Twitter) and appends the date, weather, temperature, bucket, and post text to Google Sheets.

## Setup
1. Add credentials for OpenWeatherMap, OpenAI, X (Twitter), and Google Sheets.
2. Set the target city in the OpenWeatherMap step.
3. Customize the four campaign angle texts (rain, hot, cold, pleasant) to match your products and offers.
4. Select the Google Sheets document and sheet name to append to, and ensure it has columns for date, weather, temp, bucket, and post.

## 🔗 Nodes Used

Google Sheets, OpenWeatherMap, X (Formerly Twitter), Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
