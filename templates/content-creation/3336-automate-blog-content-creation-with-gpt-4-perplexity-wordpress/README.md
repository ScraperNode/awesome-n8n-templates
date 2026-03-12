# 🎬 Automate blog content creation with GPT-4, Perplexity & WordPress

> ⚡ **28,703 views** · 🎬 [Content Creation & Video](../)

## Description

![Workflow Screenshot](https://www.dr-firas.com/workflow-tool.png)  

# Who Is This For

This workflow is ideal for content creators, solo founders, marketers, and AI enthusiasts who want to automate the full process of blog content creation.  
It is especially useful for professionals in tech, AI, and automation who publish frequently and need SEO-ready content fast.

# What Problem Does This Workflow Solve

- Creating SEO-optimized blog content is time-consuming and requires consistency.  
- Manually researching trending topics slows down the content pipeline.  
- Formatting, publishing, and promoting across multiple platforms takes effort.  
- This workflow automates the entire process from research to publication.

# What This Workflow Does

- Research: Uses Perplexity AI to gather up-to-date content ideas via form input.  
- Content Generation: GPT-4 creates a short, SEO-optimized article (max 20 lines) with H1, H2 structure and meta-description.  
- Publishing: Automatically posts the content to WordPress.  
- Email Notification: Sends the article title and URL via Gmail.  
- Slack Notification: Notifies a specified Slack channel when the article is live.  
- Database Logging: Saves the article details to a Notion database.

# Setup Guide

## Prerequisites

- WordPress account with API access  
- OpenAI API Key  
- Perplexity API Key  
- Slack Bot Token  
- Notion integration (Database ID)  
- Gmail API credentials (optional)  
- Community Node Required: This workflow uses `n8n-nodes-mcp`, which only works on self-hosted instances of n8n.  
  &gt; To install: Go to *Settings &gt; Community Nodes &gt; Install `n8n-nodes-mcp`*

## Steps

1. Import the workflow into your n8n instance  
2. Install the required community node (`n8n-nodes-mcp`)  
3. Set up API credentials for OpenAI, Perplexity, WordPress, Slack, Gmail, and Notion  
4. Customize the form trigger with your preferred prompt  
5. Run a test using a sample topic

# How to Customize This Workflow

- Modify the research prompt to match your niche or industry  
- Adjust GPT-4 settings for tone, structure, or content length  
- Customize Notion fields (e.g., add tags, categories, or labels)  
- Add logic for generating or assigning featured images automatically

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
