# ⚡ Send Gmail messages with custom aliases and attachments via API

> ⚡ **972 views** · ⚡ [Personal Productivity](../)

## Description

# This n8n template allows you to send emails with a custom alias from your Gmail account
Since the native Gmail node has some limitations regarding use of email aliases, this template allows you to set up your own internal endpoint/sub-workflow to send emails as an email alias .

# How it works
This workflow uses a Code node and the Gmail API via an HTTP node to format the email content and send using an alias on your Gmail account.

# Setup instructions
1. You must have added the email address as an alias you wish to send as in your Gmail account, guide on how to do so [here](https://support.google.com/mail/answer/22370?hl=en).
2. You must have created a Gmail credential in N8N, guide on how to do so [here](https://docs.n8n.io/integrations/builtin/credentials/google/).
3. Use your Gmail OAuth Credential in the HTTP node. 
4. Use this template as an API endpoint or a sub-workflow, and send this payload to it via POST:
```
{
  "senderName": "SENDER NAME HERE",
  "fromEmail": "FROM EMAIL HERE",
  "replyTo": "REPLY TO EMAIL HERE",
  "toEmail": "jacob@vwork.digital",
  "subject": "SUBJECT LINE HERE",
  "htmlBody": "HTML BODY HERE - MUST BE JSON STRINGIFIED",
  "file_urls": [
    "FILE URLS FOR ATTACHMENTS HERE"
  ]
}
```
# Notes
Only the following are required fields:
- fromEmail
- toEmail
- subject
- htmlBody
	
# Customizing this workflow
You can easily convert this to a sub-workflow by swapping out the Webhook trigger for a "When executed by another workflow" trigger

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
