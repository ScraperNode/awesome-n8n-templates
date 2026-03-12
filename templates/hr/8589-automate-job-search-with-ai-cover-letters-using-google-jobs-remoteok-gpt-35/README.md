# 👥 Automate job search with AI cover letters using Google Jobs, RemoteOK & GPT-3.5

> ⚡ **119 views** · 👥 [HR & Recruitment](../)

## Description

# Automated Job Search with AI-Generated Cover Letters

## 🎯 What This Template Does

This workflow transforms your job search from a time-consuming daily chore into a fully automated system. Every 24 hours, it searches Google Jobs and RemoteOK for positions matching your criteria, generates unique AI-powered cover letters for each role, and delivers a polished HTML email digest straight to your inbox.

## ⚡ Key Features

- **Multi-Platform Search**: Simultaneously queries Google Jobs (via SerpAPI) and RemoteOK
- **Smart Filtering**: Automatically removes duplicates and low-quality postings
- **AI-Powered Cover Letters**: Uses OpenAI GPT-3.5 to write personalized 60-word cover letters for each position
- **Beautiful Email Digests**: HTML-formatted emails with job details, descriptions, and apply buttons
- **Zero Manual Work**: Runs automatically every 24 hours
- **Cost-Effective**: ~$0 for first 3 months using free API tiers, then ~$3/month



## ⏱️ Time Saved

| Method | Time Required |
|--------|---------------|
| **Manual Job Search** | 2-3 hours daily |
| **With This Workflow** | 0 minutes (fully automated) |
| **Annual Time Savings** | ~800 hours per year |

## 📋 Prerequisites

### 1. SerpAPI Account
- **Cost**: FREE tier (100 searches/month)
- **Sign up**: https://serpapi.com/
- **What you need**: API key from dashboard

### 2. OpenAI Account
- **Cost**: FREE ($5 trial credits)
- **Sign up**: https://platform.openai.com/
- **What you need**: API key (requires phone verification)

### 3. Email Service
- **Cost**: FREE (use existing email)
- **Options**: Gmail, Outlook, or any SMTP provider
- **Gmail users**: Use App Password (requires 2FA enabled)

## 🚀 Quick Start Guide

### Step 1: Get API Keys (10 minutes)

**SerpAPI Setup**
1. Go to https://serpapi.com/ and sign up
2. Verify your email
3. Log in → Dashboard
4. Copy your API key

**OpenAI Setup**
1. Go to https://platform.openai.com/
2. Create account and verify phone number
3. Profile icon → View API keys
4. Create new secret key
5. Copy immediately (shown only once)

**Gmail Setup** (if using Gmail)
1. Google Account → Security
2. Enable 2-Step Verification
3. Search for "App Passwords"
4. Generate app password for Mail
5. Copy the 16-character password

### Step 2: Add Credentials to n8n (5 minutes)

**Add SerpAPI**
1. n8n Credentials → Add Credential
2. Select "HTTP Query Auth"
3. Name: `api_key`
4. Value: [paste your SerpAPI key]
5. Save

**Add OpenAI**
1. Add Credential → OpenAI
2. Paste your API key
3. Save

**Add SMTP**
1. Add Credential → SMTP
2. Configure:
   - Host: `smtp.gmail.com`
   - Port: `587`
   - Security: `STARTTLS`
   - Username: your-email@gmail.com
   - Password: [app password]
3. Save

### Step 3: Configure Your Search (2 minutes)

Click the **"Settings"** node and update:

**query** - Your target job title
- ✅ Good: `senior react developer`
- ✅ Good: `product manager saas`
- ✅ Good: `data scientist machine learning`
- ❌ Bad: `developer` (too broad)

**location** - Where you want to work
- For remote: `Remote`
- For city: `San Francisco, CA`
- For city: `New York, NY`
- For state: `Texas`
- 💡 Tip: Start with `Remote` for most options

**email** - Your email address
- Use the SAME email from SMTP setup
- Example: `yourname@gmail.com`

### Step 4: Connect Credentials

1. Click **"Search Google Jobs"** node → Select SerpAPI credential
2. Click **"Generate Letter"** node → Select OpenAI credential
3. Click **"Send Email"** node → Select SMTP credential
4. Click **"No Results Email"** node → Select SMTP credential

### Step 5: Test & Activate

1. Click **"Execute Workflow"** button (top right)
2. Watch nodes light up green ✅
3. Wait 30-60 seconds
4. Check your email inbox
5. If successful → Toggle **"Active"** switch
6. Done! You'll receive daily job digests

## 📧 What You'll Receive

Each day, you'll get an email containing:

- **Up to 4 highly relevant job listings**
- Company name and location for each
- Job description snippets
- **AI-generated personalized cover letter** for each position
- Direct **"Apply Now"** button
- Source attribution (Google Jobs vs RemoteOK)

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
