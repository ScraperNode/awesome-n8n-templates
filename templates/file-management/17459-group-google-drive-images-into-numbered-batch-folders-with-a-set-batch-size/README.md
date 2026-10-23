# 📁 Group Google Drive images into numbered batch folders with a set batch size

> ⚡ **32 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow organizes Google Drive images by copying them from a named source folder into newly created, numbered batch subfolders under a destination parent folder, using a configurable batch size and folder-name prefix.

## How it works
1. Runs when you manually execute the workflow in n8n.
2. Reads configuration values for the source folder name, destination parent folder ID, batch name prefix, and batch size.
3. Searches Google Drive for the source folder by name and lists all image files inside it.
4. Groups the images into fixed-size batches and skips any leftover files that do not fill a complete batch.
5. For each batch, creates a new subfolder in Google Drive under the destination parent folder using the configured prefix and a zero-padded sequence number.
6. Copies each image from the batch into its corresponding new subfolder in Google Drive.

## Setup
1. Connect a Google Drive OAuth2 credential for the Google Drive nodes.
2. In the configuration step, set the exact source folder name, the destination parent folder ID where batch folders should be created, the batch name prefix, and the batch size.
3. Ensure the source folder contains image files and that your Google Drive account has permission to create folders and copy files into the destination parent folder.

## 🔗 Nodes Used

Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
