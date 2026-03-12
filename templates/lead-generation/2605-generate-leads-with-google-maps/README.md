# 🎣 Generate leads with Google Maps

> ⚡ **175,274 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow leverages **n8n** to perform automated Google Maps API queries and manage data efficiently in Google Sheets. It's designed to extract specific location data based on a given list of ZIP codes and categories.

---

## Features
- Queries the Google Maps API for location data using predefined ZIP codes and subcategories.
- Filters, de-duplicates, and organizes data into structured rows in Google Sheets.
- Implements **exponential backoff retries** to handle API rate limits.
- Logs and updates statuses directly in Google Sheets for easy tracking.

---

## Prerequisites
1. **Google OAuth Credentials**: A configured Google Cloud project for Google Maps API and Sheets API access.
2. **Google Sheets**: A sheet with ZIP codes and categories defined (e.g., "AZ Zips").
3. **n8n Setup**: A running instance of n8n with credentials configured for Google OAuth.

---

## Setup Instructions

### 1. Prepare Google Sheets
- Add the ZIP codes to the "AZ Zips" sheet.
- Define subcategories in another sheet (e.g., "Google Maps Categories").
- Provide the sheet's URL in the `Settings` node of the workflow.

### 2. Configure API Access
- Set up Google OAuth credentials for Maps and Sheets APIs in n8n.
- Ensure your API key has access to the `places.searchText` endpoint.

### 3. Workflow Customization
- Modify `textQuery` parameters in the **GMaps API** node to match your query needs.
- Adjust trigger intervals as required (e.g., manual or scheduled execution).

### 4. Run the Workflow
- Execute the workflow manually or schedule periodic runs to keep your data updated.

---

## Notes
- This workflow includes robust error handling to retry failed API calls with exponential backoff.
- All data is organized and logged directly in Google Sheets for easy reference and updates.

For more information or issues, feel free to reach out!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stop and Error, Execute Workflow Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
