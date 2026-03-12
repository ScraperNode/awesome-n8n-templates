# 📋 Create sprint goals from Google Sheets with Pega Agile Studio and Google Gemini

> ⚡ **77 views** · 📋 [Project Management](../)

## Description

## Create sprint goals using Pega Agile Studio with AI
Based on the Google Sheet data, the AI will retrieve the userstories ID's, retrieves the userstory data and the corresponding attachments and creates sprint goals according to the defined system prompt.

**Who's it for**
* Product owners/Scrum masters that use Pega Agile Studio


**How it works** 
* It retrieves the data from each userstory using the Agile Studio api, and the Google API to gather the attachments in the corresponding documents/sheets/slides.
* Then the AI processes it according to the system prompt and generates a mail.


**How to set up** 
* Create a Google Sheet and add the userstories you want in the Google Sheet in column named "Userstory".
* Set the GoogleSheet ID in the node "Retrieve_Data_From_Sheet" 
* Setup other credentials.
* Publish the subworkflow for attachment handling.
* Execute the workflow.

**Requirements** 
* Access to Pega Agile Studio OAuth2 Api.
* AI API.
* Access to Google Cloud for the Google API's

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
