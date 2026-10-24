# 🔬 Check foreign card exchange rates with Google Sheets, Frankfurter and Slack

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs monthly (or on demand) to read foreign-currency card charges from Google Sheets, fetch matching market exchange rates from the Frankfurter API, calculate premiums versus expected billed amounts, write results back to Google Sheets, and post a summary to Slack.

## How it works
1. Runs on a monthly schedule or when manually triggered.
2. Reads charge rows from the “FX statement” tab in Google Sheets and identifies rows where the transaction currency differs from the configured base currency.
3. Builds per-currency date ranges and requests historical exchange rates from the Frankfurter API for the required period.
4. Calculates each charge’s effective rate, expected billed amount, premium percentage, and extra amount, and assigns a status such as OK, High premium, Below market, Rate unavailable, or Check data.
5. Appends or updates the per-charge results in the “FX check” tab in Google Sheets using a stable row key to avoid duplicates on re-runs.
6. Posts a Slack message summarizing totals, the highest premium charges, and any rows that need attention, or posts a “nothing to check” message if no foreign-currency rows are found.

## Setup
1. Create a Google Sheets OAuth2 credential, select your target spreadsheet in the Google Sheets nodes, and (optionally) run the provided setup branch after pasting your spreadsheet ID to create the “FX statement” and “FX check” tabs with headers.
2. Add a Slack credential, choose the channel ID in the Slack message node, and ensure the bot is allowed to post to that channel.
3. Paste your statement data into the “FX statement” tab and confirm the column names and base currency in the Config step match your sheet (Date, Merchant, Billed, Foreign amount, Currency by default).

## Requirements
- Google account (Google Sheets OAuth2) and a blank Google Sheet
- Slack app that is a member of the channel you choose
- No AI and no API key for the rates: the free Frankfurter API needs no key (its site says there are no quotas, requests are throttled to prevent abuse, it is free for commercial use, and the rates fall under each provider's terms: check them before you rely on it)
- Statement lines for foreign purchases with five columns: date, merchant, amount billed in your own currency, foreign amount, currency code (many card statements show this, not all)
- Dates must have the year first (2026-09-05, 2026/9/5, or real spreadsheet dates)

## Customization
- Config: base currency (default JPY), the five column names, the high-premium limit (default 4%), the below-market limit (default -2%), the look-back days (default 7)
- Change the schedule in "Every month" (default: day 1 at 9:00), or run "Check now" on demand
- Send the report by email instead of Slack
- The same pattern works for supplier invoices: put the invoice date, the foreign total and what the bank debited in the same five columns

## Additional info
What the numbers mean:
- The market rate is a yardstick, not the rate your card used. Card networks use their own daily rates, and a statement date is often the posting date, one to a few days after the purchase. So the premium includes the network's rate difference and the timing, not only the issuer's fee. "OK" does not mean the rate was fair, and "High premium" does not prove a fee. The 4% limit is my arbitrary default: choose your own.
- The v1 endpoint used here knows 30 currencies. In my test AED returned 404 and the line was marked "Rate unavailable" (reported, not guessed). The v2 endpoint lists many more currencies; I did not test v2 rates.
- A weekend or bank holiday uses the last rate before it, and the note says so.

What I tested: 28 unit checks of the code, and one run against the live API on 10 made-up statement lines (amounts built from real market rates with chosen premiums): 2.5%, 3.0% and 2.0% OK; 4.5% and 6.2% flagged "High premium"; a line billed 7% below the market flagged "Below market"; AED "Rate unavailable"; a zero amount "Check data"; 3 domestic lines skipped; the Slack message arrived. The "nothing to check" branch was tested only in a unit test of the planning code, not run live. I had no real card CSV to test with.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
