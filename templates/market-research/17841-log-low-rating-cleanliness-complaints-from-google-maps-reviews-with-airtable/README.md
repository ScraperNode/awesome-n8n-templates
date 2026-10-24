# 📊 Log low-rating cleanliness complaints from Google Maps reviews with Airtable

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow manually pulls search queries from Airtable, uses SerpApi to find matching Google Maps places and their lowest-rated reviews, filters for cleanliness-related complaints, and upserts the matching review details into an Airtable results table.

## How it works
1. Starts when you run the workflow manually.
2. Searches an Airtable “Queries” table to load business search queries and GPS coordinates.
3. For each query, paginates through SerpApi Google Maps search results, normalizes key place fields, and deduplicates places by Google Maps data_id.
4. Filters to places with ratings below 4 and fetches lowest-rated Google Maps reviews for each place via SerpApi.
5. Splits the reviews into individual items and keeps only reviews whose text contains cleanliness-related keywords (for example “dirty”, “bathroom”, or “mold”).
6. Enriches each matched review with its corresponding place details, removes items missing a reviewer name, and formats fields for storage.
7. Upserts each matched review into an Airtable “Results” table using a unique “title & review position” key.

## Setup
1. Create an Airtable personal access token connection and set the correct base and table IDs for the “Queries” input table and the “Results” output table.
2. Add a SerpApi credential (API key) with access to Google Maps Search and Google Maps Reviews endpoints.
3. Ensure your Airtable “Queries” table includes “Search Query” and “GPS Coordinates” fields, and adjust the keyword and rating filters if you want different complaint topics or thresholds.

## 🔗 Nodes Used

Airtable, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
