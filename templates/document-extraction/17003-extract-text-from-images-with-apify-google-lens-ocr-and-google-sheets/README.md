# 🔬 Extract text from images with Apify Google Lens OCR and Google Sheets

> ⚡ **34 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Turn image URLs into clean, structured text and log it to Google Sheets automatically. No OCR library, no setup, powered by Apify Google Lens.


## How it works
1. Runs manually when you click Test workflow.
2. Sets the target public image URL to process.
3. Sends the image URL to Apify (Google Lens OCR) to extract the full text and related OCR metadata.
4. Keeps the key fields (image URL, detected language, full text, and scrape timestamp) from the OCR result.
5. Appends the extracted text and metadata as a new row in Google Sheets.

## Setup
1. Install the Apify community node and add an Apify API token credential for the OCR step.
2. Add a Google Sheets OAuth credential.
3. Replace the Google Sheets document ID with your spreadsheet ID and confirm the target sheet name/columns for auto-mapping.
4. Update the imageUrl value to a publicly accessible image you want to OCR (PNG/JPG/WebP).

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
