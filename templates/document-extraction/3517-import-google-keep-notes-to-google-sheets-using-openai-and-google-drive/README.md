# 🔬 Import Google Keep notes to Google Sheets using OpenAI and Google Drive

> ⚡ **1,721 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow automates the import of your Google Keep notes into a structured Google Sheet, using Google Drive, OpenAI for AI-powered processing, and JSON file extraction. It's perfect for users who want to turn exported Keep notes into a searchable, filterable spreadsheet – optionally enhanced by AI summarization or transformation.

## Who is this for?
- Researchers, knowledge workers, and digital minimalists who rely on Google Keep and want to better organize or analyze their notes.

- Anyone who regularly exports Google Keep notes and wants a clean, automated workflow to store them in Google Sheets.

- Users looking to apply AI to process, summarize, or extract insights from raw notes.

## What problem is this workflow solving?

Exporting Google Keep notes via Google Takeout gives you unstructured .json files that are hard to read and manage. This workflow solves that by:
- Filtering relevant .json files
- Extracting note content
- (Optionally) applying AI to analyze or summarize each note
- Writing the result into a structured Google Sheet

## What this workflow does

1. Google Drive Search: Looks for .json files inside a specified "Keep" folder.

2. Loop: Processes files in batches of 10.

3. File Filtering: Filters by .json extension.

4. Download + Extract: Downloads each file and extracts note content from JSON.

5. Optional Filtering: Only keeps non-archived notes or those meeting content criteria.

6. AI Processing (optional): Uses OpenAI to summarize or transform the note content.

7. Prepare for Export: Maps note fields to be written.

8. Google Sheets: Appends or updates the target sheet with the note data.

## Setup
- Export your Google Keep notes using Google Takeout:

- Deselect all, then choose only Google Keep.

- Choose “Send download link via email”.

- Unzip the downloaded archive and upload the .json files to your Google Drive.

- Connect Google Drive, OpenAI, and Google Sheets in n8n.

- Set the correct folder path for your notes in the “Search in ‘Keep’ folder” node.

- Point the Google Sheet node to your spreadsheet

## How to customize this workflow to your needs
Skip AI processing: If you don't need summaries or transformations, remove or disable the OpenAI Chat Model node.

Filter criteria: Customize the Filter node to extract only recent notes, or those containing specific keywords.

AI prompts: Edit the Tools Agent or Chat Model node to instruct the AI to summarize, extract tasks, categorize notes, etc.

Field mapping: Adjust the “Set fields for export” node to control what gets written to the spreadsheet.

Use this template to build a powerful knowledge extraction tool from your Google Keep archive – ideal for backups, audits, or data-driven insights.

## 🔗 Nodes Used

Google Sheets, Google Drive, Filter, AI Agent, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
