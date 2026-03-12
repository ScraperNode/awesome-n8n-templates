# 🎣 Validate email format from a Wordpress form and save a contact in Mautic

> ⚡ **1,489 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

When you collect leads from a form, you need to format the incoming data such as the lead's name and also apply a basic validation of the email entered.

Lucky for us, N8N offers all of these features with simple expressions that can easily be applied to data.

This workflow aims to show how you can process your lead data before saving it in Mautic.

## How it Works

1. This workflow receives data from a Wordpress form;
2. applies name formatting and basic validation to the email;
3. Creates the contact in Mautic;
4. If e-mail is invalid, add the lead in Dot Not Contact list.

## Setup Steps

- Set up credentials when you first open the workflow. You'll need a Mautic account.
- You need to configure a form in Wordpress (Elementor, WPForms, etc.) and send it to the N8N Webhook address;
- Now map the fields you need to apply formatting and validation.
- After testing your workflow, swap the Test URL to Production URL in Discourse and activate your workflow

## 🔗 Nodes Used

Webhook, Mautic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
