# 🔬 Extract spending history from gmail to google sheet

> ⚡ **2,881 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works
1. Fetch transaction notification emails (including attachments)
2. Clean up data
3. Let AI (Basic LLM Chain node) generate bookkeeping item
4. Send to Google sheet

## Details
1. The example fetch email from Gmail lables, suggested using filters to automatically orgianize email into the labels
2. Data will send to "raw data" sheet
3. Example google sheet:
https://docs.google.com/spreadsheets/d/1_IhdHj8bxtsfH2MRqKuU2LzJuzm4DaeKSw46eFcyYts/edit?gid=1617968863#gid=1617968863

## 🔗 Nodes Used

Google Sheets, Gmail Trigger, Basic LLM Chain, Structured Output Parser, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
