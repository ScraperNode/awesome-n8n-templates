# 🔒 Submit NKSC NIVS cyber incident reports from a webhook or XLSX file

> ⚡ **21 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This example workflow demonstrates how to use the NKSC NIVS n8n community nodes to submit cyber incident reports to NKSC NIVS. It provides a reference integration that can be adapted to your own service desk, application, or incident-management process.

## How it works
1. Receives a POST request via an n8n webhook and checks whether the request includes an uploaded file.
2. If an XLSX file is provided, extracts spreadsheet rows and parses them into a normalized incident payload with the required field set and date formatting.
3. Merges file-derived fields (or uses the provided request body) into a single payload containing the incident type and mapped fields.
4. Routes the incident by report type and submits it to NKSC NIVS as an Initial Warning, Minor Incident, Major Incident, or Near Miss using the NKSC NIVS community node.
5. Checks the NKSC NIVS response for an error and immediately returns an error JSON response to the webhook caller if submission fails.
6. If submission succeeds, returns a JSON success message for direct-field requests or converts the result to an XLSX file and returns it as a binary download for file-based requests.

## Setup
1. Install the `@synergyconsulting/n8n-nodes-nksc-nivs` community node on a self-hosted n8n instance.
2. Create and select valid NKSC NIVS credentials.
3. Copy the webhook URL from the webhook trigger and configure your source system to POST incident data to it, including authentication if required.
4. If sending files, ensure requests upload an XLSX in the `file` binary property, and update the XLSX parsing logic if your column names or report-type fields differ.
5. If sending JSON only, ensure the request body includes `reportType` and a `fields` object that matches the expected mappings used in the NKSC NIVS submission steps.

## Requirements
- @synergyconsulting/n8n-nodes-nksc-nivs
- Valid NKSC NIVS API credentials and environment access

## Customization
- Replace the example Webhook source, modify field mappings and XLSX parsing, adjust routing, or change the response format to match your own integration.

## Additional info
This template is intended for teams integrating existing systems with NKSC NIVS, and developers building automated cyber incident reporting workflows.
Loom walkthrough: https://www.loom.com/share/bbe3d346324441e7ace1c059489507bb
GitHub: https://github.com/syn-con/nksc-nivs-integration-example

## 🔗 Nodes Used

Webhook, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
