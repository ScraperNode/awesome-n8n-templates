# 📱 Generate viral Facebook posts with Gemini 2.0 & AI image generation

> ⚡ **3,580 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🚀 AI Facebook Post Generator - Complete Setup Guide

&gt; Transform your content ideas into viral Facebook posts with AI-powered automation in just 30 minutes!

---

## 📋 Prerequisites Checklist

**What you'll need before we start:**

- ✅ n8n instance (cloud or self-hosted)
- ✅ Facebook Business Page (*not personal profile*)
- ✅ Google account with Sheets & Gmail access
- ✅ Basic understanding of API credentials

**⏱️ Estimated Setup Time:** 30-45 minutes  
**🎯 Difficulty Level:** Intermediate  
**💰 Cost:** Free tier available for all services

---

## 🎨 What You'll Build

By the end of this guide, you'll have:

- 📝 **Smart Content Form** - Web form that captures your ideas
- 🤖 **AI Content Optimizer** - Gemini AI that polishes your writing
- 🖼️ **Auto Image Generator** - Custom visuals created automatically
- 📊 **Content Tracker** - Google Sheets logging for analytics
- 📱 **Facebook Publisher** - Direct posting to your page
- 📧 **Success Notifications** - Email confirmations with post links

---

# 🔧 Step-by-Step Setup

## Step 1: 📘 Facebook Integration Setup

### 🔸 1.1 Create Your Facebook App

**Why this matters:** This gives your workflow permission to post on your behalf.

1. Navigate to [Facebook Developers](https://developers.facebook.com/) 🌐
2. Click **"My Apps"** → **"Create App"**
3. Select **"Business"** as your app type
4. **App Name:** `AI-Content-Poster` *(or your preferred name)*
5. Hit **"Create App"**

&gt; 💡 **Pro Tip:** Choose a descriptive name - you'll see this in your Facebook activity logs

### 🔸 1.2 Configure App Settings

1. In your app dashboard: **"Add a Product"**
2. Find **"Facebook Login"** → **"Set Up"**
3. Navigate to **Settings** → **Basic**
4. **App Domains:** Add `app.n8n.cloud` *(for n8n cloud users)*
5. **Save changes** ✅

### 🔸 1.3 Generate Your Page Access Token

**This is the key that unlocks posting powers! 🔑**

1. Go to **Tools** → **Graph API Explorer**
2. Select your newly created app
3. Click **"Generate Access Token"**
4. **Required Permissions:** 
   - `pages_manage_posts`
   - `pages_read_engagement`
   - `pages_show_list`
5. Select your target Facebook page
6. **Copy the token** *(starts with `EAAG...`)*

⚠️ **Critical Step - Make Token Long-Lived:**
- In Graph API Explorer, make a GET request to:
```
/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_SHORT_TOKEN
```

### 🔸 1.4 Find Your Page ID

**Two methods to get your Page ID:**

**Method 1 - Direct from Facebook:**
1. Visit your Facebook page
2. Click **"About"** tab
3. Scroll to find **"Page ID"**

**Method 2 - API Explorer:**
1. Use Graph API Explorer
2. GET request to: `/me/accounts`
3. Find your page in the response

---

## Step 2: 🔍 Google Services Setup

### 🔸 2.1 Enable Required APIs

**Setting up your Google Cloud foundation:**

1. Visit [Google Cloud Console](https://console.cloud.google.com/) ☁️
2. **Create new project** or select existing
3. **"APIs & Services"** → **"Library"**
4. **Enable these APIs:**
   - ✅ Google Sheets API
   - ✅ Gmail API  
   - ✅ Google Drive API *(optional)*

### 🔸 2.2 Create Service Account

**This creates a "robot" account for automated access:**

1. **"APIs & Services"** → **"Credentials"**
2. **"Create Credentials"** → **"Service Account"**
3. **Name:** `ai-facebook-automation`
4. **"Create and Continue"**
5. Skip role assignment → **"Continue"**
6. **"Done"** ✅

### 🔸 2.3 Download Credentials File

1. Click your service account email
2. **"Keys"** tab → **"Add Key"** → **"Create New Key"**
3. Choose **"JSON"** format
4. **Download and save securely** 📁

&gt; 🔒 **Security Note:** This file contains sensitive credentials. Store it safely!

### 🔸 2.4 Prepare Your Google Sheets

**Create your data tracking system:**

**📊 Sheet 1: Content Log**
- **Purpose:** Track all generated content
- **Columns:**
  - A: Date *(Ngày)*
  - B: Short Content *(Nội dung ngắn)*  
  - C: Full Content *(Nội dung đầy đủ)*

**📝 Sheet 2: Input Tracking**
- **Purpose:** Log form submissions
- **Columns:**
  - A: Date
  - B: Time
  - C: Content

**🔗 Important:** Share both sheets with your service account email *(found in the JSON file)*

---

## Step 3: 🤖 AI Services Configuration

### 🔸 3.1 Get Your Gemini API Key

**Power up your AI content generation:**

1. Head to [Google AI Studio](https://makersuite.google.com/app/apikey) 🎨
2. Sign in with Google account
3. **"Create API Key"**
4. **Copy the key** *(starts with `AIza...`)*

&gt; 💰 **Cost Info:** Gemini offers generous free tier limits - perfect for getting started!

---

## Step 4: ⚙️ n8n Workflow Configuration

### 🔸 4.1 Import the Magic ✨

1. **Copy the workflow JSON** from the template
2. In n8n: **"Import from JSON"**
3. **Paste** the workflow code
4. **"Import"** to load your new automation

### 🔸 4.2 Configure Your Credentials

**🔑 Facebook Graph API Setup:**
1. **Settings** → **Credentials** → **"Add Credential"**
2. Search: **"Facebook Graph API"**
3. **Access Token:** Your Page Access Token from Step 1.3
4. **Test connection** → **Save as:** `Facebook Page Access`

**🔍 Google Services Setup:**
1. **"Add Credential"** → **"Google Service Account"**
2. **Upload your JSON file** from Step 2.3
3. **Test connection** → **Save as:** `Google Services`

**🧠 Gemini AI Setup:**
1. **"Add Credential"** → **"Google PaLM API"**
2. **Enter your Gemini key** from Step 3.1
3. **Save as:** `Gemini AI`

### 🔸 4.3 Customize Node Settings

**📱 Update Facebook Configuration:**

**In "Facebook Graph API" node:**
- Replace `"113732581629527"` with **your Page ID** from Step 1.4

**In "Facebook Upload Img" node:**
- Replace `"113732581629527"` with **your Page ID** from Step 1.4

**📊 Update Google Sheets:**

**In "save content" node:**
- Replace Document ID with your **Content Log Sheet ID**

**In "Append row in sheet" node:**
- Replace Document ID with your **Input Tracking Sheet ID**

&gt; 💡 **Finding Sheet ID:** It's the long string in your Google Sheets URL after `/spreadsheets/d/`

**📧 Update Notification Email:**

**In "Send a message" node:**
- Replace `xxx@gmail.com` with **your email address**
- Configure Gmail credentials

---

## Step 5: 🧪 Testing & Validation

### 🔸 5.1 Component Testing

**📊 Test Google Sheets Connection:**
1. Right-click **"Append row in sheet"** node
2. **"Execute Node"**
3. ✅ Verify test row appears in your sheet

**🤖 Test Gemini AI:**
1. Right-click **"Basic LLM Chain"** node
2. **"Edit Input Data"** → Add test content
3. **Execute** → ✅ Verify AI response quality

**🖼️ Test Image Generation:**
1. Right-click **"HTTP Request"** node
2. Ensure valid prompt from previous step
3. **Execute** → ✅ Check for base64 image data

**📱 Test Facebook Upload:**
1. Run full workflow with test content
2. ✅ Check your Facebook page for new post
3. ✅ Verify image uploaded correctly

### 🔸 5.2 End-to-End Victory Test 🎉

1. **"Execute Workflow"** on trigger node
2. **Submit test content** through the form
3. **Monitor each node** execution
4. **🎊 Celebrate your first AI-generated post!**

---

## 🎯 Success Indicators

**Your setup is complete when you see:**

- ✅ Form accepts and processes content
- ✅ AI generates optimized text + image prompt  
- ✅ Custom image appears in Facebook post
- ✅ Content logged in Google Sheets
- ✅ Success email in your inbox
- ✅ Professional-looking post on your Facebook page

---

## 🚨 Troubleshooting Quick Fixes

### Facebook Issues
- **Token Expired?** → Generate new long-lived token
- **Permission Denied?** → Check page admin rights
- **Invalid Page ID?** → Double-check Page ID format

### Google Sheets Problems  
- **403 Forbidden?** → Share sheet with service account
- **Sheet Not Found?** → Verify Sheet ID in URL
- **Column Errors?** → Match exact column names

### AI Content Issues
- **Empty Responses?** → Check Gemini API quotas
- **Poor Quality?** → Adjust AI prompts
- **JSON Errors?** → Validate parsing logic

---

## 🎨 Customization Ideas

**Make it uniquely yours:**

- 🎨 **Brand Voice:** Adjust AI prompts for your tone
- ⏰ **Scheduling:** Add time delays for strategic posting
- 📈 **Analytics:** Connect performance tracking tools
- 🔄 **Multi-Platform:** Extend to Instagram, LinkedIn
- 👥 **Team Features:** Add approval workflows

---

## 🎉 You Did It!

**Congratulations! You've built an AI-powered content machine that will save you hours every week.**

**What's Next?**
- Test with different content types
- Monitor performance in Google Sheets
- Refine AI prompts for better results
- Share your success with the community!

**Need Help?** 🤝
- Join [n8n Discord](https://discord.com/invite/XPKeKXeB7d)
- Visit [Community Forum](https://community.n8n.io/)
- Check [n8n Documentation](https://docs.n8n.io/)

---

*Ready to revolutionize your content creation? Your AI assistant is waiting! 🚀*

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Facebook Graph API, Gmail, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
