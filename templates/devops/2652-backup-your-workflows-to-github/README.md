# ⚙️ Backup your workflows to GitHub

> ⚡ **12,956 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Based on [Jonathan's](https://n8n.io/creators/jon-n8n/) work. Check out his templates.

### How it works
This workflow will backup your workflows to GitHub. It uses the n8n API node to export all workflows.

It then loops over the data, checks in GitHub to see if a file exists that uses the credential's ID. Once checked it will:
- update the file on GitHub if it exists;
- create a new file if it doesn't exist;
- ignore if it's the same.

### Who is this for?
People wanting to backup their workflows outside the server for safety purposes or to migrate to another server.

### Check out my other templates
👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 🔗 Nodes Used

GitHub, HTTP Request, Execute Sub-workflow, n8n, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
