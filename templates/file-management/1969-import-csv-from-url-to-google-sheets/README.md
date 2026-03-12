# 📁 Import CSV from URL to Google Sheets

> ⚡ **5,892 views** · 📁 [File Management](../)

## Description

This workflow automatically imports data from a CSV file located at a specific URL and then updates the Google Sheets document with the provided data.

Below is a step-by-step description of what this workflow does:
1. The workflow is started manually using the "When you click 'Execute Workflow'" node.
2. The CSV file is then uploaded from the specified URL "https://opendata.ecdc.europa.eu/covid19/testing/csv/data.csv" using the "Upload CSV" node.
3. The "Import CSV" node accepts the uploaded CSV file and converts it into JSON formatted data.
4. The "Add Unique Field" node generates a unique key by combining the 'country_code' and 'year_week' fields from the JSON data, which will be further used in the Google Sheets document.
5. The 'Keep only DACH in 2023' node filters the data to keep only records where 'country_code' is either 'DE', 'AT', or 'CH' and 'year_week' starts with '2023'. Google's API has limitations on the speed of read and write operations, so only a subset of the data is taken.
6. The filtered data is loaded into the specified Google Sheets document via the 'Load to Spreadsheet' node. The operation is set to 'appendOrUpdate' and the document ID and sheet name are specified. Also, the previously generated 'unique_key' key is set as the key to match the columns.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Spreadsheet File, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
