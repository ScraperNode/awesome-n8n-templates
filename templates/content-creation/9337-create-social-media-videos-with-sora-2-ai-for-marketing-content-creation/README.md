# 🎬 Create social media videos with Sora 2 AI for marketing & content creation

> ⚡ **2,916 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview
This workflow utilizes the Defapi API with **Sora 2 AI** model to generate stunning **viral videos** with creative AI-generated motion, effects, and storytelling. Simply provide a creative prompt describing your desired video scene, and optionally upload an image as a reference. The AI generates professional-quality video content perfect for tiktok, youtube, marketing campaigns, and creative projects.

**Input:** Creative prompt (required) + optional image  
**Output:** AI-generated viral video ready for social media and content marketing

Users can interact through a simple form, providing a text prompt describing the desired video scene and optionally uploading an image for context. The system automatically submits the request to the Defapi Sora 2 API, monitors the generation status in real time, and retrieves the final video output. This solution is ideal for content creators, social media marketers, video producers, and businesses who want to quickly generate engaging video content with minimal setup.

## Prerequisites
- A Defapi account and API key: Sign up at [Defapi.org](https://defapi.org) to obtain your API key for Sora 2 access.
- An active n8n instance (cloud or self-hosted) with HTTP Request and form submission capabilities.
- Basic knowledge of AI prompts for video generation to achieve optimal results.
  - Example prompt: A pack of dogs driving tiny cars in a high-speed chase through a city, wearing sunglasses and honking their horns, with dramatic action music and slow-motion jumps over fire hydrants.
  - For 15-second HD videos, prefix your prompt with `(15s,hd)`.
- (Optional) An image to use as a reference or starting point for video generation.
  - **Image Restrictions**: Avoid uploading images with real people or highly realistic human faces, as they will be rejected during content review.
- **Important Notes**: 
  - The API requires proper authentication via Bearer token for all requests.
  - Content undergoes multi-stage moderation. Avoid violence, adult content, copyrighted material, and living celebrities in both prompts and images.

## Setup Instructions
1. **Obtain API Key**: Register at Defapi.org and generate your API key with Sora 2 access. Store it securely—do not share it publicly.
2. **Configure Credentials**: In n8n, create HTTP Bearer Auth credentials named "Defapi account" with your API key.
3. **Configure the Form**: In the "Upload Image" form trigger node, ensure the following fields are set up:
   - **Prompt** (text field, required) - Describe the video scene you want to generate
   - **Image** (file upload, optional) - Optionally upload .jpg, .png, or .webp image files as reference
4. **Test the Workflow**:
   - Click "Execute Workflow" in n8n to activate the form trigger.
   - Access the generated form URL and enter your creative video prompt. Optionally upload an image for additional context.
   - The workflow will process any uploaded image through the "Convert to JSON" node, converting it to base64 format.
   - The request is sent to the Sora 2 API endpoint at Defapi.org.
   - The system will wait 10 seconds and then poll the API status until video generation is complete.
5. **Handle Outputs**: The final "Format and Display Results" node formats and displays the generated video URL for download or embedding.

## Workflow Structure
The workflow consists of the following nodes:
1. **Upload Image** (Form Trigger) - Collects user input: creative prompt (required) and optional image file
2. **Convert to JSON** (Code Node) - Converts any uploaded image to base64 data URI and formats prompt
3. **Send Sora 2 Generation Request to Defapi.org API** (HTTP Request) - Submits video generation request to Sora 2 API
4. **Wait for Processing Completion** (Wait Node) - Waits 10 seconds before checking status
5. **Obtain the generated status** (HTTP Request) - Polls API task query endpoint for completion status
6. **Check if Image Generation is Complete** (IF Node) - Checks if status equals 'success'
7. **Format and Display Results** (Set Node) - Extracts and formats final video URL output

## Technical Details
- **API Endpoint**: `https://api.defapi.org/api/sora2/gen` (POST request)
- **Model Used**: Sora 2 AI video generation model
- **Video Capabilities**: Supports 15-second videos and high-definition (HD) output
- **Status Check Endpoint**: `https://api.defapi.org/api/task/query` (GET request)
- **Wait Time**: 10 seconds between status checks
- **Image Processing**: If an image is uploaded, it is converted to base64 data URI format (`data:image/[type];base64,[data]`) for API submission
- **Authentication**: Bearer token authentication using the configured Defapi account credentials
- **Request Body Format**:
  ```json
  {
    "prompt": "Your video description here",
    "images": ["data:image/jpeg;base64,..."]
  }
  ```
  Note: The `images` array can contain an image or be empty if no image is provided
- **Response Format**: The API returns a task_id which is used to poll for completion status. Final result contains `data.result.video` with the video URL.
- **Accepted Image Formats**: .jpg, .png, .webp
- **Specialized For**: Viral video content, social media videos, creative video marketing

## Customization Tips
- **Enhance Prompts**: Include specifics like:
  - Scene description and action sequences
  - Character behaviors and emotions
  - Camera movements and angles (e.g., slow-motion, dramatic zoom)
  - Audio/music style (e.g., dramatic, upbeat, cinematic)
  - Visual effects and atmosphere
  - Timing and pacing details
- **Enable 15s and HD Output**: To generate 15-second high-definition videos, start your prompt with `(15s,hd)`. For example: `(15s,hd) A pack of dogs driving tiny cars in a high-speed chase through a city...`

## Content Moderation

The API implements a three-stage content review process:

1. **Image Review**: Rejects images with real people or highly realistic human faces
2. **Prompt Filtering**: Checks for violence, adult content, copyrighted material, and living celebrities
3. **Output Review**: Final check after generation (often causes failures at 90%+ completion)

**Best Practices:**
- Avoid real human photos; use illustrations or cartoons instead
- Keep prompts generic; avoid brand names and celebrity names
- You can reference verified Sora accounts (e.g., "let @sama dance")
- If generation fails at 90%+, simplify your prompt and try again

## Example Prompts
- "A pack of dogs driving tiny cars in a high-speed chase through a city, wearing sunglasses and honking their horns, with dramatic action music and slow-motion jumps over fire hydrants."
- "(15s,hd) Animated fantasy landscape with floating islands, waterfalls cascading into clouds, magical creatures flying, golden sunset lighting, epic orchestral music."
- "(15s,hd) Product showcase with 360-degree rotation, dramatic lighting changes, particle effects, modern electronic background music."

## Use Cases
- **Social Media Content**: Generate eye-catching videos for Instagram Reels, TikTok, and YouTube Shorts
- **Marketing Campaigns**: Create unique promotional videos from product images
- **Creative Projects**: Transform static images into dynamic storytelling videos
- **Content Marketing**: Produce engaging video content without expensive production costs
- **Viral Content Creation**: Generate shareable, attention-grabbing videos for maximum engagement

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
