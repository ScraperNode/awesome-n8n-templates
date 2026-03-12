# ⚒️ Automate Power BI dataset refreshes with history monitoring

> ⚡ **2,808 views** · ⚒️ [Engineering](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This n8n workflow provides automated Power BI dataset refresh capabilities with built-in refresh history monitoring. It triggers a dataset refresh in Power BI and simultaneously checks the refresh history to track data update status. This is perfect for data analysts, business intelligence teams, or anyone who needs to automate Power BI dataset refreshes and monitor their success rates without manual intervention.

### Key Features:
- Automated Power BI dataset refresh triggering
- Simultaneous refresh history monitoring
- Manual trigger for on-demand execution
- Real-time status tracking
- Integration with Power BI REST API
- Support for workspace and personal datasets

## Step-by-Step Implementation Guide

### Prerequisites
Before setting up this workflow, you'll need:

1. **n8n instance** (cloud or self-hosted)
2. **Power BI account** (Pro or Premium)
3. **Microsoft Azure App Registration** for API access
4. **Power BI dataset** that you want to refresh

### Step 1: Set Up Azure App Registration

1. Go to [Azure Portal](https://portal.azure.com/)
2. Navigate to **Azure Active Directory** → **App registrations**
3. Click **New registration**
4. Configure your app:
   - **Name**: `n8n-powerbi-integration`
   - **Supported account types**: Accounts in this organizational directory only
   - **Redirect URI**: `https://your-n8n-instance.com/rest/oauth2-credential/callback`
5. Click **Register**
6. Note down the **Application (client) ID** and **Directory (tenant) ID**

### Step 2: Configure App Permissions

1. In your app registration, go to **API permissions**
2. Click **Add a permission** → **Power BI Service**
3. Select **Delegated permissions** and add:
   - `Dataset.ReadWrite.All`
   - `Dataset.Read.All`
   - `Workspace.Read.All`
4. Click **Grant admin consent** for your organization

### Step 3: Create Client Secret

1. In your app registration, go to **Certificates & secrets**
2. Click **New client secret**
3. Add description: `n8n-powerbi-secret`
4. Set expiration (recommended: 24 months)
5. Click **Add** and copy the secret value immediately

### Step 4: Configure Power BI API Credentials in n8n

1. In n8n, go to **Credentials** → **Add Credential** → **Power BI OAuth2 API**
2. Configure as follows:
   - **Client ID**: Your Application (client) ID from Step 1
   - **Client Secret**: Your client secret from Step 3
   - **Scope**: `https://analysis.windows.net/powerbi/api/.default`
3. Save and test the connection



### Step 6: Import and Configure the Workflow

1. Copy the provided workflow JSON
2. In n8n, click **Import from File** or **Import from Clipboard**
3. Paste the workflow JSON
4. Configure each node as detailed below:

#### Node Configuration Details:

##### When clicking 'Execute workflow' (Manual Trigger)
- **Type**: Manual Trigger
- **Purpose**: Allows manual execution of the workflow
- No configuration needed

##### Refresh Datasource (Power BI)
- **Resource**: `dataset`
- **Operation**: `refresh`
- **Group ID**: `me` (for personal workspace) or your workspace ID
- **Dataset ID**: Your Power BI dataset ID (from Step 5)
- **Credentials**: Select your "Power BI account"

##### Check Refresh History (Power BI)
- **Resource**: `dataset`
- **Operation**: `getRefreshHistory`
- **Group ID**: `me` (for personal workspace) or your workspace ID  
- **Dataset ID**: Your Power BI dataset ID (same as above)
- **Top**: `10` (number of recent refresh records to retrieve)
- **Credentials**: Select your "Power BI account"



## Workflow Flow Summary

1. **Manual Trigger** → User initiates workflow execution
2. **Parallel Execution**:
   - **Refresh Dataset** → Triggers Power BI dataset refresh
   - **Get History** → Retrieves recent refresh history
3. **Results** → Both operations complete simultaneously providing:
   - Confirmation of refresh initiation
   - Historical context of previous refreshes



## Contact Information

**Robert A Ynteractive**

For support, customization, or questions about this workflow:

- 📧 Email: rbreen@ynteractive.com
- 🌐 Website: https://ynteractive.com/
- 💼 LinkedIn: https://www.linkedin.com/in/robert-breen-29429625/

*Need help implementing this workflow or want custom automation solutions? Get in touch for professional n8n consulting and workflow development services.*

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
