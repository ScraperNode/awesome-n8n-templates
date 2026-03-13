# 🎬 Generate 9:16 images from content and brand guidelines

> ⚡ **9,005 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview
This **n8n workflow** automates the creation of 9:16 aspect ratio images optimized for short-form video content and thumbnails. It integrates multiple tools to retrieve content, generate scripts, and create AI-generated imagery.

---

## Key Features
1. **Trigger Workflow Manually**  
   - The workflow starts when triggered manually in n8n.

2. **Retrieve Brand Guidelines**  
   - Fetch brand elements like style, tone, and guidelines from Airtable.

3. **SEO Keywords and Blog Post Retrieval**  
   - Retrieves blog posts and associated SEO keywords from Airtable to form the basis of image content.

4. **Content Preparation**  
   - Uses GPT-4 to prepare a 4-scene script and thumbnail prompts for short-form videos.

5. **AI Image Generation**  
   - Uses Leonardo.ai API to generate:
     - Thumbnail Images
     - Scene-specific Images (9:16 Aspect Ratio)

6. **Airtable Asset Management**  
   - Generated assets (images) are saved back into Airtable with metadata like URLs and file sizes.

---

## Tools and Integrations
- **n8n**: Workflow automation platform.
- **OpenAI**: Generates scripts and prompts (GPT-4O-MINI).
- **Leonardo.ai**: AI tool for improving prompts and generating high-quality images.
- **Airtable**: Used as a data source for brand guidelines, blog posts, and to store generated assets.

---

## Workflow Steps
1. **Manual Trigger**  
   - Initiate the workflow.

2. **Retrieve Brand and SEO Guidelines**  
   - Fetch essential brand elements like tone, style, and keywords.

3. **Filter and Fetch Blog Content**  
   - Search for blog posts relevant to selected SEO keywords.

4. **Script Preparation**  
   - Use GPT-4 to generate a script with image prompts for scenes and thumbnails.

5. **Image Generation**  
   - Call Leonardo.ai to create:
     - Scene Images in 9:16 Aspect Ratio.
     - A Thumbnail Image with an improved prompt.

6. **Store Assets**  
   - Save generated assets (images) to Airtable for future use.

---

## Workflow Structure
### Nodes Breakdown:
- **Manual Trigger**: Start the workflow.
- **Get Brand Guidelines**: Pull brand-related information (style, tagline, tone, etc.) from Airtable.
- **Set Guidelines**: Prepare fetched data.
- **Get SEO Keywords**: Retrieve keywords to filter relevant content.
- **Keyword Filter**: Filter results for specified keywords (e.g., *"AI Automation"*).
- **Script Prep**: Generate 4-scene scripts and prompts with GPT-4.
- **Leo - Improve Prompt**: Improve image prompts for clarity and detail.
- **Leo - Generate Image**: Create AI-generated images for scenes and thumbnails.
- **Wait Nodes**: Ensures Leonardo image generation is complete.
- **Add Asset Info**: Store the generated images back into Airtable with metadata.

---

## API Credentials Required
Ensure the following credentials are configured in n8n:
1. **OpenAI API Key**
2. **Leonardo.ai API Key**
3. **Airtable API Token**

---

## Output
- **Generated Images**: High-quality AI-generated images with a 9:16 aspect ratio.
- **Saved Metadata**: Asset details (URLs, sizes, types) stored in Airtable.

---

## Usage
1. Import this workflow into n8n.
2. Set up your Airtable API, Leonardo.ai API, and OpenAI API credentials.
3. Run the workflow manually.
4. Monitor image generation and check the Airtable output for results.

---

## Tags
- **OpenAI**
- **RunwayML**
- **Leonardo**
- **Airtable**
- **Video Automation**

---

## Author
**AlexK1919**  
- AI-Native Workflow Architect  
- [More Workflow Templates](https://n8n.io/creators/alexk1919)  
- [YouTube Channel](https://www.youtube.com/@alexk1919_)  
- [Connect with Alex](https://beacons.ai/alexk1919)

## 🔗 Nodes Used

Airtable, HTTP Request, Filter, Wikipedia, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
