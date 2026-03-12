# 🎬 Generate AI descriptions for new Google Sheets entries with GPT-4.1-mini

> ⚡ **738 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow template automatically monitors your Google Sheets for new entries and uses AI to generate detailed descriptions for each topic. Perfect for content creators, researchers, project managers, or anyone who needs automatic content generation based on simple topic inputs.

## What This Workflow Does

This automated workflow:
- Monitors a Google Sheet for new rows added to the "data" tab
- Takes the topic from each new row
- Uses OpenAI GPT to generate a detailed description of that topic
- Updates the same row with the AI-generated description
- Logs all activity in a separate "actions" tab for tracking

The workflow runs every minute, checking for new entries and processing them automatically.

## Tools & Services Used

- **N8N** - Workflow automation platform
- **OpenAI API** - AI-powered description generation (GPT-4.1-mini)
- **Google Sheets** - Data input, storage, and activity logging
- **Google Sheets Trigger** - Real-time monitoring for new rows

## Prerequisites

Before implementing this workflow, you'll need:

1. **N8N Instance** - Self-hosted or cloud version
2. **OpenAI API Account** - For AI description generation
3. **Google Account** - For Google Sheets integration
4. **Google Sheets API Access** - For both reading and writing to sheets

## Step-by-Step Setup Instructions

### Step 1: Set Up OpenAI API Access

1. Visit [OpenAI's API platform](https://platform.openai.com/)
2. Create an account or log in
3. Navigate to API Keys section
4. Generate a new API key
5. Copy and securely store your API key

### Step 2: Set Up Your Google Sheets

**Option 1: Use Our Pre-Made Template (Recommended)**
1. Copy our template: [AI Description Generator Template](https://docs.google.com/spreadsheets/d/1d8O_Iwg5UtDjHM22zWHMegORatYzaQUYmzrcYnG5OSs/edit?usp=sharing)
2. Click "File" → "Make a copy" to create your own version
3. Rename it as desired (e.g., "My AI Content Generator")
4. Note your new sheet's URL - you'll need this for the workflow

**Option 2: Create From Scratch**
1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. **Set up the main "data" tab:**
   - Rename "Sheet1" to "data"
   - Set up column headers in row 1:
     - A1: `topic`
     - B1: `description`
4. **Create an "actions" tab:**
   - Add a new sheet and name it "actions"
   - Set up column headers:
     - A1: `Update`
5. Copy your sheet's URL

### Step 3: Configure Google API Access

1. **Enable Google Sheets API**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable "Google Sheets API"
   - Enable "Google Drive API"

2. **Create Service Account (for N8N)**
   - In Google Cloud Console, go to "IAM & Admin" → "Service Accounts"
   - Create a new service account
   - Download the JSON credentials file
   - Share your Google Sheet with the service account email address

### Step 4: Import and Configure the N8N Workflow

1. **Import the Workflow**
   - Copy the workflow JSON from the template
   - In your N8N instance, go to Workflows → Import from JSON
   - Paste the JSON and import

2. **Configure OpenAI Credentials**
   - Click on the "OpenAI Chat Model" node
   - Set up credentials using your OpenAI API key
   - Test the connection to ensure it works

3. **Configure Google Sheets Integration**
   
   **For the Trigger Node:**
   - Click on "Row added - Google Sheet" node
   - Set up Google Sheets Trigger OAuth2 credentials
   - Select your spreadsheet from the dropdown
   - Choose the "data" sheet
   - Set polling to "Every Minute" (already configured)

   **For the Update Node:**
   - Click on "Update row in sheet" node
   - Use the same Google Sheets credentials
   - Select your spreadsheet and "data" sheet
   - Verify column mapping (topic → topic, description → AI output)

   **For the Actions Log Node:**
   - Click on "Append row in sheet" node
   - Use the same Google Sheets credentials
   - Select your spreadsheet and "actions" sheet

### Step 5: Customize the AI Description Generator

The workflow uses a simple prompt that can be customized:

1. Click on the "Description Writer" node
2. Modify the system message to change the AI behavior:
   ```
   write a description of the topic.
   
   output like this.
   
   {
       "description": "description"
   }
   ```



## Need Help with Implementation?

For professional setup, customization, or troubleshooting of this workflow, contact:

**Robert - Ynteractive Solutions**
- **Email**: [robert@ynteractive.com](mailto:robert@ynteractive.com)
- **Website**: [www.ynteractive.com](https://www.ynteractive.com)
- **LinkedIn**: [linkedin.com/in/robert-breen-29429625/](https://www.linkedin.com/in/robert-breen-29429625/)

*Specializing in AI-powered workflow automation, business process optimization, and custom integration solutions.*

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
