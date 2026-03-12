# ⚙️ Automatically document and backup N8N workflows

> ⚡ **1,883 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Automatically backs up your workflows to Github and generates documentation in a Notion database.

- Weekly run, uses the "internal-infra" tag to look for new or recently modified workflows
- Uses a Notion database page to hold the workflow summary, last updated date, and a link to the workflow
- Uses OpenAI's 4o-mini to generate a summarization of what the workflow does
- Stores a backup of the workflow in GitHub (recommend a private repo)
- Sends notification to Slack channel for new or updated workflows

## Who is this for

- Anyone seeking backup of their most important workflows
- Anyone seeking version control for their most important workflows

## Credentials required

- N8N: You will need an N8N credential created so the workflow can query the N8N instance to find all active workflows with the "internal-infra" tag
- Notion: You will need an Notion credential created
- OpenAI: You will need an OpenAI credential, unless you intend on rewiring this with your AI of choice (ollama, openrouter, etc.)
- GitHub: You will need an GitHub credential
- Slack: You will require an Slack credential, recommend a Bot / access token configuration

## Setup

#### Notion

- Create a database with the following columns. Column type is specified in [type].
  - Workflow Name [text]
  - isActive (dev) [checkbox]
  - Error workflow setup [checkbox]
  - AI Summary [text]
  - Record last update [date/time]
  - URL (dev) [text/url]
  - Workflow created at [date/time]
  - Workflow updated at [date/time]

#### Slack

- Create a channel for updates to be posted into

#### Github

- Create a private repo for your workflows to be exported into

#### N8N

- Download & install the template
- Configure the blocks to use your N8N, Notion, OpenAI & Slack credentials for your own
- Edit the "Set Fields" block and change the URL to that of your N8N instance (cloud or self-hosted)
- Edit the "Add to Notion" action and specify the Database page you wish to update
- Edit the Slack actions to specify the Channel you want slack notifications posted to
- Edit the GitHub actions to specify the Repository Owner & Repository Name


**Sample output in Notion**![Autodoc_backup_workflows_NotionOutput.png](fileId:1072)

**Workflow diagram**![Autodoc_backup_workflows_N8NEditorView.png](fileId:1071)

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Notion, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
