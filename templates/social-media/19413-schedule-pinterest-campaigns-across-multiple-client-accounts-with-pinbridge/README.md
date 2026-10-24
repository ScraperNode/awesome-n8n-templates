# 📱 Schedule Pinterest campaigns across multiple client accounts with PinBridge

> ⚡ **6 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow schedules Pinterest pins across multiple client accounts by downloading each pin image, uploading it to PinBridge as an asset, and creating timed PinBridge schedules per client and board, then producing a per-client summary of what was scheduled.

## How it works
1. Starts manually or on a weekly schedule (disabled by default) to run the campaign.
2. Defines campaign timing (first posting offset, gap between pins, and random jitter) and builds a campaign brief containing clients, Pinterest account IDs, board IDs, and pin details.
3. Filters out any pins where the required client account/board IDs are still placeholders or where the image URL is missing.
4. Downloads each pin image from its URL and uploads it to PinBridge as an asset.
5. Schedules each pin in PinBridge for the target Pinterest account and board using the uploaded asset, title, description, link URL, and computed run time.
6. Aggregates the scheduled results into one summary row per client, including how many pins were scheduled, the first/last scheduled times, and the created schedule IDs.

## Setup
1. Install the verified PinBridge community node (`n8n-nodes-pinbridge`) and create a PinBridge API credential in n8n.
2. Ensure each client’s Pinterest account is connected in PinBridge, then replace the placeholder account IDs and board IDs in the campaign brief (use the optional “List a client's boards” step to find board IDs if needed).
3. Update the campaign brief with your pin titles, descriptions, link URLs, and image URLs, and adjust the timing values (first slot, gap, jitter) to match your posting cadence.
4. If you want it to run automatically, enable the weekly schedule trigger and set the desired day/time.

## Requirements
- n8n Cloud or self-hosted n8n
- The PinBridge community node (n8n-nodes-pinbridge), verified by n8n
- A PinBridge account with each client's Pinterest profile connected

## Customization
- Swap the campaign brief node for Google Sheets, Airtable or an n8n Data Table - any source that outputs client, account_id, board_id, title, description, link and image works unchanged
- Adjust first slot, gap and jitter to match each client's posting cadence
- Pipe the per-client summary into Slack or email if you send weekly recaps

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
