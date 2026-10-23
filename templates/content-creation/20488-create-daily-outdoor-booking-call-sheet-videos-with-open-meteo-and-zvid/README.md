# 🎬 Create daily outdoor booking call-sheet videos with Open-Meteo and Zvid

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Create local forecast videos with a useful planning decision. Resolve one city, check fresh Open-Meteo data, rank remaining three-hour daylight windows by rain and wind, and show either a qualifying window or a no-window notice with the forecast and review CSV.

## How it works
1. Start manually or on schedule and load location, forecast units, branding, thresholds and render limits.
2. Resolve the city with Open-Meteo geocoding, requiring the configured country and administrative region to identify one location.
3. Fetch fresh current, hourly and daily forecasts, then read the Weather Briefings log to skip completed keys or resume accepted jobs.
4. Rank future three-hour daylight windows using rain probability, wind and weather codes. Branch to a qualifying window or an explicit no-window notice.
5. Check optional music and build a video containing current conditions, the three-day outlook and the selected planning card.
6. Use native Zvid nodes to validate and quote the design against the credit ceiling. A dry run returns the source plan, design and quote without rendering.
7. For live runs, reserve the key, submit and track one job, and save its actual outcome. Completed media reaches Watch video; the CSV preserves the forecast and planning facts for review.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before credentials; a workspace owner/admin may need to install it. Create a Zvid API credential with your key from https://app.zvid.io/api-keys and Base URL https://api.zvid.io, and select it on every Zvid node.
2. Connect Google Sheets credentials and create a Weather Briefings log tab with RenderKey, Status, JobId, CreditsQuoted, PlanJson, VideoUrl, CompletedAt headers. Select the same document and tab on every recovery read/write node.
3. Set cityName, countryCode and admin1 in Set the city and outdoor planning thresholds. The example is Lisbon, PT, Lisbon District. Change all location fields together. Configure maxRainProbability and maxWindKmh; defaults are 30 percent and 25 km/h. The workflow checks forecast freshness and location timezone. It does not substitute another city or invent a suitable window when none qualifies. Review Open-Meteo usage terms for your intended use.
4. Test manually before enabling the schedule. dryRun=false is the default and spends Zvid credits; maxCreditsPerVideo defaults to 25. dryRun=true returns design JSON and a credit quote without rendering, creating an editor draft or writing log rows.

## Requirements
- Self-hosted n8n with community nodes enabled, Zvid credits, Google Sheets access and access to the Open-Meteo geocoding and forecast services. Choose service access appropriate for your usage.

## Customization
- Customize units, branding, timings and planning thresholds. Forecast windows describe forecast conditions, not a safety guarantee or severe-weather alert service. The template creates reviewable media; it does not automatically publish it.

## Additional info
Open Watch video → Binary → data → View after completion and download the review CSV before sharing. Keep one execution running at a time because Sheets is not an atomic lock. Preserve completed history and saved job IDs; inspect failed or uncertain jobs before resetting log rows. Explicit capacity rejections have bounded retries, while accepted jobs resume without another paid request. Current setup is described above; the linked repository guide supplies background. Support: https://zvid.io/contact

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
