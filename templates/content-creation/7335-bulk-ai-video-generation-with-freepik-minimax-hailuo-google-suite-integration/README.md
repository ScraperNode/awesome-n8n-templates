# 🎬 Bulk AI video generation with Freepik Minimax Hailuo & Google Suite integration

> ⚡ **3,271 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow automates bulk AI video generation using Freepik's Image-to-Video API powered by Minimax Hailuo-02-768p. It reads video prompts from a Google Sheet, generates multiple variations of each video using Freepik's AI, handles asynchronous video processing with intelligent polling, and automatically uploads completed videos to Google Drive with organized file names. This is perfect for content creators, marketers, or video producers who need to generate multiple AI videos in bulk and store them systematically.

### Key Features:
- Bulk video generation from Google Sheets prompts
- Multiple variations per prompt (configurable duplicates)
- Asynchronous processing with smart status polling
- Automatic retry mechanism for processing delays
- Direct upload to Google Drive with organized naming
- Freepik Minimax Hailuo-02 AI-powered video generation (768p quality)
- Intelligent wait/retry system for video rendering

## Step-by-Step Implementation Guide

### Prerequisites
Before setting up this workflow, you'll need:

1. **n8n instance** (cloud or self-hosted)
2. **Freepik API account** with Video Generation access
3. **Google account** with access to Sheets and Drive
4. **Google Sheet** with your video prompts

### Step 1: Set Up Freepik API Credentials

1. Go to [Freepik API Developer Portal](https://freepik.com/api)
2. Create an account or sign in
3. Navigate to your API dashboard
4. Generate an API key with Video Generation permissions
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
   - **Column A**: `Prompt` (your video generation prompts)
   - **Column B**: `Name` (identifier for file naming)
3. Example data:
   ```
   | Prompt                                          | Name          |
   |-------------------------------------------------|---------------|
   | A butterfly landing on a flower in slow motion | butterfly-01  |
   | Ocean waves crashing on rocky coastline        | ocean-waves   |
   | Time-lapse of clouds moving across blue sky    | clouds-timelapse |
   ```
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)

### Step 4: Set Up Google Drive Folder

1. Create a folder in Google Drive for your generated videos
2. Copy the Folder ID from the URL when viewing the folder
3. Note: The workflow is configured to use a folder called "n8n workflows"

### Step 5: Import and Configure the Workflow

1. Copy the provided workflow JSON
2. In n8n, click **Import from File** or **Import from Clipboard**
3. Paste the workflow JSON
4. Configure each node as detailed below:

#### Node Configuration Details:

##### Get prompt from google sheet (Google Sheets)
- **Document ID**: Your Google Sheet ID (from Step 3)
- **Sheet Name**: `Sheet1` (or your sheet name)
- **Operation**: Read
- **Credentials**: Select your "Google Sheets account"

##### Duplicate Rows2 (Code Node)
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

##### Loop Over Items (Split in Batches)
- Processes items in batches to manage API rate limits
- **Options**: Keep default settings
- **Reset**: `false`

##### Create Video (HTTP Request)
- **Method**: `POST`
- **URL**: `https://api.freepik.com/v1/ai/image-to-video/minimax-hailuo-02-768p`
- **Authentication**: Generic → HTTP Header Auth
- **Credentials**: Select your "Header Auth account"
- **Send Body**: `true`
- **Body Parameters**:
  - **Name**: `prompt`
  - **Value**: `={{ $json.Prompt }}`

##### Get Video URL (HTTP Request)
- **Method**: `GET`
- **URL**: `https://api.freepik.com/v1/ai/image-to-video/minimax-hailuo-02-768p/{{ $json.data.task_id }}`
- **Authentication**: Generic → HTTP Header Auth
- **Credentials**: Select your "Header Auth account"
- **Timeout**: `120000` (2 minutes)
- **Purpose**: Polls the API for video completion status

##### Switch (Switch Node)
- **Purpose**: Routes workflow based on video generation status
- **Conditions**:
  - **Completed**: `{{ $json.data.status }}` equals `COMPLETED`
  - **Failed**: `{{ $json.data.status }}` equals `FAILED`
  - **Created**: `{{ $json.data.status }}` equals `CREATED`
  - **In Progress**: `{{ $json.data.status }}` equals `IN_PROGRESS`

##### Wait (Wait Node)
- **Amount**: `30` seconds
- **Purpose**: Waits before re-checking video status
- **Webhook ID**: Auto-generated for resume functionality

##### Download Video as Base64 (HTTP Request)
- **Method**: `GET`
- **URL**: `={{ $json.data.generated[0] }}`
- **Purpose**: Downloads completed video file

##### Upload to Google Drive1 (Google Drive)
- **Operation**: Upload
- **Name**: `=video - {{ $('Get prompt from google sheet').item.json.Name }} - {{ $('Duplicate Rows2').item.json.run }}`
- **Drive ID**: `My Drive`
- **Folder ID**: Your Google Drive folder ID (from Step 4)
- **Credentials**: Select your "Google Drive account"

### Step 6: Customize for Your Use Case

1. **Modify Duplicate Count**: Edit the "Duplicate Rows2" code to create more variations
2. **Update File Naming**: Change the naming pattern in the Google Drive upload node
3. **Adjust Wait Time**: Modify the Wait node duration based on typical processing times
4. **Add Video Parameters**: Enhance the Create Video request with additional Freepik parameters

### Step 7: Test the Workflow

1. Ensure your Google Sheet has test data
2. Click **Execute Workflow** on the manual trigger (if present)
3. Monitor the execution flow - note that video generation takes time
4. Watch the Switch node handle different status responses
5. Verify videos are uploaded to Google Drive when completed

### Step 8: Production Deployment

1. Set up error handling for API failures and timeouts
2. Configure appropriate batch sizes based on your Freepik API limits
3. Add logging for successful uploads and failed generations
4. Consider webhook triggers for automated execution
5. Set up monitoring for stuck or failed video generations

## Freepik Video API Details

### Video Generation Process:
1. **Submit Request**: Send prompt to generate video
2. **Get Task ID**: Receive task_id for tracking
3. **Poll Status**: Check generation status periodically
4. **Download**: Retrieve completed video URL

### Status Types:
- `CREATED`: Video generation task created
- `IN_PROGRESS`: Video is being generated
- `COMPLETED`: Video ready for download
- `FAILED`: Generation failed

### Model Specifications:
- **Model**: `minimax-hailuo-02-768p`
- **Resolution**: 768p
- **Duration**: Typically 5-10 seconds
- **Format**: MP4

### Example Enhanced Parameters:
```json
{
  "prompt": "{{ $json.Prompt }}",
  "duration": 5,
  "aspect_ratio": "16:9",
  "fps": 24
}
```

## Workflow Flow Summary

1. **Start** → Read prompts from Google Sheets
2. **Duplicate** → Create multiple runs for variations  
3. **Loop** → Process items in batches
4. **Generate** → Submit video generation request to Freepik
5. **Poll** → Check video generation status
6. **Switch** → Route based on status:
   - **Completed** → Download video
   - **Processing/Created** → Wait and retry
   - **Failed** → Handle error
7. **Download** → Retrieve completed video file
8. **Upload** → Save to Google Drive with organized naming
9. **Continue** → Process next batch

## Troubleshooting Tips

### Common Issues:
- **Long Processing Times**: Video generation can take 2-5 minutes per video
- **Timeout Errors**: Increase timeout in "Get Video URL" node
- **Rate Limits**: Reduce batch size and add longer waits between requests  
- **Failed Generations**: Check prompt complexity and API limits
- **Upload Failures**: Verify Google Drive folder permissions

### Error Handling:
- Add Try/Catch nodes around API calls
- Implement exponential backoff for retries
- Log failed generations to Google Sheets
- Set up email notifications for critical failures

### Performance Optimization:
- Adjust wait times based on typical generation duration
- Use smaller batch sizes for more reliable processing
- Monitor API usage and costs in Freepik dashboard

## Cost Considerations

### Freepik API:
- Video generation typically costs more than image generation
- Check your plan's video generation limits
- Monitor usage through Freepik dashboard
- Consider upgrading for higher volume needs

### Processing Time:
- Each video can take 2-5 minutes to generate
- Plan workflow execution time accordingly
- Consider running during off-peak hours for large batches

---

## Contact Information

**Robert A Ynteractive**

For support, customization, or questions about this workflow:

- 📧 Email: rbreen@ynteractive.com
- 🌐 Website: https://ynteractive.com/
- 💼 LinkedIn: https://www.linkedin.com/in/robert-breen-29429625/

*Need help implementing this workflow or want custom automation solutions? Get in touch for professional n8n consulting and workflow development services.*

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
