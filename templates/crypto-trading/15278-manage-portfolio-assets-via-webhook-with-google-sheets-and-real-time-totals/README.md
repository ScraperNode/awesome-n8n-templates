# 📈 Manage portfolio assets via webhook with Google Sheets and real-time totals

> ⚡ **37 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Webhook-Based Portfolio Manager (n8n + Google Sheets + API)

This workflow turns your n8n instance into a **portfolio management API** using a webhook and Google Sheets. You can **add, update or delete assets** via a simple POST request and it automatically calculates your **total portfolio value in real-time**.

### Quick Implementation Steps

1. [Import the workflow into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Connect your **Google Sheets OAuth2 credentials**
3. Ensure your sheet has columns: `Asset`, `Amount`, `Price`, `Value`
4. Activate the workflow
5. Send a POST request to the webhook with:
```json
{
  "asset": "BTC",
  "amount": 2,
  "price": 30000,
  "action": "add"
}
````


## What This Workflow Does

This workflow acts as a **REST-like API for managing investment portfolios** using n8n. It receives data via a webhook, processes it and performs operations on a Google Sheet.

It supports three core operations:

* **Add** a new asset
* **Update** an existing asset
* **Delete** an asset

Each request is validated to ensure correctness before execution. The workflow also prevents duplicate entries and invalid operations.

After performing any action, it fetches the full portfolio, calculates the **total portfolio value** and returns a structured JSON response with updated data.


## Who It's For

* Developers building **financial dashboards or APIs**
* Traders tracking portfolios via automation
* No-code/low-code users using **n8n + Google Sheets**
* Anyone wanting a lightweight **portfolio backend without a database**


## Requirements

To use this workflow, you need:

* [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
* Google account with access to Google Sheets
* Configured **Google Sheets OAuth2 credentials in n8n**
* A Google Sheet with **STRICT required columns**:
  * `Asset`
  * `Amount`
  * `Price`
  * `Value`
* Basic knowledge of API requests (POST)


## How It Works & Setup Instructions

### 1. Webhook Trigger

* Node: **Portfolio Webhook Trigger**
* Accepts **POST requests**
* Entry point for all operations

### 2. Normalize Input Data

* Converts:
  * `asset` → uppercase
  * `amount`, `price` → numbers
* Calculates:
  * `value = amount × price`

### 3. Validate Input

* Node: **Validate Amount & Price**
* Ensures:
  * `amount ≥ 0`
  * `price ≥ 0`
  * `value ≥ 0`

#### Error Path: Invalid Amount/Price

If validation fails:

```json
{
  "error": "value of amount or price is not correct it should be in positive number"
}
```

### 4. Route by Action

* Node: **Route by Action (Add/Update/Delete)**
* Supported values:
  * `add`
  * `update`
  * `delete`

#### Error Path: Missing Action

```json
{
  "error": "action field is required, add key in json called action and in value add, update or delete."
}
```

#### Error Path: Invalid Action Value

```json
{
  "error": "action should contains only one of these three values ['add', 'update', 'delete']."
}
```

### ADD Operation

#### Flow:

1. **Check Asset Exists (Add)**
2. **Asset Exists? (Add)**

#### Error Path: Asset Already Exists

```json
{
  "error": "Asset: BTC is already in your portfolio"
}
```

#### Success:

* Node: **Add New Asset**
* Appends row to Google Sheets


### UPDATE Operation

#### Flow:

1. **Update Existing Asset**
2. **Asset Found?**

#### Error Path: Asset Not Found (Update)

```json
{
  "error": "Asset: BTC is not found in your portfolio"
}
```

#### Success:

* Updates matching row using `Asset` column


### DELETE Operation

#### Flow:

1. **Check Asset Exists (Delete)**
2. **Asset Found? (Delete)**

#### Error Path: Asset Not Found (Delete)

```json
{
  "error": "Asset: BTC is not found in your portfolio"
}
```

#### Success:

* Node: **Delete Asset Row**
* Removes row using row index


### Portfolio Calculation

After any operation:

1. **Combine All Operation Outputs**
2. **Fetch Full Portfolio**
3. **Calculate Portfolio Value**

#### Logic:

* Iterates through all rows
* Calculates:
  * `totalPortfolioValue = sum of all values`


### Final Response

Returns:

```json
{
  "message": "Asset: BTC is added, now your total portfolio value is: $60000",
  "Assets": [...]
}
```


## How To Customize Nodes

* **Webhook Path**
  * Change endpoint in *Portfolio Webhook Trigger*
* **Sheet Name / ID**
  * Modify in all Google Sheets nodes
* **Validation Rules**
  * Update conditions in *Validate Amount & Price*
* **Response Format**
  * Customize JSON in *Final Response to User*
* **Matching Logic**
  * Change matching column (default: `Asset`)


## Add-ons (Enhancements)

You can extend this workflow with:

* Email notifications after transactions
* Real-time price API integration
* AI-based investment insights
* Dashboard using tools like Retool or Power BI
* Slack/Telegram alerts
* Transaction history logging


## Use Case Examples

1. Personal crypto portfolio tracker
2. Stock portfolio API backend
3. Admin panel for investment tracking
4. Automated trading journal
5. SaaS MVP for portfolio management

And many more depending on your use case.


## Troubleshooting Guide

| Issue                      | Possible Cause             | Solution                      |
| -------------------------- | -------------------------- | ----------------------------- |
| Webhook not working        | Workflow not active        | Activate workflow in n8n      |
| Invalid amount/price error | Negative or missing values | Ensure positive numbers       |
| Asset not updating         | Asset not found in sheet   | Check exact asset name        |
| Duplicate asset error      | Asset already exists       | Use `update` instead of `add` |
| Delete not working         | Row not found              | Verify asset exists           |
| Empty response             | Merge or calculation issue | Check node connections        |


## Need Help?

If you need help with:

* Setting up this workflow
* Customizing features
* Adding integrations (AI, APIs, dashboards)
* Building similar automation systems

Reach out to [n8n workflow developers at **WeblineIndia**](https://www.weblineindia.com/hire-n8n-developers/) for expert assistance.

We specialize in building **scalable n8n workflows, automation systems and custom integrations** tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
