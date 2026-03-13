# 🎬 Track stock prices with ScrapeGraphAI, Yahoo Finance & Google Sheets

> ⚡ **1,858 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI-Powered Stock Tracker with Yahoo Finance & Google Sheets

![Stock Tracker Workflow](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=AI-Powered+Stock+Tracker+Workflow+Preview)

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This automated workflow monitors stock prices by scraping real-time data from Yahoo Finance. It uses a scheduled trigger to run at specified intervals, extracts key stock metrics using AI-powered extraction, formats the data through a custom code node, and automatically saves the structured information to Google Sheets for tracking and analysis.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or cloud)
- ScrapeGraphAI community node installed
- Google Sheets API access
- Yahoo Finance access (no API key required)

### Required Credentials
- **ScrapeGraphAI API Key** - For web scraping capabilities
- **Google Sheets OAuth2** - For spreadsheet integration

### Google Sheets Setup
Create a Google Sheets document with the following column structure:

| Column A | Column B | Column C | Column D | Column E | Column F | Column G |
|----------|----------|----------|----------|----------|----------|----------|
| **symbol** | **current_price** | **change** | **change_percent** | **volume** | **market_cap** | **timestamp** |
| AAPL | 225.50 | +2.15 | +0.96% | 45,234,567 | 3.45T | 2024-01-15 14:30:00 |

## How it works

This automated workflow monitors stock prices by scraping real-time data from Yahoo Finance. It uses a scheduled trigger to run at specified intervals, extracts key stock metrics using AI-powered extraction, formats the data through a custom code node, and automatically saves the structured information to Google Sheets for tracking and analysis.

## Key Steps:
- **Scheduled Trigger**: Runs automatically at specified intervals to collect fresh stock data
- **AI-Powered Scraping**: Uses ScrapeGraphAI to intelligently extract stock information (symbol, current price, price change, change percentage, volume, and market cap) from Yahoo Finance
- **Data Processing**: Formats extracted data through a custom Code node for optimal spreadsheet compatibility and handles both single and multiple stock formats
- **Automated Storage**: Saves all stock data to Google Sheets with proper column mapping for easy filtering, analysis, and historical tracking

## Set up steps

**Setup Time: 5-10 minutes**

1. **Configure Credentials**: Set up your ScrapeGraphAI API key and Google Sheets OAuth2 credentials
2. **Customize Target**: Update the website URL in the ScrapeGraphAI node to your desired stock symbol (currently set to AAPL)
3. **Configure Schedule**: Set your preferred trigger frequency (daily, hourly, etc.) for stock price monitoring
4. **Map Spreadsheet**: Connect to your Google Sheets document and configure column mapping for the stock data fields

## Node Descriptions

### Core Workflow Nodes:
- **Schedule Trigger** - Initiates the workflow at specified intervals
- **Yahoo Finance Stock Scraper** - Extracts real-time stock data using ScrapeGraphAI
- **Stock Data Formatter** - Processes and formats extracted data for spreadsheet compatibility
- **Google Sheets Stock Logger** - Saves formatted stock data to your spreadsheet

### Data Flow:
1. **Trigger** → **Scraper** → **Formatter** → **Logger**

## Customization Examples

### Track Multiple Stocks
```javascript
// In the ScrapeGraphAI node, modify the URL to track different stocks:
const stockSymbols = ['AAPL', 'GOOGL', 'MSFT', 'TSLA'];
const baseUrl = 'https://finance.yahoo.com/quote/';
```

### Add Additional Data Fields
```javascript
// In the Code node, extend the data structure:
const extendedData = {
  ...stockData,
  pe_ratio: extractedData.pe_ratio,
  dividend_yield: extractedData.dividend_yield,
  day_range: extractedData.day_range
};
```

### Custom Scheduling
```javascript
// Modify the Schedule Trigger for different frequencies:
// Daily at 9:30 AM (market open): "0 30 9 * * *"
// Every 15 minutes during market hours: "0 */15 9-16 * * 1-5"
// Weekly on Monday: "0 0 9 * * 1"
```

## Data Output Format

The workflow outputs structured JSON data with the following fields:

```json
{
  "symbol": "AAPL",
  "current_price": "225.50",
  "change": "+2.15",
  "change_percent": "+0.96%",
  "volume": "45,234,567",
  "market_cap": "3.45T",
  "timestamp": "2024-01-15T14:30:00Z"
}
```

## Troubleshooting

### Common Issues
1. **ScrapeGraphAI Rate Limits** - Implement delays between requests
2. **Yahoo Finance Structure Changes** - Update scraping prompts
3. **Google Sheets Permission Errors** - Verify OAuth2 credentials and document permissions

### Performance Tips
- Use appropriate trigger intervals (avoid excessive scraping)
- Implement error handling for network issues
- Consider data validation before saving to sheets

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
