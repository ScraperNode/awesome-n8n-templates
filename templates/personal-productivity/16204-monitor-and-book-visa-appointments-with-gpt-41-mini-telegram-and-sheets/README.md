# ⚡ Monitor and book visa appointments with GPT-4.1-mini, Telegram and Sheets

> ⚡ **147 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow runs every 10 minutes to check a visa appointment portal for available slots, uses OpenAI to score each slot against your preferences, sends Telegram alerts, and optionally attempts to auto-book high-scoring slots before sending a final status update and preparing a Google Sheets log row.

## How it works
1. Runs every 10 minutes on a schedule.
2. Loads user preferences like date range, location, urgency, auto-book threshold, Telegram chat ID, and Google Sheets ID.
3. Parses the visa portal response (or mock data) into normalized slot items, filters to the preferred date range, and calculates helpful fields like days until the slot and location match.
4. Sends each slot to OpenAI to return a JSON score (0–100), recommendation (AUTO_BOOK/NOTIFY/SKIP), and an alert message.
5. Sends a formatted Telegram alert with the slot details, score, and recommendation.
6. Waits 15 minutes, then attempts to book only when OpenAI recommends AUTO_BOOK and the score meets the threshold, and generates a row payload for logging.
7. Sends a final Telegram message with the booking result (including confirmation ID when available) or the logged status.

## Setup
1. Add an OpenAI API credential (configured for a Chat Completions model such as gpt-4.1-mini) and a Telegram Bot credential.
2. Update the “Set User Config” values, including your preferred dates/location, urgency level, autoBookThreshold, and your Telegram chat ID.
3. Replace the placeholder booking endpoint (https://YOUR_BOOKING_ENDPOINT/reserve) and implement the real portal fetch/booking authentication (ideally via HTTP Request nodes) so the workflow can read availability and submit reservations.
4. Provide a Google Sheets target (sheet ID and a place to append rows) or modify the logging step, since the workflow currently only prepares a sheet row payload.

## 🔗 Nodes Used

Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
