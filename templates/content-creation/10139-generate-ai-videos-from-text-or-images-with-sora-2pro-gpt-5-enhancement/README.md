# 🎬 Generate AI videos from text or images with Sora 2/Pro & GPT-5 enhancement

> ⚡ **2,294 views** · 🎬 [Content Creation & Video](../)

## Description

Harness OpenAI's Sora 2 for instant video creation from text or images using fal.ai's API—powered by GPT-5 for refined prompts that ensure cinematic quality. This template processes form submissions, intelligently routes to text-to-video (with mandatory prompt enhancement) or image-to-video modes, and polls for completion before redirecting to your generated clip.

## 📋 What This Template Does
Users submit prompts, aspect ratios (9:16 or 16:9), models (sora-2 or pro), durations (4s, 8s, or 12s), and optional images via a web form. For text-to-video, GPT-5 automatically refines the prompt for optimal Sora 2 results; image mode uses the raw input. It calls one of four fal.ai endpoints (text-to-video, text-to-video/pro, image-to-video, image-to-video/pro), then loops every 60s to check status until the video is ready.
- Handles dual modes: Text (with GPT-5 enhancement) or image-seeded generation
- Supports pro upgrades for higher fidelity and longer clips
- Auto-uploads images to a temp host and polls asynchronously for hands-free results
- Redirects directly to the final video URL on completion

## 🔧 Prerequisites
- n8n instance with HTTP Request and LangChain nodes enabled
- fal.ai account for Sora 2 API access
- OpenAI account for GPT-5 prompt refinement

## 🔑 Required Credentials

### fal.ai API Setup
1. Sign up at fal.ai and navigate to Dashboard → API Keys
2. Generate a new key with "sora-2" permissions (full access recommended)
3. In n8n, create "Header Auth" credential: Name it "fal.ai", set Header Name to "Authorization", Value to "Key [Your API Key]"

### OpenAI API Setup
1. Log in at platform.openai.com → API Keys (top-right profile menu)
2. Click "Create new secret key" and copy it (store securely)
3. In n8n, add "OpenAI API" credential: Paste key, select GPT-5 model in the LLM node

## ⚙️ Configuration Steps
1. Import the workflow JSON into your n8n instance via Settings → Import from File
2. Assign fal.ai and OpenAI credentials to the relevant HTTP Request and LLM nodes
3. Activate the workflow—the form URL auto-generates in the trigger node
4. Test by submitting a sample prompt (e.g., "A cat chasing a laser"); monitor executions for video output
5. Adjust polling wait (60s node) for longer generations if needed

## 🎯 Use Cases
- **Social Media Teams**: Generate 9:16 vertical Reels from text ideas, like quick product animations enhanced by GPT-5 for professional polish
- **Content Marketers**: Animate uploaded images into 8s promo clips, e.g., turning a static ad graphic into a dynamic story for email campaigns
- **Educators and Trainers**: Create 4s explainer videos from outlines, such as historical reenactments, using pro mode for detailed visuals
- **App Developers**: Embed as a backend service to process user prompts into Sora 2 videos on-demand for creative tools

## ⚠️ Troubleshooting
- **API quota exceeded**: Check fal.ai dashboard for usage limits; upgrade to pro tier or extend polling waits
- **Prompt refinement fails**: Ensure GPT-5 credential is set and output matches JSON schema—test LLM node independently
- **Image upload errors**: Confirm file is JPG/PNG under 10MB; verify tmpfiles.org endpoint with a manual curl test
- **Endless polling loop**: Add an IF node after 10 checks to timeout; increase wait to 120s for 12s pro generations

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
