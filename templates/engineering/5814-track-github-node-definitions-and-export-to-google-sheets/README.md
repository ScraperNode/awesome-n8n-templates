# ⚒️ Track GitHub node definitions and export to Google Sheets

> ⚡ **117 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

# Track n8n Node Definitions from GitHub and Export to Google Sheets

## Overview
This workflow automatically retrieves and processes metadata from the official n8n GitHub repository, filters all available `.node.json` files, parses their structure, and appends structured information into a Google Sheet. Perfect for developers, community managers, and technical writers who need to maintain up-to-date information about n8n's evolving node ecosystem.

## Setup Instructions

### Prerequisites
Before setting up this workflow, ensure you have:
- A GitHub account with API access
- A Google account with Google Sheets access
- An active n8n instance (cloud or self-hosted)

### Step 1: GitHub API Configuration
1. Navigate to GitHub Settings → Developer Settings → Personal Access Tokens
2. Generate a new token with `public_repo` permissions
3. Copy the generated token and store it securely
4. In n8n, create a new "GitHub API" credential
5. Paste your token in the credential configuration and save

### Step 2: Google Sheets Setup
1. Create a new Google Sheets document
2. Set up the following column headers in the first row:
   - `node` (Column A) - Node identifier/name
   - `nodeVersion` (Column B) - Version of the node
   - `codexVersion` (Column C) - Codex version number
   - `categories` (Column D) - Node categories
   - `credentialDocumentation` (Column E) - Credential documentation URL
   - `primaryDocumentation` (Column F) - Primary documentation URL
3. Note down the Google Sheets document ID from the URL
4. Configure Google Sheets OAuth2 credentials in n8n

### Step 3: Workflow Configuration
1. Import the workflow into your n8n instance
2. Update the following placeholder values:
   - Replace `YOUR_GOOGLE_SHEETS_DOCUMENT_ID` with your actual document ID
   - Replace `YOUR_WEBHOOK_ID` if using webhook functionality
3. Configure the GitHub API credentials in the HTTP Request nodes
4. Set up Google Sheets credentials in the Google Sheets nodes
5. Share your Google Sheets document with the email address associated with your Google OAuth2 credentials
6. Grant "Editor" permissions to allow the workflow to write data

## Google Sheets Template Details

The workflow creates a structured dataset with these columns:
- **node**: Node identifier (e.g., `n8n-nodes-base.slack`)
- **nodeVersion**: Version of the node (e.g., `1.0.0`)
- **codexVersion**: Codex version number (e.g., `1.0.0`)
- **categories**: Node categories (e.g., `Communication, Productivity`)
- **credentialDocumentation**: URL to credential documentation
- **primaryDocumentation**: URL to primary node documentation

## Customization Options

### Modifying Data Extraction
You can customize the "Format Data" node to extract additional fields:
- Add new assignments in the Set node
- Modify the column mapping in the Google Sheets node
- Update your spreadsheet headers accordingly

### Changing Update Frequency
To run this workflow on a schedule:
1. Replace the Manual Trigger with a Cron node
2. Set your desired schedule (e.g., daily, weekly)
3. Configure appropriate timing to avoid API rate limits

### Adding Filters
Customize the "Filter Node Files" code node to:
- Filter specific node types
- Include/exclude certain categories
- Process only recently updated nodes

## Features
- Fetches all node definitions from the `n8n-io/n8n` repository
- Filters for `.node.json` files only
- Downloads and parses metadata automatically
- Extracts key fields like node names, versions, categories, and documentation URLs
- Appends structured data to Google Sheets with batch processing
- Includes error handling and retry mechanisms
- Clears existing data before appending new information for fresh results

## Use Cases
This workflow is ideal for:
- Track changes in official n8n node definitions over time
- Audit node categories and documentation links for completeness
- Build custom dashboards from node metadata
- Community management and documentation maintenance
- Integration planning and compatibility analysis

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
