# 🔬 Automated daily financial analysis from Loyverse POS with Google Sheets & email

> ⚡ **1,285 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Automatically fetches daily sales, shifts, and receipts from Loyverse. Calculates gross profit, net operating profit, other key metrics, saves them to a Google Sheet and sends out a daily report via email.

## Who’s it for
This template is for any business owner, manager, or analyst using Loyverse POS who needs more advanced financial reporting. If you're a restaurant, bar, or retail owner who wants to automatically track daily net profit, compare sales to historical averages, and build a custom financial dashboard in Google Sheets, this workflow is for you.

## How it works / What it does
This workflow runs automatically on a daily schedule. It fetches all sales data and receipts from your Loyverse account for the previous business day, defined by your custom shift times (even past midnight). 
A powerful Code node then processes all the data to calculate the metrics that Loyverse either doesn't provide at all, or only spreads out across several separate reports instead of in one consolidated place. 

Already set up are metrics like...
- -Total Revenue, Gross Profit, and Net Operating Profit
- Cash handling differences (over/under)
- Average spend per receipt (ATV)
- 30-day rolling Net Operating Profit (NOP)
- Performance vs. your historical weekday average

Finally, it appends the single, calculated row of daily metrics to a Google Sheet and sends an easily customizable summary report to your email.

## How to set up
This workflow includes detailed Sticky Notes to guide you through the setup process.

Because every business has a unique POS configuration (different POS devices, categories, and payment types), you'll need to set up a few things manually before executing the workflow. I've tried to make this as easy as possible to follow, and the entire setup should only take about 15 minutes.

### Preparations & Credential setup
1. Subscribe to "Integrations" Add-on in Loyverse ($9 / month) to gain API access.
2. Create an Access token in Loyverse
3. Create Credentials: In your n8n instance, create credentials for Loyverse (use "Generic" &gt; "Bearer Auth"), Google Sheets (OAuth2), and your Email (SMTP or other).

### Make a copy of a prep-configured Google Spreadsheet
*(Link in the second sticky note inside the workflow).*

### Fill MASTER CONFIG: 
Open the MASTER CONFIG node. Follow the comments inside to add your Google Sheet ID, Sheet Names, business hours, timezone, and Loyverse IDs (for POS devices, payment types, and categories).

### Configure Google Sheet Nodes

1. **Configure Read Historical Data:** Open this node. Follow the instructions in the nearby Sticky Note to paste the expressions for your Document ID and Sheet Name.
2. **Configure Save Product List:** Open this node. Paste in the expressions for Document ID and Sheet Name. The column mapper will load; map your sheet columns (e.g., item_name) to the data on the left (e.g., {{ $json.item_name }}).
3. **Configure Save Latest Sales Data:** Open this node. Paste in the expressions for Document ID and Sheet Name. Save and run the workflow. After that, the column mapper will load. This is the most important step: map your sheet's column names (e.g., "Total Revenue") to the calculated metrics from the Calculate All Metrics node (e.g., {{ $json.totalGrossRevenue }}).

Activate the workflow. 🫡

### Requirements
- Loyverse Integrations Subscription
- Loyverse Access Token
- Credentials for Loyverse (Bearer Auth)
- Credentials for Google Sheets (OAuth2)
- Credentials for Email/SMTP sender

## How to customize the workflow
This template is designed to be highly flexible.

### Central Configuration:
Almost all customization (POS devices, categories, payment types, sheet names) is done in the MASTER CONFIG node. You don't need to dig through other nodes.

### Add/Remove Metrics:
The Calculate All Metrics node has additional metrics already set up, just add the relevant collumns to the SalesData sheet or even add your own calculations to the node. Any new metric you add (e.g., metrics.myNewMetric = 123) will be available to map in the Save Latest Sales Data node.

### Email Body:
You can easily edit the Send email node to change the text or add new metrics from the Calculate All Metrics node.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
