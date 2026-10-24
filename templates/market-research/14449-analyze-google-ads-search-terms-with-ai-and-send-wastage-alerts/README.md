# 📊 Analyze Google Ads search terms with AI and send wastage alerts

> ⚡ **408 views** · 📊 [Market Research & Insights](../)

## Description

## Who Is This For?
This workflow is designed for **Google Ads advertisers, PPC managers, and marketing teams** who want to automatically monitor and optimize their search term performance. It's particularly valuable for those running brand campaigns who need to identify and eliminate wasteful ad spend on non-brand keywords.

## What This Workflow Does
This workflow functions as an **automated Google Ads performance monitoring and optimization system** that:
1. **Fetches search term data** from active Google Ads campaigns daily
2. **Filters out brand terms** and excluded search terms automatically
3. **Analyzes performance metrics** using AI to identify wasteful keywords
4. **Generates optimization recommendations** for negative keyword lists
5. **Sends detailed reports** through multiple communication platforms
6. **Calculates ad wastage** in USD for better budget management

## Key Features
* **Automated Daily Monitoring** – Runs every day at 8 AM to check campaign performance
* **AI-Powered Analysis** – Uses multiple AI models (DeepSeek, OpenAI, xAI, Anthropic) for intelligent keyword categorization
* **Performance Metrics Calculation** – Automatically calculates CTR, CPC, conversions, and ad wastage
* **Multi-Channel Reporting** – Sends reports to Slack, Microsoft Teams, WhatsApp, and Discord
* **Smart Filtering** – Automatically excludes brand terms and excluded search terms
* **Cost Analysis** – Calculates total ad wastage in USD for budget optimization
* **14-Day Data Window** – Analyzes search terms from the past 14 days for comprehensive insights

## Requirements & Setup
- **Google Ads API**: Required for fetching campaign and search term data
- **AI Model APIs**: DeepSeek, OpenAI, xAI, or Anthropic for keyword analysis
- **Communication APIs**: Slack, Microsoft Teams, WhatsApp (Rapiwa), Discord for report distribution
- **Scheduled Trigger**: Configured to run daily at 8 AM
- **Google Ads Manager and Client IDs**: For accessing specific campaign data

## How It Works
1. **Data Collection**: Fetches active campaigns and extracts search term data from the past 14 days
2. **Data Processing**: Cleans and aggregates metrics by search term, campaign, and ad group
3. **AI Analysis**: Uses AI to categorize keywords into wasteful (zero conversions) and review-worthy (has conversions)
4. **Report Generation**: Creates structured reports with recommendations and cost analysis
5. **Multi-Platform Distribution**: Sends formatted reports to all configured communication channels

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

HTTP Request, Slack, Discord, Microsoft Teams, Google Ads, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
