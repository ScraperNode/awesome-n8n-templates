# 🔬 Extract meeting decisions and action items with LDX hub (Gemini) and Google Sheets

> ⚡ **25 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a meeting-minutes PDF via an n8n form, uses LDX hub (Gemini) to segment it by agenda and extract decisions and action items, then appends each item as a row in Google Sheets.

## How it works
1. Receives a PDF upload through an n8n form submission trigger.
2. Sends the document to LDX hub AnalyzeDoc (Google Gemini) to split the minutes into agenda-topic segments and return them as structured JSON — a topic that spans multiple pages stays in one segment.
3. Converts the agenda segments into a JSONL batch so each segment can be processed independently.
4. Sends the batch to LDX hub StructFlow (Google Gemini) to extract every decision and action item with owner and due date per agenda segment.
5. Expands the extracted results into one row per decision/action item with agenda context.
6. Appends the rows to a selected Google Sheets worksheet.

## Setup
1. Install the `n8n-nodes-ldxhub` community node and create an LDXhub API credential.
2. Create a Google Sheet with columns: `agenda_no, agenda_title, item_type, item, owner, due_date`.
3. Add a Google Sheets OAuth2 credential and select the target spreadsheet and sheet in the append step.
4. Activate the workflow and use the generated form URL to upload your meeting-minutes PDF.

## Customization
- Adapt to any long document — contracts (one row per clause), papers (per section), reports (per chapter) — by editing the two prompts and their Example Outputs. Keep the segmenter's `items` array key so the expansion step keeps working.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
