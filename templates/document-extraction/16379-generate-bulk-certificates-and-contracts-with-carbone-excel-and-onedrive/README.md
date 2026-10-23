# 🔬 Generate bulk certificates and contracts with Carbone, Excel and OneDrive

> ⚡ **122 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs every Monday and reads pending rows from a Microsoft Excel workbook, generates certificate and contract PDFs in bulk with Carbone using templates stored in SharePoint, uploads the files to OneDrive, posts a summary card to Microsoft Teams, and marks the Excel rows as completed via Microsoft Graph.

## How it works
1. Runs every Monday at 08:00 on a schedule.
2. Fetches the Excel header row via Microsoft Graph and reads the pending rows from the configured Microsoft Excel worksheet.
3. Splits the rows into certificate and contract batches and prepares the data arrays Carbone uses to render documents.
4. If certificate rows exist, downloads the certificate template from Microsoft SharePoint, generates a zipped batch of PDFs with Carbone, extracts the files, and uploads them to Microsoft OneDrive.
5. If contract rows exist, downloads the contract template from Microsoft SharePoint, generates a zipped batch of PDFs with Carbone, extracts the files, and uploads them to Microsoft OneDrive.
6. Posts an Adaptive Card summary (batch ID and document counts) to the configured Microsoft Teams channel.
7. Uses Microsoft Graph $batch requests to update each processed Excel row with Status = Completed and sets ProcessedAt to the current timestamp.

## Setup
1. Add Microsoft 365 credentials for Microsoft Excel (OAuth2), Microsoft SharePoint, Microsoft OneDrive, and Microsoft Teams, plus a Carbone API credential.
2. In the Config step, replace all placeholder IDs for the Excel workbook/worksheet, SharePoint template file IDs, OneDrive folder IDs, and the target Teams team and channel.
3. Ensure your Excel sheet includes header columns named Status and ProcessedAt (and the fields used in the workflow such as Name, Email, Company, Role, DocumentType, CourseTitle, CompletionDate, and Score).
4. Update the organization/signatory values (issuedBy and issuerName) and make sure your Carbone templates reference the workflow’s certificate and contract fields.

## 🔗 Nodes Used

HTTP Request, Microsoft Excel 365, Microsoft OneDrive, Microsoft Teams, Schedule Trigger, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
