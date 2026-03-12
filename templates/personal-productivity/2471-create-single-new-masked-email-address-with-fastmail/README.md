# ⚡ Create single new masked email address with Fastmail

> ⚡ **499 views** · ⚡ [Personal Productivity](../)

## Description

### Template Description
This n8n workflow template allows you to create a masked email address using the Fastmail API, triggered by a webhook. This is especially useful for generating disposable email addresses for privacy-conscious users or for testing purposes.

#### Workflow Details:
1. **Webhook Trigger**: The workflow is initiated by sending a POST request to a specific webhook. You can include `state` and `description` in your request body to customize the masked email's state and description.
2. **Session Retrieval**: The workflow makes an HTTP request to the Fastmail API to retrieve session information. It uses this data to authenticate further requests.
3. **Create Masked Email**: Using the retrieved session data, the workflow sends a POST request to Fastmail's JMAP API to create a masked email. It uses the provided state and description from the webhook payload.
4. **Prepare Output**: Once the masked email is successfully created, the workflow extracts the email address and attaches the description for further processing.
5. **Respond to Webhook**: Finally, the workflow responds to the original POST request with the newly created masked email and its description.

#### Requirements:
- **Fastmail API Access**: You will need valid API credentials for Fastmail configured with HTTP Header Authentication.
- **Authorization Setup**: Optionally set up authorization if your webhook is exposed to the internet to prevent misuse.
- **Custom Webhook Request**: Use a tool like `curl` or create a shortcut on macOS/iOS to send the POST request to the webhook with the necessary JSON payload, like so:
  
  ```bash
  curl -X POST -H 'Content-Type: application/json' https://your-n8n-instance/webhook/87f9abd1-2c9b-4d1f-8c7f-2261f4698c3c -d '{"state": "pending", "description": "my mega fancy masked email"}'
  ```

This template simplifies the process of integrating masked email functionality into your projects or workflows and can be extended for various use cases.

Feel free to use the companion shortcut I've also created. Please update the authorization header in the shortcut if needed.

https://www.icloud.com/shortcuts/ac249b50eab34c04acd9fb522f9f7068

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
