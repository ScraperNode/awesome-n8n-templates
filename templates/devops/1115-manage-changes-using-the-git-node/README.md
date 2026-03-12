# ⚙️ Manage changes using the Git node

> ⚡ **1,767 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow allows you to add, commit, and push changes to a git repository.

![workflow-screenshot](fileId:508)

**Git node:** This node will add the `README.md` file to the staging area. If you want to add a different file, enter the path of that file instead.

**Git1 node:** This node will commit all the changes that were added to the staging area by the previous node.

**Git2 node:** This node will return the commit logs of your repository.

**Git3 node:** This node will push the changes to a cloud repository.

## 🔗 Nodes Used

Start, Git

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
