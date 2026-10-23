# 🎬 Create AI video product ads from Google Sheets with Shotstack

> ⚡ **4 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Turns each product photo in a Google Sheet into a short vertical video ad. Shotstack checks the cost first, animates the photo with AI, adds a voiceover, the product name, price and a call to action, and writes the finished ad back to the sheet.

## How it works
1. Reads new product rows from Google Sheets, a few per run.
2. Quotes the cost of each animation and skips products above your credit limit.
3. Animates the product photo with an image-to-video model.
4. Renders a 9:16 ad with an AI voiceover, name, price and call to action.
5. Saves the ad link back to the row, or marks why it failed.

## Setup
1. Connect your Google Sheets and Google Drive credentials, then pick the spreadsheet and tab in each Google Sheets step and the folder in the Save it to Google Drive step.
2. Add the columns sku, name, price, image_url, voiceover, status, note, ad_url and credits to your sheet. Each image_url must be a public link to the product photo.
3. Connect your Shotstack credentials. Generation is billed in credits on both Sandbox and Production keys.
4. Open Ad settings and set your credit limit per product, how many products to make per run, and the call to action.

## Requirements
- A Shotstack account and API key, with credits for AI generation
- A Google account with Google Sheets and Google Drive
- Product photos hosted at public URLs

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
