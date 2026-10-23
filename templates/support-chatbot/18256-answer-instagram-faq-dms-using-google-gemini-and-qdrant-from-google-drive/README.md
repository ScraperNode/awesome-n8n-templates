# 💬 Answer Instagram FAQ DMs using Google Gemini and Qdrant from Google Drive

> ⚡ **83 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow answers Instagram DMs using a Google Gemini RAG agent backed by a Qdrant vector store, while automatically ingesting new PDF files from Google Drive into the knowledge base and refreshing the Instagram access token on a schedule.

## How it works
1. Triggers when an Instagram message is received and filters out echoes and empty messages.
2. Uses a Google Gemini chat model with chat memory and a Qdrant retriever tool to generate a context-grounded FAQ response.
3. Sends the generated reply back to the sender as an Instagram DM.
4. Runs on a daily schedule to refresh the Instagram access token.
5. Triggers when a new file is created in a specific Google Drive folder and allows only supported MIME types (PDF).
6. Downloads the file, processes items in batches, generates embeddings with Google Gemini, and inserts the document vectors into a Qdrant collection for retrieval.

## Setup
1. Add Instagram Graph API credentials, set the trigger verify token, and configure the Instagram app/webhook to call the workflow’s Instagram trigger.
2. Add Google Gemini (PaLM) API credentials for both the chat model and embedding generation.
3. Add Qdrant credentials and ensure the target collection (for example, "n8n-rag-template") exists and matches your embedding dimensions.
4. Add Google Drive OAuth2 credentials and set the folder to watch (and ensure it contains the PDFs you want indexed).
5. Adjust the allowed MIME type filters and schedule interval to match your content types and token refresh needs.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: [withmiautomation.com](withmiautomation.com)
→ Learn to build it yourself: [academy.withmiautomation.com](academy.withmiautomation.com)
→ Bring Fahmi to your team (training, workshop, talkshow): [fahmiiireza.com](fahmiiireza.com)

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, Schedule Trigger, AI Agent, Simple Memory, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
