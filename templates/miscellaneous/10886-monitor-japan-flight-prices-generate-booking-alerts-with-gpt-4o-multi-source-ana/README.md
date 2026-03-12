# 🔧 Monitor Japan Flight Prices & Generate Booking Alerts with GPT-4o & Multi-Source Analysis

> ⚡ **201 views** · 🔧 [Miscellaneous](../)

## Description

## How It Works
Scheduled triggers run automated price checks across multiple travel data sources. The collected data is aggregated, validated, and processed through an AI analysis layer that compares trends, detects anomalies, and evaluates multi-criteria factors such as price movement, seasonality, and route demand. The system then routes results into booking preparation, report generation, and notification modules. When target price conditions are met, alerts are sent and records are updated accordingly.

## Setup Steps
1. Connect Google Flights and Skyscanner APIs using authenticated tokens.
2. Configure the OpenAI API for enhanced analysis and multi-factor evaluation.
3. Link Google Sheets for storing historical price data.
4. Add WordPress site credentials to enable automated report publishing.
5. Enable email notifications for price alerts and updates.
6. Adjust the scheduler frequency within the **Schedule Price Check** node to control how often the workflow runs.

## Prerequisites
Google Flights API, Skyscanner API, flight booking service credentials, OpenAI API key, Google Sheets access, WordPress admin account, email service configured.


## Use Cases
Travel agencies automating client alerts for price drops. Corporate travel managers monitoring bulk bookings.  

## Customization
Modify price thresholds in Multi-Criteria Decision node. Add airline or destination filters in search parameters. 

## Benefits
Eliminates manual price monitoring. Reduces booking delays through automation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Wordpress, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
