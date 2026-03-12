# 🔬 Parse PDF, DOCX & images with Mistral OCR via Google Drive with Slack alerts

> ⚡ **1,317 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Use cases 
* Monitor Google Drive folder, parsing PDF, DOCX and image file into a destination folder, ready for further processing (e.g. RAG ingestion, translation, etc.)
* Keep processing log in Google Sheet and send Slack notifications. 

### How it works
* Trigger: Watch Google Drive folder for new and updated files.
* Create a uniquely named destination folder, copying the input file.
* Parse the file using Mistral Document, extracting content and handling non-OCRable images separately.
* Save the data returned by Mistral Document into the destination Google Drive folder (raw JSON file, Markdown files, and images) for further processing.


### How to use
* Google Drive and Google Sheets nodes:
  * Create Google credentials with access to Google Drive and Google Sheets. [Read more about Google Credentials](https://docs.n8n.io/integrations/builtin/credentials/google/).
  * Update **all** Google Drive and Google Sheets nodes (14 nodes total) to use the credentials
* Mistral node:
  * Create Mistral Cloud API credentials. [Read more about Mistral Cloud Credentials](https://docs.n8n.io/integrations/builtin/credentials/mistral/).
  * Update the `OCR Document` node to use the Mistral Cloud credentials.
* Slack nodes:
  * Create Slack OAuth2 credentials. [Read more about Slack OAuth2 credentials](https://docs.n8n.io/integrations/builtin/credentials/slack/#using-oauth2)
   * Update the two Slack nodes: `Send Success  Message` and `Send Error Message`:
      * Set the credentials
      * Select the channel where you want to send the notifications (channels can be different for success and errors). 
* Create a Google Sheets spreadsheet following the steps in `Google Sheets Configuration`. Ensure the spreadsheet can be accessed as `Editor` by the account used by the Google Credentials above.
* Create a directory for input files and a directory for output folders/files. Ensure the directories can be accessed by the account used by the Google Credentials.
* Update the `File Created`, `File Updated` and `Workflow Configuration` node following the steps in the green Notes.


### Requirements
* Google account with Google API access
* Mistral Cloud account access to Mistral API key.
* Slack account with access to Slack client ID and secret ID. 
* Basic n8n knowledge: understanding of triggers, expressions, and credential management


### Who’s it for
Anyone building a data pipeline ingesting files to be OCRed for further processing. 


### 🔒 Security
All credentials are stored as n8n credentials. The only information stored in this workflow that *could* be considered sensitive are the Google Drive Directory and Sheet IDs. These directories and the spreadsheet should be secured according to your needs.


### Need Help?
Reach out on [LinkedIn](https://www.linkedin.com/in/ytkaczyk/) or Ask in the [Forum](https://community.n8n.io/)!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Google Drive Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
