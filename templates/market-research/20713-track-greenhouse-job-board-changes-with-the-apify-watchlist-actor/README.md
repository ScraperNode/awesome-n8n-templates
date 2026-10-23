# 📊 Track Greenhouse job board changes with the Apify watchlist Actor

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Track job listing changes for 1–20 known Greenhouse company boards. This manual workflow runs an Apify Actor, saves each validated snapshot in a private key-value store, and compares it with the next observation. Useful for automation builders maintaining company job feeds.

## How it works
1. Starts with a manual trigger and loads the configured Greenhouse board slugs and the dedicated Apify key-value store name.
2. Creates (or opens) the Apify key-value store and reads the current STATE record to determine whether a previous snapshot exists or a run is already pending.
3. If no run is pending, prepares the actor input (including the previous snapshot when available), saves a “pending” start intent to STATE, reads it back, and verifies it was persisted correctly.
4. Starts one Actor run or retrieves the existing pending run. The status request waits up to 60 seconds. If it is still running, execution stops while preserving its ID; run the whole workflow later to retrieve it. There is no automatic polling loop.
5. Fetches the actor outputs from Apify (SUMMARY, BILLING receipt, SNAPSHOT, and CHANGES.json) and validates that they match the requested board list and expected counts.
6. Writes the new ready STATE (including the latest snapshot and last run ID) back to the key-value store, reads it back to confirm it saved correctly, and outputs the run link, counts, and the list of detected changes.

## Setup
1. Create an Apify account and add an n8n HTTP Header Auth credential with `Authorization: Bearer <your Apify token>`, then select it in every HTTP Request step.
2. Ensure the Apify actor `downy_sublimity/greenhouse-watchlist-export` is available in your Apify account, as this workflow starts runs for actor ID `hKiF2epI17OkpTRdh`.
3. In Watchlist settings, enter 1–20 board slugs, a dedicated key-value store name, and set singleWriterConfirmed=true only when one workflow and one execution write to that store. Run the whole workflow twice, sequentially. Check Results for historySaved=true and baseline=false on the second completed observation.

## Requirements
- An n8n instance and an Apify account/token. This template is free; the required Greenhouse Watchlist Export Actor costs US$0.05 per completed watchlist, including unchanged or empty checks. Separate n8n hosting and platform/storage costs may apply. Actor: https://apify.com/downy_sublimity/greenhouse-watchlist-export

## Customization
- Choose your company board slugs in Watchlist settings. Use a new store and baseline when changing the board list. Results provides change records for downstream processing. No schedule, notifications, or distributed lock are included; keep one writer per store.

## Additional info
The first run creates a baseline: first observed does not mean newly published. A disappearance is confirmed after two valid absences and does not prove the role was filled. If a start response is lost, inspect the pending state instead of retrying the POST. Recovery instructions are included in the workflow notes. Tested with n8n 2.42.6, including a live baseline and subsequent comparison.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
