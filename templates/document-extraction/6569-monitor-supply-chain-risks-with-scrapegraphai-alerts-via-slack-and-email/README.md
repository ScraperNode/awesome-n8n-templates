# 🔬 Monitor supply chain risks with ScrapeGraphAI alerts via Slack and email

> ⚡ **605 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# How it works

This workflow automatically monitors supplier health and supply chain risks, providing real-time alerts and daily reports to procurement teams.

## Key Steps

1. **Daily Risk Check** - Runs the workflow every morning at 9:00 AM to assess supplier health.
2. **Multi-Source Data Collection** - Scrapes supplier websites, investor relations pages, and industry news for risk indicators.
3. **AI-Powered Risk Analysis** - Uses ScrapeGraphAI to extract and analyze financial status, operational issues, and regulatory problems.
4. **Risk Scoring Engine** - Calculates comprehensive risk scores (1-10) based on multiple factors including financial health, operational disruptions, and news sentiment.
5. **Alternative Supplier Discovery** - Automatically searches for backup suppliers when high-risk situations are detected.
6. **Smart Alert System** - Routes notifications based on risk levels: immediate alerts for high-risk suppliers, daily summaries for normal operations.
7. **Multi-Channel Notifications** - Sends alerts via Slack and detailed reports via email to procurement teams.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for web scraping capabilities.
2. **Set up Slack integration** - Connect your Slack workspace and configure the #procurement-alerts and #supply-chain-updates channels.
3. **Configure email settings** - Set up email credentials for detailed reports to procurement teams.
4. **Customize supplier URLs** - Update the supplier website URLs to monitor your specific suppliers.
5. **Adjust risk thresholds** - Modify the risk scoring parameters based on your industry and risk tolerance.
6. **Set notification preferences** - Configure alert conditions and message formatting for your team's needs.

## 🔗 Nodes Used

Send Email, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
