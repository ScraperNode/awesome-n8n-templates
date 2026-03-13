# 📱 Auto-publish latest news on X with AI content generation using keywords and Bright Data

> ⚡ **3,909 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

# 📰 Publish Latest News on X and Other Social Media Platforms Using Keyword

A comprehensive n8n automation that fetches the latest news based on keywords, generates AI-powered social media content, and automatically publishes to X (Twitter) with complete tracking and notification systems.

## 📋 Overview

This workflow provides a professional news publishing solution that automatically discovers breaking news, creates engaging social media content using AI, and publishes to X (Twitter) with comprehensive tracking. Perfect for news organizations, content creators, social media managers, and businesses wanting to stay current with automated news sharing. The system uses BrightData's Google News dataset, OpenAI's GPT-4o for content generation, and multi-platform integration for complete automation.

## ⭐ Key Features

-   **📝 Form-Based Input**: Clean web form for keyword and country submission
-   **📰 Real-Time News Fetching**: BrightData Google News integration for latest articles
-   **🤖 AI Content Generation**: GPT-4o powered tweet creation with hashtags
-   **📱 Auto X Publishing**: Direct posting to X (Twitter) with URL tracking
-   **📊 Complete Tracking**: Google Sheets logging of all published content
-   **🔔 Email Notifications**: Success alerts with tweet links
-   **🌍 Multi-Country Support**: Localized news for US, India, UK, Australia
-   **⚡ Status Monitoring**: Real-time progress tracking with retry logic
-   **🛡 Error Handling**: Robust error management and validation
-   **🔄 Loop Management**: Intelligent waiting for news processing completion

## 🎯 What This Workflow Does

**Input:**

-   **News Name**: Keyword or topic for news search (required)
-   **Country**: Target country for localized news (dropdown: US/IN/GB/AU)

**Processing:**

1.  **Form Submission**: Captures news keyword and target country
2.  **News Triggering**: Initiates BrightData Google News scraping job
3.  **Status Monitoring**: Checks scraping progress with intelligent retry loop
4.  **Data Retrieval**: Fetches latest news articles when ready
5.  **AI Content Creation**: Generates engaging tweet content using GPT-4o
6.  **Social Publishing**: Posts content to X (Twitter) automatically
7.  **URL Generation**: Creates direct tweet links for tracking
8.  **Data Logging**: Saves content and URLs to Google Sheets
9.  **Email Notification**: Sends success confirmation with tweet link
10. **Completion**: Workflow ends with full audit trail

## 📋 Output Data Points

| Field         | Description                         | Example                                                                                                |
| :------------ | :---------------------------------- | :----------------------------------------------------------------------------------------------------- |
| TweetMessage  | AI-generated social media content | "Breaking: AI revolution transforming healthcare with 40% efficiency gains. New study shows promising results in patient care automation. #AI #Healthcare #Innovation #TechNews #US" |
| TweetURL      | Direct link to published tweet      | `https://twitter.com/i/web/status/1234567890123456789`                                                 |

## 🛠️ Setup Instructions

**Prerequisites:**

-   n8n instance (self-hosted or cloud)
-   X (Twitter) account with API v2 access
-   OpenAI account with GPT-4o access
-   Gmail account for notifications
-   Google account with Sheets access
-   BrightData account with Google News dataset access
-   Basic understanding of social media automation

**Step 1: Import the Workflow**

1.  Copy the JSON workflow code from the provided file.
2.  In n8n, click "+ Add workflow".
3.  Select "Import from JSON".
4.  Paste the workflow code and click "Import".
5.  The workflow will appear with all nodes properly connected.

**Step 2: Configure API Credentials**

**X (Twitter) API Setup:**

1.  Create X Developer Account at [developer.twitter.com](https://developer.twitter.com/).
2.  Create new app and generate API keys.
3.  In n8n: `Credentials` → `+ Add credential` → `Twitter OAuth2 API`.
4.  Add your Twitter API credentials:
    -   API Key
    -   API Secret Key
    -   Bearer Token
    -   Access Token
    -   Access Token Secret
5.  Test the connection with a sample tweet.

**OpenAI API Configuration:**

1.  Get API key from [platform.openai.com](https://platform.openai.com/).
2.  Ensure GPT-4o model access is available.
3.  In n8n: `Credentials` → `+ Add credential` → `OpenAI API`.
4.  Add your OpenAI API key.
5.  Verify model access in the "OpenAI Chat Model" node.

**Gmail Integration:**

1.  Create "Gmail OAuth2" credential.
2.  Follow OAuth setup process.
3.  Grant email sending permissions.
4.  Test with sample email.

**BrightData News API:**

1.  The workflow uses pre-configured token: `5662edde-6735-4c5d-a6c6-693043a5a9a5`.
2.  Dataset ID: `gd_lnsxoxzi1omrwnka5r` (Google News).
3.  Verify access to Google News dataset.
4.  Test API connection.

**Google Sheets Integration:**

1.  Create "Google Sheets OAuth2 API" credential.
2.  Complete OAuth authentication.
3.  Grant read/write permissions.
4.  Test connection.

**Step 3: Configure Google Sheets Integration**

1.  **Create Google Sheets Structure**:
    -   **Sheet Name**: "Publish Latest News on Social Media Platforms Using Keyword"
    -   **Tab**: "Data" (default)
    -   **Columns**:
        -   Tweet Message: AI-generated content posted to X
        -   Tweet URL: Direct link to published tweet
2.  **Sheet Configuration**:
    -   Create new Google Sheet or use existing one.
    -   Add the required column headers.
    -   Copy Sheet ID from URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`.
    -   Current configured Sheet ID: `1koxNrwdeuaSBdREuKc7JQh3d9blEk0sQDJ8VgVLjPOo`.
3.  **Update Workflow Settings**:
    -   Open "Google Sheets" node.
    -   Replace Document ID with your Sheet ID.
    -   Select your Google Sheets credential.
    -   Choose "Data" sheet/tab.
    -   Verify column mapping is correct.

**Step 4: Configure Form Interface**

**Form Settings:**

1.  Open "On form submission" node.
2.  **Form configuration**:
    -   **Title**: "News Publisher"
    -   **Description**: "publish latest news to direct social media"
    -   **Fields**:
        -   News Name (text, required)
        -   Country (dropdown: US, IN, GB, AU, required)
    -   **Webhook URL**: Copy webhook URL from form trigger node.
    -   Current webhook ID: `8d320705-688c-4150-a393-cf899d2bbb52`.
    -   Test form accessibility and submission.

**Step 5: Configure Email Notifications**

**Gmail Setup:**

1.  Open "Gmail" node.
2.  Update recipient email: `raushan@iwantonlinemarketing.com`.
3.  Email template includes:
    -   Success confirmation
    -   Direct tweet link
    -   Professional formatting
4.  Test email delivery.

**Step 6: Test the Workflow**

**Sample Test Data:**

Use these examples for testing:

| News Name             | Country | Expected Results                                   |
| :-------------------- | :------ | :------------------------------------------------- |
| artificial intelligence | US      | Latest AI news with US-specific hashtags           |
| cricket world cup     | IN      | Sports news with India-focused content            |
| brexit update         | GB      | UK political news with British hashtags            |
| bushfire news         | AU      | Australian environmental news                      |

**Testing Process:**

1.  Activate the workflow (toggle switch).
2.  Navigate to the webhook form URL.
3.  Submit test data.
4.  Monitor execution progress:
    -   News fetching (30-60 seconds)
    -   AI content generation (10-15 seconds)
    -   X publishing (5-10 seconds)
    -   Sheet update and email (5 seconds)
5.  Verify results in all platforms.

## 📖 Usage Guide

**Using the Form Interface**

1.  Navigate to the webhook URL provided by the form trigger.
2.  Enter news keyword or topic (e.g., "climate change", "stock market", "technology").
3.  Select target country from dropdown.
4.  Click submit and wait for processing.
5.  Check email for success notification with tweet link.

**Example Inputs to Test**

| News Name                         | Country | Expected                                               |
| :-------------------------------- | :------ | :----------------------------------------------------- |
| "artificial intelligence breakthrough" | "US"    | Latest AI developments with tech hashtags              |
| "football premier league"         | "GB"    | UK football news with sports hashtags                  |
| "stock market updates"            | "IN"    | Indian market news with finance hashtags                |
| "hollywood movies"                | "AU"    | Entertainment news with Australian perspective         |

**Country-Specific Considerations**

-   **United States (US)**:
    -   Focus on national news and global impact.
    -   Hashtags: `#USA`, `#American`, `#Breaking`, `#News`.
    -   Time zone considerations for optimal posting.
-   **India (IN)**:
    -   Emphasis on regional relevance.
    -   Hashtags: `#India`, `#Indian`, `#News`, `#Breaking`.
    -   Cultural context in content generation.
-   **United Kingdom (GB)**:
    -   British perspective and terminology.
    -   Hashtags: `#UK`, `#British`, `#News`, `#Breaking`.
    -   Focus on European context.
-   **Australia (AU)**:
    -   Australian angle and regional focus.
    -   Hashtags: `#Australia`, `#Australian`, `#News`, `#Breaking`.
    -   Pacific region context.

## 📊 Reading the Results

**Google Sheets Data**

The output sheet contains:

-   Complete tweet content with hashtags and formatting.
-   Direct tweet URLs for easy access and sharing.
-   Chronological record of all published content.
-   Audit trail for content management.

**Email Notifications**

Success emails include:

-   Confirmation that content was published.
-   Direct link to view the tweet.
-   Professional formatting for easy reference.

**X (Twitter) Posts**

Published content features:

-   AI-optimized messaging within 260 character limit.
-   Relevant hashtags based on topic and country.
-   Engaging format designed for social media.
-   Professional tone suitable for news sharing.

## 🔧 Customization Options

**Expanding Social Media Platforms**

Add more platforms to the publishing workflow:

```javascript
// Add LinkedIn publishing
{
  "node": "LinkedIn",
  "type": "n8n-nodes-base.linkedin",
  "parameters": {
    "text": "={{ $json.output }}",
    "additionalFields": {}
  }
}
// Add Facebook posting
{
  "node": "Facebook",
  "type": "n8n-nodes-base.facebook",
  "parameters": {
    "pageId": "YOUR_PAGE_ID",
    "message": "={{ $json.output }}"
  }
}

## 🔗 Nodes Used

Google Sheets, HTTP Request, X (Formerly Twitter), Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
