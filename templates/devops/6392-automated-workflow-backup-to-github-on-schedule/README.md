# ⚙️ Automated workflow backup to GitHub on schedule

> ⚡ **628 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

Easily ensure your n8n workflows are never lost! This template automates the process of backing up all your n8n workflows to a GitHub repository every 6 hours. Set it up once and enjoy *worry-free* workflow versioning and disaster recovery! 🔄✨

## 📝 What This Workflow Does

- **Schedules backups**: Triggers the workflow automatically every 6 hours—no manual steps needed. ⏰
- **Exports all current workflows**: Collects a JSON snapshot of every workflow in your n8n instance. 📦
- **Pushes backups to GitHub**: Commits each backup file to your specified GitHub repository with a time-stamped commit message for easy tracking. 🗂️🚀
- **Smart file handling**: Checks if a backup file already exists and creates or updates as needed, keeping your repository clean and organized. 🤖

## ⚡️ Why Use This Template?

- **Automate your workflow backups – never miss a backup again!**
- **Seamless integration with GitHub** for team collaboration, change management, and rollback.
- **Simple, reliable, and fully customizable** to match your backup intervals and repository setup.
- **Peace of mind** that your critical automation assets are always protected.

## 📦 How the Template Works: Step-by-step Overview

1. **Scheduled Trigger**: Fires every 6 hours to launch the backup sequence.
2. **Get All Workflows**: Uses the `HTTP Request` node to fetch all n8n workflows from your instance as JSON data.
3. **Move Binary Data**: Converts the JSON into a binary format, ready for GitHub storage.
4. **Edit/Create Backup File**: Attempts to edit (update) an existing backup file in your GitHub repo. If the file does not exist, the workflow will create a new one.
5. **Conditional Logic**: Checks after each run whether the backup file exists and ensures previous versions can be recovered or merged as needed.
6. **Repeat**: The process auto-loops every 6 hours—no further intervention required!

## 🔧 How To Set Up On Your Server

1. **Import the template** into your n8n instance.
2. **Configure your GitHub credentials** in the workflow nodes.
3. **Update the GitHub repository details** (`owner`, `repository`, and `filePath`) to use your own repo and desired file path.
4. **Set your n8n API key** and update the API endpoint URL to match your deployment.
5. **Save and activate** the workflow—now your backups are on autopilot!

## 👨‍💻 Example Use Cases

- Version control for rapidly changing automation environments.
- Safeguarding business-critical automation assets.
- Easy rollback in case of workflow corruption or accidental deletion.
- Team collaboration through GitHub's pull request and review process.

### 🌟 Pro Tips

- Adjust the backup interval in the `Schedule Trigger` node if you require more/less frequent backups.
- Use GitHub branch protection rules for enhanced workflow security.
- Pair this backup workflow with notifications (e.g., Slack or Email) for backup alerts.

**Protect your n8n workflows with automated, reliable, and versioned GitHub backups—set it and forget it!** 🚦🔒

## 🔗 Nodes Used

GitHub, HTTP Request, Convert to/from binary data, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
