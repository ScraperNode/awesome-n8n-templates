# 🎬 Transform text to UGC videos with OpenAI SORA-2 on Replicate

> ⚡ **2,147 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the entire text-to-video generation process using OpenAI's SORA-2 model via Replicate API. Simply provide a seed image, text prompt describing your desired scene, and video duration (4, 8, or 12 seconds), and the workflow handles the video creation, status monitoring, and delivery of your AI-generated content - typically ready in 2-5 minutes.

## Tools Used
* **n8n**: The automation platform that orchestrates the workflow
* **Replicate API**: Powers the OpenAI SORA-2 AI model for text-to-video generation
* **OpenAI API**: Required for SORA-2 model authentication
* **Status Monitoring**: Automated checking system with intelligent retry logic
* **Error Handling**: Built-in resilience with comprehensive error management
* **Batch Processing**: Optional bulk generation for multiple videos

## How to Install
1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Get API Keys**: Sign up at replicate.com and openai.com for your API tokens
3. **Configure API Tokens**: Replace placeholders in the "Set API Token" node with your keys
4. **Add Seed Image**: Update the image URL in the "Add Seed Image, Prompt and amount of seconds" node (1280x720 recommended)
5. **Write Your Prompt**: Describe your desired video scene and set duration, then run the workflow

## Use Cases
* **Ad Agencies**: Generate multiple video variations for A/B testing campaigns
* **E-commerce Brands**: Create product demonstration videos from a single photo
* **Content Creators**: Produce unique video content without filming equipment
* **Marketing Teams**: Rapidly iterate on video ad concepts for social media
* **Startups**: Create professional video content without expensive production costs
* **Social Media Managers**: Generate platform-specific video content at scale

## Connect with Me
* **Email**: Yaron@nofluff.online
* **YouTube**: https://www.youtube.com/@YaronBeen/videos
* **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
* **ROASPIG**: Check out ROASPIG.com for scalable media generation and automation solutions

#n8n #automation #ai #sora2 #texttovideo #openai #replicate #contentcreation #videomarketing #adcreatives

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
