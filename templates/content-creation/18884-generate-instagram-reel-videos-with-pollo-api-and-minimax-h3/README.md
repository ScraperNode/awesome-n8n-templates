# 🎬 Generate Instagram Reel videos with Pollo API and MiniMax H3

> ⚡ **55 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a prompt (and optional reference images) via an n8n form, submits a MiniMax H3 video generation request to the Pollo API, polls for completion, and returns the final task status and generated Instagram Reel video URL.

## How it works
1. Receives a submission from an n8n form containing a prompt, optional image URLs, the MiniMax H3 model path, and a Pollo API key.
2. Sends a POST request to the Pollo API MiniMax H3 generation endpoint with the prompt and optional image input.
3. Waits 10 seconds and then requests the current generation status from the Pollo API using the returned task ID.
4. Repeats the wait-and-poll cycle until the generation status is either succeed or failed.
5. Outputs the task ID, status, media type, video URL, and remaining/charged credit details from the final status response.

## Setup
1. Create a Pollo API account and obtain an API key with access to the MiniMax H3 endpoint.
2. Ensure the form fields submitted to the workflow include prompt, model_path (for example minimax/minimax-h3), and api_key, with image_url optional.
3. Run the workflow once to get the form URL and use it to submit your generation requests.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
