# 🔬 Predict tenant default risk with GPT-4o, Gmail, Slack and collections APIs

> ⚡ **95 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates tenant screening by analyzing payment history, credit, and employment data to predict rental risks. Designed for property managers, landlords, and real estate agencies, it solves the challenge of objectively evaluating tenant reliability and preventing payment defaults.The system runs daily assessments, fetching rent payment history, credit bureau reports, and employment records. An AI agent merges this data, calculates risk scores, and routes alerts based on severity. High-risk tenants trigger immediate email notifications for intervention, medium-risk cases post to Slack for monitoring, while low-risk updates save quietly to databases. Automated collection workflows initiate for high-risk cases.

## Setup Steps
1. Configure payment history, credit bureau, and employment credentials in fetch nodes
2. Add OpenAI API key for risk analysis and set Gmail/Slack credentials for alerts
3. Customize risk score thresholds and routing rules in workflow logic

## Prerequisites
Payment system API, credit bureau access, employment verification API

## Use Cases
Rental application screening, existing tenant monitoring 

## Customization
Modify risk scoring criteria, adjust alert thresholds

## Benefits
Reduces defaults through early detection, eliminates screening bias

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, PayPal, Gmail, BambooHR

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
