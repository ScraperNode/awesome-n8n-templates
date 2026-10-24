# 📊 Generate local Google Ads demand funnel PDF reports from Keyword Planner

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs manually to build a drive-time trade area around a location, pull Google Ads Keyword Planner search volume and bid ranges for configured keywords, model a conversion funnel, and generate a PDF report with a boundary map using OpenRouteService, OpenStreetMap Nominatim, Geoapify, and PDFShift.

## How it works
1. Starts when you run the workflow manually and loads the location, trade-area, Google Ads, and funnel-assumption settings.
2. Requests a drive-time isochrone polygon from OpenRouteService and samples points inside the polygon.
3. Reverse-geocodes the sampled points with OpenStreetMap Nominatim to collect unique ZIP codes within the trade area.
4. Looks up Google Ads geo target constants for those ZIP codes and compiles the configured keyword list.
5. Calls the Google Ads API Keyword Planner historical metrics endpoint to fetch average monthly searches and top-of-page bid ranges per keyword.
6. Calculates low and high price funnel scenarios per category (impressions, clicks, landing page views, actions, customers, spend, and revenue) and generates a Geoapify static map URL for the boundary.
7. Downloads the map image, renders an HTML report with tables and funnel charts, and converts it to a PDF using PDFShift.

## Setup
1. Add Google Ads OAuth2 credentials and provide your Google Ads customer ID (and optional login customer ID) plus a valid Google Ads developer token.
2. Create an OpenRouteService API key and configure the HTTP authorization header used to fetch the drive-time polygon.
3. Ensure OpenStreetMap Nominatim usage is allowed for your volume and keep the workflow’s User-Agent header set to your application.
4. Create a Geoapify API key (static map) and a PDFShift API key, then configure the HTTP authentication used to download the map and convert HTML to PDF.
5. Update the configuration values (address label, coordinates, drive time, keyword categories, funnel rates, and set pdfSandbox to false for production PDFs) before running the workflow.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
