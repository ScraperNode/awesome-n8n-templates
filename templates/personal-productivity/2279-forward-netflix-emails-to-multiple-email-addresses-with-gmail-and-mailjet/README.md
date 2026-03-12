# ⚡ Forward Netflix emails to multiple email addresses with GMail and Mailjet

> ⚡ **1,770 views** · ⚡ [Personal Productivity](../)

## Description

# Who is this template for?
This workflow template is designed for everyone with a Gmail address, who wants to forward all Netflix emails, including temporary login codes, to friends and family effortlessly.

## How it works
1. Scans your Gmail inbox every minute for new e-mails from Netflix
2. Forwards all Netflix e-mails to all desired e-mail addresses via the e-mail provider Mailjet 

## Setup Steps
1. Connect your Google Mail Account to n8n following the [official n8n instructions](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/)
2. Add all recipients you want to the recipients array at the "Set all recipients" node.
3. Create and connect your Mailjet Account to n8n following the [official n8n instructions](https://docs.n8n.io/integrations/builtin/credentials/mailjet/). Note: You cannot use an Gmail e-mail address as the sender address, as mailjet does not support this. I recommend using your own email address from a custom domain. This works perfectly.

## 🔗 Nodes Used

Mailjet, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
