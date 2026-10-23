# 📊 Export Idealista property listings to Google Sheets using Apify

> ⚡ **52 views** · 📊 [Market Research & Insights](../)

## Description

![Screenshot 20260415 at 10.03.03.png](fileId:5483)
# Export Idealista Property Listings to Google Sheets

## Who is this for?

Real estate investors, property managers, relocation consultants, and data analysts who need structured Idealista listing data in Google Sheets for filtering, comparison, or reporting.

## What this workflow does

Scrape property listings from Idealista.com (Spain, Italy, Portugal) and export them as structured rows into Google Sheets. Each property includes price, size, rooms, GPS coordinates, agent contacts, and 25+ more fields. API-based extraction that never breaks, unlike screen scrapers.

**This workflow uses the `n8n-nodes-idealista-scraper` community node and requires a self-hosted n8n instance.**

## How it works

1. Click **Test Workflow** to trigger a scrape
2. The Idealista Scraper node fetches listings from Apify's API (~40 properties per page in 15-20 seconds)
3. The Code node formats 50+ raw fields into clean spreadsheet columns
4. Results are appended as new rows in your Google Sheet with automatic deduplication

## Setup

1. Install **n8n-nodes-idealista-scraper** via Settings &gt; Community Nodes
2. Create an [Apify account](https://apify.com) and get your API token from Settings &gt; Integrations
3. Add your Apify API credential in n8n
4. Create a blank Google Sheet and select it in the Sheets node
5. Customize the scraper filters (location, price, rooms) to your needs

## Customization

- Change `locationId` for other cities (Barcelona: `0-EU-ES-08-19-001-013`, Rome: `0-EU-IT-RM-01-001`, Lisbon: `0-EU-PT-11`)
- Adjust price, size, bedroom, and amenity filters (64+ available)
- Change `numPages` for more results (~40 properties per page)
- Modify the Code node to add or remove output fields
- Cost: ~$0.005/run + $0.003/property

## Output fields

| Field | Description |
|-------|-------------|
| title | Property listing title |
| price | Listing price in EUR |
| pricePerM2 | Price per square meter |
| size | Property size in m2 |
| rooms | Number of rooms |
| bathrooms | Number of bathrooms |
| floor | Floor number |
| address | Street address |
| neighborhood | Neighborhood name |
| district | District name |
| municipality | Municipality |
| province | Province |
| latitude / longitude | GPS coordinates |
| propertyType | Type of property |
| description | First 500 chars of description |
| hasElevator, hasParking, hasSwimmingPool, hasTerrace, hasGarden, hasAirConditioning | Amenity booleans |
| isNewDevelopment | New development flag |
| agencyName / agencyPhone | Agent contact info |
| url | Direct Idealista listing URL |
| thumbnail | Listing image URL |
| numPhotos | Number of photos |
| scrapedAt | Timestamp of scrape |

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
