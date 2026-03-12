# ⚙️ Automated daily backup of n8n workflows to GitLab repositories

> ⚡ **2,459 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# n8n Workflow: Sync Workflows with GitLab

## How It Works

This workflow ensures that your self-hosted n8n workflows are version-controlled in a GitLab repository. It compares each current workflow from n8n with its stored counterpart in GitLab. If any differences are detected, the GitLab file is updated with the latest version.

### Core Logic:
1. **Retrieve Workflows** – Fetch all workflows from the n8n REST API.

2. **Compare with GitLab** – For each workflow, fetch the corresponding file from GitLab and compare the JSON.

3. **Update if Changed** – If differences exist, commit the updated workflow to GitLab using its API.

---

## Setup

Before using the workflow, ensure the following:

### Prerequisites:
- **n8n**: Self-hosted instance with access to the `/rest/workflows` API.

- **GitLab**: A repository where workflows will be stored, and a Personal Access Token (PAT) with `api` and `write_repository` permissions.

- **n8n Nodes Required**:
  - HTTP Request (to call n8n and GitLab APIs)
  - Code or Function nodes (for diffing and formatting)
  - Looping (`SplitInBatches` or similar)

### Configuration:
- Set environment variables or workflow credentials for:
  - `GITLAB_TOKEN`
  - `GITLAB_REPO`
  - `GITLAB_BRANCH` (e.g., `main`)
  - `GITLAB_FILE_PATH_PREFIX` (e.g., `n8n-workflows/`)

---

## How to Use

1. **Import the Workflow** into your n8n instance.

2. **Configure GitLab API Credentials**:
   - Set the GitLab PAT as a header in the HTTP

Request node:  
     `Private-Token: {{ $env.GITLAB_TOKEN }}`

3. **Map Workflows to GitLab Paths**:
   - Use the workflow name or ID to create the file path. Example:  
     `n8n-workflows/workflow-name.json`

4. **Trigger the Workflow**:
   - Can be manually triggered, or scheduled to run at intervals (e.g., daily).
   
5. **Review Commits in GitLab**:
   - Each updated workflow will be committed with a message like:  
     `"Update workflow: Sample Workflow"`

---

## Disclaimer

- This workflow does **not** handle merge conflicts or manual edits made directly in GitLab. Always ensure proper coordination if multiple sources are modifying workflows.
- Only structural changes are tracked. Non-functional metadata (like timestamps or IDs) may trigger false positives unless filtered.
- Use at your own risk. Test in a safe environment before applying to production workflows.

---

## 🔗 Nodes Used

GitLab, n8n, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
