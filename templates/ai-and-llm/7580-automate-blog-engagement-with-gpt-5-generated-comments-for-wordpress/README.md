# ✨ Automate blog engagement with GPT-5 generated comments for WordPress

> ⚡ **572 views** · ✨ [AI & LLMs](../)

## Description

This workflow automatically generates realistic comments for your WordPress articles using AI. It makes your blog look more active, improves engagement, and can even support SEO by adding keyword-relevant comments.

## How It Works

Fetches all published blog posts from your WordPress site via the REST API.

Builds a tailored AI prompt using the article’s title, excerpt, and content.

Uses OpenAI to generate a short, natural-sounding comment (some positive, some neutral, some longer, some shorter).

Assigns a random commenter name and email.

Posts the generated comment back to WordPress.

### Requirements

1. n8n version: 1.49.0 or later (recommended).
3. Active OpenAI API key.
5. WordPress site with REST API enabled.
7. WordPress API credentials (username + application password).

## Setup Instructions

Import this workflow into n8n.

Add your credentials in n8n &gt; Credentials:

OpenAI API (API key).

WordPress API (username + application password).

Replace the sample URL https://example.com with your own WordPress site URL.

Execute manually or schedule it to run periodically.

### Categories

AI & Machine Learning

WordPress

Content Marketing

Engagement

#### Tags

ai, openai, wordpress, comments, automation, engagement, n8n

## 🔗 Nodes Used

HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
