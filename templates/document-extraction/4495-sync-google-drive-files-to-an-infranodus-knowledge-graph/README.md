# 🔬 Sync Google Drive files to an InfraNodus Knowledge Graph

> ⚡ **533 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This template can be used to **sync the files in your Google drive** to a new or existing **[InfraNodus knowledge graph](https://infranodus.com)**. 

The InfraNodus graph will then reveal the **main topics** and **ideas** in your collection of documents and show the **content gaps** in them. You can also use the **built-in AI** to converse with the documents.

![InfraNodus graph](https://infranodus.com/images/front/infranodus-overview.jpg)

You can also access the InfraNodus Graphs via its **GraphRAG API** to re-use them in your other n8n workflows for high-quality content retrieval and knowledge base optimization.

The template showcases the use of multiple n8n nodes and processes:
- Syncing documents from a Google Drive folder / extracting them
- text extraction from files
- optional: high-quality PDF conversion using [ConvertAPI](https://convertapi.com?ref=4l54n)
- [InfraNodus knowledge graph](https://infranodus.com) generation


***Note**: If you want to **upload files from your Google drive** to an InfraNodus graph, check out our other workflow*

## How it works

Here's a description of this workflow step by step:

- Wait for new file(s) to appear in the Google drive folder
- Reiterate through each file
- Retrieve the new file from the Google drive
- For each file found: reiterate the workflow and
- Identify the type of the file (TXT, PDF, Markdown)
- For TXT and Markdown files extract the text data 
- For PDF files use a special PDF to Text convertor to extract the text data. (Optional: using [ConvertAPI](https://convertapi.com?ref=4l54n) for better quality PDF conversion)
- Forward everything to the InfraNodus `graphAndStatements` [API endpoint](https://support.noduslabs.com/hc/en-us/articles/13605983537692-InfraNodus-API-Access-Points) with the `name` of the new graph, the `text` field with the text data, the text settings, and `doNotSave=false` to create a new graph
- Reiterate through another file.


## How to use

You need an [InfraNodus GraphRAG API account and key](https://infranodus.com/use-case/ai-knowledge-graphs) to use this workflow. 

- Create an InfraNodus account
- Get the API key at [https://infranodus.com/api-access](https://infranodus.com/api-access) and create a Bearer authorization key for the InfraNodus HTTP nodes.
- Use that API key to set up authorization for the InfraNodus tool in the workflow.
- If you want to upload the files to an existing graph, you should copy its name from InfraNodus. Otherwise you can specify any name you want.

## Requirements

- An [InfraNodus](https://infranodus.com/use-case/ai-knowledge-graphs) account and API key
- A Google Drive account and authorization (you will need to set it up via Google Cloud using the n8n instructions provided in the Google Drive node).


## Customizing this workflow

You can use Dropbox instead of Google Drive.

You can also modify this workflow slightly to make it Upload the files from a Google Drive when the new files appear in it.

Check out the **complete guide** at [https://support.noduslabs.com/hc/en-us/articles/20267019838108-Upload-Sync-Your-Google-Drive-Folder-with-InfraNodus-using-n8n](https://support.noduslabs.com/hc/en-us/articles/20267019838108-Upload-Sync-Your-Google-Drive-Folder-with-InfraNodus-using-n8n)

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
