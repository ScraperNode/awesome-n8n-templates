# 🎬 Video background removal and image composition with Google Drive integration

> ⚡ **67 views** · 🎬 [Content Creation & Video](../)

## Description

Automated workflow to remove video backgrounds and composite foreground video on static image backgrounds. Perfect for creating branded content, professional presentations, and consistent visual branding across your videos.

## How it works

• **Upload inputs**: Provide foreground video URL and background image URL (both must be publicly accessible)
• **Remove background**: API automatically removes video background with AI-powered segmentation
• **Composite on image**: Video is centered on custom image background with aspect ratio preserved
• **Save to Drive**: Final composed video is automatically uploaded to Google Drive with shareable link

## Set up steps

**⏱️ Total setup time: ~7 minutes**

• **Get VideoBGRemover API Key** (~2 min): Visit https://videobgremover.com/api-management, sign up, and copy your API key
• **Add API key to n8n** (~2 min): Go to Settings → Variables, add `VIDEOBGREMOVER_KEY` with your API key as value. Find the api key -&gt; https://videobgremover.com/n8n
• **Connect Google Drive** (~2 min): Click "Upload to Google Drive" node, click "Connect", and authorize n8n
• **Test workflow** (~1 min): Use manual trigger with sample URLs provided in the "Sample URLs (Edit Here)" node

**Use cases:**
- Branded content with company backgrounds and logos
- Product demos with custom imagery or brand colors
- AI avatars on professional office/studio backgrounds
- Social media content requiring consistent visual branding
- Profile videos with custom scenes or patterns
- Presentation videos with company branding

**Pricing:** VideoBGRemover API charges $0.50-$2.00 per minute of video processed. Free trial credits available.

**Triggers:** Webhook (for automation) or Manual (for testing)

**Processing time:** Typically 3-5 minutes per minute of video

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
