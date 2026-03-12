# 📁 Save email attachments to Nextcloud

> ⚡ **9,963 views** · 📁 [File Management](../)

## Description

This workflow will take all emails you put into a certain folder, upload any attachements to Nextcloud, and mark the emails as read (configurable).

Attachements will be saved with automatically generated filenames:
`2021-01-01_From-Sender-Name_Filename-of-attachement.pdf`

Instructions:
1. **Allow lodash to be used in n8n** (or rewrite the code...)
  `NODE_FUNCTION_ALLOW_EXTERNAL=lodash` (environment variable)
2. Import workflow
3. Set credentials for Email & Nextcloud nodes
4. Configure to use correct folder / custom filters
5. Activate

Custom filter examples:
- Only unread emails:
  `Custom Email Config` = `["UNSEEN"]`
- Filter emails by 'to' address:
  `Custom Email Config` = `[["TO", "example+invoices@posteo.de"]]`

## 🔗 Nodes Used

Email Trigger (IMAP), Function, Nextcloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
