# 🔬 Get bibliographic data from your Zotero library

> ⚡ **1,522 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What this template does
This workflow will read your Zotero Library and extract Meta Data from the articles of one collection in your bibliography. You can personalize the output for optimized results.

## How it works

Mainly, follow the instructions in the Post it notes:

1. Go to [https://www.zotero.org/settings/security](https://www.zotero.org/settings/security) and find your USER ID (It's right under the APPLICATIONS Section.
2. On the same website, create a New Private Key.
3. In the "Collections" Node, select Generic Credential Type &gt; Header Auth &gt; Create New Credential using:
- NAME: Zotero-API-Key
- VALUE: [Your Private Key] 
4. Run your Flow to check if it works and open the "Select Collection" node.
5. See the Results of the previous node as TABLE and copy the "KEY" of the collection you want to use.

After that you should have a working flow that reads your bibliography.

You can edit or delete the last 2 nodes to personalize your results (Filter and Edit Fields)

## 🔗 Nodes Used

HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
