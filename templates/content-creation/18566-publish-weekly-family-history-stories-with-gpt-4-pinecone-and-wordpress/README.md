# 🎬 Publish weekly family history stories with GPT-4, Pinecone and WordPress

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs weekly to generate an AI-written family-history short story using OpenAI with Pinecone document retrieval, then publishes the HTML story to WordPress and creates a Google Gemini featured image that is uploaded and set on the post.

## How it works
1. Runs on a weekly schedule every Wednesday.
2. Uses OpenAI (GPT-4o) with session memory and a Pinecone-backed retrieval tool to generate a 500–1000 word family-history short story as WordPress-ready HTML.
3. Extracts the <h1> title, derives a URL slug, and prepares the remaining HTML as the post body.
4. Creates and publishes a WordPress post with the generated story content.
5. Generates a featured image with Google Gemini based on the WordPress post excerpt.
6. Uploads the generated image to the WordPress Media Library and sets it as the post’s featured image.

## Setup
1. Add your OpenAI API credentials for the GPT-4o chat model and embeddings used in the workflow.
2. Add your Pinecone credentials and ensure the target index (for example, "ariail-ms") exists and is populated with your family documents.
3. Add WordPress API credentials and confirm the site URL, author ID, and any desired categories/status settings match your WordPress configuration.
4. Add Google Gemini credentials and confirm the selected image model is available in your Gemini account.
5. If needed, update the WordPress REST endpoints (media and posts URLs) and the schedule timing to match your environment.

## 🔗 Nodes Used

HTTP Request, Wordpress, Schedule Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
