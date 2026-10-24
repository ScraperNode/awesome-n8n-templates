# 📱 Schedule approved Notion content calendar posts with Posta

> ⚡ **13 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs every 15 minutes to fetch approved items from a Notion content calendar, creates and schedules matching posts in Posta for the specified time, and then updates the Notion database row with the Posta post URL and a Scheduled status.

## How it works
1. Runs every 15 minutes on a schedule trigger.
2. Retrieves all pages from a specified Notion database.
3. Processes each returned Notion row one by one, using the Caption, Scheduled At, Social Account IDs, and optional Media IDs fields.
4. Creates a post in Posta for the selected social accounts and attaches any referenced media IDs.
5. Schedules the Posta post for the Notion row’s Scheduled At timestamp (converted to UTC).
6. Updates the original Notion page by setting Status to Scheduled and writing back the Posta post URL.

## Setup
1. Create a Notion integration, share your content calendar database with it, and connect the Notion credentials in n8n.
2. Add your Posta API token as Posta credentials in n8n.
3. Set the Notion database ID/URL in the Notion database read step to point to your content calendar.
4. Ensure your Notion database includes the required properties (Caption, Status, Scheduled At, Social Account IDs, optional Media IDs, and optional Posta Post URL) and that their names match the workflow mappings.
5. Activate the workflow and keep the 15-minute schedule (or adjust it to match your desired posting window).

## 🔗 Nodes Used

Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
