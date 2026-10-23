# 📊 Monitor website changes with Google Sheets, Gemini, and Telegram alerts

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/WtFDI9nxrOk

This workflow checks a Google Sheets URL watchlist every 10 minutes, fetches each page, removes common “noisy” dynamic text, and detects meaningful changes using Google Gemini before sending Telegram alerts and updating the sheet with the latest snapshot and hash.

## How it works
1. Runs every 10 minutes on a schedule.
2. Reads a watchlist from Google Sheets and keeps only rows marked as active.
3. For each URL, downloads the page over HTTP and extracts the visible body text.
4. Cleans the text to remove common noise (timestamps, counters, UUIDs, long tokens) and optionally narrows it to sentences containing a configured keyword.
5. Hashes the resulting text and compares it to the previous hash stored in Google Sheets to classify the check as first run, changed, unchanged, or error.
6. When the page changed, sends the old and new snapshots to Google Gemini to summarize what actually changed and suppresses alerts when Gemini returns “NO MEANINGFUL CHANGE”.
7. Sends meaningful change summaries to Telegram and updates Google Sheets with the new hash, snapshot, last checked time, and last change summary (or saves a baseline on first run).

## Setup
1. Create a Google Sheets watchlist with columns for url, active (TRUE/FALSE), optional keyword, and fields to store last_hash, last_snapshot, last_checked, last_change, plus a row_number key used for updates.
2. Add Google Sheets Service Account credentials in n8n and share the spreadsheet with the service account email.
3. Add a Google Gemini (Google PaLM) API credential and ensure the selected Gemini model is available for your project.
4. Add Telegram bot credentials, set the target chat ID in the Telegram message step, and start a chat with the bot so it can send messages.
5. Update the spreadsheet document and sheet IDs/names in the Google Sheets steps to point to your watchlist.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
