# 🔬 Generate self-documenting API portal for webhooks with n8n API & Bootstrap

> ⚡ **218 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Workflow Overview
Keeping API documentation updated is a challenge, especially when your endpoints are powerful n8n webhooks. This project solves that problem by turning your n8n instance into a **self-documenting API platform**.

This workflow acts as a central engine that scans your entire n8n instance for designated webhooks and automatically generates a single, beautiful, and interactive HTML documentation page. By simply adding a standard `Set` node with specific metadata to any of your webhook workflows, you can make it instantly appear in your live documentation portal, complete with code examples and response schemas.

The final output is a single, callable URL that serves a professional, dark-themed, and easy-to-navigate documentation page for all your automated webhook endpoints.

### Key Features:

* **Automatic Discovery:** Scans all active workflows on your instance to find endpoints designated for documentation.
* **Simple Configuration via a `Set` Node:** No custom nodes needed! Just add a `Set` node named `API_DOCS` to any workflow you want to document and fill in a simple JSON structure.
* **Rich HTML Output:** Dynamically generates a single, responsive, dark-mode HTML page that looks professional right out of the box.
* **Interactive UI:** Uses Bootstrap accordions, allowing users to expand and collapse each endpoint to keep the view clean and organized.
* **Developer-Friendly:** Automatically generates a ready-to-use `cURL` command for each endpoint, making testing and integration incredibly fast.
* **Zero Dependencies:** The entire solution runs within n8n. No need to set up or maintain external documentation tools like Swagger UI or Redoc.

### Setup Instructions:

This solution has two parts: configuring the workflows you want to document, and setting up this generator workflow.

**Part 1: In Each Workflow You Want to Document**

1.  Next to your `Webhook` trigger node, add a **`Set`** node.
2.  Change its name to **`API_DOCS`**.
3.  Create a single variable named `jsonOutput` (or `docsData`) and set its type to `JSON`.
4.  Paste the following JSON structure into the value field and customize it with your endpoint's details:

```json
{
  "expose": true,
  "webhookPath": "PASTE_YOUR_WEBHOOK_PATH_HERE",
  "method": "POST",
  "summary": "Your Endpoint Summary",
  "description": "A clear description of what this webhook does.",
  "tags": [
    "Sales",
    "Automation"
  ],
  "requestBody": {
    "exampleKey": "exampleValue"
  },
  "successCode": 200,
  "successResponse": {
    "status": "success",
    "message": "Webhook processed correctly."
  },
  "errorCode": 400,
  "errorResponse": {
    "status": "error",
    "message": "Invalid input."
  }
}
```

**Part 2: In This Generator Workflow**

1.  `n8n API` Node: Configure the `GetWorkflows` node with your n8n API credentials. It needs permission to read workflows.

2.  `Configs` Node: Customize the main settings for your documentation page, like the title (`name_doc`), version, and a short description.

3.  **Webhook Trigger:** The `Webhook` node at the start (default path is `/api-doc`) provides the final URL for your documentation page. Copy this URL and open it in your browser.

**Required Credentials:**
n8n API Credentials: To allow this workflow to read your other workflows.

## 🔗 Nodes Used

Webhook, Execute Sub-workflow, n8n, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
