# 🔬 🛠️ Create PDF from HTML with Gotenberg

> ⚡ **4,653 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works

This workflow converts an HTML string into a polished PDF file using the powerful open-source [Gotenberg](https://gotenberg.dev/) service. It's designed to be a reusable utility in your automation stack.

1.  **Receives Input:** The workflow is triggered with a JSON object containing the full `html` code as a string and a desired `file_name` for the output.
2.  **Prepares File:** It converts the incoming HTML string into a binary `index.html` file, which is required for the API call.
3.  **Calls Gotenberg API:** It sends the HTML file to a running Gotenberg instance via an HTTP request. It also dynamically sets the output filename and embeds metadata (like Author, Title, and Creation Date) directly into the PDF.
4.  **Returns PDF:** The workflow outputs the final binary PDF file, ready to be saved, sent in an email, or used in the next step of your main workflow.

## Set up steps

**Setup time: ~3 minutes**

This workflow has one critical prerequisite: a running Gotenberg instance that your n8n can connect to.

**1. Prerequisite: Run Gotenberg**

You need to have the Gotenberg service running. The easiest way is with Docker. Add the following service to your `docker-compose.yml` file (the same one you use for n8n):

```yaml
services:
  # ... your n8n service ...

  gotenberg:
    image: gotenberg/gotenberg:8
    restart: always
```

Then, restart your stack with `docker compose up -d`. This makes Gotenberg available at the address `http://gotenberg:3000` from within your n8n container.

**2. Use as a Sub-Workflow**

This workflow is ready to be used as a sub-workflow.

1.  In your main workflow, add an **Execute Sub-Workflow** node.
2.  In the **Workflow** parameter, select this "Create PDF from HTML" workflow.
3.  Provide the input data in the required format: a JSON object with `html` and `file_name` keys.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
