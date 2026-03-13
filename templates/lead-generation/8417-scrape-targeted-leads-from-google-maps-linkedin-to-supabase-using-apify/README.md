# 🎣 Scrape targeted leads from Google Maps & LinkedIn to Supabase using Apify

> ⚡ **629 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

![Screenshot 20250912 090637.png](fileId:2619)

## Who's it for
This template is perfect for sales teams, marketing professionals, recruiters, and business development specialists who need to efficiently collect targeted lead data from multiple sources. Whether you're building prospect lists, conducting market research, or expanding your contact database, this automated solution saves hours of manual data collection.

## How it works
The workflow uses an n8n built-in form to collect search parameters, then automatically scrapes targeted leads from Google Maps and/or LinkedIn within Apify Actors based on your criteria. All collected data is cleaned, structured using Edit field nodes, and stored in your Supabase database for easy access and analysis.

## Key features:
- Interactive form for easy lead targeting
- Dual-source scraping (Google Maps + LinkedIn), you choose one or Both.
- Automatic data collection and cleaning, and structuring from Apify actors.
- Direct database storage in Supabase
- Flexible result limits and location targeting.

## How to set up

**Step 1: Set Up Apify Account**
Create account at apify.com
Navigate to Settings &gt; Integrations &gt; API tokens
Create new API token and copy it
Ensure you have access to these actors:

LinkedIn Profile Search Scraper (harvestapi/linkedin-profile-search)
Google Maps Scraper (compass/crawler-google-places)

**Step 2: Configure Supabase Database**
Create new project at supabase.com
Go to SQL Editor in your Supabase dashboard
Run the SQL scripts from the Requirements section to create tables
Navigate to Settings &gt; API to copy:

Project URL (starts with https://...)
Service role key (secret key, not anon public)

**Step 3: Import and Configure Workflow**
Download the workflow JSON file
In n8n Cloud, go to Workflows &gt; Import from File
Select the downloaded JSON file
Configure credentials by clicking on each node that shows a warning:

**For Apify nodes (linkedin_dataset & googlemaps_dataset):**
Click "Create New Credential"
Name: "Apify account"
API Token: [Paste your Apify token from Step 1]
Save credential

For Supabase nodes (save_linkedin & save_googlemaps):

Click "Create New Credential"
Name: "Supabase account"
Host: [Your Supabase project URL from Step 2]
Service Role Secret: [Your service role key from Step 2]
Save credential

**Step 4: Test the Workflow**
Click on the "On form submission" node
Copy the Production URL (webhook link)
Open this URL in a new browser tab
Fill out the test form:

Title/Industry: "restaurants"
Location: "San Francisco, CA"
Source: "Google Maps"
Number of results: "3"


Click Submit and wait for processing
Check your Supabase tables to verify data was saved

Step 5: Verify Setup Success

In Supabase, go to Table Editor
Check the googlemaps table for new entries
Verify all fields are populated correctly
Test with LinkedIn source to confirm both paths work

The workflow is designed to be plug-and-play once credentials are configured. Simply share the form URL with your team or bookmark it for regular lead generation tasks.
How to customize the workflow

**Search Parameters:**
Modify Apify actor configurations in the dataset nodes
Adjust search query formats for better targeting
Change result limits based on your needs

**Data Processing:**
Edit the Set nodes to extract additional fields
Add data validation steps
Implement duplicate detection logic

**Storage Options:**
Replace Supabase with other databases (Airtable, PostgreSQL)
Add data export to CSV/Excel
Implement real-time notifications

**Support:**
Check [n8n community forum](https://community.n8n.io/) for help
Review [Apify actor documentation](https://docs.apify.com/platform/actors)

The workflow is designed to be plug-and-play once credentials are configured. Simply fill out the form with your target criteria and let the automation handle the rest.

## Requirements
**External Services:** Apify account with credits (for web scraping)
Supabase account (for data storage)

Supabase Table Schemas:
LinkedIn Table (LinkedIn):
```
publicidentifier (text)
linkedinurl (text)
name (text)
headline (text)
about (text)
premium (boolean)
verified (boolean)
openprofile (boolean)
topskills (text)
connectionscount (integer)
followercount (integer)
latest_experience (text)
education (text)
```
Google Maps Table (googlemaps):
```
title (text)
category_name (text)
address (text)
neighborhood (text)
street (text)
city (text)
postal_code (text)
state (text)
country_code (text)
website (text)
phone (text)
phone_unformatted (text)
location (text)
total_score (numeric)
```
**Node Requirements:**

- Form Trigger (built-in), you may use others, or a webhook.
- Switch (built-in)
- Set (built-in)
- Supabase (built-in)
- Apify (community node), you'll have to install it first.

## How to customize the workflow
**Form Customisation:**
- Modify form fields in the "On form submission" node to add additional search criteria if you want more.
- You may adjust dropdown options for different lead sources.
- Add validation rules for better data quality

**Search Parameters:**
- Customize Apify actor configurations for different scraping behaviours.
- Modify the number of results per search.
- Add additional location targeting options

**Data Processing:**
- Enhance the Set nodes to extract additional LinkedIn profile data
- Add data validation and cleaning steps
- Implement duplicate detection logic

**Storage Options:**
- You may replace Supabase with other databases (Airtable, Google Sheets, etc.)
- Add data enrichment steps before storage
- Implement data export functionality

**Advanced Features:**
- Add email notifications when scraping completes
- Implement error handling and retry logic
- Create data quality scoring mechanisms

Let's connect: [TUMUSIME David](https://www.linkedin.com/in/tumusime-david/)

## 🔗 Nodes Used

Supabase, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
