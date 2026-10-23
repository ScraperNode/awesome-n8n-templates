# 🔧 Send new BookMyShow movie or event alerts to Telegram with Apify

> ⚡ **29 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow runs every 6 hours, uses Apify’s BookMyShow Scraper to fetch the latest movie listings for a chosen city, deduplicates results across runs, and sends a Telegram message for each newly detected listing with key details and a booking link.

## How it works
1. Runs on a schedule every 6 hours.
2. Sets the target BookMyShow city and scrape mode (movies).
3. Calls the Apify BookMyShow Scraper actor to pull up to 30 current listings with details.
4. Filters out any listings whose BookMyShow eventCode has already been seen in previous workflow executions.
5. Sends a Telegram message for each new listing with the title, language, certification, rating, release date, and URL.

## Setup
1. Install and configure the Apify node, then add an Apify API token credential.
2. Create a Telegram bot, add a Telegram API credential in n8n, and set the Telegram chat ID to receive messages.
3. Update the city (for example, mumbai) and optionally change scrapeMode to events if you want event alerts instead of movies.
4. Adjust the schedule interval if you want the workflow to check BookMyShow more or less frequently.

## 🔗 Nodes Used

Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
