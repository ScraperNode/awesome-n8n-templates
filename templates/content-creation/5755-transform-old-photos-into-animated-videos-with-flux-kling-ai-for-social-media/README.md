# 🎬 Transform old photos into animated videos with FLUX & Kling AI for social media

> ⚡ **7,740 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Description

See the transformation in action! Here's an example of what this workflow can achieve:

![_97099274_fotoentera.jpg](fileId:1703)


![ezgif822c7da3a75a2b.gif](fileId:1705)

This automation template is designed for content creators, social media managers, and anyone looking to breathe new life into old family photos and historical images. It transforms any old black and white or sepia photograph into a colorized, animated video using cutting-edge AI technology, then automatically publishes the results across multiple social media platforms including Facebook, Instagram, YouTube, and X (Twitter).

The workflow combines powerful AI services to create engaging content from vintage photographs: first enhancing and colorizing the image using FLUX Kontext, then bringing it to life with realistic animations using Kling Video AI, and finally distributing the results across your social media channels automatically.

![Captura de pantalla 20250707 a las 21.55.01.png](fileId:1704)

***Note: The estimated cost per workflow execution is approximately $0.29 USD, covering the AI processing for both image colorization and video animation. The upload-post node only works for self-hosted n8n instances, but you can use the standard HTTP request node for uploading content on n8n Cloud.***

## Who Is This For?
- **Content Creators & Social Media Managers:** Transform historical content into engaging videos that capture audience attention and drive engagement across platforms.
- **Family History Enthusiasts:** Bring old family photos to life by adding color and motion, creating emotional connections with your audience.
- **Marketing Professionals:** Leverage nostalgic content for brand storytelling, using vintage aesthetics to create compelling social media campaigns.
- **Digital Artists & Photo Restorers:** Streamline the process of enhancing and sharing restored vintage photographs with automated AI enhancement.
- **Social Media Influencers:** Create unique, eye-catching content from historical images that stands out in crowded social feeds.

## What Problem Does This Workflow Solve?
Creating engaging social media content from old photos typically requires multiple manual steps: photo restoration, colorization, animation, and then individual posting to each platform. This workflow addresses these challenges by:
- **Automating Photo Enhancement:** Uses advanced AI (FLUX Kontext) to automatically colorize and enhance old photographs, removing artifacts and improving quality.
- **Creating Dynamic Content:** Transforms static images into animated videos using Kling Video AI, making historical photos come alive with natural movements.
- **Streamlining Multi-Platform Publishing:** Automatically distributes the final animated videos across Facebook, Instagram, YouTube, and X with a single workflow execution.
- **Saving Time & Effort:** Eliminates the need for manual photo editing, video creation, and individual social media posting.

## How It Works
1. **Photo Upload:** Users submit old photographs through a simple web form, with optional custom animation descriptions.
2. **Image Enhancement:** The workflow uploads the photo to imgbb, then sends it to FLUX Kontext AI for colorization and quality enhancement.
3. **Animation Creation:** The colorized image is processed by Kling Video AI to create a 5-second animated video with natural movements.
4. **Cloud Storage:** The final video is automatically saved to Google Drive for backup and easy access.
5. **Multi-Platform Publishing:** The animated video is simultaneously posted to Facebook, Instagram, YouTube, and X using the upload-post service.

## Setup
1. **FAL.AI API Key:** Sign up at fal.ai and add your API key to the HTTP Request nodes for both FLUX Kontext and Kling Video AI services.
2. **ImgBB API Token:** Create a free account at api.imgbb.com to get an API token for image hosting, then update the "Upload Image to imgbb" node.
3. **Google Drive Connection:** Connect your Google Drive account to enable automatic video storage and backup.
4. **Upload-Post Service:** Create an account at upload-post.com to get your API credentials for multi-platform social media posting.
   - **Important:** The upload-post node currently only works with self-hosted n8n instances. For n8n Cloud users, replace the upload-post node with standard HTTP request nodes to publish to each social media platform individually.
5. **Form Customization:** (Optional) Modify the form fields in the "Photo Upload Form" node to collect additional information or customize the user experience.

## Requirements
- **Accounts:** n8n, FAL.AI, ImgBB, Google Drive, upload-post.com
- **API Keys & Credentials:** FAL.AI API Key, ImgBB API Token, Google Drive OAuth2, Upload-post.com API Token & User ID
- **File Types:** Supports JPG, PNG image formats for photo uploads
- **Cost:** Approximately $0.29 USD per workflow execution for AI processing

Transform your old photographs into viral social media content with this powerful AI-driven workflow that handles everything from restoration to distribution automatically.

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
