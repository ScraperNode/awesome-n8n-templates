# 📊 Shopify review aggregator: Trustpilot, Google, Facebook to Google Sheets

> ⚡ **232 views** · 📊 [Market Research & Insights](../)

## Description

## Multi-Platform Review Collector for n8n: Trustpilot + Google + Facebook Automation

## How it works
The schedule triggers daily review collection from configured platforms and connects to multiple review platform APIs to download latest reviews. The workflow normalizes review data into consistent format with rating, text, date, source, and customer name. It removes duplicates and stores centralized database in Google Sheets creating comprehensive review repository for analysis and response management.
Trigger: Daily schedule (10 AM)
Output: Updated review database
Timing: Daily sync
Frequency: Once per day
Data Flow:
Trustpilot → API call → Raw reviews
Google Reviews → API call → Raw reviews
Facebook → API call → Raw reviews
↓
Normalize format → Remove duplicates
↓
Google Sheets → Centralized database

## Set up instructions

Set up Shopify credentials in n8n: API Key, Password, Shop Subdomain, and Shared Secret
Obtain API credentials for each review platform you want to monitor (Trustpilot, Google Reviews, Facebook)
Configure HTTP Request nodes with proper API endpoints and authentication headers for each platform
Set up Google Sheets credentials and create a spreadsheet with columns: Source, Rating, Review Text, Customer Name, Date, Product ID, Review ID
The schedule trigger runs daily at 10 AM but feel free to adjust frequency based on review volume
Update the Code node with proper data mapping for each review platform's API response format

Test API connections individually before running the full workflow to ensure all platforms return data correctly

## 🔗 Nodes Used

Google Sheets, HTTP Request, Shopify, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
