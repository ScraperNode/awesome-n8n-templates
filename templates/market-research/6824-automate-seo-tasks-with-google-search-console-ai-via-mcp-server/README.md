# 📊 Automate SEO tasks with Google Search Console & AI via MCP Server

> ⚡ **1,431 views** · 📊 [Market Research & Insights](../)

## Description

# 🚀 Google Search Console MCP Server

---

## 📋 Description

This n8n workflow serves as a **Model Context Protocol (MCP)** server, connecting MCP-compatible AI tools (like Claude) directly to the Google Search Console APIs. With this workflow, users can automate critical SEO tasks and manage Google Search Console data effortlessly via MCP endpoints.

**Included Functionalities:**
- 📌 **List Verified Sites**
- 📌 **Retrieve Detailed Site Information**
- 📌 **Access Search Analytics Data**
- 📌 **Submit and Manage Sitemaps**
- 📌 **Request URL Indexing**

OAuth2 is fully supported for secure and seamless API interactions.

---

## 🛠️ Setup Instructions

### 🔑 Prerequisites
- **n8n instance** (cloud or self-hosted)
- Google Cloud project with enabled APIs:
  - Google Search Console API
  - Web Search Indexing API
- OAuth2 Credentials from Google Cloud

### ⚙️ Workflow Setup

**Step 1: Import Workflow**
- Open n8n, select **"Import from JSON"**, and paste this workflow JSON.

**Step 2: Configure OAuth2 Credentials**
- Navigate to **Settings → Credentials**.
- Add new credentials (**Google OAuth2 API**):
  - **Client ID** and **Client Secret** from Google Cloud
  - Scopes:
    ```
    https://www.googleapis.com/auth/webmasters.readonly
    https://www.googleapis.com/auth/webmasters
    https://www.googleapis.com/auth/indexing
    ```

**Step 3: Configure Webhooks**
- Webhook URLs auto-generate in MCP Server Trigger node.
- Ensure webhooks are publicly accessible via HTTPS.

**Step 4: Testing**
- Test your endpoints with sample HTTP requests to confirm everything is working correctly.

---

## 🎯 Usage Examples

- **List Sites**: Fetch all verified Search Console sites.
- **Get Site Info**: Get detailed information about a particular site.
- **Search Analytics**: Pull metrics such as clicks, impressions, and rankings.
- **Submit Sitemap**: Automatically submit sitemaps.
- **Request URL Indexing**: Trigger Google's indexing for specific URLs instantly.

---

## 🚩 Use Cases & Applications
- SEO automation workflows
- AI-driven SEO analytics
- Real-time website performance monitoring
- Automated sitemap management

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
