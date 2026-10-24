# 📊 Log nearby businesses from OpenStreetMap to Google Sheets by proximity

> ⚡ **33 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects a location and business search criteria via an n8n form, geocodes the location with OpenStreetMap Nominatim, finds nearby matching businesses using the Overpass API, and appends normalized results (including website availability) to a Google Sheets spreadsheet.

## How it works
1. Receives a submission from an n8n form with a location, business category, search radius, and maximum results.
2. Sends the location text to OpenStreetMap Nominatim to retrieve latitude and longitude coordinates.
3. Stops if the location cannot be geocoded, preventing an invalid proximity search.
4. Builds an Overpass QL query for the selected business category and radius around the geocoded coordinates.
5. Calls the OpenStreetMap Overpass API to return matching nodes/ways and their tags (for example website, phone, and opening hours).
6. Normalizes the returned elements into a consistent set of fields, flags whether a website is present, and appends the rows to Google Sheets.

## Setup
1. Add a Google Sheets credential and select the target spreadsheet and sheet in the Google Sheets append step.
2. Update the User-Agent value to include a real contact email to comply with OpenStreetMap usage policy.
3. Optionally adjust the category-to-OpenStreetMap-tag mapping, radius options, and output columns to match your research needs.

## Requirements
- n8n, self-hosted or cloud.
- A Google Sheets OAuth2 credential for the append step.
- No paid API key. OpenStreetMap's Nominatim and Overpass services are free and public.

## Customization
- Edit the category-to-tag map in the "Build Overpass query" node to add categories or point existing ones at different OpenStreetMap tags.
- Change the radius choices or the result cap on the form.
- Add or remove output columns in the "Normalize businesses" node.
- Replace the form trigger with a schedule or webhook to run searches on a timer or from another system.

## Additional info
Each search costs exactly one Nominatim request and one Overpass request per run, no matter how many businesses come back, so it stays well inside OpenStreetMap's free usage policy. Keep volume modest (about one request per second) and set a real contact address in the User-Agent, since OpenStreetMap requires an identifiable User-Agent on every request. One thing to read correctly in the results: a missing website tag means OpenStreetMap has no website on record for that business, not that the business has no site. Coverage is only as good as OpenStreetMap's data for the area, so denser cities return richer results than rural ones.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
