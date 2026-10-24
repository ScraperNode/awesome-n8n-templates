# 👥 Send HR job application auto-replies with Gmail and OpenAI GPT-4o

> ⚡ **5 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow monitors a labeled Gmail inbox for job application emails, uses OpenAI (GPT-4o) to draft a structured HR reply, and sends the response back to the applicant via SMTP email.

## How it works
1. Polls Gmail every minute for new emails in the specified label.
2. Checks whether the email subject contains the phrase “job application”.
3. Extracts the applicant’s reply-to address, the company recipient address, and the original subject to prepare inputs for the reply.
4. Uses OpenAI (GPT-4o) to generate a professional HR response as JSON with a reply subject and body, enforcing a structured output schema.
5. Sends the generated reply email to the applicant from the company email address.
6. Does nothing for emails that do not match the “job application” subject check.

## Setup
1. Connect your Gmail account and set the label ID (or label) that contains the incoming application emails.
2. Add your OpenAI credentials and confirm the model selection (gpt-4o) matches your account access.
3. Configure SMTP email sending credentials in the Email Send node and verify the from-address matches the mailbox that receives the applications.

## 🔗 Nodes Used

Send Email, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
