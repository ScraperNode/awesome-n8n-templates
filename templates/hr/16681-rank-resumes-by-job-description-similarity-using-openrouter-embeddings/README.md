# 👥 Rank resumes by job description similarity using OpenRouter embeddings

> ⚡ **27 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects resume PDFs and a job description through an n8n form, extracts text (with OCR for scanned PDFs), generates embeddings via OpenRouter, and ranks the resumes by cosine similarity to the job description, returning a CSV-style list of ranked filenames.

## How it works
1. Receives resume PDFs and a job description from an n8n form submission.
2. Creates an embedding for the job description using OpenRouter’s embeddings endpoint with `openai/text-embedding-3-large`.
3. Processes each uploaded resume one at a time, converting the PDF to text using built-in PDF extraction.
4. If the extracted text is too short (likely scanned), sends the PDF to OpenRouter chat completions with the `file-parser` plugin (`mistral-ocr`) to OCR the document and return plain text.
5. Creates an embedding for each resume’s extracted text (from direct extraction or OCR) using `openai/text-embedding-3-large`.
6. Computes cosine similarity between each resume embedding and the job description embedding, then sorts resumes from most similar to least similar.
7. Returns a completion page containing a CSV-style list of rank and filename.

## Setup
1. Add an OpenRouter API credential in n8n and select it on the embedding and OCR HTTP request steps.
2. Ensure your OpenRouter account has access to `openai/text-embedding-3-large`, `google/gemma-4-31b-it`, and the `file-parser` plugin with `mistral-ocr` for scanned PDF extraction.
3. Open the workflow’s form trigger in a browser, upload one or more PDF resumes, and paste the job description before running.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
