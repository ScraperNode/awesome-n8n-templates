# 📁 Convert Typeform data into spreadsheet

> ⚡ **1,945 views** · 📁 [File Management](../)

## Description

1. Trigger on new Typeform form submission
1. Get existing spreadsheet-file from NextCloud
1. Read data from file into flow
1. Append a new row to flow-data
1. Convert flow-data to a spreadsheet-file
1. Save updated spreadsheet-file to NextCloud

![workflow-screenshot](fileId:25)

# Assumptions

## Spreadsheet file

Named: Problems.xls in folder "examples".

Columns Names:
 - Name
 - Email
 - Severity
 - Problem

![spreadsheetexamplefile.png](fileId:24)

# Typeform

Typeform formular with questions named exactly like the columns of the Google Sheet.

## 🔗 Nodes Used

Nextcloud, Spreadsheet File, Typeform Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
