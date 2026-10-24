# 📈 Generate portfolio exposure risk summaries with Sheets, Gemini, Slack, and Gmail

> ⚡ **16 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Portfolio Exposure Risk Summary Generator

&gt; n8n + Google Sheets + Gemini + Slack + Gmail

---

This workflow automatically analyzes portfolio data from Google Sheets on a scheduled basis, calculates exposure metrics such as sector allocation and concentration and generates a professional risk summary using Google Gemini. The report is then sent via email, shared on Slack and logged for historical tracking.


### Quick Implementation Steps

* Connect your Google Sheets portfolio data
* Add Gemini API credentials
* Configure Gmail and Slack nodes
* Set schedule trigger timing
* [Run once to verify output and logging](https://n8n.partnerlinks.io/om1efg2qgvwi)


## What It Does

This workflow performs a complete portfolio risk analysis pipeline. It starts by fetching portfolio data from a Google Sheet and validating whether the required data exists. If valid data is present, it calculates key exposure metrics such as total portfolio value, sector allocation and concentration levels using a Code node.

These calculated metrics are then passed to an AI model (Google Gemini), which generates a concise and professional risk summary. The workflow ensures the output is structured properly before preparing a final report.

The final output is distributed through multiple channels: an email report, a Slack notification and a log entry in Google Sheets. If no portfolio data is available, the workflow gracefully handles the scenario by generating a fallback report and logging it.


## Who It's For

* Financial analysts monitoring portfolio risk
* Investment advisors managing client portfolios
* Business owners tracking asset exposure
* Automation enthusiasts building financial workflows


## Requirements to Use This Workflow

* [n8n account (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
* Google Sheets with portfolio data
* Google Gemini API credentials
* Gmail account connected in n8n
* Slack workspace connected in n8n


## How It Works & Setup Guide

### Step 1: Schedule Trigger

* Configure the "Schedule Risk Review" node
* Default: Weekly run (Monday at 9 AM)

### Step 2: Connect Portfolio Data

* Use "Read Portfolio From Sheet" node
* Ensure sheet contains columns like:

  * Asset Name
  * Sector
  * Quantity
  * Price
  * Market Value (optional)

### Step 3: Validate Data

* "Check Portfolio Data Exists" ensures valid entries exist
* If no data → fallback branch executes

### Step 4: Calculate Exposure Metrics

* Code node calculates:

  * Total portfolio value
  * Sector exposure and percentages
  * Top holding concentration
  * Top 3 holdings

### Step 5: Generate AI Risk Summary

* "Generate Risk Summary" uses Gemini model
* Input includes calculated metrics
* Output is structured JSON with risk summary

### Step 6: Parse AI Output

* "Parse Risk Summary" ensures valid JSON output
* Handles fallback parsing if needed

### Step 7: Prepare Final Report

* "Prepare Risk Report Data" formats final fields:

  * Total value
  * Top sector and exposure
  * Top holding and concentration
  * Risk summary
  * Run date and ID

### Step 8: Deliver Report

* Email sent via Gmail node
* Slack message posted
* Data logged in Google Sheets

### Step 9: Fallback Handling

* If no portfolio data exists:

  * Default summary is generated
  * Logged to sheet for consistency


## How To Customize Nodes

* Modify schedule timing in Schedule node
* Update Google Sheet structure as per your data
* Adjust Code node logic for additional metrics
* Customize AI prompt for different analysis styles
* Change email/Slack message formatting


## Add‑ons

* Add risk scoring system (low/medium/high)
* Integrate historical trend analysis
* Add client-specific reporting
* Include asset-level risk breakdown
* Connect dashboards (e.g., Google Data Studio)


## Use Case Examples

* Weekly portfolio risk monitoring
* Client portfolio reporting for advisors
* Internal investment review automation
* Risk alerts for concentrated holdings
* Portfolio diversification analysis


## Troubleshooting Guide

| Issue                       | Possible Cause            | Solution                            |
| --------------------------- | ------------------------- | ----------------------------------- |
| No data processed           | Empty Google Sheet        | Ensure portfolio data exists        |
| AI output not parsed        | Invalid JSON response     | Check prompt format or parsing node |
| Email not sent              | Gmail credentials missing | Reconnect Gmail account             |
| Slack message not delivered | Incorrect channel setup   | Verify Slack channel ID             |
| Incorrect calculations      | Missing numeric values    | Validate sheet data types           |


## Need Help?

If you need assistance setting up this workflow, customizing it for your business or building advanced automation solutions, feel free to reach out to our [n8n automation developers](https://www.weblineglobal.com/hire/n8n-developers/) at WeblineIndia / Global. Our team specializes in building scalable and production-ready automation workflows tailored to your needs.

[We can help you extend this workflow with advanced analytics, dashboards, integrations and enterprise-grade solutions](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
