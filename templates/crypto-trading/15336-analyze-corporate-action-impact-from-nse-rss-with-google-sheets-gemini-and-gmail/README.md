# 📈 Analyze corporate action impact from NSE RSS with Google Sheets, Gemini, and Gmail

> ⚡ **119 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Corporate Actions Impact Analyzer 

&gt; n8n, NSE RSS, Google Sheets, Gemini AI and Gmail

This workflow automatically tracks corporate actions from NSE RSS, matches them with a single client’s portfolio stored in Google Sheets, calculates financial impact using AI and sends a structured email summary. Every run is logged for tracking and auditing.


### Quick Implementation Steps

1. [Connect credentials in your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi):
   * Google Sheets
   * Gmail
   * Google Gemini API
2. Open **Config (Edit Fields)** and update `client_id` and `admin_email`
3. Ensure your Portfolio Sheet has required columns (see below)
4. Run workflow manually once for testing
5. Activate **Run Workflow (Scheduler)**


## What It Does

This workflow automates corporate action monitoring for a **single client portfolio**. It starts by fetching the latest corporate actions from the NSE RSS feed and converting raw feed data into structured fields such as company name, dividend amount, ratios and important dates.

It then retrieves the client’s holdings from Google Sheets and intelligently matches them with corporate actions using normalized company names. Only relevant matches are processed further.

For matched actions, the workflow uses Gemini AI to calculate financial impact including dividend benefits, bonus shares and required actions. It generates a clean summary and sends it via email, while logging every run.


## Who It's For

* Financial advisors managing client portfolios
* Wealth management firms
* Stock analysts tracking corporate actions
* n8n automation builders
* Fintech workflow developers


## Requirements

### Tools Required

* [n8n account (Cloud or Self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
* Google Sheets account
* Gmail account
* Google Gemini API access

### Required Google Sheet Structure

#### Portfolio Sheet (Sheet Name: Portfolio)

Required columns:

```
client_id, client_name, email, asset_name, company_name, symbol, quantity, avg_buy_price, asset_type
```

#### Action_Log Sheet

* Used for logging workflow results
* No predefined schema required


## How It Works & Setup Guide

### Step 1: Scheduler

**Node:** Run Workflow (Scheduler)

* Triggers workflow at defined intervals

### Step 2: Configuration

**Node:** Config (Edit Fields)

* Set:
  * client_id
  * admin_email

### Step 3: Fetch RSS Data

**Node:** Fetch Corporate Actions

* Pulls NSE corporate action RSS feed

### Step 4: Normalize Data

**Node:** Normalize RSS

* Converts raw feed into structured fields

### Step 5: Fetch Portfolio

**Node:** Fetch Portfolio (Single Client)

* Reads holdings from Google Sheets

### Step 6: Match + Build Prompt

**Node:** Compare Holdings + Build Prompt

* Matches portfolio with corporate actions
* Builds AI input prompt

### Step 7: Match Check

**Node:** Has Matching Actions?

* TRUE → AI processing
* FALSE → No-match flow

### Step 8: AI Processing

**Node:** Generate AI Impact Summary

* Calculates impact using Gemini

### Step 9: Parse Output

**Node:** Clean + Parse AI Output

* Cleans and converts response to JSON

### Step 10: Validation

**Node:** AI Output Valid?

* TRUE → Send results
* FALSE → Error flow

### Step 11A: Success Flow

* Format Email + Log Row
* Send Email Notification
* Log Result to Sheets

### Step 11B: No Match Flow

* Prepare No-Match Output
* Send No-Match Email
* Log No-Match Run

### Step 11C: Error Flow

* Prepare Parse-Error Output
* Send Admin Review Email
* Log Parse Error


## How To Customize Nodes

* Modify **Config (Edit Fields)** for different clients
* Update matching logic in **Compare Holdings + Build Prompt**
* Adjust AI prompt for output formatting
* Customize email content in **Format Email + Log Row**
* Replace RSS source if needed


## Add-ons

* Multi-client automation support
* Slack or WhatsApp alerts
* Real-time stock price integration
* Dashboard visualization
* Historical tracking
* Risk scoring layer


## Use Case Examples

1. Dividend alerts for clients
2. Portfolio monitoring automation
3. Wealth advisor reporting
4. Corporate action tracking system
5. Automated financial notifications

There can be many more use cases depending on customization.


## Troubleshooting Guide

| Issue               | Possible Cause           | Solution                    |
| ------------------- | ------------------------ | --------------------------- |
| No data in output   | RSS feed issue           | Check RSS URL               |
| No matches found    | Client holdings mismatch | Verify company names        |
| AI parse error      | Invalid AI response      | Check prompt structure      |
| Email not sent      | Gmail credentials issue  | Reconnect Gmail             |
| Sheets not updating | Wrong sheet ID           | Verify Google Sheets config |


## Need Help?

If you need help setting up, customizing or scaling this workflow, you can reach out to our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) experts at **WeblineIndia**.

We can help you with:

* Custom workflow development
* Multi-client scaling
* API integrations
* AI optimization
* Production-ready automation systems

[Get expert help and build powerful automation tailored to your business needs](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, RSS Read, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
