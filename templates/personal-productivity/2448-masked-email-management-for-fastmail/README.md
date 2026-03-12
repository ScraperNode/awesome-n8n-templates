# ⚡ Masked email management for Fastmail

> ⚡ **561 views** · ⚡ [Personal Productivity](../)

## Description

## Template Description

This n8n workflow is designed to manage Fastmail masked email addresses using the Fastmail API. The workflow provides the following functionalities:

1. **Retrieve all masked emails**: Fetches all masked email addresses associated with the Fastmail account.
2. **Create masked email**: Allows creating a new masked email with a specified state (`pending`, `enabled`, etc.).
3. **Update masked email state**: Updates the state of a masked email such as enabling, disabling, or deleting it.
4. **Generate HTML template**: Constructs an HTML table to display the masked emails in a user-friendly format.

## Steps to Make it Work

1. **Webhook Node**: 
   - This node listens for incoming requests to manage masked emails.
   - Needs Basic Authentication credentials to secure the endpoint.

2. **Session Node**: 
   - Sends a request to obtain session information from Fastmail's API.
   - Requires an HTTP Header Auth credential with your Fastmail API token.

3. **Switch Node**: 
   - Routes the workflow based on the state of the incoming masked email request (`pending`, `enabled`, `disabled`, `deleted`).
   
4. **HTTP Request Nodes**:
   - These nodes handle various Fastmail API calls for masked emails (get, set, update, delete).
   - All HTTP Request nodes require an HTTP Header Auth credential attached, using the Fastmail API token.

5. **Set Node**: 
   - Gathers the retrieved masked email list into an array for further processing.

6. **HTML Node**: 
   - Generates an HTML template to render the masked email addresses in a table format.

7. **Respond to Webhook Node**: 
   - Sends back the HTML table to the client in response to the webhook request.

### Needed Credentials

1. **Fastmail Masked E-Mail Addresses**:
   - An API token from Fastmail's API.
   - Each HTTP call to Fastmail requires this credential for authentication.

## Note

- Ensure that you correctly configure authentication for the API calls and webhook security.
- Use your actual Fastmail API credentials with the correct scope.
- The workflow assumes that the Fastmail API is correctly configured and accessible from your n8n instance.
- Update URLs and credentials IDs according to your n8n configuration.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
