# 🔒 Report phishing websites to Steam and CloudFlare

> ⚡ **1,713 views** · 🔒 [SecOps & Security Automation](../)

## Description

Webhook to report through Mailgun phishing websites to Steam and CloudFlare (if the domain is on CloudFlare)

You have to set the Credentials for webhook and Mailgun.

You have to set the email from for Mailgun.

This assumes it is running in n8n's Docker image where bind-tools is not readily available but installable.

## 🔗 Nodes Used

Mailgun, Start, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
