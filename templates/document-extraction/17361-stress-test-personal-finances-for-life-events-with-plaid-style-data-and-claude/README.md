# 🔬 Stress-test personal finances for life events with Plaid-style data and Claude

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a user-selected financial life event through an n8n Form, retrieves account and market data, runs a Monte Carlo stress test, and uses Anthropic Claude to generate and email a personalized financial report.

## How it works
1. Receives a form submission that specifies the life event to test (buy a house, lose a job, or both) and the simulation horizon and parameters.
2. Fetches linked account balances and recent transactions from a Plaid-style account-aggregator API and fetches historical market return statistics from a market-data API.
3. Calculates a financial baseline (net worth, estimated monthly income/expenses, and emergency-fund coverage) and packages the life-event and market inputs for simulation.
4. Runs 1,000 Monte Carlo month-by-month simulations applying the selected event’s cash-flow shocks and random market returns, then summarizes percentiles and shortfall probability.
5. Sends the simulation results to Anthropic Claude to produce a JSON risk narrative, risk level, and three recommendations, then formats a complete plain-text report.
6. Sends the digital twin report by SMTP email with the computed risk level in the subject line.

## Setup
1. Add Anthropic credentials and select the Claude model in the Anthropic Chat Model node used by the AI agent.
2. Configure the account-aggregator HTTP request with your Plaid (or equivalent) client ID, secret, and access token, and adjust the endpoint/response mapping if your provider differs.
3. Add your market-data API key in the Authorization header and update the market-data endpoint to return mean and standard deviation of monthly returns.
4. Set up SMTP credentials and replace the from/to email addresses used to send the final report.
5. Activate the workflow and use the n8n Form URL to submit an event scenario and run a simulation.

## 🔗 Nodes Used

Send Email, HTTP Request, AI Agent, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
