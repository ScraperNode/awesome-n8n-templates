# 🎯 Auto-document and backup workflows with GPT-4 and Airtable

> ⚡ **243 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Quick overview
Automatically backs up every new version of your n8n workflows to Airtable on a schedule, then uses AI to generate a plain-English summary of each workflow and a one-sentence changelog of what changed since the last snapshot.

## How it works
1. A **Schedule Trigger** runs the workflow at the frequency you set (for example, daily), starting with the **Get all n8n workflows** node, which fetches every workflow from your n8n instance via the n8n API.
2. In parallel, **Search all existing snapshots** reads all previously stored version IDs from the `Snapshots` table in Airtable, and **Match snapshot IDs** (`Merge`, `keepNonMatches`) compares them against the current version ID of each workflow to isolate only the workflows with a new, unsaved version. **Only keep new snapshots** filters out any leftover items without a version ID before looping through the results with **Loop Over Items**.
3. For each new version, **Create or update workflow** upserts a record in the `Workflows` table (matching on `Workflow ID`), setting the workflow name and creation time. **Search all snapshots** then retrieves the past snapshot count for that workflow, and the **Check workflow status** Code node decides whether the AI summary needs to be regenerated (on the 1st, 2nd, and every 5th snapshot).
4. If a previous snapshot exists, **Download previous snapshot** and **Extract from File1** pull the last stored `.json` backup from Airtable, and **Document workflow differences** (an OpenAI-backed LangChain chain, via **OpenAI Chat Model1**) compares it to the current workflow JSON to produce a one-sentence changelog. If it's the very first snapshot, **State that this is the first version** sets a fixed `N/A - First identified version` note instead.
5. When **Needs new workflow summary?** is true, **Re-summarise workflow** calls the same AI model to generate a fresh, one-sentence description of the whole workflow's purpose, which **Store new workflow summary** saves back to the `Workflows` table's `AI summary` field.
6. *Store new snapshot** creates the new `Snapshots` record (version ID, update time, changelog, linked `Workflow`), then **Get full workflow JSON**, **Move Binary Data**, and **Extract from File** convert the full workflow JSON into a binary file. **Store workflow file into Airtable** (HTTP Request to the Airtable content API) uploads that file as an attachment to the snapshot's `Workflow_file` field, and a **Wait** node pauses 3 seconds before the loop continues, to stay under Airtable's API rate limits.

## Setup
1. Duplicate the Airtable base template (linked in the workflow's sticky note) into your own Airtable account. It contains the two required tables: `Workflows` (workflow name, AI summary, linked snapshots) and `Snapshots` (n8n version ID, update time, AI changelog, `Workflow_file` attachment).
2. Add your n8n API credentials to the **Get all n8n workflows**, **Get full workflow JSON**, and **Create or update workflow** (n8n node type) nodes so the workflow can list and read your instance's workflows.
3. Add your Airtable credentials to all Airtable nodes (**Search all existing snapshots**, **Search all snapshots**, **Create or update workflow**, **Download previous snapshot**, **Store new workflow summary**, **Store new snapshot**) and remap each node's base and table to the base you just duplicated.
4. Add an OpenAI (or compatible) credential to the **OpenAI Chat Model1** node, which powers both the **Document workflow differences** and **Re-summarise workflow** AI chains. It defaults to `gpt-4.1-nano`; swap the model if you need higher quality summaries.
5. In the **Store workflow file into Airtable** HTTP Request node, replace `<AIRTABLE-BASE-ID>` in the URL with your duplicated base's ID (starts with "app...", found in the base's Airtable URL). This node also needs an Airtable Token API credential (`nodeCredentialType` `airtableTokenApi`) with attachment upload permission.
6. Set your desired frequency on the **Schedule Trigger** node (for example, once daily) and activate the workflow.

## Requirements
- An n8n instance reachable via the n8n API (with an API key credential).
- An Airtable account with a base duplicated from the provided template, plus an Airtable API/token credential.
- An OpenAI (or compatible) API credential for the two AI summary/changelog steps.

## Customization
- Add a Slack or Email node at the end of the run to notify your team which workflows were backed up.
- Swap Airtable for Google Drive, Dropbox, Google Sheets, or Notion by adapting the storage and metadata nodes to those services.
- Edit the **Check workflow status** Code node's logic to change how often the full AI summary is regenerated (currently: 1st, 2nd, and every 5th snapshot), to control AI token usage.

## Additional info
Duplicate the reference Airtable base before running this workflow: https://airtable.com/appPFFj6CUUhZyDPT/shrorM8k6HsUqBACB. The workflow uses Airtable's content upload API endpoint to store the workflow JSON as a file attachment directly from base64 data, avoiding a separate Drive/Dropbox upload step.

## 🔗 Nodes Used

Airtable, HTTP Request, Convert to/from binary data, n8n, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
