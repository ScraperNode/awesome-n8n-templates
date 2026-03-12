# 🤝 Automated export of Quickbooks Online data with n8n - with tutorial

> ⚡ **274 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_rec0EGjS8Q1AxvT1b.jpg)](https://youtu.be/mprQ4CY3yn0)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Overview

This workflow automatically exports customer balance data from QuickBooks to Google Sheets on a monthly basis. It eliminates manual data entry and creates a historical record of customer balances that updates automatically, making it easy to track payment trends, identify outstanding balances, and monitor customer financial health over time.

## Key Features

- **Automated Monthly Reporting**: Runs on the first day of each month to capture a snapshot of all customer balances
- **Clean Data Structure**: Extracts only the essential fields (Customer ID, Balance, Email, and Period) for easy analysis
- **Historical Tracking**: Each monthly run appends new data to your Google Sheet, building a timeline of customer balances
- **No Manual Work**: Once configured, the workflow runs completely hands-free

## Common Use Cases

- Track customer payment patterns and identify accounts with growing balances
- Create monthly reports for management or finance teams
- Build dashboards and visualizations from historical QuickBooks data
- Monitor customer account health without logging into QuickBooks

## Setup Requirements

**QuickBooks Developer Account**: Register at `developer.intuit.com` and create a new app in the App Dashboard. Select the 'Accounting' scope for permissions. You'll receive a Client ID and Client Secret to configure your n8n credentials.

**Credentials**: Set up QuickBooks OAuth2 credentials in n8n using your app's Client ID and Client Secret. Use 'Sandbox' environment for testing or 'Production' for live data (requires Intuit app approval). Also connect your Google Sheets account.

**Google Sheet**: Create a spreadsheet with column headers matching the workflow output: Period, Id, Balance, and Email.

## Configuration

- **Schedule**: The workflow runs monthly on the first day at 8 AM. Modify the Schedule Trigger to change timing or frequency
- **Spreadsheet URL**: Update the 'Export to Google Sheets' node with your destination spreadsheet URL
- **Data Fields**: Customize the 'Prepare Customer Data' node to extract different customer fields if needed

## 🔗 Nodes Used

Google Sheets, QuickBooks Online, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
