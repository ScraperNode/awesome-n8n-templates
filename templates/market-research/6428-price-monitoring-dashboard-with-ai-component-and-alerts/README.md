# 📊 Price monitoring dashboard with AI component and alerts

> ⚡ **1,376 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Competitor Price Monitoring Dashboard with AI and Real-time Alerts

## 🎯 Target Audience
- E-commerce managers and pricing analysts
- Retail business owners monitoring competitor pricing
- Marketing teams tracking market positioning
- Product managers analyzing competitive landscape
- Data analysts conducting pricing intelligence
- Business strategists making pricing decisions

## 🚀 Problem Statement
Manual competitor price monitoring is inefficient and often leads to missed opportunities or delayed responses to market changes. This template solves the challenge of automatically tracking competitor prices, detecting significant changes, and providing actionable insights for strategic pricing decisions.

## 🔧 How it Works

This workflow automatically monitors competitor product prices using AI-powered web scraping, analyzes price trends, and sends real-time alerts when significant changes are detected.

### Key Components

1. **Scheduled Trigger** - Runs the workflow at specified intervals to maintain up-to-date price data
2. **AI-Powered Scraping** - Uses ScrapeGraphAI to intelligently extract pricing information from competitor websites
3. **Price Analysis Engine** - Processes historical data to detect trends and anomalies
4. **Alert System** - Sends notifications via Slack and email when price changes exceed thresholds
5. **Dashboard Integration** - Stores all data in Google Sheets for comprehensive analysis and reporting

## 📊 Google Sheets Column Specifications

The template creates the following columns in your Google Sheets:

| Column | Data Type | Description | Example |
|--------|-----------|-------------|---------|
| **timestamp** | DateTime | When the price was recorded | "2024-01-15T10:30:00Z" |
| **competitor_name** | String | Name of the competitor | "Amazon" |
| **product_name** | String | Product name and model | "iPhone 15 Pro 128GB" |
| **current_price** | Number | Current price in USD | 999.00 |
| **previous_price** | Number | Previous recorded price | 1099.00 |
| **price_change** | Number | Absolute price difference | -100.00 |
| **price_change_percent** | Number | Percentage change | -9.09 |
| **product_url** | URL | Direct link to product page | "https://amazon.com/iphone15" |
| **alert_triggered** | Boolean | Whether alert was sent | true |
| **trend_direction** | String | Price trend analysis | "Decreasing" |

## 🛠️ Setup Instructions

**Estimated setup time: 15-20 minutes**

### Prerequisites
- n8n instance with community nodes enabled
- ScrapeGraphAI API account and credentials
- Google Sheets account with API access
- Slack workspace for notifications (optional)
- Email service for alerts (optional)

### Step-by-Step Configuration

#### 1. Install Community Nodes
```bash
# Install required community nodes
npm install n8n-nodes-scrapegraphai
npm install n8n-nodes-slack
```

#### 2. Configure ScrapeGraphAI Credentials
- Navigate to Credentials in your n8n instance
- Add new ScrapeGraphAI API credentials
- Enter your API key from ScrapeGraphAI dashboard
- Test the connection to ensure it's working

#### 3. Set up Google Sheets Connection
- Add Google Sheets OAuth2 credentials
- Grant necessary permissions for spreadsheet access
- Create a new spreadsheet for price monitoring data
- Configure the sheet name (default: "Price Monitoring")

#### 4. Configure Competitor URLs
- Update the `websiteUrl` parameters in ScrapeGraphAI nodes
- Add URLs for each competitor you want to monitor
- Customize the user prompt to extract specific pricing data
- Set appropriate price thresholds for alerts

#### 5. Set up Notification Channels
- Configure Slack webhook or API credentials
- Set up email service credentials (SendGrid, SMTP, etc.)
- Define alert thresholds and notification preferences
- Test notification delivery

#### 6. Configure Schedule Trigger
- Set monitoring frequency (hourly, daily, etc.)
- Choose appropriate time zones for your business hours
- Consider competitor website rate limits

#### 7. Test and Validate
- Run the workflow manually to verify all connections
- Check Google Sheets for proper data formatting
- Test alert notifications with sample data

## 🔄 Workflow Customization Options

### Modify Monitoring Targets
- Add or remove competitor websites
- Change product categories or specific products
- Adjust monitoring frequency based on market volatility

### Extend Price Analysis
- Add more sophisticated trend analysis algorithms
- Implement price prediction models
- Include competitor inventory and availability tracking

### Customize Alert System
- Set different thresholds for different product categories
- Create tiered alert systems (info, warning, critical)
- Add SMS notifications for urgent price changes

### Output Customization
- Add data visualization and reporting features
- Implement price history charts and graphs
- Create executive dashboards with key metrics

## 📈 Use Cases

- **Dynamic Pricing**: Adjust your prices based on competitor movements
- **Market Intelligence**: Understand competitor pricing strategies
- **Promotion Planning**: Time your promotions based on competitor actions
- **Inventory Management**: Optimize stock levels based on market conditions
- **Customer Communication**: Proactively inform customers about price changes

## 🚨 Important Notes

- Respect competitor websites' terms of service and robots.txt
- Implement appropriate delays between requests to avoid rate limiting
- Regularly review and update your monitoring parameters
- Monitor API usage to manage costs effectively
- Keep your credentials secure and rotate them regularly
- Consider legal implications of automated price monitoring

## 🔧 Troubleshooting

**Common Issues:**
- ScrapeGraphAI connection errors: Verify API key and account status
- Google Sheets permission errors: Check OAuth2 scope and permissions
- Price parsing errors: Review the Code node's JavaScript logic
- Rate limiting: Adjust monitoring frequency and implement delays
- Alert delivery failures: Check notification service credentials

**Support Resources:**
- ScrapeGraphAI documentation and API reference
- n8n community forums for workflow assistance
- Google Sheets API documentation for advanced configurations
- Slack API documentation for notification setup

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
