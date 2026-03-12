# ⚙️ Automate n8n updates with version checking and Portainer webhook

> ⚡ **383 views** · ⚙️ [DevOps & CI/CD](../)

## Description

🔄 Purpose of the Workflow:
The Update-N8N workflow is designed to automatically trigger a (Portainer) webhook to update an N8N container, but only if a new version of N8N is available.

⚙️ Detailed Workflow Steps:
🕒 Scheduled Trigger
The workflow runs every 16 hours at minute 8 using a schedule trigger node.

🌐 Fetch Latest N8N Version
It sends an HTTP GET request to https://registry.npmjs.org/n8n/latest to retrieve the latest published N8N version from the npm registry.

📈 Get Currently Running Local Version
Another HTTP GET request is sent to https://127.0.0.1/metrics (likely the Prometheus metrics endpoint of the local N8N instance) to extract the currently installed N8N version.

🧠 Version Comparison
The workflow compares the local version (parsed from metrics) with the latest available version.

📬 Trigger Portainer Webhook
If the versions do not match (i.e., an update is available), a POST request is sent to a webhook URL, which might be a Portainer webhook that redeploys or updates the N8N container/stack. 

✅ Key Benefits:
No manual checks or updates needed.

Triggers only when a new version is available.

Integrates seamlessly with Portainer via webhook.

Secure configuration, e.g., disallowing unauthorized TLS certs for external requests.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
