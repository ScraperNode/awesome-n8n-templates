# 🎬 Automate RSS to Medium publishing with Groq, Gemini & Slack approval system

> ⚡ **683 views** · 🎬 [Content Creation & Video](../)

## Description

# This n8n template demonstrates how to build a complete AI-powered content pipeline that pulls fresh news from RSS feeds, transforms it into engaging Medium articles.

**Categories**
* Content Creation
* AI Automation
* Publishing
* Social Media

**Share**

Yes, this n8n workflow is straight FIRE for content creators who want to automate their entire publishing game! 🔥 

This template creates a complete content pipeline that pulls fresh tech news from RSS feeds, transforms it into engaging Medium articles using AI, generates matching cover images, and handles the entire approval-to-publishing process through Slack integration.

**Good to know**
* Uses multiple AI models (Groq, Google Gemini) for content generation
* Integrates with Medium publishing API for automated posting
* Includes smart duplicate checking via Google Sheets
* Generates professional cover images using Pollinations AI
* Full Slack approval workflow with human oversight
* Automatic storage and organization in Google Drive

## How it works

**RSS Content Fetching**
* Pulls fresh content from The Verge, TechCrunch, and Ars Technica RSS feeds on a 6-hour schedule
* Smart filtering ensures only new, unposted articles are processed

**AI Content Generation**  
* Groq and Google Gemini models transform RSS content into engaging Medium-style articles
* Automatic image prompt generation creates relevant cover visuals
* Pollinations AI generates professional marketing-style images

**Smart Review & Approval**
* Creates Google Doc with formatted article for easy review
* Sends preview to Slack channel/DM for human approval
* Waits for explicit approval before publishing

**Multi-Platform Publishing**
* Auto-publishes to Medium upon approval
* Sends formatted content via Gmail
* Stores everything in Google Drive for archiving
* Updates Google Sheets to prevent duplicates

**Rejection Handling**
* Clean rejection notifications via Slack
* No publishing if content doesn't meet standards

## Key Features That'll Blow Your Mind

* **Zero-Duplicate Publishing**: Smart Google Sheets integration tracks all published content
* **Human-in-the-Loop**: Slack approval system keeps quality control tight
* **Full AI Pipeline**: From RSS parsing to image generation, everything's automated
* **Multi-Source Content**: Aggregates from top tech news sources
* **Professional Formatting**: Articles come out Medium-ready with proper structure
* **Cloud Storage**: Everything gets archived in Google Drive automatically
* **Email Distribution**: Auto-sends content to your mailing list

## How to use

* Clone this workflow and connect your credentials
* Set up your Google Sheets tracking document
* Configure Slack notifications for your approval channel
* Add your Medium API credentials for publishing
* The schedule trigger runs every 6 hours, but you can adjust timing
* Manual trigger available for testing and one-off runs

## Requirements

* **Google Workspace**: Sheets, Docs, Drive, Gmail access
* **Slack Workspace**: For approval notifications and review
* **Groq API**: For AI content generation
* **Google Gemini API**: For image prompt creation
* **Medium API**: For automated publishing
* **Pollinations**: Free AI image generation (no API key needed)

## Customizing this workflow

This isn't just another automation—it's your new content creation superpower. Here's how to make it yours:

* **Switch RSS Sources**: Replace tech feeds with your niche (finance, health, etc.)
* **Modify AI Prompts**: Adjust the content generation style to match your brand voice  
* **Change Publishing Destinations**: Swap Medium for WordPress, Ghost, or other platforms
* **Add More Approval Steps**: Include multiple reviewers or different approval criteria
* **Customize Image Generation**: Modify prompts for different visual styles
* **Schedule Flexibility**: Adjust timing from 6 hours to daily, weekly, whatever fits

**Pro Tips:**
* The workflow includes comprehensive error handling and logging
* Sticky notes provide detailed documentation for each section
* Modular design makes it easy to swap components
* Built-in duplicate prevention saves you from embarrassing reposts

This template is perfect for content creators, digital marketers, tech bloggers, and anyone who wants to scale their content game without losing quality control. It's like having a full content team working 24/7, but smarter and way more consistent.

**Use cases that work incredibly well:**
* Tech blog automation for agencies
* News aggregation and commentary sites  
* Personal brand content scaling
* Client content creation workflows
* Multi-platform publishing systems

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Slack, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
