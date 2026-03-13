# 📊 Automate real estate construction site discovery with 99acres email scraper

> ⚡ **432 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow helps users easily discover nearby residential construction projects by automatically scraping and analyzing property listings from 99acres and other real estate platforms. Users can send an email with their location preferences and receive a curated list of available properties with detailed information, including pricing, area, possession dates, and construction status.

## **Good to know**
* The workflow focuses specifically on residential construction projects and active developments
* Property data is scraped in real-time to ensure the most current information
* Results are automatically formatted and structured for easy reading
* The system handles multiple property formats and data variations from different sources
* Fallback mechanisms ensure reliable data extraction even when website structures change

## **How it works**
* **Trigger: New Email** - Detects incoming emails with property search requests and extracts location preferences from email content
* **Extract Area & City** - Parses the email body to identify target areas (e.g., Gota, Ahmedabad) and falls back to city-level search if specific area is not mentioned
* **Scrape Construction Projects** - Performs web scraping on 99acres and other property websites based on the extracted area and city information
* **Parse Project Listings** - Cleans and formats the scraped HTML data into structured project entries with standardized fields
* **Format Project Details** - Transforms all parsed projects into a consistent email-ready list format with bullet points and organized information
* **Send Results to User** - Delivers a professionally formatted email with the complete list of matching construction projects to the original requester

## **Email Format Examples**

### **Input Email Format**
```
To: properties@yourcompany.com
Subject: Property Search Request

Hi, I am interested in buying a flat. Can you please send me the list of available properties in Gota, Ahmedabad?
```

### **Output Email Example**
```html
Subject: 🏘️ Property Search Results: 4 Projects Found in Gota, Ahmedabad

🏘️ Available Construction Projects in Gota, Ahmedabad

Search Area: Gota, Ahmedabad
Total Projects: 4
Search Date: August 4, 2025

📋 PROJECT LISTINGS:

🔷 Project 1
🏠 Name: Vivaan Oliver offers
🏢 BHK: 3 BHK
💰 Price: N/A
📐 Area: 851.0 Sq.Ft
🗓️ Possession: August 2025
📊 Status: under construction
📍 Location: Thaltej, Ahmedabad West
🕒 Scraped Date: 2025-08-04

-------------------------------------------

🔷 Project 2
🏠 Name: Vivaan Oliver offers
🏢 BHK: 3 BHK
💰 Price: Price on Request
📐 Area: 891 Sq Ft
🗓️ Possession: N/A
📊 Status: Under Construction
📍 Location: Thaltej, Ahmedabad West
🕒 Scraped Date: 2025-08-04

-------------------------------------------

🔷 Project 3
🏠 Name: It offers an exclusive range of
🏢 BHK: 3 BHK
💰 Price: N/A
📐 Area: 250 Sq.Ft
🗓️ Possession: 0 2250
📊 Status: Under Construction
📍 Location: Thaltej, Ahmedabad West
🕒 Scraped Date: 2025-08-04

-------------------------------------------

🔷 Project 4
🏠 Name: N/A
🏢 BHK: 2 BHK
💰 Price: N/A
📐 Area: N/A
🗓️ Possession: N/A
📊 Status: N/A
📍 Location: Thaltej, Ahmedabad West

💡 Next Steps:
• Contact builders directly for detailed pricing and floor plans
• Schedule site visits to shortlisted properties
• Verify possession timelines and construction progress
• Compare amenities and location advantages

📞 For more information or specific requirements, reply to this email.
```

## **How to use**

### **Setup Instructions**
1. **Import the workflow** into your n8n instance
2. **Configure Email Credentials:**
   - Set up email trigger for incoming property requests
   - Set up SMTP credentials for sending property listings
3. **Configure Web Scraping:**
   - Ensure proper headers and user agents for 99acres access
   - Set up fallback mechanisms for different property websites
4. **Test the workflow** with sample property search emails

### **Sending Property Search Requests**
1. Send an email to your configured property search address
2. Include location details in natural language (e.g., "Gota, Ahmedabad")
3. Optionally specify preferences like BHK, budget, or amenities
4. Receive detailed property listings within minutes

## **Requirements**
* **n8n instance** (cloud or self-hosted) with web scraping capabilities
* **Email account** with IMAP/SMTP access for automated communication
* **Reliable internet connection** for real-time property data scraping
* **Valid target websites** (99acres, MagicBricks, etc.) access

## **Troubleshooting**
* **No properties found**: Verify area spelling and check if the location has active listings
* **Scraping errors**: Update user agents and headers if websites block requests
* **Duplicate results**: Implement better deduplication logic based on property names and locations
* **Email parsing issues**: Test with various email formats and improve regex patterns
* **Website structure changes**: Implement fallback parsers and regular monitoring of scraping success rates

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
