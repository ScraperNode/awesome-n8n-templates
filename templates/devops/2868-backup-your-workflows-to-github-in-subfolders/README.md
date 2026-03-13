# ⚙️ Backup your workflows to GitHub -- in (subfolders)

> ⚡ **5,935 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

Based on [Jonathan](https://n8n.io/creators/jon-n8n) & [Solomon](https://n8n.io/creators/solomon) work.

&gt; The only addition I've made is a Set node. This node organizes workflows into subfolders within the GitHub repository based on their respective tags.

#### How it works
This workflow will backup your workflows to GitHub. It uses the n8n API node to export all workflows.

It then loops over the data, checks in GitHub to see if a file exists that uses the credential's ID. Once checked it will:
- update the file on GitHub if it exists;
- create a new file if it doesn't exist;
- ignore if it's the same.

#### Who is this for?
People wanting to backup their workflows outside the server for safety purposes or to migrate to another server.

## 🔗 Nodes Used

GitHub, HTTP Request, Execute Sub-workflow, n8n, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
