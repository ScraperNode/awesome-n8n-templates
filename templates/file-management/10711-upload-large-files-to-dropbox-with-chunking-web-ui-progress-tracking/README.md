# 📁 Upload large files to Dropbox with chunking & web UI progress tracking

> ⚡ **36 views** · 📁 [File Management](../)

## Description

# Dropbox Large File Upload System

## How It Works

This workflow enables uploading large files (300MB+) to Dropbox through a web interface with real-time progress tracking. It bypasses Dropbox's 150MB single-request limit by breaking files into 8MB chunks and uploading them sequentially using Dropbox's upload session API.

**Upload Flow:**

1. **User accesses page** - Visits `/webhook/upload-page` and sees HTML form with file picker and folder path input
2. **Selects file** - Chooses file and clicks "Upload to Dropbox" button
3. **JavaScript initiates session** - Calls `/webhook/start-session` → Dropbox creates upload session → Returns `sessionId`
4. **Chunk upload loop** - JavaScript splits file into 8MB chunks and for each chunk:
   - Calls `/webhook/append-chunk` with sessionId, offset, and chunk binary data
   - Dropbox appends chunk to session
   - Progress bar updates (e.g., 25%, 50%, 75%)
5. **Finalize upload** - After all chunks uploaded, calls `/webhook/finish-session` with final offset and target path
6. **File committed** - Dropbox commits all chunks into complete file at specified path (e.g., `/Uploads/video.mp4`)

**Why chunking?** Dropbox API has a 150MB limit for single `upload` requests. The upload session API (`upload_session/start`, `append_v2`, `finish`) allows unlimited file sizes by chunking.

**Technical Architecture:**
- Four webhook endpoints handle different stages (serve UI, start, append, finish)
- All chunk data sent as `multipart/form-data` with binary blobs
- Dropbox API requires cursor metadata (session_id, offset) in `Dropbox-API-Arg` header
- `autorename: true` prevents file overwrites

## Setup Steps

**Time estimate: ~20-25 minutes (first time)**

1. **Create Dropbox app** - Go to [Dropbox App Console](https://www.dropbox.com/developers/apps):
   - Click "Create app"
   - Choose "Scoped access" API
   - Select "Full Dropbox" access type
   - Name your app (e.g., "n8n File Uploader")
   - Under Permissions tab, enable: `files.content.write`
   - Copy App Key and App Secret

2. **Configure n8n OAuth2 credentials** - In n8n:
   - Create new "Dropbox OAuth2 API" credential
   - Paste App Key and App Secret
   - Set OAuth Redirect URL to your n8n instance (e.g., `https://your-n8n.com/rest/oauth2-credential/callback`)
   - Complete OAuth flow to get access token

3. **Connect credentials to HTTP nodes** - Add your Dropbox OAuth2 credential to these three nodes:
   - "Dropbox Start Session"
   - "Dropbox Append Chunk"
   - "Dropbox Finish Session"

4. **Activate workflow** - Click "Active" toggle to generate production webhook URLs

5. **Customize default folder (optional)** - In "Respond with HTML" node:
   - Find line: `&lt;input type="text" id="dropboxFolder" value="/Uploads/" ...`
   - Change `/Uploads/` to your preferred default path

6. **Get upload page URL** - Copy the production webhook URL from "Serve Upload Page" node (e.g., `https://your-n8n.com/webhook/upload-page`)

7. **Test upload** - Visit the URL, select a small file first (~50MB), choose folder path, click Upload

## Important Notes

**File Size Limits:**
- Standard Dropbox API: 150MB max per request
- This workflow: Unlimited (tested with 300MB+ files)
- Chunk size: 8MB (configurable in HTML JavaScript `CHUNK_SIZE` variable)

**Upload Behavior:**
- Files with same name are auto-renamed (e.g., `video.mp4` → `video (1).mp4`) due to `autorename: true`
- Upload is synchronous - browser must stay open until complete
- If upload fails mid-process, partial chunks remain in Dropbox session (expire after 24 hours)

**Security Considerations:**
- Webhook URLs are public - anyone with URL can upload to your Dropbox
- Add authentication if needed (HTTP Basic Auth on webhook nodes)
- Consider rate limiting for production use

**Dropbox API Quotas:**
- Free accounts: 2GB storage, 150GB bandwidth/day
- Plus accounts: 2TB storage, unlimited bandwidth
- Upload sessions expire after 4 hours of inactivity

**Progress Tracking:**
- Real-time progress bar shows percentage (0-100%)
- Status messages: "Starting upload...", "✓ Upload complete!", "✗ Upload failed: [error]"
- Final response includes file path, size, and Dropbox file ID

**Troubleshooting:**
- If chunks fail: Check Dropbox OAuth token hasn't expired (refresh if needed)
- If session not found: Ensure sessionId is passed correctly between steps
- If finish fails: Verify target path exists and app has write permissions
- If page doesn't load: Activate workflow first to generate webhook URLs

**Performance:**
- 8MB chunks = ~37 requests for 300MB file
- Upload speed depends on internet connection and Dropbox API rate limits
- Typical: 2-5 minutes for 300MB file on good connection

**Pro tip:** Test with a small file (10-20MB) first to verify credentials and flow, then try larger files. Monitor n8n execution list to see each webhook call and troubleshoot any failures. For production, consider adding error handling and retry logic in the JavaScript.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
