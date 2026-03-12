# 🔒 Secure GET webhooks with query parameter validation for limited authentication cases

> ⚡ **50 views** · 🔒 [SecOps & Security Automation](../)

## Description

# How to secure GET Webhooks?
## What are webhooks?

Webhooks are special URLs that instantly trigger workflows when they receive an incoming HTTP request (like GET or POST). They're perfect for connecting external tools to n8n in real time.

## 🔐 Why webhooks should be protected
Unprotected webhooks are publicly accessible on the internet — anyone with the link can trigger your workflow. This can lead to spam, unwanted requests, or even data loss.

## ✅ Best Practice: Use built-in Authentication
n8n provides native authentication options for webhook nodes:
- Basic Auth
- Header Auth
- JWT Auth

These methods are **highly recommended if supported by your external app or service**. You can find them in the “Authentication” dropdown of the webhook node.

## 🛠️ When to use THIS SETUP
Sometimes, external tools don’t support custom headers or advanced auth methods — for example:
- A button click in Google Sheets
- A link shared via email or chat with a trusted partner
- IoT devices or basic web apps

In those cases, you can protect a webhook by adding a secret query parameter (e.g. ?secret=abc123xyz456...) and validating it with an IF node at the start of your workflow. 

**This way, only those requests with the secret can trigger the core elements of your workflow.**

It's a simple yet powerful way to secure GET-based workflows. Only use if better methods aren't available.

## 🔗 Nodes Used

Webhook, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
