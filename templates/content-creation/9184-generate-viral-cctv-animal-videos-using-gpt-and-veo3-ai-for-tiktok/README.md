# 🎬 Generate viral CCTV animal videos using GPT and Veo3 AI for TikTok

> ⚡ **1,771 views** · 🎬 [Content Creation & Video](../)

## Description

### **Overview**
This n8n workflow automates the creation of viral CCTV-style animal videos using AI, perfect for TikTok content creators looking to capitalize on the popular security camera animal footage trend. The workflow generates realistic surveillance-style videos featuring random animals in humorous situations, complete with authentic CCTV aesthetics.

### **How It Works**
The workflow runs on a 4-hour schedule and automatically:

1. **AI Prompt Generation**: Uses GPT-5 to create hyper-realistic CCTV-style prompts with random animals, locations, and funny actions
2. **Video Creation**: Generates videos using Veo3 AI with authentic security camera aesthetics (black & white, grainy, timestamp overlay)
3. **Content Optimization**: AI creates viral TikTok titles and hashtags optimized for maximum engagement
4. **Multi-Platform Publishing**: Automatically uploads to TikTok via Blotato and sends to Telegram
5. **Data Tracking**: Stores all content in a data table for analytics and management

### **Key Features**
- **Authentic CCTV Style**: Black & white, grainy quality, timestamp overlays, night vision effects
- **Random Content**: 50+ animals, 30+ locations, 50+ hilarious actions for endless variety
- **AI-Powered Titles**: GPT-4 generates compelling, SEO-optimized titles and viral hashtags
- **Automated Publishing**: Direct TikTok posting with proper AI-generated content labeling
- **Multi-Channel Distribution**: TikTok + Telegram for maximum reach
- **Content Management**: Built-in data tracking and status management

### **Perfect For**
- TikTok content creators
- Social media managers
- AI automation enthusiasts
- Viral content strategists
- Pet/animal content creators

### **Requirements**
- OpenAI API key (for GPT-5 and GPT-4)
- Veo3 AI API access
- Blotato account (for TikTok posting)
- Telegram bot token
- n8n Cloud or self-hosted instance

### **Customization Options**
- Modify animal lists, locations, and actions
- Adjust scheduling frequency
- Change video aspect ratios
- Add more social platforms
- Customize AI prompts for different styles

## **Categories**
- Content Creation
- AI Automation
- Social Media
- Multimodal AI

## **Tags**
`#AI` `#TikTok` `#VideoGeneration` `#CCTV` `#Animals` `#ViralContent` `#Automation` `#SocialMedia`

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
