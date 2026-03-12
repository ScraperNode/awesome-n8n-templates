# ⚙️ Nightly n8n backup to Google Drive

> ⚡ **7,749 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Description

This template creates a nightly backup of all n8n workflows and saves them to a **Google Drive** folder. Each night, the previous night's backups are moved to an **“n8n_old”** folder and renamed with the corresponding date.

Backups older than a specified age are automatically deleted using a precise code-based verification. This ensures your cloud storage remains organized without manual intervention.

## What's New in v5 (Optimized)

* **Lightning-Fast Search:** Optimized Google Drive nodes with specific queries (`name contains 'n8n_'`) and limits. This prevents the workflow from scanning your entire Drive, reducing execution time from minutes to seconds.
* **Dynamic ID Mapping:** Updated the **Code node** to map folder IDs on the fly. The workflow now "remembers" IDs for `n8n_backups` and `n8n_old`, allowing for seamless transitions even if folders are newly created.
* **Modernized Loops:** Fully migrated from legacy "Split In Batches" to the modern **"Loop Over Items"** architecture for better stability and readability.
* **Smart Purge Logic:** Uses a Javascript-based **Code node** (`you can delete`) to extract timestamps from filenames and strictly delete files older than 30 days.
* **Auto-Healing Infrastructure:** Intelligent check-and-create logic. If the system detects a missing folder, it creates it and immediately passes the new ID to the rest of the flow.

## Prerequisites

* **Google Drive Account:** OAuth2 credentials required. [Console Cloud Setup](https://console.cloud.google.com/apis/credentials/oauthclient/)
* **n8n Version:** Recommended **v1.70.1** or higher (Required for modern Loop nodes).
* **n8n API Key:** Required for the "Get many workflows" node to fetch your local data. [API Key Guide](https://witmovil.com/where-to-create-the-api-key-in-n8n/)
* **Permissions:** Ensure the Google Drive API is enabled in your Google Cloud Project.

## Configuration

1. **Credentials:** Update all Google Drive nodes with your OAuth2 credentials and the "Get many workflows" node with your n8n API Key.
2. **Folder Detection:** The "GET CURRENT FOLDER" node is pre-configured to find folders starting with `n8n_`. Do not rename the base folders unless you update the search query.
3. **Dynamic Paths:** The node "MOVE INTO OLD FOLDER" now uses a smart fallback expression:
`{{ $node["Code"].json.ids.n8n_old || $node["Create n8n_old"].json.id }}`
This ensures it always finds the correct destination.

**Automated Purge Settings:**

1. **Retention Policy:** Open the **"you can delete"** Code node. You can modify `const THIRTY_DAYS_IN_MS` to change your retention period.
2. **Activation:** Enable the **"PURGE DAYS"** Schedule Trigger (set to 30 days by default) to start the cleanup cycle.

## Last updated

March 2026 (v5.2 Optimized)

## 🔗 Nodes Used

Google Drive, Convert to/from binary data, n8n, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
