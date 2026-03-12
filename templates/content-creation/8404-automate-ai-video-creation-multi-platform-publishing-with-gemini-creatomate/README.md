# 🎬 Automate AI video creation & multi-platform publishing with Gemini & Creatomate

> ⚡ **5,077 views** · 🎬 [Content Creation & Video](../)

## Description

## This n8n template from [Intuz](https://www.intuz.com/) provides a complete end-to-end content factory to automate the entire lifecycle of creating and publishing AI-driven videos. 

It transforms a single text prompt into a fully scripted, visually rich video with AI-generated images and voiceovers, then distributes it across multiple social media platforms.

## Who's this workflow for?
- Content Creators & YouTubers
- Social Media Managers & Agencies
- Digital Marketers & Entrepreneurs
- Brands looking to scale video content production

## Objective

- Generate viral video scripts with Gemini AI (via LangChain).
- Break scripts into structured scenes(hooks, retention, CTA).
- Create image prompts and high-quality background visuals automatically.
- Store all scenes, prompts, images, and metadata into Airtable.
- Handle file formatting, uploads, and naming automatically.
- Add error handling and retry logic for smooth execution.
- Uploading into Social Media platforms.


## How it works
**1. AI Script Generation:** The workflow starts with a single command. A powerful Google Gemini AI model, acting as a "Content Brain," generates a complete, viral video script with a title, description, and multiple scenes.

**2. Content Management in Airtable:** The entire script is broken down and saved systematically into an Airtable base, which acts as the central Content Management System (CMS) for the video production pipeline.

**3. AI Image Generation:** The workflow loops through each scene in Airtable. It uses an AI agent to enhance the image prompts and sends them to an image generation API (like Pollinations.ai) to create a unique, high-quality image for each scene. These images are then automatically uploaded back into Airtable.

**4. Automated Video Rendering:** Once all images are ready, the workflow gathers the script text and the corresponding image URLs from Airtable and sends them to Creatomate. Creatomate uses a pre-defined template to assemble the final video, complete with AI-generated voiceovers for each scene.

**5. Multi-Platform Publishing:** After a brief wait for the video to render, the workflow retrieves the final video file and automatically publishes it across your connected social media channels, including YouTube and Instagram.

## Key Requirements to Use This Template
Before you start, please ensure you have the following accounts and assets ready:

**1. n8n Instance & Required Nodes:**
- An active n8n account (Cloud or self-hosted).
- This workflow relies on the official n8n LangChain integration (@n8n/n8n-nodes-langchain). If you are using a self-hosted version of n8n, please ensure this package is installed on your instance.

**2. AI & Video Accounts:**
- Google Gemini AI Account: A Google Cloud account with the Vertex AI API enabled and an API Key.
- Creatomate Account: It's platform to generate videos. An account with [Creatomate](Creatomate) for video rendering, and your API key and a pre-designed video template ID.

**3. Content & Social Media Accounts:**
- Airtable Account: An Airtable base set up to manage the video content. Using the complementary Airtable template is highly recommended.
- YouTube Account: A YouTube channel with API access enabled via Google Cloud Console.
- Upload-Post.com Account: An account for posting to other platforms like Instagram.

## Workflow Steps

**1.▶️ Trigger (Manual/Auto)**
    - Start workflow manually or via schedule.

**2.🧠 Content Brain (Gemini + LangChain)**
    - Role-trained viral strategist prompt.
    - Generates 6 scene scripts with:
        - Hook → Retention → Value → CTA.
    - Follows viral content rules (engagement triggers, curiosity gaps, shareable moments).

**3.📑 Structured Output Parser**
    - Enforces JSON schema:
        - `video_id`
        - `video_title`
        - `description`
        - `scenes[]` → `scene_number`, `text`, `image_prompt`

**4.📄 Airtable – Store Scenes**
    - Each scene stored with:
        - Video ID, Title, Description
        - Scene Number & Text
        - Image Prompt & Generated Image link

**5.🤖 AI Agent – Image Prompt Creator**
    - Transforms scene text →optimized image prompts using structured rules.

**6.🎨 Pollination AI – Image Generation**
    - Generates vertical 9:16 visuals with parameters:
        - Model: `flux`
        - Resolution: 1080x1920
        - Steps: 12
        - Guidance Scale: 3.5
        - Safety Checker: Enabled
        - Options: `seed=42`, `nologo=true`

**7.📂 File Handling & Conversion**
    - Assigns filenames automatically (e.g., `images_001.png`).
    - Converts binary image → base64 for Airtable storage.

**8.📤 Airtable Upload – Store Images**
    - Attaches generated visuals directly into Generated Image field.

**9.⚡ Switch & Error Handling**
    - Branches for:
        - ✅ Success → continue
        - ❌ Failed → stop with error message
        - ⏳ Processing → wait/retry

**10.Social Media Upload**
    - In YouTube via YouTube API from official documentation
    - In Instagram Via Upload Post API

## Setup Instructions
**1. AI Configuration:**
- In the Google Gemini Chat Model nodes, connect your Google Gemini API account.
- In the Content Brain node, you can customize the core prompt to change the video's niche, style, or topic.

**2. Airtable Setup (Crucial):**
- Connect your Airtable account in the Airtable nodes.
- Set up your Airtable base using the provided template or ensure your base has identical table and field names. Update the Base ID and Table IDs in the Airtable nodes.
- Airtable Schema:
![Airtable Schema.PNG](fileId:2617)

**3. Video Rendering Setup (Creatomate):**
- In the Video Rendering - Creatomate node, add your Creatomate API key to the header authorization.
- In the Template for Creatomate node, replace the template_id with the ID of your own video template from your Creatomate account.

**4. Social Media Connections:**
- In the Upload on YouTube node, connect your YouTube account via OAuth2.
- In the Upload on Instagram node, replace the API key in the header authorization with your key from Upload-Post.com.

**5. Execute the Workflow:**
- Click "Execute workflow" to kick off your automated video content factory.

![Outcomes.PNG](fileId:2618)

## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Airtable, HTTP Request, YouTube, Stop and Error, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
