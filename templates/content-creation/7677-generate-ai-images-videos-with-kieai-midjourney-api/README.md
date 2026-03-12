# 🎬 Generate AI images & videos with KIE.AI Midjourney API

> ⚡ **3,735 views** · 🎬 [Content Creation & Video](../)

## Description

## Generate AI Images & Videos with KIE.AI Midjourney API
### Overview
Generate high-quality AI images and videos using KIE.AI's Midjourney API through an intuitive form interface. This n8n workflow supports three distinct content creation modes, delivering professional results with automated processing and real-time progress monitoring.
**Supported Modes:**
- **Text-to-Image** (`mj_txt2img`): Generate original images from written descriptions
- **Image-to-Image** (`mj_img2img`): Transform or enhance existing images with AI
- **Image-to-Video** (`mj_video`): Animate still images into short video clips
Users interact only through a simple form interface, requiring no coding skills. After submitting a request, the system automatically calls the KIE.AI API, monitors progress in real-time, and retrieves the final output once ready.
### Perfect for
Content creators, designers, marketers, and developers who need to quickly generate diverse AI visual content with automated processing and professional quality results.
### Prerequisites
- **KIE.AI Account**: Sign up at [KIE.AI](https://kie.ai) to obtain your free or paid API key.
- **n8n Instance**: Active n8n instance (cloud or self-hosted) with HTTP Request and form submission capabilities.
- **AI Prompt Knowledge**: Basic understanding of AI prompts for optimal generation results.
- **Reference Images** (Optional): Publicly accessible image URLs for image-to-image or image-to-video generation.
### Quick Setup
#### 1. **Get API Key**
Register at [KIE.AI](https://kie.ai) and generate your API key. Store it securely and never share it publicly.
#### 2. **Configure Form Fields**
Set up these fields in your "On Form Submission" node:
- **`tasktype`** (Required): Select generation mode
  - `mj_txt2img` for text-to-image generation
  - `mj_img2img` for image-to-image generation  
  - `mj_video` for image-to-video generation
- **`prompt`** (Required): Text description for your content generation
- **`imgurl`** (Optional): Image URL array for image-to-image or image-to-video generation
  - **Important**: Leave empty for text-to-image generation (`mj_txt2img`)
- **`api_key`** (Required): Your KIE.AI API key for authentication
#### 3. **Test & Use**
1. Click "Execute Workflow" in n8n.
2. Access the generated form URL.
3. Fill in your details and submit.
4. Wait for processing (workflow polls every 10 seconds).
5. Results will be displayed automatically.
### Customization Tips
#### Write Detailed Prompts:
Include specific details for better results:
- **Style**: realistic, anime, cinematic, watercolor, oil painting
- **Composition**: close-up, wide shot, portrait, landscape
- **Lighting**: dramatic, soft, neon, natural, studio
- **Subject Details**: actions, scenes, movements, visual elements
#### Example Enhanced Prompt:
"Cinematic portrait of a cyberpunk character with neon blue lighting, close-up composition, dramatic shadows, futuristic mood"
#### Leverage Multiple Modes:
- Start with text-to-image for initial concepts.
- Use image-to-image to refine and enhance results.
- Apply image-to-video to animate your best images.
- Combine modes for complex creative workflows.
#### Common Use Cases:
- Social media content creation.
- Marketing material development.
- Product visualization.
- Storyboarding and prototyping.
- Creative asset generation.
### Troubleshooting
- **API Key Invalid**: Verify your key is correct and active.
- **Generation Fails**: Check prompt length and content appropriateness.
- **Slow Processing**: Video generation can take 2-5 minutes; this is normal.
- **Image URL Issues**: Ensure URLs are publicly accessible and properly formatted.
**Keywords:** KIE.AI API, AI image generation, AI video generation, text-to-image, image-to-video, automated workflows, n8n template, AI content creation

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
