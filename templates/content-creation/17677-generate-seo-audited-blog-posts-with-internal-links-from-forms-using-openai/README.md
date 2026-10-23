# 🎬 Generate SEO-audited blog posts with internal links from forms using OpenAI

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow uses an n8n form trigger and OpenAI to generate an SEO-ready blog post in Markdown from a submitted topic and optional target keyword, first creating a structured outline and then expanding it into a complete draft with an SEO title and meta description.

## How it works
1. Receives a blog topic and optional target keyword from an n8n form submission.
2. Uses OpenAI to generate a detailed SEO research outline with a hook, 4–6 H2 sections, supporting bullet points, and related keywords.
3. Sends the outline back to OpenAI to write a complete 800–1200 word Markdown blog post with an SEO title, meta description, and sectioned body content.
4. Returns the finished Markdown draft in the final step’s output for copy-paste into your publishing tool.

## Setup
1. Add an OpenAI API credential in the OpenAI Chat Model connection and confirm the selected model (for example, gpt-5-mini).
2. Publish the n8n form and share the form URL with whoever will submit topics (or use it yourself) to trigger the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
