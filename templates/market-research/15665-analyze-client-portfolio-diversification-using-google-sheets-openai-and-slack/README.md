# 📊 Analyze client portfolio diversification using Google Sheets, OpenAI and Slack

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

## Description

# Client Portfolio Diversification Check using n8n, Google Sheets, OpenAI & Slack

This n8n workflow automatically analyzes client portfolio data from Google Sheets, evaluates sector allocation, risk level and diversification quality and generates AI-powered insights. It also sends real-time alerts to Slack for invalid data and overexposed sectors while saving reports back to Google Sheets.


### Quick Implementation Steps

1. Create a Google Sheet with columns: `Stock`, `Sector`, `Investment`
2. Add another sheet for reports with columns: `timestamp`, `riskLevel`, `diversificationLevel`, `report`
3. Connect Google Sheets credentials in n8n
4. Add your OpenAI API key
5. Connect Slack OAuth and select a channel
6. [Activate the workflow](https://n8n.partnerlinks.io/om1efg2qgvwi)


## What It Does

This workflow continuously monitors client portfolio data by fetching records from Google Sheets every hour. It cleans and validates the data, ensuring that only meaningful entries (valid sector and investment values) are processed. Any invalid entries are immediately flagged and reported via Slack.

Once validated, the workflow performs financial analysis by grouping investments by sector, calculating allocation percentages and determining the portfolio's risk level. It also detects overexposure in sectors exceeding 40% allocation and calculates a diversification score to measure balance.

To enhance decision-making, the workflow leverages AI to generate concise portfolio insights and actionable recommendations. These insights, along with computed metrics, are formatted into a report, sent to Slack and stored in Google Sheets for future reference.


## Who It's For

- Financial advisors managing client portfolios  
- Investment analysts tracking diversification  
- Wealth management firms  
- FinTech teams building automated insights  
- Individual investors seeking portfolio health checks  


## Requirements

To use this workflow, ensure the following:

### 1. Google Sheets

- Input Sheet must include columns:
  - `Stock`
  - `Sector`
  - `Investment`
- Output Sheet must include:
  - `timestamp`
  - `riskLevel`
  - `diversificationLevel`
  - `report`

### 2. n8n Setup

- [Self-hosted or cloud n8n instance](https://n8n.partnerlinks.io/om1efg2qgvwi)

### 3. Credentials Required

- Google Sheets OAuth2 credentials  
- OpenAI API key (used with `gpt-4o-mini`)  
- Slack OAuth2 credentials  

### 4. Slack Channel

- A Slack channel must be selected for alerts and reports  


## How It Works & Setup Guide

### Step 1: Trigger Workflow

- The workflow starts using **Google Sheets Trigger**
- Runs automatically **every hour**

### Step 2: Fetch Portfolio Data

- Reads data from the configured Google Sheet

### Step 3: Normalize Data

- Converts:
  - Stock → uppercase
  - Sector → uppercase
  - Investment → numeric value

### Step 4: Validate Data

- Conditions checked:
  - Investment &gt; 0
  - Sector is not empty
  - Sector ≠ "UNKNOWN"
- Invalid data → Slack alert sent  
- Valid data → continues processing  

### Step 5: Compute Sector Allocation

- Groups investments by sector  
- Calculates total portfolio value  
- Computes allocation percentage per sector  

### Step 6: Risk & Exposure Analysis

- Risk Levels:
  - Low (&lt;30%)
  - Medium (30–50%)
  - High (&gt;50%)
- Detects overexposed sectors (&gt;40%)

### Step 7: Diversification Score

- Measures how evenly investments are distributed  
- Labels:
  - Excellent (&gt;80)
  - Good (&gt;60)
  - Moderate (&gt;40)
  - Poor (≤40)

### Step 8: AI Insights Generation

- Uses OpenAI (`gpt-4o-mini`)
- Generates:
  - Portfolio summary
  - Risks
  - Diversification feedback
  - Actionable recommendations

### Step 9: Overexposure Decision

- If overexposed → Slack alert triggered  

### Step 10: Report Formatting

- Combines:
  - Risk level
  - Diversification level
  - Allocation breakdown
  - AI insights

### Step 11: Save & Notify

- Saves report in Google Sheets  
- Sends formatted report to Slack  


## How To Customize Nodes

- **Risk Logic**
  - Modify thresholds in `Compute: Risk Score & Exposure`

- **Diversification Calculation**
  - Adjust scoring logic in `Compute: Diversification Score`

- **AI Prompt**
  - Customize system prompt in `AI: Portfolio Insights Generator`
  - Change tone, length or recommendations style

- **Slack Messages**
  - Edit message templates in Slack nodes for alerts and reports

- **Validation Rules**
  - Add more conditions in `Validate Data` node (e.g., stock format)


## Add-ons (Extend This Workflow)

- Email alerts using SMTP node  
- Dashboard integration (e.g., Power BI / Looker Studio)  
- Historical trend analysis  
- Multi-client portfolio tracking  
- Automatic rebalancing suggestions  
- Integration with market data APIs  


## Use Case Examples

1. **Client Portfolio Monitoring**
   - Automatically track diversification and risk exposure  

2. **Wealth Advisory Automation**
   - Provide AI-generated insights without manual analysis  

3. **Compliance & Risk Alerts**
   - Detect and alert overexposed portfolios instantly  

4. **Investment Reporting**
   - Generate structured reports for clients regularly  

5. **Personal Finance Tracking**
   - Individuals monitoring their own investment portfolios  

These are just a few examples. This workflow can be adapted for many other financial automation scenarios.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data fetched | Incorrect Google Sheet ID | Verify document ID and sheet selection |
| Invalid data alerts | Missing or incorrect values | Ensure all rows have valid `Sector` and `Investment` |
| AI not generating insights | Missing OpenAI API key | Add and verify OpenAI credentials |
| Slack messages not sent | wrong Slack credentials or channel | Reconnect Slack OAuth and verify channel |
| Report not saved | wrong output sheet setup | Ensure output sheet exists with correct columns |
| Workflow not running | Trigger inactive | Activate workflow in n8n |

## Need Help?

If you need assistance with:

- Setting up this workflow  
- Customizing AI insights  
- Adding advanced features  
- Building similar automation workflows  

Feel free to reach out to our [n8n workflow developers at **WeblineIndia**](https://www.weblineindia.com/hire-n8n-developers/) for expert support.

We specialize in building scalable automation workflows tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, Slack, Google Sheets Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
