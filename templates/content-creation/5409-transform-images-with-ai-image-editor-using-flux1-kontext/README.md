# 🎬 Transform images with AI image editor using FLUX.1 Kontext

> ⚡ **1,022 views** · 🎬 [Content Creation & Video](../)

## Description

## For Who?

- Content Creators
- Youtube Automation
- Marketing Team

---

## How it works?

**1 -** Retrieve Base Image, Image Description and Situation from Airtable
**2 -** Generate Image Prompt
**3 -** Generate Image via Fal AI
**4 -** Verify if Image is generated
**5 -** Upload Image on Airtable

📺 **YouTube Video Tutorial:** 
[![Watch on YouTube](https://img.youtube.com/vi/0SVj70-dA0Q/maxresdefault.jpg)](https://www.youtube.com/watch?v=0SVj70-dA0Q)

---

## SETUP

**Setup Input :** The first part of the workflow can be replaced with anything else. You need as input a Prompt and the Base Image URL (publicly available).

**Setup Output :** In this Workflow, the output is storing the image on Airtable but you can replace that with anything else but basically you have two options : 
- Store the Generated Image somewhere : Keep everything like this and replace the last Airtable node with the Third Party you want to use.
- Use the Image directly in n8n : In HTTP Request "Generate Image" switch sync_mode to "true", remove all the following nodes and add "Extract form File" node (convert to Base64 String)


**APIs :** For the following third-party integrations, replace ==[YOUR_API_TOKEN]== with your API Token or connect your account via Client ID / Secret to your n8n instance:
- Fal AI (FLUX KONTEXT MAX) : https://fal.ai/models/fal-ai/flux-pro/kontext/max/api#schema-input
- Airtable : https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.airtable

## 🔗 Nodes Used

Airtable, HTTP Request, Basic LLM Chain, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
