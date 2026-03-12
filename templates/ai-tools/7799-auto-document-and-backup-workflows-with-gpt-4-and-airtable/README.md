# 🎯 Auto-document and backup workflows with GPT-4 and Airtable

> ⚡ **230 views** · 🎯 [AI Summarization & Classification](../)

## Description

Never worry about losing your n8n workflows again. This template provides a powerful, automated backup system that gives you the peace of mind of version control without the complexity of Git. 

On a schedule you define, it intelligently scans your n8n instance for new workflow versions and saves them as downloadable snapshots in a clean and organized Airtable base.

But it’s more than just a backup. This workflow uses AI to automatically generate a concise summary of what each workflow does and even documents the changes between versions. The result is a fully searchable, self-documenting library of all your automations, making it the perfect "single source of truth" for your team or personal projects.

## Who is this for?

* **Self-hosted n8n users:** This is an essential insurance policy to protect your critical automations from server issues or data loss.
* **n8n developers & freelancers:** Maintain a complete version history for client projects, allowing you to easily review changes and restore previous versions.
* **Teams using n8n:** Create a central, browseable, and documented repository of all team workflows, making collaboration and handovers seamless.
* **Any n8n user who values their work:** Protect your time and effort with an easy-to-use, "set it and forget it" backup solution.

## What problem does this solve?

* **Prevents catastrophic data loss:** Provides a simple, automated way to back up your most critical assets—your workflows.
* **Creates "no-code" version control:** Offers the benefits of version history (like Git) but in a user-friendly Airtable interface, allowing you to browse and download any previous snapshot.
* **Automates documentation:** Who has time to document every change? The AI summary and changelog features mean you always have up-to-date documentation, even if you forget to write it yourself.
* **Improves workflow discovery:** Your Airtable base becomes a searchable and browseable library of all your workflows and their purposes, complete with AI-generated summaries.

## How it works

1.  **Scheduled check:** On a recurring schedule (e.g., daily), the workflow fetches a list of all workflows from your n8n instance.
2.  **Detect new versions:** It compares the current version ID of each workflow with the snapshot IDs already saved in your Airtable base. It only proceeds with new, unsaved versions.
3.  **Generate AI documentation:** For each new snapshot, the workflow performs two smart actions:
    * **AI Changelog:** It compares the new workflow JSON with the previously saved version and uses AI to generate a one-sentence summary of what’s changed.
    * **AI Summary:** It periodically re-analyzes the entire workflow to generate a fresh, high-level summary of its purpose, ensuring the main description stays up-to-date.
4.  **Store in Airtable:** It saves everything neatly in the provided two-table Airtable base:
    * A `Workflows` table holds the main record and the AI summary.
    * A linked `Snapshots` table stores the version-specific details, the AI changelog, and the actual `.json` backup file as an attachment.

## Setup

1.  **Duplicate the Airtable base:** Before you start, **[click here to duplicate the Airtable Base template](https://airtable.com/appPFFj6CUUhZyDPT/shrorM8k6HsUqBACB)** into your own Airtable account.
2.  **Configure the workflow:**
    * Connect your **n8n API** credentials to the **n8n** nodes.
    * Connect your **Airtable** credentials and map the nodes to the base you just duplicated.
    * Connect your **AI provider** credentials to the **OpenAI Chat Model** nodes.
    * **Important:** In the **Store workflow file into Airtable** (HTTP Request) node, you must replace `&lt;AIRTABLE-BASE-ID&gt;` in the URL with your own base ID (it starts with `app...`).
3.  **Set your schedule:** Configure the **Schedule Trigger** to your desired frequency (daily is a good start).
4.  **Activate the workflow.** Your automated, AI-powered backup system is now live!

## Taking it further

* **Add notifications:** Add a **Slack** or **Email** node at the end of the workflow to send a summary of which workflows were backed up during each run.
* **Use different storage:** While designed for Airtable, you could adapt the logic to store the JSON files in **Google Drive** or **Dropbox** and the metadata in **Google Sheets** or **Notion**.
* **Optimize AI costs:** The **Check workflow status** (Code) node is set to regenerate the main AI summary for the first few snapshots and then every 5th snapshot. You can edit the code in this node to change this frequency and manage your token consumption.

## 🔗 Nodes Used

Airtable, HTTP Request, Convert to/from binary data, n8n, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
