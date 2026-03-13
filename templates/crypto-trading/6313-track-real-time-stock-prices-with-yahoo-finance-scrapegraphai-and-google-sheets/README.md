# 📈 Track real-time stock prices with Yahoo Finance, ScrapegraphAI, and Google Sheets

> ⚡ **3,668 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works

This automated workflow monitors stock prices by scraping real-time data from Yahoo Finance. It uses a scheduled trigger to run at specified intervals, extracts key stock metrics using AI-powered extraction, formats the data through a custom code node, and automatically saves the structured information to Google Sheets for tracking and analysis.

## Key Steps:
- **Scheduled Trigger**: Runs automatically at specified intervals to collect fresh stock data
- **AI-Powered Scraping**: Uses ScrapeGraphAI to intelligently extract stock information (symbol, current price, price change, change percentage, volume, and market cap) from Yahoo Finance
- **Data Processing**: Formats extracted data through a custom Code node for optimal spreadsheet compatibility and handles both single and multiple stock formats
- **Automated Storage**: Saves all stock data to Google Sheets with proper column mapping for easy filtering, analysis, and historical tracking

# Set up steps

**Setup Time: 5-10 minutes**

1. **Configure Credentials**: Set up your ScrapeGraphAI API key and Google Sheets OAuth2 credentials
2. **Customize Target**: Update the website URL in the ScrapeGraphAI node to your desired stock symbol (currently set to AAPL)
3. **Configure Schedule**: Set your preferred trigger frequency (daily, hourly, etc.) for stock price monitoring
4. **Map Spreadsheet**: Connect to your Google Sheets document and configure column mapping for the stock data fields

**Pro Tips:**
- Keep detailed configuration notes in the sticky notes within the workflow
- Test with a single stock first before scaling to multiple stocks
- Consider modifying the Code node to handle different stock symbols or add additional data fields
- Perfect for building a historical database of stock performance over time
- Can be extended to track multiple stocks by modifying the ScrapeGraphAI prompt

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
