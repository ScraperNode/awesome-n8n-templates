# 📖 Create a document in outline for each new GitLab release

> ⚡ **2,975 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

Create a document in Outline for each new GitLab release.

Depends on [this PR](https://github.com/n8n-io/n8n/pull/2591) being merged.

1. Copy workflow
2. Set credentials for GitLab and Outline
3. Inside HTTP Request node, set the following:
   - `collectionId`
   - `parentDocumentId` (or remove if unwanted)

[Example result](https://onezoomin.getoutline.com/share/f4fb81fc-af09-442c-9bdd-6365aeb70058/doc/gitlab-releases-test-ffbapVHbBt)

## 🔗 Nodes Used

HTTP Request, GitLab Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
