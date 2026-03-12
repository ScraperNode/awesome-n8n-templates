# 📊 Pinterest keyword-based content scraper with AI agent & BrightData automation

> ⚡ **2,136 views** · 📊 [Market Research & Insights](../)

## Description

# Pinterest Keyword-Based Content Scraper with AI Agent & BrightData Automation

## Overview

This n8n workflow automates Pinterest content scraping based on user-provided keywords using BrightData's API and Claude Sonnet 4 AI agent. The system intelligently processes keywords, initiates scraping jobs, monitors progress, and formats the extracted data into structured outputs.

## Architecture Components

### 🧠 AI-Powered Controller
- **Claude Sonnet 4 Model**: Processes and understands keywords before initiating scrape
- **AI Agent**: Acts as the intelligent controller coordinating all scraping steps

### 📥 Data Input
- **Form Trigger**: User-friendly keyword input interface
- **Keywords Field**: Required input field for Pinterest search terms

### 🚀 Scraping Pipeline
1. **Launch Scraping Job**: Sends keywords to BrightData API
2. **Status Monitoring**: Continuously checks scraping progress
3. **Data Retrieval**: Downloads completed scraped content
4. **Data Processing**: Formats and structures the raw data
5. **Storage**: Saves results to Google Sheets

## Workflow Nodes

### 1. Pinterest Keyword Input
- **Type**: Form Trigger
- **Purpose**: Entry point for user keyword submission
- **Configuration**: 
  - Form title: "Pinterest"
  - Required field: "Keywords"

### 2. Anthropic Chat Model
- **Type**: Language Model (Claude Sonnet 4)
- **Model**: `claude-sonnet-4-20250514`
- **Purpose**: AI-powered keyword processing and workflow orchestration

### 3. Keyword-based Scraping Agent
- **Type**: AI Agent
- **Purpose**: Orchestrates the entire scraping process
- **Instructions**:
  - Initiates Pinterest scraping with provided keywords
  - Monitors scraping status until completion
  - Downloads final scraped data
  - Presents raw scraped data as output

### 4. BrightData Pinterest Scraping
- **Type**: HTTP Request Tool
- **Method**: POST
- **Endpoint**: `https://api.brightdata.com/datasets/v3/trigger`
- **Parameters**:
  - `dataset_id`: `gd_lk0sjs4d21kdr7cnlv`
  - `include_errors`: `true`
  - `type`: `discover_new`
  - `discover_by`: `keyword`
  - `limit_per_input`: `2`
- **Purpose**: Creates new scraping snapshot based on keywords

### 5. Check Scraping Status
- **Type**: HTTP Request Tool
- **Method**: GET
- **Endpoint**: `https://api.brightdata.com/datasets/v3/progress/{snapshot_id}`
- **Purpose**: Monitors scraping job progress
- **Returns**: Status values like "running" or "ready"

### 6. Fetch Pinterest Snapshot Data
- **Type**: HTTP Request Tool
- **Method**: GET
- **Endpoint**: `https://api.brightdata.com/datasets/v3/snapshot/{snapshot_id}`
- **Purpose**: Downloads completed scraped data
- **Trigger**: Executes when status is "ready"

### 7. Format & Extract Pinterest Content
- **Type**: Code Node (JavaScript)
- **Purpose**: Parses and structures raw scraped data
- **Extracted Fields**:
  - URL
  - Post ID
  - Title
  - Content
  - Date Posted
  - User
  - Likes & Comments
  - Media
  - Image URL
  - Categories
  - Hashtags

### 8. Save Pinterest Data to Google Sheets
- **Type**: Google Sheets Node
- **Operation**: Append
- **Mapped Columns**:
  - Post URL
  - Title
  - Content
  - Image URL

### 9. Wait for 1 Minute (Disabled)
- **Type**: Code Tool
- **Purpose**: Adds delay between status checks (currently disabled)
- **Duration**: 60 seconds

## Setup Requirements

### Required Credentials

1. **Anthropic API**
   - Credential ID: `ANTHROPIC_CREDENTIAL_ID`
   - Required for Claude Sonnet 4 access

2. **BrightData API**
   - API Key: `BRIGHT_DATA_API_KEY`
   - Required for Pinterest scraping service

3. **Google Sheets OAuth2**
   - Credential ID: `GOOGLE_SHEETS_CREDENTIAL_ID`
   - Required for data storage

### Configuration Placeholders

Replace the following placeholders with actual values:

- `WEBHOOK_ID_PLACEHOLDER`: Form trigger webhook ID
- `GOOGLE_SHEET_ID_PLACEHOLDER`: Target Google Sheets document ID
- `WORKFLOW_VERSION_ID`: n8n workflow version
- `INSTANCE_ID_PLACEHOLDER`: n8n instance identifier
- `WORKFLOW_ID_PLACEHOLDER`: Unique workflow identifier

## Data Flow

```
User Input (Keywords) 
    ↓
AI Agent Processing (Claude)
    ↓
BrightData Scraping Job Creation
    ↓
Status Monitoring Loop
    ↓
Data Retrieval (when ready)
    ↓
Content Formatting & Extraction
    ↓
Google Sheets Storage
```

## Output Data Structure

Each scraped Pinterest pin contains:

- **URL**: Direct link to Pinterest pin
- **Post ID**: Unique Pinterest identifier
- **Title**: Pin title/heading
- **Content**: Pin description text
- **Date Posted**: Publication timestamp
- **User**: Pinterest username
- **Engagement**: Likes and comments count
- **Media**: Media type information
- **Image URL**: Direct image link
- **Categories**: Pin categorization tags
- **Hashtags**: Associated hashtags
- **Comments**: User comments text

## Usage Instructions

1. **Initial Setup**:
   - Configure all required API credentials
   - Replace placeholder values with actual IDs
   - Create target Google Sheets document

2. **Running the Workflow**:
   - Access the form trigger URL
   - Enter desired Pinterest keywords
   - Submit the form to initiate scraping

3. **Monitoring Progress**:
   - The AI agent will automatically handle status monitoring
   - No manual intervention required during scraping

4. **Accessing Results**:
   - Structured data will be automatically saved to Google Sheets
   - Each run appends new data to existing sheet

## Technical Notes

- **Rate Limiting**: BrightData API has built-in rate limiting
- **Data Limits**: Current configuration limits 2 pins per keyword
- **Status Polling**: Automatic status checking until completion
- **Error Handling**: Includes error capture in scraping requests
- **Async Processing**: Supports long-running scraping jobs

## Customization Options

- **Adjust Data Limits**: Modify `limit_per_input` parameter
- **Enable Wait Timer**: Activate the disabled wait node for longer jobs
- **Custom Data Fields**: Modify the formatting code for additional fields
- **Alternative Storage**: Replace Google Sheets with other storage options

## Sample Google Sheets Template

Create a copy of the sample sheet structure:
```
https://docs.google.com/spreadsheets/d/SAMPLE_SHEET_ID/edit
```

Required columns:
- Post URL
- Title  
- Content
- Image URL

## Troubleshooting

- **Authentication Errors**: Verify all API credentials are correctly configured
- **Scraping Failures**: Check BrightData API status and rate limits
- **Data Formatting Issues**: Review the JavaScript formatting code for parsing errors
- **Google Sheets Errors**: Ensure proper OAuth2 permissions and sheet access


For any questions or support, please contact: [Email](mailto:info@incrementors.com) or
[fill out this form](https://www.incrementors.com/contact-us/)

## 🔗 Nodes Used

Google Sheets, AI Agent, Anthropic Chat Model, Code Tool, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
