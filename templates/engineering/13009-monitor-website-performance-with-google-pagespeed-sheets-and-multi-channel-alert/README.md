# ⚒️ Monitor website performance with Google PageSpeed, Sheets and multi-channel alerts

> ⚡ **23 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

## Who it's for
This **n8n workflow** is designed for website administrators, digital marketers, SEO specialists, and business owners who want to continuously monitor their website performance metrics. It provides a complete end-to-end system capable of **automatically testing website performance** using Google PageSpeed Insights API, analyzing the results, and sending notifications when performance falls below specified thresholds.

## **Features**
- Automatically monitors website performance on scheduled intervals
- Tests websites on different devices (mobile/desktop) as configured
- Extracts Core Web Vitals metrics (LCP, FID, CLS)
- Generates performance scores and categorizes website status
- Provides actionable recommendations for performance improvements
- Sends alerts through multiple channels (Email, Telegram, Discord, WhatsApp)
- Updates Google Sheets with test results and maintains historical data
- Only tests websites that haven't been checked recently (configurable threshold)
- Processes multiple websites in batches to avoid API limits

## Requirements
- Google PageSpeed Insights API key
- Google Sheets API access with OAuth2 credentials
- Notification service credentials (Gmail, Telegram, Discord, WhatsApp/Rapiwa)
- A Google Sheet with website URLs, device types, and alert thresholds configured

## Important Notes
* Workflow runs on a scheduled trigger to automatically test websites
* Tests are only performed on websites that haven't been checked in the last 2 days
* Results are saved to a separate "report" sheet in the Google Sheet
- The original "data" sheet is updated with the last processed date and website status
* Alert messages include performance scores, Core Web Vitals metrics, and recommendations
* Performance categories are determined as: excellent (90+), needs improvement (50-89), or poor (&lt;50)
* The workflow processes up to 10 websites at a time to avoid overwhelming the system
* Different alert messages are generated based on performance severity levels

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Discord, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
