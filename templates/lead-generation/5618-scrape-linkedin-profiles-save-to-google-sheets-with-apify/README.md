# 🎣 Scrape LinkedIn profiles & save to Google Sheets with Apify

> ⚡ **9,983 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This n8n workflow automates the process of scraping LinkedIn profiles using the Apify platform and organizing the extracted data into Google Sheets for easy analysis and follow-up.

## Use Cases
- **Lead Generation**: Extract contact information and professional details from LinkedIn profiles
- **Recruitment**: Gather candidate information for talent acquisition
- **Market Research**: Analyze professional networks and industry connections
- **Sales Prospecting**: Build targeted prospect lists with detailed professional information

## How It Works

### 1. **Workflow Initialization & Input**
- **Webhook Start Scraper**: Triggers the entire scraping workflow
- **Read LinkedIn URLs**: Retrieves LinkedIn profile URLs from Google Sheets
- **Schedule Scraper Trigger**: Sets up automated scheduling for regular scraping

### 2. **Data Processing & Extraction**
- **Data Formatting**: Prepares and structures the LinkedIn URLs for processing
- **Fetch Profile Data**: Makes HTTP requests to Apify API with profile URLs
- **Run Scraper Actor**: Executes the Apify LinkedIn scraper actor
- **Get Scraped Results**: Retrieves the extracted profile data from Apify

### 3. **Data Storage & Completion**
- **Save to Google Sheets**: Stores the scraped profile data in organized spreadsheet format
- **Update Progress Tracker**: Updates workflow status and progress tracking
- **Process Complete Wait**: Ensures all operations finish before final steps
- **Send Success Notification**: Alerts users when scraping is successfully completed

## Requirements

### **Apify Account**
- Active Apify account with sufficient credits
- API token for authentication
- Access to LinkedIn Profile Scraper actor

### **Google Sheets**
- Google account with Sheets access
- Properly formatted input sheet with LinkedIn URLs
- Credentials configured in n8n

### **n8n Setup**
- HTTP Request node credentials for Apify
- Google Sheets node credentials
- Webhook endpoint configured

## How to Use

### **Step 1: Prepare Your Data**
1. Create a Google Sheet with LinkedIn profile URLs
2. Ensure the sheet has a column named 'linkedin_url'
3. Add any additional columns for metadata (name, company, etc.)

### **Step 2: Configure Credentials**
1. Set up Apify API credentials in n8n
2. Configure Google Sheets authentication
3. Update webhook endpoint URL

### **Step 3: Customize Settings**
1. Adjust scraping parameters in the Apify node
2. Modify data fields to extract based on your needs
3. Set up notification preferences

### **Step 4: Execute Workflow**
1. Trigger via webhook or manual execution
2. Monitor progress through the workflow
3. Check Google Sheets for scraped data
4. Review completion notifications

## Good to Know

- **Rate Limits**: LinkedIn scraping is subject to rate limits. The workflow includes delays to respect these limits.
- **Data Quality**: Results depend on profile visibility and LinkedIn's anti-scraping measures.
- **Costs**: Apify charges based on compute units used. Monitor your usage to control costs.
- **Compliance**: Ensure your scraping activities comply with LinkedIn's Terms of Service and applicable laws.

## Customizing This Workflow

### **Enhanced Data Processing**
- Add data enrichment steps to append additional information
- Implement duplicate detection and merge logic
- Create data validation rules for quality control

### **Advanced Notifications**
- Set up Slack or email alerts for different scenarios
- Create detailed reports with scraping statistics
- Implement error recovery mechanisms

### **Integration Options**
- Connect to CRM systems for automatic lead creation
- Integrate with marketing automation platforms
- Export data to analytics tools for further analysis

## Troubleshooting

### **Common Issues**
- **Apify Actor Failures**: Check API limits and actor status
- **Google Sheets Errors**: Verify permissions and sheet structure
- **Rate Limiting**: Implement longer delays between requests
- **Data Quality Issues**: Review scraping parameters and target profiles

### **Best Practices**
- Test with small batches before scaling up
- Monitor Apify credit usage regularly
- Keep backup copies of your data
- Regular validation of scraped information accuracy

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
