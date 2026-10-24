# 📊 Send Slack alerts for new app reviews from Google Play and App Store with DataForSEO

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

## Description

![Send Slack alerts for app reviews from Google Play and App Store with DataForSEO.png](fileId:5597)

Your team shouldn't have to check two app stores every morning just to see if anyone left a review. This workflow automatically runs that check and delivers new reviews to Slack.

The workflow runs daily and fetches the latest reviews for your app from both Google Play and the App Store using the DataForSEO App Data API. For each platform, it filters out only reviews that appeared since the last check. The reviews are then formatted into a message and sent to the Slack channel of your choice. The result is a daily Slack notification for your SMM or community manager, only sent when there is something new to respond to.

## Who's it for

This workflow is perfect for marketing teams and SMM specialists who want to respond promptly to new app reviews without manually checking the Google Play and App Store.

## What it does

This workflow automatically checks for new reviews on Google Play and the App Store daily and sends a Slack message for each platform when new reviews are detected, including all review content.

## How it works

Triggers automatically on a daily schedule.

Fetches the latest app reviews from Google Play using the DataForSEO App Data API.

Filters out only new reviews and aggregates them into a message.

Sends a Slack message with the new Google Play reviews.

Repeats the same process for App Store reviews.

Sends a separate Slack message with the new App Store reviews.

## Requirements

 - DataForSEO account and API credentials
 - Slack account connected to n8n

## Customization

You can customize this workflow by adjusting the schedule frequency, adding filters to flag only reviews with a rating below a certain threshold, and expanding it to cover additional app platforms.

## 🔗 Nodes Used

Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
