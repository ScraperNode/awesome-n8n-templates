# 🔬 SharePoint list fetch with OAuth token

> ⚡ **4,366 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this template for?

This template is designed for teams who need to automate data retrieval from SharePoint lists using n8n. It is ideal for users who want to authenticate via OAuth and then use the token to access SharePoint API endpoints, pulling in list data directly into n8n.

## How it works

The template first generates an OAuth token using the Microsoft OAuth API. This token is then used to authenticate requests to the SharePoint List API, allowing the workflow to fetch data from a specified SharePoint list. By following the n8n workflow, the user can configure the necessary credentials and endpoints to automate SharePoint data access securely.

## Setup steps

**Step 1:** Replace {tenant_id}, {client_id}, and {client_secret} with your Azure AD details for OAuth authentication.

**Step 2:** Specify the SharePoint list API endpoint in the template (under "SharePoint List Fetch" node).

**Step 3:** Configure the SharePoint list URL and make adjustments for specific data fields if necessary.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
