# 📋 Sync Notion to Clockify including clients projects and tasks

> ⚡ **1,245 views** · 📋 [Project Management](../)

## Description

## Purpose

This workflow synchronizes three entities from Notion to Clockify, allowing tracked time to be linked to client-related projects or tasks.

## Demo & Explanation

[![demo video](https://img.youtube.com/vi/qr0cvtAAMrc/0.jpg)](https://youtu.be/qr0cvtAAMrc)

## How it works

- On every run active Clients, Projects and Tasks are retrieved from both Notion and Clockify before being compared by the Clockify ID, which is again stored in Notion for reference
- Potential differences are then applied to Clockify
- If an item has been archived or closed in Notion, it is also marked as archived in Clockify
- All entities are processed sequentially, since they are related hierarchically to each other
- By default this workflow runs once per day or when called via webhook (e.g. embedded into a Notion Button)

## Prerequisites

- A set of Notion databases with a specific structure is required to use this workflow
- You can either start with [this Notion Template](https://steadfast-banjo-d1f.notion.site/1ae82b476c84808e9409c08baf382c45) or adapt your system based on the requirements described in the big yellow sticky note of this workflow template

## Setup

- Clone the workflow and select the belonging credentials
- Follow the instructions given in the yellow sticky notes
- Activate the workflow

## Related workflows:

- [Backup Clockify to Github based on monthly reports](https://n8n.io/workflows/3147-backup-clockify-to-github-based-on-monthly-reports/)
- [Prevent simultaneous workflow executions with Redis](https://n8n.io/workflows/2270-prevent-simultaneous-workflow-executions-with-redis/)

## 🔗 Nodes Used

HTTP Request, Webhook, Clockify, Notion, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
