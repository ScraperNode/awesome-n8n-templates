# 🎬 Automate blog content creation with OpenAI, Google Sheets & email approval flow

> ⚡ **24,144 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?
This workflow is perfect for:
* Digital marketers who need to scale SEO-optimized content production
* Bloggers and content creators who want to maintain consistent publishing schedules
* Small business owners who need regular blog content but lack writing resources

## What problem is this workflow solving?
Creating high-quality, SEO-optimized blog content consistently is time-consuming and resource-intensive. This workflow solves that by:
* Automating the content generation process from topic to final draft
* Ensuring quality control through human-in-the-loop approval
* Managing topic queues and preventing duplicate content creation
* Streamlining the revision process based on human feedback
* Organizing and archiving all generated content for future reference

## What this workflow does
From topics stored in Google Sheets, this workflow:
1. **Automatically retrieves pending topics** from your Google Sheets tracking document
2. **Generates SEO-optimized blog posts** (800-1200 words) using OpenAI GPT-4 with structured prompts
3. **Sends content for human approval** via email with custom approval forms
4. **Handles revision requests** by incorporating feedback while maintaining SEO best practices
5. **Updates topic status** to prevent duplicate processing
6. **Add approved generated content** in Google Sheets for easy access and management
7. **Routes workflow** based on approval decisions (approve, revise, or cancel)

## Setup
1. **Copy the Google Sheet template** here:
👉 [Automate Blog Content Creation – Google Sheet Template](https://docs.google.com/spreadsheets/d/1ZZ2RoMYS1DZEhM7hEDUbSCAUlcZrZ15pnGRHuus3fVk/edit?usp=sharing)
2. **Connect Google Sheets** with your topic tracking document (requires "Topic List" and "Generated Content" sheets)
3. **Add your OpenAI API key** to the AI agent nodes for content generation
4. **Configure Gmail** for the approval notification system
5. **Set up your topic list** in Google Sheets with "Topic" and "Status" columns
6. **Customize the schedule trigger** to run at your preferred intervals
7. **Update email recipient** in the approval node to your email address
8. **Test with a sample topic** marked as "Pending" in your Google Sheet

## How to customize this workflow to your needs
* **Adjust content length**: modify the word count requirements in the AI agent prompts
* **Change writing style**: customize the copywriter prompts for different tones (formal, casual, technical)
* **Add multiple reviewers**: extend the approval system to include additional stakeholders
* **Integrate with CMS**: add nodes to automatically publish approved content to WordPress, Webflow, or other platforms
* **Include keyword research**: add Ahrefs or SEMrush nodes to incorporate keyword data
* **Add image generation**: integrate DALL-E or Midjourney for automatic featured image creation
* **Customize approval criteria**: modify the approval form to include specific feedback categories
* **Add content scoring**: integrate readability checkers or SEO analysis tools before approval

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
