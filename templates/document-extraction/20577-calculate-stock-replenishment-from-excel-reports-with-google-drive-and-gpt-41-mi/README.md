# 🔬 Calculate stock replenishment from Excel reports with Google Drive and GPT-4.1 mini

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for newly uploaded XLSX inventory reports, uses OpenAI (GPT-4.1 mini) to calculate per-product replenishment needs, writes the results back into the spreadsheet as new columns, and then updates and moves the processed file in Google Drive.

## How it works
1. Triggers when a new XLSX file is created in a specific Google Drive folder.
2. Downloads the new file from Google Drive, extracts the XLSX rows, and splits the dataset into row batches.
3. For each batch, builds a compact JSON prompt containing sales, purchase, and stock metrics per SKU and sends it to OpenAI GPT-4.1 mini to get a reorder quantity and a one-sentence Turkish reason per row.
4. Maps the OpenAI results back onto the original rows by adding columns AB (need) and AC (reason), then continues until all batches are processed.
5. Reassembles all rows in the original order, converts the result back to XLSX, and updates the original Google Drive file content.
6. Moves the updated spreadsheet to a designated output folder in Google Drive.

## Setup
1. Add a Google Drive OAuth2 credential in n8n and select it in the Google Drive Trigger, Download, Update, and Move operations.
2. Set the input folder to watch in the Google Drive trigger and set the destination folder in the Google Drive move step.
3. Add an OpenAI API credential and select it in the OpenAI “Message a model” step (model: gpt-4.1-mini).
4. Ensure your XLSX column headers match the fields referenced in the prompt-building code (for example KOD, Son 45/90/180 Satis Miktar, Son 45/90/180 Giris Miktar, DEPO, MKL, and store stock columns like SRN, BZK, HTY, etc.).
5. Replace the placeholder brand name (MARKA ADI) in the OpenAI system prompt with your own brand name.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, Convert to File, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
