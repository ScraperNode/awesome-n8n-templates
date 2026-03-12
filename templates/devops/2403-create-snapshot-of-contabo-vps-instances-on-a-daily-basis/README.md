# ⚙️ Create snapshot of Contabo VPS instances on a daily basis

> ⚡ **2,505 views** · ⚙️ [DevOps & CI/CD](../)

## Description

### Workflow: Snapshot Contabo

#### **How it Works**
This workflow automates daily backups (snapshots) of VPS instances hosted on Contabo. Each day at midnight, it checks for existing snapshots and ensures that only the latest backups are retained by removing older ones. It provides a seamless, hands-off backup process to keep your data secure.

#### **Setup Steps**
Setting up this workflow is quick, typically taking about 10-15 minutes. The essential part of the setup is providing the necessary credentials, which you can easily retrieve from your Contabo control panel.

1. **Import the Workflow:** Download and upload the workflow JSON into n8n.
2. **Configure Credentials:** Add `CLIENT_ID`, `CLIENT_SECRET`, `API_USER`, and `API_PASSWORD` in the credential node.
3. **Activate the Workflow:** Enable it to run automatically at midnight every day.

#### **Flow Overview**
- **Schedule Trigger (00:00 daily):** Automatically initiates the workflow.
- **Formatted Date:** Prepares a timestamp for naming the snapshot.
- **List Snapshots:** Verifies if an existing snapshot is available for each VPS.
- **Conditional Logic:** 
  - **No Snapshot?** Proceeds to create a new one.
  - **Snapshot Found?** Deletes the old snapshot before creating a new one.

#### **Key Points**
- **Snapshot Retention:** Old snapshots are deleted to ensure only the latest backups are stored.
- **Unique Identifiers:** UUIDs are used to track and guarantee unique operations.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
