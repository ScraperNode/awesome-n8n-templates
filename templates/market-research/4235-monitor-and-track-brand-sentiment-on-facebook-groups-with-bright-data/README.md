# 📊 Monitor and track brand Sentiment on Facebook Groups with Bright data

> ⚡ **3,374 views** · 📊 [Market Research & Insights](../)

## Description

#### Workflow documentation updated on  21 May 2025
 
This workflow keeps track of your brand mentions across different Facebook groups and provides an analysis of  the posts as positive, negative or neutral and updates this to Googe sheets for further analysis

This is useful and relevants for brands looking to keep track of what people are saying about their brands and guage the customer satisfaction or disatisfaction based on what they are talking about

## Who is this template for?
This workflow is for you if You

1. Need to keep track of your brand sentiments across different niche facebook groups 
2. Own a saas and want to monitor it across different local facebook Groups  
3. Are looking to do some competitor research to understand what others dont like about their products
4. Are testing the market on different market offerings and products to get best results
5. Are looking for sources other that review sites for product, software or service reviews
6. Need to keep track of your brand sentiments across different niche facebook groups
7. Are starting on market research and would like to get insights from differnt facebook groups on app usage, strngths weaknesses, features etc


## How it works
You will set the desired schedule by which to monitor the groups
This gets the brand names and facebook Groups to monitor.


## Setup Steps
**Before you begin**
You will need access to a Bright Data API to run this workflows
Make a copy of the sheet below and add the urls for the facebook groups to scrap and the brand names you wish to monitor.


1. Import the workflow json to your canvas
2. Make a copy of this [Google sheet](https://docs.google.com/spreadsheets/d/1TXF_xLPF7XJJakoWB5Ix-tTduvX3GRxocJcp6DA-U_A/edit?usp=sharing) to get started easily
3. Set your APi key in the ```Set up KEYs``` node
4. Map out the Google sheet to your tables
5. You can use/update the current AI models to differnt models eg Gemini or anthropic
6. Run the workflow


## Setup B
Bright Data provides an option to receive the results on an external webhook via a POST call. This can be collected via the ```recieve results``` webhook node and passed to a google sheet

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger, Filter, Sentiment Analysis

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
