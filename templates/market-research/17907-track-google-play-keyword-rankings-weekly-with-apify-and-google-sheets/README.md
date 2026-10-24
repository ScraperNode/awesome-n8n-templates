# 📊 Track Google Play keyword rankings weekly with Apify and Google Sheets

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
No ASO tool subscription and no per-seat licence. Every week this searches the Play Store for your keywords and appends one row per ranked app to Google Sheets: position, app, developer, category, rating and download band, with your own app flagged.

## How it works
1. Runs every Monday at 08:00 on a schedule.
2. Loads your keyword list, package name, and storefront settings (country, language, and results per keyword).
3. Splits the keyword array and runs one Google Play search per keyword using the Apify Google Play API actor.
4. Filters the results to keep only items that represent real apps.
5. Formats each app result into a single row with the week date, keyword rank position, app metadata, and a YES flag when the package name matches yours.
6. Appends the rows to the selected Google Sheets spreadsheet and worksheet.

## Setup
1. Create an Apify account, add your Apify API token as an Apify credential in n8n, and ensure the workflow can run the `johnvc~google-play-api` actor.
2. Connect a Google Sheets account in n8n and select the target spreadsheet document and sheet tab in the Google Sheets append step.
3. Update the configuration values for keywords, your Google Play package name, apps-per-keyword limit, country, and language before activating the workflow.

## Requirements
- An Apify account. The free tier works, and an app returned costs under a tenth of a cent.
- A Google account for Sheets.
- No ASO tool subscription and no AI model in the workflow.

## Customization
- Add or remove keywords in the config node. Each one becomes its own search and its own rows.
- Change the storefront country to track a different market. Rankings are per country.
- Add an IF node after the Code node to alert you only when your own rank drops below a number you set.
- Swap Google Sheets for Airtable or a database if you would rather chart it elsewhere.

## Additional info
**How do I track my app's Play Store ranking?** Put your keywords and your package name in one Set node and let the weekly schedule run. Each run records the full ranked list for every keyword, so you get your own position and the apps above you in the same sheet.

**Why record the whole list instead of just my rank?** Because your position on its own does not tell you why it moved. Seeing which app overtook you, and what its rating and download band look like, is the part a rank number hides.

**Where do I find my package name?** It is the value after `id=` in your Play Store URL, for example `com.spotify.music`. Paste it into the config node and your rows get flagged YES.

**Does this work for the Apple App Store?** No, this one is Google Play only.

**What does it cost?** The template is free. An app returned costs under a tenth of a cent, so three keywords at 20 apps each is about 5 cents a week.

**About Apify.** [Google Play API](https://apify.com/johnvc/google-play-api?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
