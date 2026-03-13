# 📱 Upload video & image ads to Meta Ads Manager from Google Sheets & Google Drive

> ⚡ **796 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

# Upload Video & Image Ads to Meta Ads Manager from Google Sheets using Google Drive & Meta Graph API

## Product Description

This n8n workflow automates the process of uploading video and image advertisements to Meta Ads Manager via the Meta Graph API (Facebook Ads) directly from Google Sheets and Google Drive. The workflow monitors a specified Google Drive folder for new assets, extracts file metadata, and creates Facebook ad campaigns with customizable creative elements including multiple text variations, headlines, and descriptions.

The automation supports both video and image assets, with intelligent handling of single or multiple image creatives. For video assets, it manages the upload process, monitors processing status, and automatically generates preview thumbnails. Image assets can be configured with multiple variations and custom placement targeting across Facebook, Instagram, Messenger, and Audience Network.

## Key Features

- **Automated Asset Monitoring**: Watches Google Drive folder for new uploads and file updates
- **Multi-Format Support**: Handles both video and image advertisements
- **Flexible Creative Options**: Supports multiple text variations, headlines, and descriptions
- **Smart Image Handling**: Creates single or multi-image creatives based on available assets
- **Cross-Platform Targeting**: Configures ads for Facebook, Instagram, Messenger, and Audience Network
- **Status Tracking**: Updates Google Sheets with upload progress and ad IDs
- **Batch Processing**: Processes multiple ads efficiently with built-in rate limiting
- **Direct Sheet Integration**: Upload ads directly from Google Sheets using custom menu

## Prerequisites

### Required Accounts & Access
- **Meta Developer Account**: Required for Facebook Graph API access
- **Meta Business Manager**: Active ad account with appropriate permissions
- **Google Account**: With access to Google Drive and Google Sheets APIs
- **n8n Instance**: Self-hosted or cloud instance with appropriate node packages

### Technical Requirements
- Meta App must be set to "Live" status (not Development mode)
- Facebook Graph API v22.0 access
- Google Drive API credentials with folder access permissions
- Google Sheets API credentials with read/write permissions

## Setup Instructions

### 1. Meta Developer Setup
1. Create a Meta Developer account and register a new app
2. Generate a long-lived access token with the following permissions:
  - `ads_management`
  - `business_management`
  - `pages_read_engagement`
3. Ensure your app status is set to "Live"
4. Note your Ad Account ID, Page ID, and Instagram User ID

### 2. Google Services Configuration
1. Create a Google Cloud project and enable:
  - Google Drive API
  - Google Sheets API
2. Generate OAuth2 credentials for both services
3. Create a dedicated Google Drive folder for asset uploads
4. Make a copy of the [Google Sheets template](https://docs.google.com/spreadsheets/d/15kG5QXUP9Zb36tgdW1PwhvVh7ybD2XuXhUVSqo7PnRQ/edit?gid=0#gid=0)

### 3. Workflow Configuration
1. Import the workflow JSON into your n8n instance
2. Configure the following credentials:
  - Facebook Graph API (using your access token)
  - Google Drive OAuth2 API
  - Google Sheets OAuth2 API

### 4. Settings Configuration
1. Update the `settings` and `settings_1` nodes with:
  - Your Google Sheets URL
  - Your Google Drive folder URL
2. Execute and pin these settings nodes to preserve configurations

### 5. Google Sheets Setup
1. Fill in the "Settings" tab of your copied template with:
  - Ad Account IDs
  - Page IDs
  - Instagram User IDs
  - **Webhook URL**: Copy the webhook URL from your n8n workflow and paste it in the settings tab
2. Configure your ad campaigns in the "Ready to Upload" sheet

### 6. Asset Management
1. Upload your video/image assets to the designated Google Drive folder
2. Ensure file naming follows your tracking conventions
3. Update the Google Sheets with corresponding asset information

## Workflow Triggers

The workflow can be activated through:
- **Manual Trigger**: For testing and one-time executions
- **Google Drive Trigger**: Automatic execution when files are added/updated
- **Webhook Trigger**: Integration with Google Apps Script for direct sheet control
- **Custom Menu Integration**: Upload ads directly from Google Sheets via "Meta → Upload Ads" menu option

### Using the Custom Menu
The Google Sheets template includes a custom Google Apps Script that adds a "Meta" menu to your spreadsheet. To upload ads:

1. Ensure the webhook URL is correctly configured in the Settings tab
2. Navigate to the "Meta" menu in your Google Sheet
3. Click "Upload Ads" to trigger the workflow
4. The workflow will process all ads marked for upload in the "Ready to Upload" sheet

## File Support

- **Video Assets**: MP4, MOV, AVI formats (uploaded via Meta's video API)
- **Image Assets**: JPG, PNG formats with support for multiple creative variations
- **Large File Handling**: Includes workaround for Google Drive virus scanning on large files

## Important Notes

- All ads are created in "PAUSED" status for review before activation
- The workflow includes built-in delays to respect API rate limits
- Asset processing status is monitored and updated in real-time
- Multiple text variations enable A/B testing capabilities
- Custom placement rules optimize ad delivery across different platforms
- **Webhook Configuration**: Ensure the webhook URL in your Google Sheets settings matches your n8n workflow webhook endpoint

This automation significantly reduces manual work in Meta Ads Manager while maintaining full control over creative elements and targeting parameters.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Facebook Graph API, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
