# 🎣 Scrape Google Maps leads and find emails with Apify and Anymailfinder

> ⚡ **735 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Scrape Google Maps leads and find emails with Apify and Anymailfinder

## Short Description

This workflow automates lead generation by scraping business data from Google Maps using [Apify](https://www.apify.com?fpr=g5q0f), enriching it with verified email addresses via [Anymailfinder](https://anymailfinder.com?via=alexandra), and storing the results in a NocoDB database. It's designed to prevent duplicates by checking against existing records before saving new leads.

***

## Key Features

-   **Automated Scraping**: Kicks off a Google Maps search based on your query, city, and country.
-   **Email Enrichment**: For businesses with a website, it automatically finds professional email addresses.
-   **Data Cleaning**: Cleans website URLs to extract the root domain, ignoring social media links.
-   **Duplicate Prevention**: Checks against existing entries in NocoDB using the Google `placeId` to avoid adding the same lead twice.
-   **Structured Storage**: Saves enriched lead data into a structured NocoDB database.
-   **Batch Processing**: Efficiently handles and loops through all scraped results.

***

## Who This Workflow Is For

-   **Sales Teams** looking for a source of local business leads.
-   **Marketing Agencies** building outreach campaigns for local clients.
-   **Business Developers** prospecting for new partnerships.
-   **Freelancers** seeking clients in specific geographical areas.

***

## How It Works

1.  **Trigger**: The workflow starts when you submit the initial form with a business type (e.g., "plumber"), a city, a country code, and the number of results you want.
2.  **Scrape Google Maps**: It sends the query to [Apify](https://www.apify.com?fpr=g5q0f) to scrape Google Maps for matching businesses.
3.  **Process Leads**: The workflow loops through each result one by one.
4.  **Clean Data**: It extracts the main website domain from the URL provided by Google Maps.
5.  **Check for Duplicates**: It queries your NocoDB database to see if the business (`placeId`) has already been saved. If so, it skips to the next lead.
6.  **Find Emails**: If a valid website domain exists, it uses [Anymailfinder](https://anymailfinder.com?via=alexandra) to find associated email addresses.
7.  **Store Lead**: The final data, including the business name, address, phone, website, and any found emails, is saved as a new row in your NocoDB table.

***

## Setup Requirements

### Required Credentials
-   **[Apify](https://www.apify.com?fpr=g5q0f) API Key**: To use the Google Maps scraping actor.
-   **[Anymailfinder](https://anymailfinder.com?via=alexandra) API Key**: For email lookup.
-   **NocoDB API Token**: To connect to your database for storing and checking leads.

### Database Structure
You need to create a table in your NocoDB instance with the following columns. The names should match exactly.

**Table:** `leads` (or your preferred name)
-   `title` (SingleLineText)
-   `website` (Url)
-   `phone` (PhoneNumber)
-   `email` (Email)
-   `email_validation` (SingleLineText)
-   `address` (LongText)
-   `neighborhood` (SingleLineText)
-   `rating` (Number)
-   `categories` (LongText)
-   `city` (SingleLineText)
-   `country` (SingleLineText)
-   `postal code` (SingleLineText)
-   `domain` (Url)
-   `placeId` (SingleLineText) - **Important for duplicate checking**
-   `date` (Date)

***

## Customization Options

-   **Change Trigger**: Replace the manual Form Trigger with a Schedule Trigger to run searches automatically or an HTTP Request node to start it from another application.
-   **Modify Scraper Parameters**: In the "Scrape Google Maps" node, you can adjust the [Apify](https://www.apify.com?fpr=g5q0f) actor's JSON input to change language, include reviews, or customize other advanced settings.
-   **Use a Different Database**: Replace the NocoDB nodes with nodes for Google Sheets, Baserow, Airtable, or any SQL database to store your leads.

***

## Installation Instructions

1.  Import the workflow into your n8n instance.
2.  Create the required table structure in your NocoDB instance as detailed above.
3.  Configure the credentials for [Apify](https://www.apify.com?fpr=g5q0f), [Anymailfinder](https://anymailfinder.com?via=alexandra), and NocoDB in the respective nodes.
4.  In the two NocoDB nodes ("Get all the recorded placeIds" and "Create a row"), select your project and table from the dropdown menus.
5.  Activate the workflow. You can now run it by filling out the form in the n8n UI.

## 🔗 Nodes Used

HTTP Request, NocoDB, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
