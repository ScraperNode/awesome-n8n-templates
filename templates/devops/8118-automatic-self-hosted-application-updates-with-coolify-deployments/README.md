# ⚙️ Automatic self-hosted application updates with Coolify deployments

> ⚡ **358 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Auto-update n8n instance with Coolify  

### Who’s it for  
This workflow is designed for **self-hosted n8n administrators** who want to keep their instance automatically updated to the latest stable release. It removes the need for manual version checks and ensures deployments are always up to date.  

### What it does  
The workflow checks your **current n8n version** against the **latest GitHub release**. If a mismatch is detected, it triggers a **Coolify deployment** to update your instance. If both versions match, the workflow ends safely without action.  

### How it works  
1. **Trigger**: Start manually or on a schedule.  
2. **HTTP Request (n8n settings)**: Fetches your current version (`versionCli`).  
3. **HTTP Request (GitHub)**: Fetches the latest n8n release (`name`).  
4. **Merge (SQL)**: Keeps only the two fields needed.  
5. **Set (Normalize)**: Converts values into comparable variables.  
6. **IF Check**: Compares current vs latest version.  
   - If different → Deploy update.  
   - If same → Stop with no operation.  
7. **HTTP Request (Coolify)**: Triggers a forced redeploy via API.  

### How to set up  
- Replace `https://yourn8ndomain/rest/settings` with your own **n8n domain**.  
- Replace the Coolify API URL with your **Coolify domain + app UUID**.  
- Add an **HTTP Bearer credential** containing your Coolify API token.  
- Adjust the schedule interval (e.g., every 6 hours).  

### Requirements  
- Self-hosted n8n instance with `/rest/settings` endpoint accessible.  
- Coolify (or a similar service) managing your n8n deployment.  
- Valid API token configured as Bearer credential in n8n.  

### How to customize  
- Change the schedule frequency depending on how often you want checks.  
- Modify the IF condition if you want stricter or looser version matching (e.g., ignore patch versions).  
- Replace Coolify API call with another service (like Docker, Portainer, or Kubernetes) if you use a different deployment method.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
