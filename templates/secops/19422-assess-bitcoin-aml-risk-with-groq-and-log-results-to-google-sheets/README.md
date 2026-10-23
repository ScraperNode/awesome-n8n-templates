# 🔒 Assess Bitcoin AML risk with Groq and log results to Google Sheets

> ⚡ **3 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow fetches recent unconfirmed Bitcoin transactions from Blockchain.com, applies rule-based AML risk scoring, generates a one-line analyst note using Groq’s LLM, and logs the results to Google Sheets.

## How it works
1. Runs manually when you click Execute workflow.
2. Requests the latest unconfirmed transactions from blockchain.info and extracts key fields such as hash, amount (BTC), fee, outputs count, and a receiver address.
3. Detects possible structuring by counting how many transactions in the batch send to the same receiver address and flags addresses with 3+ occurrences.
4. Applies rule-based AML heuristics (amount thresholds, high fees, many outputs, dust amounts, and structuring flag) to assign a LOW/MEDIUM/HIGH risk level with reasons.
5. Limits processing to the first 10 scored transactions.
6. Sends each transaction and its rule-based risk signals to a Groq chat model to produce a single-line analyst explanation and suggested next action.
7. Appends the transaction details, risk level, and AI analysis as a new row in a Google Sheets spreadsheet.

## Setup
1. Add a Groq API credential and select the model you want to use in the Groq chat model step.
2. Add a Google Sheets OAuth2 credential with access to the target spreadsheet.
3. Create (or update) a Google Sheet with columns for hash, total_btc, fee, num_outputs, risk_level, and ai_analysis, and set the correct Spreadsheet ID and sheet tab in the Google Sheets append step.
4. (Optional) Enable and adjust the risk filter so only non-LOW transactions are sent to the LLM and written to Google Sheets.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, Basic LLM Chain, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
