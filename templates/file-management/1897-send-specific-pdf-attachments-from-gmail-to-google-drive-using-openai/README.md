# 📁 Send specific PDF attachments from Gmail to Google Drive using OpenAI

> ⚡ **21,857 views** · 📁 [File Management](../)

## Description

This workflow reads PDF textual content and sends the text to OpenAI. Attachments of interest will then be uploaded to a specified Google Drive folder. For example, you may wish to send invoices received from an email to an inbox folder in Google Drive for later processing. This workflow has been designed to easily change the search term to match your needs. See the workflow for more details.

## Prerequisites

- [OpenAI credentials](https://docs.n8n.io/integrations/builtin/credentials/openai/).
- [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google/).

## How it works

1. Triggers off on the `On email received` node.
2. Iterates over the attachments in the email.
3. Uses the `OpenAI` node to filter out the attachments that do not match the search term set in the `Configure` node. You could match on various PDF files (i.e. invoice, receipt, or contract).
4. If the PDF attachment matches the search term, the workflow uses the `Google Drive` node to upload the PDF attachment to a specific Google Drive folder.

## 🔗 Nodes Used

Read PDF, Google Drive, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
