# 📊 Extract named entities from web pages with Google Natural Language API

> ⚡ **484 views** · 📊 [Market Research & Insights](../)

## Description

### Who is this for?

- Content strategists analyzing web page semantic content
- SEO professionals conducting entity-based analysis
- Data analysts extracting structured data from web pages
- Marketers researching competitor content strategies
- Researchers organizing and categorizing web content
- Anyone needing to automatically extract entities from web pages

### What problem is this workflow solving?
Manually identifying and categorizing entities (people, organizations, locations, etc.) on web pages is time-consuming and error-prone. This workflow solves this challenge by:

- Automating the extraction of named entities from any web page
- Leveraging Google's powerful Natural Language API for accurate entity recognition
- Processing web pages through a simple webhook interface
- Providing structured entity data that can be used for analysis or further processing
- Eliminating hours of manual content analysis and categorization

## What this workflow does
This workflow creates an automated pipeline between a webhook and Google's Natural Language API to:

1. Receive a URL through a webhook endpoint
2. Fetch the HTML content from the specified URL
3. Clean and prepare the HTML for processing
4. Submit the HTML to Google's Natural Language API for entity analysis
5. Return the structured entity data through the webhook response
6. Extract entities including people, organizations, locations, and more with their salience scores

### Setup
Prerequisites:
- An n8n instance (cloud or self-hosted)
- Google Cloud Platform account with Natural Language API enabled
- Google API key with access to the Natural Language API

### Google Cloud Setup:

- Create a project in Google Cloud Platform
- Enable the Natural Language API for your project
- Create an API key with access to the Natural Language API
- Copy your API key for use in the workflow

### n8n Setup:

- Import the workflow JSON into your n8n instance
- Replace "YOUR-GOOGLE-API-KEY" in the "Google Entities" node with your actual API key
- Activate the workflow to enable the webhook endpoint
- Copy the webhook URL from the "Webhook" node for later use

### Testing:

- Use a tool like Postman or cURL to send a POST request to your webhook URL
- Include a JSON body with the URL you want to analyze: {"url": "https://example.com"}
- Verify that you receive a response containing the entity analysis data

### How to customize this workflow to your needs
### Analyzing Specific Entity 

- Modify the "Google Entities" node parameters to include entityType filters
- Add a "Function" node after "Google Entities" to filter specific entity types
- Create conditions to extract only entities of interest (people, organizations, etc.)

### Processing Multiple URLs in Batch:

- Replace the webhook with a different trigger (HTTP Request, Google Sheets, etc.)
- Add a "Split In Batches" node to process multiple URLs
- Use a "Merge" node to combine results before sending the response

### Enhancing Entity Data:

- Add additional API calls to enrich extracted entities with more information
- Implement sentiment analysis alongside entity extraction
- Create a data transformation node to format entities by type or relevance


### Additional Notes

- This workflow respects Google's API rate limits by processing one URL at a time
- The Natural Language API may not identify all entities on a page, particularly for highly technical content
- HTML content is trimmed to 100,000 characters if longer to avoid API limitations
- Consider legal and privacy implications when analyzing and storing entity data from web pages
- You may want to adjust the HTML cleaning process for specific website structures

❤️ [Hueston SEO Team](https://hueston.co)

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
