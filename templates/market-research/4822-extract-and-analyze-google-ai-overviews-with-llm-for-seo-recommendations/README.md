# 📊 Extract and analyze Google AI overviews with LLM for SEO recommendations

> ⚡ **2,638 views** · 📊 [Market Research & Insights](../)

## Description

# How it works

• **Extract AI Overviews from Google Search** - Receives data from browser extension via webhook
• **Convert HTML to Markdown** - Automatically processes and cleans AI Overview content  
• **Store in Google Sheets** - Archives all extracted AI Overviews with metadata and sources
• **Generate SEO Guidelines** - AI analyzes page content vs AI Overview to suggest improvements
• **Automate Analysis** - Batch process multiple URLs and schedule regular checks

# Set up steps

• **Import workflow** - Load the JSON template into your n8n instance (2 minutes)
• **Configure Google Sheets** - Set up OAuth connection and create spreadsheet with required columns (5 minutes)  
• **Set up AI provider** - Add OpenRouter API credentials for Gemini 2.5 Pro (3 minutes)
• **Install browser extension** - Deploy the companion Chrome/Firefox extension for data extraction (5 minutes)
• **Test webhook endpoint** - Verify the connection between extension and n8n workflow (2 minutes)

**Total setup time: ~15 minutes**

## What you'll need:
- Google account for Sheets integration
- [Google Sheet template](https://docs.google.com/spreadsheets/d/15xqZ2dTiLMoyICYnnnRV-HPvXfdgVeXowr8a7kU4uHk/edit?gid=0#gid=0) with required columns
- OpenRouter API key for Gemini 2.5 Pro model access
- Browser extension: [Chrome Extension](https://chromewebstore.google.com/detail/ai-overview-extractor/cbkdfibgmhicgnmmdanlhnebbgonhjje) or [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/ai-overview-extractor/)
- n8n instance (local or cloud)

## Use cases:
- **SEO agencies** - Monitor AI Overview presence for client keywords
- **Content marketers** - Analyze what content gets featured in AI Overviews
- **E-commerce** - Track AI Overview coverage for product-related searches
- **Research** - Build datasets of AI Overview content across different topics

The workflow comes with a free browser extension ([Chrome](https://chromewebstore.google.com/detail/ai-overview-extractor/cbkdfibgmhicgnmmdanlhnebbgonhjje) | [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ai-overview-extractor/)) that automatically extracts AI Overview content from Google Search and sends it via webhook to your n8n workflow for processing and analysis.

**GitHub Repository:** https://github.com/romek-rozen/ai-overview-extractor/

# Detailed Setup Instructions - AI Overview Extractor

## Prerequisites

- **n8n instance** (local or cloud) - version 1.95.3+
- **Google account** for Sheets integration
- **OpenRouter API account** for Gemini 2.5 Pro access
- **Browser** (Chrome/Firefox) for the extension

## Step 1: Import the Workflow

1. **Open n8n** and navigate to `Workflows`
2. **Click** "Add workflow" → "Import from JSON"
3. **Upload** the `AI_OVERVIES_EXTRACTOR_TEMPLATE.json` file
4. **Save** the workflow

## Step 2: Configure Google Sheets

### Create Google Sheets Document

1. **Create new Google Sheet** with these columns:
   ```
   extractedAt | searchQuery | sources | markdown | myURL | task | guidelines | key 
   ```

Here is public google sheet template: https://docs.google.com/spreadsheets/d/15xqZ2dTiLMoyICYnnnRV-HPvXfdgVeXowr8a7kU4uHk/edit?gid=0#gid=0 


2. **Copy the Google Sheets URL** (you'll need it for the workflow)

### Set up Google Sheets Credentials

1. **In n8n**, go to `Settings` → `Credentials`
2. **Click** "Add credential" → "Google Sheets OAuth2 API"
3. **Follow the OAuth setup** to authorize n8n access to Google Sheets
4. **Name the credential** (e.g., "Google Sheets AI Overview")

### Configure Google Sheets Nodes

**Update these nodes with your Google Sheets URL:**
- `Get URLs to Analyze`
- `Save AI Overview to Sheets` 
- `Save SEO Guidelines to Sheets`

**In each node:**
1. Set `documentId` to your Google Sheets URL
2. Set `sheetName` to your Google Sheets URL
3. Select your Google Sheets credential

## Step 3: Configure AI Provider (OpenRouter)

### Get OpenRouter API Key

1. **Sign up** at https://openrouter.ai/
2. **Generate API key** in your account settings
3. **Add credits** to your account

### Set up OpenRouter Credentials

1. **In n8n**, go to `Settings` → `Credentials`
2. **Click** "Add credential" → "OpenRouter API"
3. **Enter your API key**
4. **Name the credential** (e.g., "OpenRouter AI Overview")

### Configure OpenRouter Node

1. **Select the Gemini 2.5 Pro Model node**
2. **Choose your credential** from the dropdown
3. **Verify the model** (default: `google/gemini-2.5-pro-preview`)

## Step 4: Install Browser Extension

### Install in Chrome

**Official Extension (Recommended)**
1. **Visit**: https://chromewebstore.google.com/detail/ai-overview-extractor/cbkdfibgmhicgnmmdanlhnebbgonhjje
2. **Click "Add to Chrome"**

### Install in Firefox

**Official Add-on**
1. **Visit**: https://addons.mozilla.org/en-US/firefox/addon/ai-overview-extractor/
2. **Click "Add to Firefox"**

## Step 5: Configure Webhook Connection

### Get Webhook URL

1. **In n8n workflow**, click on the `Webhook` node
2. **Copy the webhook URL** (should be like: `http://localhost:5678/webhook/ai-overview-extractor-template-123456789`)

### Configure Extension

1. **Go to Google Search** and perform any search with AI Overview
2. **Click the browser extension button** (AI Overview Extractor)
3. **In webhook configuration section**, paste your webhook URL
4. **Click "Test"** - should show ✅ Test successful
5. **Click "Save"** to store the configuration

## Step 6: Activate and Test

### Activate Workflow

1. **In n8n**, toggle the workflow to "Active" (top right switch)
2. **Verify** all nodes are properly configured

### Test End-to-End

1. **Go to Google Search**
2. **Search for something** that shows AI Overview
3. **Use the extension** to extract AI Overview
4. **Send via webhook** - check your Google Sheets for the data
5. **Verify** the markdown conversion worked correctly

## Optional: Batch Analysis Setup

### For SEO Analysis Features

1. **In your Google Sheets**, add URLs in the `myURL` column
2. **Set `task` column** to "create guidelines"
3. **Run the workflow manually** or wait for the 15-minute scheduler
4. **Check `guidelines` column** for AI-generated SEO recommendations

## Troubleshooting

### Webhook Issues
- Ensure n8n is running on port 5678
- Check if workflow is activated
- Verify webhook URL format

### Google Sheets Errors
- Confirm OAuth credentials are working
- Check sheet URL format
- Verify column names match exactly
- Ensure nodes `Get URLs to Analyze`, `Save AI Overview to Sheets`, and `Save SEO Guidelines to Sheets` are properly configured

### OpenRouter Issues
- Check API key validity
- Ensure sufficient account credits
- Try different models if Gemini 2.5 Pro fails
- Verify the `Gemini 2.5 Pro Model` node is properly connected

### Extension Problems
- Check browser console for errors
- Verify extension is properly installed
- Ensure you're on google.com/search pages
- Confirm webhook URL is correctly configured in extension

## Next Steps

- **Customize AI prompts** in the `Generate SEO Recommendations` node for your specific needs
- **Adjust scheduler frequency** (default: 15 minutes)
- **Add more URL analysis** by populating Google Sheets
- **Monitor usage** and API costs

## Support

- **GitHub Issues**: https://github.com/romek-rozen/ai-overview-extractor/issues
- **n8n Community**: https://community.n8n.io/
- **Template Documentation**: Check the included README files

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Markdown, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
