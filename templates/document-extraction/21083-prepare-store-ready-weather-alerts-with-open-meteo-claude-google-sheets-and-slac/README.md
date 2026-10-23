# 🔬 Prepare store-ready weather alerts with Open-Meteo, Claude, Google Sheets and Slack

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily and reads store locations from Google Sheets, fetches multi-day forecasts from Open-Meteo, and uses Anthropic Claude to draft staff prep notes and a customer message for stores with flagged weather, then posts a checked summary to Slack.

## How it works
1. Runs every day at 15:00 (or manually) and loads configurable thresholds such as forecast days, rain/heat/cold limits, language, and message length.
2. Reads the list of stores (name, latitude, longitude, notes, contact) from a Google Sheets “Stores” tab and stops with an error if required fields are missing or invalid.
3. Requests a daily forecast for each store from the Open-Meteo API for the configured number of days.
4. Flags days with rain, heavy rain, heat, or cold based on the configured thresholds and converts the flagged forecast values into numbered “facts” per store.
5. Sends the facts to Anthropic Claude to generate a short staff prep memo and a customer-ready draft message, each referencing the fact IDs used.
6. Validates Claude’s output by ensuring it is valid JSON, references at least one fact, contains only forecast numbers, and that the customer message stays within the character limit and avoids banned words.
7. Posts one Slack message per flagged store that includes the forecast facts plus the validated prep items and customer draft (or warnings if checks fail).

## Setup
1. Create a Google Sheet, run the “Run once: set up the sheet” path to add the “Stores” tab, and paste your spreadsheet ID in the workflow’s Spreadsheet ID configuration.
2. Add Google Sheets OAuth2 credentials and select your spreadsheet/document in the Google Sheets read step.
3. Fill the “Stores” tab with columns store, lat, lon, notes, and contact (optionally a Slack @user ID or mention string) for each location you want to monitor.
4. Add an Anthropic credential for the Claude node and a Slack credential for posting messages, then choose the target Slack channel.
5. Review and adjust the thresholds, timezone, languages, message length, and banned words in the Config step to match your operating rules.

## Requirements
- Google account (Google Sheets OAuth2) and a blank Google Sheet
- Anthropic API key (Claude Haiku 4.5 by default; one call per flagged store per day, none for stores with nothing flagged)
- Slack app that is a member of the channel you choose
- No API key for the forecast on the free Open-Meteo API
- Open-Meteo's free API is for non-commercial use only: for business use, take an Open-Meteo paid plan (add your key to the URL in "Get forecast") or use another provider
- The latitude and longitude of each store (right-click the place in Google Maps to copy them)
- Store names and notes are sent to Anthropic

## Customization
- Config: the limits (rain probability 60%, rain 10 mm, max 33 °C, min 3 °C), the number of days (3), language (en or ja), output_language for Claude, max_message_chars, ng_words
- Add rules in "Find weather events" (wind, snow, UV) with the matching Open-Meteo variables
- Change the model in the "AI: Write prep and message" node
- Change the run time in "Every day at 15:00"
- Send the customer draft to a LINE or email approval step instead of Slack

## Additional info
What the checks do and do not prove:
- Code, not the AI, decides which days need preparing. Stores with nothing flagged never reach Claude.
- Every number in Claude's text must be a value of the facts it cites. A date is accepted only in a date shape (10月17日, 10/17, 17日, 2026-10-17, ranges like 10月16～18日) and only for a flagged day, so "10% off" cannot hide behind the month 10.
- The customer draft must fit max_message_chars and must not contain your ng_words. Failing texts are shown in Slack with a warning and the reason; they are not dropped.
- The checks cannot catch everything. In my test, Claude wrote "rain is forecast on the 16th and 18th" for a store where the 18th had a 30% probability: no wrong number, so the check passed, but the wording overstates it. Counts that Claude derives ("all 3 days") are flagged as numbers not in the forecast, which is strict but harmless.
- Forecasts can be wrong. This is a heads-up, not a promise: read the customer draft before you send it.

What I tested: the live Open-Meteo API with three made-up stores (Tokyo Shibuya, Sapporo, Naha), with low limits so that days were flagged, one run each, Claude Haiku 4.5. Flagged days matched the forecast (for example Sapporo min 2.8 °C, Naha 65% rain), the prep items and drafts reached Slack, and two texts were stopped by the checks (a count "3 days" and a date range my first version did not recognise, which I then fixed). Plus 12 unit checks of the code (wrong probability, an invented discount hidden behind the month number, banned words, too long, a number from a fact it did not cite, date ranges, unreadable output). This is not a measure of accuracy for your stores: test with your own first.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
