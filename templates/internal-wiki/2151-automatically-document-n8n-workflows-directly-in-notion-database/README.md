# 📖 Automatically document n8n workflows directly in Notion database

> ⚡ **4,860 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Use case
n8n workflows can go out of hand when you're automating as much as we do at n8n. We needed a place to document them and keep track of who owns and maintains them. To facilitate this we use this n8n workflow to automatically sync workflows directly to a Notion database if it has the tag `sync-to-notion`.

![Screenshot 20240228 at 21.03.27.png](fileId:756)![Screenshot 20240228 at 21.03.21.png](fileId:757)

## How to setup
1. Add your n8n api creds
2. Add your Notion creds 
3. Create notion database with fields `env id` as `text`, `isActive (dev)` as `boolean`, `URL (dev)` as `url`, `Workflow created at` as `date`, `Workflow updated at` as `date`, `Error workflow setup` as `boolean` 
 (Make sure page is connected)
4. Add tag `sync-to-notion` to some workflows

## 🔗 Nodes Used

HTTP Request, Notion, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
