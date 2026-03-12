# 📊 Track Website Visibility in Google's AI Overview with SerpAPI and Google Sheets

> ⚡ **955 views** · 📊 [Market Research & Insights](../)

## Description

![Screenshot Capture  20250606  160227.png](fileId:1450)
This template helps anyone track how often their website appears in Google’s AI Overview. a growing part of search results that can’t currently be tracked using traditional SEO tools. 
With this workflow, users can:
- Input a list of keywords (from Google Search Console or manual research).
- Use the SerpApi to pull Google search results.
- Extract AI Overview content and its list of sources.
- Map that information into a structured Google Sheet, including whether your site is listed in those sources.

Setup is straightforward and fully automated, but you'll need: 
- A SerpApi key
- A connected Google Sheets account

## Who is this for?
This workflow is designed for SEO professionals, digital marketers, and site owners who want to track their website’s visibility in Google AI Overviews.

## What problem does it solve?
AI Overviews are rapidly becoming more common in Google search results. However, there's no tool (yet) that tells you if your website is appearing in those answers. This is a blind spot for SEO. This workflow helps you check your site’s presence in AI Overviews manually, at scale.

## What does the workflow do?
The workflow:
- Takes a list of target keywords (exported from GSC or elsewhere)
- Uses SerpApi to get search results from Google
- Extracts the AI Overview block and its sources
- Checks if your domain is among them
- Saves all results into a Google Sheet 

The final Google Sheet will contain: Keyword | AI Overview Exists | List of Sources | Is my domain listed

## Setup
You’ll need:
- A SerpApi API key
- A Google Sheet with your list of keywords
- A connected Google Sheets account in n8n

## How to customize this workflow
- Change the list of keywords (pull from GSC or edit the sheet manually)
- Replace the placeholder domain with your own
- Adjust the Google Sheet column mapping as needed

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
