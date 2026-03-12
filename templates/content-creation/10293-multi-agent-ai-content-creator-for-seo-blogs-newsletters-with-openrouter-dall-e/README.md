# 🎬 Multi-agent AI content creator for SEO blogs & newsletters with OpenRouter, DALL-E, Gemini

> ⚡ **1,585 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for

This workflow is designed for content creators, digital marketers, bloggers, and businesses who need to produce high-quality, SEO-optimized blog posts and newsletters at scale. Perfect for marketing teams, content agencies, solopreneurs, and anyone looking to automate their content creation process while maintaining professional quality.

## What it does

This multi-agent AI system generates complete, research-backed blog posts and newsletters automatically. Four specialized AI agents work in sequence: the Research Agent gathers facts and sources, the Outline Agent structures the content, the Writer Agent creates engaging Medium-style prose, and the Editor Agent polishes and optimizes for search engines. The workflow automatically routes content to either blog format (with DALL-E generated featured images) or newsletter format based on your input, then saves everything to Airtable or Google Sheets for easy management.

## Requirements

- OpenRouter API key (for Grok AI model)
- Google Gemini API key
- OpenAI API key (for DALL-E image generation)
- Airtable account
- Google Sheets account (for newsletters)
- Telegram bot token (optional, for notifications)

## How to set up

1. Import the workflow into your n8n instance
2. Add your API credentials to each language model node (OpenRouter, Google Gemini, OpenAI)
3. Configure your Airtable base ID and table ID in the "Save Blog to Airtable" node
4. Set your Google Sheets document ID in the "Save Newsletter to Google Sheets" node
5. (Optional) Add your Telegram bot token and chat ID for notifications
6. Test the workflow by submitting the form with a sample topic

## How to customize the workflow

You can easily adapt this workflow to your specific needs. Replace the AI models with your preferred providers (Claude, GPT-4, Llama, etc.) by swapping the language model nodes. Modify the agent prompts to change writing style, tone, or target audience. Add additional agents for fact-checking, plagiarism detection, or brand voice alignment. Connect the output directly to publishing platforms like WordPress, Medium, Webflow, or email marketing services like Mailchimp. Adjust the image generation parameters to match your brand aesthetic, or skip image generation entirely if not needed.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, AI Agent, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
