# 📁 Scheduled monitoring of new & modified files across Google Drive folders

> ⚡ **876 views** · 📁 [File Management](../)

## Description

# This n8n template allows you to, on a schedule, list all files that have been modified since the last execution in a Google Drive folder and in all its subfolders
While Google Drive is accessible and easy to use, file listings via API are limited to either all files in the entire Drive or all files in a specific folder. This also means that the n8n triggers for Google Drive are limited to changes to a specific file or folder.

This template is built to replace the built-in trigger nodes in the situations when you need to trigger on new or changed files in a folder or any of its subfolders.

## Use cases
* Trigger a RAG pipeline to update with new or updated documents
* Push newly uploaded or updated documents into CMS, project management tool or other external platform
* Log changes to build an audit trail
* Trigger a backup job or sync process only for files that have changed since the last run, saving bandwidth and processing time.
* Notify team or client about new documents
* Can also be run without the scheduling part to perform a one-time iteration of all files 

## Good to know
* Works well if you attach a loop node to the "output node" to run additional actions on the files
* The workflow is designed to use a minimal amount of custom code, preferring built-in nodes in n8n
* Does not identify file removals

## How it works
* Recursively executes a subworkflow for each folder in the main folder
* Each subworkflow execution sends a list of all files in the folder to an "output node" that checks if the files was created or modified since the last execution
* When all subworkflows have been executed, the files in the main folder are sent to the "output node"
* A persistent variable (time of trigger node activation) is set for timestamp comparison on the next execution (**this is only set on non-manually triggered active workflow executions**)

## How to use
* Set schedule interval in the trigger node (default every 60min)
* Add Google Drive credentials to the four Google Drive nodes
* Define your main/root folder in the two nodes inside the red box
* Connect your workflow to process the files after the node in the yellow box, please note that there will be "one output" per folder

## 🔗 Nodes Used

Google Drive, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
