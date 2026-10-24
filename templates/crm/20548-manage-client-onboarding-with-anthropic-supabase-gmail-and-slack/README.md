# 🤝 Manage client onboarding with Anthropic, Supabase, Gmail and Slack

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow collects client intake via an n8n Form, uses Anthropic to analyze requirements and draft emails, stores onboarding data in Supabase, creates a Google Drive folder, and sends Gmail and Slack notifications, then follows up until a Supabase checklist is complete.

## How it works
1. Receives a new submission from an n8n Form with the client’s company, contact details, requested service, and requirements.
2. Normalizes and cleans the submitted fields (for example, trimming text, formatting the website URL, and standardizing the email address).
3. Uses Anthropic to summarize the request, infer priority, and list any missing information needed to start.
4. If required fields are missing, sends the client a Gmail message requesting the missing details and stops the onboarding flow.
5. If the submission is complete, creates a client record and an onboarding checklist in Supabase, creates a client folder in Google Drive, and uses Anthropic to generate a personalized welcome email.
6. Sends the welcome email via Gmail, posts the new onboarding summary to a Slack channel, and updates the client status in Supabase.
7. Waits for the configured delay, checks the Supabase onboarding checklist, and either marks the client as completed and notifies Slack or emails a Gmail reminder listing the remaining checklist items.

## Setup
1. Connect Supabase credentials and create/configure the `clients` and `onboarding_checklists` tables with the fields used by the workflow.
2. Connect Anthropic credentials (via the Anthropic chat model) for requirement analysis and welcome-email drafting.
3. Connect Gmail OAuth2 credentials for sending the welcome and reminder emails.
4. Connect Slack OAuth2 credentials and set the target channel (default is `client-onboarding`).
5. Connect Google Drive OAuth2 credentials and update the parent “Clients” folder ID used to create each client folder.
6. Set your agency name in the data-cleaning step and adjust the wait duration/checklist items to match your onboarding process.

## 🔗 Nodes Used

Slack, Google Drive, Gmail, Supabase, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
