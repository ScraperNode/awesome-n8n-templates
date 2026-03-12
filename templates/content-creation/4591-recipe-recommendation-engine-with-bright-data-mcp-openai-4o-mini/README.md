# 🎬 Recipe recommendation engine with Bright Data MCP & OpenAI 4o mini

> ⚡ **581 views** · 🎬 [Content Creation & Video](../)

## Description

![Recipe Recommendation Engine with Bright Data MCP  OpenAI.png](fileId:1427)
### Notice
Community nodes can only be installed on self-hosted instances of n8n.

### Who this is for

Recipe Recommendation Engine with Bright Data MCP & OpenAI is a powerful automated workflow combines Bright Data's MCP for scraping trending or regional recipe data with OpenAI 4o mini to generate personalized recipe recommendations. 

This automated workflow is designed for:

**Food Bloggers & Culinary Creators** : Who want to automate the extraction and curation of recipes from across the web to generate content, compile cookbooks, or publish newsletters.

**Nutritionists & Health Coaches** : Who need structured recipe data to analyze ingredients, calories, and nutrition for personalized meal planning or dietary tracking.

**AI/ML Engineers & Data Scientists** : Building models that classify cuisines, predict recipes from ingredients, or generate dynamic meal suggestions using clean, structured datasets.

**Grocery & Meal Kit Platforms** : Who aim to extract recipes to power recommendation engines, ingredient lists, or personalized meal plans.

**Recipe Aggregator Startups** : Looking to scale recipe data collection, filtering, and standardization across diverse cooking websites with minimal human intervention.

**Developers Integrating Cooking Features** : Into apps or digital assistants that offer recipe recommendations, step-by-step cooking instructions, or nutritional insights.

### What problem is this workflow solving?

This workflow solves:

- Automated recipe data extraction from any public URL

- AI-driven structured data extraction

- Scalable looped crawling and processing

- Real-time notifications and data persistence

### What this workflow does

**1. Set Recipe Extract URL**
- Configure the recipe website URL in the input node

- Set your Bright Data zone name and authentication

**2. Paginated Data Extract**
- Triggers a paginated extraction across multiple pages (recipe listing, index, or search pages)

- Returns a list of recipe links for processing

**3. Loop Over Items**
- Loops through the array of recipe links

- Each link is passed individually to the scraping engine

**4. Bright Data MCP Client (Per Recipe)**
- Scrapes each individual recipe page using scrape_as_html

- Smartly bypasses common anti-bot protections via Bright Data Web Unlocker

**5. Structured Recipe Data Extract (via OpenAI GPT-4o mini)**
- Converts raw HTML to clean text using an LLM preprocessing node

- Uses OpenAI GPT-4o mini to extract structured data

**6. Webhook Notification**
- Pushes the structured recipe data to your configured webhook endpoint

- Format: JSON payload, ideal for Slack, internal APIs, or dashboards

**7. Save Response to Disk**
- Saves the structured recipe JSON information to local file system

### Pre-conditions

1. You need to have a [Bright Data](https://brightdata.com/) account and do the necessary setup as mentioned in the "Setup" section below.
2. You need to have an OpenAI Account.

### Setup
- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![MCPClientAccount.png](fileId:1426)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, configure the OpenAi account credentials.
- Make sure to set the fields as part of **Set the Recipe Extract URL**. Remember to set the webhook_url to send a webhook notification of recipe response.
- Set the desired local path in the **Write the structured content to disk** node to save the recipe response.

### How to customize this workflow to your needs

You can tailor the Recipe Recommendation Engine workflow to better fit your specific use case by modifying the following key components:

**1. Input Fields Node**
- Update the Recipe URL to target specific cuisine sites or recipe types (e.g., vegan, keto, regional dishes).

**2. LLM Configuration**
- Swap out the OpenAI GPT-4o mini model with another provider (like Google Gemini) if you prefer.

- Modify the structured data prompt to extract custom fields that you wish.

**3. Webhook Notification**
-  Configure the Webhook Notification node to point to your preferred integration (e.g., Slack, Discord, internal APIs).

**4. Storage Destination**

Change the **Save to Disk** node to store the structured recipe data in:

- A cloud bucket (S3, GCS, Azure Blob etc.)

- A database (MongoDB, PostgreSQL, Firestore)

- Google Sheets or Airtable for spreadsheet-style access.

## 🔗 Nodes Used

Function, HTTP Request, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
