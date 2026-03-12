# ⚙️ Auto Update n8n to Latest Version with Coolify

> ⚡ **1,694 views** · ⚙️ [DevOps & CI/CD](../)

## Description

*Automatically detect new n8n releases (stable or beta) from GitHub, update Coolify environment variables, and trigger deployments.*

---

#### **Functionality**  
This workflow automates deployment of [n8n](https://n8n.io) releases to a [Coolify](https://coolify.io) instance. It supports two tracks:  
1. **Beta Releases**: Checks GitHub every minute for prereleases, filters duplicates, updates the `N8N_VERSION` environment variable, and deploys.  
2. **Stable Releases** *(disabled by default)*: Checks the latest stable release hourly and deploys.  

Key Features:  
- **Deduplication**: Ensures no repeated deployments for the same release.  
- **Version Parsing**: Extracts the semantic version (e.g., `1.34.0`) from GitHub release names.  
- **Coolify Integration**: Updates environment variables and triggers deployments via API.  

---

#### **Expected Outcomes**  
- New n8n beta/stable releases detected via GitHub API.  
- Coolify environment variable `N8N_VERSION` updated to the latest version.  
- Automatic deployment triggered in Coolify.  

---

### **Setup Guide**  
1. **Replace Placeholders**:  
   - Update `m8ccg8k44coogsk84swk8kgs` in the `Update ENV` and `Deploy` nodes with your Coolify **Application UUID**.  

2. **Configure Credentials**:  
   - Add Coolify API credentials (`httpHeaderAuth`) with a valid API token in the headers.  

3. **Enable Triggers**:  
   - Toggle the `Auto Update Latest Release` node if stable releases are desired. Adjust schedule intervals as needed.  

4. **Test**:  
   - Run the workflow manually to validate API connections and version parsing.  

---

### **SEO Keywords**  
Automated Deployment, n8n CI/CD, Coolify Integration, GitHub Release Monitoring, Environment Variable Management, Beta Release Automation.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
