# 📱 Create branded LinkedIn carousels with GPT-4o-mini, Figma templates & templated

> ⚡ **608 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🚀 AI-Powered LinkedIn Post Automation with Figma Templates

## 🧩 How It Works

This workflow automatically generates professional, branded LinkedIn posts using your custom Figma designs. Perfect for marketers, agencies, content creators, and businesses who want to maintain consistent branding while automating social media content creation.

**Key Features:**
- Design-first approach using Figma templates
- AI-powered content generation (optional)
- High-quality image generation from templates
- Automatic LinkedIn publishing
- Telegram notifications for success/failure tracking

**High-Level Workflow:**

1. **Template Selection**: Fetch your pre-designed Figma templates from [Templated](https://templated.cometai.eu)
2. **Content Preparation**: Set static content or configure the prompts in the agents to generate with AI (ChatGPT/Claude)
3. **Image Generation**: Create branded images with dynamic content via Templated MCP server
4. **LinkedIn Publishing**: Automatically post text and image to your LinkedIn profile or company page (single image or carousel post)
5. **Notification**: Receive Telegram alert on success/failure (optional)

---

## ⚙️ Set Up Steps (Quick Overview)

🕐 **Estimated Setup Time:** ~15 minutes

1. **Create Templated Account**: Sign up at templated.cometai.eu, import Figma designs, generate API key
2. **Configure LinkedIn OAuth**: Set up LinkedIn Developer app with OAuth2 credentials for automatic posting
3. **Connect Templated MCP**: Add API key authentication to MCP server nodes for template and image generation
4. **Set Up Telegram** (Optional): Create bot for workflow notifications
5. **Customize Content**: Add static fields or configure AI nodes for dynamic content generation
6. **Schedule & Activate**: Set posting schedule (daily, weekly, etc.) and activate workflow

---

## 💡 Important Notes

- **Figma Integration**: Uses real Figma files as templates - maintain professional design quality without manual recreation
- **Template Variables**: Supports dynamic placeholders in Figma text layers for content replacement
- **Character Limits**: Respects maxLength settings to ensure text fits your design
- **Rate Limits**: LinkedIn allows 25 posts/day (personal), 100/day (company pages)
- **AI-Ready**: Easily integrate ChatGPT, Claude, or other AI models for content generation
- **Batch Generation**: Generate multiple posts at once with different templates

---

## 🛠 Detailed Node Breakdown

### **1. Schedule Trigger**
- **Action**: Triggers the workflow on a schedule (daily, weekly, custom cron)
- **Configuration**: Set your desired posting frequency
- **Alternative**: Use manual trigger for on-demand posts

### **2. LinkedIn Post Writer** (OpenAI Chat Model)
- **Action**: AI generates engaging LinkedIn post content based on your topic/prompt
- **Tools**: Simple Memory, Think, Date & Time, Search latest news
- **Output**: Professional post text ready for publication

### **3. Carousel Ideator** (Templated MCP Client)
- **Action**: Connects to Templated MCP server to fetch available templates
- **Configuration**: Uses your Templated API key for authentication
- **Output**: Available template IDs and configurations for carousel generation

### **4. Generate the Carousel** (POST to Templated MCP)
- **Action**: Sends content to Templated server with template ID and field data
- **Input**: Template selection, content fields (title, subtitle, etc.)
- **Output**: Encoded carousel images generated from Figma templates

### **5. Extract from File**
- **Action**: Extracts generated image data from the MCP response
- **Process**: Parses the encoded image string for LinkedIn upload

### **6. Get LinkedIn User Info** (HTTP Request)
- **Action**: Fetches your LinkedIn profile URN for post attribution
- **Authentication**: OAuth2 LinkedIn credentials
- **Output**: User ID required for posting

### **7. Initialize Upload URN**
- **Action**: Requests upload URL from LinkedIn for carousel document upload
- **Process**: Prepares LinkedIn's upload mechanism for multi-image posts

### **8. Edit Fields**
- **Action**: Maps and formats data for LinkedIn API requirements
- **Process**: Structures image data and post metadata correctly

### **9. Convert to Binary**
- **Action**: Converts image data to binary format
- **Key**: Required format for LinkedIn document upload API

### **10. Upload Posts as Binary**
- **Action**: Uploads the carousel document to LinkedIn's servers
- **Process**: Multi-part upload of generated images

### **11. Get Uploaded File URN**
- **Action**: Retrieves LinkedIn's asset ID for the uploaded content
- **Output**: Asset URN needed for post creation

### **12. Switch** (Conditional Logic)
- **Action**: Handles success/error routing
- **Routes**: Directs to LinkedIn post creation on success, error notification on failure

### **13. Create LinkedIn Post** (HTTP Request)
- **Action**: Creates the final LinkedIn post with carousel and text
- **Authentication**: OAuth2 with LinkedIn posting permissions
- **Result**: Published carousel post on your LinkedIn feed

### **14. Success/Error Notifications** (Telegram)
- **Action**: Sends notification about workflow execution status
- **Success**: Confirms post published with details
- **Error**: Alerts you to failures with error message and debugging info

---

## ⏱ Execution Time Breakdown

**Total Estimated Execution Time:** ~10–30 seconds per workflow run

- Template Fetch: ~1–2 seconds
- Content Preparation: ~1–2 seconds
- Image Generation: ~5–15 seconds
- LinkedIn Post Upload: ~2–5 seconds
- Telegram Notification: ~1–2 seconds

*Note: AI content generation (if added) adds ~5-10 seconds*

---

## 🚀 Ready to Get Started?

**What You'll Need:**
- Free Templated account at templated.cometai.eu
- Figma designs with placeholder text
- LinkedIn Developer app (free)
- n8n instance (cloud or self-hosted)

**Quick Start:**
1. Import this workflow to your n8n instance
2. Follow the setup guide in the workflow notes
3. Test with a single post
4. Schedule for automatic posting
5. Sit back and watch your LinkedIn feed grow! 🎉

---

## 📝 Notes & Customizations

### **Template Customization**
- Create multiple templates in Figma for different content types (quotes, announcements, tips, etc.)
- Rotate templates for visual variety
- Use template descriptions to guide AI content generation
- Set character limits per placeholder to prevent overflow

### **Content Generation Options**
- **Static Mode**: Define fields manually for recurring post types
- **AI Mode**: Connect ChatGPT/Claude for dynamic, topic-based content
- **Hybrid Mode**: Mix static brand elements with AI-generated copy
- **Scheduled Variety**: Rotate between templates and content styles

### **Advanced Features**
- **Multi-Platform**: Duplicate workflow for Twitter, Instagram, Facebook
- **A/B Testing**: Track performance across different templates
- **Content Calendar**: Pull scheduled posts from Notion/Airtable
- **Analytics Integration**: Log post IDs for engagement tracking

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
