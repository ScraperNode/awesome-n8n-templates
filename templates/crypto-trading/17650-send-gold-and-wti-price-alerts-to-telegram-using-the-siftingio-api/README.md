# 📈 Send gold and WTI price alerts to Telegram using the SiftingIO API

> ⚡ **44 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every 15 minutes, pulls Gold (XAUUSD) and WTI crude oil (WTIUSD) prices from the SiftingIO API, checks them against configurable thresholds (or a test mode), and sends price alert messages to a Telegram chat.

## How it works
1. Runs every 15 minutes on a schedule.
2. Requests the latest XAUUSD (gold) and WTIUSD (WTI crude oil) trade prices from the SiftingIO API.
3. Waits until both API responses are available and extracts a numeric price value from each response.
4. Compares each price against the configured “above” and “below” thresholds (or generates a test alert when test mode is enabled).
5. Sends each generated alert message to the configured Telegram chat.

## Setup
1. Get a [SiftingIO API key](https://sifting.io/register?utm_source=n8n&utm_medium=workflow_template&utm_campaign=commodity_price_alerts). Create an n8n HTTP Header Auth credential with header name `X-API-Key` and your key, then select it for both SiftingIO HTTP requests. See the [API documentation](https://sifting.io/docs) for authentication details.
2. Add Telegram credentials in n8n and set the target Telegram chat ID in the Telegram send message step.
3. Edit the test mode flag and the Gold/WTI threshold values in the threshold-checking code before activating the workflow.

## Requirements
- A SiftingIO account and API key
- A Telegram bot credential
- A Telegram chat ID
- An n8n Cloud or self-hosted n8n workspace

## Customization
- Change the schedule interval to check prices more or less frequently
- Adjust the Gold and WTI above/below alert thresholds
- Replace XAUUSD or WTIUSD with other supported SiftingIO symbols
- Customize the Telegram alert message and timestamp format

## Additional info
This workflow template is free to use. Users must provide their own SiftingIO API key and Telegram credentials.

The workflow imports inactive and contains no hardcoded API keys, credentials, or personal data.

TEST_MODE is enabled for the first manual run so users can verify the Telegram connection without waiting for a price threshold to be crossed. After the test succeeds, users should disable TEST_MODE and configure their own alert thresholds before activating the workflow.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
