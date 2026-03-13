# 📱 Generate and auto-publish LinkedIn posts with GPT-4 text and AI images

> ⚡ **758 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## How it works
This workflow automates LinkedIn posting for businesses and personal brands.  
It starts with a form where you submit your post idea. Then:
1. **Message Model (OpenAI)** generates the LinkedIn post text in a professional and engaging style.  
2. **Image Generation (OpenAI)** creates a custom visual to match the post idea and brand style.  
3. **LinkedIn Node** publishes the text + image directly to your LinkedIn account.  

This way, you can go from idea → AI-written post → branded visual → live LinkedIn content, all in one automated flow.  

## Setup steps
- Connect your **Form Trigger** (or replace with Google Forms/Typeform/Notion etc. if you prefer).  
- Configure **OpenAI credentials** for text and image generation.  
- Adjust the AI prompts with your own details: `[business name]`, `[founder name]`, `[brand colors]`, `[tone of voice]`.  
- Connect your **LinkedIn account** in the final node.  

## Requirements
- OpenAI API key (for text + image generation)  
- LinkedIn account with API access  
- n8n instance (self-hosted or cloud)

## 🔗 Nodes Used

LinkedIn, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
