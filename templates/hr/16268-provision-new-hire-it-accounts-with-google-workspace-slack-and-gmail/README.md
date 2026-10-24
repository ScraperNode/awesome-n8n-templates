# 👥 Provision new hire IT accounts with Google Workspace, Slack, and Gmail

> ⚡ **11 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow receives new-hire records via a webhook, validates and normalizes the data, then provisions a Google Workspace account, creates an onboarding task in Google Tasks, notifies the IT team in Slack, emails the hiring manager via Gmail, and logs the run to Google Sheets.

## How it works
1. Receives a new hire payload from the HR system through an HTTP webhook endpoint.
2. Parses the payload, standardizes key fields (name, department, manager, start date), and skips records missing required identity data.
3. If the record is invalid, posts a Slack message to the IT channel for manual review and stops processing.
4. For valid hires, generates a company email address, username, temporary password, ticket title, and a target ready-by date.
5. Creates the new user in the Google Admin Directory (Google Workspace) and opens an IT onboarding checklist as a Google Tasks task.
6. Posts a provisioning summary to the IT Slack channel, emails the manager a day-one checklist via Gmail, and appends the provisioning details to a Google Sheets log.

## Setup
1. Configure your HR system (or source app) to send a POST request to the workflow webhook path `/hr/new-hire` using the production webhook URL.
2. Add Google credentials with access to the Admin SDK Directory API (for user creation), Google Tasks, Gmail, and Google Sheets, and ensure the account has the required admin permissions.
3. Add Slack credentials, set the target channel ID for IT onboarding notifications, and update the channel selection if needed.
4. Update the email domain in the generated address (currently `@yourcompany.com`) and confirm how departments map to Google Workspace org unit paths.
5. Set your Google Sheets document ID and ensure it contains (or can create) a sheet named "Provisioning Log" with matching columns for the appended fields.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Tasks, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
