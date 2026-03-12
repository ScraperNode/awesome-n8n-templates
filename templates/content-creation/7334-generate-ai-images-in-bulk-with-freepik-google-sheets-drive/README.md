# 🎬 Generate AI images in bulk with Freepik, Google Sheets & Drive

> ⚡ **3,925 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow automates bulk AI image generation using Freepik's Text-to-Image API. It reads prompts from a Google Sheet, generates multiple variations of each image using Freepik's AI, and automatically uploads the results to Google Drive with organized file names. This is perfect for content creators, marketers, or designers who need to generate multiple AI images in bulk and store them systematically.

### Key Features:
- Bulk image generation from Google Sheets prompts
- Multiple variations per prompt (configurable duplicates)
- Automatic file naming and organization
- Direct upload to Google Drive
- Batch processing for efficient API usage
- Freepik AI-powered image generation

## Step-by-Step Implementation Guide

### Prerequisites
Before setting up this workflow, you'll need:

1. **n8n instance** (cloud or self-hosted)
2. **Freepik API account** with Text-to-Image access
3. **Google account** with access to Sheets and Drive
4. **Google Sheet** with your prompts

### Step 1: Set Up Freepik API Credentials

1. Go to [Freepik API Developer Portal](https://freepik.com/api)
2. Create an account or sign in
3. Navigate to your API dashboard
4. Generate an API key for Text-to-Image service
5. Copy the API key and save it securely
6. In n8n, go to **Credentials** → **Add Credential** → **HTTP Header Auth**
7. Configure as follows:
   - **Name**: "Header Auth account"
   - **Header Name**: `x-freepik-api-key`
   - **Header Value**: Your Freepik API key

### Step 2: Set Up Google Credentials

#### Google Sheets Access:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Sheets API
4. Create OAuth2 credentials
5. In n8n, go to **Credentials** → **Add Credential** → **Google Sheets OAuth2 API**
6. Enter your OAuth2 credentials and authorize with `spreadsheets.readonly` scope

#### Google Drive Access:
1. In Google Cloud Console, enable Google Drive API
2. In n8n, go to **Credentials** → **Add Credential** → **Google Drive OAuth2 API**
3. Enter your OAuth2 credentials and authorize

### Step 3: Create Your Google Sheet

1. Create a new Google Sheet: [sheets.google.com](https://sheets.google.com)
2. Set up your sheet with these columns:
   - **Column A**: `Prompt` (your image generation prompts)
   - **Column B**: `Name` (identifier for file naming)
3. Example data:
   ```
   | Prompt                                    | Name        |
   |-------------------------------------------|-------------|
   | A serene mountain landscape at sunrise    | mountain-01 |
   | Modern office space with natural lighting | office-02   |
   | Cozy coffee shop interior                 | cafe-03     |
   ```
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)

### Step 4: Set Up Google Drive Folder

1. Create a folder in Google Drive for your generated images
2. Copy the Folder ID from the URL when viewing the folder
3. Note: The workflow is configured to use a folder called "n8n workflows"

### Step 5: Import and Configure the Workflow

1. Copy the provided workflow JSON
2. In n8n, click **Import from File** or **Import from Clipboard**
3. Paste the workflow JSON
4. Configure each node as detailed below:

#### Node Configuration Details:

##### Start Workflow (Manual Trigger)
- No configuration needed
- Used to manually start the workflow

##### Get Prompt from Google Sheet (Google Sheets)
- **Document ID**: Your Google Sheet ID (from Step 3)
- **Sheet Name**: `Sheet1` (or your sheet name)
- **Operation**: Read
- **Credentials**: Select your "Google Sheets account"

##### Double Output (Code Node)
- **Purpose**: Creates multiple variations of each prompt
- **JavaScript Code**:
```javascript
const original = items[0].json;

return [
  { json: { ...original, run: 1 } },
  { json: { ...original, run: 2 } },
];
```
- **Customization**: Add more runs for additional variations

##### Loop (Split in Batches)
- Processes items in batches to manage API rate limits
- **Options**: Keep default settings
- **Reset**: `false`

##### Create Image (HTTP Request)
- **Method**: `POST`
- **URL**: `https://api.freepik.com/v1/ai/text-to-image`
- **Authentication**: Generic → HTTP Header Auth
- **Credentials**: Select your "Header Auth account"
- **Send Body**: `true`
- **Body Parameters**:
  - **Name**: `prompt`
  - **Value**: `={{ $json.Prompt }}`

##### Split Responses (Split Out)
- **Field to Split Out**: `data`
- **Purpose**: Separates multiple images from API response

##### Convert to File (Convert to File)
- **Operation**: `toBinary`
- **Source Property**: `base64`
- **Purpose**: Converts base64 image data to file format

##### Upload Image to Google Drive (Google Drive)
- **Operation**: Upload
- **Name**: `=Image - {{ $('Get Prompt from Google Sheet').item.json.Name }} - {{ $('Double Output').item.json.run }}`
- **Drive ID**: `My Drive`
- **Folder ID**: Your Google Drive folder ID (from Step 4)
- **Credentials**: Select your "Google Drive account"

### Step 6: Customize for Your Use Case

1. **Modify Duplicate Count**: Edit the "Double Output" code to create more variations
2. **Update File Naming**: Change the naming pattern in the Google Drive upload node
3. **Adjust Batch Size**: Modify the Loop node settings for your API limits
4. **Add Image Parameters**: Enhance the HTTP request with additional Freepik parameters (size, style, etc.)

### Step 7: Test the Workflow

1. Ensure your Google Sheet has test data
2. Click **Execute Workflow** on the manual trigger
3. Monitor the execution flow
4. Check that images are generated and uploaded to Google Drive
5. Verify file names match your expected pattern

### Step 8: Production Deployment

1. Set up error handling for API failures
2. Configure appropriate batch sizes based on your Freepik API limits
3. Add logging for successful uploads
4. Consider webhook triggers for automated execution
5. Set up monitoring for failed executions

## Freepik API Parameters

### Basic Parameters:
- `prompt`: Your text description (required)
- `negative_prompt`: What to avoid in the image
- `guidance_scale`: How closely to follow the prompt (1-20)
- `num_inference_steps`: Quality vs speed trade-off (20-100)
- `seed`: For reproducible results

### Example Enhanced Body:
```json
{
  "prompt": "{{ $json.Prompt }}",
  "negative_prompt": "blurry, low quality",
  "guidance_scale": 7.5,
  "num_inference_steps": 50,
  "num_images": 1
}
```

## Workflow Flow Summary

1. **Start** → Manual trigger initiates the workflow
2. **Read Sheet** → Gets prompts and names from Google Sheets
3. **Duplicate** → Creates multiple runs for variations
4. **Loop** → Processes items in batches
5. **Generate** → Freepik API creates images from prompts
6. **Split** → Separates multiple images from response
7. **Convert** → Transforms base64 to binary file format
8. **Upload** → Saves images to Google Drive with organized names
9. **Complete** → Returns to loop for next batch




## Contact Information

**Robert A Ynteractive**

For support, customization, or questions about this workflow:

- 📧 Email: rbreen@ynteractive.com
- 🌐 Website: https://ynteractive.com/
- 💼 LinkedIn: https://www.linkedin.com/in/robert-breen-29429625/

*Need help implementing this workflow or want custom automation solutions? Get in touch for professional n8n consulting and workflow development services.*

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
