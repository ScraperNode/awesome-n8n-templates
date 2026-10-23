# 🔬 Analyze failed trades in Google Sheets with Gemini and send Slack, email, and task alerts

> ⚡ **18 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Failed Trade Root Cause Explainer

This workflow automatically monitors a Google Sheet for failed trades, analyzes each failure using AI and updates the sheet with a probable root cause, confidence level and actionable next steps. It also sends alerts via Slack and email and creates a follow-up task to ensure the issue is reviewed.

### Quick Implementation Steps

* Connect Google Sheets (Failed Trade Log)
* Add Google Gemini API credentials
* Configure Slack, Gmail and Google Tasks
* Ensure sheet columns match workflow fields
* Test with one sample failed trade
* [Activate the workflow](https://n8n.partnerlinks.io/om1efg2qgvwi)


## What It Does

This workflow automates the analysis of failed trades logged in a Google Sheet. Whenever a new trade is added, it validates whether the required failure details are present.

If valid, the workflow sends the trade details to Gemini AI, which returns a structured explanation including probable cause, confidence, next steps and a short ops summary. The workflow updates the same row with this analysis.

Once updated, alerts are sent to Slack and email and a follow-up Google Task is created for operational tracking. If required fields are missing, the workflow skips AI and marks the record as invalid.


## Who It's For

* Trade operations teams
* Brokerage and fintech platforms
* Back-office and support teams
* Teams handling trade exceptions and failures


## Requirements

* [n8n account (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
* Google Sheets (Failed Trade Log)
* Google Gemini API credentials
* Slack account
* Gmail account
* Google Tasks account


## How It Works & Setup Guide

### Step 1: Google Sheet Setup

Ensure your sheet contains fields like:

* Trade ID, Client Name, Instrument, Trade Type
* Quantity, Price, Trade Date
* Counterparty, Venue
* Error Code, Error Message, Failure Stage
* Status, Priority, Analysis Status, Alert Sent

### Step 2: Trigger Setup

* Configure Google Sheets Trigger to fire on **new row added**

### Step 3: Validation Logic

* Workflow checks if Trade ID, Error Code and Error Message exist
* If missing → marked as Invalid Input

### Step 4: AI Analysis

* Gemini analyzes trade failure
* Returns structured JSON:

  * probable_cause
  * confidence
  * next_steps
  * ops_summary

### Step 5: Sheet Update

* Original row is updated with AI results
* Analysis Status set to **Completed**

### Step 6: Alerts & Actions

* Slack alert sent to ops channel
* Email alert sent with full summary
* Google Task created for follow-up

### Step 7: Final Update

* Alert Sent updated to **Yes** after email is sent


## How To Customize Nodes

* Modify AI prompt for different analysis depth
* Change Slack/email message formatting
* Add more validation rules in IF node
* Extend Google Sheet columns for more data
* Adjust task content for follow-up workflows


## Add-ons

* Add severity-based alert routing
* Integrate with Jira or ticketing systems
* Add duplicate detection logic
* Build dashboards for failed trade trends
* Add retry logic for failed API calls


## Use Case Examples

* Real-time failed trade analysis
* Faster ops team triage
* Standardizing root cause reporting
* Automated alerts and follow-ups
* Maintaining audit-ready trade logs

There can be many more use cases depending on how the workflow is extended.


## Troubleshooting Guide

| Issue                   | Possible Cause                   | Solution                                               |
| ----------------------- | -------------------------------- | ------------------------------------------------------ |
| Workflow not triggering | Incorrect sheet or trigger setup | Verify sheet connection and activate workflow          |
| Record marked invalid   | Missing required fields          | Ensure Trade ID, Error Code, Error Message are present |
| AI output missing       | Invalid AI response              | Ensure prompt enforces JSON format                     |
| Sheet not updating      | Matching issue                   | Verify Trade ID mapping                                |
| Slack/email not sent    | Credentials issue                | Reconnect integrations                                 |
| Task not created        | Google Tasks not configured      | Verify credentials                                     |


## Need Help?

If you need help setting up or customizing this workflow, our [n8n developers](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia can assist with implementation, integrations and scaling automation solutions.

[Reach out to build tailored workflows](https://www.weblineindia.com/contact-us.html) for your business needs.

## 🔗 Nodes Used

Google Sheets, Slack, Google Tasks, Gmail, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
