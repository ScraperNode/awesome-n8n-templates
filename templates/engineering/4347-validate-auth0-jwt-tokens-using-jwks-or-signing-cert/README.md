# ⚒️ Validate Auth0 JWT tokens using JWKS or signing cert

> ⚡ **1,111 views** · ⚒️ [Engineering](../)

## Description

&gt; Note: This template requires a  self-hosted community edition of n8n. Does not work on cloud.

## Try It Out
### This n8n template shows how to validate API requests with Auth0 Authorization tokens.

Auth0 doesn't work with the standard JWT auth option because:
1) Auth0 tokens use the RS256 algorithm.
2) RS256 JWT credentials in n8n require the user to use private and public keys and not secret phrase.
3) Auth0 does not give you access to your Auth0 instance private keys.


The solution is to handle JWT validation after the webhook is received using the code node.

### How it works
* There are 2 approaches to validate Auth0 tokens: using your application's JWKS file or using your signing cert.
* Both solutions uses the code node to access nodeJS libraries to verify the token.
* **JWKS**: the `JWK-RSA` library is used to validate the application's JWKS URI hosted on Auth0
* **Signing Cert**: the application's signing cert is imported into the workflow and used to verify token.
* In both cases, when the token is found to be invalid, an error is thrown. However, as we can use error outputs for the code node, the error does not stop the workflow and instead is redirected to a 401 unauthorized webhook response.
* When token is validated, the webhook response is forwarded on the success branch and the token decoded payload is attached.

### How to use
* Follow the instructions as stated in each scenario's sticky notes.
* Modify the Auth0 details with that of your application and Auth0 instance.

### Requirements
* Self-hosted community edition of n8n
* Ability to install npm packages
* Auth0 application and some way to get either the JWK url or signing cert.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
