# 🎬 Content generator for WordPress v3

> ⚡ **3,573 views** · 🎬 [Content Creation & Video](../)

## Description

# UPDATE
This is an updated version of the previous Ultimate Content Generator for WordPress v2.
https://n8n.io/workflows/2737-ultimate-content-generator-for-wordpress/

It includes an additional workflow to generate content using Anthropic Claude in addition to OpenAI 4o.

I also mofidied it to use the AI Agent Tool node with structured output for more consistent outputs.

Lastly, the workflow updates a new table in AirTable with the published blog post url and featured image url.

# Overview- 
This workflow automates the end-to-end process of creating, optimizing, and publishing content on WordPress.

It integrates AI-powered tools, Airtable, and WordPress plugins to generate high-quality, on-brand posts effortlessly.

Perfect for content creators, marketers, and business owners looking to save time and scale their content strategy.

## Features
### Content Creation:
**AI-Powered Content:** Generates SEO-friendly blog posts with structured headings, relevant keywords, and meta descriptions.
**Custom Prompts:** Tailor the AI-generated content to match your brand’s tone and voice.
**SEO Optimization:** RankMath Plugin Integration: Updates RankMath SEO with focus keywords and meta descriptions, ensuring your content is search-engine optimized.
**Content Management:** 
Airtable Integration: Organizes content ideas, drafts, and publishing schedules in one place. Easily scalable for teams or solo creators.
**Visuals:** 
Branded Featured Images: Automatically generates on-brand images for every post.
**Publishing:**
Effortless Formatting: Adapts content to fit your WordPress theme and schedules it for publication.
### Workflow Steps
**Trigger:** Initiated manually or on a schedule.
**Content Management:** Retrieves and organizes ideas from Airtable.
**Content Generation:** Generates AI-driven blog content tailored to your audience.
**SEO Optimization:** Automatically updates RankMath with SEO details.
**Featured Image Creation:** Produces on-brand images for the post.
**Publishing:** Formats and schedules the post on WordPress.
## Prerequisites
**API Keys:**
- OpenAI
- Claude
- Airtable
- WordPress REST API

### Custom Code:
Add a small update to your WordPress theme’s functions.php file to enable seamless automation.

### Customization
- Replace Airtable with another content management system if preferred.
- Adjust AI prompts to reflect different tones, styles, or industries.
- Add integrations for additional plugins, analytics, or storage services.
### Usage
- Import the workflow into your n8n instance.
- Configure API credentials for WordPress, Airtable, OpenAI, Claude and Slack.
- Update your functions.php file with the provided code snippet.
- Customize prompts and Airtable structure for your content needs.
- Trigger the workflow manually or set it on a schedule.
### Notes
- Experiment with Airtable views or add filters for more granular control over your content pipeline.
- Extend the workflow to include social media posting or analytics tracking.

Feel free to adapt and extend this workflow to meet your specific needs! 🎉

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Wordpress, Airtable Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
