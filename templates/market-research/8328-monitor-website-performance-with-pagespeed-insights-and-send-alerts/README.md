# 📊 Monitor website performance with PageSpeed Insights and send alerts

> ⚡ **1,245 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Monitor website performance with PageSpeed Insights and save to Google Sheets with alerts

This n8n template automatically monitors website performance using Google's PageSpeed Insights API, compiles detailed reports, and tracks performance trends over time in Google Sheets.

**Use cases:** Agency client monitoring, competitor analysis, performance regression detection, SEO reporting, site migration monitoring, A/B testing performance impact, and maintaining performance SLAs.

## Who's it for
- Digital agencies monitoring client websites
- SEO professionals tracking site performance
- DevOps teams maintaining performance SLAs
- Business owners wanting automated site monitoring

## How it works
- **Automated Testing:** Scheduled audits of multiple websites using PageSpeed Insights API
- **Core Web Vitals:** Tracks LCP, FID, CLS, and overall performance scores
- **Historical Tracking:** Maintains performance history for trend analysis
- **Alert System:** Sends notifications when performance drops below thresholds
- **Detailed Reporting:** Captures specific recommendations and optimization opportunities

## Two Workflow Paths
1. **Scheduled Audit:** Automatically tests all URLs from Google Sheet on schedule
2. **On-Demand Testing:** Webhook endpoint for immediate single-URL testing

## How to set up
1. Get a free PageSpeed Insights API key from Google Cloud Console
2. Create Google Sheet with columns: URL, Site Name, Category, Alert Threshold, Last_Processed_Date and Device.
3. Set up Google Sheets API credentials
4. Configure notification preferences (Slack, email, etc.)
5. Set audit schedule (daily, weekly, or custom)
6. Define performance thresholds for alerts

## Requirements
- Google PageSpeed Insights API key (free)
- Google Sheets API access
- n8n instance (cloud or self-hosted)
- Optional: Slack/email for notifications

## Google Sheet Structure
**Input Sheet ("sites"):**
- URL, Site_Name, Category, Alert_Threshold, Last_Processed_Date and Device.

**Results Sheet ("audit_results"):**
- Date, URL, Site_Name, Device, Performance_Score, LCP, FID, CLS, Recommendations, Full_Report_URL

## API Usage (On-Demand)
POST to webhook:
```json
{
  "url": "https://example.com",
  "site_name": "Example Site",
  "alert_threshold": 75
}
```

## How to customize
- Add custom performance thresholds per site
- Include additional metrics (accessibility, SEO, best practices)
- Connect to other dashboards (Data Studio, Grafana)
- Add competitor benchmarking
- Integrate with project management tools for issue tracking
- Set up different notification channels based on severity
- Sample Google Sheet Included

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
