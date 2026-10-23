# 🎣 Collect duplicate-safe client intake with forms and Google Sheets

> ⚡ **29 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow collects new client intake details via an n8n Form and appends a normalized, timestamped record to Google Sheets for consistent tracking.

## How it works
1. Receives a new submission from an n8n Form asking for name, email, company, service needed, budget, and notes.
2. Cleans and standardizes the submitted fields by trimming whitespace, collapsing repeated spaces, lowercasing the email address, and adding an ISO timestamp.
3. Appends the normalized intake data as a new row in a Google Sheets worksheet by mapping fields to the sheet headers.

## Setup
1. Create a Google Sheet with the header row: Timestamp, Name, Email, Company, Service needed, Budget, Notes (case-sensitive).
2. Add a Google Sheets OAuth2 credential and select the target Google Sheets document and worksheet in the append step.
3. Test the form using the Form Trigger test URL to confirm a row is appended, then activate the workflow and share the production form URL.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
