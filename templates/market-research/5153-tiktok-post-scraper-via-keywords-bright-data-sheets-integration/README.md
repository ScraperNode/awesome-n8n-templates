# 📊 TikTok post scraper via keywords | Bright Data + Sheets integration

> ⚡ **4,202 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

# 🎵 TikTok Post Scraper via Keywords | Bright Data + Sheets Integration

## 📝 Workflow Description
Automatically scrapes TikTok posts based on keyword search using Bright Data API and stores comprehensive data in Google Sheets for analysis and monitoring.

---

## 🔄 How It Works

This workflow operates through a simple, automated process:

- **Keyword Input:** User submits search keywords through a web form
- **Data Scraping:** Bright Data API searches TikTok for posts matching the keywords
- **Processing Loop:** Monitors scraping progress and waits for completion
- **Data Storage:** Automatically saves all extracted data to Google Sheets
- **Result Delivery:** Provides comprehensive post data including metrics, user info, and media URLs

---

## ⏱️ Setup Information

**Estimated Setup Time:** 10-15 minutes

This includes importing the workflow, configuring credentials, and testing the integration. Most of the process is automated once properly configured.

---

## ✨ Key Features

### 📝 Keyword-Based Search
Search TikTok posts using specific keywords

### 📊 Comprehensive Data Extraction
Captures post metrics, user profiles, and media URLs

### 📋 Google Sheets Integration
Automatically organizes data in spreadsheets

### 🔄 Automated Processing
Handles scraping progress monitoring

### 🛡️ Reliable Scraping
Uses Bright Data's professional infrastructure

### ⚡ Real-time Updates
Live status monitoring and data processing

---

## 📊 Data Extracted

| Field | Description | Example |
|-------|-------------|---------|
| url | TikTok post URL | https://www.tiktok.com/@user/video/123456 |
| post_id | Unique post identifier | 7234567890123456789 |
| description | Post caption/description | Check out this amazing content! #viral |
| digg_count | Number of likes | 15400 |
| share_count | Number of shares | 892 |
| comment_count | Number of comments | 1250 |
| play_count | Number of views | 125000 |
| profile_username | Creator's username | @creativity_master |
| profile_followers | Creator's follower count | 50000 |
| hashtags | Post hashtags | #viral #trending #fyp |
| create_time | Post creation timestamp | 2025-01-15T10:30:00Z |
| video_url | Direct video URL | https://video.tiktok.com/tos/... |

---

## 🚀 Setup Instructions

### Step 1: Prerequisites

- n8n instance (self-hosted or cloud)
- Bright Data account with TikTok scraping dataset access
- Google account with Sheets access
- Basic understanding of n8n workflows

### Step 2: Import Workflow

1. Copy the provided JSON workflow code
2. In n8n: Go to **Workflows → + Add workflow → Import from JSON**
3. Paste the JSON code and click **Import**
4. The workflow will appear in your n8n interface

### Step 3: Configure Bright Data

1. In n8n: Navigate to **Credentials → + Add credential → Bright Data API**
2. Enter your Bright Data API credentials
3. Test the connection to ensure it's working
4. Update the workflow nodes with your dataset ID: `gd_lu702nij2f790tmv9h`
5. Replace `BRIGHT_DATA_API_KEY` with your actual API key

### Step 4: Configure Google Sheets

1. Create a new Google Sheet or use an existing one
2. Copy the Sheet ID from the URL
3. In n8n: **Credentials → + Add credential → Google Sheets OAuth2 API**
4. Complete OAuth setup and test connection
5. Update the Google Sheets node with your Sheet ID
6. Ensure the sheet has a tab named "Tiktok by keyword"

### Step 5: Test the Workflow

1. Activate the workflow using the toggle switch
2. Access the form trigger URL to submit a test keyword
3. Monitor the workflow execution in n8n
4. Verify data appears in your Google Sheet
5. Check that all fields are populated correctly

---

## ⚙️ Configuration Details

### Bright Data API Settings
- **Dataset ID:** `gd_lu702nij2f790tmv9h`
- **Discovery Type:** `discover_new`
- **Search Method:** `keyword`
- **Results per Input:** 2 posts per keyword
- **Include Errors:** true

### Workflow Parameters
- **Wait Time:** 1 minute between status checks
- **Status Check:** Monitors until scraping is complete
- **Data Format:** JSON response from Bright Data
- **Error Handling:** Automatic retry on incomplete scraping

---

## 📋 Usage Guide

### Running the Workflow

1. Access the form trigger URL provided by n8n
2. Enter your desired keyword (e.g., "viral dance", "cooking tips")
3. Submit the form to start the scraping process
4. Wait for the workflow to complete (typically 2-5 minutes)
5. Check your Google Sheet for the extracted data

### Best Practices

- Use specific, relevant keywords for better results
- Monitor your Bright Data usage to stay within limits
- Regularly backup your Google Sheets data
- Test with simple keywords before complex searches
- Review extracted data for accuracy and completeness

---

## 🔧 Troubleshooting

### Common Issues

#### 🚨 Scraping Not Starting
- Verify Bright Data API credentials are correct
- Check dataset ID matches your account
- Ensure sufficient credits in Bright Data account

#### 🚨 No Data in Google Sheets
- Confirm Google Sheets credentials are authenticated
- Verify sheet ID is correct
- Check that the "Tiktok by keyword" tab exists

#### 🚨 Workflow Timeout
- Increase wait time if scraping takes longer
- Check Bright Data dashboard for scraping status
- Verify keyword produces available results

---

## 📈 Use Cases

### Content Research
Research trending content and hashtags in your niche to inform your content strategy.

### Competitor Analysis
Monitor competitor posts and engagement metrics to understand market trends.

### Influencer Discovery
Find influencers and creators in specific topics or industries.

### Market Intelligence
Gather data on trending topics, hashtags, and user engagement patterns.

---

## 🔒 Security Notes

- Keep your Bright Data API credentials secure
- Use appropriate Google Sheets sharing permissions
- Monitor API usage to prevent unexpected charges
- Regularly rotate API keys for better security
- Comply with TikTok's terms of service and data usage policies

---

## 🎉 Ready to Use!

Your TikTok scraper is now configured and ready to extract valuable data. Start with simple keywords and gradually expand your research as you become familiar with the workflow.

**Need Help?** Visit the n8n community forum or check the Bright Data documentation for additional support and advanced configuration options.

---

For any questions or support, please contact: [Email](mailto:info@incrementors.com) or
[fill out this form](https://www.incrementors.com/contact-us/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
