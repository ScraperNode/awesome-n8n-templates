# 📈 Automated SEC Form D filings tracker with Google Sheets integration

> ⚡ **842 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Description

This workflow automatically monitors and tracks SEC Form D filings (private placement offerings) by fetching data from the SEC EDGAR database every 10 minutes during business hours and saving new filings to Google Sheets for analysis and tracking.

## Who's it for
- **Venture capitalists** tracking private funding rounds and market activity
- **Investment analysts** researching private placement trends and opportunities  
- **Financial researchers** collecting data on private securities offerings
- **Business development teams** identifying potential partnership or acquisition targets
- **Compliance professionals** monitoring regulatory filings in their industry

## How it works
The workflow connects to the SEC EDGAR RSS feed to fetch the latest Form D filings, parses the XML data, extracts key information including CIK numbers and filing links, filters out duplicates from previous runs, and automatically saves new filings to a Google Sheets document for easy analysis and tracking.

## What it does
1. **Automated scheduling** - Runs every 10 minutes during business hours (6 AM - 9 PM, Monday-Friday)
2. **Fetches SEC data** - Retrieves the 40 most recent Form D filings from SEC EDGAR RSS feed
3. **Parses filing data** - Converts XML to structured data and extracts CIK numbers, titles, and links
4. **Filters duplicates** - Only processes new filings that haven't been seen in previous executions
5. **Saves to sheets** - Appends new filing data to Google Sheets with proper formatting

## Requirements
- **Google Sheets API access** with OAuth2 credentials configured
- **Google Sheets document** - Make a copy of [this template sheet](https://docs.google.com/spreadsheets/d/1VoGfVpk1mMrqKIc5hsO7peYuLx0SwhsbW7uUeYJCmrU/edit?usp=sharing)
- **n8n instance** running continuously for scheduled execution

## How to set up
1. **Copy the template Google Sheet** from the link above to your Google Drive
2. **Configure Google Sheets OAuth2** authentication in n8n credentials
3. **Update the Google Sheets document ID** in the "Save to SEC Data Sheet" node to point to your copied sheet
4. **Customize the User-Agent header** in the HTTP Request node with your contact information (required by SEC)
5. **Activate the workflow** - The schedule trigger will start monitoring automatically
6. **Test manually** by replacing the Schedule Trigger with a Manual Trigger for initial testing

## How to customize the workflow
- **Schedule frequency**: Modify the cron expression in the Schedule Trigger (default: every 10 minutes)
- **Business hours**: Adjust the time range (default: 6 AM - 9 PM EST) 
- **Working days**: Change from Monday-Friday to include weekends if needed
- **Filing count**: Modify the SEC URL to fetch more than 40 filings (change `count=40` parameter)
- **Form types**: Update the URL to track different SEC forms (change `type=D` to other form types)
- **Output format**: Customize the Google Sheets column mapping to include additional fields
- **Notifications**: Add Slack, email, or webhook nodes to get alerts for new filings

## Output data includes
- **CIK Number** - Central Index Key for the filing company
- **Company Title** - Name of the company making the filing  
- **Form Type** - Type of SEC form (Form D for private placements)
- **HTML Filing Link** - Link to view the filing in SEC EDGAR system
- **TXT Filing Link** - Direct link to the raw text version of the filing
- **Updated Date** - When the filing was submitted to SEC

## Key features
- **Duplicate prevention** - Built-in deduplication ensures no filing is processed twice
- **Business hours scheduling** - Respects SEC server load by running only during business hours
- **SEC compliance** - Includes proper User-Agent header as required by SEC guidelines
- **Automatic link generation** - Creates both HTML and TXT links for easy access to filings
- **CIK extraction** - Automatically extracts company CIK numbers from filing titles

**Note**: This workflow is designed for monitoring public SEC filings and complies with SEC EDGAR access guidelines. The User-Agent header must be updated with your contact information before use.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
