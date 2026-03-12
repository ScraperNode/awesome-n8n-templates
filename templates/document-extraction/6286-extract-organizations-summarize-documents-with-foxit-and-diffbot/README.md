# 🔬 Extract organizations & summarize documents with Foxit and Diffbot

> ⚡ **350 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works

This N8N template demonstrates using Foxit's Extraction API to get information from an incoming document and then using Diffbot's APIs to turn the text into a list of organizations mentioned in the document and create a summary.

## How it works

* Listen for a new file added to a Google Drive folder. When executed, the bits are downloaded.
* Upload the bits to Foxit.
* Call the [Extract API](https://docs.developer-api.foxit.com/#f7aaf21d-f519-4c20-90b9-17d0c1763476) to get the text contents of the document.
* Poll the API to see if it's done, and when it is, grab the text.
* Send the text to [Diffbot API](https://docs.diffbot.com/reference/introduction-to-natural-language-api) to get a list of entities mentioned in the doc as well as the summary.
* Use a code step to filter the entities returned from Diffbot to ones that are organizations, as well as filtering to a high confidence score.
* Use another code step to make an HTML string from the previous data.
* Email it using the GMail node.

## Requirements

* A Google account for Google Drive and GMail
* Foxit developer account (https://developer-api.foxit.com)
* Diffbot developer account (https://app.diffbot.com/get-started)

## Next Steps

This workflow assumes PDF input, but Foxit has APIs to convert Office docs to PDF and that flow could be added before the Extract API is called. 

Diffbot returns an incredible set of information and more could be used in the email.

Instead of emailing, you could sort documents by organizations into new folders.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
