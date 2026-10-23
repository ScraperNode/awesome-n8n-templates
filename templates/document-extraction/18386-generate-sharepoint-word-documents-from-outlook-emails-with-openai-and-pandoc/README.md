# 🔬 Generate SharePoint Word documents from Outlook emails with OpenAI and Pandoc

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Microsoft Outlook mailbox for document-generation requests, matches each request to a SharePoint template using OpenAI, converts the filled template to DOCX via a Pandoc service, uploads the result to Microsoft Graph/SharePoint, and replies by email with the document attached.

## How it works
1. Triggers when a new email is received in Microsoft Outlook.
2. Extracts the sender, subject, and body text, then authorizes the request by checking the sender domain and a required subject/body keyword.
3. Retrieves a template catalog from a SharePoint list via the Microsoft Graph API and prepares a condensed catalog for matching.
4. Uses OpenAI to select the best template from the catalog and extract structured fields (for example party names and dates) from the email.
5. If no suitable template is found, replies in Outlook with a list of available document types and the reason it could not match.
6. If a template is matched, downloads the template file from SharePoint, uses OpenAI to recreate it as filled GitHub-flavored Markdown, and sends the Markdown to a Pandoc HTTP service to generate a DOCX.
7. Uploads the generated DOCX back to SharePoint via Microsoft Graph and replies to the original Outlook email with the DOCX attached and a SharePoint link.

## Setup
1. Create and connect Microsoft OAuth2 credentials that can read and reply to Outlook email and access SharePoint via the Microsoft Graph API.
2. Update the configuration values for siteId, templatesListId, templatesDriveId, outputDriveId, and outputFolderId to point to your SharePoint site, template list, and output folder.
3. Ensure your SharePoint template list items include the expected fields (at least Title, Aliases, FileId, and FileName) and that the FileId values match the drive item IDs.
4. Add OpenAI credentials and select the model(s) you want to use for template matching and document filling.
5. Provide HTTP header auth credentials for your Pandoc conversion endpoint and set pandocUrl and pandocReferenceDoc to your service and reference DOCX.

## Requirements
- Self-hosted n8n (for community/LangChain nodes).
- Microsoft Outlook and Graph API OAuth2 credentials.
- OpenAI API key and access to a Pandoc rendering service.

## Customization
- Modify AI parameters in template-matching nodes to tune field extraction or document types.
- Update the sender domain whitelist
- Add templates to your SharePoint
- Tweak email reply content to fit your organization’s tone.

## 🔗 Nodes Used

HTTP Request, Microsoft Outlook, Microsoft Outlook Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
