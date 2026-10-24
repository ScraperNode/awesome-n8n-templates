# 🤝 Create Asana projects and Google Drive folders from new HubSpot deals

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Automatically create an Asana project from your template and a Google Drive folder for every new HubSpot deal. Verifies the HubSpot webhook, reuses each company’s folder, writes the links back to the deal, and emails the deal owner.

## How it works
1. A HubSpot deal-creation webhook starts the workflow. Its signature is checked with your app client secret, and invalid requests stop here.
2. The workflow loads the deal and its owner from HubSpot. If the deal has no associated company, it emails the owner a short “workspace not created” notice and stops.
3. It loads the associated company and checks whether that company already has a saved Google Drive folder ID.
4. New company: it creates a company folder under your parent folder, then a deal folder inside it. Existing company: it creates only the deal folder inside the company’s existing folder.
5. It creates an Asana project from your project template, named “Client_[company]. Project_[deal]”, and fetches its link.
6. It saves the Asana and Drive links and IDs on the HubSpot deal, and for a new company it also saves the folder on the company record.
7. It emails the deal owner both links.

## Setup
1. Connect credentials for HubSpot (OAuth2), Google Drive (OAuth2), Asana (OAuth2) and Gmail (OAuth2).
2. Open the Set configuration node and enter: your HubSpot app client secret, the Google shared drive ID, the parent folder ID for company folders, and the GID of your Asana project template.
3. In HubSpot, create these text properties. On deals: asana_project, asana_project_id, google_drive_folder, google_drive_folder_id.  On companies: google_drive_folder, google_drive_folder_id.
4. In your HubSpot app, add a deal-creation webhook subscription that points to this workflow’s production webhook URL.
5. Activate the workflow, then create a test deal with a company attached.

## Requirements
- A HubSpot developer app (its client secret signs the webhooks) and an OAuth2 credential with read/write access to deals and companies, plus read access to owners
- A Google shared drive and a parent folder for client folders
- An Asana plan that includes project templates, and a project template to copy
- A Gmail account for the owner emails
- An n8n instance reachable from the internet, so HubSpot can call the webhook

## Customization
- Change the project naming pattern in the two “Create Asana project” nodes.
- Edit the wording of the three emails.
- Write more HubSpot properties back by adding fields to the “Save links” nodes.

## Additional info
* Deals created without a company get no project or folder. The owner is told, and the setup can be finished manually.
* Folder links are saved as HTML links in the HubSpot properties.
* The workflow creates one Asana project and one folder per webhook call. Remove duplicate subscriptions so a deal does not fire twice.

## 🔗 Nodes Used

Asana, HTTP Request, Webhook, Google Drive, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
