# 📊 Detect dead Shopify inventory and send Gmail + Slack CSV alerts

> ⚡ **34 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to detect dead Shopify inventory by comparing current product stock against recent paid order history, then generates a CSV report and sends it via Gmail and Slack, with global error notifications posted to Slack.

## How it works
1. Runs every day at 07:00 on a schedule trigger.
2. Pulls paid Shopify orders from the past configured lookback period and fetches all published Shopify products.
3. Compares product variants with available stock against order history to find variants that have not sold within the configured number of days, then sorts results by total inventory value.
4. Stops after producing a “clean” status message if no dead inventory is found.
5. Formats the dead-inventory list into CSV-ready rows and converts it into a CSV file.
6. Emails the CSV report through Gmail to the configured recipient and uploads the same CSV file to the configured Slack channel.
7. Posts any workflow execution errors to Slack with the failed node name and error message.

## Setup
1. Connect Shopify OAuth2 credentials with permission to read orders and products.
2. Connect a Gmail OAuth2 account that can send email from the Gmail node.
3. Connect Slack credentials and set the target channel ID for both the report upload and error notifications.
4. Update the detector settings for your store (daysWithoutSales, orderFetchDays, recipientMail, and slackEscalationChannel) before activating the workflow.

## Requirements
- Shopify store with Admin API access (read orders and read products scopes).
- Gmail account connected via OAuth2.
- Slack workspace with a designated channel for reports.

## 🔗 Nodes Used

Slack, Shopify, Gmail, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
