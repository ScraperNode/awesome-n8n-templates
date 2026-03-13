# ⚙️ Automate AWS IAM user management through email

> ⚡ **361 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This automated n8n workflow manages AWS IAM users (create, delete, update, assign to groups) directly from email commands with automatic confirmation responses.

### Good to Know
- The workflow processes email requests via a GET Email Request node.
- Data extraction from emails is handled to identify user management commands.
- Error handling is included for invalid or missing email data.
- Responses are sent via email for each action performed.

## How It Works
- **GET Email Request** - Captures incoming email requests.
- **Extract Data from Email** - Parses email content to extract user management commands.
- **Check Type of Task** - Validates the type of task (e.g., create, delete, update).
- **Get User** - Retrieves user details from AWS IAM.
- **Get Many Users** - Fetches multiple user details if required.
- **Create User** - Creates a new IAM user.
- **Delete User** - Deletes an existing IAM user.
- **Add to Group** - Assigns a user to a group.
- **Remove from Group** - Removes a user from a group.
- **Update User** - Updates user details.
- **Make Message for Email** - Prepares a confirmation email.
- **Send Email Response** - Sends the confirmation email.

## How to Use
- Import the workflow into n8n.
- Configure the GET Email Request node to receive email commands.
- Test the workflow with sample email commands (e.g., "create user: john_doe", "add to group: admins").
- Monitor email responses and adjust command parsing if needed.

## Requirements
- AWS IAM credentials configured in n8n.
- Email service integration (e.g., SMTP settings).
- n8n environment with workflow execution permissions.

## Customizing This Workflow
- Adjust the Extract Data from Email node to support additional command formats.
- Modify the Make Message for Email node to customize confirmation messages.
- Update the AWS IAM nodes to include additional user attributes or group policies.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, AWS IAM

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
