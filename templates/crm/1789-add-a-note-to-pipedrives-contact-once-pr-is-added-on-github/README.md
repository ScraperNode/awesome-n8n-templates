# 🤝 Add a note to Pipedrive's contact once PR is added on GitHub

> ⚡ **1,089 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow automatically adds a note of the PR from GitHub to the Pipedrive contact if their GitHub email matches a Person in Pipedrive.

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)
- GitHub account and [GitHub credentials](https://docs.n8n.io/integrations/builtin/credentials/github/)

## How it works
1. GitHub Trigger node activates the workflow when a GitHub user adds a PR.
2. HTTP Request node gets the user's data and sends it further.
3. Pipedrive node searches the same email that GitHub user has in Pipedrive.
4. IF node checks whether a person with the same email exists in Pipedrive.
5. In case there's such a person in Pipedrive, the Pipedrive node creates a note within the person's profile.

## 🔗 Nodes Used

Github Trigger, HTTP Request, Pipedrive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
