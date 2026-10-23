# 🔬 Handle GDPR data subject requests with Microsoft Graph, SharePoint, and Ollama

> ⚡ **39 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow receives GDPR data subject access requests via a webhook, searches Microsoft 365 for related emails and documents using Microsoft Graph eDiscovery and SharePoint search, drafts a DPO cover letter with a local Ollama model, archives a report to SharePoint, logs the request to Excel, and notifies the DPO.

## How it works
1. Receives a DSAR request via a POST webhook and validates required fields like the data subject’s email address.
2. Creates a Microsoft Graph eDiscovery case and a tenant-wide eDiscovery search across all Exchange Online mailboxes for messages involving the subject.
3. Starts an asynchronous eDiscovery statistics estimate, waits, and then fetches the latest estimate results (mailbox and item counts).
4. Searches SharePoint Online and OneDrive for Business for matching items in Microsoft 365.
5. Aggregates and sanitizes the findings into counts and file links, then uses a local Ollama (via LangChain) model to draft a short cover letter using only the statistics.
6. Builds a text report, uploads it to a restricted SharePoint library, appends/updates a compliance register in Microsoft Excel, emails the internal DPO team for review, and returns a 200 Accepted webhook response with request metadata.

## Setup
1. Configure Microsoft Graph OAuth2 credentials with application permissions for the Security/eDiscovery endpoints (for example, eDiscovery.ReadWrite.All) and ensure admin consent is granted.
2. Configure Microsoft SharePoint OAuth2 credentials with permissions to search and upload files (for example, Sites.Read.All and Files.Read.All) and select the target SharePoint site/library for archiving.
3. Configure Microsoft Outlook and Microsoft Excel credentials, set the DPO/Legal recipient address, and point the Excel node at your compliance register workbook/table stored in SharePoint.
4. Set up Ollama (pull the llama3 model and ensure the Ollama base URL is reachable from n8n) for the cover letter generation step.
5. Copy the production webhook URL for the DSAR endpoint and configure your intake form or portal to POST the expected fields (subjectName, subjectEmail, requestType, requestDate, requestRef).

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Excel 365, Microsoft Outlook, Basic LLM Chain, Ollama Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
