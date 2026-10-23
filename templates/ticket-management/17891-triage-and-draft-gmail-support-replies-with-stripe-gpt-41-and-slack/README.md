# 🎫 Triage and draft Gmail support replies with Stripe, GPT-4.1, and Slack

> ⚡ **16 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow polls Gmail for new inbox emails, looks up the sender in Stripe to classify them as a customer or non-customer, uses OpenAI plus Google Docs playbooks to draft a reply, and posts the draft to Slack for human review while sending an immediate confirmation email.

## How it works
1. Triggers every minute when new emails arrive in Gmail and processes only messages labeled INBOX.
2. Retrieves the full Gmail message and its thread history, then formats a transcript and counts prior exchanges for escalation context.
3. Parses the sender name/email and searches Stripe for a matching customer record.
4. Fetches the appropriate Google Docs support playbook, builds a confirmation email, and sends the acknowledgement via the Gmail API.
5. Uses OpenAI (GPT-4.1-mini) to generate a structured JSON draft reply (intent, sentiment, escalation flags, and HTML email body) using the email content, thread context, and (if available) Stripe customer details.
6. Creates a Gmail draft reply in the original thread and converts the HTML draft into Slack mrkdwn.
7. Posts the draft, classification, and escalation notes to a configured Slack channel for approval.

## Setup
1. Connect credentials for Gmail (Gmail Trigger and Gmail draft/thread nodes) and Google OAuth2 for the Gmail API send requests.
2. Add Stripe API credentials and ensure the workflow can query customers by email.
3. Add Google Docs OAuth2 credentials and replace BOTH playbook document URLs with your Google Doc IDs.
4. Add an OpenAI API key (or replace the OpenAI chat model nodes with your preferred provider).
5. Add Slack credentials and replace BOTH Slack channel IDs with the channel where reviewers should receive draft notifications.
6. Update the Settings values (company name, support from-address, support email addresses list, SLA text, and escalation threshold) to match your support setup.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Google Docs, Stripe, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
