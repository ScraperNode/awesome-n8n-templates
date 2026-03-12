# ⚡ Send standardized alert emails via Gmail with custom subject and content

> ⚡ **109 views** · ⚡ [Personal Productivity](../)

## Description

This is a basic helper workflow to abstract the process of sending an alert email through Gmail.

It takes in two parameters:
- Subject
- Lines (as an array of lines)

You'll also need to fill in your email.

Notably, all emails it sends have `❗ n8n Alert: ` prefixed to the subject line, which makes them easy to identify and highlight in an email inbox.

In Gmail, this can be done by starring all messages that come in with `❗ n8n Alert:` in the subject line, then using the Priority Inbox to push starreed messages to the top.

_It's important to star the message rather than Mark As Important, because Gmail refuses to mark emails sent by automation as important._

## 🔗 Nodes Used

Gmail, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
