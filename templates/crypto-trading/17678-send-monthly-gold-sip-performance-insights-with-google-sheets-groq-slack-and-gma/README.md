# 📈 Send monthly gold SIP performance insights with Google Sheets, Groq, Slack and Gmail

> ⚡ **38 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs monthly to fetch the latest gold price, calculate your gold SIP portfolio performance from Google Sheets history, generate advisory insights with Groq, and send a decision-based report to Slack and Gmail.

## How it works
1. Runs on a monthly schedule trigger.
2. Fetches the latest INR/XAU gold rate from MetalpriceAPI and sends a Slack alert if the price fetch fails.
3. Reads your historical SIP transactions from Google Sheets.
4. Calculates total invested amount, total grams accumulated, current portfolio value, average buy price, and P&L using the latest gold price.
5. Classifies the month as a loss alert (<= -10%), profit-booking suggestion (>= 25%), or neutral update and prepares the corresponding decision message.
6. Sends the portfolio summary and decision context to a Groq chat model to generate concise actionable insights.
7. Posts the final report to a Slack channel and emails an HTML report via Gmail.

## Setup
1. Create a Google Sheet for SIP tracking and ensure it includes the columns used in the workflow (Date, SIPAmount, and Gold Price(1 gm)), then connect Google Sheets OAuth2 and set the target spreadsheet and sheet.
2. Add a MetalpriceAPI key (replace the hard-coded api_key query parameter) and confirm the base/currencies settings match your needs.
3. Add a Groq API credential and select the model you want to use for the AI insights.
4. Connect Slack credentials and set the target channel IDs for both the error alert and the monthly report messages.
5. Connect Gmail credentials, replace the placeholder recipient address, and review the email subject/body fields to match your preferred wording.

## Additional info
## How To Customize Nodes

- **Decision Thresholds**
  - Modify conditions in `Decision Engine`

- **AI Prompt**
  - Customize prompt in `AI Agent`
  - Change tone, length, or analysis depth

- **Slack Message Format**
  - Edit message template in `Send Slack Notification`

- **Email Template**
  - Customize HTML in `Send Email Report`

- **Calculation Logic**
  - Modify JS code in `SIP Calculations`


## Add-ons & Enhancements

- Add WhatsApp notifications using Twilio  
- Store historical reports in a database  
- Add charts using Google Sheets or external tools  
- Integrate with portfolio dashboards (React, Next.js)  
- Add multi-user support for SaaS use case  
- Add risk scoring and investment recommendations  


## Use Case Examples

1. Personal gold investment tracking with automated insights  
2. Financial advisor dashboards for multiple clients  
3. Monthly investment reporting automation for fintech apps  
4. AI-powered portfolio monitoring system  
5. Automated alerts for profit booking or dip buying  


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data from Google Sheets | Wrong sheet format | Ensure correct column names and sheet ID |
| API not working | Missing/invalid API key | Add valid MetalPrice API key |
| Slack message not sent | Incorrect channel or token | Verify Slack credentials |
| AI output empty | Groq API issue | Check API key and model config |
| Wrong calculations | Incorrect sheet data | Validate SIPAmount and Gold Price values |


## Need Help?

If you need help setting up this workflow, customizing it for your business or adding advanced features like dashboards, SaaS integration or AI enhancements, then our [n8n experts at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/) are happy to help.

Reach out to **WeblineIndia** for:
- Custom n8n workflow development  
- AI-powered automation solutions  
- Full-stack fintech platforms  
- Workflow optimization & scaling  

Let us help you turn automation into real business value.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
