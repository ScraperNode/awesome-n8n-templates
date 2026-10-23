# 📋 Log maintenance tickets from forms into Google Sheets and notify via Gmail

> ⚡ **16 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow captures maintenance requests via an n8n form, uploads the attached damage photo with UploadToURL, logs each ticket in Google Sheets, and notifies a manager via Gmail with an embedded image and link to the ticket tracker.

## How it works
1. Receives a maintenance request submission through an n8n form, including reporter details, location, issue description, and an uploaded photo.
2. Uploads the submitted photo to UploadToURL to generate a public, shareable image link.
3. Appends a new row to a Google Sheets tracker with the request details, a photo preview formula, and an initial “Pending” ticket status.
4. Sends a Gmail email alert to the manager containing the ticket details and embedded damage photo, plus a link to the Google Sheets tracker.

## Setup
1. Configure an UploadToURL account credential so the workflow can upload images and return a public URL.
2. Connect Google Sheets OAuth credentials and set the target spreadsheet and sheet for the ticket tracker.
3. Connect Gmail OAuth2 credentials and update the recipient email address and the “View Ticket Tracker” link in the email body to your actual Google Sheets URL.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
