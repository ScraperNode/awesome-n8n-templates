# 🎬 Automate UGC video creation with Sora 2, OpenAI, and Gemini

> ⚡ **2,019 views** · 🎬 [Content Creation & Video](../)

## Description

In this tutorial, I’ll show how to create UGC (User Generated Content) videos automatically using n8n and Sora 2.

This workflow uses OpenAI to generate detailed prompts and Sora 2 to produce realistic UGC-style videos that look natural and engaging.

### Who is this for?

*   Marketers and social media managers scaling short-form video content  
      
    
*   Agencies producing branded or influencer-style content  
      
    
*   Content creators and freelancers automating their video workflows  
      
    
*   Anyone exploring AI-driven video generation and automation  
      
    

### What problem is this workflow solving?

Creating authentic, human-like UGC videos manually takes time and effort.  
This workflow automates the entire process by:

*   Generating engaging scripts or prompts via OpenAI  
      
    
*   Sending those prompts to Sora 2 for automatic video generation  
      
    
*   Managing rendering and delivery inside n8n  
      
    
*   Eliminating manual editing and production steps  
      
    

### What this workflow does

This workflow connects n8n, OpenAI, and Sora 2 to fully automate the creation of short-form UGC videos.

The steps include:

1.  Taking user input (topic, tone, niche).  
      
    
2.  Using OpenAI to create a detailed video prompt.  
      
    
3.  Sending the prompt to Sora 2 via HTTP Request to generate the video.  
      
    
4.  Handling video rendering and storing or sending results automatically.  
      
    

By the end, you’ll have a complete UGC video pipeline running on autopilot — producing content for under $1.50 per video.

### Setup

1.  Create Accounts:  
      
    

*   Sign up for [n8n.io](https://n8n.io/) (cloud or self-hosted).  
      
    
*   Get access to OpenAI API and Sora 2.  
      
    

3.  Generate API Keys:  
      
    

*   Retrieve API keys from OpenAI and Sora 2.  
      
    
*   Store them securely in n8n credentials.  
      
    

5.  Create Workflow:  
      
    

*   Add a Form Trigger or Webhook Trigger for input (topic, target audience).  
      
    
*   Add an OpenAI Node to generate script prompts.  
      
    
*   Connect an HTTP Request Node to send the prompt to Sora 2.  
      
    
*   Use a Wait Node or delay logic for video rendering completion.  
      
    
*   Store or send the output video file via Gmail, Telegram, or Google Drive.  
      
    

7.  Test the Workflow:  
      
    

*   Run a test topic.  
      
    
*   Confirm that Sora 2 generates and returns a video automatically.  
      
    

### How to customize this workflow to your needs

*   Adjust OpenAI prompts for specific video styles (tutorials, product demos, testimonials).  
      
    
*   Integrate video output with social media platforms via n8n nodes.  
      
    
*   Add text-to-speech layers for voiceover automation.  
      
    
*   Schedule automatic content creation using Cron triggers.  
      
    
*   Connect with Notion or Airtable to manage content ideas.  
      
    

### Notes

*   You’ll need valid API keys for both OpenAI and Sora 2.  
      
    
*   Sora 2 may charge per render (approx. $1–$1.50 per video).  
      
    
*   Ensure your workflow includes sufficient delay/wait handling for video rendering.  
      
    
*   Works seamlessly on n8n Cloud or self-hosted setups.  
      
    

### Want a Video Tutorial on How to Set Up This Automation?

👉 [Watch on YouTube](https://youtu.be/H0AQU4ColME)

## 🔗 Nodes Used

Edit Image, HTTP Request, Google Drive, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
