# 📊 Ingest and sync trending video data with webhooks and SkipPlay API

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow receives a POST webhook containing a list of trending videos, normalizes and validates the payload, and syncs the cleaned video data to the [SkipPlay](https://skipplay.app) API before returning a JSON status response.

## How it works
1. Receives a POST request on a webhook with a region and a non-empty array of video records.
2. Cleans, normalizes, and validates each video object (for example mapping fields like Video ID, Title, Views, Duration, and Published At) and drops entries missing a Video ID.
3.  Sends the cleaned video list and region to the [SkipPlay](https://skipplay.app) sync endpoint (`https://skipplay.app/api/sync/trending`) via an HTTP POST request with an `x-sync-secret` header.
4. Returns a JSON webhook response that confirms the sync and includes the region, processed video count, and the SkipPlay API response.

## Setup
1. Configure the source system to send a POST request to this workflow’s webhook URL with a videos array.
2.  Set the [SkipPlay](https://skipplay.app) API endpoint URL and provide the required `x-sync-secret` value.
3. Ensure your incoming video objects include a stable videoId/id field.  Configure the `x-sync-secret` header in the HTTP Sync node to match your server secret.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
