# 📊 Monitor and score new real estate listings with BrowserAct, Gemini, Gmail, Slack and Sheets

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Every morning, this workflow scrapes Zillow, Redfin, and international property portals for new listings in your farm area, scores each one as Hot/Warm/Cold using Gemini AI, delivers a structured digest to Gmail and Slack, and logs all results in Google Sheets so you know the market before anyone else.

## How it works
1. Runs weekly at 7:00 (or on manual execution) and loads the monitoring settings such as location, price range, and which portals are enabled.
2. Scrapes new listings from each enabled portal using BrowserAct workflows with the configured search inputs.
3. Merges the portal results, deduplicates listings by URL/address, and normalizes fields like price, beds/baths, sqft, days on market, and listing URL.
4. If any listings are found, Gemini AI analyzes every listing and scores it Hot, Warm, or Cold based on days on market, pricing signals, location, and urgency indicators.
5. A formatted daily digest email is delivered to your inbox with all listings color-coded by score, Hot listings highlighted for immediate action.
6. Hot listings trigger an instant Slack alert so urgent opportunities are never missed even if the digest email goes unread.
7. Every listing logs to Google Sheets permanently, building a historical market intelligence database that gets more valuable every day you run it.

## Setup
1. Create BrowserAct scraping workflows for the portals you want to monitor, then add your BrowserAct API credential in n8n and paste the correct BrowserAct workflow IDs into the configuration values.
2. Add a Google Gemini (PaLM) API credential for the Gemini analysis step.
3. Add a Gmail OAuth2 credential and set the agent email address in the configuration so the digest is delivered to the right inbox.
4. Add a Google Sheets OAuth2 credential, set the target spreadsheet document ID, and ensure the sheet has columns matching the workflow’s log fields (Date, Address, Price, Threat Score, Listing URL, etc.).
5. (Optional) Add a Slack OAuth credential and update the channel (for example, #market-alerts) to receive Hot listing alerts.

## Requirements
- BrowserAct setup: This template requires a two-part setup. First, build a scraping workflow for each portal you want to monitor on browseract.com using the BrowserAct Prompt Template included on the template canvas. The prompt template is a complete copy-paste guide — describe what you want in plain English, BrowserAct Agent builds and tests the scraper automatically. Copy the Workflow ID from each scraper and paste it into the Set: Agent Configuration node in n8n.
- Google Sheet setup: Copy the Market Intelligence Database sheet template and link its ID to the Sheets node. Required columns: Date, Run ID, Portal, Address, Price, Bedrooms, Bathrooms, Sqft, Days on Market, Property Type, Threat Score, Price Assessment, Key Insight, Recommended Action, Listing URL.

## Customization
- Add any property portal by building a BrowserAct scraper using the prompt template on the canvas and enabling the portal in the Config node.
- Adjust the AI scoring thresholds in the Gemini: Analyze New Listings system prompt to match your market's norms; for example, change the days-on-market boundaries for Hot and Warm if your market moves faster or slower than the defaults.
- Change the schedule trigger time from 7 am to any preferred time; some agents prefer an evening run to review before the next morning.
- Extend the Google Sheets log with additional columns without affecting the workflow logic.
- Enable Slack for a second alert channel, connect your Slack credential and set the channel name in the Slack node.
- Run the Manual trigger at any time for an immediate on-demand intelligence scan outside the scheduled run.

## Additional info
Before going live.
- Complete all fields in the Set: Agent Configuration node — ZIP_CODE, CITY, STATE, PRICE_MIN, PRICE_MAX, PROPERTY_TYPE, BrowserAct Workflow IDs, portal toggles, and AGENT_EMAIL.
- Enable only portals for which you have built and tested a BrowserAct workflow — enabling a portal without a valid Workflow ID will cause that portal's node to error.
- If using Slack, set the channel name in the Slack node and invite your Slack bot to that channel.

BrowserAct output format. 
BrowserAct returns scraping results as downloadable files (JSON, CSV, XML) stored at temporary S3 URLs. The workflow automatically fetches the JSON file immediately after each scrape using an HTTP Request node. This happens within the same execution, so the temporary URLs are always valid. Do not add delays between the BrowserAct node and the Fetch Results node.

S3 URL expiry. 
BrowserAct's output file URLs expire approximately one hour after generation. The workflow fetches results immediately within the same execution. This is by design and requires no user action. Do not pin or cache BrowserAct output for later use.

Portal scraper maintenance. 
Property portals occasionally update their website layouts, which may require rebuilding the BrowserAct scraper using the prompt template. BrowserAct Agent rebuilds scrapers automatically from the same prompt. This is a one-time fix when it occurs.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
