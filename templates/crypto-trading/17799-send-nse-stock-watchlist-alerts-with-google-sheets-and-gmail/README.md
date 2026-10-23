# 📈 Send NSE stock watchlist alerts with Google Sheets and Gmail

> ⚡ **53 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow polls a Google Sheets stock watchlist every five minutes during weekday market hours, fetches live quotes from an NSE quotes HTTP API, and sends Gmail alerts when prices cross buy-below or sell-above thresholds while logging each triggered alert back to Google Sheets.

## How it works
1. Runs every 5 minutes during configured weekday market hours using a schedule trigger.
2. Reads the watchlist from Google Sheets and keeps only rows marked as active.
3. Sends the active symbols to an NSE quotes HTTP endpoint to retrieve the latest prices.
4. Compares each symbol’s current price against the watchlist’s buy_below and sell_above thresholds to generate BUY/SELL alert records.
5. Stops if no alerts are generated, otherwise routes alerts by direction (above for SELL, below for BUY) and formats the email subject and message.
6. Sends each alert via Gmail and appends the alert details (timestamp, symbol, price, direction, threshold) to an AlertLog sheet in Google Sheets.

## Setup
1. Connect Google Sheets credentials and set the spreadsheet and sheet names/IDs for both the Stock Watchlist and AlertLog tabs.
2. Create/verify the Stock Watchlist columns used by the workflow (at minimum: Name, active, buy_below, sell_above).
3. Connect Gmail credentials and set the recipient(s) in the Gmail node to receive BUY/SELL alerts.
4. Confirm the NSE quotes API endpoint is reachable from your n8n instance, and adjust the schedule cron expression if your market hours or timezone differ.

## Additional info
## Add-ons (Additional Features)

Possible extensions:

- Telegram alerts
- WhatsApp notifications
- Slack delivery
- Portfolio dashboard integration
- Daily summary emails
- Price trend tracking
- Technical indicator filtering
- Webhook notifications
- Database storage
- Multi-market support
- TradingView integration
- Position sizing calculations


## Use Case Examples

### 1. Buy Zone Monitoring

Track stocks and receive alerts when prices fall below preferred entry levels.

### 2. Profit Booking Alerts

Notify investors when stocks cross exit targets.

### 3. Portfolio Watchlist Automation

Monitor multiple NSE stocks from a single Google Sheet.

### 4. Manual Strategy Tracking

Implement custom entry/exit strategies without trading platforms.

### 5. Historical Alert Analytics

Use AlertLog data for reviewing triggered signals.

Additional use cases can be built by extending notification channels, market APIs and analytics logic.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| No alerts received | Stock row inactive | Set `active = TRUE` |
| Workflow runs but no stocks processed | Missing `Name` column | Ensure `Name` column exists |
| Gmail sending fails | OAuth issue | Reconnect Gmail credentials |
| Alert history not saved | Missing AlertLog columns | Create required columns |
| API request fails | Endpoint unavailable | Verify API availability |
| No BUY / SELL events generated | Threshold values not reached | Adjust buy/sell limits |
| Empty API response | Schema mismatch | Ensure compatible output structure |
| Workflow runs outside desired time | Schedule mismatch | Update cron expression |
| Missing symbols | Incorrect stock names | Verify NSE symbol values |
| Alert messages incorrect | Message node customization issue | Review BUY/SELL Set nodes |


## Need Help?

Do you need help deploying, customizing or extending this workflow?

**WeblineIndia** can assist with:

- n8n workflow setup
- Market automation customization
- Google Sheets integrations
- Alert systems
- Financial workflow automation
- Multi-channel notification systems
- Custom add-ons and dashboards
- Similar automation development

Whether you want Telegram alerts, advanced analytics, custom APIs or additional market integrations, the workflow can be expanded further based on your requirements.

Contact WeblineIndia to [hire n8n developers](https://www.weblineglobal.com/hire/n8n-developers/) for implementation assistance and [custom workflow development](https://www.weblineindia.com/n8n-automation/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
