# 🔬 Optimize restaurant menu margins with Google Drive, Sheets and GPT-4o

> ⚡ **10 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow ingests supplier invoice images from Google Drive, uses OpenAI GPT-4o to extract normalized ingredient unit prices into Google Sheets, then runs a weekly margin check by combining ingredient price history, recipe costing, and POS sales to email menu price recommendations via Gmail.

## How it works
1. Triggers when a new invoice file is created in a specified Google Drive folder.
2. Downloads the invoice image and sends it to OpenAI GPT-4o Vision to extract supplier details, invoice metadata, and per-ingredient unit prices (kg/l/each).
3. Parses the extracted JSON into one row per invoice line and appends the ingredient price records to an Ingredient Prices tab in Google Sheets.
4. Every Monday at 8 AM, reads POS Sales, Recipe Costing, and Ingredient Prices from Google Sheets and calculates current vs 30-day-baseline plate costs and gross margin changes per dish.
5. Flags dishes whose margin drops by at least 2 points, identifies the ingredient driving the increase, estimates the last-7-days profit leak, and generates a capped (+10%) rounded price suggestion.
6. Logs each flagged dish to a Margin Alerts tab in Google Sheets and uses OpenAI (gpt-4o-mini) to draft a short owner-friendly summary.
7. Sends the weekly pricing report email to the owner via Gmail.

## Setup
1. Create credentials for Google Drive, Google Sheets, and Gmail (OAuth2) and an OpenAI API key credential.
2. Create a Google Sheets spreadsheet with tabs and headers for Ingredient Prices, Recipe Costing, POS Sales, and Margin Alerts, and update each Google Sheets node to point to the correct document and sheet names.
3. Set the Google Drive folder to watch in the trigger and ensure invoices are uploaded as images/scans that GPT-4o can read.
4. Adjust the margin/lookback and pricing settings (lookback days, margin-drop threshold, max increase cap, rounding step) in the margin calculation code, and replace the owner email address in the Gmail send step.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
