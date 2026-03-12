# 🎣 Scrape Google Maps leads to Google Sheets via Apify

> ⚡ **1,561 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## ## Scrape Google Maps leads to Google Sheets via Apify

## Who's it for
This workflow is ideal for marketers, sales professionals, and solo entrepreneurs who want to collect local leads based on Google Maps search terms. For example, restaurants in North Holland.

## What it does
This workflow uses an Apify actor to scrape business details from Google Maps and automatically appends them to a Google Sheet with the following fields:

- Business name
- Street
- Postal code
- City
- Website
- Phone number

## How it works
1. The workflow starts with a manual trigger (you can replace it with any other trigger).
2. The Google Maps Scraper Apify actor is launched.
3. A short wait ensures the actor completes the task (you can increase the wait time for more extensive outputs).
4. The resulting dataset is retrieved from Apify.
5. Data is mapped and added into a connected Google Sheet.

## How to set up
Step 1: Configure the “Run Apify scraper” node
Go to the Google Maps Scraper actor on Apify.
Create a new Task with your search term.
Find your actor from list.

Step 2: Edit the “Find your last run” node
Select the correct actor (Google Maps Scraper) from the dropdown in this node.

Step 3: Fetch the dataset
In the “Get the data from Apify” node, use {{$json.defaultDatasetId}} to dynamically pull the correct dataset.

Step 4: Connect your Google Sheet
Link your Google account and select the desired spreadsheet and tab (for example, Leads).
Make sure the column headers match the data fields.

Current column headers:
Title	Street	Postcode	City	Website	Phone

If you have any questions, feel free to reach out to info@ai-amigos.com

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
