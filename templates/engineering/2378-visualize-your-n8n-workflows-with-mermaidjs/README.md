# ⚒️ 🔍 Visualize your n8n workflows with Mermaid.js!

> ⚡ **7,549 views** · ⚒️ [Engineering](../)

## Description

## Are you a visual thinker working with n8n?

🎨 View and understand workflow structures at a glance with this template!

Built with mermaid.js, Bootstrap 5 and AXAJ to create an interactive web page displaying n8n workflows as flowcharts.

🌟 Perfect for documentation, presentations, or just getting a clearer picture of your automation processes.

Need customization help? Reach out to [Eduard](https://www.linkedin.com/in/parsadanyan/)!

### Benefits
* 📊 Instant workflow visualization
* 📱 Responsive design
* 🔗 Direct links to n8n workflows
* 🧩 Special shapes for different node types
* 🚫 Disabled node indication
* 🔒 No external dependencies – just paste the workflow and call the webhook
* 🛠️ Easily customizable – enhance the JS script or add custom styling

### ⚠️ Important note for cloud users ⚠️
Since the cloud version doesn't support environmental variables, please make the following changes in the CONFIG node:
* Update the `instance_url` variable: Enter your n8n URL instead of `{{$env["N8N_PROTOCOL"]}}://{{$env["N8N_HOST"]}}`
* Change the `webhook_path` to simply "webhook" instead of `{{$env["N8N_ENDPOINT_WEBHOOK"] || "webhook"}}`

### 🌟 Examples
1. Multiple flowcharts on a single page:
![image.png](fileId:830)

2. Several shapes for different nodes:
![image.png](fileId:826)

3. Langchain nodes with special connections styling:
![image.png](fileId:829)

## 🔗 Nodes Used

Webhook, n8n

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
