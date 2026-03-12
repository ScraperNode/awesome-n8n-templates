# 📱 Automated email marketing campaign workflow

> ⚡ **6,555 views** · 📱 [Social Media & Email Marketing](../)

## Description

This n8n workflow demonstrates how to automate a large-scale personalized promotional email campaign, leveraging artificial intelligence to generate unique content for each recipient.

Save time and increase the effectiveness of your marketing campaigns by allowing AI to handle the creation of personalized content and email sending.

## How it works:
The workflow fetches recipient data from a Google Sheets document.
It validates email addresses and checks if recipients haven't been contacted before.
For each valid recipient, the AI agent (using GPT-3.5) generates a personalized email including the recipient's name, product introduction, exclusive offer, and a unique promotional link.
The personalized email is sent via SMTP to the recipient.
The workflow updates the Google Sheet to mark the recipient as contacted.
A random delay is introduced between emails to mimic natural sending patterns and avoid triggering spam filters.

## Requirements:
Google Sheets account for storing and managing recipient data.
OpenAI account for access to the GPT-3.5 model.
SMTP server for sending emails.

## Customizing the workflow:
This example focuses on sending personalized promotional emails, but it could be extended to include follow-up sequences, tracking email opens and clicks, or integrating with a CRM system for more comprehensive customer management.

## 🔗 Nodes Used

Send Email, Google Sheets, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
