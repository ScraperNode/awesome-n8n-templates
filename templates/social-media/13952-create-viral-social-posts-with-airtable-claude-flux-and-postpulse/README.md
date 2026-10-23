# 📱 Create viral social posts with Airtable, Claude, Flux, and PostPulse

> ⚡ **76 views** · 📱 [Social Media & Email Marketing](../)

## Description

++**How it works**++
This workflow takes post ideas and prompts from Airtable, creates viral social media content with Claude, and schedules daily posts in PostPulse.


**++Set up steps++**
- **Airtable Trigger:** Triggers our workflow via the **Created** field in our base.
- **HTTP Node:** 3rd party API call to generate an AI image. Prompt is sourced from Airtable base.
- **Anthropic's Claude:** Creates a viral social media post using the **Post Idea** field in Airtable base.
- **Download File:** Downloads the generated image from Step 2. 
- **Upload Media to PostPulse:** Upload the downloaded image to PostPulse in order to retrieve our path ID.
- **Schedule a Light Post:** Schedule the posting date of our generated Claude post and AI image.
- **Update Airtable Base:** Update **Posted?** field in Airtable to Yes.

## 🔗 Nodes Used

Airtable, HTTP Request, Airtable Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
