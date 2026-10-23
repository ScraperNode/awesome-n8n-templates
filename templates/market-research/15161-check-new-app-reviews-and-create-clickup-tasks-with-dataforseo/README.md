# 📊 Check new app reviews and create ClickUp tasks with DataForSEO

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

## Description

![Check for new app reviews and automatically set ClickUp tasks with DataForSEO.png](fileId:5591)

Manually checking Google Play and App Store for new reviews every day is easy to skip or forget. This workflow automatically handles review monitoring and assigns tasks for new reviews for your team in ClickUp.

The workflow runs daily and fetches the latest reviews for your app from both Google Play and the App Store using the DataForSEO App Data API. For each platform, it filters out only reviews that appeared since the last check and aggregates them into a single ClickUp task, including all review content. As a result, you get automatic, daily notifications for your SMM or community manager to review and respond, without manual platform checking.

## Who's it for

This workflow is best for marketing teams and SMM specialists who need to stay on top of new app reviews without spending time on manual checks across multiple platforms.

## What it does
This workflow automatically checks for new reviews on Google Play and the App Store daily and creates a ClickUp task for each platform when new reviews appear, including all review content in the task description.

## How it works

Triggers automatically on a daily schedule.

Fetches app reviews from Google Play using the DataForSEO App Data API.

Filters out only new reviews and aggregates them into a task.

Creates a ClickUp task with the new Google Play reviews included.

Repeats the same process for App Store reviews.

Creates a separate ClickUp task with the new App Store reviews included.

## Requirements

 - DataForSEO account and API credentials
 - ClickUp account connected to n8n
 
## Customization

You can customize this workflow by adjusting the schedule frequency, adding filters to focus on reviews below a certain rating, and expanding it to cover additional app platforms.

## 🔗 Nodes Used

ClickUp, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
