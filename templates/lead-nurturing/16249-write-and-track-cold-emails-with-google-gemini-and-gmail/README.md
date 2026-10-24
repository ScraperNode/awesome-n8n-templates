# 💬 Write and track cold emails with Google Gemini and Gmail

> ⚡ **72 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow uses an n8n Chat trigger with Google Gemini to draft a personalized cold email, sends it via Gmail with a tracking pixel, and then captures opens through a webhook that triggers an internal Gmail notification.

## How it works
1. Receives a chat message in n8n containing an action and context such as a LinkedIn URL, company profile, website, or job post.
2. Uses Google Gemini through an AI agent to generate a cold email with labeled fields for recipient name, recipient email, subject, and email body.
3. Parses the AI response into structured fields and stops with an error if the recipient email address is missing.
4. Generates a unique tracking ID and builds a tracking-pixel URL that includes the recipient email, name, and subject as query parameters.
5. Converts the email body into HTML, appends a 1×1 tracking pixel image, and sends the email to the recipient via Gmail.
6. When the recipient’s email client loads the tracking pixel, a webhook captures the request metadata, adds a timestamp, and sends an “email opened” notification to your inbox via Gmail.

## Setup
1. Add a Google Gemini (PaLM) API credential and select the model you want to use in the Google Gemini Chat Model configuration.
2. Add a Gmail OAuth2 credential for sending the outbound email and for sending the internal open-notification email.
3. Replace the placeholder text "webhook url from tracking webhook node" in the tracking URL generator with your real Tracking Webhook production URL.
4. Update the internal notification recipient address in the Gmail open-notification step and ensure your AI prompt signature ("Your Name") matches what you want to send.

## 🔗 Nodes Used

Webhook, Gmail, AI Agent, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
