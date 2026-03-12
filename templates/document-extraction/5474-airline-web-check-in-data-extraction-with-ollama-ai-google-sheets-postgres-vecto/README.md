# 🔬 Airline web check-in data extraction with Ollama AI, Google Sheets & Postgres Vector DB

> ⚡ **1,287 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview

This workflow retrieves airline web check-in URLs from Google Sheets, scrapes their content, employs an LLM to generate structured JSON data, refreshes the sheet, creates embeddings, and saves them in a Postgres vector DB for future semantic searches or question-answering.

### Quick Notes

- Verify that Google Sheets has accurate URLs for scraping.  
- Ensure the Postgres vector DB is set up correctly for embedding storage.

### Process Flow

1. Start the workflow with the `Chat Trigger - Start` node.  
2. Retrieve airline check-in URLs using the `Fetch Airline URLs` node.  
3. Scrape webpage data with the `Scrape Airline Webpage` node.  
4. Extract JSON data using the `Extract info with LLM` node with a Chat Model.  
5. Pause for a response with the `Wait for Response` node.  
6. Update Google Sheets with the `Store Extracted Data` node.  
7. Create embeddings with the `Generate Embeddings` node and store in Postgres vector DB with the `Save to Vector DB` node.  
8. Break down long text with the `Split Long Text` node and delay the next batch with the `Wait Before Next Batch` node.

### Getting Started

- Import the workflow into n8n and set up Google Sheets and Postgres vector DB credentials.  
- Run a test with a sample URL to confirm scraping and embedding storage.

### Tailored Adjustments

Tweak the `Extract info with LLM` node to adjust JSON output or modify the `Fetch Airline URLs` node to pull from different sheet fields.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Basic LLM Chain, Ollama Chat Model, Token Splitter, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
