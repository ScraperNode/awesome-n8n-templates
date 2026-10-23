# 👥 Rank resumes by job description similarity using Gemini embeddings

> ⚡ **29 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects resume PDFs and a job description via an n8n form, generates embeddings with Google Gemini, calculates cosine similarity between each resume and the job description, and returns a CSV-style ranked list of filenames.

## How it works
1. Receives resume PDF uploads and a job description text through an n8n Form trigger.
2. Creates a semantic embedding for the job description using the Google Gemini Embeddings API (gemini-embedding-2).
3. Splits the uploaded files into individual resume items and converts each PDF binary to a Base64 string.
4. Sends each Base64-encoded PDF to the Google Gemini Embeddings API to generate a multimodal embedding for the resume.
5. Calculates cosine similarity between the job description embedding and each resume embedding, then sorts resumes from most similar to least similar.
6. Returns a CSV-formatted ranking (Rank, File Name) in the form completion response.

## Setup
1. Create and add a Google Gemini (PaLM) API credential in n8n with an API key that can access the gemini-embedding-2 model.
2. Ensure the Google Gemini credential is selected on both HTTP requests that create the job description embedding and the resume embeddings.
3. Use the workflow’s form URL to upload one or more PDF resumes and paste the target job description before running.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
