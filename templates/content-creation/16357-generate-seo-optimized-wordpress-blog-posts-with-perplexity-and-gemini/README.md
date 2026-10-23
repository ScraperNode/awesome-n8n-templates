# 🎬 Generate SEO-optimized WordPress blog posts with Perplexity and Gemini

> ⚡ **205 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects a research query from an n8n form, researches it with Perplexity, drafts and formats an SEO blog post using OpenRouter and Google Gemini, then creates a draft in WordPress, uploads and sets a featured image, and sends a Telegram success message.

## How it works
1. Receives a research query from an n8n form submission.
2. Sends the query to the Perplexity API and rewrites citation markers into source-linked text.
3. Uses an OpenRouter chat model to draft a long-form, SEO-focused blog post based on the research.
4. Generates a JSON title, slug, and meta description via an OpenRouter-powered agent and parses the structured output.
5. Sends the blog draft to Google Gemini to convert it into WordPress-compatible HTML with a table of contents, FAQ, and styling rules.
6. Aggregates the generated HTML and metadata, cleans the HTML output, and creates a draft post in WordPress.
7. Downloads an image from a configured URL, uploads it to the WordPress Media Library, sets it as the post’s featured image, and notifies a Telegram chat.

## Setup
1. Create credentials for Perplexity API (HTTP Header Auth) and update the request headers/body as needed for your Perplexity account.
2. Add an OpenRouter API credential for the two OpenRouter chat model connections used to write the draft and generate title/slug/meta.
3. Add a Google Gemini (Google PaLM) API credential for the HTML-generation step.
4. Add WordPress API credentials and update the WordPress site base URL used in the media upload and post update HTTP requests.
5. Create a Telegram bot credential, set the TELEGRAM_CHAT_ID environment variable, and choose the chat where the success message should be sent.
6. Replace the hardcoded image URL (or extend the workflow to generate/select images dynamically) before publishing.

## 🔗 Nodes Used

HTTP Request, Telegram, Wordpress, AI Agent, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
