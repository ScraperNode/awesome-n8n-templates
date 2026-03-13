# ⚙️ Secure GitHub webhooks with HMAC256 signature validation

> ⚡ **160 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

### Use cases 
* Ensure that the calls to the workflow's webhook are (a) originating from the correct GitHub repository and (b) haven't been tampered with.

### How it works
* When a secret is provided in a GitHub webhook configuration, a `x-hub-signature-256` header is added to the webhook.
* `Compute HMAC256` computes the HMAC256 signature similarly to how it was computed by GitHub.
* `Validate HMAC256` tests for the equality of the computed value and the value provided by the header.
  * If the values are equal then 200 is returned to GitHub and the workflow continues
  * If the values are NOT equal then 401 is returned and the workflow ends. 
  * __Note:__ The `Stop and Error` step is optional and can be removed. Removing it means that the workflow completes successfully while still returning 401 to GitHub. This means that you will not be able to easily track malicious or incorrect calls to your webhook from n8n. 

### How to use
* Add the steps (1) and (2) of the workflow to your current workflow receiving webhook calls from GitHub.
* Update the `Secret` field in the `Compute HMAC256` node with the same value as the secret stored in the `Secret` field in the GitHub webhook definition. 

### Requirements
* GitHub account and repository. 
* GitHub webhook setup with a `Secret` key. Key can be of any length and should be generated with a key or password generator. 

### Who’s it for
Developers or DevOps engineers who want to ensure secure webhook communication between GitHub and n8n.

### How to customize the workflow
* This is a building block for your own workflow. If you use this workflow as a base, replace step (3) with your own business logic. 
* You can modify the Stop and Error node to log unauthorized requests or trigger alerts. 


### ⚠️ Warning
The secret is stored in plain text in the workflow. You should take this into consideration if the workflow is committed to source control or shared in any other way.

### Need Help?
Reach out on [LinkedIn](https://www.linkedin.com/in/ytkaczyk/) or  Ask in the [Forum](https://community.n8n.io/)!

## 🔗 Nodes Used

GitHub, Webhook, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
