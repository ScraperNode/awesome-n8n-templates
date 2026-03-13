# 🎬 Generate LinkedIn posts with Gemini content & Imagen images for instant publishing

> ⚡ **1,520 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# 🚀 AI-Powered LinkedIn Post Generator with Automated Image Creation

## 📋 Overview

Transform any topic into professional LinkedIn posts with AI-generated content and custom images! This workflow automates the entire process from topic input to published LinkedIn post, including professional image generation using Google's Imagen 4 API.

## ✨ Key Features

- 🤖 **AI Content Generation**: Uses Google Gemini to create engaging LinkedIn posts
- 🎨 **Professional Image Creation**: Automatically generates images using Google Imagen 4
- 📱 **Direct LinkedIn Publishing**: Posts content and images directly to your LinkedIn feed
- 🔄 **Form-Based Input**: Simple web form to submit topics
- 📝 **Content Formatting**: Converts markdown to LinkedIn-friendly format

## 🔧 What This Workflow Does

1. **📝 Form Submission**: User submits a topic through a web form
2. **🗺️ Data Mapping**: Maps the topic for AI processing
3. **🧠 AI Content Generation**: Google Gemini creates post content and image prompt
4. **🎯 Content Normalization**: Cleans and formats the AI output
5. **🖼️ Image Generation**: Creates professional images using Google Imagen 4
6. **📤 LinkedIn Registration**: Registers image upload with LinkedIn API
7. **🔄 Binary Conversion**: Converts base64 image to binary buffer
8. **⬆️ Image Upload**: Uploads image to LinkedIn
9. **📋 Content Curation**: Converts markdown to LinkedIn format
10. **⏳ Processing Wait**: Ensures image is fully processed
11. **🚀 Post Publishing**: Publishes the complete post to LinkedIn

## 🛠️ Prerequisites & Setup

### 🔑 Required Credentials

#### 1. LinkedIn OAuth 2.0 Setup 🔗

You'll need to create a LinkedIn app with the following **OAuth 2.0 scopes**:

- ✅ **openid** - Use your name and photo
- ✅ **profile** - Use your name and photo  
- ✅ **w_member_social** - Create, modify, and delete posts, comments, and reactions on your behalf
- ✅ **email** - Use the primary email address associated with your LinkedIn account

**Steps to get LinkedIn credentials:**
1. Go to [LinkedIn Developer Portal](https://developer.linkedin.com/)
2. Create a new app or use existing one
3. Configure OAuth 2.0 settings with the scopes above
4. Get your access token from the authentication flow

#### 2. Google Cloud Platform Setup ☁️

**Required GCP Services to Enable:**
- 🎯 **Vertex AI API** - For Imagen 4 image generation
- 🔐 **Cloud Resource Manager API** - For project management
- 🛡️ **IAM Service Account Credentials API** - For authentication

**Steps to get GCP token:**
1. Install Google Cloud SDK
2. Authenticate: `gcloud auth login`
3. Set project: `gcloud config set project YOUR_PROJECT_ID`
4. Get access token: `gcloud auth print-access-token`

&gt; 💡 **Note**: The access token expires after 1 hour. For production use, consider using service account credentials.

### 🔧 n8n Node Credentials Setup

1. **LinkedIn OAuth2 API**: Configure with your LinkedIn app credentials
2. **HTTP Bearer Auth (LinkedIn)**: Use your LinkedIn access token
3. **HTTP Bearer Auth (Google Cloud)**: Use your GCP access token
4. **Google Gemini API**: Configure with your Google AI API key

## 📊 Workflow Structure

```mermaid
graph LR
    A[📝 Form Trigger] --&gt; B[🗺️ Mapper]
    B --&gt; C[🤖 AI Agent]
    C --&gt; D[🎯 Normalizer]
    D --&gt; E[🖼️ Text to Image]
    E --&gt; F[📤 Register Upload]
    F --&gt; G[🔄 Binary Converter]
    G --&gt; H[⬆️ Upload Image]
    H --&gt; I[📋 Content Curator]
    I --&gt; J[⏳ Wait]
    J --&gt; K[🚀 Publish to LinkedIn]
```

## 🎨 Image Generation Details

The workflow uses **Google Imagen 4** with these parameters:
- 📐 **Aspect Ratio**: 1:1 (perfect for LinkedIn)
- 🎯 **Sample Count**: 1 options generated
- 🛡️ **Safety Setting**: Block few (content filtering)
- 💧 **Watermark**: Enabled
- 🌍 **Language**: Auto-detect

## 📝 Content Processing

The AI generates content in this JSON structure:
```json
{
  "post_content": {
    "text": "Your engaging LinkedIn post content with hashtags"
  },
  "image_prompt": {
    "description": "Professional image generation prompt"
  }
}
```

## 🔄 LinkedIn API Integration

### Image Upload Process:
1. **Register Upload**: Creates upload session with LinkedIn
2. **Binary Upload**: Uploads image as binary data
3. **Post Creation**: Creates post with text and image reference

### API Endpoints Used:
- 📤 `POST /v2/assets?action=registerUpload` - Register image upload
- 📝 `POST /v2/ugcPosts` - Create LinkedIn post

## ⚠️ Important Notes

- 🕐 **Rate Limits**: LinkedIn has API rate limits - monitor your usage
- ⏱️ **Processing Time**: Image generation can take 10-30 seconds
- 🔄 **Token Refresh**: GCP tokens expire hourly in development
- 📏 **Content Length**: LinkedIn posts have character limits
- 🖼️ **Image Size**: Generated images are optimized for LinkedIn

## 🚀 Getting Started

1. **Import the workflow** into your n8n instance
2. **Configure all credentials** as described above
3. **Enable required GCP services** in your project
4. **Test the form trigger** with a sample topic
5. **Monitor the execution** for any errors
6. **Adjust the AI prompt** if needed for your content style

## 🛠️ Customization Options

- 🎨 **Modify image style** in the system prompt
- 📝 **Adjust content tone** in the AI agent configuration  
- 🔄 **Change wait time** between upload and publish
- 🎯 **Add content filters** for brand compliance
- 📊 **Include analytics tracking** for post performance

## 💡 Tips for Best Results

- 🎯 **Be specific** with your topic inputs
- 🏢 **Use professional language** for business content
- 🔍 **Review generated content** before publishing
- 📈 **Monitor engagement** to refine your prompts
- 🔄 **Test thoroughly** before production use

## 🐛 Troubleshooting

**Common Issues:**
- ❌ **"Invalid credentials"**: Check token expiration
- ❌ **"Image upload failed"**: Verify LinkedIn API permissions
- ❌ **"Content generation error"**: Check Gemini API quota
- ❌ **"Post creation failed"**: Ensure proper wait time after image upload

## 📚 Additional Resources

- 📖 [LinkedIn Marketing API Documentation](https://docs.microsoft.com/en-us/linkedin/marketing/)
- 🤖 [Google Vertex AI Imagen Documentation](https://cloud.google.com/vertex-ai/docs/generative-ai/model-reference/imagen-api)
- 🔧 [n8n Documentation](https://docs.n8n.io/)
- 🚀 [Google Gemini API Guide](https://ai.google.dev/docs)

---

💬 **Need Help?** Join the n8n community forum or check the troubleshooting section above!

🌟 **Found this useful?** Give it a star and share your improvements with the community!

## 🔗 Nodes Used

HTTP Request, AI Agent, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
