# 🎬 Turn YouTube RSS videos into social posts with Dumpling AI and Airtable

> ⚡ **711 views** · 🎬 [Content Creation & Video](../)

## Description

### Who is this for?

This workflow is for content creators, social media managers, marketing teams, and virtual assistants who want to automatically repurpose YouTube videos into ready-to-post social media content. If you need to quickly turn long-form videos into short posts for platforms like Instagram, Facebook, or LinkedIn, this workflow saves you hours of manual work.

---

### What problem is this workflow solving?

Manually extracting ideas from YouTube videos, writing captions, creating images, and preparing social media posts takes a lot of time and effort.  
This workflow automates the entire process: it reads the video, generates posts with captions and AI images, and organizes everything into Airtable.  
It lets you focus more on growing your audience instead of spending hours repurposing content.

---

### What this workflow does

1. Watches a YouTube channel RSS feed for new videos.
2. Extracts the video transcript automatically using Dumpling AI.
3. Summarizes and transforms the transcript into 3 social media captions (Instagram, Facebook, LinkedIn) using OpenAI.
4. Generates 3 unique AI image prompts.
5. Sends the prompts to Dumpling AI to create realistic social media images.
6. Saves the captions and attaches the AI images into Airtable, ready for posting.

---

### Setup

1. **RSS Feed Setup**  
   - Get your YouTube channel’s RSS feed URL.
   - Insert the URL into the RSS Trigger node.
   - This will monitor for new YouTube uploads automatically.

2. **Dumpling AI Setup for Transcript Extraction**  
   - Sign up at [Dumpling AI](https://app.dumplingai.com).
   - Get your Dumpling AI API Key.
   - In the first HTTP Request node after the RSS trigger, insert your API Key (use HTTP Header Authentication).
   - This sends the YouTube URL to Dumpling AI’s `/extract-transcript` endpoint.

3. **OpenAI Setup for Caption and Prompt Generation**  
   - Get your OpenAI API Key.
   - In the OpenAI node, connect your account.
   - The AI will:
     - Generate 3 platform-specific captions.
     - Generate 3 creative prompts to design images related to the video.

4. **Edit Fields Node**  
   - This node organizes the generated captions and prompts into separate fields for easy Airtable mapping.
   - Captions are split for Instagram, Facebook, and LinkedIn.

5. **Dumpling AI Setup for AI Image Generation**  
   - After the Edit Fields node, the second HTTP Request node sends the image prompt to Dumpling AI’s `/generate-image` endpoint.
   - This returns a realistic AI-generated image.

6. **Airtable Setup for Saving Posts (Without Image First)**  
   - Create a new base in Airtable with the following fields:
     - `Platform` (Single select: Instagram, Facebook, LinkedIn)
     - `Content` (Long text field)
     - `Image` (Attachment field)
   - Connect your Airtable Personal Access Token to the Airtable node.
   - The Airtable node saves the generated captions into separate records, initially without images.

7. **Upload Generated Images Back to Airtable**  
   - The third HTTP Request node PATCHES the Airtable record.
   - It updates the `Image` field with the generated AI image from Dumpling AI.

8. **Credentials Required**  
   - **Dumpling AI API Key** (for transcript extraction and AI image generation)  
   - **OpenAI API Key** (for caption and prompt creation)  
   - **Airtable Personal Access Token** (for inserting and updating records)

---

### How to customize this workflow to your needs

- Change the OpenAI prompt to generate captions in your brand tone (e.g., friendly, professional, witty).
- Modify the image prompts to match your design style better.
- Adjust the Airtable base fields if you want to add more platforms or content formats.
- Add scheduling tools like Buffer or Metricool to automatically post from Airtable.

---

### ⚡ Quick Tips

- Make sure Dumpling AI credits are active to allow transcript and image generation.  
- Set Airtable permissions properly so PATCH requests can update attachments.

## 🔗 Nodes Used

Airtable, HTTP Request, RSS Feed Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
