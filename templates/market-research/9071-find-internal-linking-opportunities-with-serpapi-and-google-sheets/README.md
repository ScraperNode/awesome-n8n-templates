# 📊 Find internal linking opportunities with SerpAPI and Google Sheets

> ⚡ **335 views** · 📊 [Market Research & Insights](../)

## Description

## Overview

Use this workflow to spot internal linking ideas on your site and improve your search performance. It takes your target URLs and keywords, finds related pages, and suggests where to add links. Strong internal linking helps search engines understand your site.

## How it works
- You provide a list of target URLs and the keywords you want to rank for
- The workflow uses the SERP API to search your site for related pages, skipping the target URL
- It filters the results and pulls relevant URLs
- It writes the suggestions to a Google Sheet, and adds “N/A” if no good matches are found

## Setup steps
1. Turn on the Google Sheets API and create a sheet with your domain, target URLs, and keywords
2. Create a SERP API account and get an API key
3. Optional: Set up a Google Programmable Search Engine if you prefer not to use the SERP API
4. Add your SERP API key and Google Sheets credentials to n8n.
5. Run the workflow to generate internal link suggestions in your Google Sheet

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
