# 📊 Scrape TikTok influencer profiles with Bright Data API to Google Sheets

> ⚡ **4,610 views** · 📊 [Market Research & Insights](../)

## Description

# 🎬 TikTok Influencer Scraper (URL Input) via Bright Data + n8n & Sheets

A comprehensive n8n automation that scrapes TikTok influencer profiles using Bright Data's TikTok dataset and automatically saves detailed profile information to Google Sheets.

## 📋 Overview

This workflow provides an automated TikTok influencer data collection solution that scrapes comprehensive profile information and saves it to Google Sheets. Perfect for influencer marketing research, competitor analysis, social media monitoring, and marketing campaign planning.

## ✨ Key Features

📝 **Form-Based Input**: Simple web form to submit TikTok profile URLs
🤖 **Bright Data Integration**: Uses Bright Data's TikTok dataset for reliable scraping
⏳ **Status Monitoring**: Intelligent polling system to check scraping progress
🔄 **Retry Logic**: Automatic retry mechanism with 30-second intervals
📊 **Data Extraction**: Comprehensive profile data including engagement metrics
📈 **Google Sheets Storage**: Automatic data storage and organization
⚡ **Error Handling**: Built-in error handling and status reporting
🎯 **Custom Fields**: Configurable output fields for specific data needs

## 🎯 What This Workflow Does

### Input
- **Profile URLs**: TikTok profile URLs submitted through web form
- **Custom Fields**: Configurable data fields for extraction
- **Country Settings**: Geo-targeting for accurate data collection

### Processing
1. **Form Submission**: User submits TikTok profile URL through web form
2. **API Trigger**: Sends profile data to Bright Data for scraping
3. **Status Polling**: Continuously checks scraping progress
4. **Wait & Retry**: Implements 30-second delays between status checks
5. **Data Retrieval**: Fetches complete profile data when ready
6. **Sheet Update**: Saves extracted data to Google Sheets
7. **Status Reporting**: Provides completion status and messages

### Output Data Points

| Field | Description | Example |
|-------|-------------|---------|
| Account ID | Unique TikTok account identifier | @username123 |
| Nickname | Display name on profile | "John Doe" |
| Biography | Profile bio/description | "Content creator & influencer" |
| Followers | Number of followers | 1,250,000 |
| Following | Number of accounts following | 500 |
| Likes | Total likes across all videos | 50,000,000 |
| Videos Count | Total number of videos posted | 1,200 |
| Profile URL | Direct link to TikTok profile | https://www.tiktok.com/@username |
| Profile Picture | Profile image URL | https://p16-sign-sg.tiktokcdn.com/... |
| Profile Picture HD | High-definition profile image | https://p16-sign-sg.tiktokcdn.com/... |
| Is Verified | Verification status | true/false |
| Bio Link | External link in bio | https://linktr.ee/username |
| Like Engagement Rate | Engagement rate based on likes | 5.2% |
| Comment Engagement Rate | Engagement rate based on comments | 2.1% |
| Top Videos | List of top performing videos | [video_objects] |
| Region | Geographic region | "US" |
| Is Under Age 18 | Age status indicator | true/false |

## 🚀 Setup Instructions

### Prerequisites
- n8n instance (self-hosted or cloud)
- Google account with Sheets access
- Bright Data account with TikTok dataset access
- Valid TikTok profile URLs for testing
- 10-15 minutes for setup

### Step 1: Import the Workflow
1. Copy the JSON workflow code from the provided file
2. In n8n: **Workflows** → **+ Add workflow** → **Import from JSON**
3. Paste JSON and click **Import**

### Step 2: Configure Bright Data
1. **Set up Bright Data credentials:**
   - In n8n: **Credentials** → **+ Add credential** → **HTTP Request Generic Credential**
   - Name: "Bright Data API"
   - Authentication: Bearer Token
   - Token: Your Bright Data API key
   - Test the connection

2. **Configure dataset:**
   - Ensure you have access to TikTok dataset (`gd_l1villgoiiidt09ci`)
   - Verify dataset permissions in Bright Data dashboard
   - Check dataset limits and pricing

### Step 3: Configure Google Sheets Integration
1. **Create a Google Sheet:**
   - Go to Google Sheets
   - Create a new spreadsheet named "TikTok Influencer Data"
   - Create a sheet tab named "TikTok profile by url"
   - Copy the Sheet ID from URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

2. **Set up Google Sheets credentials:**
   - In n8n: **Credentials** → **+ Add credential** → **Google Sheets OAuth2 API**
   - Complete OAuth setup and test connection

3. **Prepare your data sheet with columns:**
   - Column A: Account ID
   - Column B: Nickname
   - Column C: Biography
   - Column D: Followers
   - Column E: Following
   - Column F: Likes
   - Column G: Videos Count
   - Column H: Profile URL
   - Column I: Is Verified
   - Column J: Bio Link
   - Column K: Like Engagement Rate
   - Column L: Comment Engagement Rate
   - Column M: Region
   - Column N: Status
   - Column O: Message

### Step 4: Update Workflow Settings
1. **Update API credentials:**
   - Open "Sends profile URLs to Bright Data to trigger scraping" node
   - Replace `BRIGHT_DATA_API_KEY` with your actual API key
   - Update dataset ID if different

2. **Update Google Sheets nodes:**
   - Open "Google Sheets" node
   - Replace document ID: `1OeqtCFm4Wek9DI5YFOWQXTpQJS-SJxC10iAPKEKkmiY`
   - Select your Google Sheets credential
   - Choose the correct sheet/tab name

3. **Configure form settings:**
   - Open "Search by Profile URL" node
   - Customize form title and field labels as needed
   - Note the webhook URL for form access

### Step 5: Test & Activate
1. **Add test profiles:**
   - Access the form using the webhook URL
   - Submit 1-2 TikTok profile URLs for testing
   - Use full URLs (e.g., `https://www.tiktok.com/@username`)

2. **Test the workflow:**
   - Submit a test profile through the form
   - Monitor execution in n8n
   - Verify data appears in Google Sheet
   - Check for any error messages

## 📖 Usage Guide

### Submitting TikTok Profiles
1. Navigate to your form URL (found in Form Trigger node)
2. Enter TikTok profile URL in the format: `https://www.tiktok.com/@username`
3. Click Submit to start the scraping process
4. Wait for processing (typically 1-3 minutes)

### Understanding the Process
The workflow follows this sequence:
1. **Form Submission** → Profile URL captured
2. **API Trigger** → Scraping job submitted to Bright Data
3. **Status Polling** → Checks every 30 seconds if data is ready
4. **Data Retrieval** → Fetches complete profile information
5. **Sheet Update** → Saves data to Google Sheets

### Monitoring Progress
- Check n8n execution logs for real-time status
- Bright Data dashboard shows scraping progress
- Google Sheets will populate when data is ready
- Status column shows "ready" when complete

### Reading the Results
Your Google Sheet will show:
- Complete TikTok profile information
- Engagement metrics and statistics
- Profile verification status
- Bio links and external connections
- Timestamp of data collection

## 🔧 Customization Options

### Adding More Data Points
Edit the JSON body in "Sends profile URLs to Bright Data" node to include additional fields:

```json
"custom_output_fields": [
  "account_id",
  "nickname",
  "biography",
  "followers",
  "following",
  "likes",
  "videos_count",
  "language",
  "creation_time",
  "last_post_time",
  "avg_video_duration",
  "hashtags_used",
  "music_used"
]
```

### Modifying Input Parameters
Customize the scraping parameters:
- **Country targeting**: Change "country" field in input
- **Search limits**: Adjust "limit_per_input" value
- **Discovery method**: Modify "discover_by" parameter
- **Error handling**: Toggle "include_errors" setting

### Batch Processing Multiple Profiles
To process multiple profiles simultaneously:
1. Modify the input array in the API call
2. Add multiple profile URLs in single request
3. Implement loop logic for processing results
4. Add rate limiting between requests

### Custom Form Fields
Enhance the form with additional inputs:
1. Open "Search by Profile URL" node
2. Add form fields for:
   - Country selection
   - Number of videos to analyze
   - Specific date ranges
   - Custom tags or categories

## 🚨 Troubleshooting

### Common Issues & Solutions

1. **"Bright Data connection failed"**
   - **Cause**: Invalid API credentials or dataset access
   - **Solution**: Verify API key in Bright Data dashboard, check dataset permissions

2. **"Profile not found or private"**
   - **Cause**: Invalid TikTok URL or private profile
   - **Solution**: Verify profile URL format, ensure profile is public

3. **"Google Sheets permission denied"**
   - **Cause**: Incorrect credentials or sheet permissions
   - **Solution**: Re-authenticate Google Sheets, check sheet sharing settings

4. **"Scraping timeout"**
   - **Cause**: Profile data taking too long to process
   - **Solution**: Increase wait time or implement longer polling intervals

5. **"Invalid dataset ID"**
   - **Cause**: Incorrect or expired dataset configuration
   - **Solution**: Check Bright Data dashboard for correct dataset ID

6. **"Form submission failed"**
   - **Cause**: Webhook configuration issues
   - **Solution**: Verify webhook URL and form trigger settings

### Advanced Troubleshooting
- **Check execution logs** in n8n for detailed error messages
- **Test individual nodes** by running them separately
- **Verify data formats** ensure URLs are properly formatted
- **Monitor API limits** check Bright Data usage quotas
- **Add error handling** implement try-catch logic for robust operation

## 📊 Use Cases & Examples

### 1. Influencer Marketing Research
**Goal**: Identify and analyze potential influencers for campaigns
- Research influencers in specific niches
- Analyze engagement rates and audience size
- Compare multiple influencers for campaign selection
- Track influencer growth over time

### 2. Competitive Analysis
**Goal**: Monitor competitors' TikTok presence and performance
- Track competitor follower growth
- Analyze content strategies and engagement
- Monitor posting frequency and timing
- Identify trending content themes

### 3. Social Media Monitoring
**Goal**: Track brand mentions and user-generated content
- Monitor branded hashtag usage
- Track brand advocates and micro-influencers
- Analyze sentiment and engagement patterns
- Identify trending topics in your industry

### 4. Market Research Pipeline
**Goal**: Gather social media intelligence for business decisions
- Analyze target audience behavior
- Study content preferences and trends
- Generate reports for stakeholders
- Support marketing strategy development

## ⚙ Advanced Configuration

### Rate Limiting and Performance
To optimize for large-scale scraping:
1. Adjust wait times between status checks
2. Implement exponential backoff for retries
3. Add batch processing for multiple profiles
4. Monitor API usage to avoid limits

### Data Validation and Cleaning
Enhance data quality with validation:
1. Add data type validation for numeric fields
2. Implement URL format checking
3. Clean and standardize text fields
4. Add data completeness checks

### Integration with Business Tools
Connect the workflow to your existing systems:
- **CRM Integration**: Update customer records with influencer data
- **Slack Notifications**: Send alerts when new data is available
- **Database Storage**: Store data in PostgreSQL/MySQL for analysis
- **BI Tools**: Connect to Tableau/Power BI for visualization

### Webhook Integration
For real-time updates:
1. Add webhook triggers for immediate profile checks
2. Integrate with external systems via webhooks
3. Create API endpoints for programmatic access
4. Implement authentication for secure access

## 📈 Performance & Limits

### Expected Performance
- **Single Profile**: 30-60 seconds average processing time
- **Concurrent Requests**: 5-10 simultaneous (depends on Bright Data plan)
- **Data Accuracy**: 95%+ for public TikTok profiles
- **Success Rate**: 90%+ for accessible profiles
- **Daily Capacity**: 100-1000 profiles (depends on rate limits)

### Resource Usage
- **Memory**: ~50MB per execution
- **Storage**: Minimal (data stored in Google Sheets)
- **API Calls**: 3-5 Bright Data calls per profile (including status checks)
- **Bandwidth**: ~1-2MB per profile scraped
- **Execution Time**: 1-2 minutes per profile

### Scaling Considerations
- **Rate Limiting**: Add delays for high-volume scraping
- **Error Handling**: Implement retry logic for failed requests
- **Data Validation**: Add checks for malformed profile data
- **Monitoring**: Track success/failure rates over time
- **Cost Optimization**: Monitor API usage to control costs

## 🤝 Support & Community

### Getting Help
- **n8n Community Forum**: community.n8n.io
- **Documentation**: docs.n8n.io
- **Bright Data Support**: Contact through your dashboard
- **GitHub Issues**: Report bugs and feature requests

### Contributing
- Share improvements with the community
- Report issues and suggest enhancements
- Create variations for specific use cases
- Document best practices and lessons learned

## 📋 Quick Setup Checklist

### Before You Start
☐ n8n instance running (self-hosted or cloud)  
☐ Google account with Sheets access  
☐ Bright Data account with TikTok dataset access  
☐ Valid TikTok profile URLs for testing  
☐ 15 minutes for setup  

### Setup Steps
☐ **Import Workflow** - Copy JSON and import to n8n  
☐ **Configure Bright Data** - Set up API credentials and test  
☐ **Create Google Sheet** - New sheet with proper column structure  
☐ **Set up Google Sheets credentials** - OAuth setup and test  
☐ **Update workflow settings** - Replace sheet ID and API keys  
☐ **Test with sample profiles** - Submit 1-2 URLs and verify results  
☐ **Activate workflow** - Enable form trigger for production use  

### Ready to Use! 🎉
Your form URL: `https://your-n8n-instance.com/form/[webhook-id]`

## 🎯 Happy TikTok Scraping! 

This workflow provides a solid foundation for automated TikTok influencer data collection. Customize it to fit your specific needs and use cases for influencer marketing, competitive analysis, and social media research.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
