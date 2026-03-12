# 🎬 WordPress blog generation with AI Research, Image Creation & Auto Publishing

> ⚡ **287 views** · 🎬 [Content Creation & Video](../)

## Description

## How This N8n Workflow Works

This is an **automated blog post generation system** that:

1. **Researches topics** using AI agents and web search tools
2. **Writes complete blog posts** with proper SEO structure
3. **Generates custom images** for each post
4. **Publishes directly to WordPress** with images embedded

## Setup Steps

### 1. API Keys & Credentials
- **Set in "API Keys" node:**
  - `tavily`: Get from [tavily.com](https://tavily.com) (free tier available)
  - `wavespeed`: Get from [wavespeed.ai](https://wavespeed.ai) for image generation
  - `wordpress-website-url`: Your WordPress site URL

### 2. WordPress Authentication
- Create **WordPress Application Password**:
  - Go to Users → Your Profile → Application Passwords
  - Create new password and save it
- Set up **WordPress API credential** in n8n with:
  - Username: Your WordPress username
  - Password: The application password you created

### 3. Data Table Setup
- Create an **n8n Data Table** with these columns:
  - title, topic, content, slug, excerpt, featured_image, audience, category, author, status

### 4. AI Model Configuration
- Configure AI models in these nodes:
  - **Researcher Agent** (uses OpenAI or Google Gemini)
  - **Writer Agent** (uses OpenAI or Google Gemini) 
  - **Image Prompts Writer** (uses OpenAI)

### 5. Image Generation
- Update image upload URL in **"Upload image" node**:
  - Change to: `https://yourdomain.com/wp-json/wp/v2/media`
- Configure your preferred image generation service

## How to Trigger

1. **Fill the form** with:
   - Topic
   - Target audience  
   - Industry
2. **Submit** to start the automation

## Workflow Process

1. **Research Phase**: AI researches topic and analyzes existing content
2. **Writing Phase**: AI writes complete blog post with HTML structure
3. **Image Creation**: Generates featured image + content images
4. **WordPress Integration**: 
   - Uploads images to media library
   - Creates blog post with embedded images
   - Sets featured image and metadata

## Key Features

- **SEO-optimized** content structure
- **Automatic image generation** and embedding
- **WordPress native integration**
- **Quality checks** and retry logic
- **Human-like writing** with anti-AI detection

The system handles everything from research to published post with images in one automated workflow.

## 🔗 Nodes Used

Edit Image, HTTP Request, RSS Read, Wordpress, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
