# 🎣 Extract LinkedIn Sales Navigator contacts to Google Sheets with auto pagination

> ⚡ **971 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Complete Template Description

## Automate LinkedIn Sales Navigator contact extraction to Google Sheets

This workflow scrapes LinkedIn Sales Navigator search results and automatically saves contact details to Google Sheets with pagination support and rate limiting protection.

## Who's it for

Sales teams, recruiters, and business development professionals who need to extract and organize LinkedIn contact data at scale without manual copy-pasting.

## What it does

The workflow connects to a LinkedIn scraping API to fetch contact information from Sales Navigator search results. It handles pagination automatically, extracts contact details (name, title, company, location, profile URL), and appends them to a Google Sheet. Built-in rate limiting (30-60 second delays) prevents API blocks and mimics natural browsing behavior.

## Requirements

- **Self-hosted n8n instance** (this workflow will NOT work on n8n Cloud due to cookie requirements and third-party API usage)
- LinkedIn Sales Navigator account
- Google Sheets account
- EditThisCookie browser extension
- API access from the creator (1 month free trial available)

## How to set up

**Step 1: Get API Access**
Email the creator to request 1 month of free API access using the link in the workflow. You'll receive your API key within 24 hours.

**Step 2: Configure API Authentication**
1. Click the "Scrape LinkedIn Contacts API" node
2. Under Authentication, select "Header Auth"
3. Create new credential with Name: `x-api-key` and your received API key as the Value
4. Save the credential

**Step 3: Extract LinkedIn Cookies**
1. Install the [EditThisCookie extension](https://chromewebstore.google.com/detail/editthiscookie-v3/ojfebgpkimhlhcblbalbfjblapadhbol)
2. Navigate to LinkedIn Sales Navigator
3. Click the cookie icon in your browser toolbar
4. Click "Export" and copy the cookie data
5. Paste into the `cookies` field in the "Set Search Parameters" node

**Step 4: Configure Your Search**
In the "Set Search Parameters" node, update:
- `cookies`: Your exported LinkedIn cookies
- `url`: Your LinkedIn Sales Navigator search URL
- `total_pages`: Number of pages to scrape (default: 2, each page = ~25 contacts)

**Step 5: Set Up Google Sheets**
1. Make a copy of the template Google Sheet (or create your own with matching column headers)
2. In the "Save Contacts to Google Sheets" node, connect your Google Sheets account
3. Select your destination spreadsheet and sheet name

**Important Security Note:** Keep your LinkedIn cookies private. Never share them with others or commit them to public repositories.

## Customization options

- Adjust `total_pages` to control how many contacts you scrape
- Modify the delay in "Rate Limit Delay Between Requests" node (default: 30-60 seconds random) - **do not lower this to avoid API blocks**
- Customize which contact fields to save in the Google Sheets column mapping
- Change the search URL to target different prospect segments or filters

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
