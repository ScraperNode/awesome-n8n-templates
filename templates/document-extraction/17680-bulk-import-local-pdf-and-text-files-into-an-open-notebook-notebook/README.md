# 🔬 Bulk import local PDF and text files into an Open Notebook notebook

> ⚡ **53 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This self-hosted n8n workflow scans a local folder for PDF and TXT files and bulk imports them into an Open Notebook notebook via its API, uploading PDFs as files and sending text files as JSON content.

## How it works
1. Runs manually when you start the workflow.
2. Calls the Open Notebook API to list available notebooks and finds the notebook ID that matches the configured notebook name.
3. Uses a shell command to scan the configured local folder for .pdf and .txt files.
4. Creates one item per file with its path, title, and extension for processing.
5. Processes files one at a time, uploading PDFs to the Open Notebook /sources endpoint as multipart form data.
6. Sends TXT file contents to the Open Notebook /sources/json endpoint using a Python requests call.

## Setup
1. Use a self-hosted n8n instance with the Execute Command node enabled and local filesystem access.
2. Ensure the n8n host has curl and python3 installed, and install the Python requests package.
3. Set the folder path to scan, the exact Open Notebook notebook name, and the Open Notebook API base URL in the configuration step.
4. Make sure Open Notebook is running and reachable from n8n at the configured API base URL.

## Requirements
- A self-hosted n8n instance with the Execute Command node enabled. This template does not run on n8n Cloud.
- curl and python3 available on the n8n host, with the Python requests package installed.
- A running Open Notebook instance whose API is reachable from n8n.
- A notebook already created in the Open Notebook UI, matching the configured name exactly.
- Read access to the local folder that holds the .pdf and .txt files.

## Customization
- Replace the manual trigger with a Schedule Trigger to import new files on a recurring basis.
- Edit the find command to include other extensions such as .md or .csv.
- Change the notebook name in the configuration step to target a different notebook.
- Adjust the batch size on the loop node to control how many files are handled per cycle.
- Disable async processing if you want Open Notebook to finish ingesting each source before the next upload starts.

## Additional info
Tested on a self-hosted n8n instance against a live Open Notebook API. File names containing quotes, backticks, dollar signs and non-ASCII characters are shell-quoted before being passed to the Execute Command node, so they do not break the run.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
