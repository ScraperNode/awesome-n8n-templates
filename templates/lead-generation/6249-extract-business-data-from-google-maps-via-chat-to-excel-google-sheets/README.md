# 🎣 Extract business data from Google Maps via chat to Excel & Google Sheets

> ⚡ **109 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this for
This workflow is designed for marketers, researchers, and business owners who need to quickly find and export company data from Google Maps into a structured table format.

## What problem is this workflow solving
Manually collecting business contact information from Google Maps is time-consuming and error-prone. This workflow automates the process, allowing users to instantly extract company data and export it to Excel or Google Sheets for further use. For example, title, rating, reviews, address, operating hours, phone, website, type, gps coordinates.

## What this workflow does
- Takes a user’s search query via chat
- Scrapes company data from Google Maps based on that query
- Returns the results in a downloadable Excel file
- Saves the same data to a connected Google Sheets document for easy access and sharing

## Setup
1. Add your credentials:
   - Google Sheets API
   - Google Maps API
2. Run the workflow and enter your search request in the chat interface
3. Retrieve your results from either:
   - The Get XLSX node as an Excel file
   - The linked Google Sheets file

## 🔗 Nodes Used

Google Sheets, HTTP Request, Convert to File, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
