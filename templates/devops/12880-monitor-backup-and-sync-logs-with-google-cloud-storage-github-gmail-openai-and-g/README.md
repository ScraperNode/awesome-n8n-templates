# ⚙️ Monitor backup and sync logs with Google Cloud Storage, GitHub, Gmail, OpenAI, and GLPI

> ⚡ **22 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Reliable Backup & Sync Execution Validation (Log-Driven)

This workflow monitors filesystem sync and backup jobs by **validating their execution logs**, not by running or inspecting the jobs themselves.

After purchase, you will receive a complete package including:
- **`workflow.json`** – ready to be imported into n8n
- **Shell script templates (`.sh`)** – reference sync job templates designed to generate structured logs fully compatible with the workflow
- **Complete setup documentation** – step-by-step guide covering configuration, deployment, and operational requirements

### How it works (high level)

* Sync jobs are executed externally using standardized shell templates:

  * `rsync_job-Template.sh`
  * `rclone_job-Template.sh`
* Each job produces **one deterministic log file per run**
* Logs are uploaded daily to **Google Cloud Storage**
* This workflow runs on a schedule and:

  * Verifies that all expected logs exist for the day (UTC)
  * Optionally inspects their contents
  * Sends alerts if logs are missing or report failures

### Key design principles

* **Log-driven monitoring** (evidence-based, not assumption-based)
* **One job = one log = one source of truth**
* **No SSH, no server access, no execution coupling**
* Safe to run in untrusted or restricted environments

### Logging contract (required)

Each log file must contain the following lifecycle events, in order:

1. `event=START`
2. `event=RSYNC_END` or `event=RCLONE_END`
3. `event=SUMMARY`
4. `event=END`

If the `END` event is missing, the job is considered **failed or interrupted**.

### Configuration

Expected jobs and log filenames are defined in `sync-jobs.json`.
This workflow only validates presence and state of logs — it never assumes job success.

## 🔗 Nodes Used

GitHub, HTTP Request, Gmail, Google Cloud Storage, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
