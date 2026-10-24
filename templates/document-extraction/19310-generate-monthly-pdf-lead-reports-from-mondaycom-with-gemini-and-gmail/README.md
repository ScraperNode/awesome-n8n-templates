# 🔬 Generate monthly PDF lead reports from Monday.com with Gemini and Gmail

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs monthly to pull items from a Monday.com board, transform and aggregate them into a dataset, generate a styled HTML-to-PDF report using Gemini via OpenRouter and PDFMunk, then downloads and emails the PDF report through Gmail.

## How it works
1. Runs on a monthly schedule trigger.
2. Retrieves all items from a specified Monday.com board and group.
3. Flattens each item’s key column values (for example Name, Date, Status, Owner, and contact fields) and aggregates all rows into one dataset.
4. Sends the aggregated data to Gemini (via OpenRouter) to generate a print-ready HTML report and converts it to a PDF using PDFMunk.
5. Extracts the generated report link from the structured AI output.
6. Downloads the PDF from the report link and emails it as an attachment via Gmail, including the link in the message body.

## Setup
1. Add a Monday.com OAuth2 credential and set the correct Board ID and Group ID for the board you want to report on.
2. Ensure your Monday.com board includes column titles that match the mapping (Name, Date, Status, Owner, Email, Phone, Location, Files) or update the mapping in the transformation step.
3. Add an OpenRouter API credential and select the Gemini model you want to use for HTML generation.
4. Add a PDFMunk (HTML/CSS to PDF) API credential and configure the output filename/template if needed.
5. Add a Gmail OAuth2 credential and set the recipient email address and subject/body content for the report email.

## 🔗 Nodes Used

HTTP Request, Monday.com, Gmail, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
