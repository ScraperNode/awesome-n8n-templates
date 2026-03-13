# ⚙️ Automate GoDaddy Subdomain Management via Email Requests

> ⚡ **230 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n workflow automates subdomain creation and deletion on GoDaddy using their API, triggered via email requests. This empowers developers to manage subdomains directly without involving DevOps for minor tasks.

### Good to know

- Ensure GoDaddy API credentials are securely configured to avoid unauthorized access.  
- Email parsing accuracy depends on the consistency of request formats.

### How it works

- Detect new email requests using the `Start Workflow (GET Request)` node.  
- Use the `Extract Data from Email` node to parse relevant details (e.g., subdomain name, action type).  
- Validate the action type with the `Validate Action Type` node to proceed with create (`true`) or delete (`false`).  
- If `true`, the `Create Subdomain` node sends a POST request to GoDaddy’s API to create the subdomain.  
- If `false`, the `Delete Subdomain` node sends a DELETE request to remove the subdomain.  
- The `Send Email Response` node notifies the requester of the action’s success or failure.

### How to use

- Import the workflow into n8n and configure the nodes with your GoDaddy API and email credentials.  
- Test with sample email requests to ensure proper parsing and API calls.

### Requirements

- GoDaddy API credentials  
- Email service (e.g., SMTP or API) for notifications  

### Customising this workflow

- Adjust the `Extract Data from Email` node to match your email format or add additional validation steps for security.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
