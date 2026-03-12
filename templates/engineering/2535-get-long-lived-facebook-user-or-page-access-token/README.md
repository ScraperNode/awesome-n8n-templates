# ⚒️ Get long lived Facebook user or page access token

> ⚡ **3,571 views** · ⚒️ [Engineering](../)

## Description

**Facebook access tokens expire quickly, requiring regular updates for continued API access.** This workflow simplifies the process of exchanging short-lived tokens for long-lived ones, saving time and reducing manual effort.

**What this workflow does**
- Exchanges a short-lived Facebook User Access Token for a long-lived token using the Facebook Graph API.
- Optionally retrieves a long-lived Page Access Token associated with the user.
- Outputs both the user and page tokens for further use in automation or integrations.

**Setup**
**Prerequisites:**

- A valid Facebook App ID and App Secret.
- A short-lived User Access Token from the Facebook platform.
- (Optional) The App-Scoped User ID for fetching associated page tokens.

**Workflow Configuration:**
- Replace placeholder values in the "Set Parameter" node with your Facebook credentials and token.
- Run the workflow manually to generate long-lived tokens.

**Documentation Reference:**

Follow the official Facebook guide for more details: [https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived/](https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived/)

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
