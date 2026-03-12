# 🔬 Convert markdown content to Google Docs document with automatic formatting

> ⚡ **4,482 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow is perfect for **technical writers**, **content creators**, **marketers**, and **developers** who write in Markdown but need to collaborate or publish using Google Docs format. Ideal for teams that want to streamline their content creation and review process.

## What problem does this workflow solve?

Manual conversion from Markdown to Google Docs is time-consuming and often loses formatting. This workflow eliminates the tedious copy-paste process, automatically preserves formatting, and creates organized, timestamped documents in your Google Drive. Perfect for content teams who write in Markdown but need Google Docs for collaboration and review.

## What this workflow does

- **Converts Markdown to HTML** with proper formatting preservation (headers, lists, links, tables)
- **Creates timestamped Google Docs** documents with automatic naming
- **Adds Drive location metadata** for better organization and reference
- **Maintains document structure** including emojis, tables, and text formatting
- **Automates file creation** in specified Google Drive folders

## Setup

- Google Drive OAuth2 credentials configured in n8n
- Target Google Drive folder URL
- Input your content title and Markdown text in the "Set Input Data" node

## How to customize this workflow to your needs

- **Modify HTML formatting options** in the Markdown conversion node
- **Change file naming patterns** to match your organization system  
- **Adjust Drive folder structure** and metadata inclusion
- **Update MIME type handling** for different output requirements
- **Add additional processing steps** like notifications or integrations

Perfect for technical documentation workflows, content publishing pipelines, blog preparation, and automated report generation.

# Setup Instructions - Markdown to Google Docs Converter

## Prerequisites

- **n8n instance** (local or cloud)
- **Google account** with Google Drive access
- **Basic understanding** of n8n workflow configuration

## Step 1: Import the Workflow

1. **Open n8n** and navigate to `Workflows`
2. **Click** "Add workflow" → "Import from JSON"
3. **Upload** the `Export_Markdown_Content_do_Google_Docs_Document.json` file
4. **Save** the workflow with a descriptive name

## Step 2: Configure Google Drive Credentials

### Create Google Drive OAuth2 Credentials

1. **In n8n**, go to `Settings` → `Credentials`
2. **Click** "Add credential" → "Google Drive OAuth2 API"
3. **Follow the OAuth setup** to authorize n8n access to Google Drive:
   - Visit Google Cloud Console
   - Create or select a project
   - Enable Google Drive API
   - Create OAuth2 credentials
   - Add authorized redirect URI for your n8n instance
4. **Name the credential** (e.g., "Google Drive - Markdown Converter")

### Configure Google Drive Nodes

**Update these nodes with your Google Drive credentials:**
- `Create Empty File`
- `Update Document with Correct HTML Formatting`

**In each node:**
1. **Select your Google Drive credential** from the dropdown
2. **Test the connection** to ensure it works properly

## Step 3: Prepare Your Google Drive

### Create Target Folder

1. **Go to Google Drive** (drive.google.com)
2. **Create a new folder** for your converted documents
3. **Copy the folder URL** (will look like: `https://drive.google.com/drive/folders/FOLDER_ID`)
4. **Ensure the folder has proper permissions** for your Google account

## Step 4: Configure Input Data

### Set Your Default Values

1. **Open the "Set Input Data" node**
2. **Update the assignments** with your preferences:

   **Google Drive URL:**
   - Replace the example URL with your target folder URL
   - Format: `https://drive.google.com/drive/folders/YOUR_FOLDER_ID`

   **Content Title:**
   - Set a default title or leave placeholder text
   - This will be used in the document filename

   **Content in Markdown:**
   - Add your Markdown content or keep example for testing
   - Supports standard Markdown syntax (headers, lists, links, tables)

## Step 5: Test the Workflow

### Initial Test Run

1. **Ensure all credentials are configured**
2. **Click the "Test workflow" button** on the Manual Trigger node
3. **Monitor the execution** - check for any errors in node outputs
4. **Verify the result**:
   - Check your Google Drive folder
   - Look for a new document with timestamp in the name
   - Open the document to verify formatting

### Troubleshooting Common Issues

**Google Drive Permission Errors:**
- Verify OAuth2 credentials are properly configured
- Check that the target folder exists and is accessible
- Ensure Google Drive API is enabled in Google Cloud Console

**Markdown Conversion Issues:**
- Check that your Markdown syntax is valid
- Test with simple content first (headers, paragraphs, lists)
- Verify the "Change Markdown To HTML" node settings

**File Creation Problems:**
- Confirm the Google Drive folder URL format is correct
- Check that the folder ID in the URL is valid
- Ensure your Google account has write permissions to the folder

## Step 6: Customize for Your Needs

### Modify HTML Formatting Options

**In the "Change Markdown To HTML" node:**
- **Enable/disable emoji support** (currently enabled)
- **Adjust table formatting** (currently enabled)
- **Modify header ID generation** (currently disabled)
- **Configure space requirements** for headers

### Update File Naming Pattern

**In the "Create Empty File" node:**
- **Change the naming convention**: Currently uses `_PUB {Content Title} {timestamp}`
- **Modify timestamp format**: Currently `yyyy-MM-dd HH:mm:ss`
- **Add prefixes or suffixes** as needed for your organization

## Step 7: Production Usage

### Regular Workflow Execution

1. **Update the "Set Input Data" node** with new content
2. **Execute the workflow** manually or set up triggers
3. **Monitor execution logs** for any issues
4. **Check Google Drive** for generated documents

### Integration Options

**Webhook Integration:**
- Add a Webhook trigger to accept external Markdown content
- Useful for automated content publishing workflows

**Email Integration:**
- Add email notifications when documents are created
- Include links to generated Google Docs

## Advanced Configuration

### Error Handling

- Add error handling nodes after critical operations
- Implement retry logic for API failures
- Set up notifications for failed executions

### Performance Optimization

- Adjust the "Wait for Document Creation" timing if needed
- Consider file size limits for Google Docs

## Support and Troubleshooting

### Common Solutions

- **Timeout errors**: Increase wait time in "Wait for Document Creation"
- **Authentication failures**: Refresh Google OAuth2 credentials
- **Formatting issues**: Test with simpler Markdown first

### Getting Help

- Check n8n community forums for Google Drive integration issues
- Review Google Drive API documentation for rate limits
- Test with minimal Markdown content to isolate problems

---

**Total setup time: ~15-20 minutes**  
**Difficulty level: Intermediate**  
**Requirements: Google account, n8n instance, basic OAuth2 setup knowledge**

## 🔗 Nodes Used

Google Drive, Markdown, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
