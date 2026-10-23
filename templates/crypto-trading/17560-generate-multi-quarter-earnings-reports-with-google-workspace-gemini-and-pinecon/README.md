# 📈 Generate multi-quarter earnings reports with Google Workspace, Gemini and Pinecone

> ⚡ **311 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow ingests quarterly earnings PDFs listed in Google Sheets from Google Drive into a Pinecone vector index using Google Gemini embeddings, then uses an OpenAI-powered agent with Pinecone retrieval to generate a markdown earnings-trend report and save it into Google Docs.

## How it works
1. Starts when you manually run the workflow.
2. Reads a Google Sheets watchlist of earnings-report PDF URLs and iterates through each file.
3. Downloads each PDF from Google Drive, splits it into text chunks, and generates embeddings with Google Gemini.
4. Stores the embedded chunks in a Pinecone index for semantic search across the uploaded filings.
5. Prompts an OpenAI chat model to write a markdown report covering the last three quarters, focusing on differences, trends, and outliers.
6. Retrieves supporting passages from Pinecone (using Google Gemini query embeddings) to ground the analysis.
7. Inserts the generated markdown report into a target Google Doc.

## Setup
1. Create a Pinecone index named `company-earnings` and add Pinecone credentials for both the insert and retrieval steps.
2. Add a Google AI (Gemini) API key for the Google Gemini embeddings and chat model used for retrieval.
3. Add an OpenAI API key for the chat model that powers the report-writing agent.
4. Connect Google Sheets, Google Drive, and Google Docs OAuth credentials, then set your spreadsheet ID/sheet and replace the Google Docs `documentURL` with your target document.
5. Ensure your Google Sheet includes a `File URL` column (and any optional fields like a filename), and update the agent prompt if you want to analyze a company other than Google.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Docs, AI Agent, OpenAI Chat Model, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
