# 🎫 Triage support tickets with OpenRouter (OpenAI o3-mini) and ClickUp

> ⚡ **6 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow collects support tickets via an n8n form, uses OpenRouter (OpenAI o3-mini) to assess priority, severity, impact, and suggested diagnostics, and then creates a formatted task in ClickUp with the AI-generated incident details.

## How it works
1. Receives a new ticket submission through an n8n form with subject, description, company, name, and email.
2. Normalizes the submitted fields into a consistent ticket payload (customer name/email, subject, and description).
3. Validates that the ticket has a description and that the email address contains an “@” symbol.
4. Sends the ticket subject and description to OpenRouter (OpenAI o3-mini) to generate incident metadata, priority (1–4), impact, severity, affected service, and recommended diagnostics and next steps in structured JSON.
5. Creates a new task in ClickUp using the ticket subject as the task name and adding the customer details plus the AI assessment and recommendations to the task description.

## Setup
1. Create or select an n8n Form Trigger and share the form URL with users who should be able to submit tickets (configure any access restrictions as needed).
2. Add an OpenRouter credential to the OpenRouter chat model node and ensure the selected model (openai/o3-mini) is available on your account.
3. Add a ClickUp OAuth2 credential and set the target ClickUp workspace/list in the ClickUp task creation node so tickets are created in the correct location.

## 🔗 Nodes Used

ClickUp, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
