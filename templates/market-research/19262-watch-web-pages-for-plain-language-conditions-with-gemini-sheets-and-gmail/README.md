# 📊 Watch web pages for plain-language conditions with Gemini, Sheets and Gmail

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
You know the page and you know what you are waiting for: a room, a campsite, an admissions notice. Write the URL and the condition in one sheet row. Gemini reads the page on your schedule and emails you once, the moment the condition becomes true.

## How it works
1. Runs every hour and loads the Watchlist tab from Google Sheets, selecting only rows whose next check is due (up to the configured per-run limit).
2. Fetches each target URL via HTTP first and automatically switches to an Airtop browser session when the site blocks requests or the content is too short/JavaScript-rendered.
3. If configured, Airtop clicks an “open step” element on the page, waits briefly for the page to update, and then extracts readable page text.
4. Sends the extracted page text and the row’s condition to Google Gemini, which returns a YES/NO/UNCLEAR verdict, confidence score, and exact quotes as evidence.
5. Validates Gemini’s evidence against the page text and applies a state machine to decide whether to notify (only when a previously NO watch turns to YES, or after repeated monitoring errors).
6. Updates the Watchlist row (streaks, errors, next_due_at, last evidence/error) and appends a check record to the Log tab in Google Sheets.
7. Sends a Gmail email to the row’s notify_to address (or the default email) when notification is required, otherwise ends without sending.

## Setup
1. Create a Google Sheet with Watchlist and Log tabs (with the columns expected by the template) and add a Google Sheets OAuth credential.
2. Add a Google Gemini (PaLM/Gemini) API credential for the condition-judging step.
3. Add a Gmail OAuth credential and set the default notification email and Google Sheets document ID in the Config node.
4. (Optional) Add an Airtop credential if you need browser-based fetching, and fill fetch_mode (auto/browser) and open_step for rows that require clicking before content is visible.
5. Populate the Watchlist with unique watch_id, url, condition, and check_every_hours values, then run once manually to establish the baseline before relying on email alerts.

## Requirements
- A Google Sheet with two tabs, Watchlist and Log (column names are in the setup note)
- A Google Gemini API key
- Google Sheets and Gmail credentials in n8n
- Optional: an Airtop account (free tier) for pages that need a real browser

## Customization
- Set check_every_hours per row: hourly for a cancellation watch, daily for an admissions page
- Write the condition in any language; the page text can be HTML or JSON
- Set fetch_mode to browser and fill open_step (e.g. "the Choose date button") for pages that need a click before the information appears
- When the url you watch is a JSON endpoint, put the human-readable page in open_url so the email links to that instead
- Change yesConfirmationsToNotify and noConfirmationsToRearm in Config to make the watch stricter or faster
- Swap the Gmail node for Slack, Telegram or LINE; the message is built in Decide next state

## Additional info
This is not a page-change monitor. It answers a question you wrote, keeps a small state per row, and emails only on the transition from NO to YES. The first check only records a baseline. A YES that turns back into NO for two checks quietly re-arms the watch. Fetch failures, login pages and unclear answers never change the verdict; after three in a row you get one "monitoring problem" email instead.

Every quote the AI returns is checked against the page text in code; an answer whose quotes are not in the page is treated as unclear. HTTP is tried first and costs nothing; a real browser (Airtop) is used only when the page is rendered by JavaScript or blocks automated requests, so free-tier credits last.

Tested on a Japanese campsite booking API (JSON) and a hotel chain's search results page (JavaScript), including the 403 fallback to the browser lane and a page whose calendar only appears after a click, driven by the open_step description.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
