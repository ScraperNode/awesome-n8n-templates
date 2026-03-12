# 🎬 🧠 AI blog post journalist (Perplexity for research, Anthropic Claude for blog)

> ⚡ **8,206 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

🧠 AI-Powered Blog Post Generator
Category: Content Automation / AI Writing / Marketing

Description:
This automated workflow helps you generate fresh, SEO-optimized blog posts daily using AI tools—perfect for solo creators, marketers, and content teams looking to stay on top of the latest AI trends without manual research or writing.

For more of such builds and step-by-step Tutorial Guides, check out:
https://www.youtube.com/@Automatewithmarc

Here’s how it works:

Schedule Trigger kicks off the workflow daily (or at your preferred interval).

Perplexity AI Node researches the most interesting recent AI news tailored for a non-technical audience.

AI Agent (Claude via Anthropic) turns that news into a full-length blog post based on a structured prompt that includes title, intro, 3+ section headers, takeaway, and meta description—designed for clarity, engagement, and SEO.

Optional Memory & Perplexity Tool Nodes enhance the agent's responses by allowing it to clarify facts or fetch more context.

Google Docs Node automatically saves the final blog post to your selected document—ready for review, scheduling, or publishing.

Key Features:

Combines Perplexity AI + Claude AI (Anthropic) for research + writing

Built-in memory and retrieval logic for deeper contextual accuracy

Non-technical, friendly writing style ideal for general audiences

Output saved directly to Google Docs

Fully no-code, customizable, and extendable

Use Cases:

Automate weekly blog content for your newsletter or site

Repurpose content into social posts or scripts

Keep your brand relevant in the fast-moving AI landscape

Setup Requirements:

Perplexity API Key

Anthropic API Key

Google Docs (OAuth2 connected)

## 🔗 Nodes Used

Google Docs, Schedule Trigger, AI Agent, Anthropic Chat Model, Simple Memory, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
