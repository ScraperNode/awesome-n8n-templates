# 🔬 Archive Lindo page changes to Google Drive and send email reports

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs weekly to fetch all API-visible pages from a Lindo website, detect content changes using SHA256 hashes, and when changes are found it saves a dated JSON snapshot to Google Drive and emails a change report.

## How it works
1. Runs every Monday at 09:00 UTC (or manually for testing) to start the website audit.
2. Loads and validates the configured Lindo website ID, Google Drive folder ID, and sender/reviewer email addresses.
3. Calls the Lindo API to fetch website metadata, list all API-visible pages, and download each page’s editable HTML content.
4. Normalizes page content (HTML plus key page fields) and generates a SHA256 hash per page to fingerprint the current state.
5. Compares the latest fingerprints to the last successfully delivered baseline stored in n8n workflow static data to detect added, changed, and removed pages.
6. If changes exist (or no baseline exists yet), packages a dated JSON snapshot, uploads it to Google Drive, emails the change report with a Drive link, and then commits the new baseline; otherwise it ends without uploading or emailing.

## Setup
1. Create a Lindo API key and configure HTTP Header Auth (Authorization: Bearer <YOUR_LINDO_API_KEY>) for the Lindo HTTP requests.
2. Update “Configure archive” with your Lindo website ID, a private Google Drive folder ID, and valid from/reviewer email addresses.
3. Connect Google Drive OAuth credentials for the upload step.
4. Configure an SMTP/Email Send credential in n8n and ensure your from address is permitted by your mail provider.
5. (Optional) Adjust the schedule trigger time/timezone to match when you want the weekly check to run.

## Requirements
- Lindo API access, Google Drive OAuth and SMTP. Uses built-in n8n nodes. Keep the destination folder private and run executions sequentially.

## Customization
- Adjust the schedule and timezone, reporting destination, and retention policy. Use a database or Data Table instead of workflow static data for concurrent or high-volume deployments.

## Additional info
The first successful active run creates a baseline. Manual tests do not persist workflow static data; verify two scheduled runs after activation. Coverage is limited to API-visible agentic pages and excludes blogs, media binaries, DNS and history. This is a content archive with no automatic restore. Limits: 1000 page fingerprints and 20 MB per snapshot. Empty HTML or incomplete inventories stop the run. A delivery failure may cause another archive on retry. Removed pages mean absent from the API inventory, not confirmed deliberate deletion.

## 🔗 Nodes Used

Send Email, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
