# 🎬 Generate professional emails with custom tones using OpenAI GPT

> ⚡ **248 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![5min Logo](https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=175,q=95/d9573nnb9LioR05g/logo_tr-Yleq6B4J5WtDk64q.png)

## AI Email Generator with Tone Selection
**Made by [Biznova](https://www.biznova.tech/en)**
 **on [Tiktok](https://www.tiktok.com/@biznova_tech)**



### 📧 What This Does
This workflow creates a professional email generator that allows users to:
- Choose from multiple tones (Professional, Friendly, Formal, Casual)
- Input recipient details, subject, and context
- Generate a complete, well-formatted email using AI

### 👥 Who's It For
- Business professionals who need to write emails quickly
- Customer support teams responding to inquiries
- Sales teams crafting outreach messages
- Anyone who wants help writing professional emails

### 🎯 How It Works
1. User fills out a form with email details and selects a tone
2. The workflow processes the input and creates an AI prompt
3. OpenAI generates a complete email based on the tone
4. The formatted email is displayed for the user to copy

### ⚙️ Setup Requirements
- OpenAI API key (get one at https://platform.openai.com)
- n8n instance (cloud or self-hosted)

### 🚀 How to Use
1. Set up your OpenAI credentials in the "OpenAI Chat Model" node
2. Activate the workflow
3. Share the form URL with users
4. Users fill out the form and receive a generated email instantly



### 🔧 Setup Steps

**1. OpenAI API Key**
   - Go to https://platform.openai.com/api-keys
   - Create a new API key
   - Add it to the "OpenAI Chat Model" node credentials

**2. Customize Tones (Optional)**
   - Edit the "Build AI Prompt" node
   - Modify the tone instructions to match your needs
   - Add new tones to the form dropdown

**3. Adjust AI Settings (Optional)**
   - In "OpenAI Chat Model" node:
   - Change model (gpt-4 for better quality)
   - Adjust temperature (0.5-0.9)
   - Modify max tokens for longer/shorter emails

**4. Test the Workflow**
   - Click "Test workflow" button
   - Fill out the form
   - Check the generated email

**5. Share the Form**
   - Activate the workflow
   - Copy the form URL
   - Share with your team or customers

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
