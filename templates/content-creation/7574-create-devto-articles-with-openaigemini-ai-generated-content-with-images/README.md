# 🎬 Create Dev.to articles with OpenAI/Gemini - AI-generated content with images

> ⚡ **114 views** · 🎬 [Content Creation & Video](../)

## Description

# AI Blog Publisher Workflow for Dev.to

Turn a simple idea into a complete blog article with images, ready to publish — fully automated.

## How It Works
This workflow takes a single input (your article idea) and transforms it into a polished blog post without manual effort.  
It begins with a topic, entered directly in the **Set node**. For more automation, you can connect it to **Google Sheets**, a **webhook**, or even a **chatbot** that collects ideas from you or your team.  

From there, the workflow does all the heavy lifting:
- The AI creates a structured plan for the article, including outline, section goals, and image suggestions.  
- Image prompts are generated and sent to Gemini (or ChatGPT), which returns high-quality visuals that match the content. These are uploaded to your **Cloudinary** account so they’re instantly available online.  
- The article is written in clean Markdown by AI, weaving text and images together in a natural way.  
- Finally, the post is automatically published as a **draft on Dev.to** (or another platform of your choice, such as Medium, WordPress, or Ghost).  

Instead of dealing with multiple tools or outsourcing to a copywriter, this workflow handles the entire pipeline — from idea to draft — in one seamless process.  

## Setup Steps
Getting started takes only a few minutes:
1. Connect your **OpenAI account** for the AI writer and planner.  
2. Add your **Dev.to API key** so the workflow can publish drafts.  
3. Provide your **Cloudinary account name** and set up an unsigned upload preset for hosting images.  
4. (Optional) Add your **Gemini API key**, or switch to ChatGPT for image generation.  
5. Enter your first idea into the `Set input data/credentials` node, then run the workflow manually, on a schedule (Cron), or automatically via Google Sheets or a webhook.  

Once configured, the workflow runs on autopilot — generating, illustrating, and publishing content without your input.  

## What You Get
Think of it as having a **24/7 content team** working in the background.  
- Complete blog articles, written in a professional and natural tone.  
- Images that fit directly into the text, giving your content visual appeal.  
- Ready-to-publish drafts delivered straight to Dev.to (or your chosen platform).  
- A modular workflow that you can easily extend — whether you want new inputs (e.g. Slack, chat), new outputs (e.g. Medium, WordPress), or new AI models.  

This isn’t just a template. It’s a fully operational content engine you can plug into your business.  

## Results You Can Expect
Publishing consistently online builds trust, visibility, and authority. With this workflow, you’ll:  
- Maintain a strong presence with regular articles — even when you’re not writing.  
- Increase conversions by showing up more often in searches and recommendations.  
- Build credibility by consistently sharing insights and solutions in your niche.  
- Save money and time, replacing the need for a copywriter with scalable AI-driven automation.  

## Who This Is For
- **Developers** who want to showcase projects without spending hours writing.  
- **Marketers** looking to scale content strategies without hiring writers.  
- **Agencies and SaaS teams** who need regular publishing for SEO and community presence.  
- **Solopreneurs** who want their personal brand to grow online while they focus on building their product.  

With this workflow, your blog becomes fully automated. All you need is an idea — the system takes care of everything else.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
