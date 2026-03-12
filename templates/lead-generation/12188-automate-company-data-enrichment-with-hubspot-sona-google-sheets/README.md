# 🎣 Automate company data enrichment with HubSpot, Sona & Google Sheets

> ⚡ **119 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Automatically enrich company records with comprehensive firmographic data by pulling domains from Google Sheets, setting up custom HubSpot fields, enriching through Sona API, and syncing complete profiles to HubSpot CRM with custom property mapping.

Import company domains from a Google Sheet, configure custom HubSpot fields for Sona data, automatically enrich domains with detailed firmographic intelligence, and create fully populated company records in HubSpot—so you can build rich prospect databases without manual research.

## **How it works**

**Step 1: Get Company List**

- Reads company domains from your Google Sheet
- Aggregates all domains into a single array
- Prepares data for batch processing

**Step 2: Setup HubSpot Fields**

- Creates custom Sona fields in HubSpot CRM
- Defines all enrichment data fields needed
- Ensures proper field mapping for incoming data

**Step 3: Prepare for Processing**

- Converts aggregated domains into individual items
- Sets data for batch loop processing
- Readies each company for enrichment

**Step 4: Enrich & Sync to HubSpot**

- Loops through each company domain
- Calls Sona API for enrichment data
- Creates company in HubSpot with standard fields
- Formats and updates custom Sona properties
- Combines firmographics + tech data in one profile
- Includes 2-second wait between operations for rate limiting

## **What you'll get**

The workflow enriches each company record with:

- **Firmographic Data**: Company size, employee count, revenue estimates, headquarters location, and founding year
- **Contact Information**: Phone numbers, social media profiles, and timezone details
- **Business Intelligence**: Company descriptions and industry positioning
- **Custom HubSpot Properties**: All Sona data mapped to dedicated custom fields
- **Organized CRM Records**: All data automatically synced to HubSpot for immediate use
- **Domain Tracking**: Companies linked to their websites for future reference

## **Why use this**

- **Eliminate manual research**: Save 10-15 minutes per company by automating firmographic lookups
- **Build rich databases**: Transform basic domain lists into comprehensive company profiles
- **Custom field management**: Automatically creates and populates HubSpot custom properties
- **Improve targeting**: Segment and prioritize accounts based on size, location, and other firmographics
- **Keep data current**: Run scheduled enrichments to maintain up-to-date company information
- **Scale your prospecting**: Process hundreds of companies in minutes instead of days
- **Better lead qualification**: Make informed decisions with complete company intelligence
- **Streamlined workflow**: One-click enrichment from spreadsheet to CRM with custom field setup

## **Setup instructions**

Before you start, you'll need:

1. **Google Sheets** with a column named `website_Domain` containing company domains (e.g., example.com)
2. **HubSpot Account & App Token** - Get an app token by creating a legacy app:
    - Go to HubSpot Settings → Integrations → Legacy Apps
    - Click Create Legacy App
    - Select Private (for one account)
    - In the scopes section, enable the following permissions:
        - `crm.schemas.companies.write`
        - `crm.objects.companies.write`
        - `crm.schemas.companies.read`
        - `crm.objects.companies.read`
    - Click Create
    - Copy the access token from the Auth tab
3. **Sona API Key** (for company enrichment)
    - Sign up at [https://app.sonalabs.com](https://app.sonalabs.com/)
    - Free tier available for testing

## **Configuration steps:**

1. **Prepare your data**: Create a Google Sheet with a "website_Domain" column and add 2-3 test companies (e.g., example.com, anthropic.com)
2. **Connect Google Sheets**: In the "Get Company List from Sheet" node, authenticate with Google and select your spreadsheet and sheet name
3. **Configure HubSpot field creation**: In the "Create Custom HubSpot Fields" node (Step 2), authenticate with your HubSpot access token and review the custom Sona fields that will be created
4. **Add Sona credentials**: In the "Sona Enrich" node, authenticate with your Sona API key
5. **Connect HubSpot for company creation**: In the "Create HubSpot Company" and "Update Company with AI Data" nodes, authenticate using your HubSpot access token
6. **Test with sample data**: Run the workflow with 2-3 test companies and verify:
    - Custom fields are created in HubSpot
    - Company records appear correctly in HubSpot
    - All firmographic data is populated in custom properties
7. **Add error handling**: Configure notifications for failed enrichments or API errors (optional but recommended)
8. **Scale and automate**: Process your full company list, then optionally add a Schedule Trigger for automatic daily or weekly enrichment to keep your CRM data fresh

## 🔗 Nodes Used

Google Sheets, HTTP Request, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
