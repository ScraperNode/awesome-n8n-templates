# 🎬 Text-to-image generation with Google Gemini & enhanced prompts via Telegram Bot

> ⚡ **4,477 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# 🤖 AI Image Generator Telegram Bot
Transform simple text descriptions into stunning AI-generated images through a Telegram bot powered by Google's Gemini 2.0 Flash image. This workflow automatically enhances user prompts with professional prompt engineering techniques and delivers high-quality images directly to your Telegram chat.
## 🎯 What This Workflow Does
This automation creates an intelligent Telegram bot that:
- **Receives text messages** from users describing what image they want
- **Enhances prompts** using AI-powered prompt engineering to add artistic details, lighting, composition, and style specifications
- **Generates images** using Google's Gemini 2.0 Flash image generation model
- **Delivers results** instantly back to the user's Telegram chat
## ⚡️ Key Features
- **Smart Prompt Enhancement**: Automatically transforms basic requests like "a cat on a windowsill" into detailed, professional prompts with lighting, composition, and style details
- **Professional Image Quality**: Leverages Google's latest Gemini 2.0 Flash model for high-quality image generation
- **Instant Delivery**: Images are generated and sent back to users within seconds
- **User-Friendly**: Simple text-to-image conversion through familiar Telegram interface
- **Structured Output**: Uses JSON schema to ensure consistent prompt formatting
## 🛠️ How It Works
1. **Telegram Trigger**: Listens for incoming messages from users
2. **AI Prompt Enhancement**: Uses Gemini 2.5 Flash Lite to analyze and expand user requests into detailed prompts
3. **Structured Processing**: Formats the enhanced prompt using JSON schema for consistency
4. **Image Generation**: Sends the enhanced prompt to Gemini 2.0 Flash image generation API
5. **File Conversion**: Converts the generated image data to a file format
6. **Delivery**: Sends the generated image back to the user via Telegram
## 🎭 Use Cases
- **Creative Content Creation**: Generate artwork, illustrations, and visual concepts
- **Social Media Content**: Create unique images for posts and stories
- **Concept Visualization**: Turn ideas into visual representations
- **Educational Materials**: Generate images for presentations and learning materials
- **Personal Projects**: Create custom artwork for personal use
## 📋 Prerequisites
Before setting up this workflow, you'll need:
### Required Accounts & APIs:
- **Telegram Bot Token**: Create a bot via [@BotFather](https://t.me/botfather)
- **Google AI Studio Account**: Access to [Gemini API](https://aistudio.google.com/apikey) services
### Required Credentials:
- Telegram Bot API credentials
- Google Gemini API key with access to:
  - Gemini 2.5 Pro (for prompt enhancement)
  - Gemini 2.0 Flash Preview (for image generation)
## 🚀 Setup Instructions
1. **Import the Workflow**: Copy the workflow JSON into your n8n instance
2. **Configure Telegram Bot**:
   - Create a new bot using [@BotFather](https://t.me/botfather)
   - Add your bot token to the Telegram credentials in n8n
3. **Set Up Google Gemini API**:
   - Create API key from [Google AI Studio](https://aistudio.google.com/apikey) and add to n8n credentials
4. **Activate the Workflow**: Enable the workflow to start receiving messages
## 💡 Customization Options
- **Prompt Templates**: Modify the prompt enhancement instructions for different artistic styles
- **Image Parameters**: Adjust generation settings for different image formats and qualities
- **Response Formats**: Customize how images are delivered (with captions, multiple formats, etc.)
## 📊 Example Interaction
**User Input**: "Generate a beautiful image of a dragon from game of thrones"
**Enhanced Prompt**: "A majestic, formidable dragon, reminiscent of those from Game of Thrones, perched atop a jagged, snow-capped mountain peak. The dragon is depicted with immense, leathery wings unfurled, scales glinting with iridescent blues and deep charcoals under the harsh, cold light. Its eyes glow with an inner, fiery amber. The scene is captured with a dramatic, low-angle wide shot, emphasizing the dragon's sheer scale against a turbulent, stormy sky filled with dark, bruised clouds and streaks of lightning. The atmosphere is oppressive and foreboding, with biting wind and swirling snow creating a sense of raw power and danger. The color palette is dominated by icy blues, stark greys, deep blacks, and the contrasting fiery glow of the dragon's eyes and perhaps a hint of internal fire. Rendered in a hyperrealistic, cinematic digital art style, with exceptional attention to detail on the scales, musculature, and the texture of the rocky environment. Lighting is dramatic and high-contrast, with sharp highlights on the dragon's form and deep, impenetrable shadows. Quality specifications include ultra-high detail, 8K resolution, photorealistic rendering, and an epic, awe-inspiring mood, evoking the grandeur and terror of powerful fantasy creatures."
**Result**:
<a href="https://ibb.co/hJpRqHZL"><img src="https://i.ibb.co/W4SWTFPG/file.png" alt="file" /></a>
## 🔧 Technical Details
- **AI Models**: Google Gemini 2.5 Pro (prompt enhancement) + Gemini 2.0 Flash Preview (image generation)
- **Messaging**: Telegram Bot API
- **Output Format**: High-quality images in standard formats
- **Processing Time**: Typically 10-15 seconds per image for Gemini 2.5 Flash and 25-30 seconds Gemini for 2.5 Pro

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, Structured Output Parser, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
