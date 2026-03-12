# 🎬 Automated video creation using Google Veo3 and n8n workflow

> ⚡ **11,992 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?
Content creators, social media managers, digital marketers, and businesses looking to automate video production without expensive equipment or technical expertise.

## What problem is this workflow solving?
Traditional video creation requires cameras, editing software, voice recording equipment, and hours of post-production work. This workflow eliminates all these barriers by automatically generating professional videos with audio using just text prompts.

## What this workflow does
This automated workflow takes video ideas from Google Sheets, generates optimized prompts using AI, creates videos through Google's V3 model via Fal AI, monitors the generation progress, and saves the final video URLs back to your spreadsheet for easy access and management.

## Setup
1. Sign up for Fal AI account and obtain API key
2. Create Google Sheet with video ideas and status columns
3. Configure n8n with required credentials (Google Sheets, Fal AI API)
4. Import the workflow template
5. Set up authentication for all connected services
6. Test with sample video idea

## How to customize this workflow to your needs
Modify the AI prompts to match your brand voice, adjust video styles and camera movements, change polling intervals for video generation status, customize Google Sheet column mappings, and add additional processing steps like thumbnail generation or social media posting.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
