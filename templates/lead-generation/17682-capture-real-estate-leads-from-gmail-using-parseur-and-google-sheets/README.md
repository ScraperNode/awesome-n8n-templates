# 🎣 Capture real estate leads from Gmail using Parseur and Google Sheets

> ⚡ **31 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow polls Gmail every minute for new real estate inquiry emails, filters for specific lead sources, uses Parseur to extract structured lead details, and logs new (non-duplicate) leads into a Google Sheets tracker.

## How it works
1. Polls Gmail every minute for new incoming emails.
2. Filters messages to only process emails coming from zillow.com, realtor.com, trulia.com, or facebookmail.com.
3. Converts the email body text into a text file and sends it to Parseur for data extraction.
4. Waits 10 seconds, then fetches the parsed document from the Parseur API and converts the returned JSON string into a usable JSON object.
5. Looks up the lead’s email in Google Sheets to check whether the lead already exists.
6. Skips processing if a matching row is found, otherwise appends the extracted lead fields as a new row in the Google Sheets tracker.

## Setup
1. Connect a Gmail account in the Gmail Trigger and ensure it has permission to read incoming messages.
2. Set up a Parseur account and parser, then confirm the parser ID (202917) matches your Parseur template fields for these lead emails.
3. Add Parseur API authentication for the HTTP request (HTTP Header Auth) so n8n can fetch the parsed document.
4. Connect Google Sheets OAuth credentials and update the target spreadsheet/document ID and sheet tab if you want to use a different leads tracker.

## 🔗 Nodes Used

Google Sheets, Gmail Trigger, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
