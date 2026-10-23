# ⚙️ Classify and route DevOps chat requests with Mattermost and Claude

> ⚡ **256 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Automatically classify and route DevOps requests from your team chat using LLM + on-call calendar lookup.
## What it does
This workflow turns your Mattermost channel into a smart DevOps intake system. When someone mentions @devops-duty, the workflow:

1. Receives the message via Mattermost outgoing webhook
1. Classifies the request into one of 8 categories using an LLM
1. Looks up the current on-call engineer from Google Calendar
1. Routes the request through a Switch node based on category
1. Acknowledges in a Mattermost thread with the classification result

Categories
* `create_resource` - Provision new databases, secrets, services, DNS records
* `incident` - Something is broken — production or staging issues
* `question` - Information requests, status checks, clarifications
* `ci_cd_error` - Build failures, deployment issues, GitHub Actions problems
* `limits` - Billing limits, quotas exceeded
* `change_request` - Modify existing infrastructure or configuration
* ``code_approve` - Code review and merge request approvals
* `other` - Anything that doesn't fit above

## Extending
Each Switch output is an independent branch — connect sub-workflows or additional nodes per category. For example:

incident → trigger an AI investigation sub-workflow with MCP tools (Kubernetes, Grafana, etc.)
create_resource → run a provisioning playbook
ci_cd_error → fetch GitHub Actions logs and analyze failures

Connect these workflows:
- [incident](https://n8n.io/workflows/15610)
- [new_system, modify infrastructure](https://n8n.io/workflows/15614) 
- [ci_cd_error](https://n8n.io/workflows/15610)
- [question](https://n8n.io/workflows/15629)

## 🔗 Nodes Used

Webhook, Google Calendar, AI Agent, Qdrant Vector Store, Embeddings Google Gemini, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
