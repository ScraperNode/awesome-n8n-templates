# 🎬 Generate batch product descriptions in Google Sheets with Gemini and Slack

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs daily to find products in Google Sheets that are missing marketing copy, generates a short description and SEO meta title for each item using Google Gemini in rate-limited batches, writes the results back to the sheet, and posts a completion summary to Slack.

## How it works
1. Runs every day at 06:00 on a schedule.
2. Reads product rows from Google Sheets that need descriptions.
3. Processes the products in batches of five to stay within model rate limits.
4. For each product, sends the product name, features, and target keywords to Google Gemini to generate a ~60-word description plus a "META:" SEO title line.
5. Splits the Gemini output into separate description and meta title fields.
6. Upserts the generated copy back into Google Sheets and, once all batches finish, posts a summary message to a Slack channel.

## Setup
1. Connect Google Sheets OAuth2, Google Gemini (PaLM) API credentials, and Slack OAuth2 credentials in n8n.
2. Select the target Google Sheets spreadsheet and the "Products" sheet in both the read and write steps, and ensure it includes columns like Product Name, Features, Keywords, and fields to store the generated description and meta title.
3. Set the Slack channel to post to and adjust the daily schedule time and batch size (currently 5) to match your catalog size and Gemini rate limits.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
