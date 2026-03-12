# 📊 Track SEO keyword rankings in Google Search with ScrapingBee API

> ⚡ **441 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this template for?

This SEO Reporting workflow template is ideal for digital marketers, SEO consultants, content strategists, and founders who need to quickly gather, format, and store Google search result data. If you regularly audit SERPs, track keyword performance, or monitor competitors, this automation lets you generate polished SEO reports in seconds—ready to share or analyze further.

![Google SERP Scraper n8n.jpg](fileId:1315)

## What problem does this workflow solve?

Scraping and formatting Google search results for SEO insights is often manual, repetitive, and error-prone or requires expensive software. Professionals frequently face challenges like:

* Collecting live, structured data from Google for multiple keywords
* Converting raw search results into readable reports for clients or stakeholders
* Logging changes in rankings or URLs across time for historical tracking
* Exporting SEO data into spreadsheets for deeper analysis
* High monthly software fees

## What this workflow does

This n8n workflow scrapes the top organic Google search results for a given keyword and automatically creates a downloadable report while also logging the results in a table format for long-term storage or further processing.

Here’s what it includes:

* A trigger form that accepts a search keyword from the user
* An automated API call to fetch Google’s SERP data
* Two output formats: a formatted **HTML table** for emails and a **Markdown table** for download (e.g., for Excel, Airtable or Google Sheets)
* Automatic CSV file generation for download
* Optional email delivery of the report

## Setup

Getting started is simple:

1. **Enter your API key**

   * Add your API key to the “Scrape Google SERPs” HTTP Request node (Step-by-step guide inside the template)
   * Replace the default query with your own custom Google search parameters if needed

2. **Set up delivery options**

   * Update your email in the “Mail SEO Report” node for report delivery
   * Use the downloadable file output from the “Convert to File” node
   * Optional: Add a Google Sheets (or similar) node which imports the file

3. **Test the workflow**

   * Use the built-in form to input a keyword
   * Confirm that results appear in both your email and downloadable file

4. **Activate the workflow**

   * Turn on the trigger so your team or clients can submit keywords at any time

## How to customize this workflow

This template is easy to extend for a variety of SEO automation needs:

* Add a loop to handle multiple keywords at once
* Connect to Airtable, Notion or Google Sheets
* Integrate with Slack or Discord for notifications
* Apply additional filtering to track only new or changed search results
* Schedule it to run daily or weekly with a cron trigger

By combining live SERP scraping, report formatting, and spreadsheet integration, this workflow gives you a fast and flexible SEO reporting system you can use right away or scale up as needed.

## 🔗 Nodes Used

HTTP Request, Mailjet, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
