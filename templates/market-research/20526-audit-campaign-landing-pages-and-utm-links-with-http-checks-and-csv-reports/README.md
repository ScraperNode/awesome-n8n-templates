# 📊 Audit campaign landing pages and UTM links with HTTP checks and CSV reports

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow takes a list of landing-page URLs plus shared UTM settings, validates and rebuilds each tracking link (removing existing utm_* parameters), flags invalid or duplicate results, and exports the final set as a downloadable CSV using only built-in n8n nodes.

## How it works
1. Runs manually to use the sample input or your edited campaign settings.
2. Validates that the UTM source, medium, and campaign values are present and that 1–500 links are provided.
3. Builds a tracking URL for each link by rejecting non-HTTP(S) URLs and embedded credentials, removing any existing utm_* parameters, and adding utm_source, utm_medium, utm_campaign plus optional utm_content and utm_term.
4. Marks invalid links as “review” with an error reason and flags repeated final tracking URLs as “duplicate” so they can be removed.
5. Exports the results (row, label, trackingUrl, status, reason) to a CSV file for download.

## Setup
1. Open the campaign settings step and replace the sample values for source, medium, campaign, and the links array (including optional content/term per link).
2. Ensure each link URL is an HTTP or HTTPS URL without embedded credentials and keep the total to 500 links or fewer.
3. Run the workflow manually and download the generated CSV from the final file output.

## Requirements
- Built-in n8n nodes only. No credentials or paid APIs required. Supports 1–500 links per run.

## Customization
- Edit source, medium and campaign in Set Campaign Tracking Fields. Add optional content and term values to individual links.

## Additional info
No network requests are made. URL checks do not verify destination availability or send analytics events. Processing logic was tested locally; full n8n runtime execution remains unverified.

## 🔗 Nodes Used

Send Email, HTTP Request, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
