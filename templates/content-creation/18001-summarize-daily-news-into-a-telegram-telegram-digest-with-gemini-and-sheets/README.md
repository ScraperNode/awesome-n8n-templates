# 🎬 Summarize daily news into a Telegram Telegram digest with Gemini and Sheets

> ⚡ **41 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/c93azOL1qTg
This workflow pulls the latest headlines from multiple Google News RSS feeds, uses Google Gemini to curate and summarize them into a single daily digest, logs the result to Google Sheets, and sends the digest to a Telegram chat.

## How it works
1. Starts when you run the workflow manually and sets the target Telegram chat ID and the digest language.
2. Fetches articles from Google News RSS searches for World, AI/Tech, Business, Markets, and Science.
3. Combines all feed items, removes duplicate headlines by title, sorts by newest first, and keeps only the 70 most recent articles.
4. Aggregates the remaining articles into a single list and builds an editor-style prompt with the date and article count.
5. Sends the prompt to Google Gemini to merge related headlines and generate an 8–12 item ranked Telegram-ready news brief.
6. Appends the date, analyzed headline count, and generated digest to a Google Sheets tab.
7. Sends the digest (trimmed to fit Telegram limits) to the configured Telegram chat.

## Setup
1. Add Google Gemini (Google PaLM) credentials and select the Gemini model used for summarization.
2. Add Google Sheets credentials, then set the target spreadsheet and ensure the destination tab exists with columns: Date, Headlines Analyzed, Digest, Telegram Status.
3. Add Telegram Bot credentials and set the correct chat ID (both in the configuration step and in the Telegram send step).
4. Review and update the Google News RSS URLs if you want different topics, countries, or time windows.

## 🔗 Nodes Used

Google Sheets, RSS Read, Telegram, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
