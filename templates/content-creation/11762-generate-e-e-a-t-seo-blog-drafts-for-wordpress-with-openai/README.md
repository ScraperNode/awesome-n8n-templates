# 🎬 Generate E-E-A-T SEO blog drafts for WordPress with OpenAI

> ⚡ **460 views** · 🎬 [Content Creation & Video](../)

## Description

# AI E-E-A-T WordPress Blog Generator (n8n)

This workflow generates SEO-optimized, E-E-A-T compliant blog posts using a form input and publishes them as WordPress drafts with featured images.

## Features
- Form-based blog brief
- SEO metadata + outline generation
- Full HTML blog writing
- Featured image generation
- WordPress draft creation

## Requirements
- n8n v1.40+
- OpenAI API key
- WordPress REST API access

## Environment Variables
WP_SITE_URL=https://example.com
SITE_NAME=Your Website Name
PROJECT_CONTEXT=Your niche description

## How to Use
1. Import workflow JSON
2. Configure OpenAI & WordPress credentials
3. Set environment variables
4. Open the Form Trigger
5. Submit blog details
6. Draft appears in WordPress

## Notes
- Content is created as **draft**
- No credentials are included

## 🔗 Nodes Used

HTTP Request, Wordpress, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
