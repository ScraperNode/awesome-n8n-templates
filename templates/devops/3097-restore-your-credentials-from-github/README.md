# ⚙️ Restore your credentials from GitHub

> ⚡ **3,494 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow restores all n8n instance credentials from GitHub backups using the n8n API node. It complements the [Backup Your Credentials to GitHub](https://n8n.io/workflows/2307-backup-your-credentials-to-github/) template by allowing users to seamlessly restore previously saved credentials.

## How It Works
The workflow fetches credentials stored in a GitHub repository and imports them into your n8n instance. 

## Setup Instructions
To configure the workflow, update the `Globals` node with the following values:

- **repo.owner** – Your GitHub username
- **repo.name** – The name of your GitHub repository storing the credentials
- **repo.path** – The folder path within the repository where credentials are stored

For example, if your GitHub username is `john-doe`, your repository is named `n8n-backups`, and credentials are stored in a `credentials/` folder, you would set:

- `repo.owner` → `john-doe`
- `repo.name` → `n8n-backups`
- `repo.path` → `credentials/`

### Required Credentials
- **GitHub API** – Access to your repository  
- **n8n API** – To import credentials into your n8n instance  

## Who Is This For?
This template is ideal for users who want to restore their credentials from GitHub backups, ensuring easy migration and recovery in case of data loss.

---

Check out my other templates:  
👉 [My n8n Templates](https://n8n.io/creators/bangank36/)

## 🔗 Nodes Used

GitHub, HTTP Request, n8n, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
