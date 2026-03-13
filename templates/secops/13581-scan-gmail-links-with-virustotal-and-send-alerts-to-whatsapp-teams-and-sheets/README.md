# 🔒 Scan Gmail links with VirusTotal and send alerts to WhatsApp, Teams, and Sheets

> ⚡ **5 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for
This **n8n workflow** is designed for IT security professionals, email administrators, and organizations that want to automatically scan URLs received in emails for potential security threats. It provides a complete end-to-end system capable of **automatically detecting malicious URLs** using VirusTotal API, analyzing the results, and sending notifications when suspicious links are found.

## **Features**
- Automatically monitors Gmail for new emails on a continuous basis (every minute)
- Extracts all URLs from email content while filtering out Google links
- Scans each URL using VirusTotal's comprehensive security database
- Categorizes URLs based on threat level (malicious, suspicious, harmless, undetected)
- Sends immediate alerts through multiple channels (WhatsApp via Rapiwa, Microsoft Teams)
- Updates Google Sheets with scan results for historical tracking and analysis
- Processes URLs in batches to optimize performance
- Filters out common Google links to reduce false positives

## Requirements
- Gmail account with OAuth2 credentials
- VirusTotal API key
- Google Sheets API access with OAuth2 credentials
- Rapiwa API credentials for WhatsApp notifications
- Microsoft Teams credentials for team notifications
- A Google Sheet configured to store scan results

## Important Notes
* Workflow runs continuously, checking for new emails every minute
* Only non-Google URLs are scanned to focus on potentially suspicious links
* Results are categorized based on VirusTotal's analysis: malicious, suspicious, harmless, undetected, timeout, failure, or type_unsupported
* Alert messages include the URL and all relevant security statistics from VirusTotal
* All scan results are stored in a Google Sheet for future reference and analysis
* The workflow processes URLs in batches to optimize performance and avoid API limits
* Immediate notifications are sent when potentially malicious URLs are detected

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Microsoft Teams, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
