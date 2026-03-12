# 🎬 Create videos with AI-generated backgrounds using Gemini and VideoBGRemover

> ⚡ **215 views** · 🎬 [Content Creation & Video](../)

## Description

Automated workflow that generates custom AI image backgrounds from text prompts using Gemini's Nano Banana (native image generation), removes video backgrounds, and composites videos on AI-generated scenes. Create any background you can imagine without needing stock images.

## How it works

• **Describe background**: Provide video URL and text prompt describing desired background scene (e.g., "modern office with city skyline at golden hour")
• **AI generates image**: Gemini creates a background image from your prompt in ~10-20 seconds
• **Upload to Drive**: Generated background is saved to Google Drive and made publicly accessible
• **Remove & composite**: Video background is removed and composited on AI-generated scene with centered template
• **Save final video**: Completed video is uploaded to Google Drive with shareable link

## Set up steps

**⏱️ Total setup time: ~5 minutes**

• **Get Gemini API Key** (~1 min): Visit https://aistudio.google.com/apikey, create new API key, add to n8n Settings → Variables as `GEMINI_KEY`
• **Get VideoBGRemover API Key** (~2 min): Visit https://videobgremover.com/n8n, sign up, add to n8n as `VIDEOBGREMOVER_KEY`
• **Connect Google Drive** (~2 min): Click "Save Background Image to Drive" node, click "Connect", authorize n8n

**Use cases:**
- Marketing videos with custom branded environments tailored to your message
- Product demos with unique AI-generated backgrounds that match your product aesthetic
- Social media content with creative scenes you can't find in stock libraries
- AI avatars placed in AI-generated worlds
- Presentations with custom backgrounds generated for specific topics
- A/B testing different background variations for the same video

**Pricing:**
- Gemini: ~$0.03 per generated image
- VideoBGRemover: $0.50-$2.00 per minute of video
- Total: ~$0.53-$2.03 per video

**Triggers:** Webhook (for automation) or Manual (for testing)

**Processing time:** Typically 5-7 minutes total

**Prompt tips:** Be descriptive and specific. Instead of "office," try: "A modern minimalist office with floor-to-ceiling windows overlooking a city skyline at golden hour. Warm sunlight, polished concrete floors, sleek wooden desks, green plants."

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
