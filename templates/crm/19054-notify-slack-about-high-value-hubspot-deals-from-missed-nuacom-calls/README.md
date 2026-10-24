# 🤝 Notify Slack about high-value HubSpot deals from missed NUACOM calls

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow listens for inbound missed calls in NUACOM, matches the caller to a HubSpot contact by phone number, retrieves an associated deal, and posts a Slack alert when the deal’s forecast amount is greater than 1000.

## How it works
1. Triggers when an inbound missed call event is received from NUACOM.
2. Normalizes the caller number from the 00-prefixed international format to E.164 format (+...).
3. Searches HubSpot contacts for a matching phone number and retrieves the contact record.
4. Checks whether the contact has at least one associated deal and, if so, fetches the associated deal from HubSpot.
5. Evaluates the deal’s forecast amount and, if it is greater than 1000, sends a message to a specified Slack channel with the contact name, deal name, and amount.

## Setup
1. Create and connect NUACOM API credentials in n8n and ensure missed call inbound events are enabled for your NUACOM account.
2. Add a HubSpot OAuth2 connection with permission to search and read contacts and deals.
3. Add a Slack OAuth2 connection and select the target channel for notifications.
4. Adjust the deal amount threshold (currently 1000) and confirm your HubSpot contact phone numbers are stored in E.164 format to match the normalized caller number.

## Requirements
- NUACOM, Hubspot and Slack Accounts

## 🔗 Nodes Used

Slack, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
