# 📈 Screen US stocks by SEC revenue growth with GPT-5, Yahoo Finance and Telegram

> ⚡ **10 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
Telegram message, uses OpenAI GPT-5 to turn a plain-language prompt into screening criteria, pulls quarterly revenue from SEC XBRL filings, adds Yahoo Finance price moves, and sends a ranked shortlist plus a detailed text report back to Telegram while logging the run to Google Sheets.

## How it works
1. Triggers when you send a Telegram message to your bot or when the weekly schedule fires.
2. Normalizes the input and uses OpenAI GPT-5 to parse your request into sort order and screening thresholds like minimum quarterly revenue and a maximum growth cap.
3. Determines the most recent SEC reporting quarter with reliable XBRL frame coverage and selects the matching quarter from the prior year.
4. Fetches current and prior-quarter revenue data from the SEC XBRL frames API and downloads the SEC company ticker map to resolve CIKs to tradeable tickers.
5. Joins the SEC datasets, filters out companies below the revenue floor or above the growth cap, ranks the remainder, and stops with a “nothing found” Telegram message if no candidates match.
6. Pulls current price plus one-day and five-day moves from Yahoo Finance for the shortlisted tickers.
7. Uses OpenAI GPT-5 to write a concise “for” and “against” argument for each candidate and formats both a skimmable Telegram message and a full-detail TXT attachment with all numbers.
8. Sends the results to Telegram, appends a run log entry to Google Sheets, and uploads the TXT report to Telegram as a document.

## Setup
1. Create a Telegram bot with @BotFather, add a Telegram credential in n8n, and message the bot at least once (or set an admin chat ID for scheduled runs).
2. Add an OpenAI credential with access to the gpt-5 model for both GPT-5 steps.
3. In the Config step, set a valid SEC User-Agent string (company name and email) and set admin_chat_id if you want the weekly schedule to deliver results automatically.
4. Add Google Sheets OAuth credentials and select the target spreadsheet and sheet in the logging step.
5. Review and adjust the screening defaults (min_quarterly_revenue_musd, max_growth_pct, default_count) and the weekly schedule time to match your needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
