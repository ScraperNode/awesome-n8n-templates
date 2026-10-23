# 🔬 Audit Shopify product images with ShotEdit, Gemini, Google Sheets, and Slack

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This scheduled workflow audits Shopify product images with ShotEdit, uses Google Gemini to generate actionable fix notes, logs issues to Google Sheets, and posts a run summary to Slack.

## How it works
1. Runs every Monday morning on a schedule.
2. Retrieves a limited batch of products from Shopify and splits each product’s image list into one item per image.
3. Sends each image URL to the ShotEdit Image Info API to read metadata (format, dimensions, file size) and return an optimization recommendation.
4. Filters out images marked as OK so only images needing changes continue.
5. Uses Google Gemini to convert the technical recommendation into a one-sentence fix instruction plus a priority.
6. Appends or updates the finding in Google Sheets keyed by the image URL, then aggregates the run results and posts a summary message to a Slack channel.

## Setup
1. Add credentials for Shopify (Admin API access token), Google Sheets, Slack, and Google Gemini.
2. Update the audit parameters for your Google Sheet ID, sheet name, Slack channel, and the Shopify product limit.
3. Create a Google Sheet tab matching the configured sheet name and include an `image_url` column so rows can be updated in place.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Shopify, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
