# 📊 Scrape Twitter profiles with Bright Data API and export to Google Sheets

> ⚡ **596 views** · 📊 [Market Research & Insights](../)

## Description

# 🐦 Twitter Profile Scraper via Bright Data API with Google Sheets Output

A comprehensive n8n automation that scrapes Twitter profile data using Bright Data's Twitter dataset and stores comprehensive tweet analytics, user metrics, and engagement data directly into Google Sheets.

## 📋 Overview

This workflow provides an automated Twitter data collection solution that extracts profile information and tweet data from specified Twitter accounts within custom date ranges. Perfect for social media analytics, competitor research, brand monitoring, and content strategy analysis.

## ✨ Key Features

🔗 **Form-Based Input**: Easy-to-use form for Twitter URL and date range selection  
🐦 **Twitter Integration**: Uses Bright Data's Twitter dataset for accurate data extraction  
📊 **Comprehensive Data**: Captures tweets, engagement metrics, and profile information  
📈 **Google Sheets Storage**: Automatically stores all data in organized spreadsheet format  
🔄 **Progress Monitoring**: Real-time status tracking with automatic retry mechanisms  
⚡ **Fast & Reliable**: Professional scraping with built-in error handling  
📅 **Date Range Control**: Flexible time period selection for targeted data collection  
🎯 **Customizable Fields**: Advanced data field selection and mapping

## 🎯 What This Workflow Does

### Input
- **Twitter Profile URL**: Target Twitter account for data scraping
- **Date Range**: Start and end dates for tweet collection period
- **Custom Fields**: Configurable data points to extract

### Processing
1. **Form Trigger**: Collects Twitter URL and date range from user input
2. **API Request**: Sends scraping request to Bright Data with specified parameters
3. **Progress Monitoring**: Continuously checks scraping job status until completion
4. **Data Retrieval**: Downloads complete dataset when scraping is finished
5. **Data Processing**: Formats and structures extracted information
6. **Sheet Integration**: Automatically populates Google Sheets with organized data

### Output Data Points

| Field | Description | Example |
|-------|-------------|---------|
| user_posted | Username who posted the tweet | @elonmusk |
| name | Display name of the user | Elon Musk |
| description | Tweet content/text | "Exciting updates coming soon..." |
| date_posted | When the tweet was posted | 2025-01-15T10:30:00Z |
| likes | Number of likes on the tweet | 1,234 |
| reposts | Number of retweets | 567 |
| replies | Number of replies | 89 |
| views | Total view count | 12,345 |
| followers | User's follower count | 50M |
| following | Users they follow | 123 |
| is_verified | Verification status | true/false |
| hashtags | Hashtags used in tweet | #AI #Technology |
| photos | Image URLs in tweet | image1.jpg, image2.jpg |
| videos | Video content URLs | video1.mp4 |
| user_id | Unique user identifier | 12345678 |
| timestamp | Data extraction timestamp | 2025-01-15T11:00:00Z |

## 🚀 Setup Instructions

### Prerequisites
- n8n instance (self-hosted or cloud)
- Bright Data account with Twitter dataset access
- Google account with Sheets access
- Valid Twitter profile URLs to scrape
- 10-15 minutes for setup

### Step 1: Import the Workflow
1. Copy the JSON workflow code from the provided file
2. In n8n: Workflows → + Add workflow → Import from JSON
3. Paste JSON and click Import

### Step 2: Configure Bright Data
1. Set up Bright Data credentials:
   - In n8n: Credentials → + Add credential → HTTP Header Auth
   - Enter your Bright Data API credentials
   - Test the connection
2. Configure dataset:
   - Ensure you have access to Twitter dataset (`gd_lwxkxvnf1cynvib9co`)
   - Verify dataset permissions in Bright Data dashboard

### Step 3: Configure Google Sheets Integration
1. Create a Google Sheet:
   - Go to Google Sheets
   - Create a new spreadsheet named "Twitter Data" or similar
   - Copy the Sheet ID from URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
2. Set up Google Sheets credentials:
   - In n8n: Credentials → + Add credential → Google Sheets OAuth2 API
   - Complete OAuth setup and test connection
3. Prepare your data sheet with columns:
   - Use the column headers from the data points table above
   - The workflow will automatically populate these fields

### Step 4: Update Workflow Settings
1. Update Bright Data nodes:
   - Open "🚀 Trigger Twitter Scraping" node
   - Replace `BRIGHT_DATA_API_KEY` with your actual API token
   - Verify dataset ID is correct
2. Update Google Sheets node:
   - Open "📊 Store Twitter Data in Google Sheet" node
   - Replace `YOUR_GOOGLE_SHEET_ID` with your Sheet ID
   - Select your Google Sheets credential
   - Choose the correct sheet/tab name

### Step 5: Test & Activate
1. Add test data:
   - Use the form trigger to input a Twitter profile URL
   - Set a small date range for testing (e.g., last 7 days)
2. Test the workflow:
   - Submit the form to trigger the workflow
   - Monitor progress in n8n execution logs
   - Verify data appears in Google Sheet
   - Check all expected columns are populated

## 📖 Usage Guide

### Running the Workflow
1. Access the workflow form trigger URL (available when workflow is active)
2. Enter the Twitter profile URL you want to scrape
3. Set the start and end dates for tweet collection
4. Submit the form to initiate scraping
5. Monitor progress - the workflow will automatically check status every minute
6. Once complete, data will appear in your Google Sheet

### Understanding the Data
Your Google Sheet will show:
- **Real-time tweet data** for the specified date range
- **User engagement metrics** (likes, replies, retweets, views)
- **Profile information** (followers, following, verification status)
- **Content details** (hashtags, media URLs, quoted tweets)
- **Timestamps** for each tweet and data extraction

### Customizing Date Ranges
- **Recent data**: Use last 7-30 days for current activity analysis
- **Historical analysis**: Select specific months or quarters for trend analysis
- **Event tracking**: Focus on specific date ranges around events or campaigns
- **Comparative studies**: Use consistent time periods across different profiles

## 🔧 Customization Options

### Modifying Data Fields
Edit the `custom_output_fields` array in the "🚀 Trigger Twitter Scraping" node to add or remove data points:

```json
"custom_output_fields": [
  "id", "user_posted", "name", "description", 
  "date_posted", "likes", "reposts", "replies",
  "views", "hashtags", "followers", "is_verified"
]
```

### Changing Google Sheet Structure
Modify the column mapping in the "📊 Store Twitter Data in Google Sheet" node to match your preferred sheet layout and add custom formulas or calculations.

### Adding Multiple Recipients
To process multiple Twitter profiles:
1. Modify the form to accept multiple URLs
2. Add a loop node to process each URL separately
3. Implement delays between requests to respect rate limits

## 🚨 Troubleshooting

### Common Issues & Solutions

1. **"Bright Data connection failed"**
   - **Cause**: Invalid API credentials or dataset access
   - **Solution**: Verify credentials in Bright Data dashboard, check dataset permissions

2. **"No data extracted"**
   - **Cause**: Invalid Twitter URLs or private/protected accounts
   - **Solution**: Verify URLs are valid public Twitter profiles, test with different accounts

3. **"Google Sheets permission denied"**
   - **Cause**: Incorrect credentials or sheet permissions
   - **Solution**: Re-authenticate Google Sheets, check sheet sharing settings

4. **"Workflow timeout"**
   - **Cause**: Large date ranges or high-volume accounts
   - **Solution**: Use smaller date ranges, implement pagination for high-volume accounts

5. **"Progress monitoring stuck"**
   - **Cause**: Scraping job failed or API issues
   - **Solution**: Check Bright Data dashboard for job status, restart workflow if needed

### Advanced Troubleshooting
- Check execution logs in n8n for detailed error messages
- Test individual nodes by running them separately
- Verify data formats and ensure consistent field mapping
- Monitor rate limits if scraping multiple profiles consecutively
- Add error handling and implement retry logic for robust operation

## 📊 Use Cases & Examples

### 1. Social Media Analytics
**Goal**: Track engagement metrics and content performance
- Monitor tweet engagement rates over time
- Analyze hashtag effectiveness and reach
- Track follower growth and audience interaction
- Generate weekly/monthly performance reports

### 2. Competitor Research
**Goal**: Monitor competitor social media activity
- Track competitor posting frequency and timing
- Analyze competitor content themes and strategies
- Monitor competitor engagement and audience response
- Identify trending topics and hashtags in your industry

### 3. Brand Monitoring
**Goal**: Track brand mentions and sentiment analysis
- Monitor specific Twitter accounts for brand mentions
- Track hashtag campaigns and user-generated content
- Analyze sentiment trends and audience feedback
- Identify influencers and brand advocates

### 4. Content Strategy Development
**Goal**: Analyze successful content patterns
- Identify high-performing tweet formats and topics
- Track optimal posting times and frequencies
- Analyze hashtag performance and reach
- Study audience engagement patterns

### 5. Market Research
**Goal**: Collect social media data for market analysis
- Gather consumer opinions and feedback
- Track industry trends and discussions
- Monitor product launches and market reactions
- Support product development with social insights

## ⚙ Advanced Configuration

### Batch Processing Multiple Profiles
To monitor multiple Twitter accounts efficiently:
1. Create a master sheet with profile URLs and date ranges
2. Add a loop node to process each profile separately
3. Implement delays between requests to respect rate limits
4. Use separate sheets or tabs for different profiles

### Adding Data Analysis
Enhance the workflow with analytical capabilities:
1. Create additional sheets for processed data and insights
2. Add formulas to calculate engagement rates and trends
3. Implement data visualization with charts and graphs
4. Generate automated reports and summaries

### Integration with Business Tools
Connect the workflow to your existing systems:
- **CRM Integration**: Update customer records with social media data
- **Slack Notifications**: Send alerts when data collection is complete
- **Database Storage**: Store data in PostgreSQL/MySQL for advanced analysis
- **BI Tools**: Connect to Tableau/Power BI for comprehensive visualization

## 📈 Performance & Limits

### Expected Performance
- **Single profile**: 30 seconds to 5 minutes (depending on date range)
- **Data accuracy**: 95%+ for public Twitter profiles
- **Success rate**: 90%+ for accessible accounts
- **Daily capacity**: 10-50 profiles (depends on rate limits and data volume)

### Resource Usage
- **Memory**: ~200MB per execution
- **Storage**: Minimal (data stored in Google Sheets)
- **API calls**: 1 Bright Data call + multiple Google Sheets calls per profile
- **Bandwidth**: ~5-10MB per profile scraped
- **Execution time**: 2-10 minutes for typical date ranges

### Scaling Considerations
- **Rate limiting**: Add delays for high-volume scraping
- **Error handling**: Implement retry logic for failed requests
- **Data validation**: Add checks for malformed or missing data
- **Monitoring**: Track success/failure rates over time
- **Cost optimization**: Monitor API usage to control costs

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
☐ Bright Data account with Twitter dataset access  
☐ Google account with Sheets access  
☐ Valid Twitter profile URLs ready for scraping  
☐ 10-15 minutes available for setup

### Setup Steps
☐ **Import Workflow** - Copy JSON and import to n8n  
☐ **Configure Bright Data** - Set up API credentials and test  
☐ **Create Google Sheet** - New sheet with proper column structure  
☐ **Set up Google Sheets credentials** - OAuth setup and test  
☐ **Update workflow settings** - Replace API keys and sheet IDs  
☐ **Test with sample data** - Add 1 Twitter URL and small date range  
☐ **Verify data flow** - Check data appears in Google Sheet correctly  
☐ **Activate workflow** - Enable form trigger for production use

## Ready to Use! 🎉

**Your workflow URL**: Access form trigger when workflow is active

🎯 **Happy Twitter Scraping!** This workflow provides a solid foundation for automated Twitter data collection. Customize it to fit your specific social media analytics and research needs.



For any questions or support, please contact:  
[info@incrementors.com](mailto:info@incrementors.com)  
or fill out this form: [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
