# 🎬 VEO3 video generator with AI optimization and Google Drive storage

> ⚡ **20,972 views** · 🎬 [Content Creation & Video](../)

## Description

# Welcome to my VEO3 Video Generator Workflow!

This automated workflow transforms simple text descriptions into professional 8-second videos using Google's cutting-edge VEO3 AI model. Users submit video ideas through a web form, and the system automatically generates optimized prompts, creates high-quality videos with native audio, and delivers them via Google Drive - all powered by Claude 4 Sonnet for intelligent prompt optimization.

![image.png](fileId:1453)

## This workflow has the following sequence:
1. **VEO3 Generator Form** - Web form interface for users to input video content, format, and duration
2. **Video Prompt Generator** - AI agent powered by Claude 4 Sonnet that:
   - Analyzes user input for video content requirements
   - Creates factual, professional video titles
   - Generates detailed VEO3 prompts with subject, context, action, style, camera motion, composition, ambiance, and audio elements
   - Optimizes prompts for 16:9 landscape format and 8-second duration
3. **Create VEO3 Video** - Submits the optimized prompt to fal.ai VEO3 API for video generation
4. **Wait 30 seconds** - Initial waiting period for video processing to begin
5. **Check VEO3 Status** - Monitors the video generation status via fal.ai API
6. **Video completed?** - Decision node that checks if video generation is finished
   - If not completed: Returns to wait cycle
   - If completed: Proceeds to video retrieval
7. **Get VEO3 Video URL** - Retrieves the final video download URL from fal.ai
8. **Download VEO3 Video** - Downloads the generated MP4 video file
9. **Merge** - Combines video data with metadata for final processing
10. **Save Video to Google Drive** - Uploads the video to specified Google Drive folder
11. **Video Output** - Displays completion message with Google Drive link to user

## The following accesses are required for the workflow:
- **Anthropic API** (Claude 4 Sonnet): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/anthropic/)
- **Fal.ai API** (VEO3 Model): Create API key at [https://fal.ai/dashboard/keys](https://fal.ai/dashboard/keys)
- **Google Drive API**: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/)

## Workflow Features:
- **User-friendly web form**: Simple interface for video content input
- **AI-powered prompt optimization**: Claude 4 Sonnet creates professional VEO3 prompts
- **Automatic video generation**: Leverages Google's VEO3 model via fal.ai
- **Status monitoring**: Real-time tracking of video generation progress
- **Google Drive integration**: Automatic upload and sharing of generated videos
- **Structured output**: Consistent video titles and professional prompt formatting
- **Audio optimization**: VEO3's native audio generation with ambient sounds and music

## Current Limitations:
- **Format**: Only 16:9 landscape videos supported
- **Duration**: Only 8-second videos supported
- **Processing time**: Videos typically take 60-120 seconds to generate

## Use Cases:
- **Content creation**: Generate videos for social media, websites, and presentations
- **Marketing materials**: Create promotional videos and advertisements
- **Educational content**: Produce instructional and explanatory videos
- **Prototyping**: Rapid video concept development and testing
- **Creative projects**: Artistic and experimental video generation
- **Business presentations**: Professional video content for meetings and pitches

Feel free to [contact me via LinkedIn](https://www.linkedin.com/in/friedemann-schuetz), if you have any questions!

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, Anthropic Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
