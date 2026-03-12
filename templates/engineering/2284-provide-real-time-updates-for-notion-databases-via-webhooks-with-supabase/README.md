# ⚒️ Provide real-time updates for Notion databases via webhooks with Supabase

> ⚡ **1,694 views** · ⚒️ [Engineering](../)

## Description

## Purpose

This enables webhooks for nearly realtime updates (every 5 seconds) from Notion Databases.

## Problem

Notion does not offer webhooks. Even worse, the “Last edited time” property, we could use for polling, only updates every minute. This gives us a polling interval only as low as 2 minutes and we still need to implement a comparing mechanism to detect changes.

## Solution

This workflow caches states in between while doing efficient polling & comparing. It brings down the update latency from 2 minutes to 5 seconds and also provides the output of the changes only.

## Demo

[![Get real-time updates from Notion Databases](https://img.youtube.com/vi/BROsXafy9Uw/0.jpg)](https://youtu.be/BROsXafy9Uw)

## How it works

- Database Pages are frequently polled while filtered by a last modified time stamp for more efficiency
- Retrieved pages get compared with previously cached versions in Supabase
- Only new and changed pages are pushed to a registered webhook

## Setup

- Create a new project in Supabase and import the DB schema (provided through Gumroad)
- Add a "Last edited time" property to your Notion Database, if it has none yet
- Define the dynamically generated settings_id from the settings table (Supabase) in the Globals node
- Define the Notion Database URL in the Globals node
- Define your custom Webhook URL in the last node where the results should be pushed to
- It is recommended to call this workflow using [this](https://n8n.io/workflows/2270-prevent-simultaneous-workflow-executions-with-redis/) template to prevent simultaneous workflow executions
- Set the Schedule Trigger to every 5 seconds or less frequent
- More detailed instructions provided within the workflow file and the illustrated instructions provided during the download

## Example output

```json
[
  {
    "action": "changed",
    "changes": {
      "property_modified_at": "2024-06-04T17:59:00.000Z",
      "property_priority": "important"
    },
    "data": {
      "id": "ba761e03-7d6d-44c2-8e8d-c8a4fb930d0f",
      "name": "Try out n8n",
      "url": "https://www.notion.so/Try-out-n8n-ba761e037d6d44c28e8dc8a4fb930d0f",
      "property_todoist_id": "",
      "property_id": "ba761e037d6d44c28e8dc8a4fb930d0f",
      "property_modified_at": "2024-06-04T17:59:00.000Z",
      "property_status": "Backlog",
      "property_priority": "important",
      "property_due": {
        "start": "2024-06-05",
        "end": null,
        "time_zone": null
      },
      "property_focus": false,
      "property_name": "Try out n8n"
    },
    "updated_at": "2024-06-04T17:59:42.144+00:00"
  }
]
```

## 🔗 Nodes Used

HTTP Request, Notion, Supabase, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
