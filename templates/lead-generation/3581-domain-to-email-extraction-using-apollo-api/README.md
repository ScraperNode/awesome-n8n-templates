# 🎣 Domain to email extraction using Apollo API

> ⚡ **3,048 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this for?
- Sales professionals looking to build lead lists from target company domains
- Business development teams conducting outreach campaigns
- Marketers building contact databases for account-based marketing
- Recruiters searching for potential candidates at specific companies
- Anyone needing to transform a list of company domains into actionable contact information

## What problem is this workflow solving?
Finding business email addresses for outreach is a time-consuming process. The Apollo API doesn't provide a direct way to extract email contacts from domains in a single call. This workflow bridges that gap by:

1. Automating the two-step process required by Apollo's API
2. Processing multiple domains in batches without manual intervention
3. Extracting, enriching, and storing contact information in a structured format
4. Eliminating hours of manual data entry and API interaction

## What this workflow does
This workflow creates an automated pipeline between Google Sheets and Apollo's API to:

1. Pull a list of target domains from a Google Sheet
2. Submit each domain to Apollo's search API to find associated people
3. Loop through each person found and enrich their profile data
4. Extract key information: name, title, email address, and LinkedIn URL
5. Write the enriched contact information back to a results sheet
6. Process the next domain automatically until all are complete

## Setup

### Prerequisites:
- An n8n instance (cloud or self-hosted)
- Apollo.io account with API access
- Google account with access to Google Sheets

### Google Sheets Setup:
1. Create a new Google Sheet with two tabs:
   - Tab 1: "Target Domains" with a column named "Domain To Enrich"
   - Tab 2: "Results" with columns: Company, First Name, Last Name, Title, Email, LinkedIn

### n8n Setup:
1. Import the workflow JSON into your n8n instance
2. Set up Google Sheets credentials in n8n
3. Update the Google Sheets document ID in both Google Sheets nodes
4. Add your Apollo API key to both HTTP Request nodes
5. Review and adjust API rate limits if needed

### Testing:
1. Add a few test domains to your "Target Domains" sheet
2. Run the workflow manually to verify it's working correctly
3. Check the "Results" sheet to confirm data is being properly populated

## How to customize this workflow to your needs

### Adding More Contact Fields:
1. Modify the "Clean Up" node to extract additional fields from the Apollo API response
2. Add corresponding columns to your "Results" sheet
3. Update the "Results To Results Sheet" node mapping to include the new fields

### Filtering Results:
1. Add a Filter node after "Clean Up" to include only contacts with specific roles
2. Create conditions based on title, seniority, or other fields returned by Apollo

### Automating Workflow Execution:
1. Replace the manual trigger with a Schedule Trigger to run daily/weekly
2. Add a Filter node to process only domains with "Not Processed" status
3. Update the status field in Google Sheets after processing

## Additional Notes
- This workflow respects Apollo's API rate limits by processing one contact at a time
- The Apollo API may not return contact information for all domains or all employees
- Consider legal and privacy implications when collecting and storing contact information

Made with ❤️ by [Hueston](https://hueston.co/)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
