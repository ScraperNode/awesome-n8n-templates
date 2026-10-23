# 📈 Send gold-silver ratio opportunity alerts with GoldAPI and Gmail

> ⚡ **30 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow fetches live gold (XAU) and silver (XAG) prices from GoldAPI.io, calculates the gold-silver ratio, evaluates it against buy/hold thresholds, and sends a formatted opportunity alert email via Gmail.

## How it works
1. Starts manually and loads configuration values such as the GoldAPI.io key, currency, alert email, and ratio thresholds.
2. Requests the latest gold and silver prices from GoldAPI.io and extracts the numeric price values.
3. Combines both price results and calculates the gold-silver ratio.
4. Compares the ratio to the configured thresholds to decide whether to signal “buy silver”, “buy gold”, or “hold”.
5. Generates a timestamped alert message with an insight and interpretation for the selected signal.
6. Sends the full report (prices, ratio, signal, and explanation) to the configured recipient using Gmail.

## Setup
1. Create a GoldAPI.io account, copy your API key, and paste it into the workflow configuration value used by the GoldAPI.io requests.
2. Connect a Gmail OAuth2 credential in n8n and ensure the workflow can send email from your Gmail account.
3. Set the recipient email address, currency code (for example, INR), and your buy-silver and buy-gold ratio thresholds in the workflow’s configuration step.
4. Replace the manual trigger with a Cron trigger if you want the workflow to run automatically on a schedule.

## Additional info
##  How To Customize

- Change thresholds in config node  
- Modify email content  
- Change currency  
- Adjust decision logic 


##  Add-ons

- Use Cron for automation  
- Store data in Google Sheets  
- Add Slack or Telegram alerts  
- Build dashboards  


##  Use Cases

- Investment alerts  
- Portfolio monitoring  
- Financial analysis  
- Trading signals  
- Learning automation 


##  Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No price data returned | Invalid or missing API key | Add a valid GoldAPI key in config node |
| Email not sent | Gmail credentials not configured | Reconnect Gmail OAuth2 credentials |
| Ratio is 0 | Missing or incorrect price mapping | Verify Edit Fields nodes |
| Workflow stops | Incorrect node connection | Check workflow connections |
| Incorrect signals | Wrong threshold values | Update thresholds in config |


##  Need Help?

If you need help with setup, customization or extending this workflow, you can contact WeblineIndia to [hire n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) for professional support.

## 🔗 Nodes Used

HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
