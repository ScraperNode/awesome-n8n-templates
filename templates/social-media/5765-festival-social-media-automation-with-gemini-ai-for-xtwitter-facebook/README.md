# 📱 Festival social media automation with Gemini AI for X/Twitter & Facebook

> ⚡ **1,348 views** · 📱 [Social Media & Email Marketing](../)

## Description

# 🎉 Festival Social Media Automation with Gemini AI for X/Twitter & Facebook
Transform your festival marketing with this comprehensive automation workflow that creates and posts culturally authentic social media content across multiple platforms daily.
## ⚙️ What this workflow does
This workflow automatically:
- **Fetches festival data** from Google Sheets based on today's date
- **Generates AI-powered prompts** for both image creation and social media content
- **Creates stunning festival images** using Google Gemini 2.0 Flash Preview
- **Produces platform-specific content** optimized for X (Twitter) and Facebook
- **Posts automatically** with proper image attachments and error handling
## ✨ Key Features
### 🎯 **Intelligent Content Generation**
- AI-powered prompt generation tailored to each festival's cultural context
- Platform-specific content optimization (character limits, hashtag strategies)
- Culturally sensitive and authentic messaging
### 🎨 **Visual Content Creation**
- Automated image generation using Google Gemini 2.0 Flash Preview
- Festival-themed graphics with vibrant, culturally appropriate designs
- Optimized for social media engagement
### 📲 **Multi-Platform Publishing**
- Simultaneous posting to X (Twitter) and Facebook
- Platform-specific formatting and optimization
- Built-in error handling and backup posting methods
### ⏰ **Fully Automated**
- Daily execution at 8:00 AM
- Date-based festival data retrieval
- Zero manual intervention required
## 📱 Apps and Integrations
- **Google Sheets** - Festival calendar and data storage
- **Google Gemini 2.0 Flash Preview** - AI content and image generation
- **X (Twitter)** - Social media posting
- **Facebook Graph API** - Facebook page posting
- **Schedule Trigger** - Daily automation
## 🛠️🕊️ Setup Instructions
### 1. 📊 Google Sheets Configuration
1. Create a Google Sheets document with columns: `Date`, `Name of the Festival`, `Description`
2. Format dates as DD/MM/YYYY
3. Connect your Google Sheets credential in n8n
### 2. 🤖 Google Gemini API Setup
1. Obtain a Google AI Studio API key from [Google AI Studio](https://aistudio.google.com/apikey)
2. Configure the Google Gemini credential in n8n
3. Ensure you have access to Gemini 2.0 Flash Preview
### 3. 🕊️X (Twitter) Credentials Setup
**Important:** Due to X API limitations, you'll need TWO separate OAuth2 credentials: [X API](https://developer.x.com/)
#### For Image Upload (Generic OAuth2):
1. Create a new OAuth2 credential with these settings:
   - Grant Type: `PKCE`
   - Authorization URL: `https://x.com/i/oauth2/authorize`
   - Access Token URL: `https://api.x.com/2/oauth2/token`
   - Scope: `media.write offline.access tweet.read users.read`
   - **Note:** Cannot combine `media.write` with `tweet.write` in the same credential
#### For Tweet Posting (X OAuth2):
1. Use the predefined X OAuth2 credential
2. Configure with scopes: `tweet.write offline.access tweet.read users.read`
### 4. 📘Facebook Graph API Setup
1. Create a Facebook App and get your access token from [Meta for Developers](https://developers.facebook.com/tools/explorer/)
2. Configure the Facebook Graph API credential
3. Update the node with your Facebook page ID
## 🎬 How to Use
1. **Populate your Google Sheets** with festival data for upcoming dates
2. **Activate the workflow** - it will run automatically daily at 8:00 AM
3. **Monitor the execution** - check logs for successful posts or any errors
4. **Customize content** by modifying the prompt generation logic if needed
## 🔄 Workflow Components
### 🔗 Data Flow
1. **Daily Trigger** → **Get Today's Date** → **Fetch Festival Data**
2. **Generate AI Prompts** → **Create Image & Content**
3. **Process Media** → **Merge Data** → **Post to Platforms**
### 🛡️ Error Handling
- Backup HTTP posting method for X if primary method fails
- Continue execution even if individual platform posting fails
- Comprehensive error logging for troubleshooting
## 🎨 Customization Options
### ✍️ Content Personalization
- Modify the prompt generation logic for different content styles
- Adjust platform-specific character limits and hashtag strategies
- Customize image generation prompts for different visual styles
### 🌐 Platform Extension
- Add Instagram, LinkedIn, or other social media platforms
- Implement additional content formats (Stories, Reels, etc.)
- Create platform-specific posting schedules
### 📊 Data Sources
- Connect to different data sources (Airtable, Notion, CMS)
- Add support for multiple festival categories
- Implement content approval workflows
## 💡 Best Practices
### 📝 Content Quality
- Regularly review and update your festival database
- Monitor AI-generated content for cultural sensitivity
- Test different prompt styles for optimal engagement
### 🔑 API Management
- Monitor API usage limits for all connected services
- Implement rate limiting for high-volume posting
- Set up alerts for credential expiration
### ⏰ Scheduling
- Consider time zones for optimal posting times
- Implement staggered posting across platforms
- Add weekend/holiday scheduling logic
## 🔧 Troubleshooting
### ⚠️ Common Issues
- **Image upload fails**: Check OAuth2 credentials and API limits
- **Content generation errors**: Verify Gemini API key and model availability
- **Date matching issues**: Ensure date format consistency in Google Sheets
### ⚡️ Performance Tips
- Optimize image generation prompts for faster processing
- Use structured output parsing for consistent results
- Implement content caching for repeated festivals
## 🎯 Use Cases
- **Cultural Organizations** - Automate festival announcements and celebrations
- **Event Management Companies** - Scale social media presence across multiple events
- **Tourism Boards** - Promote local festivals and cultural events
- **Marketing Agencies** - Manage multiple client festival campaigns
- **Community Organizations** - Engage audiences with regular cultural content
## ⭐️ Benefits
- **Time Savings** - Eliminate manual social media posting
- **Consistency** - Maintain regular posting schedule
- **Cultural Authenticity** - AI-generated content respects cultural context
- **Multi-Platform Reach** - Simultaneous posting increases visibility
- **Scalability** - Handle unlimited festivals with zero additional effort
This workflow transforms festival marketing from a time-consuming manual process into a fully automated, culturally intelligent system that engages audiences across multiple platforms while maintaining authenticity and relevance.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, X (Formerly Twitter), Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
