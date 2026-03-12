# ⚙️ 🦅 Get a bird's-eye view of your n8n instance with the Workflow Dashboard!

> ⚡ **9,706 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## ⚡ UPDATE on May 2025 – added section with all n8n instance webhooks

Using n8n a lot?

Soar above the limitations of the default n8n dashboard! This template gives you an overview of your workflows, nodes, and tags – all in one place. 💪

Built using XML stylesheets and the Bootstrap 5 library, this workflow is self-contained and does not depend on any third-party software. 🙌 It generates a comprehensive overview JSON that can be easily integrated with other BI tools for further analysis and visualization. 📊

**Reach out to [Eduard](https://www.linkedin.com/in/parsadanyan/) if you need help adapting this workflow to your specific use-case!**

## 🚀 Benefits:
- **Workflow Summary** 📈: Instant overview of your workflows, active counts, and triggers.
- **Left-Side Panel** 📋: Quick access to all your workflows, nodes, and tags for seamless navigation.
- **Workflow Details** 🔬: Deep dive into each workflow's nodes, timestamps, and tags.
- **Node Analysis** 🧩: Identify the most frequently used nodes across your workflows.
- **Tag Organization** 🗂️: Workflows are grouped according to their tags.
- **Webhooks** ⚡: List of all webhook endpoints with the links to workflows.
- **Visually Stunning** 🎨: Clean, intuitive, and easy-to-navigate dashboard design.
- **XML & Bootstrap 5** 🛠️: Built using XML stylesheets and Bootstrap 5, ensuring a self-contained and responsive dashboard.
- **No Dependencies** 🔒: The workflow does not rely on any third-party software. Bootstrap 5 files are loaded via CDN but can be delivered directly from your server.

## ⚠️ Important note for cloud users
Since the cloud version doesn't support environmental variables, please make the following changes:

1. **get-nodes-via-jmespath** node. Update the `instance_url` variable: enter your n8n URL instead of `{{$env["N8N_PROTOCOL"]}}://{{$env["N8N_HOST"]}}`
2. **Create HTML** node. Please provide the n8n instance URL instead of `{{ $env.WEBHOOK_URL }}`

## 🌟Example:
![Untitled design 6_.png](fileId:795)

Follow me on [LinkedIn](https://www.linkedin.com/in/parsadanyan/) for more tips on AI automation and n8n workflows!

## 🔗 Nodes Used

Webhook, Convert to/from binary data, Execute Sub-workflow, n8n, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
