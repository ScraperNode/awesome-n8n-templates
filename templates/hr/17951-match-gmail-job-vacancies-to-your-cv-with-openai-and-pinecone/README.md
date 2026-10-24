# 👥 Match Gmail job vacancies to your CV with OpenAI and Pinecone

> ⚡ **19 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow monitors Gmail for incoming job-related emails, extracts job details (including PDF attachments), compares each vacancy to a candidate CV stored in Pinecone using OpenAI, and sends a WhatsApp notification when the job’s match score passes a defined threshold.

## How it works
1. Triggers every minute when a new email arrives in Gmail and downloads any attachments.
2. Checks whether the email has an attachment and extracts text from the first PDF attachment when present.
3. Uses an OpenAI chat model to classify the email content into job-related categories.
4. Uses an OpenAI-powered agent to analyze the vacancy text and retrieve relevant candidate profile context from a Pinecone vector index.
5. Sends the analysis output to OpenAI to return a single numeric fit score from 0–10.
6. If the score is above the configured threshold, sends a WhatsApp message asking whether to apply; otherwise, the workflow stops.

## Setup
1. Connect credentials for Gmail, OpenAI, Pinecone, Google Drive, and WhatsApp Cloud API.
2. Upload your CV to Google Drive, select its file ID in the Google Drive download step, and ensure it is ingested into your own Pinecone index.
3. Create/select a Pinecone index and set it in both the insert and retrieve steps (ensure embedding dimensions match the OpenAI embeddings configuration).
4. Set your WhatsApp phone number ID and recipient phone number in the WhatsApp send steps.
5. Adjust the match-score threshold condition and (optionally) the Gmail label ID used to mark relevant emails as IMPORTANT.

## 🔗 Nodes Used

Google Drive, Gmail, Gmail Trigger, WhatsApp Business Cloud, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
