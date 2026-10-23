# 🔬 Summarize Nextcloud documents with IONOS AI Model Hub for sovereign AI

> ⚡ **182 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n template shows you how to automate document summarization while keeping full digital sovereignty. By combining Nextcloud for file storage and the IONOS AI Model Hub, your sensitive documents stay on European infrastructure—fully outside US CLOUD Act jurisdiction.

## Use cases

- Daily briefings: Automatically summarize lengthy reports as soon as your team uploads them.
- Meeting notes: Turn uploaded transcripts into clear, actionable bullet points—hands-free.
- Research management: Get instant summaries of academic papers or PDFs the moment they land in your research folder.

## How it works

A Schedule Trigger kicks off the workflow at regular intervals. It calls the Nextcloud List a Folder node to retrieve all files in your chosen directory.

A Code node then acts as a filter, checking each file's last-modified timestamp and letting through only files changed within the past 24 hours.

Filtered files are pulled into the workflow via the Nextcloud Download a File node. From there, the Summarization Chain takes over: a Default Data Loader and Token Splitter prepare the content, and the IONOS AI Model Hub Chat Model generates a concise, structured summary.

The final output is saved back to your Nextcloud instance as a note for your team.

## Good to know

**Nextcloud setup:** Make sure your Nextcloud credentials include both read and write permissions—one to download source files, one to upload the generated summary.

**Model selection:** The IONOS AI Model Hub currently offers several LLMs, including Mistral Small 24B and Nemo. For document summarization, Mistral Small 24B  strikes the best balance between output quality and speed. 

## How to set it up

1. Set your folder path in the List a Folder node to the directory you want to monitor.
2. In the New Files Only code node, adjust the `24` value to change how far back the workflow looks.
3. Open the Summarization Chain and define your output format—for example: "Summarize this document in 3 bullet points."

## Requirements

- Nextcloud account for file hosting and retrieval
- IONOS Cloud account to access the AI Model Hub

## 🔗 Nodes Used

Nextcloud, Schedule Trigger, Summarization Chain, Token Splitter, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
