# 📈 Track and interpret whale wallet movements with Airtable, OpenAI, and Slack

> ⚡ **1 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every 15 minutes to fetch recent blockchain transactions, matches them against whale and exchange address lists in Airtable, uses OpenAI to generate a cautious market interpretation for high-value events, then logs the result to Airtable and posts an alert to Slack.

## How it works
1. Runs every 15 minutes on a schedule.
2. Fetches recent blockchain transactions from an HTTP endpoint and normalizes them into individual transaction records.
3. Loads tracked whale wallets and known exchange addresses from Airtable and classifies each transaction as an exchange deposit, exchange withdrawal, or wallet-to-wallet movement.
4. Calculates the USD value for each classified transaction and filters to events worth at least $100,000.
5. Checks Airtable to skip transactions that have already been recorded.
6. Sends qualifying new events to OpenAI to generate a short JSON interpretation and confidence score, then normalizes the response.
7. Creates a new record in Airtable for the whale movement event and posts a formatted alert to a Slack channel.

## Setup
1. Provide Airtable credentials and update the base and table selections for Tracked Whales, Exchange Addresses, and Whale Movement Events.
2. Populate the Airtable Tracked Whales and Exchange Addresses tables with wallet addresses (and set records to active where needed).
3. Ensure the HTTP endpoint used to fetch transactions is reachable from your n8n instance and replace the URL if you are not using the included dummy API.
4. Add an OpenAI API credential and confirm the model selection and prompt content meet your requirements.
5. Add a Slack credential and choose the target channel for alerts.
6. Adjust the $100,000 threshold (and any event-id/duplicate-check logic) if you want different alerting and deduplication behavior.

## Additional info
## Add-Ons

The existing workflow can be extended with additional functionality.

### Multiple Alert Thresholds

Add different alert levels for different transaction values, such as $100,000, $500,000, and $1 million.

### Additional Movement Categories

Extend the classification logic with more movement types when suitable reference data is available.

### Historical Whale Analysis

Use the logged Airtable events to identify repeated whale activity and historical movement patterns.

### Scheduled Summaries

Add a separate reporting process to summarize whale activity over a selected period.

### Confidence-Based Routing

Use the AI confidence value to route events differently based on confidence levels.

### Additional Notifications

Extend the notification stage to deliver qualifying events through additional communication channels.

### Production Blockchain Data Source

Replace the current configured transaction endpoint with a production transaction source while retaining the existing normalization, classification, validation, AI, logging, and notification structure.

These features are possible extensions and are not part of the current workflow configuration.


## Use Case Examples

### 1. Large Whale Deposits to Exchanges

A tracked whale sends funds to a known exchange wallet. The workflow classifies the movement as an `Exchange Deposit`, calculates its USD value, and generates an alert when the transaction meets the configured threshold and passes duplicate validation.

### 2. Large Exchange Withdrawals

A known exchange wallet sends funds to a tracked whale. The workflow identifies the transaction as an `Exchange Withdrawal` and sends the resulting analysis and transaction information to Slack when the event qualifies.

### 3. Whale-to-Wallet Transfers

A tracked whale sends funds to an address that is not listed as another tracked whale or known exchange. The workflow classifies the transaction as `Wallet-to-Wallet` and processes it when it meets the configured threshold.

### 4. High-Value Transaction Monitoring

Teams can use the $100,000 threshold to focus the workflow on high-value whale movements rather than sending alerts for every transaction returned by the transaction source.

### 5. Centralized Whale Movement Records

Qualifying events are stored in Airtable with transaction information, classification, USD value, AI interpretation, confidence, and alert metadata, providing a central event history.

There can be many more use cases depending on the transaction data source, wallet registries, business rules, and notification requirements.


## Troubleshooting Guide

| Issue                                       | Possible Cause                                                                         | Solution                                                            |
| ------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| No transactions are processed               | The HTTP response does not contain a `transactions` array or the array is empty        | Inspect the HTTP Request output and verify the response structure   |
| HTTP Request fails                          | The configured endpoint cannot be reached from n8n                                     | Verify the URL and network accessibility                            |
| Transactions disappear after normalization  | The transaction collection is missing or empty                                         | Check the HTTP response and confirm the `transactions` property     |
| Whale movement is not classified            | The wallet is not present as an active whale or exchange address                       | Check the Airtable wallet registries and address values             |
| Exchange movement is classified incorrectly | The wallet is listed in the wrong registry or has an unexpected active value           | Review the `Tracked Whales` and `Exchange Addresses` records        |
| USD value is incorrect                      | Amount or USD price is missing or not numeric                                          | Verify `amount` and `price_usd` in the transaction response         |
| Transaction does not reach the AI step      | The USD value is below the configured threshold or the event is considered a duplicate | Inspect `Check Alert Threshold` and `Confirm New Whale Event`       |
| Duplicate event is processed                | The duplicate lookup identifier does not match the stored event identifier             | Review the duplicate filter and the `event_id` mapping              |
| OpenAI does not return an interpretation    | OpenAI credentials or node configuration are incorrect                                 | Check the OpenAI credential and inspect the node execution output   |
| AI response is not parsed                   | The returned response does not match the expected JSON structure                       | Verify that the response contains `interpretation` and `confidence` |
| AI confidence is incorrect                  | Confidence is missing, invalid, or outside the expected range                          | Inspect the AI response and normalization logic                     |
| Airtable logging fails                      | Credential, table, or field mapping is incorrect                                       | Verify the Airtable credential, table, and mapped fields            |
| Slack notification fails                    | Slack credential or channel configuration is incorrect                                 | Verify the Slack credential and selected channel                    |
| Workflow runs but no Slack alert appears    | The transaction was filtered by threshold or duplicate validation                      | Review the execution path through the IF nodes                      |


## Important Configuration Note: Duplicate Event Identifier

The current workflow contains an identifier mismatch that should be reviewed before production use.

The duplicate-check node searches for:

```text
event_id = transaction_hash
```

However, the `Log Whale Movement Event` node currently writes `event_id` using:

```text
sender-timestamp
```

These values are different.

As a result, the duplicate lookup may not reliably find an event that was previously logged.

If the transaction hash is intended to be the unique event identifier, the event logging mapping should use the transaction hash consistently. Alternatively, the duplicate-check expression should use the same identifier that is stored in Airtable.


## Need Help?

Setting up an n8n workflow for production use may require adjustments to data sources, Airtable structures, business rules, AI prompts, notification formats and error handling.

WeblineIndia can help with:

* [n8n workflow setup and configuration](https://www.weblineindia.com/n8n-automation/).
* Custom blockchain transaction integrations.
* Airtable database and automation design.
* OpenAI workflow integration.
* Slack notification automation.
* Custom whale movement classification.
* Workflow debugging and optimization.
* Production workflow deployment.
* Workflow customization and maintenance.
* Building similar business process automation workflows from scratch.
* Adding custom integrations and features to existing n8n workflows.

If you need help setting up, customizing, extending, or deploying this workflow, [contact WeblineIndia for professional n8n automation development](https://www.weblineindia.com/contact-us.html) and customization services.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
