# ⚙️ N8N backup flow to Nextcloud (7-day retention)

> ⚡ **1,274 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow automates the daily backup of all your n8n workflows to a designated folder in Nextcloud. It ensures that you always have the last 7 days of backups available while automatically deleting older ones to save space.


🔧 Features

    Scheduled Trigger: Runs automatically once per day (can be executed manually as well).

    Directory Management: Creates the /N8N-Backup directory in Nextcloud if it doesn't already exist.

    Backup Collection: Retrieves all workflows from the n8n instance.

    JSON Conversion: Converts each workflow into a JSON file.

    Upload to Nextcloud: Saves each backup file into the specified backup directory.

    Retention Control: Keeps only the latest 7 backups and deletes the rest from Nextcloud.

📌 Notes

    Make sure to manually create the /N8N-Backup directory in your Nextcloud account before using this flow.

    Update the Backup Path node if you wish to change the upload directory.

    Ideal for teams using n8n with self-hosted instances and requiring offsite backup via Nextcloud.

🔒 Requirements

    n8n instance with access to the Nextcloud node.

    Valid credentials for your Nextcloud account with API access.


Update: 08/11/2025 “Backup Flows to Nextcloud” – Import format fixed

Summary:
The workflow now exports one clean JSON object per workflow (no arrays, no backup/meta fields), so files can be imported 1:1 via the n8n UI.

What changed:

    Switched from “Convert to File” to a Set node that builds the JSON in binary data.

    Enabled filters.include = "all" on Get many workflows to include nodes, connections, settings, pinData, and tags.

    Sanitized filenames and removed IDs/metadata that can break UI imports.

    Fixed Nextcloud path and binary property mapping (data).

Verification:

    Generated multiple backups and imported each via UI (“Import from file”) without errors.

    Each file begins with { (single object) and loads with full workflow structure.

Notes:

    Keep “Binary Property” set to data in the Nextcloud node.

    Filenames are sanitized to avoid special-character issues.

## 🔗 Nodes Used

Nextcloud, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
