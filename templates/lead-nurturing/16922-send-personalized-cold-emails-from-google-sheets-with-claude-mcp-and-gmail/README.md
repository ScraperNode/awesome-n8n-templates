# 💬 Send personalized cold emails from Google Sheets with Claude MCP and Gmail

> ⚡ **63 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This template turns a Google Sheet of leads into an outreach engine controlled by any MCP-compatible AI assistant, including Claude, ChatGPT,and others. Instead of manually drafting emails, you instruct the assistant to draft or send them through rotating Gmail accounts, while every action logs back to the sheet automatically

## How it works
1. Receives a tool-call request from any MCP-capable assistant (Claude, ChatGPT, or others) via the MCP Server Trigger endpoint
2. Reads all rows from a Google Sheets "Leads" tab so the assistant can find queued leads and avoid contacting anyone twice
3. Creates a Gmail draft in one of several connected Gmail accounts, using the recipient, subject, and plain-text body the assistant provides
4. Optionally sends the email immediately from one of the three Gmail accounts when the assistant provides the final recipient, subject, and body.
5. Updates the matching row in Google Sheets with status, assigned account, sent date, and any error note, keeping the sheet as the single source of truth

## Setup
1. Connect your Google Sheets OAuth credentials, then set the Spreadsheet document ID and the "Leads" sheet name in both the read and update nodes
2. Connect Gmail OAuth2 credentials for each sending account you plan to use
3. Make sure your Google Sheet includes these columns: Name, Clinic, Email, Subject, Body, Status, Assigned_Account, Sent_Date, Error_Note, row_number
4. Copy the MCP Server Trigger's production URL and Bearer token, then add them as a custom connector in Claude, or as a tool endpoint in any other MCP-capable assistant

## Requirements
- gmail account and Google Sheet and any free or paid account in claude and GPT and gemini

## Customization
- you can use it for one acount or if you want for cold calling then you can add more account to this

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
