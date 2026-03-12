# 🎬 Add AI-generated headings & conclusions to WordPress posts with GPT-4.1

> ⚡ **475 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow enriches your WordPress articles by automatically adding an AI-generated heading and a short concluding paragraph. It ensures each post ends with valuable, engaging content to improve user satisfaction, branding, and SEO.

## How It Works

Fetches published articles from your WordPress site via the REST API.

Cleans and formats the article text for processing.

Sends the content to OpenAI with a structured prompt.

AI generates a new heading + 3-line conclusion tailored to the article.

Appends the generated text to the original content.

Updates the article back in WordPress automatically.

### Requirements

1. n8n version: 1.49.0 or later (recommended).
3. Active OpenAI API key.
5. WordPress REST API enabled.
7. WordPress API credentials (username + application password).

### Setup Instructions

Import this workflow into n8n.

Go to Credentials and configure:

OpenAI API (API key).

WordPress API (username + application password).

Replace https://example.com with your site’s URL.

Run manually or schedule it to enhance content automatically.

### Categories

AI & Machine Learning

WordPress

Content Marketing

SEO

#### Tags

ai, openai, wordpress, seo, content enhancement, automation, n8n

## 🔗 Nodes Used

HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
