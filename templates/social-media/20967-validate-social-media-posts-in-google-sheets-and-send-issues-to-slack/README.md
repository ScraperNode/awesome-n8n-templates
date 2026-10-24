# 📱 Validate social media posts in Google Sheets and send issues to Slack

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow manually checks social media post drafts stored in Google Sheets, validates required fields and duplicates per platform, optionally alerts a Slack channel about new or changed issues, and writes status and validation results back to the sheet.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Reads all post rows from a Google Sheets worksheet.
3. Validates each row (unique post_id, supported platform, non-empty content, image URL format) and flags duplicate content per platform, producing READY_FOR_REVIEW or NEEDS_FIX statuses.
4. If any post has new or changed validation issues, sends a formatted alert message to a specified Slack channel.
5. Updates the corresponding rows in Google Sheets (matched by post_id) with status, validation_result, and checked_at.

## Setup
1. Create a Google Sheet with columns post_id, platform, content, image_url, status, validation_result, and checked_at, and ensure each row has a unique, non-empty post_id.
2. Add Google Sheets credentials in n8n and replace the spreadsheet ID and target sheet in both Google Sheets nodes.
3. Add Slack credentials, set the target Slack channel, and ensure the Slack app/bot is invited to that channel.

## 🔗 Nodes Used

Google Sheets, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
