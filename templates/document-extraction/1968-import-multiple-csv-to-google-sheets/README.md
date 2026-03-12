# 🔬 Import multiple CSV to Google Sheets

> ⚡ **6,258 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow imports multiple CSV files and appends or updates them to a Google Sheets document.

Here's a step-by-step breakdown:
1. When clicked "Execute Workflow", the process starts.
2. The "Read Binary Files" node reads all the '.csv' files from the specified directory.
3. The files are then split into batches (one file in a batch) by the "Split In Batches" node.
4. For each file, the "Read CSV" node reads the data from the CSV file.
5. The "Assign source file name" node assigns the source file name to the data.
6. The data is then processed by the "Remove duplicates" node. This removes any duplicate entries based on the 'user_name' field.
7. The "Keep only subscribers" node filters the data to keep only those entries where the 'subscribed' field is set to 'TRUE'.
8. The data is then sorted by the 'date_subscribed' field using the "Sort by date" node.
9. Finally, the processed data is appended or updated to a specified Google Sheets document using the "Upload to spreadsheet" node. It checks for the 'user_name' field, if the data corresponding to that 'user_name' already exists, it updates the data, otherwise appends the new data.

## 🔗 Nodes Used

Google Sheets, Read Binary Files, Spreadsheet File, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
