# 📱 Generate weekly cold email performance reports with ManyReach, GPT-4.1 & Slack

> ⚡ **78 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Overview
This n8n workflow automatically generates weekly performance reports for completed email campaigns from ManyReach, converts them to Google Docs, and shares them via Slack.

## Workflow Trigger
- **Schedule**: Runs every Monday (weekly)
- Automates the entire reporting process without manual intervention

## Process Flow

### 1. Data Collection
- **Fetch All Campaigns**: Retrieves up to 100 campaigns from ManyReach API
- **Split Out**: Breaks down the campaign list into individual items
- **Filter**: Selects only campaigns that are both:
  - Active (`active = true`)
  - Completed (`campStatus = "completed"`)

### 2. Campaign Processing Loop
The workflow processes each filtered campaign individually:

1. **Fetch One Campaign**: Retrieves detailed data for the specific campaign
2. **Campaign Report Agent**: AI-powered analysis using GPT-4.1 that generates:
   - Executive summary with key highlights
   - Performance metrics (open rate, click rate, reply rate, conversion rate)
   - Email content analysis
   - Configuration insights
   - Actionable recommendations
   - Next steps

### 3. Report Generation
- **Markdown → HTML**: Converts the AI-generated markdown report to HTML format
- **Set Details**: Prepares document metadata (name, content)
- **HTML → Magic 🪄**: Formats the HTML content for Google Drive upload with proper styling

### 4. Distribution
- **Upload Doc**: Creates a new Google Doc in the connected Drive account
- **Send a Doc Link**: Posts the document link to the `#manyreach` Slack channel with campaign name

## Key Features
- **Automated Analysis**: AI evaluates campaign performance against industry benchmarks
- **Comprehensive Metrics**: Tracks prospects, opens, clicks, replies, conversions, and interested leads
- **Professional Reports**: Generated as formatted Google Docs for easy sharing
- **Team Notifications**: Automatic Slack alerts keep the team informed

## Required Credentials
- ManyReach API (HTTP Query Auth)
- OpenAI API (for GPT-4.1)
- Google Drive OAuth2
- Slack OAuth2

## Output
Each completed campaign receives a detailed performance report posted to Slack with a direct link to the Google Doc for review and collaboration.

## 🔗 Nodes Used

HTTP Request, Slack, Markdown, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
