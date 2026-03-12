# 🔬 Generate PDF documents from HTML with PDF Generator API, Gmail and Supabase

> ⚡ **184 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who’s this for 💼
This template is designed for teams and developers who need to generate PDF documents automatically from HTML templates. It’s suitable for use cases such as invoices, confirmations, reports, certificates, or any custom document that needs to be created dynamically based on incoming data.
## What this workflow does ⚙️
This workflow automates the full lifecycle of document generation, from request validation to delivery and storage. It is triggered by a POST webhook that receives structured JSON data describing the requested document and client information.

Before generating the document, the workflow validates the client’s email address using Hunter Email Verification to prevent invalid or mistyped emails. If the email is valid, the workflow loads the appropriate HTML template from a Postgres database, fills it with the incoming data, and converts it into a PDF using PDF Generator API.

Once the PDF is generated, it is sent to the client via Gmail, uploaded to Supabase Storage, and the transaction is recorded in the database for tracking and auditing purposes.
## How it works 🛠️
1. Receives a document generation request via a POST webhook.
2. Validates the client’s email address using Hunter.
3. Generates a PDF document from an HTML template using PDF Generator API.
4. Sends the PDF via Gmail and uploads it to Supabase Storage.
5. Stores a document generation record in the database.
## How to set up 🖇️
Before activating the workflow, make sure all required services and connections are prepared and available in your n8n environment.
- Create a POST webhook endpoint that accepts structured JSON input.
- Add Hunter API credentials for email verification.
- Add PDF Generator API credentials for HTML to PDF conversion.
- Prepare a Postgres database with tables for HTML templates and document generation records.
- Set up Gmail or SMTP credentials for email delivery.
- Configure Supabase Storage for storing generated PDF files.
## Requirements ✅
- PDF Generator API account
- Hunter account
- Postgres database
- Gmail or SMTP-compatible email provider
- Supabase project with Storage enabled
## How to customize the workflow 🤖
This workflow can be adapted to different document generation scenarios by extending or modifying its existing steps:
- Add extra validation steps before document generation if required.
- Extend delivery options by sending the generated PDF to additional services or webhooks.
- Enhance security by adding document encryption or access control.
- Add support for additional document types by storing more HTML templates in the database.
- Modify the database schema or queries to store additional metadata related to generated documents.
- Adjust the data mapping logic in the Code node to match your input structure.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Hunter, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
