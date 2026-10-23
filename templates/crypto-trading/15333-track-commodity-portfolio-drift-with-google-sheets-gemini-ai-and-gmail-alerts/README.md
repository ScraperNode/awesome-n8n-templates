# 📈 Track commodity portfolio drift with Google Sheets, Gemini AI and Gmail alerts

> ⚡ **19 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Commodity Portfolio Tracker using n8n, Google Sheets, Gemini AI & Gmail Alerts

This workflow automatically monitors a commodity portfolio stored in Google Sheets, compares actual allocation against predefined targets, detects deviations and sends intelligent rebalance alerts via email using Gemini AI. It also logs every run (success, failure or no action) into a tracking sheet for audit purposes.


### Quick Implementation Steps

1. [Connect Google Sheets, Gmail and Gemini credentials in your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Add holdings data in Google Sheets
3. Configure targets in "Workflow Settings" node
4. Create `rebalance_log` sheet with required columns
5. Test workflow → Activate schedule


## What It Does

This workflow acts as an automated portfolio monitoring system specifically designed for commodity-based investments such as Gold, Silver, Oil, Copper and Natural Gas. It reads portfolio holdings using the **Read Holdings** node and combines them with configuration from the **Workflow Settings** node.

The workflow validates data through **Validate Portfolio Data**, calculates allocation via **Calculate Portfolio Allocation** and identifies deviations using **Detect Portfolio Drift**. If deviations exceed limits, **Classify Alert Severity** determines how critical the situation is.

Finally, **Build Alert Prompt** and **Generate Alert Message** (Gemini AI) create a human-readable alert, which is processed in **Prepare Alert Payload**, sent via **Send Rebalance Email** and logged using **Log Sent Alert**, **Log Validation Failure** or **Log No Action** depending on the outcome.


## Who It's For

* Financial advisors managing client portfolios
* Individual investors tracking commodity allocations
* Portfolio managers looking for automation
* FinTech developers building advisory tools
* Anyone who wants rule-based rebalancing alerts


## Requirements

* [n8n account (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
* Google Sheets account (for holdings + logs)
* Gmail account (for sending alerts)
* Google Gemini API credentials
* Basic understanding of n8n nodes and workflows


## How It Works & Setup Instructions

### Step 1: Prepare Google Sheets

Create two sheets:

#### Holdings Sheet

Columns example:
asset, units, price, current_value, last_updated

#### Log Sheet (`rebalance_log`)

Columns:
run_date,total_value,rebalance_needed,severity,affected_assets,alert_sent,summary,reason_skipped

### Step 2: Configure Workflow Settings Node

Update values inside **Workflow Settings** node:

* Target allocation (must sum to 100)
* Min/Max ranges
* Alert email
* Severity thresholds
* Currency

### Step 3: Connect Credentials

* Google Sheets → used in **Read Holdings**, **Log Sent Alert**, **Log Validation Failure**, **Log No Action**
* Gmail → used in **Send Rebalance Email**
* Gemini → used in **Generate Alert Message**

### Step 4: Workflow Execution Flow (Node-by-Node)

1. **Schedule Trigger** starts the workflow
2. **Read Holdings** fetches portfolio data
3. **Workflow Settings** provides configuration
4. **Synchronize Inputs** merges both sources
5. **Prepare Portfolio Context** structures the data
6. **Validate Portfolio Data** ensures correctness
7. **Check Validation Status** routes valid/invalid data
8. **Calculate Portfolio Allocation** computes percentages
9. **Detect Portfolio Drift** identifies deviations
10. **Check Rebalance Requirement** decides action path
11. **Classify Alert Severity** assigns severity level
12. **Build Alert Prompt** prepares AI input
13. **Generate Alert Message** creates final message
14. **Merge Alert Data** combines AI + data
15. **Prepare Alert Payload** formats output
16. **Send Rebalance Email** sends alert
17. **Log Sent Alert / Log No Action / Log Validation Failure** store results


## How To Customize Nodes

* **Workflow Settings**: Change targets, thresholds, email
* **Schedule Trigger**: Modify frequency (hourly/daily/weekly)
* **Gemini Node**: Adjust tone of alert messages
* **Email Node**: Add CC/BCC or change format
* **Code Nodes**: Customize calculation logic (e.g., percentage vs amount-based rebalancing)


## Add-ons

* Slack integration for high severity alerts
* Dashboard visualization using Google Data Studio
* Multi-client portfolio support
* Real-time price API integration (NSE, Alpha Vantage, etc.)
* Risk scoring system for portfolios


## Use Case Examples

1. Daily monitoring of commodity portfolios
2. Automated advisory alerts for wealth managers
3. DIY investor portfolio tracking system
4. Risk management for diversified assets
5. Audit trail for compliance and reporting

There can be many more variations of this workflow depending on business needs.


## Troubleshooting Guide

| Issue                   | Possible Cause          | Solution                                        |
| ----------------------- | ----------------------- | ----------------------------------------------- |
| No columns found        | Sheet missing headers   | Add header row in first row                     |
| Undefined values in log | Wrong node connection   | Connect from payload node instead of email node |
| Email not sent          | Gmail credentials issue | Reconnect Gmail account                         |
| AI output empty         | Prompt or API issue     | Check Gemini node input                         |
| Validation failed       | Incorrect data format   | Fix holdings sheet values                       |


## Need Help

If you need assistance setting up this workflow, customizing features or [building automation solutions](https://www.weblineindia.com/process-automation-solutions.html), feel free to reach out to our n8n experts at **WeblineIndia**.

We can help you:

* Customize workflows for your business
* Integrate advanced AI capabilities
* Build scalable automation systems
* Develop end-to-end FinTech solutions

[Get in touch to turn your ideas into production-ready workflows](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
