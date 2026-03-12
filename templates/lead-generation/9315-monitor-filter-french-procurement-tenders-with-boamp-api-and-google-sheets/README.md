# 🎣 Monitor & filter French procurement tenders with BOAMP API and Google Sheets

> ⚡ **603 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# French Public Procurement Tender Monitoring Workflow

## Overview

This n8n workflow automates the monitoring and filtering of French public procurement tenders (BOAMP - Bulletin Officiel des Annonces des Marchés Publics). It retrieves tenders based on your preferences, filters them by market type, and identifies relevant opportunities using keyword matching.

## Who is this for?

- Companies seeking French public procurement opportunities
- Consultants monitoring specific market sectors
- Organizations tracking government contracts in France

## What it does

The workflow operates in two main phases:

**Phase 1: Automated Tender Collection**
- Retrieves all tenders from the BOAMP API based on your configuration
- Filters by market type (Works, Services, Supplies)
- Stores complete tender data in Google Sheets
- Handles pagination automatically for large datasets

**Phase 2: Intelligent Keyword Filtering**
- Downloads and extracts text from tender PDF documents
- Searches for your specified keywords within tender content
- Saves matching tenders to a separate "Target" sheet for easy review
- Tracks processing status to avoid duplicates

## Requirements

- n8n instance (self-hosted or cloud)
- Google account with Google Sheets access
- Google Sheets API credentials configured in n8n

## Setup Instructions

### Step 1: Duplicate the Configuration Spreadsheet

1. Access the template spreadsheet: [Configuration Template](https://docs.google.com/spreadsheets/d/1wapLLWjwzo7SfG_YEsUlFaPRs1MmjxPRhRc6BlwBUAY/edit?gid=966659321#gid=966659321)
2. Click **File → Make a copy**
3. Save to your Google Drive
4. Note the URL of your new spreadsheet

### Step 2: Configure Your Preferences

Open your copied spreadsheet and configure the **Config** tab:

**Market Types** - Check the categories you want to monitor:
- Travaux (Works/Construction)
- Services
- Fournitures (Supplies)

**Search Period** - Enter the number of days to look back (e.g., "30" for the last 30 days)

**Keywords** - Enter your search terms as a comma-separated list (e.g., "informatique, cloud, cybersécurité")

### Step 3: Import the Workflow

1. Copy the workflow JSON from this template
2. In n8n, click **Workflows → Import from File/URL**
3. Paste the JSON and import

### Step 4: Update Google Sheets Connections

Replace all Google Sheets node URLs with your spreadsheet URL:

**Nodes to update:**
- Get config (2 instances)
- Get keyword
- Get Offset
- Get All
- Append row in sheet
- Update offset
- Reset Offset
- Ok
- Target offre

**For each node:**
1. Open the node settings
2. Update the **Document ID** field with your spreadsheet URL
3. Verify the **Sheet Name** matches your spreadsheet tabs

### Step 5: Configure Schedule Triggers

The workflow has two schedule triggers:

**Schedule Trigger1** (Phase 1 - Tender Collection)
- Default: `0 8 1 * *` (1st day of month at 8:00 AM)
- Adjust based on how frequently you want to collect tenders

**Schedule Trigger** (Phase 2 - Keyword Filtering)
- Default: `0 10 1 * *` (1st day of month at 10:00 AM)
- Should run after Phase 1 completes

**To modify:**
1. Open the Schedule Trigger node
2. Click **Cron Expression**
3. Adjust timing as needed

### Step 6: Test the Workflow

1. Manually execute **Phase 1** by clicking the **Schedule Trigger1** node and selecting **Execute Node**
2. Verify tenders appear in your "All" sheet
3. Execute **Phase 2** by triggering the **Schedule Trigger** node
4. Check the "Target" sheet for matching tenders

## How the Workflow Works

### Phase 1: Tender Collection Process

1. **Configuration Loading** - Reads your preferences from Google Sheets
2. **Offset Management** - Tracks pagination position for API calls
3. **API Request** - Fetches up to 100 tenders per batch from BOAMP
4. **Market Type Filtering** - Keeps only selected market categories
5. **Data Storage** - Formats and saves tenders to the "All" sheet
6. **Pagination Loop** - Continues until all tenders are retrieved
7. **Offset Reset** - Prepares for next execution

### Phase 2: Keyword Matching Process

1. **Keyword Loading** - Retrieves search terms from configuration
2. **Tender Retrieval** - Gets unprocessed tenders from "All" sheet
3. **Sequential Processing** - Loops through each tender individually
4. **PDF Extraction** - Downloads and extracts text from tender documents
5. **Keyword Analysis** - Searches for matches with accent/case normalization
6. **Status Update** - Marks tender as processed
7. **Match Evaluation** - Determines if keywords were found
8. **Target Storage** - Saves relevant tenders with match details

## Customization Options

### Adjust API Parameters

In the **HTTP Request** node, you can modify:
- `limit`: Number of records per batch (default: 100)
- Additional filters in the `where` parameter

### Modify Keyword Matching Logic

Edit the **Get query** node to adjust:
- Text normalization (accent removal, case sensitivity)
- Match proximity requirements
- Context length around matches

### Change Data Format

Update the **Format Results** node to modify:
- Date formatting
- PDF URL generation
- Field mappings

## Spreadsheet Structure

Your Google Sheets should contain these tabs:

- **Config** - Your configuration settings
- **Offset** - Pagination tracking (managed automatically)
- **All** - Complete tender database
- **Target** - Filtered tenders matching your keywords

## Troubleshooting

**No tenders appearing in "All" sheet:**
- Verify your configuration period isn't too restrictive
- Check that at least one market type is selected
- Ensure API is accessible (test the HTTP Request node)

**PDF extraction errors:**
- Some PDFs may be malformed or protected
- Check the URL generation in Format Results node
- Verify PDF URLs are accessible in a browser

**Duplicate tenders in Target sheet:**
- Ensure the "Ok" status is being written correctly
- Check the Filter node is excluding processed tenders
- Verify row_number matching in update operations

**Keywords not matching:**
- Keywords are case-insensitive and accent-insensitive
- Verify your keywords are spelled correctly
- Check the extracted text contains your terms

## Performance Considerations

- Phase 1 processes 100 tenders per iteration with a 10-second wait between batches
- Phase 2 processes tenders sequentially to avoid overloading PDF extraction
- Large datasets (1000+ tenders) may take significant time to process
- Consider running Phase 1 less frequently if tender volume is manageable

## Data Privacy

- All data is stored in your Google Sheets
- No external databases or third-party storage
- BOAMP API is publicly accessible (no authentication required)
- Ensure your Google Sheets permissions are properly configured

## Support and Updates

This workflow retrieves data from the BOAMP public API. If API structure changes, nodes may require updates. Monitor the workflow execution logs for errors and adjust accordingly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
