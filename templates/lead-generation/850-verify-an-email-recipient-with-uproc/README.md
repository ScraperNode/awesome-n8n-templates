# 🎣 Verify an email recipient with uProc

> ⚡ **1,049 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Do you want to avoid bounces in your Email Marketing campaigns? 

This workflow verifies emails using the [**uProc.io email verifier**](https://app.uproc.io/#/tools/processor/check/email/exists).

![workflow-screenshot](fileId:352)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

Node "Create Email Item" can be replaced by any other supported service with email value, like Mailchimp, Calendly, MySQL, or Typeform.

The "uProc" node returns a status per checked email (deliverable, undeliverable, spamtrap, softbounce,...). 

"If" node checks if "deliverable" status exists. If value is not present, you can mark email as invalid to discard bounces. If "deliverable" status is present, you can use email in your Email Marketing campaigns.

If you need to know detailed indicators of any email, you can use the tool "Communication" > "Check Email Exists (Extended)" to get advanced information.

## 🔗 Nodes Used

Function Item, Start, uProc

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
