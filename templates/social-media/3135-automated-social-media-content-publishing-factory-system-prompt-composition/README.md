# 📱 ✨🩷Automated social media content publishing factory + system prompt composition

> ⚡ **73,912 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Social Media Content Publishing Factory for Streamlined Content Creation Across Platforms

## Who is this for?
This workflow is designed for content creators, social media managers, and marketing teams who need to efficiently create and publish content across multiple social media platforms. It's perfect for businesses looking to maintain a consistent presence across X (Twitter), Instagram, Facebook, LinkedIn, Threads, and YouTube Shorts without spending hours crafting platform-specific content manually.

## What problem is this workflow solving?
Creating tailored content for different social media platforms is time-consuming and requires understanding each platform's unique requirements and audience expectations. This workflow solves the challenge of:
- Maintaining consistent messaging across platforms while respecting platform-specific formats
- Generating optimized content that follows best practices for each platform
- Creating accompanying visuals without graphic design skills
- Streamlining the approval process before publishing
- Reducing the time spent on repetitive content creation tasks

## What this workflow does
This automated content factory takes your content idea and transforms it into platform-optimized posts for all major social media channels. The workflow:

1. Accepts your content idea or topic through a chat interface
2. Leverages AI to generate tailored content for each platform (X/Twitter, Instagram, Facebook, LinkedIn, Threads, YouTube Shorts)
3. Creates appropriate images using AI image generation
4. Sends content for approval via email before publishing
5. Publishes approved content to selected platforms
6. Maintains chat memory to improve future content generation

## Setup
1. Connect your social media platform credentials (X/Twitter, Instagram, Facebook, LinkedIn)
2. Set up your email account for the approval process
3. Configure your OpenAI API key for AI content generation
4. Update the image generation service credentials (Pollinations.ai is used by default)
5. Customize the system prompts and schemas in the Google Docs nodes with your brand voice and content requirements

## How to customize this workflow to your needs
- Modify the system prompts in the Google Docs nodes to match your brand voice and content strategy
- Adjust the social media schemas to include specific fields relevant to your content
- Update the approval process to include additional stakeholders if needed
- Add or remove social media platforms based on your marketing strategy
- Customize the image generation prompts to better match your visual branding
- Integrate with your existing content calendar or CRM systems

This workflow eliminates the need to manually craft different versions of the same content for each platform, saving hours of work while ensuring your social media presence remains consistent and optimized for maximum engagement.

## 🔗 Nodes Used

HTTP Request, Telegram, Google Drive, Facebook Graph API, X (Formerly Twitter), Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
