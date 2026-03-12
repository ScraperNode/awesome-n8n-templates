# 📊 Generate SEO anchor texts from Google Sheets with Claude 4 Sonnet

> ⚡ **145 views** · 📊 [Market Research & Insights](../)

## Description

# SEO Anchor Text Generator with n8n and Claude AI
Generate optimized SEO anchor texts for internal linking using AI automation. This workflow processes your website pages and creates diverse, SEO-compliant anchor variations automatically.
## Who's it for
- SEO specialists managing large websites with extensive internal linking needs
- Content managers looking to automate anchor text creation for better search rankings
- Digital marketers seeking to optimize internal linking strategies at scale
- Web agencies handling multiple client websites with SEO requirements
## What it does
This workflow automatically generates 10 unique SEO anchor texts with 3-5 linguistic variations each (40-50 total variations per page) using Claude AI. It analyzes your page content, applies advanced SEO criteria, and creates diverse anchor types including exact match, brand anchors, long-tail keywords, contextual phrases, and call-to-action variants.
## How it works
The system connects to your Google Sheets document containing page information, filters pages needing anchor generation, processes each page individually through Claude AI, and updates your spreadsheet with generated anchor texts. The workflow ensures semantic relevance, keyword optimization, natural language flow, and linguistic diversity while avoiding over-optimization penalties.
## Requirements
- Google Sheets with OAuth2 authentication configured in n8n
- Anthropic API key for Claude AI model access
- Template spreadsheet with proper column structure (Page, URL, Description, Anchors)
- Pages must have URL and description but empty anchor fields to trigger processing
## How to set up
### Step 1: Prepare Your Data

Duplicate the template spreadsheet: https://docs.google.com/spreadsheets/d/1VNl8xLYgRrNcKrmN9hCdfov1dMnwD44tAALJZAlagCo
Fill in your page information in the "Anchor" sheet:
- Page: Name/title of your page (can use hierarchical levels Niv 0-3)
- URL: Complete URL of the page
- Description: Brief description of page content to help AI generate relevant anchors
Leave the "Anchors" column empty for pages needing anchor generation

### Step 2: Configure n8n Credentials

Set up Google Sheets OAuth2:
- Go to n8n credentials settings
- Add new Google Sheets OAuth2 API credential
- Follow OAuth flow to authenticate with Google
- Test connection with your spreadsheet
Configure Anthropic API:
- Obtain API key from Anthropic Console
- Add new Anthropic API credential in n8n
- Enter your API key and test connection

### Step 3: Import and Activate Workflow

Import the workflow from the provided JSON
Update credential references to match your configured credentials
Test the Chat Trigger webhook to ensure it's accessible
Activate the workflow in n8n

### Step 4: Execute the Workflow

Send a chat message with your Google Sheets URL to trigger the workflow
Monitor execution through n8n interface to track progress
Check your spreadsheet for automatically generated anchor texts
Review and customize generated anchors as needed for your content

## How to customize the workflow
### Modify AI Prompt Instructions
Update the "Générateur d'ancres" node prompt to:
- Change the number of anchor variations generated
- Adjust SEO criteria and anchor types
- Modify linguistic variation requirements
- Customize language style and tone
- Add specific industry terminology
### Adjust Data Processing
Customize the "Filter" node conditions to:
- Change criteria for pages requiring anchor generation
- Add additional validation rules
- Modify column names to match your spreadsheet structure
### Enhance Output Formatting
Modify the "Import Sheets" code node to:
- Change data transformation logic
- Add additional processing steps
- Customize how results are formatted for Google Sheets
- Include timestamp or processing metadata
### Scale for Large Datasets
Optimize the "Loop Over Items" batch processing:
- Adjust batch sizes for better performance
- Add error handling for failed API calls
- Implement retry logic for robustness
- Add progress tracking mechanisms
### Integration Extensions
Extend functionality by adding nodes for:
- Slack notifications when processing completes
- Email reports with generation statistics
- Integration with content management systems
- Automated content publishing with generated anchors
## Advanced Customization Tips
- Language Adaptation: Modify the AI prompt for different languages by adjusting linguistic variation rules
- Industry Specialization: Add domain-specific terminology and SEO best practices to the prompt
- Quality Control: Implement additional filtering to review generated anchors before updating sheets
- Analytics Integration: Connect with Google Analytics to prioritize high-traffic pages for anchor generation
- Content Integration: Add nodes to automatically insert generated anchors into CMS or static site generators

## 🔗 Nodes Used

Google Sheets, Filter, AI Agent, Anthropic Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
