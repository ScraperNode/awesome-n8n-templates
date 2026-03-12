# 🔬 Convert addresses to latLong with Google Sheets and Google Maps API

> ⚡ **3,627 views** · 🔬 [Document Extraction & Analysis](../)

## Description

#### **Template Detail**
This template automates the process of converting a list of addresses into their latitude and longitude (LatLong) coordinates using Google Sheets and the Google Maps API. It's designed for businesses, developers, and analysts who need accurate geolocation data for use cases like delivery routing, event planning, or market analysis.

---

#### **What the Template Does**
1. **Fetch Address Data**: Retrieves addresses from a Google Sheet.
2. **Google Maps API Integration**: Sends each address to the Google Maps API and retrieves the corresponding LatLong coordinates.
3. **Update Google Sheets**: Automatically updates the same Google Sheet with the LatLong data for each address.

---

#### **Enhancements**
1. **Google Sheets Template**: Provide a pre-configured Google Sheets template that users can copy. Example link: [Google Sheets Template](https://docs.google.com/spreadsheets/d/1VvFne32djbKeo-g5pbpOaFKxU-ps0LyVVKsBbIUjRxk/edit?usp=sharing). 

Columns required:
   - **Address**: Column to input addresses.
   - **LatLong**: Column for the latitude and longitude results.

---

#### **Updated Workflow Structure**

1. **Trigger**:
   - A manual trigger node starts the workflow.
2. **Retrieve Data from Google Sheets**:
   - Fetch addresses from a Google Sheet.
3. **Send to Google Maps API**:
   - For each address, retrieve the LatLong coordinates directly via the Google Maps API.
4. **Update Google Sheets**:
   - Write the LatLong results back into the Google Sheet.

---

#### **Steps to Use**
1. **Prepare Google Sheet**:
   - Copy the provided Google Sheets template and add your addresses to the `Address` column.
2. **Configure Google Cloud API**:
   - Enable the Maps API for your Google Cloud project.
   - Generate an API key with the required permissions.
3. **Run the Workflow**:
   - Start the workflow in n8n; it will process the addresses automatically.
   - Updated LatLong data will appear in the corresponding Google Sheet.
4. **Review the Results**:
   - Use the enriched LatLong data for mapping or analysis.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
