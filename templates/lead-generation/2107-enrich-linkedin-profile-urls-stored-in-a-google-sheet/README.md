# 🎣 Enrich Linkedin profile URLs stored in a Google Sheet

> ⚡ **6,714 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Template Information

### Who is this template for?
  **This template is for users looking to retrieve email information from LinkedIn profiles and update Google Sheets with the collected data.**

- [ 🎥 quick set up video](https://www.canva.com/design/DAF9a_UBxWY/xSSlSUzRdxCPtfgx9RzGSg/watch?utm_content=DAF9a_UBxWY&utm_campaign=designshare&utm_medium=link&utm_source=editor)


- **How it works**
  - The template utilizes a series of nodes to fetch email information from LinkedIn profiles. It starts with a Schedule Trigger node that sets the interval for the workflow. The Conditional Check node verifies if certain fields like Name, Gender, Job Title, Summary, and LinkedIn URL are not empty. The HTTP Request node sends a POST request to the specified URL with API key and profile information. The Data Merge node merges the data collected. The Field Editing node modifies the fields as needed. Finally, the Google Sheets Update node updates the Google Sheets with the gathered information.

### Set Up Instructions

1. Make sure to have the necessary credentials and permissions for accessing LinkedIn and Google Sheets.
2. Set up the API key required for the HTTP Request node.
3. Configure the Google Sheets Update node with the appropriate document ID and sheet name.
4. Check and adjust field mappings in the Field Editing node according to your needs.
5. Run the workflow and monitor the updates in your Google Sheets document.

## Overview:


The workflow is designed to find contact information for LinkedIn profile URLs stored in a Google Sheet. It involves various nodes for different operations such as making HTTP requests, scheduling triggers, reading from and updating Google Sheets, field editing, data merging, and conditional checks. A video demonstrating the workflow process can be accessed [here](https://www.canva.com/design/DAF9a_UBxWY/xSSlSUzRdxCPtfgx9RzGSg/watch?success=true&continue_in_browser=true).

## Copy this template to get started :
- [Google Sheets](https://docs.google.com/spreadsheets/d/1ochnGSCy8V5Mz-nr51dBmugqR50m62K7d6pvbwOHewo/edit?usp=sharing)


## Using Prospeo.io LinkedIn Email Finder API with cURL

To use the API endpoint "https://api.prospeo.io/linkedin-email-finder" with cURL, follow these steps:

1. Use the cURL command with the following parameters:
   
```bash
curl -X POST \
-H "Content-Type: application/json" \
-H "X-KEY: your_api_key" \
-d '{
  "url": "https://www.linkedin.com/in/john-doe/"
}' \
"https://api.prospeo.io/linkedin-email-finder"
```

2. Replace "your_api_key" with your actual API key.
3. Update the "url" field in the JSON data with the LinkedIn profile URL for which you want to find the email address.

To get access to this API and obtain your API key, you need to sign up on the Prospeo platform and subscribe to their LinkedIn email finder service. Once you have subscribed, you will receive an API key that you can use to authenticate your requests to the API endpoint.
## Description:

- **Schedule Trigger:**
  - Triggers the workflow based on a defined schedule interval, in this case, based on minutes.
  - [Schedule Trigger Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.scheduleTrigger)

- **Google Sheets Read:**
  - Reads data from a Google Sheets document and sheet based on the provided document ID and sheet name.
  - [Google Sheets Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.googleSheets) 
  
- **Conditional Check:**
  - Checks multiple conditions based on the input data and performs actions accordingly.
  - [Conditional Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.if)

- **HTTP Request:**
  - Sends an HTTP POST request to a specified URL with headers and body parameters.
  - [HTTP Request Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.httpRequest)


- **No Operation, do nothing:**
  - Placeholder node that does not perform any operation.

- **Data Merge:**
  - Merges data based on specified mode and combination settings.
  - [Merge Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.merge)

- **Field Editing:**
  - Edits fields by setting specific values for each field based on input data.
  - [Set Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.set)

- **Google Sheets Update:**
  - Updates data in a Google Sheets document and sheet based on specified columns and values.
  - [Google Sheets Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.googleSheets)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
