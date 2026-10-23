# 📊 Send daily marketplace KPI reports via Slack and Microsoft Outlook

> ⚡ **25 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs daily at 10am, reads a marketplaces configuration file, fetches KPI statistics from marketplace APIs via HTTP requests, compiles the results into an Excel file, then posts a Slack notification and emails the file using Microsoft Outlook while also saving it to disk.

## How it works
1. Runs every day at 10am on a scheduled trigger.
2. Reads `/home/node/.n8n-files/config/marketplaces.json` from disk and parses it as JSON to get the list of marketplaces to process.
3. Iterates through each marketplace entry and calls the marketplace stats endpoint with an HTTP GET request using environment-variable-based URL parts and an Authorization header.
4. Extracts KPI fields from each API response (offers, orders, evaluations, grades, and various rates) and builds a consolidated metrics dataset with the current date.
5. Converts the consolidated dataset into an `.xlsx` file and attaches it to a Microsoft Outlook email.
6. Sends a Slack message to confirm the KPI file was sent, and writes the same Excel file to `/home/node/.n8n-files/share_files/`.

## Setup
1. Create the `marketplaces.json` file at `/home/node/.n8n-files/config/marketplaces.json` with a `data` array containing each marketplace’s `marketplace` name plus the `baseUrlEnv`, `endpointstatsEnv`, and `apiKeyEnv` environment-variable keys used to build the request.
2. Define the required environment variables in your n8n environment for each marketplace (base URL, stats endpoint path, and API key/token used in the `Authorization` header).
3. Add Microsoft Outlook OAuth2 credentials, set the recipient email address and message body in the Outlook node, and ensure attachments are allowed for your tenant.
4. Add Slack OAuth2 credentials and select the target channel for the confirmation message.
5. Ensure the n8n instance has read access to the config path and write access to `/home/node/.n8n-files/share_files/` if you want to save the generated Excel file.

## 🔗 Nodes Used

HTTP Request, Slack, Microsoft Outlook, Schedule Trigger, Read/Write Files from Disk, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
