# 🔬 Extract job listings from career pages with Snapshot Site, GPT-4o, and Google Sheets

> ⚡ **82 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily, captures fully rendered careers pages with Snapshot Site, uses an OpenAI chat model to extract structured job-offer fields, and writes the results to Google Sheets while logging any extraction errors to a separate sheet.

## How it works
1. Runs every day at 9:00 AM on a schedule.
2. Reads a list of careers-page URLs from the “Job Sources” tab in Google Sheets and processes them one at a time.
3. Uses Snapshot Site to fetch the fully rendered HTML for each URL and routes any API errors to an error log flow.
4. Cleans the captured HTML by removing scripts/styles and trimming the content before sending it to OpenAI for extraction.
5. Uses an OpenAI chat model to extract a structured array of job offers (title, company, location, salary, application URL, and more) from the cleaned HTML.
6. Splits the extracted jobs into individual items and appends or updates rows in the “Job Offers” tab in Google Sheets, deduplicating by applicationUrl.
7. Appends any extraction errors (URL, message, timestamp) to the “Extraction Errors” tab in Google Sheets and continues processing the remaining sources.

## Setup
1. Install the community node `n8n-nodes-snapshot-site` and add Snapshot Site credentials.
2. Add Google Sheets credentials and set the target spreadsheet in the read/write Google Sheets nodes.
3. Add an OpenAI (or compatible) chat model credential for the Information Extractor’s language model.
4. Create three Google Sheets tabs named “Job Sources”, “Job Offers”, and “Extraction Errors”, and ensure the “Job Sources” tab includes a `url` column.
5. Ensure the “Job Offers” tab has an `applicationUrl` column for deduplication (and any other columns you want to store), then adjust the schedule time if needed.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
