# 🔧 Generate clinical guideline reports with Google Sheets, Gemini and Docs

> ⚡ **10 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
Automatically generates structured clinical guideline reports from Google Sheets requests. The workflow analyzes clinical questions with Gemini, searches trusted guideline sources using Brave Search, identifies the most relevant official guideline, and creates a Google Docs report while updating workflow status in Google Sheets.

## How it works
1. Reads the next pending clinical question from the Requests sheet.
2. Uses Gemini to identify the clinical concepts, guideline domain, target region, and output language.
3. Matches the question with trusted medical organizations from the Trusted Sources sheet.
4. Searches official guideline websites using Brave Search and identifies the most relevant guideline candidate.
5. Extracts publicly available guideline metadata, chapter information, and supporting documents.
6. Uses Gemini to generate a structured evidence report based only on the supplied sources.
7. Creates a formatted Google Docs report and updates the request status in Google Sheets.

## Setup
1. Connect Google Sheets OAuth credentials and set the spreadsheet and sheet tabs for both “Requests” and “Trusted Sources” to match your Google Sheets file structure.
2. Add a Google Gemini (PaLM) API credential for the two Google Gemini chat model steps.
3. Add a Brave Search API key as an HTTP Header Auth credential and ensure the workflow can call `https://api.search.brave.com/res/v1/web/search`.
4. Connect Google Docs OAuth credentials and set the destination Google Drive folder ID where the report document is created.
5. Ensure the “Requests” sheet includes the expected columns (Request ID, Clinical Question, Target Region, Output Language, Status, Completed at, Report URL, Error Message) and the “Trusted Sources” sheet includes Guideline Domain, Region, Active, Priority, Organization, Domain, and Source Type.

## Requirements
- Google Sheets
- Google Docs
- Google Gemini API
- Brave Search API
- Trusted Sources worksheet containing official guideline organizations

## Customization
- Supported medical specialties
- Target countries or regions
- Trusted guideline organizations
- Output language
- Google Docs report template
- Search result limits
- Report formatting

## Additional info
This workflow only summarizes information that is publicly available from trusted guideline sources. It does not generate new clinical recommendations or replace clinical judgment. When full guideline text is unavailable, the report clearly identifies information that should be verified in the original guideline.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Docs, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
