# 🔬 Ingest and search Cloudflare R2 media with Gemini, Groq Whisper, and Supabase

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow ingests images, PDFs, and videos from a Cloudflare R2 folder, uses Google Gemini to view pdfs, images and videos, Groq stt (Whisper) for video transcriptst - to generate searchable descriptions and tags, stores embeddings in a Supabase pgvector table. 

## How it works
1. Receives a webhook request containing a Cloudflare R2 bucket and folder URL, then lists the objects in that folder.
2. Filters to supported file types, builds public CDN URLs and timestamps, and routes each item as an image, PDF, or video.
3. For images, calls Google Gemini with the image URL to generate structured metadata (summary, detailed description, tags, and scores).
4. For PDFs, calls Google Gemini to analyze the document URL and return the same structured metadata.
5. For videos, downloads each file locally, extracts representative frames with FFmpeg for Google Gemini visual analysis, extracts audio, transcribes it with Groq Whisper, and tags transcript chunks with Groq Llama.
6. Normalizes results into a single text “content” field plus JSON metadata, generates Google Gemini embeddings, and inserts the vectors into Supabase (pgvector).
7. Receives a separate webhook query, retrieves the most similar items from Supabase using embeddings, and returns ranked matches in the webhook response.

## Setup
1. Create a Cloudflare R2 bucket with publicly accessible object URLs, and add Cloudflare R2 credentials in n8n.
2. Set up a Supabase project with pgvector enabled and a table named `vec10`, then add Supabase credentials in n8n.
3. Add Google Gemini credentials (Google PaLM/Gemini API) for embeddings and provide an HTTP Header Auth credential for the Gemini HTTP requests.
4. Set the `GROQ_API_KEY` environment variable for the Groq Whisper transcription and Llama tag extraction calls.
5. If you enable video processing, install `curl`, `ffmpeg`, and `ffprobe` on the n8n host and update the local directory paths (temp root, frames directory, and video directory) in the workflow inputs.
6. Copy the ingest webhook (`/vector-ingest`) and query webhook (`/vector-query`) URLs and configure your upstream app to send the expected JSON payloads.

## Additional info
Video: FFmpeg code nodes cut videos smartly into "video_frames" items and "video_transcripts" for easy handling and pgvector storage. Exposed webhook to vector query flow allows Voice Agent to find and display the full video, pulled from Cloudflare bucket, by the referenced matching video_frames or video_transcripts returned from vector query.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Filter, Character Text Splitter, Supabase Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
