# 🔬 Generate agile project plan PDFs from proposals with Claude and SharePoint

> ⚡ **25 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a project outline PDF via webhook, extracts its text, uses Anthropic Claude to generate a structured project plan, renders it into an HTML report, converts it to PDF via an HTTP service, uploads it to Microsoft SharePoint, and sends an Outlook email notification.

## How it works
1. Receives a POST request on an n8n webhook containing a project outline PDF (and optional consultation notes).
2. Extracts text from the uploaded PDF and combines it with the provided consultation notes into a single input payload.
3. Sends the combined content to Anthropic Claude to generate a complete project plan as raw JSON.
4. Parses the AI response into JSON and renders it into a styled HTML proposal/report.
5. Sends the HTML to an external HTML-to-PDF HTTP endpoint, then uploads the resulting PDF file to a Microsoft SharePoint folder.
6. Builds a formatted HTML email with key plan details and the SharePoint link, then sends it via Microsoft Outlook.

## Setup
1. Configure the webhook endpoint and ensure the calling system sends the PDF in the expected binary field ("outline") and optional notes in the request body.
2. Add Anthropic (Claude) credentials and verify the AI model is connected to the plan-generation step.
3. Configure the HTML-to-PDF HTTP endpoint URL and provide HTTP Basic Auth credentials used to call it.
4. Add Microsoft SharePoint OAuth2 credentials and set the SharePoint site ID and destination folder/drive item ID for uploads.
5. Add Microsoft Outlook OAuth2 credentials and update the email recipient address used for notifications.

## Requirements
- Self-hosted n8n instance
- LangChain and Anthropic (community) nodes installed
- Microsoft SharePoint account and API access
- Outlook account and API access
- PDF conversion service
- Proper authentication credentials for all services

## Customization
- Edit the AI prompt in the "Generate Project Plan AI Agent" node to tailor output for your project types
- Change the SharePoint site or destination document folder in the "Upload PDF to SharePoint" node
- Adjust HTML report formatting in the "Build HTML Report Code" node for branding or structure
- Replace or enhance PDF conversion by updating the endpoint in the "Post HTML to PDF Service" node
- Modify notification email content in the "Create Notification Email" node as needed

## Additional info
*This template uses LangChain and other community nodes and requires a self-hosted n8n instance. For support, contact support@ais.email (AI Solutions, Inc.).*

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Outlook, Basic LLM Chain, Anthropic Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
