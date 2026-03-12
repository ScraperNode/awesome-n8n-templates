# 📖 Create Atlassian Confluence page from template

> ⚡ **5,026 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## How it works
- creates a new page in Confluence based on a page template also defined in Confluence
- replaces any number of placeholders with data from your workflow
- generic implementation for maximum flexibility

## Set up steps
- All parameters you need to change are defined in the Set node
	- Set your Atlassian-domain
	- Set the template id you want to use as the basis for new pages
	- Set the target space and parent page for new pages added based on that template.
- 🎥 [Explainer video](https://www.tella.tv/video/automate-confluence-page-creation-e994) has all the details. =)

## Feedback
- Any feedback is welcome.
- If you have ideas for improvements, let me know.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
