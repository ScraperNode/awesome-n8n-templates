# ⚙️ Automatic monitoring of multiple URLs with downtime alerts

> ⚡ **16,609 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This n8n workflow allows you to automatically monitor the status of multiple URLs in a simple and efficient way. You just need to enter the URLs you want to scan and run the workflow (either manually or scheduled). For each URL, an availability check is performed. The results are logged in a Google Sheet, clearly distinguishing between successful checks and failures (downtime). If any URL fails, the system filters these errors and automatically sends an email alert notifying you of the detected outages.

The workflow includes help messages in both English and Spanish, integrates with Google Sheets and Gmail, and is suitable for both one-off tasks and scheduled monitoring.



### For Who?
- Webmasters
- SEO & Marketing Teams
- SysAdmins
- Anyone needing automated website uptime monitoring

### How it works?
Enter the URLs to scan in the “URLs” field.
Trigger the workflow manually or schedule it to run automatically.
For each URL, the workflow:
Checks if the URL is online or down.
Logs the status (success or error) in a Google Sheet.
At the end, filters the failed URLs (crashes) and sends an email alert l

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
