# ⚙️ Backup n8n workflows to Github

> ⚡ **2,348 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

## Introduction
This workflow will backup all of your existed workflows to a single Github repository.

The Backup folders' name are based on the current backup date and have default format: "yyyy/MM/dd" (setup at "Create sub path" node).

Throughout the backup process, the N8N will inform user via discord with clear message about Start, Success and Failure backups.

The workflow will be 

## Tech Stack
The following nodes / services / libraries are used in this workflow:

### Nodes:
1. **Discord:** To send message to configured setup channel.
2. **N8N:** To get all workflows' information.
3. **Github:** To store backup data.
4. **Code:** To run data comparison (Existed vs Latest workflow data).
5. **Wait:** To avoid discord message rate limit.

### External libraries:
1. **Underscore.js:** JavaScript library that provides lots of common Javascript functions, to help user save time when using code node.

## Guideline
1. Open "Config" node and setup the following information:
    - **repo_owner:** Your Github username.
    - **repo_name:** The repository that you want to store workflows backup data.
2. Open "Create sub path" node and change the naming and path format of backup folder(s).
3. Setup custom messages in 3 discord nodes:
    - **Starting Message:** N8N inform user at the time workflow start.
    - **Inform Success Flows:** After each success backup, N8N will notify user.
    - **Inform Failed Flows:** After each failure backup, N8N will notify user to have appropriate action.
    - **Completed Notifications:** Then at the final, the workflow will give user a summary.
4. Setup "Schedule Trigger" node to change default automated backup time.

# Screenshots

## Discord output

![image.png](fileId:1309)

## 🔗 Nodes Used

GitHub, Discord, Execute Sub-workflow, n8n, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
