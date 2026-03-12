# 📊 Generate SEO-optimized titles & meta descriptions with Bright Data & Gemini AI

> ⚡ **1,622 views** · 📊 [Market Research & Insights](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## What does this workflow do?

This workflow helps speed up the analysis process of the  top ranking titles and meta descriptions to identify paterns and styles that will help us rank on Google for a given keyword

## How does it work?
We provide a keyword we are interested in on our Google sheet. When executed, We scrap the top 10 pages using Bright Data serp API and analyse the style and patterns of the top ranking pages and generate a new title and meta description 

## Techncial setup
1. Make a copy of this [Google sheet](https://docs.google.com/spreadsheets/d/1QU9rwawCZLiYW8nlYYRMj-9OvAUNZoe2gP49KbozQqw/edit?gid=0#gid=0)
2. Update your desired keywords on the cell/row
3. Set your Bright data credentials on the ```Fetch Google Search Results JSON``` node
4. Update the `zone` to your preset zone
5. We are getting the results as a JSON. You can update this setting on the url `https://www.google.com/search?q={{ $json.search_term .replaceAll(" ", "+")}}&start=0&brd_json=1` by removing the brd_json=1 query
6. Store the  generated results on the Duplicated sheet
7. Run the workflow

## Setting up the Serp Scraper in Bright Data
1. On Bright Data, go to the Proxies & Scraping tab
2. Under SERP API, create a new zone
3. Give it a suitable name and description. The default is serp_api
4. Add this to your account
5. Add your credentials as a header credential and rename to `Bright data API`

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
