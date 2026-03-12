# 📈 Aggregate financial regulatory news with ScrapeGraphAI, Slack alerts & Google Sheets

> ⚡ **104 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Daily Stock Regulatory News Aggregator with Compliance Alerts and Google Sheets Tracking

## 🎯 Target Audience
- Compliance officers and regulatory teams
- Financial services firms monitoring regulatory updates
- Investment advisors tracking regulatory changes
- Risk management professionals
- Corporate legal departments
- Stock traders and analysts monitoring regulatory news

## 🚀 Problem Statement
Manually monitoring regulatory updates from multiple agencies (SEC, FINRA, ESMA) is time-consuming and error-prone. This template automates daily regulatory news monitoring, aggregates updates from major regulatory bodies, filters for recent announcements, and instantly alerts compliance teams to critical regulatory changes, enabling timely responses and maintaining regulatory compliance.

## 🔧 How it Works

This workflow automatically monitors regulatory news daily, scrapes the latest updates from major regulatory agencies using AI-powered web scraping, filters for updates from the last 24 hours, and sends Slack alerts while logging all updates to Google Sheets for historical tracking.

### Key Components

1. **Daily Schedule Trigger** - Automatically runs the workflow every 24 hours to check for regulatory updates
2. **Regulatory Sources Configuration** - Defines the list of regulatory agencies and their URLs to monitor (SEC, FINRA, ESMA)
3. **Batch Processing** - Iterates through regulatory sources one at a time for reliable processing
4. **AI-Powered Scraping** - Uses ScrapeGraphAI to intelligently extract regulatory updates including title, summary, date, agency, and source URL
5. **Data Flattening** - Transforms scraped data structure into individual update records
6. **Time Filtering** - Filters updates to keep only those from the last 24 hours
7. **Historical Tracking** - Logs all filtered updates to Google Sheets for compliance records
8. **Compliance Alerts** - Sends Slack notifications to compliance teams when new regulatory updates are detected

## 💰 Key Features

### Automated Regulatory Monitoring
- **Daily Execution**: Runs automatically every 24 hours without manual intervention
- **Multi-Agency Support**: Monitors SEC, FINRA, and ESMA simultaneously
- **Error Handling**: Gracefully handles scraping errors and continues processing other sources

### Smart Filtering
- **Time-Based Filtering**: Automatically filters updates to show only those from the last 24 hours
- **Date Validation**: Discards updates with unreadable or invalid dates
- **Recent Updates Focus**: Ensures compliance teams only receive actionable, timely information

### Alert System
- **Compliance Alerts**: Instant Slack notifications for new regulatory updates
- **Structured Data**: Alerts include title, summary, date, agency, and source URL
- **Dedicated Channel**: Posts to designated compliance alerts channel for team visibility

## 📊 Output Specifications

The workflow generates and stores structured data including:

| Output Type | Format | Description | Example |
|-------------|--------|-------------|---------|
| **Regulatory Updates** | JSON Object | Extracted regulatory update information | `{"title": "SEC Announces New Rule", "date": "2024-01-15", "agency": "SEC"}` |
| **Update History** | Google Sheets | Historical regulatory update records with timestamps | Columns: Title, Summary, Date, Agency, Source URL, Scraped At |
| **Slack Alerts** | Messages | Compliance notifications for new updates | "📢 New SEC update: [Title] - [Summary]" |
| **Error Logs** | System Logs | Scraping error notifications | "❌ Error scraping FINRA updates" |

## 🛠️ Setup Instructions

**Estimated setup time: 15-20 minutes**

### Prerequisites
- n8n instance with community nodes enabled
- ScrapeGraphAI API account and credentials
- Google Sheets API access (OAuth2)
- Slack workspace with API access
- Google Sheets spreadsheet for regulatory update tracking

### Step-by-Step Configuration

#### 1. Install Community Nodes
```bash
# Install ScrapeGraphAI community node
npm install n8n-nodes-scrapegraphai
```

#### 2. Configure ScrapeGraphAI Credentials
- Navigate to Credentials in your n8n instance
- Add new ScrapeGraphAI API credentials
- Enter your API key from ScrapeGraphAI dashboard
- Test the connection to ensure it's working

#### 3. Set up Google Sheets Connection
- Add Google Sheets OAuth2 credentials
- Authorize access to your Google account
- Create or identify the spreadsheet for regulatory update tracking
- Note the spreadsheet ID and sheet name (default: "RegUpdates")

#### 4. Configure Slack Integration
- Add Slack API credentials to your n8n instance
- Create or identify Slack channel: `#compliance-alerts`
- Test Slack connection with a sample message
- Ensure the bot has permission to post messages

#### 5. Customize Regulatory Sources
- Open the "Regulatory Sources" Code node
- Update the urls array with additional regulatory sources if needed:
  ```javascript
  const urls = [
    'https://www.sec.gov/news/pressreleases',
    'https://www.finra.org/rules-guidance/notices',
    'https://www.esma.europa.eu/press-news',
    // Add more URLs as needed
  ];
  ```

#### 6. Configure Google Sheets
- Update `documentId` in "Log to Google Sheets" node with your spreadsheet ID
- Update `sheetName` to match your sheet name (default: "RegUpdates")
- Ensure the sheet has columns: Title, Summary, Date, Agency, Source URL, Scraped At
- Create the sheet with proper column headers if starting fresh

#### 7. Customize Slack Channel
- Open "Send Compliance Alert" Slack node
- Update the channel name (default: "#compliance-alerts")
- Customize the message format if needed
- Test with a sample message

#### 8. Adjust Schedule
- Open "Daily Regulatory Poll" Schedule Trigger
- Modify `hoursInterval` to change frequency (default: 24 hours)
- Set specific times if needed for daily execution

#### 9. Customize Scraping Prompt
- Open "Scrape Regulatory Updates" ScrapeGraphAI node
- Adjust the `userPrompt` to extract different or additional fields
- Modify the JSON schema in the prompt if needed
- Change the number of updates extracted (default: 5 most recent)

#### 10. Test and Validate
- Run the workflow manually to verify all connections
- Check Google Sheets for data structure and format
- Verify Slack alerts are working correctly
- Test error handling with invalid URLs
- Validate date filtering is working properly

## 🔄 Workflow Customization Options

### Modify Monitoring Frequency
- Change `hoursInterval` in Schedule Trigger for different frequencies
- Switch to multiple times per day for critical monitoring
- Add multiple schedule triggers for different agency checks

### Extend Data Collection
- Modify ScrapeGraphAI prompt to extract additional fields (documents, categories, impact level)
- Add data enrichment nodes for risk assessment
- Integrate with regulatory databases for more comprehensive tracking
- Add sentiment analysis for regulatory updates

### Enhance Alert System
- Add email notifications alongside Slack alerts
- Create different alert channels for different agencies
- Add priority-based alerting based on update keywords
- Integrate with SMS or push notification services
- Add webhook integrations for other compliance tools

### Advanced Analytics
- Add data visualization nodes for regulatory trend analysis
- Create automated compliance reports with summaries
- Integrate with business intelligence tools
- Add machine learning for update categorization
- Track regulatory themes and topics over time

### Multi-Source Support
- Add support for additional regulatory agencies
- Implement agency-specific scraping strategies
- Add regional regulatory sources (FCA, BaFin, etc.)
- Include state-level regulatory updates

## 📈 Use Cases

- **Compliance Monitoring**: Automatically track regulatory updates to ensure timely compliance responses
- **Risk Management**: Monitor regulatory changes that may impact business operations or investments
- **Regulatory Intelligence**: Build historical databases of regulatory announcements for trend analysis
- **Client Communication**: Stay informed to provide timely updates to clients about regulatory changes
- **Legal Research**: Track regulatory developments for legal research and case preparation
- **Investment Strategy**: Monitor regulatory changes that may affect investment decisions

## 🚨 Important Notes

- Respect website terms of service and rate limits when scraping regulatory sites
- Monitor ScrapeGraphAI API usage to manage costs
- Ensure Google Sheets has proper column structure before first run
- Set up Slack channel before running the workflow
- Consider implementing rate limiting for multiple regulatory sources
- Keep credentials secure and rotate them regularly
- Test with one regulatory source first before adding multiple sources
- Verify date formats are consistent across different regulatory agencies
- Be aware that some regulatory sites may have anti-scraping measures

## 🔧 Troubleshooting

**Common Issues:**
- ScrapeGraphAI connection errors: Verify API key and account status
- Google Sheets logging failures: Check spreadsheet ID, sheet name, and column structure
- Slack notification failures: Verify channel name exists and bot has permissions
- Date filtering issues: Ensure dates from scraped content are in a parseable format
- Validation errors: Check that scraped data matches expected schema
- Empty results: Verify regulatory sites are accessible and haven't changed structure

**Optimization Tips:**
- Start with one regulatory source to test the workflow
- Monitor API usage and costs regularly
- Use batch processing to avoid overwhelming scraping services
- Implement retry logic for failed scraping attempts
- Consider caching mechanisms for frequently checked sources
- Adjust the number of updates extracted based on typical volume

**Support Resources:**
- ScrapeGraphAI documentation and API reference
- Google Sheets API documentation
- Slack API documentation for webhooks
- n8n community forums for workflow assistance
- n8n documentation for node configuration
- SEC, FINRA, and ESMA official websites for source verification

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
