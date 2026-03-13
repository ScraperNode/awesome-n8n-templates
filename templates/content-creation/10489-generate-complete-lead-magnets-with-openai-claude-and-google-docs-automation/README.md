# 🎬 Generate complete lead magnets with OpenAI, Claude, and Google Docs automation

> ⚡ **277 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

In this tutorial, I’ll walk you through a step-by-step N8N workflow that combines the power of OpenAI and Claude AI to generate professional, ready-to-use lead magnet plans for any niche.

This workflow helps marketers, agencies, and freelancers create engaging lead magnets — such as guides, blueprints, and checklists — with zero manual writing and complete AI automation.

### Who is this for?

*   Marketers and content strategists creating high-converting lead magnets  
      
    
*   Agencies looking to scale client content deliverables  
      
    
*   Freelancers offering marketing automation services  
      
    
*   Anyone who wants to combine AI + automation for efficient content creation  
      
    

### What problem is this workflow solving?

Manually writing lead magnets can be slow and inconsistent. This workflow eliminates that by:

*   Using OpenAI and Claude AI to co-create detailed content frameworks  
      
    
*   Automating research, structure, and formatting of lead magnet documents  
      
    
*   Allowing full customization for different industries or audiences  
      
    
*   Reducing production time from hours to minutes  
      
    

### What this workflow does

This automation connects OpenAI, Claude AI, and Google Drive (or Docs) inside n8n to produce well-structured lead magnet documents.

The process includes:

1.  Collecting a topic or niche input from a form or webhook.  
      
    
2.  Generating an outline and content blocks using OpenAI.  
      
    
3.  Refining, expanding, and organizing the text using Claude AI.  
      
    
4.  Formatting the content and converting it to clean HTML or Google Docs format.  
      
    
5.  Saving or uploading the final version to Google Drive or Notion.  
      
    

By the end of the tutorial, you’ll have a fully automated content agent that builds lead magnet plans from scratch — ready to deliver to clients or publish instantly.

### Setup

1.  Create Accounts:  
      
    

*   Sign up for [n8n.io](https://n8n.io/).  
      
    
*   Obtain API access for OpenAI, Claude (via OpenRouter), and Google Drive API.  
      
    

3.  Add API Keys in n8n:  
      
    

*   Go to Credentials and add your OpenAI and Claude API keys securely.  
      
    

5.  Build the Workflow:  
      
    

*   Use a Form Trigger or Webhook Node to capture topic input.  
      
    
*   Add OpenAI Node to generate structure and section ideas.  
      
    
*   Add HTTP Request Node for Claude API (OpenRouter) to expand sections into polished paragraphs.  
      
    
*   Use a Function Node to merge sections and format them into Markdown or HTML.  
      
    
*   Add Google Drive Node to upload or store the final file.  
      
    

7.  Test Your Workflow:  
      
    

*   Input a test topic (e.g., “Dental Marketing Blueprint”).  
      
    
*   Wait for the AI to generate, merge, and store your lead magnet content automatically.
    

### How to customize this workflow to your needs

*   Modify prompt templates to fit your target audience or writing style.  
      
    
*   Integrate Notion, Airtable, or Slack for automatic delivery.  
      
    
*   Add a scheduling trigger (e.g., weekly lead magnet generation).  
      
    
*   Incorporate branding or styling logic using Markdown → HTML conversion.  
      
    
*   Expand prompts for multilingual or niche-specific lead magnets.
    

### Notes

*   This workflow requires API keys for both OpenAI and Claude (via OpenRouter).  
      
    
*   Ensure proper handling of text formatting nodes to avoid Markdown errors.  
      
    
*   Google Drive integration requires OAuth setup in n8n credentials.  
      
    
*   Works on both n8n Cloud and self-hosted environments.
    

### 🎥 Watch the Full Tutorial

👉 [YouTube Video Tutorial](https://youtu.be/AA33S3PF4t8)

## 🔗 Nodes Used

HTTP Request, Gmail, Google Docs, Markdown, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
