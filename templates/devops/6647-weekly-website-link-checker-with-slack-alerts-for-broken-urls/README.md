# ⚙️ Weekly website link checker with Slack alerts for broken URLs

> ⚡ **669 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Description
- Automates weekly checks for broken links on a website.
- Scans the site using HTTP requests and filters broken links.
- Sends Slack alerts for detected broken URLs and creates a list for tracking.

## Essential Information
- Runs weekly to monitor website link integrity.
- Identifies broken links and notifies the team via Slack.
- Generates a list of broken links for further action.

## System Architecture
- **Link Checking Pipeline**:
  - **Weekly Cron Trigger**: Schedules the workflow to run weekly.
  - **Scan Blog with HTTP**: Performs HTTP GET requests to check website links.
- **Alert and Tracking Flow**:
  - **Filter Broken Links**: Identifies and separates broken links.
  - **Send Slack Alert**: Notifies the team via Slack about broken URLs.
  - **Create Broken Links List**: Compiles a list of broken links.
- **Non-Critical Handling**:
  - **No Action for Valid Links**: Skips valid links with no further action.

## Implementation Guide
- Import the workflow JSON into n8n.
- Configure the HTTP node with the target website URL (e.g., https://yourblog.com).
- Set up Slack credentials for alerts.
- Test the workflow with a sample website scan.
- Monitor link checking accuracy and adjust HTTP settings if needed.

## Technical Dependencies
- HTTP request capability for link scanning.
- Slack API for team notifications.
- n8n for workflow automation and scheduling.

## Database & Sheet Structure
- No specific database or sheet required; relies on HTTP response data.
- Example payload: `{"url": "https://yourblog.com/broken", "status": 404, "time": "2025-07-29T20:21:00Z"}`

## Customization Possibilities
- Adjust the Cron trigger to run at a different frequency (e.g., daily).
- Customize HTTP node to scan specific pages or domains.
- Modify Slack alert messages in the `Send Slack Alert` node.
- Enhance the `Create Broken Links List` node to save results to a Google Sheet or Notion.
- Add email notifications for additional alert channels.

## 🔗 Nodes Used

Cron, Function, HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
