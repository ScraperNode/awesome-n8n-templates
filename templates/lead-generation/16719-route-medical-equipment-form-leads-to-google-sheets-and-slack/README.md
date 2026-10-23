# 🎣 Route medical equipment form leads to Google Sheets and Slack

> ⚡ **38 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/Zi872Mz4GnE?si=5yhYcMMH633Sqdd9

This workflow captures medical equipment enquiries via an n8n form, stores or updates each submission in Google Sheets, flags low-quality leads based on free email domains, and routes qualified enquiries to the right Slack channel depending on the stated purchase timeline.

## How it works
1. Receives a submission from an n8n form collecting company, contact, and equipment interest details.
2. Appends or updates the enquiry in Google Sheets, matching on the Work Email Address.
3. Checks whether the email domain is a free provider (for example, gmail.com or outlook.com) and posts a “Low Quality Lead” alert to Slack when it is.
4. For non-free domains, looks up the matching row in Google Sheets and continues only when a record is found.
5. Routes qualified enquiries based on Purchase Timeline, sending “Immediate Need” submissions to a dedicated Slack channel and “Budgeting for Next Fiscal Year” submissions to a follow-up campaign Slack channel.

## Setup
1. Set up the n8n Form Trigger and publish the form so users can submit enquiries.
2. Add a Google Sheets Service Account credential, share the target spreadsheet with the service account email, and confirm the document ID and sheet tab are correct.
3. Add a Slack credential and set the destination channels for low-quality alerts, immediate action, and follow-up campaign messages.
4. Update the list of free email domains if you want stricter or broader lead-quality filtering.

## 🔗 Nodes Used

Google Sheets, Slack, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
