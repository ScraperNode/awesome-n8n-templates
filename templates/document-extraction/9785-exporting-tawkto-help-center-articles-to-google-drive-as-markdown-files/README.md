# 🔬 Exporting Tawk.to help center articles to Google Drive as markdown files

> ⚡ **127 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 🧠 Export Tawk.to Help Center Articles to Google Drive as Markdown Files

Transform the way you manage your knowledge base with this **fully automated N8N workflow**!
This automation connects directly to your **Tawk.to Help Center**, reads all published categories and articles, converts them to Markdown (`.md`) format, and uploads each file to **Google Drive** 

---

### 🔹 Key Benefits

🚀 **Complete Extraction**
Automatically captures all categories and articles from your Tawk.to Help Center, even without direct API integration.

🧩 **Automatic Conversion**
Transforms HTML content into clean Markdown files — perfect for editing, version control, or migration to another CMS.

☁️ **Native Google Drive Integration**
Saves each article with a structured filename, avoids duplicates, and organizes them by category.

🔁 **Fully Customizable**
Easily adapt the workflow to export to Notion, GitHub, Dropbox, or any other platform supported by N8N.

💡 **Ideal Use Cases**

* Migrating your Tawk.to Help Center
* Creating automated content backups
* Integrating documentation across multiple systems

---

### ⚙️ Prerequisites

Before running this workflow, make sure you have:

* An active **Tawk.to** account with access to your Help Center.
* A **Google Drive** account (personal or workspace).
* Access to **N8N** (self-hosted or cloud).

---

### 🧰 Setup Instructions

1. **Import the Workflow**

   * Download the JSON file from the provided link or your N8N community instance.
   * In N8N, click **Import Workflow** and upload the file.

2. **Authenticate Google Drive**

   * Open the Google Drive node.
   * Click **Connect**, choose your Google account, and allow access.

3. **Configure Output Folder**

   * Choose or create a target folder in your Google Drive where articles will be saved.

4. **Run the Workflow**

   * Click **Execute Workflow**.
   * The automation will read all Help Center articles, convert them to Markdown, and save them to your Drive.

## 🔗 Nodes Used

HTTP Request, Google Drive, Markdown

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
