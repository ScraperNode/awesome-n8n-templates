# 🎬 Create authentic UGC video ads with GPT-4o, ElevenLabs & WaveSpeed lip-sync

> ⚡ **1,770 views** · 🎬 [Content Creation & Video](../)

## Description

**This n8n template demonstrates how to create authentic-looking User Generated Content (UGC) advertisements using AI image generation, voice synthesis, and lip-sync technology. The workflow transforms product images into realistic customer testimonial videos that mimic genuine user reviews and social media content.**

**Use cases are many:** Generate authentic UGC-style ads for social media campaigns, create customer testimonial videos without hiring influencers, produce localized UGC content for different markets, automate TikTok/Instagram-style product reviews, or scale UGC ad production for e-commerce brands!

### **Good to know**

- The workflow creates UGC-style content that appears genuine and authentic
- Uses multiple AI services: OpenAI GPT-4o for analysis, ElevenLabs for voice synthesis, and WaveSpeed AI for image generation and lip-sync
- Voice synthesis costs vary by ElevenLabs plan (typically $0.18-$0.30 per 1K characters)
- WaveSpeed AI pricing: ~$0.039 per image generation, additional costs for lip-sync processing
- Processing time: ~3-5 minutes per complete UGC video
- Optimized for Malaysian-English content but easily adaptable for global markets

### **How it works**

1. **Product Input:** The Telegram bot receives product images to create UGC ads for
2. **AI Analysis:** ChatGPT-4o analyzes the product to understand brand, colors, and target demographics
3. **UGC Content Creation:** AI generates authentic-sounding testimonial scripts and detailed prompts for realistic customer scenarios
4. **Character Generation:** WaveSpeed AI creates believable customer avatars that look like real users reviewing products
5. **Voice Synthesis:** ElevenLabs generates natural, conversational audio using gender-appropriate voice models
6. **UGC Video Production:** WaveSpeed AI combines generated characters with audio to create TikTok/Instagram-style review videos
7. **Content Delivery:** Final UGC videos are delivered via Telegram, ready for social media posting

The workflow produces UGC-style content that maintains authenticity while showcasing products in realistic, relatable scenarios that resonate with target audiences.

### **How to use**

1. **Setup Credentials:** Configure OpenAI API, ElevenLabs API, WaveSpeed AI API, Cloudinary, and Telegram Bot credentials
2. **Deploy Workflow:** Import the template and activate the workflow
3. **Send Product Images:** Use the Telegram bot to send product images you want to create UGC ads for
4. **Automatic UGC Generation:** The workflow will automatically create authentic-looking customer testimonial videos
5. **Receive UGC Content:** Get both testimonial images and final UGC videos ready for social media campaigns

**Pro tip:** The workflow automatically detects product demographics and creates appropriate customer personas. For best UGC results, use clear product images that show the item in use.

### **Requirements**

- **OpenAI API** account for GPT-4o product analysis and UGC script generation
- **ElevenLabs API** account for authentic voice synthesis (requires voice cloning credits)
- **WaveSpeed AI API** account for realistic character generation and lip-sync processing
- **Cloudinary** account for UGC content storage and hosting
- **Telegram Bot** setup for content input and delivery
- **n8n** instance (cloud or self-hosted)

### **Customizing this workflow**

**Platform-Specific UGC:** Modify prompts to create UGC content optimized for TikTok, Instagram Reels, YouTube Shorts, or Facebook Stories.

**Brand Voice:** Adjust testimonial scripts and character personas to match your brand's target audience and tone.

**Regional Adaptation:** Customize language, cultural references, and character demographics for different markets and demographics.

**UGC Style Variations:** Create different UGC formats - unboxing videos, before/after comparisons, day-in-the-life content, or product demonstrations.

**Influencer Personas:** Develop specific customer personas (age groups, lifestyles, interests) to create targeted UGC content for different audience segments.

**Content Scaling:** Set up batch processing to generate multiple UGC variations for A/B testing different approaches and styles.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
