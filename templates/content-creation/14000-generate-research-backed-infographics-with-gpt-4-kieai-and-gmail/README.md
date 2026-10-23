# 🎬 Generate research-backed infographics with GPT-4, kie.ai, and Gmail

> ⚡ **111 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

- A web form collects your infographic parameters: headline, topic, art style, layout, color palette, aspect ratio, resolution, etc.
- An AI Agent (GPT-4 with live web search) researches your topic and writes an optimized prompt for the image generator
- The prompt is submitted to kie.ai's **nano-banana-pro** model to generate the infographic
- The workflow polls kie.ai every 15 seconds until the image is ready (up to ~5 minutes)
- On success, the finished infographic is emailed to you as an attachment; on failure, a detailed error email is sent instead

## Set up steps

- Set up takes about 5 minutes
- Add your **OpenAI API key** (for the AI research agent)
- Add your **kie.ai API key** as a Header Auth credential (used by the generate and polling nodes)
- Connect your **Gmail account** and update the recipient email address in the two Gmail nodes
- Activate the workflow and open the form URL to start generating

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
