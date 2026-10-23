# 📊 Ping IndexNow when new blog posts are published from your RSS feed

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow polls your blog’s RSS feed for newly published posts and sends each new URL to the IndexNow API, helping Bing and other IndexNow-enabled search engines pick up updates quickly.

## How it works
1. Polls the specified RSS feed every 15 minutes to detect new blog posts.
2. Sets your site host and IndexNow key for the request payload.
3. Sends a POST request to the IndexNow API with the new post URL, your key, and the key file location on your domain.
4. Checks the HTTP response status code to determine whether the ping succeeded.
5. Routes successful runs to a “Pinged OK” endpoint and failures to a “Ping Failed” endpoint for optional downstream notifications.

## Setup
1. Obtain an IndexNow key and host it as a text file at `https://<your-domain>/<key>.txt` containing the key.
2. Update the RSS feed URL in the RSS trigger (for example, `https://your-domain.com/feed/`).
3. Activate the workflow, publish a test post, and check the execution log — a 200 or 202 response from IndexNow confirms the ping was received successfully.

## 🔗 Nodes Used

HTTP Request, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
