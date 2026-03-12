# 🎣 Google Maps business phone no scraper with Bright Data & Sheets

> ⚡ **3,420 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Google Maps Business Phone No Scraper with Bright Data & Sheets





## Overview
This n8n workflow automates the process of scraping business phone numbers and information from Google Maps using the Bright Data API and saves the results to Google Sheets.

## Workflow Components

### 1. Form Trigger - Submit Location and Keywords
**Type:** Form Trigger  
**Purpose:** Start the workflow when a form is submitted  
**Fields:**
- Location (required)
- Keywords (required)

**Configuration:**
- Form Title: "GMB"
- Webhook ID: `8b72dcdf-25a1-4b63-bb44-f918f7095d5d`

### 2. Bright Data API - Request Business Data
**Type:** HTTP Request  
**Purpose:** Sends scraping request to Bright Data API  
**Method:** POST  
**URL:** `https://api.brightdata.com/datasets/v3/trigger`

**Query Parameters:**
- `dataset_id`: `gd_m8ebnr0q2qlklc02fz`
- `include_errors`: `true`
- `type`: `discover_new`
- `discover_by`: `location`
- `limit_per_input`: `2`

**Headers:**
- `Authorization`: `Bearer BRIGHT_DATA_API_KEY`

**Request Body:**
```json
{
  "input": [
    {
      "country": "{{ $json.Location }}",
      "keyword": "{{ $json.keywords }}",
      "lat": ""
    }
  ],
  "custom_output_fields": [
    "url",
    "country",
    "name",
    "address",
    "description",
    "open_hours",
    "reviews_count",
    "rating",
    "reviews",
    "services_provided",
    "open_website",
    "phone_number",
    "permanently_closed",
    "photos_and_videos",
    "people_also_search"
  ]
}
```

### 3. Check Scraping Status
**Type:** HTTP Request  
**Purpose:** Check if data scraping is completed  
**Method:** GET  
**URL:** `https://api.brightdata.com/datasets/v3/progress/{{ $json.snapshot_id }}`

**Query Parameters:**
- `format`: `json`

**Headers:**
- `Authorization`: `Bearer BRIGHT_DATA_API_KEY`

### 4. Check If Status Ready
**Type:** Conditional (IF)  
**Purpose:** Determine if scraping is ready or needs to wait  
**Condition:** `{{ $json.status }}` equals `"ready"`

### 5. Wait Before Retry
**Type:** Wait  
**Purpose:** Pause 1 minute before checking status again  
**Duration:** 1 minute  
**Webhook ID:** `7047efad-de41-4608-b95c-d3e0203ef620`

### 6. Check Records Exist
**Type:** Conditional (IF)  
**Purpose:** Proceed only if business records are found  
**Condition:** `{{ $json.records }}` not equals `0`

### 7. Fetch Business Data
**Type:** HTTP Request  
**Purpose:** Get business information including phone numbers  
**Method:** GET  
**URL:** `https://api.brightdata.com/datasets/v3/snapshot/{{ $json.snapshot_id }}`

**Query Parameters:**
- `format`: `json`

**Headers:**
- `Authorization`: `Bearer BRIGHT_DATA_API_KEY`

### 8. Save to Google Sheets
**Type:** Google Sheets  
**Purpose:** Store business data in Google Sheets  
**Operation:** Append  
**Document ID:** `YOUR_GOOGLE_SHEET_ID`  
**Sheet Name:** GMB  

**Column Mapping:**
- **Name:** `{{ $json.name }}`
- **Address:** `{{ $json.address }}`
- **Rating:** `{{ $json.rating }}`
- **Phone Number:** `{{ $json.phone_number }}`
- **URL:** `{{ $json.url }}`

## Workflow Flow

1. **Start:** User submits form with location and keywords
2. **Request:** Send scraping request to Bright Data API
3. **Monitor:** Check scraping status periodically
4. **Wait Loop:** If not ready, wait 1 minute and check again
5. **Validate:** Ensure records exist before proceeding
6. **Fetch:** Retrieve the scraped business data
7. **Save:** Store results in Google Sheets

## Setup Requirements

### API Keys & Credentials
- **Bright Data API Key:** Replace `BRIGHT_DATA_API_KEY` with your actual API key
- **Google Sheets OAuth2:** Configure with your Google Sheets credential ID
- **Google Sheet ID:** Replace `YOUR_GOOGLE_SHEET_ID` with your actual sheet ID

### Google Sheets Setup
- Create a Google Sheet with a tab named "GMB"
- Ensure the following columns exist:
  - Name
  - Address
  - Rating
  - Phone Number
  - URL

## Workflow Status
- **Active:** No (currently inactive)
- **Execution Order:** v1
- **Version ID:** `0bed9bf1-00a3-4eb6-bf7c-cf07bee006a2`
- **Workflow ID:** `Hm7iTSgpu2of6gz4`

## Notes
- The workflow includes a retry mechanism with 1-minute waits
- Data validation ensures only successful scrapes are processed
- All business information is automatically saved to Google Sheets
- The form trigger allows easy initiation of scraping jobs

For any questions or support, please contact:
info@incrementors.com
or fill out this form: https://www.incrementors.com/contact-us/

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
