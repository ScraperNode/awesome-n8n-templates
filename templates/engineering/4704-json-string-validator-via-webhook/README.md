# ⚒️ Json string validator via webhook

> ⚡ **2,151 views** · ⚒️ [Engineering](../)

## Description

This n8n template provides a simple yet powerful utility for validating if a given string input is a valid JSON format. You can use this to pre-validate data received from external sources, ensure data integrity before further processing, or provide immediate feedback to users submitting JSON strings.

---

## 🔧 How it works
- Webhook: This node acts as the entry point for the workflow, listening for incoming POST requests. It expects a JSON body with a single property:

  - jsonString: The string that you want to validate as JSON.

- Code (JSON Validator): This node contains custom JavaScript code that attempts to parse the jsonString provided in the webhook body.

  - If the jsonString can be successfully parsed, it means it's valid JSON, and the node returns an item with valid: true.
  - If parsing fails, it catches the error and returns an item with valid: false and the specific error message.
  - This logic is applied to each item passed through the node, ensuring all inputs are validated.

- Respond to Webhook: This node sends the validation result (either valid: true or valid: false with an error message) back to the service that initiated the webhook request.

---

## 👤 Who is it for?
### This workflow is ideal for:

- Developers & Integrators: Pre-validate JSON payloads from external systems (APIs, webhooks) before processing them in your workflows, preventing errors.
- Data Engineers: Ensure the integrity of JSON data before storing it in databases or data lakes.
- API Builders: Offer a dedicated endpoint for clients to test their JSON strings for validity.
- Customer Support Teams: Quickly check user-provided JSON configurations for errors.
- Anyone handling JSON data: A quick and easy way to programmatically check JSON string correctness without writing custom code in every application.

---

## 📑 Data Structure
When you trigger the webhook, send a POST request with a JSON body structured as follows:

```
{
  "jsonString": "{\"name\": \"n8n\", \"type\": \"workflow\"}"
}
```

Example of an invalid JSON string:

```
{
  "jsonString": "{name: \"n8n\"}" // Missing quotes around 'name'
}
```

The workflow will return a JSON response indicating validity:

For a valid JSON string:

```
{
  "valid": true
}
```

For an invalid JSON string:

```
{
  "valid": false,
  "error": "Unexpected token 'n', \"{name: \"n8n\"}\" is not valid JSON"
}
```

---

## ⚙️ Setup Instructions
- Import Workflow:
  - In your n8n editor, click "Import from JSON" and paste the provided workflow JSON.

- Configure Webhook Path:
  - Double-click the Webhook node.
  - In the 'Path' field, set a unique and descriptive path (e.g., /validate-json).

- Activate Workflow:
  - Save and activate the workflow.

---

## 📝 Tips
This JSON validator workflow is a solid starting point. Consider these enhancements:

- Enhanced Error Feedback:
  - Upgrade: Add a Set node after the Code node to format the error message into a more user-friendly string before responding.
  - Leverage: Make it easier for the caller to understand the issue.

- Logging Invalid Inputs:
  - Upgrade: After the Code node, add an IF node to check if valid is false. If so, branch to a node that logs the invalid jsonString and error to a Google Sheet, database, or a logging service.
  - Leverage: Track common invalid inputs for debugging or improvement.

- Transforming Valid JSON:
  - Upgrade: If the JSON is valid, you could add another Function node to parse the jsonString and then operate on the parsed JSON data directly within the workflow.
  - Leverage: Use this validator as the first step in a larger workflow that processes JSON data.

- Asynchronous Validation:
  - Upgrade: For very large JSON strings or high-volume requests, consider using a separate queueing mechanism (e.g., RabbitMQ, SQS) and an asynchronous response pattern.
  - Leverage: Prevent webhook timeouts and improve system responsiveness.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
