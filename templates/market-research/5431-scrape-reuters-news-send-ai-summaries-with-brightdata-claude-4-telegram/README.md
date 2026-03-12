# 📊 Scrape Reuters news & send AI summaries with Brightdata, Claude 4 & Telegram

> ⚡ **2,417 views** · 📊 [Market Research & Insights](../)

## Description

# 📰 Comprehensive Reuters News Intelligence System With Brightdata & Telegram Alerts

A powerful n8n automation workflow that scrapes the latest Reuters news articles using Bright Data's web scraping capabilities and delivers intelligent news summaries directly to your Telegram chat.

## 📋 Overview

This workflow provides an automated news intelligence solution that monitors Reuters for breaking news, analyzes content using Claude AI, and delivers personalized news alerts. Perfect for journalists, researchers, traders, and anyone who needs real-time access to Reuters content with AI-powered insights.

## ✨ Key Features

🎯 **Form-Based Input**: Easy web form to specify keywords and news type preferences  
🤖 **AI-Powered Processing**: Uses Claude 4 Sonnet for intelligent content analysis  
🌐 **Professional Scraping**: Leverages Bright Data's Reuters dataset for reliable data extraction  
📱 **Telegram Integration**: Instant notifications delivered to your preferred chat  
⏰ **Smart Waiting**: Built-in delays to ensure data processing completion  
🔄 **Status Monitoring**: Automatic scraping status checks with retry logic  
📊 **Data Formatting**: Clean, structured output with essential article fields  
🚀 **Scalable Design**: Handles multiple articles with batch processing  

## 🎯 What This Workflow Does

### Input
- **Keywords**: Search terms for Reuters articles (e.g., "Election", "Gas shocks", "Technology")
- **News Type**: Sorting preference (newest, oldest, relevance)
- **Form Submission**: Web-based interface for easy interaction

### Processing
1. **Form Trigger**: Captures user input via web form interface
2. **AI Agent Orchestration**: Claude processes requirements and coordinates actions
3. **Bright Data Request**: Initiates Reuters scraping with specified keywords
4. **Status Monitoring**: Checks scraping progress with smart retry logic
5. **Data Retrieval**: Fetches completed article data when ready
6. **Content Processing**: Extracts and formats essential article information
7. **Telegram Delivery**: Sends structured news updates to specified chat

### Output Data Points

| Field | Description | Example |
|-------|-------------|---------|
| **article_title** | The main headline of the article | "Global Energy Markets Face Uncertainty" |
| **headline** | Reuters display headline | "Oil Prices Surge Amid Supply Concerns" |
| **description** | Article summary/meta description | "Energy markets react to geopolitical tensions..." |
| **content** | Full article body text | "LONDON (Reuters) - Oil prices jumped 3%..." |
| **article_url** | Direct link to Reuters article | "https://reuters.com/business/energy/..." |

## 🚀 Setup Instructions

### Prerequisites
- n8n instance (self-hosted or cloud)
- Bright Data account with Reuters dataset access
- Telegram bot and channel setup
- Claude API access (Anthropic)
- 15-20 minutes for complete setup

### Step 1: Import the Workflow
1. Copy the JSON workflow code from the provided file
2. In n8n: **Workflows** → **+ Add workflow** → **Import from JSON**
3. Paste JSON content and click **Import**
4. Save the workflow with a descriptive name

### Step 2: Configure Bright Data Integration
1. **Set up Bright Data credentials:**
   - In n8n: **Credentials** → **+ Add credential** → **HTTP Header Auth**
   - Name: "Bright Data API"
   - Add header: `Authorization: Bearer YOUR_BRIGHT_DATA_API_KEY`
   - Test the connection

2. **Configure Reuters dataset:**
   - Ensure access to dataset ID: `gd_lyptx9h74wtlvpnfu`
   - Verify Reuters scraping permissions in Bright Data dashboard
   - Check monthly quota and usage limits

### Step 3: Configure Anthropic Claude Integration
1. **Set up Anthropic credentials:**
   - In n8n: **Credentials** → **+ Add credential** → **Anthropic API**
   - Enter your Anthropic API key
   - Test the connection

2. **Update model settings:**
   - Open "Anthropic Chat Model" node
   - Verify model is set to: `claude-sonnet-4-20250514`
   - Adjust temperature and other parameters if needed

### Step 4: Configure Telegram Notifications
1. **Create Telegram Bot:**
   - Message @BotFather on Telegram
   - Use `/newbot` command and follow instructions
   - Save the bot token provided

2. **Get Chat ID:**
   - Add your bot to desired channel/group
   - Send a test message
   - Visit: `https://api.telegram.org/bot{BOT_TOKEN}/getUpdates`
   - Find your chat ID in the response

3. **Set up Telegram credentials:**
   - In n8n: **Credentials** → **+ Add credential** → **Telegram API**
   - Enter bot token from BotFather
   - Test the connection

4. **Update Telegram node:**
   - Open "Telegram" node
   - Replace `DEMO_CHAT_ID` with your actual chat ID
   - Customize message format if needed

### Step 5: Configure Web Form
1. **Set up form trigger:**
   - Open "On form submission" node
   - Note the webhook URL provided
   - Customize form title and fields if needed

2. **Test form functionality:**
   - Access the webhook URL in your browser
   - Fill out test form with sample keywords
   - Verify form submission triggers workflow

### Step 6: Update Node Configurations
1. **Update HTTP Request nodes:**
   - Replace `BRIGHT_DATA_API_KEY` with actual credentials reference
   - Verify dataset ID matches your Bright Data setup
   - Check request parameters and headers

2. **Configure Data Formatting:**
   - Open "Data Formatting" node
   - Review JavaScript code for field extraction
   - Modify output fields if additional data needed

### Step 7: Test & Activate
1. **Run initial test:**
   - Submit form with test keywords (e.g., "Technology")
   - Monitor workflow execution in n8n
   - Check for Telegram message delivery

2. **Verify data flow:**
   - Confirm Bright Data snapshot creation
   - Check status monitoring functionality
   - Validate final data formatting

3. **Activate workflow:**
   - Toggle workflow to "Active" status
   - Monitor for any execution errors
   - Set up error notifications if needed

## 📖 Usage Guide

### Submitting News Requests
1. **Access the form:**
   - Navigate to your webhook URL
   - Form title: "Reuters News Intelligence"

2. **Fill required fields:**
   - **Keywords**: Enter search terms (e.g., "Climate Change", "Tech Earnings")
   - **News Type**: Select sorting preference:
     - `newest`: Most recent articles first
     - `oldest`: Historical articles first  
     - `relevance`: Best matching articles

3. **Submit and wait:**
   - Click submit to trigger workflow
   - Expect 1-3 minutes for processing
   - Check Telegram for article delivery

### Understanding the Process
The workflow follows this sequence:
1. **Form submission** triggers Claude AI agent
2. **Claude coordinates** all scraping and processing steps
3. **Bright Data scrapes** Reuters with your keywords
4. **System waits** for scraping completion (60 seconds)
5. **Status check** confirms data readiness
6. **Article data** is retrieved and formatted
7. **Telegram message** delivers final results

### Reading Telegram Results
Each article includes:
- **Clickable URL** to full Reuters article
- **Headline** for quick scanning
- **Description** with article summary
- **Content preview** with key details

## 🔧 Customization Options

### Modifying Search Parameters
Edit the "HTTP Request" node to adjust:
```json
{
  "keyword": "Your search terms",
  "sort": "newest|oldest|relevance",
  "limit_per_input": "2-10 articles"
}
```

### Customizing Telegram Messages
Update the "Telegram" node message format:
```
🗞️ *{{ $json.heading }}*

📖 {{ $json.description }}

🔗 [Read Full Article]({{ $json.article_url }})

📅 Retrieved: {{ $now.format('YYYY-MM-DD HH:mm') }}
```

### Adding Email Notifications
1. Add "Email" node after "Data Formatting"
2. Configure SMTP credentials
3. Create HTML email template with article data
4. Connect to same input as Telegram node

### Enhancing AI Processing
Modify the MCP Agent prompt to:
- Request specific article sections
- Add sentiment analysis
- Include market impact assessment
- Generate executive summaries
- Extract key quotes and statistics

### Adding Data Storage
Include database storage by:
1. Adding "Postgres" or "MySQL" node
2. Creating articles table with schema
3. Storing full article data for analysis
4. Building historical news database

## 🚨 Troubleshooting

### Common Issues & Solutions

**1. "Bright Data snapshot failed"**
- **Cause**: Invalid API key or dataset access
- **Solution**: Verify credentials and dataset permissions in Bright Data dashboard

**2. "No articles found"**
- **Cause**: Keywords too specific or no matching content
- **Solution**: Try broader search terms, check Reuters availability

**3. "Telegram message not sent"**
- **Cause**: Invalid bot token or chat ID
- **Solution**: Re-verify bot setup with @BotFather, confirm chat ID

**4. "Workflow timeout"**
- **Cause**: Bright Data scraping taking too long
- **Solution**: Increase timeout in "sleep tool" or add retry logic

**5. "Data formatting errors"**
- **Cause**: Unexpected response structure from Bright Data
- **Solution**: Check "Data Formatting" node logs, adjust parsing logic

**6. "Claude API errors"**
- **Cause**: API key issues or rate limiting
- **Solution**: Verify Anthropic credentials, check usage limits

### Advanced Troubleshooting
- **Monitor execution logs** in n8n for detailed error messages
- **Test individual nodes** by running them separately
- **Verify JSON structures** ensure data flows correctly between nodes
- **Check rate limits** for both Bright Data and Claude API
- **Add error handling** implement try-catch logic for robust operation

## 📊 Use Cases & Examples

### 1. Financial News Monitoring
**Goal**: Track market-moving Reuters financial news
- Keywords: "earnings", "fed rates", "market outlook"
- Instant alerts for breaking financial news
- Support trading and investment decisions

### 2. Competitive Intelligence
**Goal**: Monitor industry-specific news for business insights
- Keywords: Company names, industry terms
- Track competitor mentions and market developments
- Generate competitive analysis reports

### 3. Crisis Communications
**Goal**: Stay informed during breaking news events
- Keywords: "breaking", location names, event types
- Rapid response to developing situations
- Crisis management team notifications

### 4. Research & Academia
**Goal**: Gather news data for academic research
- Keywords: Research topics, geographic regions
- Build datasets for media analysis
- Track news coverage patterns over time

## ⚙ Advanced Configuration

### Scaling for High Volume
To handle larger news monitoring needs:

1. **Increase batch processing:**
   - Modify `limit_per_input` parameter
   - Add parallel processing branches
   - Implement queue management

2. **Add rate limiting:**
   - Insert delays between requests
   - Monitor API usage quotas
   - Implement exponential backoff

3. **Database integration:**
   - Store articles in PostgreSQL/MySQL
   - Add deduplication logic
   - Create search and filter capabilities

### Multi-Channel Distribution
Expand beyond Telegram:

1. **Slack integration:**
   - Add Slack webhook node
   - Format messages for team channels
   - Include interactive buttons

2. **Email newsletters:**
   - Compile daily/weekly summaries
   - HTML formatting with images
   - Subscriber management

3. **API endpoints:**
   - Create webhook responses
   - Build news API for other systems
   - Real-time data streaming

### AI Enhancement Options
Leverage Claude's capabilities further:

1. **Sentiment analysis:**
   - Add sentiment scoring to articles
   - Track market sentiment trends
   - Generate mood indicators

2. **Summarization:**
   - Create executive summaries
   - Extract key points
   - Generate abstracts

3. **Classification:**
   - Categorize articles by topic
   - Tag with relevant industries
   - Priority scoring system

## 📈 Performance & Limits

### Expected Performance
- **Single request**: 60-120 seconds average processing time
- **Articles per request**: 2-10 (configurable)
- **Data accuracy**: 95%+ for standard Reuters articles
- **Success rate**: 90%+ for accessible content
- **Daily capacity**: Limited by Bright Data quotas

### Resource Usage
- **Memory**: ~200MB per execution
- **API calls**: 1 Bright Data + 1 Claude + 1 Telegram per execution
- **Bandwidth**: ~5-10MB per article scraped
- **Execution time**: 1-3 minutes per request

### Scaling Considerations
- **Rate limiting**: Respect API quotas and limits
- **Error handling**: Implement comprehensive retry logic
- **Data validation**: Verify article quality and completeness
- **Cost monitoring**: Track API usage across services
- **Performance optimization**: Cache common requests when possible

## 🤝 Support & Community

### Getting Help
- **n8n Community**: [community.n8n.io](https://community.n8n.io)
- **Bright Data Support**: Contact through dashboard
- **Anthropic Documentation**: [docs.anthropic.com](https://docs.anthropic.com)
- **Telegram Bot API**: [core.telegram.org/bots](https://core.telegram.org/bots)

### Contributing
- Share workflow improvements with the community
- Report issues and suggest enhancements  
- Create variations for specific news sources
- Document best practices and optimizations

## 📋 Quick Setup Checklist

### Before You Start
☐ n8n instance running (self-hosted or cloud)  
☐ Bright Data account with Reuters dataset access  
☐ Anthropic API key for Claude access  
☐ Telegram bot created via @BotFather  
☐ 20 minutes for complete setup  

### Setup Steps
☐ **Import Workflow** - Copy JSON and import to n8n  
☐ **Configure Bright Data** - Set up API credentials and test  
☐ **Configure Claude** - Add Anthropic API credentials  
☐ **Setup Telegram** - Create bot and get chat ID  
☐ **Update Credentials** - Replace all demo values with real ones  
☐ **Test Form** - Submit test request and verify flow  
☐ **Check Telegram** - Confirm message delivery  
☐ **Activate Workflow** - Turn on for production use  

### Ready to Use! 🎉
Your workflow form URL: `https://your-n8n-instance.com/webhook/your-webhook-id`

## 🎯 Happy News Monitoring! 

This workflow provides a solid foundation for automated Reuters news intelligence. Customize it to fit your specific monitoring needs and use cases. The combination of Bright Data's reliable scraping, Claude's AI analysis, and Telegram's instant delivery creates a powerful news monitoring solution.

## 🔗 Nodes Used

Telegram, AI Agent, Anthropic Chat Model, Code Tool, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
