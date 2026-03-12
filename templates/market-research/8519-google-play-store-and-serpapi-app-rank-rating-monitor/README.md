# 📊 Google Play Store and SerpApi app rank & rating monitor

> ⚡ **265 views** · 📊 [Market Research & Insights](../)

## Description

## Google Play Store App Rank and Rating Monitoring

### What and who this is for

This workflow will be useful for anyone looking to do SEO tracking on the Google Play Store. It automates checking Google Play Store rank positions and average ratings for a list of app titles.

The SerpApi component can also be modified to use other APIs for anyone looking for SEO tracking on any other search engine supported by SerpApi.

### How it works

This workflow takes in a list of keywords and app titles to identify the apps' rank in Google Play Store search results. It also grabs the average rating of the app. The search uses SerpApi's Google Play Store API.

The results are then synced to two different sheets in a Google Sheet. The first is a log of all past run. The latest results are appended to the bottom of the log. The second updates a kind of "dashboard" to show the results from the latest run.

The workflow includes a Wait node that delays 4 seconds between each app title and keyword pair to prevent hitting the default Google Sheets' API per minute rate limit. You can delete this if you have a high enough custom rate limit on the Google Sheets API.

The Schedule Trigger is configured to run at 10 AM UTC every day.

### How to use

1. Create a free SerpApi account here: https://serpapi.com/
1. Add SerpApi credentials to n8n. Your SerpApi API key is here: https://serpapi.com/manage-api-key
1. Connect your Google Sheets accounts to n8n. Help available here: https://n8n.io/integrations/google-sheets/
1. Copy this Google Sheet to your own Google account: https://docs.google.com/spreadsheets/d/1DiP6Zhe17tEblzKevtbPqIygH3dpPCW-NAprxup0VqA/edit?gid=1750873622#gid=1750873622
1. Set your own list of keywords and app titles to match in the 'Latest Run' sheet. This is the source list used to run the searches and must be set.
1. Connect your Google Sheet in the 'Get Keywords and Titles to Match' Google Sheet node
1. Connect your Google Sheet in the 'Update Rank & Rating Log' Google Sheet node
1. Connect your Google Sheet again in the 'Update Latest Run' Google Sheet node
1. (Optional) Update the schedule or disable the schedule to only run manually

### Documentation

[SerpApi Google Play Store API](https://serpapi.com/google-play-api)
[SerpApi n8n Node Intro Guide](https://serpapi.com/blog/boost-your-n8n-workflows-with-serpapis-verified-node/)

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
