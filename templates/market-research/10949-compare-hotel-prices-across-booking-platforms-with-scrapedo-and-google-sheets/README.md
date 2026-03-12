# 📊 Compare hotel prices across booking platforms with Scrape.do and Google Sheets

> ⚡ **595 views** · 📊 [Market Research & Insights](../)

## Description

# 🏨 Hotel Price Comparison Workflow with Scrape.do

This template requires a self-hosted n8n instance to run.

A complete n8n automation that extracts hotel prices from multiple booking platforms (Booking.com, Hotels.com, Expedia, etc.) using [Scrape.do](https://scrape.do/) API, compares prices across platforms, and saves structured results into Google Sheets for price monitoring and decision-making.

## 📋 Overview

This workflow provides an automated hotel price comparison solution that monitors hotel rates across different booking platforms for specific destinations and dates. Ideal for travel agencies, price comparison websites, travelers, and hospitality analysts who need real-time pricing insights without manual searching.

### Who is this for?

- Travel agencies automating price comparisons
- Price comparison website operators
- Budget-conscious travelers tracking best deals
- Hospitality analysts monitoring market pricing
- Hotel managers tracking competitor rates
- Travel bloggers researching accommodation options

### What problem does this workflow solve?

- Eliminates manual price checking across multiple sites
- Processes multiple hotels and date ranges automatically
- Extracts structured pricing data (price, rating, amenities)
- Identifies the cheapest option across platforms
- Automates saving results into Google Sheets
- Ensures consistent and repeatable price monitoring

## ⚙️ What this workflow does

1. **Manual Trigger** → Starts the workflow manually or on schedule
2. **Get Search Parameters from Sheet** → Reads hotel names, destinations, check-in/check-out dates from Google Sheet
3. **URL Encode Parameters** → Converts search parameters into URL-safe format
4. **Process Hotels in Batches** → Handles multiple searches sequentially to avoid rate limits
5. **Fetch Hotel Data from Multiple Platforms** → Calls [Scrape.do](https://scrape.do/) API to retrieve pricing from Booking.com, Hotels.com, and Expedia
6. **Extract and Structure Price Data** → Parses HTML into structured hotel data (name, price, rating, amenities)
7. **Compare Prices Across Platforms** → Identifies best price and calculates savings
8. **Append Results to Sheet** → Writes comparison results into Google Sheet

## 📊 Output Data Points

| Field | Description | Example |
|-------|-------------|---------|
| Hotel Name | Name of the hotel | Hilton Garden Inn Downtown |
| Destination | City or location | New York, NY |
| Check-in Date | Arrival date | 2025-12-15 |
| Check-out Date | Departure date | 2025-12-18 |
| Nights | Number of nights | 3 |
| Booking.com Price | Price from Booking.com | $450 |
| Hotels.com Price | Price from Hotels.com | $425 |
| Expedia Price | Price from Expedia | $440 |
| Best Price | Lowest price found | $425 |
| Best Platform | Platform with lowest price | Hotels.com |
| Savings | Difference from highest price | $25 |
| Average Rating | Average customer rating | 8.5/10 |
| Total Reviews | Number of reviews | 1,247 |
| Free Cancellation | Cancellation policy | Yes |
| Breakfast Included | Breakfast availability | No |

## ⚙️ Setup

### Prerequisites

- n8n instance (self-hosted)
- Google account with Sheets access
- [Scrape.do](https://scrape.do/) account with API token

### Google Sheet Structure

This workflow uses one Google Sheet with two tabs:

#### Input Tab: "Search Parameters"

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| Hotel Name | Text | Name of hotel (optional) | Hilton Garden Inn |
| Destination | Text | City or location | New York, NY |
| Check-in Date | Date | Arrival date (YYYY-MM-DD) | 2025-12-15 |
| Check-out Date | Date | Departure date (YYYY-MM-DD) | 2025-12-18 |
| Guests | Number | Number of guests | 2 |
| Rooms | Number | Number of rooms | 1 |

#### Output Tab: "Price Comparison"

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| Search Date | Timestamp | When search was performed | 2025-11-17 10:30:00 |
| Hotel Name | Text | Name of the hotel | Hilton Garden Inn Downtown |
| Destination | Text | City/location | New York, NY |
| Check-in | Date | Arrival date | 2025-12-15 |
| Check-out | Date | Departure date | 2025-12-18 |
| Nights | Number | Number of nights | 3 |
| Booking.com Price | Currency | Price from Booking.com | $450 |
| Hotels.com Price | Currency | Price from Hotels.com | $425 |
| Expedia Price | Currency | Price from Expedia | $440 |
| Best Price | Currency | Lowest price | $425 |
| Best Platform | Text | Cheapest platform | Hotels.com |
| Savings | Currency | Potential savings | $25 |
| Rating | Number | Average rating | 8.5 |
| Reviews | Number | Total reviews | 1,247 |

## 🛠 Step-by-Step Setup

1. **Import Workflow**: Copy the JSON → n8n → Workflows → + Add → Import from JSON
2. **Configure [Scrape.do](https://scrape.do/) API**:
   - Endpoint: `https://api.scrape.do/`
   - Parameter: `token=YOUR_SCRAPEDO_TOKEN`
   - Add `render=true` for JavaScript-heavy booking sites
   - Add `country=US` (or target country) for localized results
3. **Configure Google Sheets**:
   - Create a sheet with two tabs: **Search Parameters** (input), **Price Comparison** (output)
   - Set up Google Sheets OAuth2 credentials in n8n
   - Replace placeholders: `YOUR_GOOGLE_SHEET_ID` and `YOUR_GOOGLE_SHEETS_CREDENTIAL_ID`
4. **Configure Platform URLs**:
   - Update base URLs for Booking.com, Hotels.com, Expedia in HTTP Request nodes
   - Customize search parameters based on platform URL structure
5. **Run & Test**:
   - Add test data in Search Parameters tab
   - Execute workflow → Check results in Price Comparison tab

## 🧰 How to Customize

- **Add more platforms**: Include Agoda, Trivago, or direct hotel websites by adding new HTTP Request nodes
- **Price alerts**: Add conditional logic to send email/Slack notification when price drops below threshold
- **Historical tracking**: Store daily snapshots to track price trends over time
- **Filtering**: Add filters for amenities (pool, gym, parking) or star ratings
- **Batch Size**: Adjust "Process Hotels in Batches" based on API rate limits
- **Rate Limiting**: Insert Wait nodes (20–30 seconds) between platform requests
- **Currency conversion**: Add currency API integration for multi-currency comparison
- **Scheduling**: Add Schedule Trigger to run automatically (daily/weekly)

## 📊 Use Cases

- **Travel Planning**: Find the best hotel deals for upcoming trips
- **Price Monitoring**: Track price changes for specific hotels over time
- **Agency Operations**: Automate price research for client bookings
- **Market Analysis**: Monitor competitor pricing in hospitality market
- **Deal Alerts**: Get notified when prices drop below target threshold
- **Budget Planning**: Compare costs across multiple destinations

## 📈 Performance & Limits

- **Single Hotel (3 platforms)**: ~30–45 seconds (depends on [Scrape.do](https://scrape.do/) response)
- **Batch of 10 hotels**: 8–12 minutes typical
- **Large Sets (50+ hotels)**: 45–90 minutes depending on API credits & batching
- **API Calls**: 3 [Scrape.do](https://scrape.do/) requests per hotel (one per platform)
- **Reliability**: 90%+ extraction success, 95%+ price accuracy

## 🧩 Troubleshooting

- **API error** → Check `YOUR_SCRAPEDO_TOKEN` and API credits on [Scrape.do](https://scrape.do/) dashboard
- **No hotels loaded** → Verify Google Sheet ID & tab name = **Search Parameters**
- **Permission denied** → Re-authenticate Google Sheets OAuth2 in n8n
- **Empty prices** → Check if [Scrape.do](https://scrape.do/) rendered JavaScript (`render=true`)
- **Parsing errors** → Booking sites change HTML structure; update CSS selectors in Extract nodes
- **Workflow timeout** → Reduce batch size or add more Wait nodes between requests
- **Wrong currency** → Add `country` parameter to [Scrape.do](https://scrape.do/) request for localized pricing

## 🤝 Support & Community

- **n8n Forum**: https://community.n8n.io
- **n8n Docs**: https://docs.n8n.io
- **[Scrape.do](https://scrape.do/) Dashboard**: https://dashboard.scrape.do
- **[Scrape.do](https://scrape.do/) Documentation**: https://scrape.do/docs

## 🎯 Final Notes

This workflow provides a powerful foundation for automated hotel price comparison across multiple booking platforms using [Scrape.do](https://scrape.do/) and Google Sheets.

You can extend it with:
- Real-time price alerts via email/Slack
- Historical price tracking and trend analysis
- Integration with travel planning dashboards
- Automated booking when price threshold is met
- Multi-destination comparison for trip planning

**Pro Tip**: Schedule this workflow to run daily to catch early-bird discounts and flash sales automatically!

## 🔗 Nodes Used

HTTP Request, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
