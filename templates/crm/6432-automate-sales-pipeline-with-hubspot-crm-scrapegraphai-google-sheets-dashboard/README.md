# 🤝 Automate sales pipeline with HubSpot CRM, ScrapeGraphAI & Google Sheets dashboard

> ⚡ **858 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Sales Pipeline Automation Dashboard with AI Lead Intelligence

## 🎯 Target Audience
- Sales managers and team leads
- Business development representatives
- Marketing teams managing lead generation
- CRM administrators and sales operations
- Account executives and sales representatives
- Sales enablement professionals
- Revenue operations (RevOps) teams

## 🚀 Problem Statement
Manual lead qualification and sales pipeline management is inefficient and often leads to missed opportunities or poor lead prioritization. This template solves the challenge of automatically scoring, qualifying, and routing leads using AI-powered intelligence to maximize conversion rates and sales team productivity.

## 🔧 How it Works

This workflow automatically processes new leads using AI-powered intelligence, scores and qualifies them based on multiple factors, and automates the entire sales pipeline from lead capture to deal creation.

### Key Components

1. **Dual Trigger System** - Scheduled monitoring and webhook triggers for real-time lead processing
2. **AI-Powered Lead Intelligence** - Advanced scoring algorithm based on 7 key factors
3. **Multi-Source Data Enrichment** - LinkedIn and Crunchbase integration for comprehensive lead profiles
4. **Automated Sales Actions** - Intelligent routing, task creation, and follow-up sequences
5. **Multi-Platform Integration** - HubSpot CRM, Slack notifications, and Google Sheets dashboard

## 📊 Google Sheets Column Specifications

The template creates the following columns in your Google Sheets:

| Column | Data Type | Description | Example |
|--------|-----------|-------------|---------|
| **timestamp** | DateTime | When the lead was processed | "2024-01-15T10:30:00Z" |
| **lead_id** | String | Unique lead identifier | "LEAD-2024-001234" |
| **first_name** | String | Lead's first name | "John" |
| **last_name** | String | Lead's last name | "Smith" |
| **email** | String | Lead's email address | "john@company.com" |
| **company_name** | String | Company name | "Acme Corp" |
| **job_title** | String | Lead's job title | "Marketing Director" |
| **lead_score** | Number | AI-calculated score (0-100) | 85 |
| **grade** | String | Lead grade (A+, A, B+, B, C+) | "A+" |
| **category** | String | Lead category | "Enterprise" |
| **priority** | String | Priority level | "Critical" |
| **lead_source** | String | How the lead was acquired | "Website Form" |
| **assigned_rep** | String | Assigned sales representative | "Senior AE" |
| **company_size** | String | Company employee count | "201-500 employees" |
| **industry** | String | Company industry | "Technology" |
| **funding_stage** | String | Company funding stage | "Series B" |
| **estimated_value** | String | Estimated deal value | "$50K-100K" |

## 🛠️ Setup Instructions

**Estimated setup time: 25-30 minutes**

### Prerequisites
- n8n instance with community nodes enabled
- ScrapeGraphAI API account and credentials
- HubSpot CRM account with API access
- Google Sheets account with API access
- Slack workspace for notifications (optional)
- Email service for welcome emails (optional)

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

#### 3. Set up HubSpot CRM Integration
- Add HubSpot API credentials
- Grant necessary permissions for contacts, deals, and tasks
- Configure custom properties for lead scoring and qualification
- Test the connection to ensure it's working

#### 4. Set up Google Sheets Connection
- Add Google Sheets OAuth2 credentials
- Grant necessary permissions for spreadsheet access
- Create a new spreadsheet for sales pipeline data
- Configure the sheet name (default: "Sales Pipeline")

#### 5. Configure Lead Scoring Parameters
- Update the lead scoring weights in the Code node
- Customize ideal customer profile criteria
- Set automation trigger thresholds
- Adjust sales rep assignment logic

#### 6. Set up Notification Channels
- Configure Slack webhook or API credentials
- Set up email service credentials for welcome emails
- Define notification preferences for different lead grades
- Test notification delivery

#### 7. Configure Triggers
- Set up webhook endpoint for real-time lead capture
- Configure scheduled trigger for periodic monitoring
- Choose appropriate time zones for your business hours
- Test both trigger mechanisms

#### 8. Test and Validate
- Run the workflow manually with sample lead data
- Check HubSpot for proper contact and deal creation
- Verify Google Sheets data formatting
- Test all notification channels

## 🔄 Workflow Customization Options

### Modify Lead Scoring Algorithm
- Adjust scoring weights for different factors
- Add new scoring criteria (geographic location, technology stack, etc.)
- Customize ideal customer profile parameters
- Implement industry-specific scoring models

### Extend Data Enrichment
- Add more data sources (ZoomInfo, Apollo, etc.)
- Include social media presence analysis
- Add technographic data collection
- Implement intent signal detection

### Customize Sales Automation
- Modify follow-up sequences for different lead categories
- Add more sophisticated sales rep assignment logic
- Implement territory-based routing
- Add automated meeting scheduling

### Output Customization
- Add data visualization and reporting features
- Implement sales pipeline analytics
- Create executive dashboards with key metrics
- Add conversion rate tracking and analysis

## 📈 Use Cases

- **Lead Qualification**: Automatically score and qualify incoming leads
- **Sales Pipeline Management**: Streamline the entire sales process
- **Lead Routing**: Intelligently assign leads to appropriate sales reps
- **Follow-up Automation**: Ensure consistent and timely follow-up
- **Sales Intelligence**: Provide comprehensive lead insights
- **Performance Tracking**: Monitor sales team and pipeline performance

## 🚨 Important Notes

- Respect LinkedIn and Crunchbase terms of service and rate limits
- Implement appropriate delays between requests to avoid rate limiting
- Regularly review and update your lead scoring parameters
- Monitor API usage to manage costs effectively
- Keep your credentials secure and rotate them regularly
- Ensure GDPR compliance for lead data processing

## 🔧 Troubleshooting

**Common Issues:**
- ScrapeGraphAI connection errors: Verify API key and account status
- HubSpot API errors: Check API key and permissions
- Google Sheets permission errors: Check OAuth2 scope and permissions
- Lead scoring errors: Review the Code node's JavaScript logic
- Rate limiting: Adjust request frequency and implement delays

**Support Resources:**
- ScrapeGraphAI documentation and API reference
- HubSpot API documentation and developer resources
- n8n community forums for workflow assistance
- Google Sheets API documentation for advanced configurations
- Sales automation best practices and guidelines

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, HubSpot, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
