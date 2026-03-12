# ⚙️ Automatic Typebot flows two-way sync with GitHub using Typebot API

> ⚡ **442 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Remixed [Backup your workflows to GitHub](https://n8n.io/workflows/2652-backup-your-workflows-to-github/) from [Solomon's](https://n8n.io/creators/solomon/) work. Check out his templates.

### How it works
This workflow will backup your typebots to GitHub. It uses the [Typebot API](https://docs.typebot.io/api-reference/authentication) to export all typebots.

It then loops over the data, checks in GitHub to see if a file exists that uses the credential's ID. Once checked it will:

- update the file on GitHub if it exists;
- create a new file if it doesn't exist;
- ignore if it's the same.

In addition, it also checks if any flow have been deleted from typebot workspace. If a flow no longer exists in workspace, the corresponding file will be removed from the repository to keep everything in sync.

### Who is this for?
People wanting to backup their typebots(flows) outside the server for safety purposes or to migrate to another server.

## 🔗 Nodes Used

GitHub, HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
