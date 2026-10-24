# 📱 Generate multi-platform social captions from blog posts with OpenAI

> ⚡ **27 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow collects a blog URL or pasted blog text via an n8n form, uses OpenAI to generate platform-specific social captions and image alt text, and returns a styled copy-and-paste HTML results page with one section per social network.

## How it works
1. Receives blog input (URL or pasted content) and an optional featured image URL from an n8n form.
2. If a blog URL is provided, downloads the page with an HTTP request and extracts readable article text from the HTML; otherwise it uses the pasted blog content.
3. Builds a single prompt that asks for platform-specific captions (including a Twitter/X thread) and featured image alt text, returned as strict JSON.
4. Sends the prompt to OpenAI Chat Model (via an AI agent) to generate the captions JSON.
5. Converts the JSON into a styled HTML page with copy buttons for each caption and displays it back to the form submission as the response.

## Setup
1. Add an OpenAI API credential to the OpenAI Chat Model node and choose the model you want to use.
2. Activate the workflow and open the Blog Input Form production URL to submit a blog URL or pasted blog text.
3. Ensure the blog page is publicly accessible if you use the URL option, and optionally provide a featured image URL for Instagram/Pinterest guidance and alt text display.

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
