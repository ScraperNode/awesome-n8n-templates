# 🎬 Convert Telegram messages to professional LinkedIn posts with Gemini AI & approval workflow

> ⚡ **855 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# AI-Powered LinkedIn Publishing via Telegram Workflow

![image.png](fileId:2135)

Transform your LinkedIn presence with this intelligent n8n workflow that converts simple Telegram messages into professional LinkedIn posts through AI-powered content generation and approval workflows.

## 🎯 **Who Is This For?**

- **Content Creators & Influencers** seeking to maintain consistent LinkedIn presence
- **Marketing Professionals** managing multiple client accounts
- **Business Owners** wanting to automate thought leadership content
- **Social Media Managers** streamlining content workflows
- **Entrepreneurs** maximizing content efficiency while maintaining quality

## 🚀 **Benefits**

- **Time Efficiency**: Reduces content creation time by 80-90%
- **Quality Consistency**: Maintains professional standards across all posts
- **Content Diversity**: Leverages multiple sources for rich, varied content
- **Real-Time Relevance**: Incorporates latest industry trends and news
- **Approval Control**: Human oversight ensures brand alignment
- **Scalability**: Handles multiple users and high-volume content creation

## 🔧 **Core Features**

### **Smart Content Classification**
- **Multi-Input Processing**: Handles URLs, topics, direct content, or combinations
- **Intelligent Routing**: Automatically determines whether to scrape, search, or generate directly
- **Context Preservation**: Maintains original user intent throughout the process

### **Advanced Content Gathering**
- **Web Scraping**: Firecrawl integration for extracting article content from URLs
- **Real-Time Search**: Brave Search API for latest industry trends and news
- **Content Synthesis**: Merges multiple sources into coherent, valuable insights

### **AI-Powered Content Generation**
- **Google Gemini Integration**: Creates professional, LinkedIn-optimized posts
- **Platform-Specific Formatting**: Mobile-friendly paragraphs, engaging hooks, strategic CTAs
- **SEO Optimization**: Relevant hashtags and keyword integration
- **Character Management**: Ensures posts stay within LinkedIn's 2800 character limit

### **Interactive Approval System**
- **Telegram Preview**: Rich preview with post analytics and formatting
- **Action Buttons**: Approve, Edit, or Reject with single-click convenience
- **Edit Workflow**: AI-powered rewriting based on user feedback
- **Real-Time Updates**: Instant feedback and status notifications

### **Comprehensive Content Tracking**
- **Google Sheets Integration**: Complete audit trail of all posts and content metrics
- **Content Analytics**: Character counts, hashtag usage, source attribution
- **User Authorization**: Secure access control with authorized user validation
- **Post Management**: Unique ID generation for tracking and reference

## 🔄 **How It Works**

1. **Message Reception**: Secure Telegram trigger with user validation
2. **Content Classification**: AI analyzes input type and extracts actionable elements
3. **Dynamic Routing**: Intelligent branching based on content requirements:
   - **URL Path**: Web scraping → content extraction → processing
   - **Topic Path**: Web search → latest information gathering → synthesis
   - **Direct Path**: Immediate processing for ready-to-post content
4. **Content Synthesis**: Merges all gathered information into comprehensive context
5. **AI Generation**: Creates LinkedIn-optimized post with professional formatting
6. **Interactive Approval**: Telegram preview with approval workflow
7. **Publishing**: Direct LinkedIn posting upon approval
8. **Content Logging**: Complete tracking in Google Sheets

## 📈 **Use Cases**

1. **Daily Industry Updates**: Transform news URLs into thought leadership posts
2. **Content Repurposing**: Convert articles and research into LinkedIn insights
3. **Trend Commentary**: Generate posts about trending topics with real-time data
4. **Educational Content**: Create informative posts from technical documentation
5. **Personal Branding**: Maintain consistent professional presence with minimal effort

## 🛠️ **Technical Requirements**

### **Required Community Nodes**
Install these community nodes in your n8n instance:

```bash
# Brave Search Integration
@brave/n8n-nodes-brave-search

# Firecrawl Web Scraping
@mendable/n8n-nodes-firecrawl

# LangChain AI Integration
@n8n/n8n-nodes-langchain
```

### **APIs & Services Required**
- Google Gemini (Content generation and classification)
- Firecrawl API (Web scraping)
- Brave Search API (Real-time search)
- Telegram Bot API (Interface and notifications)
- LinkedIn API (Content publishing)
- Google Sheets API (Content tracking and logging)

## 🔑 **Setup Guide**

### **1. Telegram Bot Setup**
1. Search for `@BotFather` on Telegram
2. Send `/newbot` and follow prompts
3. Copy the bot token
4. Send `/setprivacy` to BotFather and set to `Disable`

### **2. Google Gemini API**
1. Visit [Google AI Studio](https://makersuite.google.com/)
2. Sign in and click **"Get API Key"** → **"Create API Key"**
3. Copy your API key
4. Free tier: 60 requests per minute

### **3. Firecrawl API**
1. Visit [Firecrawl.dev](https://firecrawl.dev/)
2. Sign up and go to **Dashboard** → **API Keys**
3. Copy your API key
4. Free tier: 500 pages/month

### **4. Brave Search API**
1. Visit [Brave Search API](https://api.search.brave.com/)
2. Sign up and create application
3. Copy subscription key
4. Free tier: 1,000 queries/month

### **5. LinkedIn API**
1. Visit [LinkedIn Developers](https://developer.linkedin.com/)
2. Create app with required details
3. Request **"Share on LinkedIn"** product
4. Copy Client ID and Client Secret
5. Add redirect URL: `https://your-n8n-domain.com/rest/oauth2-credential/callback`

### **6. Google Sheets API**
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Google Sheets API
3. Create OAuth 2.0 Client ID
4. Copy Client ID and Client Secret

## 🛠️ **Installation Steps**

### **Phase 1: Preparation**
1. Install required community nodes
2. Restart n8n after installation
3. Create Google Sheet for logging
4. Set up Telegram Bot

### **Phase 2: Import and Configure**
1. Import workflow JSON in n8n
2. Configure all API credentials
3. Test each connection

### **Phase 3: Customization**
1. Update authorized user ID in "Authorized Telegram Users" node
2. Configure Google Sheets document ID
3. Test Telegram connection

### **Phase 4: Testing**
Test with different input types:
- URL only: `https://example.com/article`
- Topic only: `artificial intelligence trends`
- Mixed: `AI trends https://example.com/ai-news`

## 🎨 **Customization Options**

### **Content Personalization**
- Modify AI prompts to match your brand voice
- Adjust content length and formatting preferences
- Customize hashtag strategies and CTA approaches
- Configure approval workflow steps

### **Source Integration**
- Add additional search engines or content sources
- Integrate with RSS feeds or news APIs
- Connect to internal knowledge bases
- Customize web scraping parameters

## 🔒 **Security Features**

- **User Authorization**: Whitelist-based access control
- **Secure Token Management**: Encrypted API key handling
- **Data Privacy**: Secure processing of scraped content
- **Audit Trail**: Complete logging of all user interactions

## 🔮 **Future Expansion Possibilities**

This workflow serves as a foundation for:
- **Performance Analytics Module**: LinkedIn engagement tracking
- **Content Optimization Engine**: A/B testing and refinement
- **Multi-Platform Publishing**: Expand to Twitter, Facebook, Instagram
- **Advanced Scheduling**: Time-optimized posting
- **Content Series Management**: Automated follow-ups

## 💡 **Why Choose This Workflow**

This represents a complete LinkedIn content automation solution that maintains quality and personal touch while dramatically reducing time and effort. Perfect for professionals who want to maximize LinkedIn impact without sacrificing content quality or spending hours on manual creation.

**Ready to transform your LinkedIn presence? Install this workflow and start automating your professional content creation today!**

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, LinkedIn, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
