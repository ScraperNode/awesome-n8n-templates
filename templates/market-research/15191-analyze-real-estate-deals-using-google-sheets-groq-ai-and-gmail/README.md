# 📊 Analyze real estate deals using Google Sheets, Groq AI, and Gmail

> ⚡ **79 views** · 📊 [Market Research & Insights](../)

## Description

# Real Estate Deal Analyzer using Google Sheets, AI (Groq) and Gmail

This workflow automates real estate investment analysis using Google Sheets and AI. It calculates ROI and rental yield, detects duplicate entries, generates AI-based recommendations and sends email reports. Simply connect your Google Sheets, Groq (AI) and Gmail accounts, then start adding property data.

### Quick Implementation Steps

1. [Login to your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Connect your Google Sheets account (input + history sheets)
3. Add Groq API credentials for AI analysis
4. Connect Gmail for sending notifications
5. Add property data (price, rent, expenses) in the sheet
6. Run the workflow manually or activate it


## What It Does

This workflow helps you analyze real estate investment opportunities automatically. Whenever a new property entry is added to your Google Sheet, it calculates important financial metrics such as annual rent, profit, rental yield and ROI.

It then checks whether the property already exists in your historical records. If it finds a duplicate, it stops further processing, marks the entry and sends a notification email.

For unique entries, the workflow uses AI to evaluate the investment and classify it as BUY, HOLD or AVOID, along with risk level, reasoning and improvement suggestions. Finally, it stores the result, sends a detailed email report and marks the row as processed.


## Who It's For

- Real estate investors
- Property consultants
- Finance analysts
- Startup founders working in prop-tech
- Anyone managing property investments in Google Sheets


## Requirements to Use This Workflow

- [n8n account (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Sheets account (with two sheets: main + history)
- Groq API credentials
- Gmail account
- Basic understanding of spreadsheets


## How It Works & Set Up

### Step 1: Trigger Setup

Workflow starts manually and fetches new entries from Google Sheets.

### Step 2: Filter Unprocessed Data

Only rows with Processed = No and no duplicate flag are processed.

### Step 3: Prepare Data

Converts price, rent and expenses into numeric format.

### Step 4: Calculate Metrics

Calculates annual rent, profit, rental yield and ROI.

### Step 5: Check Duplicate

Compares current entry with historical data.

### Step 6: Conditional Routing

Duplicates go to alert flow; others go to AI analysis.

### Step 7A: Duplicate Flow

Sends email and marks row as duplicate.

### Step 7B: AI Analysis

Classifies property as BUY, HOLD or AVOID.

### Step 8: Save Results

Stores analysis in history sheet.

### Step 9: Email Report

Sends detailed investment report.

### Step 10: Mark Processed

Updates row as processed.


## How To Customize Nodes

- Modify ROI thresholds in AI node
- Improve duplicate detection logic
- Customize email templates
- Extend sheet fields


## Add-ons

- Slack/WhatsApp alerts
- CRM integration
- Dashboard reporting
- Loan calculations


## Use Case Examples

- Investment screening
- Portfolio tracking
- Duplicate prevention
- Automated reporting
- Real estate agency workflows


## Troubleshooting Guide

| Issue                   | Possible Cause                       | Solution                                                |
| ----------------------- | ------------------------------------ | ------------------------------------------------------- |
| No data processed       | "Processed" field not set to "No"    | Ensure new rows have Processed = No before running      |
| Duplicate not detected  | Matching only based on price         | Enhance logic to include more fields like ID or address |
| AI output parsing error | AI response not in valid JSON format | Ensure prompt strictly returns JSON without extra text  |
| Email not sent          | Gmail credentials not connected      | Reconnect Gmail account and test the node               |
| Incorrect ROI values    | Fields not treated as numbers        | Check data types and ensure numeric values in the sheet |
| Workflow not triggering | Manual trigger not executed          | Run workflow manually or add a trigger node             |

## Need Help?

[WeblineIndia](https://www.weblineindia.com/) can help you customize, extend and build similar workflows tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
