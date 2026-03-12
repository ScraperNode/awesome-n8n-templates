# ⚙️ Automatic workflow & credentials backup to GitHub with change detection

> ⚡ **5,979 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 

**Title:** n8n Credentials and Workflows Backup on Change Detection

**Purpose:**
Never lose track of your n8n changes again! This workflow smartly backs up all your workflows and credentials, automatically detects any changes using hash comparison, and pushes updates to GitHub—but only when something has actually changed. Set your own interval and stop cluttering your repo with redundant commits.

[Walkthrough Video on YouTube](https://www.youtube.com/watch?v=jWLavvtbnhY)

![image.png](fileId:1432)

---

**Trigger:**

* **Schedule Trigger**: Executes the entire process at a user-defined interval. No need to worry about traceability or managing countless backups, as the workflow only commits changes when a difference is detected.

![image.png](fileId:1433)

---

**Workflow Backup Process:**

1. **Set Workflow Path**: Defines the local backup file path for workflows.
2. **Get Old Workflow Hash**: Executes a helper workflow to retrieve the previous hash.
3. **Execute Workflow Backup**: Runs `n8n export:workflow` to export all workflows to the defined file path.
4. **Get New Workflow Hash**: Executes a helper workflow to generate the new hash from the exported file.
5. **Compare Hashes (If Workflow Updated)**: Checks if the new hash differs from the old one.
6. **If Updated:**

   * **Read Workflow Data** → **Extract Text** → **Push to GitHub**: Reads, extracts, and commits the updated workflow JSON to GitHub under a timestamped filename.

---

**Credential Backup Process:**

1. **Set Credential Path**: Defines the local backup file path for credentials.
2. **Get Old Credential Hash**: Executes a helper workflow to retrieve the previous hash.
3. **Execute Credential Backup**: Runs `n8n export:credentials` to export all credentials.
4. **Get New Credential Hash**: Executes a helper workflow to generate the new hash from the exported file.
5. **Compare Hashes (If Credential Updated)**: Checks for changes.
6. **If Updated:**

   * **Read Credential Data** → **Extract Text** → **Push to GitHub**: Commits the new credentials JSON to GitHub if changes are found.

---

**Hash Generator (Helper Flow):**
Used in both workflow and credential backup paths:

* **Read File** → **Extract Text** → **Hash Data**
* Outputs SHA-256 hash used for comparison

---

**GitHub Integration:**

* Commits are created with ISO timestamp in the filename and message.
* Repository: `https://github.com/your-github-name/n8n-onchange-bachup`
* File paths: `backups/WorkFlow Backup -timestamp-.json` and `backups/Credential Backup -timestamp-.json`

---

**Change Detection Logic:**

* Only commits files when hash changes are detected (i.e., actual content change).
* Avoids unnecessary GitHub commits and storage use.

**Error Handling:**

* GitHub nodes are set to continue workflow execution on error, avoiding full process interruption.

## 🔗 Nodes Used

GitHub, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, Read/Write Files from Disk, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
