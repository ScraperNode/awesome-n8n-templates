# 📁 Create, delete, and organize AWS S3 buckets & files directly from your email

> ⚡ **381 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This automated n8n workflow automates AWS S3 bucket and file operations (create, delete, upload, download, copy, list) by parsing simple email commands and sending back success or error confirmations.

### Good to Know
- The workflow processes email requests via a Start Workflow (GET Request) node.
- Data extraction from emails identifies S3 operation commands.
- Error handling is included for invalid or missing email data.
- Responses are sent via email for each action performed.

## How It Works
- **Start Workflow (GET Request)** - Captures incoming email requests.
- **Extract Data from Email** - Parses email content to extract S3 operation commands.
- **Check Task Type** - Validates the type of task (e.g., create bucket, delete file).
- **Create a Bucket** - Creates a new S3 bucket.
- **Delete a Bucket** - Deletes an existing S3 bucket.
- **Copy a File** - Copies a file within S3.
- **Delete a File** - Deletes a file from S3.
- **Download a File** - Downloads a file from S3.
- **Upload a File** - Uploads a file to S3.
- **Get Many Files** - Lists multiple files in a bucket.
- **Check Success or Fail** - Determines the outcome of the operation.
- **Send Success Email** - Sends a success confirmation email.
- **Send Failed Email** - Sends a failure notification email.

## How to Use
- Import the workflow into n8n.
- Configure the Start Workflow (GET Request) node to receive email commands.
- Test the workflow with sample email commands (e.g., "create bucket: my-bucket", "upload file: document.pdf").
- Monitor email responses and adjust command parsing if needed.

## Example **Email for Testing**

```
List files from the bucket json-test in Mumbai region.
```

## Requirements
- AWS S3 credentials configured in n8n.
- Email service integration (e.g., SMTP settings).
- n8n environment with workflow execution permissions.

## Customizing This Workflow
- Adjust the Extract Data from Email node to support additional command formats.
- Modify the Send Success Email or Send Failed Email nodes to customize messages.
- Update the S3 nodes to include additional bucket or file attributes.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, AWS S3

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
