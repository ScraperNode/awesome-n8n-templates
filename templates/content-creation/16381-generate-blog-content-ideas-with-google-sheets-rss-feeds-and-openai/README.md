# 🎬 Generate blog content ideas with Google Sheets, RSS feeds and OpenAI

> ⚡ **116 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs weekly to pull existing blog titles and prior AI ideas from Google Sheets, gathers recent keyword-matching headlines from multiple RSS feeds, uses OpenAI to generate 12 fresh blog title ideas, and appends the results back into a “New ideas” Google Sheet.

## How it works
1. Runs on a weekly schedule trigger.
2. Reads existing blog titles and previously generated AI blog titles from two tabs in Google Sheets and combines them into a single list.
3. Fetches entries from several RSS feeds, filters for items mentioning a target keyword and published within the last 30 days, and aggregates the matching RSS titles.
4. Merges the Google Sheets title list with the aggregated RSS titles and sends them to OpenAI with brand and editorial guidelines to generate 12 new blog title ideas as structured JSON.
5. Splits the 12 generated items into individual rows and appends each new title into the “New ideas” tab in Google Sheets.

## Setup
1. Add Google Sheets OAuth2 credentials and set the correct spreadsheet ID and sheet/tab names for the existing titles and “New ideas” tabs.
2. Add an OpenAI API credential and select the model to use in the OpenAI chat node.
3. Update the RSS feed URLs and the keyword filter (currently matching “n8n”) to fit your niche, and adjust the schedule trigger time if needed.

## 🔗 Nodes Used

Google Sheets, RSS Read, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
