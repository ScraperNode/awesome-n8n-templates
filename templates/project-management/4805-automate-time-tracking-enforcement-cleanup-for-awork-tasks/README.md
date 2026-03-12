# 📋 Automate time tracking enforcement & cleanup for Awork tasks

> ⚡ **221 views** · 📋 [Project Management](../)

## Description

This workflow offers several additional features for time tracking with **Awork**:

* Check whether time has been tracked when closing a task. If not, the task is reopened and the user is notified. This can be restricted to specific tasks using tags.
* Enforce a minimum time entry for tasks to comply with "at least 15-minute intervals are billed" policies. This can also be limited to specific tasks by using tags.
* Clean up time entries to match billing intervals.
* Add a start time to time entries if it is missing.

This workflow does not use the Awork community nodes package, as the package does not support all required API calls and is therefore not used here. If you prefer to use that package, you can find more information at [awork integration guide](https://support.awork.com/en/articles/9826591-n8n-integration) and replace the HTTP nodes with the corresponding community nodes where applicable.

**How it works**
* Triggered via Awork Webhook call on status change of tasks and new time entries

**Set up steps**
* Add webhook call to Awork (please see in-workflow notes regarding webhook configuration)
* Configure Awork API credentials
* Set up workflow configuration via setup node, e.g. user notification text, tags, enabled features etc.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
