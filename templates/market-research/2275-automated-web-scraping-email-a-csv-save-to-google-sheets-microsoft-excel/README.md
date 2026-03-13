# 📊 Automated web scraping: email a CSV, save to Google Sheets & Microsoft Excel

> ⚡ **125,530 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

How it works:
* The workflow starts by sending a request to a website to retrieve its HTML content.
* It then parses the HTML extracting the relevant information
* The extracted data is storted and converted into a CSV file.
* The CSV file is attached to an email and sent to your specified address.
* The data is simultaneously saved to both Google Sheets and Microsoft Excel for further analysis or use.

Set-up steps:
1. Change the website to scrape in the "Fetch website content" node
2. Configure Microsoft Azure credentials with Microsoft Graph permissions (required for the Save to Microsoft Excel 365 node)
3. Configure Google Cloud credentials with access to Google Drive, Google Sheets and Gmail APIs (the latter is required for the Send CSV via e-mail node).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Microsoft Excel 365, Gmail, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
