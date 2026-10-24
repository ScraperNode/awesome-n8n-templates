# 🔬 Manage IT asset requests and inventory with Airtable and a webhook

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow receives IT asset requests via a webhook, logs each request to Airtable, checks stock in an Airtable inventory table, and either approves the request while decrementing inventory or creates an exception record for insufficient stock before returning a JSON response.

## How it works
1. Receives an IT asset request via a POST webhook.
2. Generates a unique request ID and stores the incoming request body for downstream steps.
3. Creates a new record in Airtable (IT Asset Management base) in the Asset Requests table with the request details and a default Pending status.
4. Searches the Airtable Inventory table for the requested asset type and compares the available quantity to the requested quantity.
5. If stock is sufficient, updates the inventory quantity and updates the Airtable request record to Approved.
6. If stock is insufficient, creates an exception record in Airtable with the reason Insufficient Stock and a Pending Review status.
7. Returns a JSON webhook response indicating either approval or out-of-stock handling.

## Setup
1. Create or select an Airtable base with tables for Asset Requests, Inventory (including Asset Type and Available Quantity fields), and an Exceptions table to log insufficient stock cases.
2. Add an Airtable Personal Access Token credential in n8n and update the base ID/table IDs if you are not using the provided ones.
3. Configure the calling system to send a POST request to the workflow’s webhook URL with the expected fields (employeeName, employeeId, department, assetType, quantity, priority).

## 🔗 Nodes Used

Airtable, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
