# ⚙️ Automated workflow backup with intelligent change detection using GitHub

> ⚡ **802 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Advanced n8n Workflow Sync with GitHub

A robust workflow to back up and synchronize your n8n workflows to a GitHub repository, with intelligent change detection and support for file renames.

## 🎯 Who's it for?

This workflow is for n8n administrators, developers, and power users who want a reliable, automated way to:

- Keep a version-controlled history of their workflows.
- Collaborate on workflows using GitHub's infrastructure.
- Prevent data loss and have a disaster recovery plan for their n8n instance.

## ✨ Key Features (What it does)

- **Intelligent Sync**: Backs up all your n8n workflows to a designated GitHub repository.
- **Human-Readable Filenames**: Saves workflows with filenames based on their actual names in n8n (e.g., `My Awesome Workflow.json`).
- **Reliable Matching**: Uses the unique n8n workflow ID to reliably track files, even if their names change.
- **Rename Detection**: If you rename a workflow in n8n, it intelligently deletes the old file and creates a new one in a single logical operation.
- **Efficient Commits**: Commits changes to GitHub only when there are actual modifications to a workflow's logic or structure. It performs a deep comparison, ignoring metadata changes.
- **Clear Commit History**: Generates clean, informative commit messages:
  - `create: workflowName`
  - `update: workflowName`
  - `rename: oldName - newName`

## ⚙️ How It Works (Simple Steps)

1. **Get n8n Workflows**: The workflow starts by fetching all your current workflows from n8n.
2. **Get GitHub Files**: At the same time, it lists all existing workflow files from your GitHub repository.
3. **Compare & Decide**: It then compares each n8n workflow with its GitHub counterpart. It checks if anything changed, if it was renamed, or if it's new.
4. **Take Action**:
    - If a workflow is **new**, it's created on GitHub.
    - If a workflow is **updated**, the file content is changed on GitHub.
    - If a workflow was **renamed**, the old file is deleted, and a new one is created.
    - If **nothing changed**, the workflow is skipped.
5. **Send Report**: Finally, it can send a summary report to Telegram about what happened.

## 🚀 How to Set Up

1. **Credentials**:
    - **GitHub**: Go to `Credentials` &gt; `New` and add your GitHub credentials. You'll need a token with `repo` permissions.
    - **n8n API**: In the same `Credentials` section, create `n8n API` credentials. You'll need your n8n instance's Base URL and an API key (you can create one in your n8n user settings).
    - **Telegram (Optional)**: If you want notifications, add your Telegram Bot credentials.

2. **Configure the Workflow**:
    - Open the `Configuration` node (the green one at the start).
    - Fill in the following values:
        - `repo.owner`: Your GitHub username or organization name.
        - `repo.name`: The name of the repository for backups.
        - `repo.path`: The folder inside the repository to store workflows (e.g., `workflows/`).
        - `report.tg.chatID` (Optional): Your Telegram chat ID for notifications. Set to `0` to disable.
        - `report.verbose`: Set to `true` to receive a report even if there were no changes.

3. **Connect Credentials**:
    - Select your newly created credentials in the following nodes:
        - `Get all workflows`: Select your n8n API credentials.
        - All GitHub nodes (e.g., `List files`, `Create new file`): Select your GitHub credentials.
        - `Send a message` (Telegram): Select your Telegram credentials.

4. **Set the Schedule**:
    - In the `Schedule Trigger` node, configure how often you want the backup to run (e.g., every hour, once a day).

5. **Activate the Workflow**:
    - Save the workflow and toggle it to "Active".

## 🔧 How to Customize

- **Change Report Destination**: The final part of the workflow sends a report to Telegram. You can easily replace the `Send a message` node with a node for Slack, Discord, or email to change where notifications go. The message is pre-formatted in the `Render summary` node.

## 💡 What's Next? (Future Updates)

This workflow is actively maintained! Here's a sneak peek at what's planned for future versions:

- **Automatic Archive Handling**: The next major update will introduce logic to automatically detect when a workflow is archived in n8n and move it to a dedicated `archived/` folder in your GitHub repository, keeping your main backup directory clean.
- **Performance Optimizations**: I'm exploring ways to reduce API traffic by intelligently checking for changes before fetching full workflow data.

To get the latest version with these features when it's released, be sure to follow my profile for new workflow publications!

## 🔗 Nodes Used

GitHub, Telegram, Stop and Error, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
