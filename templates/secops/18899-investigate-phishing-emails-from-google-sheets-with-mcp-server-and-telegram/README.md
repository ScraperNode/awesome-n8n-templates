# 🔒 Investigate phishing emails from Google Sheets with MCP server and Telegram

> ⚡ **8 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow monitors a Google Sheet for newly submitted phishing emails, downloads the attached .eml/.msg from Google Drive, analyzes headers and IOCs via an MCP server, and sends a consolidated verdict and report to Telegram.

## How it works
1. Triggers every 5 minutes when a new row is added in Google Sheets.
2. Extracts the Google Drive file ID from the row, downloads the email file, and rejects submissions that are not .eml or .msg.
3. Parses the email content to extract key headers, a cleaned body, embedded URLs, attachment metadata, and SHA-256 hashes.
4. Sends the parsed data to an MCP server to validate SPF/DKIM/DMARC and analyze the Received chain for relay details.
5. Splits extracted IOCs into URLs, hashes, and IPs, then queries the MCP server for reputation lookups for each type.
6. Merges the header and IOC results, calculates an overall MALICIOUS/SUSPICIOUS/LIKELY BENIGN verdict, and formats a plain-language report.
7. Sends the report to the configured Telegram chat.

## Setup
1. Create Google Sheets and Google Drive credentials in n8n, then set the spreadsheet ID and sheet tab name and ensure a column contains a Google Drive link with an id= parameter.
2. Deploy or provide an MCP server endpoint that supports the tools check_email_headers, check_url, file_hash, and lookup_ip, then set the MCP server URL on all MCP Client nodes.
3. Add a Telegram credential, set the target Telegram chat ID in the Telegram node, and run a test by adding a row that links to a valid .eml or .msg file in Google Drive.

## 🔗 Nodes Used

Telegram, Google Drive, Google Sheets Trigger, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
