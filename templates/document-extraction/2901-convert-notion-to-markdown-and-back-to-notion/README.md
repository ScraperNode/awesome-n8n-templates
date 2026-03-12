# 🔬 Convert Notion to markdown and back to Notion

> ⚡ **3,896 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow converts Notion pages to markdown, and then converts that markdown back to Notion blocks. It will triple the content of the last updated page it finds. This is useless by itself, but you can copy-paste from this workflow to create your own.

## Prerequisites
A notion account with some pages or databases

## Setup instructions
Create a notion credential and share some pages as described here: https://docs.n8n.io/integrations/builtin/credentials/notion/

## How it works
- The HTTP Request gets notion child blocks from a page, because the default n8n block only gets plain text and no links.
- The first code block converts it to markdown.
- The second code block converts it back to Notion blocks
- The last HTTP block appends everything to the original Notion page, essentially duplicating it for the purpose of demoing the script.

I hope in the future we get official n8n blocks that extract markdown, or use markdown to write to Notion. There is community block that also does this, but this template is easier: you can simply copy-paste the blocks from this workflow.

## 🔗 Nodes Used

HTTP Request, Notion, Notion Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
