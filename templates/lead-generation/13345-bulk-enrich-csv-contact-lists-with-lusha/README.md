# 🎣 Bulk enrich CSV contact lists with Lusha

> ⚡ **36 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
1. Reads a CSV file and splits contacts into batches of 100
2. Each batch is sent to Lusha's bulk enrichment API in a single call
3. Enriched results (phone, email, title, company data) are formatted and exported as a new CSV

## Set up steps
1. Install the [Lusha community node](https://www.npmjs.com/package/@lusha-org/n8n-nodes-lusha)
2. Add your Lusha API credentials
3. Place your CSV file with an `email` column in the configured path
4. Run the workflow manually — the enriched CSV is saved to the output path

## 🔗 Nodes Used

Spreadsheet File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
