# 🎬 Generate SEO blog posts with Claude and save drafts to WordPress

> ⚡ **20 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects blog keywords via an n8n form, uses Anthropic Claude to plan and write an SEO-focused article based on a reference post’s structure, then assembles the content into HTML, generates SEO metadata and FAQs, and saves the result as a draft post in WordPress.

## How it works
1. Receives a blog request from an n8n form with keywords, desired section count, and a target word count.
2. Fetches a reference article URL over HTTP and extracts its title, headings, and paragraph pacing to guide the new article’s structure.
3. Uses Anthropic Claude to generate a JSON outline containing a post title, a short introduction, and question-style H2 section headings with writing prompts.
4. Writes each section’s body in HTML with Anthropic Claude, then sanitizes the output and combines it with the introduction into a single article body.
5. Uses Anthropic Claude to produce a quick summary, suggested SEO title, meta description, and five FAQs, then formats the summary and FAQs into HTML.
6. Creates a draft WordPress post with the assembled HTML content and returns a form completion message showing the suggested SEO title and meta description.

## Setup
1. Add an Anthropic credential for the Claude steps used to generate the outline, section content, and SEO/FAQ fields.
2. Add a WordPress credential (typically via application password) with permission to create posts.
3. Update the reference article URL, target audience, and tone of voice values in the workflow settings before running.
4. Activate the workflow and use the form URL from the form trigger to submit keywords and article length parameters.

## 🔗 Nodes Used

HTTP Request, Wordpress, AI Agent, Anthropic Chat Model, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
