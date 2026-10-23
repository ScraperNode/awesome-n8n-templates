# 📊 Triage PubMed clinical literature with Gemini and Google Sheets and Docs

> ⚡ **109 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Automatically retrieve recent PubMed articles, identify the three papers most worth reading first using AI, and generate structured clinical literature triage reports in Google Sheets and Google Docs.

## How it works
1. Reads the first pending literature request from the Google Sheets "Search Requests" tab.
2. Marks the request as “processing” in Google Sheets and builds the PubMed query parameters (keyword, max results, specialty, clinical question, and output language).
3. Searches PubMed via the NCBI E-utilities API (esearch) and fetches the corresponding article abstracts and metadata as XML (efetch).
4. Parses and normalizes the XML into a structured list of candidate articles including title, abstract, journal, publication year, DOI, and PubMed URL.
5. Sends the aggregated candidate articles to Google Gemini to select and rank the best three papers and generate a structured clinical evaluation for each.
6. Appends the three ranked papers with summaries and triage fields to a Google Sheets “Triage Results” tab.
7. Generates a formatted triage report in Google Docs and updates the original request status to “completed” in Google Sheets.

## Setup
1. Create a Google Sheets OAuth connection and point the workflow to your spreadsheet, ensuring it has a “Search Requests” sheet with columns Keyword, Clinical Question, Specialty, Max Results, Output Language, and Status.
2. Create a “Triage Results” sheet with columns matching the fields the workflow writes (for example Rank, Title, Journal, Pub Date, Pubmed URL, Summary 30sec, and the other triage outputs).
3. Add a Google Gemini (PaLM) API credential for the Google Gemini chat model used to rank and summarize articles.
4. Add a Google Docs OAuth connection and set the target Drive folder ID for where the workflow creates the report document.
5. (Optional) Adjust the schedule interval and PubMed search parameters (such as sort order and retmax) to fit your review cadence and desired breadth.

## Requirements
- n8n (latest stable version recommended)
- Google account
- Google Sheets
- Google Docs
- Google Gemini API credential
- Internet access
- PubMed (NCBI E-utilities)

## Customization
- AI evaluation prompt
- Number of retrieved PubMed articles
- Number of ranked papers
- Output language
- Google Docs report format
- Google Sheets column structure

## Additional info
This workflow is Part 1 of the Evidence-Based Medical AI Workflow Series.

Unlike traditional article summarization workflows, it helps clinicians prioritize what to read by identifying the papers most worth reading first.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Docs, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
